# Case-Study System + Blog — Audit & Plan (Playbook Phases 2–10)

## Phase 2–4: Audit findings (live /chrome, desktop+mobile)

### Executive assessment
Case studies read **senior for the 4 data-rich projects** (luxe-spa, anlingo, chaktech, noxivo) and **thin-but-honest** for the other 11 (graceful degradation — no fake filler, sections hidden when data absent). The system is a single ~950-line `[slug]/page.tsx` driven by typed `projects.ts`. Shared header/footer, sticky TOC, Problem→Decision→Result cards, blur-loaded gallery all working post-B+D. No blog exists.

### Strong — preserve
- Real, specific engineering stories (Zod preset seeding, Socket.io concurrency, MongoDB→Postgres migration, RBAC hierarchy) — genuine evidence, no invented metrics.
- Sticky desktop TOC + mobile collapsible; opaque shared nav; Problem→Decision→Result card model.
- `projects.ts` as single source feeding case-study routes, `/work`, sitemap, JSON-LD, résumé.

### Problems by severity
- **High** — No reusable *narrative* layer: rich long-form (annotated images, callouts, code, diagrams) isn't expressible in typed data; every richer section needs a code edit. Blocks "add a project without touching components."
- **High** — No blog at all (recruiter/credibility gap; playbook core deliverable).
- **Medium** — Case-study "metadata" (role, timeframe, status, team) not consistently surfaced in the hero; recruiter can't see ownership/role in <1 min on thin projects.
- **Medium** — `homepage.ts` still duplicates a `projects`/`featuredWork` card list vs `projects.ts` (Codex audit flagged; drift risk).
- **Low/Polish** — `<cite>` misuse on testimonials; heading-order nits; related-work uses unlabeled section.

### 1-minute test (Luxe Spa): PASS on what/why/decisions/delivered/evidence. Thin projects: FAIL on role/ownership clarity.

## Decisions locked (owner)
- Publishing: **MDX** files (rich long-form, embedded components).
- Blog content: none exists → Antigravity drafts **one real technical retrospective grounded strictly in documented Luxe Spa/ChakTech facts** (no invented metrics), marked owner-review draft. Index otherwise honest/empty-state.
- Scope: case-study system + blog **together**, one plan.
- Audience: recruiters + clients equal weight.

## Target (to be refined by Codex architecture proposal)
- **Case studies:** keep structured `projects.ts` (drives sitemap/schema/work/résumé — do NOT risk a 15-project migration) + layer optional MDX narrative body per project for rich long-form. Codex to confirm this hybrid vs full migration.
- **Blog:** new MDX pipeline. Routes `/blog`, `/blog/[slug]`. Content model per playbook Phase 8 (title/slug/excerpt/status/dates/category/tags/featured/cover/coverAlt/author/derived reading-time/SEO/related). Draft exclusion in prod. Related-content links both directions.
- **Rich components:** callout, code block, quote, decision card, metric/evidence card, annotated image, gallery, architecture diagram, trade-off table, timeline, related-content, CTA.
- **Docs/templates:** `docs/PORTFOLIO_CONTENT_PLAYBOOK.md`, `content/blog/_template.mdx`, case-study template.

## Delegation waves
1. **Codex** → architecture proposal (`tasks/codex-content-architecture.md`): MDX pipeline both systems, schemas+validation, routing, reading-time, draft handling, related-content, image handling, SEO/sitemap/RSS, migration sequence, test strategy, docs/template plan. Recommends hybrid-vs-migrate.
2. **Antigravity** → UI direction proposal (`tasks/antigravity-content-ui.md`) targeting Codex's schema: editorial blog + case-study visual system, all component states, responsive/motion/a11y.
3. Reconcile → integrated spec. Then staged implementation (delegated bulk build + orchestrator verification each stage).

## Definition of done
Playbook DoD: recruiter gets role/contribution/decisions/evidence <1 min; add case study or post via content file only; optional sections never render empty; drafts private; blog integrated visually + cross-linked; responsive + keyboard + focus + reduced-motion; SEO correct; no invented public facts; no console errors/dead links.
