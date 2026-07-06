# Client-Trust & SEO/AEO Plan

Goal: when a prospect (from cold email / Upwork / Freelancer / Google) looks up "Salmen Khelifi", they find a credible site proving frontend, backend, architecture, DevOps, automation, and AI skills — and book a call.

## User stories
1. As a prospect who Googled "Salmen Khelifi", I find the site ranked with rich results (Person schema, reviews) so I trust it's a real professional.
2. As a prospect using ChatGPT/Perplexity/Claude to research, the AI can read llms.txt + structured content and describes Salmen's services accurately.
3. As a prospect on the site, I see real client feedback (4.9★, Freelancer.com) with names/amounts so I trust delivery ability.
4. As a prospect, I see the full skill breadth (frontend / backend / architecture / DevOps / automation / AI) organized clearly.
5. As a convinced prospect, I book a 30-min call in one click (cal.com/salmen-khelifi/30min) from anywhere on the site.

## Decisions (user-confirmed)
- Reviews: REAL Freelancer.com reviews (4.9 avg, 8 reviews) — text captured in the Codex prompt / testimonials data.
- Primary CTA: https://cal.com/salmen-khelifi/30min
- Deploy: Netlify
- Profiles: GitHub https://github.com/salmenkhelifi1 + Freelancer https://www.freelancer.com/u/khelifisalmen (confirmed URLs). LinkedIn/Upwork/X wanted but URLs NOT provided yet → leave TODO placeholders, no dead links.

## Workstreams (delegated to Codex)
1. SEO/AEO infra: metadataBase + canonical + OG/Twitter meta, sitemap.ts, robots.ts (allow AI crawlers), llms.txt + llms-full.txt, JSON-LD (Person + ProfessionalService + Review/AggregateRating on testimonials, BreadcrumbList on case studies), unique per-page metadata.
2. Trust UI: testimonials section (real reviews, platform attribution + link), expanded expertise grid (6 skills), process section.
3. Conversion: cal.com CTA in nav/hero/case-study CTAs/footer; 404 page.
4. Netlify: netlify.toml with @netlify/plugin-nextjs, redirects for old /project-*.html style URLs if any.

## Status — COMPLETE (commit 71d1c3a)
- [x] Codex implemented all 4 phases
- [x] Verified: build 0 errors, sitemap/robots/llms.txt/llms-full.txt all 200, JSON-LD valid [Person, ProfessionalService] with 4.9 rating, 3 cal.com CTAs, sections present (Client Feedback, How I Work, 6-card Expertise), 404 works
- [x] Committed: 71d1c3a

## Follow-up commits
- b5e7d29: all profiles wired (LinkedIn/FB/IG/X/Upwork) + vanity redirects (/upwork /freelancer /linkedin /github /x /call)
- d54d9cd: production polish — legacy pages retired w/ 308 redirects, favicon, OG/Twitter share images, /cv download, mobile nav, pro footer, lint 19→0

## Site is LAUNCH-READY (kept local, not pushed, per user)
Remaining = user actions after deploy:
1. Deploy to Netlify (netlify.toml ready)
2. Google Search Console: submit sitemap.xml
3. Test rich results: search.google.com/test/rich-results
4. Use vanity links in cold outreach: khelifi-salmen.com/{call,upwork,linkedin,cv}
