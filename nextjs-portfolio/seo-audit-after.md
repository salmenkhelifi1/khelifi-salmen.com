# SEO, AEO, and GEO audit — after implementation

## Outcome

The existing Next.js portfolio now has stronger commercial-page metadata, truthful service schema, an explicit AI-search crawler policy, source-backed answer-first copy, lighter blog-index payloads, and non-autoplaying case-study video. Thin articles are retained for readers but excluded from organic indexing until they are substantively reviewed. No visual redesign or unverified business claim was introduced.

## Verified improvements

| Area | Result |
| --- | --- |
| Build | Production build completed successfully with 137 generated pages. |
| Route audit | `npm run check:seo` passed 130 audited HTML routes: 16 projects, 108 posts (58 indexable, 50 `noindex`), and 2 social-image routes. |
| n8n page | 50-character title, 152-character description, canonical-aligned social images, Service JSON-LD, and BreadcrumbList validated from generated HTML. |
| Schema | Global Person, WebSite, and Service JSON-LD validated with no self-serving Review, Rating, or ProfessionalService markup. |
| Robots/sitemap | Generated robots contains OAI-SearchBot and the canonical sitemap directive; the sitemap has 79 indexable URLs and excludes raw machine files and `noindex` articles. |
| Index quality | The 50 published posts that are under 300 words and lack an SEO description now emit `noindex` and are absent from the sitemap. |
| Deploy config | The stale pnpm lockfile and uninstalled legacy Next.js plugin declaration were removed; the existing npm lockfile passes a clean dry-run install. |
| Blog payload | Generated blog HTML dropped from 855,094 to 189,403 bytes (77.9% smaller); RSC payload dropped from 764,746 to 117,900 bytes (84.6% smaller). |
| Regressions | Existing focused work-grid test passed. Changed-file ESLint passed. |

## Remaining risks

- The live deployment still needs an approved deploy, then a post-deploy crawl check. This audit did not deploy.
- Cloudflare's live managed crawler rules previously conflicted with the repository's robots policy. Reconcile that edge policy before deployment so intended AI/search crawlers are deliberately allowed or disallowed.
- Full lint remains blocked by two pre-existing CommonJS-import errors in `scripts/sync-blog.js`; four unrelated warnings remain. See `seo-validation.md`.
- Rankings, index coverage, field Core Web Vitals, backlinks, and AI citations remain unverified without external tools/access.

## Recommended future work

1. Reconcile Cloudflare's managed crawler policy, deploy with approval, and verify the live robots/sitemap/header output.
2. Connect Search Console and Bing Webmaster Tools, then establish a 30-day organic/conversion baseline.
3. Rewrite the 50 `noindex` articles with original, source-backed expertise before restoring them to the sitemap; add richer case-study proof only where owner/client-approved evidence exists.
