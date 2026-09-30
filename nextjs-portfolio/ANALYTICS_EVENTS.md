# Analytics Events — Source of Truth

GA4 `generate_lead` kept as-is (`sendGAEvent("event","generate_lead",{form_id:"contact",page_path})` in `ContactCTA.tsx`). PostHog `lead_generated` fires on the same success branch. No duplicate custom firing beyond that intentional parity.

## portfolio_cta_clicked

- Meaning: important business CTA clicked.
- Trigger: hero (`view_selected_work`, `view_resume`, `book_call`), nav (`contact_me`), work section (`view_all_work`, `explore_all_work`), project page (`explore_all_work`).
- Allowed: `cta_name`, `placement` (hero|navigation|navigation-mobile|footer|home-work-section|project_page|work|contact|resume), `source_page`, `destination`.
- Forbidden: name/email/message/problem/phone/token.
- Impl: `src/lib/analytics.ts:trackCta` via `src/components/TrackedCta.tsx:CtaLink/BookCallLink`.
- Used in: Funnels A/B/C, dashboard CTA clicks.

## project_card_clicked

- Meaning: project interest (card → case study).
- Trigger: FeaturedProject, CompactProject, resume project entries.
- Allowed: `project_slug`, `project_name`, `source_page`.
- Forbidden: PII.
- Impl: `trackProjectCard` via `ProjectCardLink`.
- Used in: Funnels A/C, dashboard project interest by slug, recruiter path.

## resume_opened

- Meaning: recruiter/high-intent resume view.
- Trigger: hero résumé button, `/resume` nav, PDF download.
- Allowed: `placement`, `source_page`.
- Impl: `trackResumeOpened` via `ResumeLink`.
- Used in: Funnel D, dashboard resume opens.

## contact_cta_clicked

- Meaning: contact-directed CTA (subset of portfolio_cta_clicked for simple funnels).
- Trigger: auto-fired by `trackCta` when destination is `#contact`/`/#contact` or `cta_name=contact_me`.
- Allowed: `placement`, `source_page`.
- Used in: Funnels A/B/C, goals (high intent), dashboard.

## contact_form_started

- Meaning: first meaningful form interaction (once per mount).
- Trigger: `onFocus`/`onChange` in `ContactCTA.tsx`.
- Allowed: `source_page`. No field values.
- Used in: Funnels A/B, goals, drop-off analysis.

## lead_generated (PRIMARY conversion)

- Meaning: real contact API success (`{ok:true}`), same branch as GA4 `generate_lead`.
- Trigger: `ContactCTA.tsx` after `fetch("/api/contact")` ok.
- Allowed: `source_page`, `form_type` (always `contact` today).
- Forbidden: all PII, message body.
- Used in: primary goal, all funnels' terminal step, dashboard conversion rate.

## contact_form_failed

- Meaning: contact failure signal.
- Trigger: client validation fail (`validation`, no code) or API 422/4xx/5xx + `send_failed` exception path.
- Allowed: `error_type`, `status_code`. Never field values/email/name.
- Impl: `trackContactFormFailed`.

## outbound_link_clicked

- Meaning: professional outbound (linkedin/github/freelancer/upwork/fiverr/substack/youtube/instagram/x/email).
- Trigger: footer socials, resume links, header GitHub, work/resume email buttons, contact email link.
- Allowed: `destination_type`, `destination_domain`, `placement`.
- Impl: `trackOutboundLink` via `OutboundLink`.
- Used in: Funnel D (email outbound), dashboard top referrers/outbounds.

## project_case_study_viewed

- NOT implemented as custom event. `$pageview` on `/projects/:slug` is sufficient. Add only if dashboards prove insufficiency.

## Stable selectors (`data-ph-capture`)

hero-work, hero-resume, hero-book-call, home-view-all-work, nav-contact, nav-contact-mobile, nav-github, footer-book-call, footer-resume, contact-book-call, contact-email, contact-submit, work-book-call, work-email, resume-pdf-download, resume-book-call, project-book-call, project-explore-all-work, project-card-{slug}. Form root: `.ph-no-capture` (+ `#contact` scope).

## Acquisition model (two equal purposes)

The portfolio is NOT only a credibility layer. It serves two equal business purposes:
1. OUTBOUND CREDIBILITY: Salmen contacts a prospect, the prospect checks the portfolio, sees credible proof, replies or contacts Salmen.
2. INBOUND SEO CLIENT ACQUISITION: a potential client searches Google/Bing, lands on a service/article/project page, sees relevant proof, contacts Salmen.

