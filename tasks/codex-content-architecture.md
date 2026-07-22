# Content Architecture Proposal

Branch verified with `git rev-parse --abbrev-ref HEAD`: `stitch-redesign`.

## 1. Case-study strategy recommendation

Recommend the hybrid: keep `src/data/projects.ts` as the source of truth and layer optional per-project MDX narrative bodies.

Rationale:

- `projects.ts` already drives `/projects/[slug]`, `/work`, `sitemap.ts`, `projectJsonLd` in `schema.ts`, and project card adapters. A full 15-project MDX migration would risk route, sitemap, JSON-LD, and resume drift for little gain.
- The current route already handles thin projects honestly by conditionally rendering optional sections. Preserve that behavior.
- The missing capability is long-form narrative, not canonical project identity. Add that only where a real richer story exists.

Optional narrative contract:

- File path: `nextjs-portfolio/content/case-studies/<project-slug>.mdx`.
- Frontmatter:
  - `projectSlug`: must match an existing `projects.ts` slug.
  - `placement`: one of `after-solution`, `after-architecture`, `after-key-product-flows`, `after-engineering-decisions`, `before-gallery`; default `after-engineering-decisions`.
  - `toc`: optional `{ id: string; label: string }[]` for headings the route should merge into `ProjectToc`.
- Route composition: `src/app/projects/[slug]/page.tsx` keeps loading `getProject(slug)`. It also asks `getCaseStudyNarrative(slug)` for an optional compiled MDX body. If present, insert the MDX section at `placement` and merge `toc` entries into the generated TOC. If missing, render exactly the current structured template.
- Structured fields remain canonical for title, category, overview, gallery, features, tech stack, links, sitemap, and JSON-LD. MDX must not override those facts.

## 2. MDX pipeline choice for Next.js 16 App Router

Recommend native `@next/mdx` plus small local loaders using `fs`, `gray-matter`, and `zod`.

Option evaluation:

- Native `@next/mdx`: best Next 16/App Router/Turbopack fit, supports Server Components and dynamic MDX imports, and keeps the app close to official Next conventions. Weakness: frontmatter collection and validation are not automatic, so add a tiny local loader.
- `next-mdx-remote`: good for remote or DB content, but not needed because publishing is local MDX files. It adds remote-content machinery and Turbopack caveats.
- `velite`: strong typed collection layer with Zod-style schemas and MDX support. It is useful if content grows, but it adds a content build tool and generated output for a one-owner portfolio.
- `contentlayer2`: similar generated-content benefits, but it is a maintained fork of a formerly stalled project and has more plugin/config surface than this needs.

Exact packages to add, pinned to the current app shape:

- `@next/mdx@16.2.2`
- `@mdx-js/loader@3.1.1`
- `@mdx-js/react@3.1.1`
- `@types/mdx@2.0.14`
- `remark-frontmatter@5.0.0`
- `remark-mdx-frontmatter@5.2.0`
- `gray-matter@4.0.3`
- `zod@4.4.3`
- `rehype-pretty-code@0.14.1`
- `shiki@4.3.1`

Trade-offs:

- This is fewer moving parts than a CMS or generated content SDK, but the repo owns about 150-250 lines of loader/validation code.
- `@next/mdx` should match the pinned Next version. If Next is bumped from `16.2.2`, bump `@next/mdx` in the same commit.
- Turbopack plugin support is stricter than webpack. Configure remark/rehype plugins by serializable package names/options where possible, and verify both `next dev` and `next build`.
- React 19 risk is low for native MDX. The main risk is third-party MDX plugins, especially syntax highlighting options.

## 3. Content model plus validation

Use Zod schemas in `src/lib/content/schemas.ts`; infer TS types from them.

Blog frontmatter:

```ts
const BlogStatus = z.enum(["draft", "published", "archived"]);

const BlogFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string().min(1),
  status: BlogStatus,
  publishedAt: z.string().date().optional(),
  updatedAt: z.string().date().optional(),
  category: z.string().min(1),
  tags: z.array(z.string().min(1)).default([]),
  featured: z.boolean().default(false),
  cover: z.string().startsWith("/").optional(),
  coverAlt: z.string().min(1).optional(),
  author: z.literal("Salmen Khelifi"),
  seoTitle: z.string().min(1).optional(),
  seoDescription: z.string().min(1).optional(),
  canonicalUrl: z.string().url().optional(),
  relatedCaseStudies: z.array(z.string()).default([]),
});
```

