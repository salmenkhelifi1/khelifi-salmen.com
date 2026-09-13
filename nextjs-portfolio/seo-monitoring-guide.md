# SEO, AEO, and GEO monitoring guide

## Before deployment

1. Reconcile Cloudflare's managed crawler policy with the repository `robots.txt`. The previous live response had managed bot directives that conflicted with the source policy; choose the intended allow/disallow policy deliberately before releasing.

## After deployment

1. Open [Google Search Console](https://search.google.com/search-console/) and submit `https://www.khelifi-salmen.com/sitemap.xml`.
2. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/) and submit the same sitemap.
3. Recheck the deployed `robots.txt`, sitemap, canonical URLs, n8n metadata, n8n JSON-LD, and the four machine-document `X-Robots-Tag: noindex` headers. The previous live deployment did not match repository robots output during this audit.
4. Run [PageSpeed Insights](https://pagespeed.web.dev/) on `/`, `/blog`, `/n8n-automation-developer`, and `/projects/foundpeers` after traffic is available.

## Monthly scorecard

| Metric | Source | Record |
| --- | --- | --- |
| Indexed pages and crawl errors | Search Console | Coverage count, excluded URLs, and errors. |
| Queries and CTR | Search Console | Impressions, clicks, CTR, and landing page. |
| Bing crawl/indexing | Bing Webmaster Tools | Sitemap status and crawl issues. |
| Organic conversions | Existing analytics only | Discovery calls, mailto clicks, and contact-form outcomes. Do not add an ID without approval. |
| Core Web Vitals | Search Console / PageSpeed Insights | Field data when available; otherwise label lab data as lab data. |
| AI citation presence | Manual monthly check | Query, platform, whether cited, cited page, and competitors cited. |

## Suggested manual AI-search queries

- `n8n automation developer for hire`
- `full-stack developer Tunisia remote`
- `AI workflow automation developer`
- `custom SaaS developer`
- `Salmen Khelifi`

Check Google AI features, ChatGPT search, Perplexity, and Bing Copilot. AI answers change by location, time, account, and query wording; record the date and do not treat a single result as a ranking guarantee.

## Content refresh rule

Only add `updatedAt` to an article after a real editorial or technical review. When a project gains a verified outcome, add the evidence and source/context to the relevant case study rather than adding generic claims across the site.

Keep an article `noindex` until a substantive, source-backed rewrite is complete; do not flip the flag merely to increase sitemap size.
