# PostHog 14-Day Measurement Plan

Start date: __________ (first verified production-data day; separate OUTBOUND / SEO / DIRECT-REFERRAL throughout).

Goal: MORE QUALIFIED CLIENT CONVERSATIONS, not pageviews.
The portfolio has two equal purposes: OUTBOUND credibility and INBOUND SEO client acquisition. SEO goal: QUALIFIED ORGANIC TRAFFIC -> TRUST -> CONTACT -> CLIENT.

## Daily metrics (per channel: OUTBOUND, ORGANIC SEO, REFERRAL/OTHER)

- visitors, high-intent sessions (2+ key pages OR project click OR contact CTA)
- project engagement (views + `project_card_clicked` by slug)
- contact intent (`contact_cta_clicked` + email/LinkedIn outbound clicks)
- contact starts, leads, conversion rate (leads / visitors)

## Where to read

- Dashboard `Portfolio — Client Conversion` (TRAFFIC / OUTBOUND / SEO / PROOF / CONTACT sections per ANALYTICS_EVENTS.md).
- Google Search Console (once connected): queries, impressions, clicks, CTR, position, organic landing pages. Compare impressions -> clicks -> engagement -> leads per landing page.
- Funnels: OUTBOUND, ORGANIC SEO (by landing page, referrer, device, service page, project viewed), direct, recruiter (secondary).
- Paths: after `/`, after `/work`, after case study, before `contact_form_started`, before `lead_generated`, after drop-off.
- Replays: the 6 saved playlists only. No random 3-second sessions.

## Rules

- No redesign from small samples. No surveys/experiments during baseline. One major change at a time after Day 14.
- Exclude localhost/preview/bot/Salmen-testing traffic (client opt-out + PostHog internal filters).

## Day-14 report template

Separate results into three blocks:

OUTBOUND: visits, project/proof engagement, leads (best outreach source/campaign).
ORGANIC SEO: visitors, landing pages, contact intent, leads (best organic landing page; converting vs non-converting high-traffic pages; GSC impressions/clicks/CTR/position if connected).
REFERRAL / OTHER: visitors, leads.

Then, across channels: high-intent sessions, contact starts, conversion rate, project most associated with contact intent, largest funnel drop-off.

ONE RECOMMENDED CHANGE (single variable, hypothesis, how to measure).
