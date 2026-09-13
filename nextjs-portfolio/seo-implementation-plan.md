# SEO implementation plan

## 1. Technical SEO

Completed: preserve the existing static Next.js output, canonical host, robots route, sitemap route, redirects, and 404 behavior. Add `OAI-SearchBot` explicitly to source robots and a regression assertion for it.

## 2. Metadata

Completed: bring `/n8n-automation-developer` to the repository's title/description limits and add canonical-aligned Open Graph and Twitter images. Add author/creator/publisher metadata at the root.

## 3. Structured data

Completed: enrich the existing Person/WebSite/ProfessionalService entities only with visible, verified details. Add Service and BreadcrumbList JSON-LD to the n8n service page.

## 4. Content structure

Completed: lead the homepage with a direct entity answer and show author/update information on articles when the source supplies it.

## 5. Internal linking

Completed: add the n8n service page and full portfolio context to `llms.txt`. No artificial sitewide keyword-link block was added.

## 6. AEO improvements

Completed: make the highest-intent service page and homepage self-identifying, concise, and extractable; retain only evidence-backed statements.

## 7. GEO improvements

Completed: refresh `llms.txt` and `llms-full.txt`, explicitly permit `OAI-SearchBot` in source, and document the live/source robots discrepancy. No AI-citation guarantee is implied.

## 8. Performance

Completed: stop shipping full article bodies to the blog filter, use native Next image optimization for article covers and the FoundPeers hero image, and avoid autoplaying case-study video.

## 9. Accessibility

Completed: retain semantic landmarks, headings, descriptive image text, focus styles, and reduced-motion support. The new article author reference is an ordinary accessible link.

## 10. Analytics and monitoring

Deferred safely: no analytics ID or verified Search Console/Bing access was present. Follow `seo-monitoring-guide.md` after deployment.

## 11. Business information still required

See `seo-content-gaps.md`; in particular, reconcile the résumé phone number before adding it to entity markup.
