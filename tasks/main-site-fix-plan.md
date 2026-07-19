# Main (Live Site) Fix Plan — stopgap while new-website matures

Strategy (user decision 2026-07-06): do NOT launch new-website yet. Fix the currently-live static site on `main` so it converts clients today; keep improving `new-website` until ready, then switch.

Worktree: `../khelifi-main-fixes` (branch `main`) — new-website stays checked out in the repo.

## Fixes for main (static HTML site)
1. **Dead links**: 11 `href="#"` — wire socials to real URLs (GitHub, LinkedIn linkedin.com/in/salmen-khelifi, Facebook khelifisalmen1, Instagram khelifi.salmen, X khlifisalmen2, Upwork ~01f5b8025abe71abf2, Freelancer u/khelifisalmen) or remove.
2. **Contact consistency**: khelifisalmen9@gmail.com → contact@khelifi-salmen.com (3 places); keep phone.
3. **Positioning**: "3+ years" → "5+ years" (4 places), align titles/meta with "Full-Stack Developer & Automation Specialist".
4. **Booking CTA**: cal.com/salmen-khelifi/30min button in nav/hero/contact.
5. **SEO/AEO**: schema sameAs = all 7 profiles; sitemap.xml (static); llms.txt; robots.txt + Sitemap line.
6. **Vanity redirects** (Netlify `_redirects` file, works for static): /call /upwork /freelancer /linkedin /github /x /cv (→ khelifi_salmen.Resume_.pdf).
7. **Client feedback section**: real Freelancer.com reviews (4.9★/8) — same content as new site, styled to match old site's CSS.

## Status
- [ ] Codex implementing in worktree
- [ ] Verify: open index.html, check links/schema/redirects file
- [ ] Commit on main (user pushes/deploys when ready)

## Ongoing
- new-website branch: complete & launch-ready at d54d9cd; keep iterating until user is ready to switch.
