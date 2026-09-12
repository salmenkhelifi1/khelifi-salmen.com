# UX/HCI Implementation Plan

## Task contract

**Outcome:** Rebuild the homepage journey around clear buyer outcomes and verified proof, with a low-friction project brief that works in light and dark themes across phone, tablet, and desktop.

**Why now:** The portfolio is a public trust and client-acquisition surface. Its current length, repetition, and equal-weight calls to action make it harder for qualified visitors to understand relevance and act.

**Acceptance criteria:**

- Homepage follows: header, hero, trust, outcomes, work, strongest testimonial, engineering proof, process, About, conversion, footer.
- Hero has one primary action (`Tell me about your project`), one secondary action (`View selected work`), and a tertiary calendar link.
- The approved personal image remains prominent on desktop and compact on tablets; compact phones may hide the non-essential image to protect the primary task.
- Capability language is buyer-outcome-first.
- Technical proof and secondary testimonial/process details use accessible native disclosure.
- Contact flow labels required/optional fields, validates input, provides accessible error/status feedback, includes a honeypot, and truthfully opens a structured email draft.
- Current case studies, verified claims, testimonials, routes, SEO, analytics, theme controls, and external links remain available.
- No horizontal overflow at 320, 375, 390, 768, 1024, 1280, 1440, or 1728px.
- Keyboard navigation, focus visibility, mobile menu, theme switching, reduced motion, and 200% zoom remain usable.
- Lint, focused tests, typecheck/build, production browser checks, and internal-link checks complete successfully, with pre-existing warnings documented separately.

**Out of scope:** Rewriting case-study facts, changing URLs/slugs, adding a form service or dependency, changing analytics providers, modifying unrelated SEO work, committing, pushing, or deploying.

## Implementation sequence

1. Update `DESIGN.md` from hero-only scope to the approved full-homepage system.
2. Recompose the homepage and remove repeated trust/capability content from the hero.
3. Update capability and process language without changing verified project facts.
4. Simplify testimonial, engineering-proof, and process components with native `<details>` disclosure.
5. Add the accessible project-brief email flow and de-emphasize Fiverr/newsletter entry points in the footer.
6. Correct theme contrast and responsive spacing using existing tokens and CSS, without adding dependencies.
7. Verify lint, focused tests, build, routes, keyboard behavior, themes, disclosures, form states, viewport coverage, reduced motion, and rendered screenshots.
8. Record before/after evidence and any residual limitations in `UX_REDESIGN_FINAL_REPORT.md`.

## Design decision

The generated UI design-system suggestion recommended a more motion-heavy, monospace portfolio treatment. That conflicts with the approved personal/editorial reference and the repository's established Manrope system. This implementation keeps Manrope and restrained motion while adopting the useful parts: monochrome surfaces, cobalt interaction emphasis, stronger contrast, clearer hierarchy, and a responsive evidence-first portfolio grid.

## Exact next action

Revise `DESIGN.md`, then implement the approved hierarchy in existing homepage components and data using native HTML/CSS patterns first.
