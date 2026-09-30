// Run after `npm run build`: node --test tests/contact.test.mjs
// Starts `next start` with a local mock standing in for Resend, so no real
// email is sent and no credentials are needed. This proves our request shape
// and error handling, NOT real Resend delivery.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import test, { after, before } from "node:test";
import { buildEmail, rateLimited, validateContact } from "../src/lib/contact.ts";

const valid = { name: " Ada ", email: "ada@example.com", problem: "I need a booking system built.", company: "", budget: "", timeline: "" };

test("validation: accepts and trims valid input", () => {
  const r = validateContact(valid);
  assert.ok(r.ok);
  assert.equal(r.data.name, "Ada");
});
test("validation: rejects empty required fields and bad email", () => {
  const r = validateContact({ name: "", email: "nope", problem: "short" });
  assert.ok(!r.ok);
  assert.ok(r.errors.name && r.errors.email && r.errors.problem);
});
test("email: subject and body fields", () => {
  const r = validateContact(valid);
  const { subject, text } = buildEmail(r.data, new Date("2026-01-01T00:00:00Z"));
  assert.equal(subject, "Portfolio enquiry — Ada");
  for (const s of ["Name: Ada", "Email: ada@example.com", "Budget: Not specified", "Received: 2026-01-01T00:00:00.000Z"]) assert.ok(text.includes(s), s);
});
test("email: header injection is neutralised", () => {
  const r = validateContact({ ...valid, name: "Ada\r\nBcc: x@y.z" });
  assert.ok(!buildEmail(r.data).subject.includes("\n"));
});
test("attribution: safe context is appended at the bottom, empty fields omitted", () => {
  const r = validateContact({ ...valid, attribution: { utm_source: "linkedin", utm_medium: "outreach", utm_campaign: "saas_agencies", landing_page: "/api-integration-developer", current_page: "/", referrer_domain: "LinkedIn.com", posthog_session_id: "0199abcd-1234-7abc-8def-0123456789ab" } });
  assert.ok(r.ok);
  const { text } = buildEmail(r.data);
  assert.ok(text.indexOf("Project need:") < text.indexOf("Acquisition context"));
  for (const t of ["Source: linkedin", "Medium: outreach", "Campaign: saas_agencies", "Landing page: /api-integration-developer", "Contact page: /", "Referrer: linkedin.com", "PostHog session: 0199abcd-1234-7abc-8def-0123456789ab"]) assert.ok(text.includes(t), t);
  assert.ok(!text.includes("Term:") && !text.includes("Content:"));
});
test("attribution: absent or hostile values never reject the enquiry and never reach the email", () => {
  const none = validateContact(valid);
  assert.ok(none.ok);
  assert.ok(!buildEmail(none.data).text.includes("Acquisition context"));
  const bad = validateContact({ ...valid, attribution: { utm_source: "<script>alert(1)</script>", utm_campaign: "x".repeat(500), landing_page: "//evil.com/x", referrer_domain: "a b\nBcc: x", posthog_session_id: "../../etc", first_touch_at: "yesterday" } });
  assert.ok(bad.ok);
  assert.ok(!buildEmail(bad.data).text.includes("Acquisition context"));
  const worse = validateContact({ ...valid, attribution: "not-an-object" });
  assert.ok(worse.ok);
  assert.ok(!buildEmail(worse.data).text.includes("Acquisition context"));
});
test("rate limiter blocks the 6th hit", () => {
  let last;
  for (let i = 0; i < 6; i++) last = rateLimited("k", 1000 + i);
  assert.equal(last, true);
});

const PORT = 3177, MOCK = 3178;
let server, mock, mockMode = 200, received = [];
const post = (body, headers = {}) => fetch(`http://localhost:${PORT}/api/contact`, { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: typeof body === "string" ? body : JSON.stringify(body) });
const start = (env) => new Promise((resolve) => {
  const p = spawn("npx", ["next", "start", "-p", String(PORT)], { env: { ...process.env, ...env }, stdio: "pipe" });
  p.stdout.on("data", (d) => String(d).includes("Ready") && resolve(p));
});

before(async () => {
  mock = createServer((req, res) => { let b = ""; req.on("data", (c) => (b += c)); req.on("end", () => { received.push({ auth: req.headers.authorization, body: JSON.parse(b) }); res.statusCode = mockMode; res.end("{}"); }); }).listen(MOCK);
  server = await start({ RESEND_API_KEY: "test_key", CONTACT_FROM_EMAIL: "Portfolio <c@example.com>", CONTACT_TO_EMAIL: "me@example.com", RESEND_API_URL: `http://localhost:${MOCK}` });
});
after(() => { server?.kill(); mock?.close(); });

test("endpoint: success forwards to Resend with reply_to", async () => {
  const r = await post(valid, { "x-forwarded-for": "1.1.1.1" });
  assert.equal(r.status, 200);
  const sent = received.at(-1);
  assert.equal(sent.auth, "Bearer test_key");
  assert.deepEqual(sent.body.to, ["me@example.com"]);
  assert.equal(sent.body.reply_to, "ada@example.com");
  assert.equal(sent.body.subject, "Portfolio enquiry — Ada");
});
test("endpoint: invalid email -> 422", async () => {
  const r = await post({ ...valid, email: "bad" }, { "x-forwarded-for": "2.2.2.2" });
  assert.equal(r.status, 422);
  assert.ok((await r.json()).fields.email);
});
test("endpoint: empty required -> 422", async () => {
  assert.equal((await post({}, { "x-forwarded-for": "2.2.2.3" })).status, 422);
});
test("endpoint: honeypot -> fake success, nothing sent", async () => {
  const n = received.length;
  const r = await post({ ...valid, website: "http://spam" }, { "x-forwarded-for": "3.3.3.3" });
  assert.equal(r.status, 200);
  assert.equal(received.length, n);
});
test("endpoint: upstream failure -> 502", async () => {
  mockMode = 500;
  const r = await post(valid, { "x-forwarded-for": "4.4.4.4" });
  mockMode = 200;
  assert.equal(r.status, 502);
});
test("endpoint: bad JSON -> 400, foreign origin -> 403", async () => {
  assert.equal((await post("{oops", { "x-forwarded-for": "5.5.5.5" })).status, 400);
  assert.equal((await post(valid, { origin: "https://evil.example", "x-forwarded-for": "5.5.5.6" })).status, 403);
});
test("endpoint: rate limit -> 429", async () => {
  let status;
  for (let i = 0; i < 7; i++) status = (await post(valid, { "x-forwarded-for": "6.6.6.6" })).status;
  assert.equal(status, 429);
});
test("endpoint: missing credentials -> 503, never fake success", async () => {
  server.kill();
  server = await start({ RESEND_API_KEY: "", CONTACT_FROM_EMAIL: "" });
  const r = await post(valid, { "x-forwarded-for": "7.7.7.7" });
  assert.equal(r.status, 503);
});