Goal: QUALIFIED ORGANIC TRAFFIC -> TRUST -> CONTACT -> CLIENT (not traffic alone). Business goal: MORE QUALIFIED CLIENT CONVERSATIONS, not pageviews.

## Funnels (build in PostHog UI, free tier)

- OUTBOUND FUNNEL (saved): LinkedIn / email / Freelancer / direct outreach (`utm_source` in linkedin/email/freelancer/outreach) -> portfolio landing or project -> proof/case study (`project_card_clicked` or `/projects/:slug` pageview) -> `contact_cta_clicked` -> `contact_form_started` -> `lead_generated`. Breakdown: utm_campaign, project_slug. Track with UTMs where appropriate (see `UTM_TRACKING_GUIDE.md`).
- ORGANIC SEO FUNNEL (saved, required): Google/Bing organic visitor (referrer google/bing, no UTM) -> SEO landing page -> service/project/case-study engagement -> `contact_cta_clicked` -> `contact_form_started` -> `lead_generated`. Breakdowns: landing page (`$entry_pathname`), referrer, device, service page, project viewed (`project_slug`).
- DIRECT CONTACT FUNNEL: `$pageview` -> `contact_cta_clicked` -> `contact_form_started` -> `lead_generated`.
- RECRUITER FUNNEL (secondary): `$pageview` -> `resume_opened` -> professional/contact action (`outbound_link_clicked` linkedin/github/email or `contact_cta_clicked`).

## Google Search Console (separate from PostHog)

PostHog does not replace Search Console.
- Search Console answers: search queries, impressions, clicks, CTR, average position, organic landing pages.
- PostHog answers: engagement after landing, projects viewed, CTA clicks, contact starts, lead conversion.
- Combined metric: organic landing page -> organic sessions -> contact intent -> successful leads.
- When Search Console is connected, compare per landing page: impressions -> clicks -> website engagement -> leads. (Join by landing page URL; no automated PostHog-GSC link is assumed.)

## Dashboard `Portfolio — Client Conversion` (build in UI)

(Renamed from "Client Acquisition" 2026-09-30 to match the agreed dashboard name.)

TRAFFIC: visitors, sessions, bounce rate, top landing pages, source/channel, referrers, UTM source, UTM campaign.
OUTBOUND (utm_source linkedin/email/freelancer/outreach): visits, project/proof views, contact intent, leads, conversion by campaign.
SEO (section required):
- organic visitors, organic sessions
- top organic landing pages
- contact CTA rate from organic
- contact form start rate from organic
- `lead_generated` from organic
- organic visitor -> lead conversion rate
- converting landing pages
- non-converting high-traffic pages
- (with Search Console) impressions -> clicks -> engagement -> leads
PROOF/PROJECTS: `project_card_clicked`, project views, project_slug, projects viewed before contact, projects most often before `lead_generated`.
CONTACT: CTA clicks, form starts, form failures, successful leads, completion rate (leads / starts).
REFERRAL / OTHER: visitors, leads.

## SEO content priorities (commercial relevance)

Prioritize pages around Salmen's real services: Full-Stack / SaaS development; API integrations; business automation / n8n; Next.js / Node.js development; existing-product improvement; e-commerce/platform work; relevant verified case studies. Technical blog posts support these topics and link naturally to the relevant service/project pages. Do not restore quarantined/unverified blog content to raise the indexed-page count.

## Replay playlists (UI, free tier)

1. Leads (`lead_generated`). 2. Starters-no-submit (`contact_form_started` without `lead_generated`). 3. CTA-no-submit (`contact_cta_clicked` without `lead_generated`). 4. Multi-project viewers (2+ `project_card_clicked` or project pageviews). 5. Organic high-intent (organic entry + contact intent, no lead). 6. Outreach high-intent (UTM entry + contact intent, no lead). Sampling: skip bots/short sessions; keep conservative privacy config from `instrumentation-client.ts`.

## Survey / experiments (DEFERRED)

Do NOT launch surveys, A/B or flag experiments until baseline traffic exists. Survey draft (`What stopped you from getting in touch today?`) stays a plan only.

## Survey (DRAFT, do not launch)

`What stopped you from getting in touch today?` — need proof/fit/budget/timing/contact-method/something-else + free text. Target high-intent non-converters only, after baseline traffic.

## Experiments (baseline first)

Candidates: hero headline, contact CTA wording, Book-a-Call vs Contact-Me, project order, social proof, résumé placement, form length. Require hypothesis + existing funnel + sufficient traffic.
