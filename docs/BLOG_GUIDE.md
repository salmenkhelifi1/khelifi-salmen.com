# Blog Guide

Use this checklist with the [Portfolio Content Playbook](PORTFOLIO_CONTENT_PLAYBOOK.md), which explains the content architecture and shared honesty rules.

## Create a draft

```bash
cp nextjs-portfolio/content/blog/_template.mdx nextjs-portfolio/content/blog/<slug>.mdx
```

The filename and kebab-case `slug` must match. Required frontmatter fields are `title`, `slug`, `excerpt`, `status`, `category`, and `author`; `author` must be `"Salmen Khelifi"`. `status` accepts `draft`, `published`, or `archived`. A published post also requires an ISO `publishedAt` date.

Optional fields are `updatedAt`, `tags`, `featured`, `cover`, `coverAlt`, `seoTitle`, `seoDescription`, `canonicalUrl`, and `relatedCaseStudies`. Reading time is derived from the MDX body; do not add it to frontmatter. Every `relatedCaseStudies` value must match a real slug in `src/data/projects.ts`, or the content loader fails. If `cover` is present, `coverAlt` is required and must describe the image.

Only `published` posts are public. Draft and archived posts do not appear on `/blog`, do not receive a public detail route, and stay out of the sitemap. A direct request for a draft slug returns 404.

## Write the body

Start article sections at `##` because the route renders the article title as the single `h1`. These MDX components are available without imports: `Callout`, `DecisionCard`, `MetricCard`, `AnnotatedImage`, `MdxGallery`, `TradeOffTable`, `Timeline`, `Quote`, `MdxArchitectureNote`, `TechnicalNote`, and `CodeBlock`.

The three existing draft skeletons must keep `status: "draft"` until every `[OWNER-TODO]` marker has been replaced with verified facts:

- `designing-reliable-ai-n8n-workflows-for-real-operations.mdx`
- `structuring-multi-tenant-applications-without-over-engineering.mdx`
- `mongodb-to-postgres-zero-data-loss-migration.mdx`

## Preview and publish

```bash
cd nextjs-portfolio
PORT=3107 npm run dev
```

To publish, remove all `[OWNER-TODO]` markers, set `status: "published"`, add `publishedAt: "YYYY-MM-DD"`, then run:

```bash
npx tsc --noEmit
./node_modules/.bin/eslint "src/**/*.{ts,tsx}"
npm run build
```

Check `/blog`, `/blog/<slug>`, and the sitemap in the built site before committing.