Derived fields:

- `body`: the MDX component/content, not frontmatter.
- `readingTime`: derived from the MDX body text at build time; never hand-authored.
- `url`: `/blog/${slug}`.

Case-study narrative frontmatter:

```ts
const CaseStudyNarrativeSchema = z.object({
  projectSlug: z.string(),
  placement: z
    .enum([
      "after-solution",
      "after-architecture",
      "after-key-product-flows",
      "after-engineering-decisions",
      "before-gallery",
    ])
    .default("after-engineering-decisions"),
  toc: z.array(z.object({ id: z.string(), label: z.string() })).default([]),
});
```

Validation runs in server-only loaders called by `generateStaticParams`, `generateMetadata`, `sitemap.ts`, and page renders. Invalid frontmatter throws during build with the file path and Zod error summary. Drafts may be invalid only if they are not imported by production loaders; simpler rule: validate every MDX file in build so bad drafts are fixed early.

## 4. Routing plus slug handling

Routes:

- `/blog`: server page listing published posts. With one owner-review draft and no published posts, show an honest empty state.
- `/blog/[slug]`: server page rendering one published post. Unknown, draft, or archived slugs return `notFound()`.
- Category/tag routes: skip for launch. For a tiny blog, category/tag pages create thin SEO surfaces. Use non-route filters or chips on `/blog`; add `/blog/category/[category]` and `/blog/tag/[tag]` only after there are enough published posts.
- `/projects/[slug]`: unchanged route contract; add optional narrative lookup only.

Slug rules:

- Blog filename and `slug` must match: `content/blog/<slug>.mdx`.
- Slugs use lowercase kebab case.
- `generateStaticParams` returns only `published` posts for `/blog/[slug]`.
- `generateMetadata` returns article metadata only for published posts; drafts and archived posts 404.
- Canonical URL defaults to `${siteUrl}/blog/${slug}` unless a validated `canonicalUrl` is present.
- Draft exclusion must apply to `/blog`, `/blog/[slug]`, sitemap, RSS if added, metadata, related-content indexes, and search/schema surfaces.

## 5. Rich-content renderer

Create one MDX component map in `src/components/mdx/mdx-components.tsx`, re-exported through the required `mdx-components.tsx` convention.

Author components:

- `Callout`
- `CodeBlock`
- `Quote`
- `DecisionCard`
- `MetricCard` or `EvidenceCard`
- `AnnotatedImage`
- `MdxGallery`
- `ArchitectureDiagram`
- `TradeOffTable`
- `Timeline`
- `RelatedContent`
- `CTA`

Syntax highlighting:

- Use `rehype-pretty-code` with Shiki for build-time highlighted HTML and no client highlighter bundle.
- Keep options serializable for Turbopack. Avoid custom transformer functions unless build proves they work.
- Use CSS variables from `globals.css` for code colors so the code block fits the existing dark token system.

Component boundaries:

- Default all MDX-rendered components to server components.
- Make only genuinely interactive pieces client components: expandable annotated image controls, carousel-like gallery controls, or diagram toggles.
- Tables and code blocks must be server-rendered and horizontally scrollable.

## 6. Image handling

Use `next/image` for MDX images through explicit components, not raw markdown image syntax for important media.

File locations:

- Blog covers: `nextjs-portfolio/public/images/blog/<slug>/cover.(png|jpg|webp)`.
- Blog inline images: `nextjs-portfolio/public/images/blog/<slug>/...`.
- Case-study narrative inline images: reuse existing project image folders when factual, or use `public/images/case-studies/<project-slug>/...` for narrative-only assets.

Rules:

- `cover` requires `coverAlt`; inline `AnnotatedImage` requires `alt`, optional `caption`, `width`, `height`, and `priority`.
- Reuse the existing `BLUR_PLACEHOLDER` from `src/data/homepage.ts` for local images unless a future image pipeline generates per-image blur data.
- Use route-aware `sizes`: full article body images default to `(max-width: 768px) 100vw, 760px`; wide gallery images can use `(max-width: 1024px) 100vw, 960px`.
- Missing image paths should fail build for published content. Drafts can fail preview visibly, but must never enter production indexes.
- For optional coverless posts, render the article without a cover instead of a broken placeholder.

