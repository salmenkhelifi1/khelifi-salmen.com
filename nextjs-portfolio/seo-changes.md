# SEO changes

## Code and content updates

- `src/app/n8n-automation-developer/page.tsx`: compliant metadata, absolute social images, `Service` and breadcrumb JSON-LD, and a direct provider answer.
- `scripts/check-seo.mjs`: covers n8n, indexable/noindex article behavior, sitemap exclusions, redirect removal, robots policy, and Netlify header intent.
- `src/lib/seo.ts`: preserves whole words/clause boundaries while still filling the available title and description range for every dynamic page.
- `src/data/schema.ts` and `src/app/layout.tsx`: enrich verified person/service entity context and author metadata without adding an unconfirmed phone number; the global markup is now `Service`, with no self-serving Review or rating nodes.
- `src/app/home-content.tsx` and `src/app/blog/[slug]/page.tsx`: improve direct entity answer, visible article authorship, actual update-date context, per-article indexability, and a contextual n8n service CTA on relevant indexable posts.
- `src/lib/content/blog.ts`, `src/app/blog/page.tsx`, and `src/components/BlogListWithFilter.tsx`: send summaries, not full MDX bodies, to the client filter.
- `src/lib/content/schemas.ts`, `src/lib/content/blog.ts`, `content/blog/*.mdx`, and `src/app/sitemap.ts`: support `indexable` frontmatter; 50 thin published articles are now `noindex` and excluded from the sitemap, while 58 remain indexable.
- `src/app/blog/[slug]/page.tsx` and `src/app/projects/[slug]/page.tsx`: use native image optimization and metadata-only video preload.
- `src/app/robots.ts`, `src/app/layout.tsx`, and `src/app/not-found.tsx`: explicitly lists `OAI-SearchBot`, removes a root-level forced index directive, and sends `noindex, follow` for the 404 page.
- `next.config.ts`: removes the broken permanent `/project-grammarai` redirect.
- `netlify.toml` and `pnpm-lock.yaml`: add safe global response headers and `X-Robots-Tag: noindex` for raw machine-readable documents, remove an uninstalled legacy Next.js plugin declaration, and remove the stale pnpm lockfile so the existing npm lockfile is used by Netlify.
- `public/llms.txt`, `public/llms-full.txt`, and `public/services.md`: correct and extend machine-readable context using current portfolio facts without overstating project status or current framework versions.

## Routes affected

`/`, `/blog`, every published `/blog/[slug]`, `/n8n-automation-developer`, `/projects/[slug]`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/services.md`, and `/pricing.md`.

## Dependencies and migration

No dependency, CMS, data migration, deployment, analytics ID, or external account change was added. One broken redirect and one stale package-manager lockfile were removed.

## Handoff

- **What changed:** SEO/AEO/GEO implementation, index-quality controls, machine-readable context, and regression coverage are complete.
- **What we learned:** Passing summaries instead of MDX bodies made the generated blog HTML 77.9% smaller and its RSC payload 84.6% smaller.
- **Still unverified:** Live deployment parity, Cloudflare crawler policy, Search Console, analytics, field Core Web Vitals, rankings, and AI citations.
- **Decision:** No deployment or new local/location content without approval and verified business facts.
- **Content opportunity:** Rewrite the 50 `noindex` articles with original, source-backed depth before returning them to the sitemap; add client-approved project outcomes when evidence is available.
- **Exact next action:** Reconcile the Cloudflare managed crawler policy, approve a deploy, then run the post-deploy checks in `seo-monitoring-guide.md`.
