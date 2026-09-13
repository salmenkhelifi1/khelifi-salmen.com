# SEO, AEO, and GEO audit — before implementation

Audited: 2026-07-29. Scope: the public Next.js portfolio at `https://www.khelifi-salmen.com/` and its repository. Scores below are implementation-readiness scores, not ranking, traffic, or Search Console data.

## Executive summary

The site already had a strong foundation: static rendering, a canonical `www` host, unique metadata, JSON-LD, a sitemap, an accessible heading structure, a concise `llms.txt`, and real project proof. The highest-impact gaps were narrow and safe to fix in code.

| Priority | Finding | Evidence | Planned action |
| --- | --- | --- | --- |
| High | The n8n service route was in the sitemap but omitted from the SEO regression check; its metadata was too short and it lacked page social images. | `src/app/n8n-automation-developer/page.tsx`, `scripts/check-seo.mjs` | Fix metadata, add truthful `Service` + breadcrumb JSON-LD, cover it in the check. |
| High | The blog index passed each full MDX body to a client component. | 108 posts; generated blog HTML was 855,094 bytes and RSC payload 764,746 bytes. | Pass a summary type only. |
| High | Case-study videos autoplayed, including the 17 MB FoundPeers walkthrough. | `src/app/projects/[slug]/page.tsx` | Use native video controls with `preload="metadata"`. |
| Medium | The homepage answer did not lead with the named entity, location, and services; articles did not visibly show author/update context. | Homepage and blog templates. | Add concise, source-backed entity copy and visible authorship/date context. |
| Medium | Machine-readable portfolio context omitted FoundPeers and Luxe Spa detail, and described all projects as solo/pre-launch. | `public/llms.txt`, `public/llms-full.txt` | Correct only from the existing project records. |
| Medium | Deployed `robots.txt` differed from repository output. | Live probe returned no sitemap directive and blocked ClaudeBot, while source generated a sitemap directive and allows ClaudeBot. | Keep source explicit; deployment remains pending approval. |

## Technical baseline

| Area | Status | Notes |
| --- | --- | --- |
| Crawlability | Pass with live drift | Source has `robots.ts` and `sitemap.ts`; live root, robots, sitemap, and `llms.txt` returned 200. |
| Indexability | Pass | Canonical `https://www.khelifi-salmen.com` is consistent in metadata and JSON-LD. Apex redirects to `www`. |
| Rendering | Pass | App Router pages are statically prerendered; critical page content is present in generated HTML. |
| Metadata | Warn | Homepage/work/blog/resume/projects were solid; n8n was the material exception. |
| Schema | Pass with gaps | Person, WebSite, ProfessionalService, BlogPosting, CreativeWork, and BreadcrumbList existed. The n8n service page had none. |
| International/local | Correctly limited | English is the only published locale, so hreflang is not appropriate. Tunisia/remote worldwide is supported; city/location pages and LocalBusiness markup are not. |
| Analytics | Unverified | No verified Search Console, Bing Webmaster Tools, analytics ID, traffic baseline, or conversion data was available. |

## AEO/GEO baseline

- Content is server-rendered, readable, and already contains concrete project proof.
- `llms.txt` existed and was concise. It is experimental support for non-Google tools, not a ranking guarantee.
- The source robot policy allowed the relevant AI/search crawlers, but the live policy must be rechecked after deployment. OpenAI documents `OAI-SearchBot` for search discovery, and Google documents that its AI search features use normal Search controls: [OpenAI guidance](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq), [Google guidance](https://developers.google.com/search/docs/appearance/ai-features).
- No AI-citation, ranking, backlink, or field Core Web Vitals data was available, so none is claimed.

## Deferred on purpose

- No city pages, hreflang, LocalBusiness schema, price/offer markup, FAQ schema, ratings fabrication, or claims about outcomes were added.
- No analytics, third-party package, deployment, or external message was added.