## 7. SEO plus related-content

Sitemap:

- Extend `src/app/sitemap.ts` with published blog posts only.
- Keep project routes sourced from `projects.ts`.
- Use post `updatedAt || publishedAt` for article `lastModified`; fall back to build time only for static routes.

RSS:

- Skip for launch unless there is at least one published post. With one draft and an honest empty state, RSS is just another leakage surface.
- Add `src/app/rss.xml/route.ts` later when there are several published posts.

Metadata:

- Article title: `seoTitle || title`.
- Description: `seoDescription || excerpt`.
- Canonical: validated `canonicalUrl || /blog/${slug}`.
- Open Graph/Twitter: follow existing `opengraph-image.tsx` and `twitter-image.tsx` patterns. Add per-article static metadata first; dynamic generated OG images can come later.

Structured data:

- Add `articleJsonLd(post)` in `src/data/schema.ts` or `src/lib/content/schema.ts`.
- Use `Article` or `BlogPosting` with `headline`, `description`, `datePublished`, `dateModified`, `author`, `url`, `image`, and `keywords`.
- Do not invent metrics or claims in structured data.

Related content:

- Article -> case study: explicit `relatedCaseStudies: string[]` slugs in blog frontmatter, validated against `projects.ts`.
- Case study -> article: derived inverse map from published posts only, keyed by `project.slug`.
- Resolution: broken related slugs fail build for published posts.

## 8. Component boundaries plus file structure

Minimal tree:

```txt
nextjs-portfolio/
  content/
    blog/
      _template.mdx
      owner-review-draft.mdx
    case-studies/
      _template.mdx
      luxe-spa.mdx
  mdx-components.tsx
  src/
    app/
      blog/
        page.tsx
        [slug]/page.tsx
      projects/[slug]/page.tsx
      sitemap.ts
    components/
      blog/
        BlogIndex.tsx
        BlogPostHeader.tsx
        BlogEmptyState.tsx
      mdx/
        components.tsx
        MDXArticle.tsx
        AnnotatedImage.tsx
        MdxGallery.tsx
        TradeOffTable.tsx
    lib/
      content/
        blog.ts
        case-study-narratives.ts
        reading-time.ts
        related.ts
        schemas.ts
    data/
      projects.ts
      schema.ts
      homepage.ts
```

Server/client split:

- `src/lib/content/*` is server-only.
- Blog pages are server components.
- MDX prose wrappers are server components.
- Interactive gallery/diagram controls are client components only where needed.

Existing pattern to preserve: `projects.ts` is canonical. The `homepage.ts` vs `projects.ts` card duplication should be removed before or alongside blog UI polish, but it is not a prerequisite for the MDX pipeline. Do it as a small data cleanup commit, not bundled with MDX setup.

## 9. Migration plus implementation sequence

Small commits, in order:

1. Add MDX compile support and content validation.
   - Files: `next.config.ts`, `mdx-components.tsx`, `src/lib/content/*`, `content/blog/_template.mdx`.
   - Verify: `cd nextjs-portfolio && ./node_modules/.bin/eslint "src/**/*.{ts,tsx}"`; `npm --prefix /Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio run build`.
   - Browser: smoke `/` and `/projects/luxe-spa`.

