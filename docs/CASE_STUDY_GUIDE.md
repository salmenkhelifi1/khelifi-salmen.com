# Case Study Guide

Use this guide for project data and screenshots. See the [Portfolio Content Playbook](PORTFOLIO_CONTENT_PLAYBOOK.md) for the publishing model and shared content rules.

## Add or update a project

Edit `nextjs-portfolio/src/data/projects.ts`. Add one object to the exported `projects` array and use a unique kebab-case `slug`; `/projects/<slug>` and the work archive read from that array.

Every `Project` supports:

- `slug`, `title`, `tagline`, and `category`.
- `accent`: literal Tailwind classes for `text`, `hoverText`, and `button`.
- Optional `heroImage` and `galleryAspect` (`"phone"` or `"desktop"`).
- `overview`: `what`, `problem`, and `audience`.
- `features`: `{ title, description }[]`.
- `gallery`: `{ src, alt, aspect? }[]`, where `aspect` is `"phone"` or `"desktop"`.
- `techStack`: required `frontend` plus optional `backend` and `tools` arrays.
- `badges`, optional `challenges` as `{ challenge, solution }[]`, and `links` with optional `github` and `live` URLs.
- Optional `snapshot`: `timeframe`, `status`, `role`, `ownership`, `team`, `industry`, and `platform`. Valid statuses are `live`, `in-development`, `prototype`, and `archived`.

The snapshot band appears only when at least one displayed snapshot value exists. The current page displays `timeframe`, `status`, `role`, `ownership`, `industry`, and `platform`; `team` is part of the data type but is not currently displayed. Leave unknown fields unset.

## Optional narrative

Add `nextjs-portfolio/content/case-studies/<slug>.mdx` only when the project needs a longer narrative. Copy `_template.mdx`, set `projectSlug` to the exact project slug, and choose a validated `placement`: `after-solution`, `after-architecture`, `after-key-product-flows`, `after-engineering-decisions`, or `before-gallery`. Optional `toc` entries use `{ id, label }` and must match headings in the narrative.

## Images, alts, and captions

Store new files under `nextjs-portfolio/public/images/<slug>/` and reference them as `/images/<slug>/<file>`. When a hero image is informative, include the same `src` in `gallery` so its descriptive gallery `alt` can also serve the hero and social metadata.

Describe what the image shows, not the project title. Use `alt=""` only for a decorative image beside equivalent visible content. The `Project.gallery` model has no caption field; use `AnnotatedImage` or `MdxGallery` in an MDX narrative when a separate caption adds context. Do not repeat a caption in the alt text.

## Honesty check

Publish only facts supported by the repository or confirmed by the owner. Do not infer users, revenue, outcomes, dates, roles, privacy properties, or production status. Record missing facts in [CONTENT_NEEDED.md](CONTENT_NEEDED.md) and omit the public field until confirmed.
