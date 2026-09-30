import { z } from "zod";

export const BUDGETS = [
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure yet",
] as const;

// Strip control characters (keeping tab/newline) so nothing odd reaches the
// email headers or body, then trim.
function clean(value: unknown) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim()
    : value;
}

const text = (max: number) => z.preprocess(clean, z.string().max(max));

// Attribution comes from the browser, so it is never trusted: each field is
// allow-listed and length-limited, and anything that does not match is dropped
// to "" (a bad value must never reject a real enquiry).
const safe = (pattern: RegExp, max: number, lower = false) =>
  z
    .preprocess((v) => {
      const c = clean(v);
      return typeof c === "string" && lower ? c.toLowerCase() : c;
    }, z.string().max(max).regex(pattern))
    .catch("")
    .default("");
const UTM = /^[A-Za-z0-9 _.\-~+:/]{1,100}$/;
const PATH = /^\/(?!\/)[A-Za-z0-9/_.\-~%]{0,199}$/;
const HOST = /^[a-z0-9.-]{1,100}$/;
const SESSION = /^[A-Za-z0-9-]{8,64}$/;
const ISO = /^\d{4}-\d{2}-\d{2}T[\d:.]{5,16}Z$/;

export const attributionSchema = z
  .object({
    utm_source: safe(UTM, 100),
    utm_medium: safe(UTM, 100),
    utm_campaign: safe(UTM, 100),
    utm_content: safe(UTM, 100),
    utm_term: safe(UTM, 100),
    landing_page: safe(PATH, 200),
    current_page: safe(PATH, 200),
    referrer_domain: safe(HOST, 100, true),
    first_touch_at: safe(ISO, 30),
    posthog_session_id: safe(SESSION, 64),
  })
  .catch({
    utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: "",
    landing_page: "", current_page: "", referrer_domain: "", first_touch_at: "", posthog_session_id: "",
  });

export const contactSchema = z.object({
  name: z.preprocess(clean, z.string().min(1, "Enter your name.").max(100)),
  email: z.preprocess(
    clean,
    z.string().min(1, "Enter your email address.").max(200).email("Enter a valid email address."),
  ),
  company: text(200).optional().default(""),
  problem: z.preprocess(
    clean,
    z
      .string()
      .min(20, "Describe what you need in at least 20 characters.")
      .max(4000, "Keep the message under 4,000 characters."),
  ),
  budget: text(60).optional().default(""),
  timeline: text(120).optional().default(""),
  source: text(200).optional().default(""),
  // Honeypot: real visitors never fill this in.
  website: text(200).optional().default(""),
  attribution: attributionSchema.optional().default({
    utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: "",
    landing_page: "", current_page: "", referrer_domain: "", first_touch_at: "", posthog_session_id: "",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export function validateContact(raw: unknown):
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ContactErrors } {
  const parsed = contactSchema.safeParse(raw);
  if (parsed.success) return { ok: true, data: parsed.data };
  const errors: ContactErrors = {};
  for (const issue of parsed.error.issues) {
    const key = issue.path[0] as keyof ContactInput | undefined;
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return { ok: false, errors };
}

// Small block at the bottom of the email; empty fields are omitted and the
// whole block disappears when there is no context.
function attributionLines(a: ContactInput["attribution"]) {
  const rows: [string, string][] = [
    ["Source", a.utm_source],
    ["Medium", a.utm_medium],
    ["Campaign", a.utm_campaign],
    ["Content", a.utm_content],
    ["Term", a.utm_term],
    ["Landing page", a.landing_page],
    ["Contact page", a.current_page],
    ["Referrer", a.referrer_domain],
    ["First visit", a.first_touch_at],
    ["PostHog session", a.posthog_session_id],
  ];
  const present = rows.filter(([, value]) => value);
  return present.length ? ["", "---", "Acquisition context", ...present.map(([k, v]) => `${k}: ${v}`)] : [];
}

export function buildEmail(data: ContactInput, when = new Date()) {
  const line = (label: string, value: string) => `${label}: ${value || "Not specified"}`;
  return {
    subject: `Portfolio enquiry — ${data.name}`.replace(/[\r\n]+/g, " "),
    text: [
      line("Name", data.name),
      line("Email", data.email),
      line("Company / website", data.company),
      line("Budget", data.budget),
      line("Timeline", data.timeline),
      line("Source page", data.source),
      line("Received", when.toISOString()),
      "",
      "Project need:",
      data.problem,
      ...attributionLines(data.attribution),
    ].join("\n"),
  };
}

// Best-effort per-instance limiter. Serverless instances do not share memory,
// so this only blunts bursts; the honeypot and validation do the rest.
const hits = new Map<string, number[]>();
export function rateLimited(key: string, now = Date.now(), limit = 5, windowMs = 10 * 60_000) {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 1000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return recent.length > limit;
}