2. Add blog routes with honest empty state.
   - Files: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`, `src/components/blog/*`.
   - Verify: same lint/build; browser `/blog`, `/blog/not-real`.
   - Draft rule: one owner-review draft may exist but must not appear in `/blog`.

3. Add one draft article file.
   - Files: `content/blog/<draft-slug>.mdx`.
   - Verify: build succeeds; `/blog` still shows empty state in production rules; draft slug 404s.

4. Extend sitemap and Article JSON-LD.
   - Files: `src/app/sitemap.ts`, `src/data/schema.ts` or `src/lib/content/schema.ts`.
   - Verify: build; inspect generated sitemap in browser or curl from smoke server.

5. Add optional case-study narrative loader and route insertion.
   - Files: `content/case-studies/_template.mdx`, `src/lib/content/case-study-narratives.ts`, `src/app/projects/[slug]/page.tsx`.
   - Verify: `/projects/luxe-spa` unchanged without narrative; with a real narrative file, TOC and body render.

6. Add rich MDX components.
   - Files: `src/components/mdx/*`.
   - Verify: build; browser-check wide table, code block, annotated image, gallery, CTA on desktop/mobile.

7. Data cleanup: remove homepage project card duplication.
   - Files: `src/data/homepage.ts`, project card adapters, homepage components if needed.
   - Verify: homepage Selected Work and `/work` render the same factual projects and links.

8. UI polish pass for blog/case-study narrative.
   - Verify after pipeline is stable; do not block earlier architecture commits on visual polish.

Repo gotchas:

- `npm run lint` is broken in this environment through a pnpm wrapper; use `./node_modules/.bin/eslint "src/**/*.{ts,tsx}"`.
- Build with `npm --prefix /Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio run build`.
- Port `3100` is a live human preview; use `3101` for smoke tests.
- `next-env.d.ts` auto-regenerates; do not commit its churn.

## 10. Docs plus templates to create during implementation

Create `docs/PORTFOLIO_CONTENT_PLAYBOOK.md` with author-facing steps only.

Add a blog post:

1. Create `nextjs-portfolio/content/blog/<slug>.mdx` from `content/blog/_template.mdx`.
2. Fill required fields: `title`, `slug`, `excerpt`, `status`, `category`, `tags`, `featured`, `author`, SEO fields if needed, and `relatedCaseStudies`.
3. Put images in `public/images/blog/<slug>/`.
4. Add `cover` and `coverAlt` only when there is a real cover.
5. Preview with `npm --prefix nextjs-portfolio run dev -- -p 3101`.
6. Publish by changing `status: published` and adding `publishedAt`.
7. Run eslint and build commands from section 9.

Add a case-study narrative:

1. Confirm the canonical project exists in `src/data/projects.ts`.
2. Create `nextjs-portfolio/content/case-studies/<project-slug>.mdx` from the case-study template.
3. Set `projectSlug` to the exact `projects.ts` slug.
4. Set `placement` and optional `toc`.
5. Use only real facts from `projects.ts` or owner-reviewed material.
6. Preview `/projects/<project-slug>` on port `3101`.
7. Run eslint and build.

Templates:

- `content/blog/_template.mdx`: all fields present, `status: draft`, empty arrays for tags/related, author set to `Salmen Khelifi`, comments reminding that reading time is derived.
- `content/case-studies/_template.mdx`: `projectSlug`, `placement`, `toc`, and example component usage without factual filler.

## 11. Testing strategy

Minimal automated checks worth adding:

- `src/lib/content/content.selfcheck.ts` or a small `node --import tsx` script that validates:
  - every MDX file parses;
  - blog filename matches `slug`;
  - published posts have `publishedAt`;
  - `cover` has `coverAlt`;
  - related case-study slugs exist;
  - case-study narrative `projectSlug` exists;
  - no draft appears in `getPublishedPosts()`.
- Add this as `npm run check:content` once the loader exists.

Keep verification simple:

- ESLint command from section 9.
- Production build command from section 9.
- Browser smoke on `/blog`, `/blog/<published-slug>` when one exists, `/projects/luxe-spa`, and one project without narrative.

No broad component test suite yet. This is a portfolio, not a product app.

## 12. Risks plus failure states

- Invalid slug: fail build for content; `notFound()` for route access.
- Missing cover: if optional, render no cover; if specified but file missing, fail build for published content.
- Draft leakage: centralize `getPublishedPosts()` and use it for index, params, sitemap, RSS, related indexes, and metadata.
- MDX compile error: fail build with file path; do not catch and render broken public pages.
- Empty blog index: render honest empty state, no fake posts, no RSS until published content exists.
- Wide tables: wrap `TradeOffTable` in `overflow-x-auto`; keep min width internal to the table.
- Long code: highlighted blocks get `overflow-x-auto`, `max-width: 100%`, and line wrapping only when explicitly requested.
- Broken related content: fail build for published posts; ignore draft posts in inverse related maps.
- Turbopack plugin mismatch: keep plugin config serializable, verify dev/build, and pin `@next/mdx` with `next`.
