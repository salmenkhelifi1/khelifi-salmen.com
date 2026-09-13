# Structured-data report

## Detected and validated in generated HTML

| Route type | JSON-LD | Result |
| --- | --- | --- |
| Home | Person, WebSite, Service | Present; linked through stable `@id` values, with the Service provided by the Person. |
| Project pages | CreativeWork, BreadcrumbList | Present for all 16 project pages. |
| Blog posts | BlogPosting, BreadcrumbList | Present for all 108 published articles. |
| Resume | Person | Present. |
| n8n service page | Service, BreadcrumbList | Added and validated in generated HTML. |

## Implemented improvements

- Person includes a visible portrait, country-only address (`TN`), source-backed description, public profile links, and no unconfirmed telephone.
- WebSite and the global Service include source-backed descriptions.
- The global Service preserves its stable `@id`, worldwide service area, and visible service types while linking its `provider` to the Person.
- The n8n Service entity uses absolute URL, stable `@id`, `provider` reference to the Person, worldwide service area, and no price, rating, or invented offer.

## Validation

`npm run build && npm run check:seo` passed: 130 rendered HTML routes, 16 project pages, 108 published blog posts (58 indexable and 50 intentionally `noindex`), and 2 social-image routes. A focused homepage check also confirmed `Person`, `WebSite`, and `Service` JSON-LD with no `ProfessionalService`, `Review`, or rating markup. A post-deploy Rich Results Test remains useful for Google-supported rich-result diagnostics.

## Intentionally not added

- LocalBusiness, postal street address, telephone, opening hours, and geo coordinates: not verified.
- FAQPage and HowTo: not appropriate for this commercial personal portfolio and not needed for the visible content.
- Global Review and Rating markup: removed; the homepage does not make self-serving review claims in JSON-LD.
- AggregateRating, pricing, or offers: not supported by evidence.

The deployed source of truth remains `src/data/schema.ts` and the n8n route; a separate generated JSON file would drift from the real implementation, so none was created.
