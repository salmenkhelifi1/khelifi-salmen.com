# PostHog Free-Feature Audit + Error Tracking (2026-09-30)

Separate from baseline docs — does not redefine events, funnels, dates, or exclusions.
Baseline unchanged: 2026-09-30 07:32 UTC → 2026-10-14 07:32 UTC.

## Official docs used

- https://posthog.com/docs/error-tracking/installation/nextjs (client autocapture + error.tsx/global-error.tsx + posthog-node + instrumentation.ts onRequestError)
- https://posthog.com/docs/error-tracking/upload-source-maps/nextjs (manual: @posthog/nextjs-config, env-gated)
- https://posthog.com/docs/libraries/next-js (init, proxy)
- https://posthog.com/docs/advanced/proxy/netlify, /managed-reverse-proxy, /nextjs
- https://posthog.com/docs/session-replay/privacy
- https://posthog.com/docs/web-analytics/conversion-goals
- https://posthog.com/docs/model-context-protocol
- https://posthog.com/pricing (free limits verified 2026-09-30)

## Integration audit (code as of this pass)

- Single init (instrumentation-client.ts), no duplicates, no identify(), capture_pageview once. No pageview duplication.
- Proxy /ingest (rewrites + netlify.toml 200s) verified live. CSP allows PostHog + worker-src. No public source maps.
- Privacy: maskAllInputs, ph-no-capture form block, no network body/headers, URL redaction, before_send PII guard. Replay DOM proof: 1625 text nodes public copy, zero emails, zero recorded input values.
- Problems found: (1) error tracking absent ($exception=0); (2) no server SDK; (3) no source-map pipeline. All fixed below. No PII/CSP/proxy problems.

## Error Tracking (implemented, pending deploy)

- Client: capture_exceptions already on + new src/app/global-error.tsx → captureException (message+stack only).
- Server: new src/lib/posthog-server.ts singleton (absolute host; /ingest is browser-only) + instrumentation.ts onRequestError (nodejs runtime, cookie distinct_id, bodies never attached).
- /api/contact: Resend rejection/exception → reportServerError(code + status only). Validation/rate-limit paths untouched; contact_form_failed business event preserved.
- Activation timestamp: first $exception from www.khelifi-salmen.com after Netlify deploy (code not yet deployed).
- QA: no test code added. Salmen post-deploy console one-liner: `posthog.captureException(new Error('qa-error-tracking-probe'))` then tell auditor to verify + exclude.
- Project-settings toggle: verify exception autocapture ON in Error tracking settings (UI).

## Source maps (code-ready, key-gated)

- @posthog/nextjs-config wraps next.config only when POSTHOG_API_KEY present; else byte-identical build. Needs Netlify env POSTHOG_API_KEY (personal key, error-tracking write) + POSTHOG_PROJECT_ID=252702 — Salmen authorization required. deleteAfterUpload keeps maps private.

## Free-feature matrix

- Web Analytics: USE NOW (live).
- Product Analytics: USE NOW (live).
- Session Replay: USE NOW (live, privacy-verified at data level; 1-min UI watch pending Salmen).
- Error Tracking: USE NOW (implemented, pending deploy + probe).
- Paths: USE NOW (insight live).
- Heatmaps: USE NOW for viewing via toolbar (autocapture data, no code change); no new instrumentation during baseline.
- Web Vitals: USE NOW (captured; usable per page/device).
- Conversion goals: USE NOW (needs 6 Salmen UI clicks, no API).
- Logs: SKIP (Netlify logs suffice; no extra value now).
- Feature Flags: SKIP (no rollout need).
- Experiments: SKIP (baseline + low traffic).
- Surveys: LATER (post-baseline exit question only).
- AI/Replay Vision/self-driving: SKIP (credits/consent/cost; revisit post-baseline).
- MCP: LATER (Salmen terminal + OAuth; non-blocking).

## Free-tier safety (verified 2026-09-30)

Limits: analytics 1M events/mo, replay 5K/mo, errors 100K/mo, logs 10GB/mo, flags 1M/mo. Org has no customer/billing account → cannot be charged; free plan drops over-limit events. Usage: dozens of events/day — orders of magnitude below limits. Retention note: free = 1yr events, 1mo recordings, 14d logs.

## Alerts

Insight-subscription API present (free). Configure in UI post-deploy: new/unhandled $exception alert scoped $host=portfolio, excluding QA/internal_test. No validation-error alerts.

## Replay→error workflow

Error Tracking issue → linked events/sessions → "View recording". Documented; usable after first exception.
