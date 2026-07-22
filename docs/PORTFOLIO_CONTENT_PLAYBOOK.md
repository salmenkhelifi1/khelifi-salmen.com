# Portfolio Content Playbook

Author-facing guide to publishing on `khelifi-salmen.com`. Everything here is a **content file**, not a code change — you never need to touch a React component to add a case study narrative or a blog post.

## Golden rule: no invented facts

Every public claim on this site — a metric, a technical decision, an outcome — must trace to something real: `nextjs-portfolio/src/data/projects.ts`, the founder-brain records, or your own reviewed write-up. If a detail isn't documented yet, write `[OWNER-TODO: ...]` inline instead of guessing. This has already caught one real issue in this pipeline (see "Lessons learned" below) — take it seriously.

---

## Adding a blog post

1. Copy the template:
   ```bash
   cp nextjs-portfolio/content/blog/_template.mdx nextjs-portfolio/content/blog/<your-slug>.mdx
   ```
2. Fill in the frontmatter. Required: `title`, `slug` (must match the filename), `excerpt`, `status`, `category`, `author`. The rest (`tags`, `featured`, `cover`/`coverAlt`, SEO fields, `relatedCaseStudies`) are optional — omit rather than fake them.
   - `status` is one of `draft` / `published` / `archived`. **Only `published` posts appear anywhere public** (index, sitemap, RSS-if-added, related-content, search metadata). Keep new posts as `draft` while writing.
   - `readingTime` is never hand-authored — it's computed from the body at build time.
   - If you add `cover`, you must also add `coverAlt`. No cover is fine; a cover without alt text is not.
3. Put any images in `nextjs-portfolio/public/images/blog/<slug>/`.
4. Write the body in MDX. Available components (registered globally, no import needed): `Callout`, `DecisionCard`, `MetricCard`, `AnnotatedImage`, `MdxGallery`, `TradeOffTable`, `Timeline`, `Quote`, `MdxArchitectureNote`, `TechnicalNote`, `CodeBlock`.
5. Preview locally (see "Preview & publish commands" below).
6. To publish: set `status: "published"` and add `publishedAt: "YYYY-MM-DD"`. Re-run the build. The post now appears on `/blog`, in the sitemap, and in its JSON-LD Article schema.

## Adding a case-study narrative (rich supplement to an existing project)

Case studies themselves are **not** MDX — `src/data/projects.ts` stays the single source of truth for a project's title, category, screenshots, tech stack, and challenges, because that file also drives `/work`, the sitemap, JSON-LD, and the résumé's selected projects. What you *can* add is an optional MDX "narrative" section that gets inserted into an existing project's page for deeper technical storytelling.

1. Confirm the project already exists in `nextjs-portfolio/src/data/projects.ts` and note its exact `slug`.
2. Copy the template:
   ```bash
   cp nextjs-portfolio/content/case-studies/_template.mdx nextjs-portfolio/content/case-studies/<project-slug>.mdx
   ```
3. Set `projectSlug` to the exact slug from step 1 — this is validated at build time; a typo fails the build loudly instead of silently.
4. Set `placement` to where the narrative should be inserted: `after-solution`, `after-architecture`, `after-key-product-flows`, `after-engineering-decisions` (default), or `before-gallery`.
5. Set `toc` if you want the narrative's headings to appear in the page's sticky table of contents.
6. Write the narrative using the same MDX components listed above. **Every technical claim must trace to real, already-documented facts about that project** — do not invent implementation detail that sounds plausible but isn't verified.
7. Projects with no narrative file render exactly as they do today — adding this system changed nothing for the other 14 case studies.
8. Preview `/projects/<project-slug>` locally, then build.

## Preview & publish commands

Port `3100` may be occupied by a live preview session or an SSH tunnel — use `3101` for your own preview to avoid colliding:

```bash
cd nextjs-portfolio
PORT=3101 npm run dev
# open http://localhost:3101
```

Before committing, run all three checks:

```bash
cd nextjs-portfolio
npx tsc --noEmit
./node_modules/.bin/eslint "src/**/*.{ts,tsx}"
npm run build
```

> `npm run lint` is broken in this environment (a pnpm dependency-status wrapper fails before ESLint runs) — always use the direct `./node_modules/.bin/eslint` invocation above instead.

If a content self-check script exists (`npm run check:content`), run it too — it validates every MDX file parses, blog filenames match their `slug`, published posts have `publishedAt`, covers have alt text, and related-content slugs actually exist.

## Content model reference

### Blog frontmatter (`nextjs-portfolio/src/lib/content/schemas.ts`)

| Field | Required | Notes |
|---|---|---|
| `title` | yes | |
| `slug` | yes | kebab-case, must match filename |
| `excerpt` | yes | 1-2 honest sentences |
| `status` | yes | `draft` \| `published` \| `archived` |
| `category` | yes | e.g. "Frontend and Architecture" |
| `author` | yes | fixed to `"Salmen Khelifi"` |
| `publishedAt` / `updatedAt` | recommended | ISO date, required once published |
| `tags` | optional | array, defaults empty |
| `featured` | optional | defaults `false` |
| `cover` / `coverAlt` | optional together | alt required if cover present |
| `seoTitle` / `seoDescription` / `canonicalUrl` | optional | fall back to title/excerpt/`/blog/<slug>` |
| `relatedCaseStudies` | optional | array of real `projects.ts` slugs |
| reading time | — | derived, never authored |

### Case-study narrative frontmatter

| Field | Required | Notes |
|---|---|---|
| `projectSlug` | yes | must match a real `projects.ts` slug |
| `placement` | yes | one of the 5 insertion points listed above; defaults `after-engineering-decisions` |
| `toc` | optional | `[{ id, label }]` merged into the page's sticky TOC |

## System architecture (why it's built this way)

- **Case studies** stay in typed `projects.ts` rather than MDX because that file already drives four other surfaces (case-study route, `/work`, sitemap, résumé). Migrating it to MDX risked drift across all four for no real benefit — the actual gap was *rich long-form narrative*, not the project's canonical facts. So narrative got layered on top instead.
- **Blog posts** are plain MDX files because there's no equivalent canonical-data pressure — a post's frontmatter IS its source of truth.
- **MDX pipeline**: native `@next/mdx` (matches Next 16 App Router / Turbopack), with `gray-matter` for frontmatter parsing and `zod` for validation. No CMS, no generated-content build tool — the smallest thing that works for a one-owner portfolio.
- **Draft safety**: every public surface (index, `generateStaticParams`, sitemap, JSON-LD) reads through one function, `getPublishedPosts()`. There is exactly one place a leak could happen; audit that function if something looks wrong.

## Lessons learned (keep reading this before publishing)

The first draft article generated for this pipeline ("MongoDB to PostgreSQL") included a specific 4-step migration methodology — schema mapping approach, validation stages, cutover checks — that was **never actually documented**. Only the headline fact ("live migration, zero data loss") was real. This was caught in review before anything published, and the invented detail was replaced with an honest statement plus an `[OWNER-TODO]` marker.

Takeaway: plausible-sounding technical detail is not the same as verified fact. When writing or reviewing any case study or article, check every concrete claim against `projects.ts` or your own memory of what actually happened — not against what "sounds right" for the story.
