# Launch Checklist — khelifi-salmen.com

Goal: take the redesigned Next.js portfolio live today at **https://khelifi-salmen.com**.

Legend: `[ ]` todo · **OWNER** = only you can do it (dashboard/DNS/secrets) · **CLAUDE** = I can do it in the repo · verify each before moving on.

---

## 0. Where things stand (read first)

- The full redesign (theme system, focused homepage, résumé, case studies, blog system) is committed on branch **`stitch-redesign`** and **builds clean** (`npm run build`, 27/27 routes).
- **It is all LOCAL and unpushed.** `stitch-redesign` has no upstream. Nothing is live yet.
- Host is **Netlify** with the Next.js plugin (SSR). Production branch is **`main`**. Domain is **khelifi-salmen.com**.
- Two `netlify.toml` files exist: `nextjs-portfolio/netlify.toml` (the real Next build: `npm run build`, publish `.next`, `@netlify/plugin-nextjs`) and root `netlify.toml` (PostHog `/ingest` proxy). Which one Netlify uses depends on the **Base directory** set in the Netlify site — confirm in step 3.

---

## 1. Pre-launch QA gate (do NOT launch until all pass) — CLAUDE + OWNER

- [ ] **CLAUDE** — `cd nextjs-portfolio && npx tsc --noEmit` clean, `./node_modules/.bin/eslint "src/**/*.{ts,tsx}"` exit 0, `npm run build` clean (27 routes). (Currently passing.)
- [ ] **CLAUDE/OWNER** — Live-view every key route in the browser, both Light and Dark themes: `/`, `/work`, `/resume`, `/blog`, `/projects/luxe-spa`, `/projects/anlingo`, `/projects/chaktech`, and one thin project. No console errors, no broken images, no horizontal scroll.
- [ ] **OWNER** — Mobile check (real phone or 390px): nav, theme switcher, case-study TOC, résumé.
- [ ] **CLAUDE/OWNER** — `/resume` **print preview**: light background, no nav/controls, links show URLs, fits ~1-2 pages. Confirm `/salmen-khelifi-cv.pdf` downloads.
- [ ] **OWNER** — Draft blog post stays hidden: `/blog` shows the empty state, `/blog/mongodb-to-postgres-zero-data-loss-migration` returns 404, sitemap has no draft URL.
- [ ] **OWNER** — Contact actions work: "Let's Talk" / "Book a call" → your Cal.com link; "Email Me" → mailto opens.

## 2. Content honesty gate (must clear before public) — OWNER

These are tracked in `docs/CONTENT_NEEDED.md`. The site is built to HIDE missing facts, so none of these BLOCK launch, but confirm you're comfortable publishing:

- [ ] **OWNER** — "4.9/5, 8 reviews on Freelancer.com" appears on the homepage + résumé. You confirmed it's accurate — make sure your public Freelancer profile still shows it (the number is linked to the profile).
- [ ] **OWNER** — Luxe Spa has **no Live Demo button** (old link was localhost). Either provide a real public URL or leave it hidden (fine to launch without).
- [ ] **OWNER** — Noxivo Live Demo points to `noxivo.pro`. Confirm that's the correct public domain (your founder notes use `noxivo.app`). Fix or leave.
- [ ] **OWNER** — No owned product implies users/revenue (kept engineering-only). Confirm nothing reads as an overclaim to you.

## 3. Ship the code — CLAUDE (push) + OWNER (dashboard)

- [ ] **CLAUDE** — Push `stitch-redesign` to origin: `git push -u origin stitch-redesign`. (I will NOT push without your go-ahead.)
- [ ] **OWNER** — Decide the merge path: open a PR `stitch-redesign → main` and merge, **or** tell me to merge locally and push `main`. Netlify auto-deploys `main`.
- [ ] **OWNER** — In the Netlify site settings, confirm **Base directory = `nextjs-portfolio`**, **Build command = `npm run build`**, **Publish = `.next`**, and the **@netlify/plugin-nextjs** plugin is enabled. (If base dir is the repo root instead, the build will fail — this is the most likely launch snag.)
- [ ] **OWNER** — Reconcile the two `netlify.toml` files: if base dir is `nextjs-portfolio`, the root PostHog-proxy `netlify.toml` will NOT be applied — decide whether the `/ingest` proxy needs to move into `nextjs-portfolio/netlify.toml` or you accept PostHog loading direct.
- [ ] **OWNER** — Set any required **environment variables** in Netlify (PostHog project key/host for `scripts/inject-posthog.mjs`, plus anything the build reads). Verify the deploy preview builds green.

## 4. Domain + DNS — OWNER

- [ ] **OWNER** — Check where **khelifi-salmen.com** currently points. The legacy static site deploys to **GitHub Pages** (`.github/workflows/static.yml`); if the apex domain still points at GitHub Pages, you must repoint it to Netlify (Netlify DNS or an A/ALIAS/CNAME to your Netlify site) so the Next app becomes the live site.
- [ ] **OWNER** — In Netlify, add `khelifi-salmen.com` (and `www`) as custom domains; provision the HTTPS/SSL certificate.
- [ ] **OWNER** — Decide the fate of the legacy static site (retire the GitHub Pages deploy, or keep it on a subdomain) so the two don't fight over the apex.

## 5. Post-deploy smoke test (on the LIVE domain) — OWNER

- [ ] **OWNER** — Load `https://khelifi-salmen.com` — correct theme on first paint (no flash), no console errors.
- [ ] **OWNER** — Hit `/resume`, `/work`, `/blog`, a case study, and a bad URL (`/projects/nope`) → 404 page.
- [ ] **OWNER** — `https://khelifi-salmen.com/sitemap.xml` and `/robots.txt` load; sitemap lists real routes, no draft blog URL.
- [ ] **OWNER** — Share-preview check: paste the URL into a Slack/LinkedIn/X composer — the OpenGraph title/description/image render.
- [ ] **OWNER** — PostHog receiving events (if analytics matter for launch).

---

## Nice-to-have, NOT launch blockers (can ship after)

These are polish items in progress; the site is launchable without them:

- Light-mode contrast + a11y + SEO audit (Codex report `tasks/audit-contrast-a11y-seo.md`) — apply the High findings soon after launch.
- Case-study "project snapshot" band surfacing the verified role/ownership/timeframe (Stage 5).
- Blog related-content rendering + the three draft article structures (Stage 7).
- Structured data extras (BreadcrumbList, per-project CreativeWork).
- Real demo media from `portfolio-demos/` once you finish assembling it (missing images already fall back to blur placeholders, so nothing is broken).

---

## Fastest path to live today (summary)

1. I run the QA gate (step 1) and confirm green.
2. You clear the content honesty gate (step 2) — a quick read-through.
3. Say the word: I `git push -u origin stitch-redesign` and (your call) merge to `main`.
4. You confirm Netlify base dir/build/env (step 3) and repoint DNS if needed (step 4).
5. Netlify deploys `main`; you run the live smoke test (step 5).

The only parts I cannot do for you are the Netlify dashboard settings, environment variables, and DNS — everything in the repo I can handle on your go-ahead.
