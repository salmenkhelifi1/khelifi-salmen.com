# UX Redesign Baseline

## Scope and source of truth

This baseline records the portfolio before the full UX/HCI implementation. The repository remains the source of truth for project facts, testimonials, URLs, SEO, analytics, and deployment behavior. The supplied audit package defines the approved experience direction; it does not authorize invented proof, route changes, package changes, or deployment.

## Current experience

The homepage already has strong ingredients: a personal hero image, clear full-stack positioning, verified project case studies, a 4.9/5 Freelancer rating, engineering proof, client testimonials, a four-step process, an About section, and working contact/calendar routes.

The main problem is hierarchy. The page presents too much repeated and technical information before the visitor reaches a low-friction way to explain a project.

### Measured baseline

Captured from the production build before implementation in dark and light themes.

| Viewport | Hero height | Observation |
| --- | ---: | --- |
| 320px | 1266px | Hero consumes several screens before the first proof section. |
| 390px | 1230px | Repeated capability badges and proof make the opening dense. |
| 768px | 1221px | Tablet still reads as a long stacked hero. |
| 1024px | 1327px | Large-tablet hero is taller than the viewport. |
| 1440px | 1000px | Desktop composition is visually strong but still oversized. |
| 1728px | 1115px | Full-bleed image dominates the opening. |

Full-page captures reached 17,452px at 390px, 13,353px at 768px, and 10,652px at 1440px. No horizontal overflow or unexpected runtime errors were observed at 320, 390, 768, 1024, 1440, or 1728px.

Baseline screenshots are stored outside the repository at:

`/Users/salmenkhelifi/.codex/visualizations/2026/09/12/01a0936a-8606-7720-8bbe-6a0aba9e7189/portfolio-ux-baseline/`

## Journey audit

| Journey stage | Current strength | Current friction |
| --- | --- | --- |
| Understand | Strong headline and personal presence | Copy emphasizes implementation categories before buyer outcomes. |
| Recognize relevance | Multiple service areas are visible | The three hero badges repeat the later capability section. |
| See evidence | Four homepage projects and case-study routes | Evidence appears before a concise outcome map. |
| Trust | Verified rating, testimonials, personal image | Years/rating/location are repeated across hero, strip, feedback, and About. |
| Reduce risk | Detailed engineering proof and process | All technical detail is expanded by default, increasing cognitive load. |
| Process | Four documented stages | Concern/activity/deliverable treatment is visually heavy. |
| Act | Calendar, email, and CTA links work | Three equal contact actions create choice overload; there is no project brief. |

## Accessibility and quality baseline

- One semantic `h1`, an existing skip link, visible focus treatment, meaningful image alt text, reduced-motion handling, and 44px targets are already present.
- The mobile menu supports Escape and focus return, but does not yet contain keyboard focus while open.
- Dark-theme secondary/tertiary token values do not match the documented palette and need contrast correction.
- `npm run lint` passes with one pre-existing `next/no-img-element` warning in `src/components/mdx/MdxImage.tsx`.
- `npm run build` passes and generates 138 static pages.
- Existing focused tests pass.
- The SEO audit reports 11 pre-existing blog-title-length warnings; routes and metadata remain otherwise intact.

## Baseline conclusion

The redesign should preserve the existing proof and personal identity while reducing repetition, revealing technical detail on demand, moving outcome-oriented services ahead of work, and making a project brief the single primary conversion path.
