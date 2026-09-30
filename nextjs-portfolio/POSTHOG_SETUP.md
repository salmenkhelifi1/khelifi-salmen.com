# PostHog Setup — Portfolio Client Conversion

## Why this exists (two equal purposes)

1. OUTBOUND CREDIBILITY: outreach -> prospect checks portfolio -> credible proof -> reply/contact.
2. INBOUND SEO CLIENT ACQUISITION: Google/Bing search -> service/article/project page -> relevant proof -> contact.

The portfolio is not only a credibility layer. Measure both funnels separately (outbound via UTMs, organic via referrer google/bing without UTM). Spec: `ANALYTICS_EVENTS.md`.

## Google Search Console is separate

PostHog does not replace Search Console. GSC = queries, impressions, clicks, CTR, position, organic landing pages. PostHog = engagement after landing, projects viewed, CTA clicks, contact starts, leads. Verify the domain in GSC (Salmen, UI) and compare per landing page: impressions -> clicks -> engagement -> leads.

Date: 2026-09-30. Stack: Next.js 16.2.2 (App Router), npm, Netlify, custom domain `www.khelifi-salmen.com`.

## Decision: stable `posthog-js` (not `@posthog/next` pre-release)

- Package: `posthog-js@1.435.1` (stable).
- Init: `instrumentation-client.ts` at repo root (official Next.js pattern).
- No `posthog.identify()` anywhere (anonymous distinct_id only). No fake IDs.
- GA4 untouched in `src/components/Analytics.tsx` (`G-8N7BGP0VPJ` default + `sendGAEvent generate_lead` kept).

## Env (never hardcode, never commit secrets)

Local `.env.local` set 2026-09-30 (US project, `/ingest` proxy). Token value not printed here.
Netlify Site settings > Environment variables still required (same three vars):
`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST=/ingest`, `NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.posthog.com`.
See `.env.example`.

## Free-tier rule (active)

All requested capabilities (Web Analytics, Product Analytics, Funnels, Paths, Heatmaps, Session Replay, Dashboards, conversion goals, MCP) are used within PostHog free tier. No paid feature enabled in code. Surveys + experiments/A-B/flags deliberately NOT implemented (baseline first per plan). If any UI step demands payment: stop and report before enabling.

## Reverse proxy decision: keep `/ingest`, drop managed (for now)

Compared 2026-09-30:
1. Managed reverse proxy — free for Cloud users, no bandwidth cost, PostHog-supported. Cost: Salmen DNS CNAME + 2–30 min provisioning + UI host change. Requires Salmen action.
2. Existing `/ingest` (Next.js rewrites + netlify.toml 200 redirects) — already implemented, zero Salmen action, works with custom domain, PostHog-unsupported self-hosted, counts against Netlify bandwidth (recordings 1–5 MB/session).

Decision: ship `/ingest` only. One implementation in code (no duplication). Revisit managed only if Netlify bandwidth or blocker-bypass becomes an issue — migration = DNS CNAME + set `NEXT_PUBLIC_POSTHOG_HOST` to proxy subdomain, no code change needed (`api_host` reads env).
Region: US Cloud (project 252702). `NEXT_PUBLIC_POSTHOG_UI_HOST=https://us.posthog.com`.

## Privacy (conservative defaults)

- `maskAllInputs: true`; contact `<form>` has `ph-no-capture` class + `blockSelector: .ph-no-capture`.
- `recordHeaders: false`, `recordBody: false`, `recordNetwork: false` (no Resend key / PII in replay).
- `maskCapturedNetworkRequestFn` redacts `token/auth/email/code` query params in replay URL bar.
- `before_send` drops `name/email/message/problem/phone` if ever passed.
- No `identify`, no cookies forwarded intentionally; internal traffic (localhost, `*.netlify.app`, `*.vercel.app`) opts out by default.
- Project-level IP handling: enable "Anonymize IPs" / discard in PostHog project settings if it does not break geo goals (Salmen decision, do in UI).
- Tracking enabled: pageview, pageleave, autocapture, sessions, referrer, UTMs, entry/exit, scroll, exceptions, performance/Web Vitals. Documented for Salmen's consent/privacy decision — no legal claims made here.

## Bot / internal filtering

- Client opts out on localhost + `*.netlify.app`/`*.vercel.app` unless `NEXT_PUBLIC_POSTHOG_ENABLED=true`.
- In PostHog UI: add internal IP/person filter + toolbar to block Salmen's testing; filter bot user-agents. No custom hacks in code.

## Official sources used

- https://posthog.com/docs/libraries/next-js (instrumentation-client, CSP, env)
- https://posthog.com/docs/advanced/proxy/nextjs (rewrites, skipTrailingSlashRedirect, middleware matcher note)
- https://posthog.com/docs/advanced/proxy/netlify (netlify.toml 200 redirects, host header, custom-domain requirement)
- https://posthog.com/docs/advanced/proxy/managed-reverse-proxy (managed option, CNAME, ui_host)
- https://posthog.com/docs/session-replay/privacy (maskAllInputs, maskTextSelector, ph-no-capture, network redaction)
- https://posthog.com/docs/web-analytics/conversion-goals (goals from custom events/actions)
- https://posthog.com/docs/model-context-protocol (MCP server `https://mcp.posthog.com/mcp`, `npx @posthog/wizard mcp add`)
- posthog-js defaults via Context7 `/posthog/posthog-js` (autocapture true, maskAllInputs true, `defaults: 2026-05-30` session_recording behavior).

## Status 2026-09-30

- Code: implemented, lint/tsc/build/seo pass, local `/` 200, `/ingest/static/array.js` 200 via rewrite, localhost opted out (no data polluted).
- Local env: set. Netlify env: PENDING (Salmen: Site settings > Environment variables, same three vars, then deploy).
- PostHog UI work pending deploy: conversion goal `lead_generated`, funnels (outbound/SEO/direct/recruiter), `Portfolio — Client Acquisition` dashboard, 6 replay playlists (specs in ANALYTICS_EVENTS.md). MCP after production verified.
