# Remaining delegations (queued) — survives a session stop

Two waves are running NOW in parallel (disjoint files):
- **Codex** → full SEO (search + AI): sitemap, robots.ts, llms.txt, schema.ts JSON-LD (BreadcrumbList / CreativeWork per project), layout/work/blog metadata, canonicals, OG/Twitter. Owns `[slug]` pages' `generateMetadata` + JSON-LD ONLY.
- **Antigravity** → contrast + a11y: `globals.css` (light `--accent`→#1b64d8, `--color-success`→#047857, new `--text-on-accent`, new `--border-control`), heading levels, `aria-current`, touch targets, theme-switcher→button+aria-pressed, résumé star aria + `<cite>`→`<footer>`. Owns the component/shell files + résumé.

## WAVE 2 — launch AFTER the two above commit (they need the `[slug]` bodies + content/, which the SEO agent touches). Run SEQUENTIALLY or on disjoint files.

### Delegation W2-A (Antigravity) — Stage 5: case-study "project snapshot" band
File: `nextjs-portfolio/src/app/projects/[slug]/page.tsx` (body only — NOT generateMetadata/JSON-LD, SEO agent owns those) + `nextjs-portfolio/content/case-studies/luxe-spa.mdx` (fix its opening `h3`→`h2`).
Task: render a "project snapshot" band near the case-study hero from `project.snapshot` (Stage 0 added these optional fields). Show only the fields that exist (timeframe, status, role, ownership, industry, platform) — a missing field must NOT render an empty label. Verified data already present for luxe-spa, anlingo, chaktech, noxivo, adaptifit. Also apply the audit a11y items in this file: featured/challenge heading levels, `aria-current` is in ProjectToc (already handled), image alt text for the hero/preview, and start the MDX narrative at `h2`.
Locked facts: solo, pre-launch, no users/revenue for owned products; ChakTech began 2023 client work now own rebuild; keep engineering-only outcomes; no invented metrics.

### Delegation W2-B (Antigravity) — Stage 7: blog related-content + 3 draft structures
Files: `nextjs-portfolio/src/app/blog/[slug]/page.tsx` (body only — render `relatedCaseStudies`), and NEW `nextjs-portfolio/content/blog/*.mdx` drafts (status: draft — MUST stay excluded from prod).
Task: (1) render the already-validated `relatedCaseStudies` on blog post pages as links to `/projects/<slug>`, and add reverse "related article" linking where a case study has a matching post. (2) Create 3 DRAFT `.mdx` structures (status: "draft", no publishedAt) for: "How I structure multi-tenant applications without over-engineering", "What I learned migrating a live product from MongoDB to PostgreSQL", "Designing reliable AI and n8n workflows for real operations". Each: real frontmatter + a section skeleton with `[OWNER-TODO: verified fact]` markers where specifics are needed. DO NOT invent technical details, metrics, or outcomes — skeletons only, grounded in the real projects (ChakTech multi-tenant + Mongo→Postgres, n8n automation). relatedCaseStudies must reference real slugs.
Verify drafts stay hidden: `/blog` empty state unchanged, draft slugs 404, not in sitemap.

## Then (orchestrator): final validation
- Re-run tsc + eslint + build; live `/chrome` pass on `/`, `/work`, `/resume`, `/blog`, luxe-spa, anlingo, a thin project, 404 — both Light and Dark; mobile; print résumé.
- Apply any remaining audit Medium items not yet covered.
- Update `docs/` guides (Stage 9): PORTFOLIO_CONTENT_GUIDE / CASE_STUDY_GUIDE / BLOG_GUIDE if wanted.
- See `docs/CONTENT_NEEDED.md` for owner-supplied facts still outstanding (Luxe Spa live URL, noxivo.pro vs .app, per-project dates for the archive).

Verification rule for every wave: never trust an agent's self-reported "green" — re-run the gate + fact-check content against `src/data/projects.ts` / the founder record before accepting. A prior draft in this repo fabricated a migration methodology; that class of error must be caught.
