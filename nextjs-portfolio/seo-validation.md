# SEO validation

## Passed

```text
npm run build
```

Production build completed successfully; 137 static/SSG pages were generated.

```text
npm run check:seo
```

Passed: 130 HTML routes, 16 projects, 58 indexable blog posts, 50 `noindex` blog posts, and 2 social image routes. This parses JSON-LD, checks canonicals, complete 40–160-character descriptions, social tags, image alt attributes, sitemap coverage, robots sitemap policy, Netlify header intent, redirect removal, and the n8n Service/BreadcrumbList output.

```text
node --test tests/work-grid-reveal.test.mjs
```

Passed: 1 test, 0 failures.

```text
./node_modules/.bin/eslint [changed files]
```

Passed with no changed-file errors or warnings.

```text
npm ci --dry-run --ignore-scripts
```

Passed against the committed npm lockfile. The stale `pnpm-lock.yaml` was removed so Netlify will not select pnpm, and the uninstalled legacy `@netlify/plugin-nextjs` configuration was removed in favor of Netlify's automatic Next.js adapter.

## Additional generated-output checks

- n8n title length: 50; description length: 152; Service and BreadcrumbList JSON-LD present.
- Robots contains `User-Agent: OAI-SearchBot` and `Sitemap: https://www.khelifi-salmen.com/sitemap.xml`.
- Generated sitemap contains 79 URL entries: 5 static pages, 16 project pages, and 58 indexable posts.
- All 50 published articles under 300 words without an SEO description emit `noindex` and are absent from the sitemap.
- Homepage JSON-LD contains `Person`, `WebSite`, and `Service`, with no global `Review`, rating, or `ProfessionalService` markup.
- `netlify.toml` applies safe global response headers and `X-Robots-Tag: noindex` intent to the four raw machine-readable documents.
- Blog build artifacts reduced by 77.9% (HTML) and 84.6% (RSC) after removing serialized MDX bodies.

## Known pre-existing lint failures

```text
npm run lint
```

Fails on two `@typescript-eslint/no-require-imports` errors in `scripts/sync-blog.js`. It also reports four unrelated warnings: unused `bookingUrl` imports in resume/header/footer and a raw `<img>` warning in `MdxImage.tsx`. These files were outside this SEO change and were not rewritten.

## Not validated

- No deployment, production crawl after deployment, Search Console inspection, PageSpeed field data, rich-result test, backlinks, rankings, or AI-citation measurement.
- Cloudflare managed crawler rules are external to this repository and must be reconciled with the deployed robots policy.
