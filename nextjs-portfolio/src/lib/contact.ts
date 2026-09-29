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
