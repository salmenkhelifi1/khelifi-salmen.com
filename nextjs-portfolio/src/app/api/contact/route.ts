import { NextResponse } from "next/server";
import { buildEmail, rateLimited, validateContact } from "@/lib/contact";
import { reportServerError } from "@/lib/posthog-server";
import { siteUrl } from "@/data/schema";

export const runtime = "nodejs";

const json = (body: Record<string, unknown>, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  // Same-origin only. Browsers always send Origin on cross-site POSTs.
  const origin = request.headers.get("origin");
  if (origin) {
    const allowed = [siteUrl, "https://khelifi-salmen.com", new URL(request.url).origin];
    if (!allowed.includes(origin)) return json({ ok: false, error: "forbidden" }, 403);
  }

  if (Number(request.headers.get("content-length") ?? 0) > 20_000) {
    return json({ ok: false, error: "too_large" }, 413);
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const result = validateContact(raw);
  if (!result.ok) return json({ ok: false, error: "validation", fields: result.errors }, 422);

  // Honeypot: pretend success so bots learn nothing, send nothing.
  if (result.data.website) return json({ ok: true });

  const ip = request.headers.get("x-nf-client-connection-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "rate_limited" }, 429);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@khelifi-salmen.com";
  if (!apiKey || !from) {
    console.error("[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL is not configured");
    return json({ ok: false, error: "not_configured" }, 503);
  }

  const { subject, text } = buildEmail(result.data);
  try {
    const response = await fetch(process.env.RESEND_API_URL ?? "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: result.data.email, subject, text }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("[contact] Resend rejected the request", response.status, await response.text());
      // Unexpected provider failure (not user validation): code + status only.
      await reportServerError("contact_resend_rejected", { status_code: response.status });
      return json({ ok: false, error: "send_failed" }, 502);
    }
  } catch (error) {
    console.error("[contact] Resend request failed", error);
    await reportServerError("contact_resend_exception");
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}
