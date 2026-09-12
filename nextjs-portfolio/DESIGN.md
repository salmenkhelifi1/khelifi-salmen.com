# Khelifi Salmen Portfolio Design System

## 1. Atmosphere & Identity

An editorial portfolio for a senior product engineer: quiet, personal, and
confident rather than a generic SaaS dashboard. The full homepage follows a
client decision journey: understand, recognize relevance, see evidence, trust,
reduce risk, understand the process, and act.

The supplied Option 1 image is a directional reference, not a pixel target.
Its useful grammar is an airy left-aligned hero, strong display type, restrained
cobalt emphasis, and one integrated visual moment. The existing repository is
the source of truth for copy, project facts, routes, and functionality.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|------|------|------|------|
| Page | `--bg-page` | `#f6f6f8` | `#070b12` | Page canvas |
| Surface | `--bg-surface` | `#ffffff` | `#0d1420` | Existing section surfaces |
| Elevated surface | `--bg-surface-elevated` | `#fcfcfd` | `#121c2a` | Existing controls |
| Primary text | `--text-primary` | `#14141a` | `#f4f6fa` | Headings and body emphasis |
| Secondary text | `--text-secondary` | `#52525b` | `#a0afc4` | Supporting copy |
| Tertiary text | `--text-tertiary` | `#6b6b76` | `#71809a` | Metadata and labels |
| Subtle border | `--border-subtle` | `rgba(15,15,20,.05)` | `rgba(148,163,184,.12)` | Dividers |
| Muted border | `--border-muted` | `rgba(15,15,20,.10)` | `rgba(148,163,184,.20)` | Media edges |
| Active border | `--border-active` | `rgba(15,15,20,.18)` | `rgba(148,163,184,.32)` | Hover/focus-adjacent edges |
| Accent | `--accent` | `#1b64d8` | `#3b8cf8` | CTAs, links, highlight |
| Accent hover | `--accent-hover` | `#124da9` | `#67a7ff` | Interactive hover |
| CTA fill | `--cta-bg` | `#1b64d8` | `#1b64d8` | AA-compliant filled actions |
| Text on accent | `--text-on-accent` | `#ffffff` | `#ffffff` | Filled CTA text |
| Hero cobalt wash | `--hero-cobalt-wash` | `rgba(27,100,216,.08)` | `rgba(47,128,237,.16)` | Restrained ambient light |
| Hero warm wash | `--hero-warm-wash` | `rgba(185,100,60,.06)` | `rgba(240,160,110,.12)` | Workspace-side warmth |

### Rules

- The accent is reserved for interaction and the single highlighted phrase.
- Warm light belongs to the workspace image, not to a second UI accent.
- Light-mode primary CTAs use the opaque accent with `--text-on-accent`; translucent
  glass treatment remains reserved for secondary controls.
- Background depth comes from the page canvas, restrained cobalt/warm washes,
  and photographic light. Purple nebula effects and decorative blobs are not
  part of the system.
- Light theme support remains intact through the existing `[data-theme="light"]`
  tokens.

## 3. Typography

### Scale

| Level | Size | Weight | Line height | Tracking | Usage |
|------|------|------|------|------|------|
| Display | `clamp(3rem, 5.25vw, 5.5rem)` | 800 | `.98` | `-.055em` | Hero headline |
| H1 | `clamp(2.75rem, 5vw, 4.5rem)` | 700 | `1.05` | `-.04em` | Page titles |
| H2 | `2rem` to `2.25rem` | 600 | `1.2` | `-.02em` | Section headings |
| H3 | `1.25rem` | 600 | `1.4` | `-.01em` | Card headings |
| Body large | `1.125rem` | 300/400 | `1.6` | `-.01em` | Lead copy |
| Body | `1rem` | 400 | `1.6` | `0` | Default copy |
| Caption | `.75rem` | 600 | `1.5` | `.05em` | Small labels |

### Font stack

- Primary: Manrope, `--font-manrope`, with the existing Google font loader.
- Mono: system monospace, only for verified technical metadata.

### Rules

- Keep the hero headline to three deliberate desktop lines and let it reflow
  naturally below tablet width.
- Use `text-wrap: balance` for display copy and `text-wrap: pretty` for body
  copy where supported.
- Body copy stays within roughly 65 characters per line.

## 4. Spacing & Layout

### Base unit

All authored spacing follows a 4px base unit. Existing spacing tokens are
retained for the rest of the site; the hero uses these intent tokens:

| Token | Value | Usage |
|------|------|------|
| `--space-2` | `8px` | Icon-to-label |
| `--space-4` | `16px` | Small groups |
| `--space-6` | `24px` | Copy rhythm |
| `--space-8` | `32px` | CTA/group separation |
| `--space-12` | `48px` | Hero proof row |
| `--space-16` | `64px` | Major hero spacing |
| `--space-24` | `96px` | Section-level breathing room |

### Grid

- Max content width: `1280px` (`max-w-7xl`).
- Desktop: 12-column CSS grid, 7 columns for copy and 5 for media alignment.
- Tablet: copy first, media below; no squeezed two-column layout.
- Small tablets keep the workspace photo in a compact landscape frame. Compact
  phones below `480px` hide it so the primary message and action remain within
  the opening viewport; the image carries no unique information.
- Large tablets (`1024px`–`1119px`) use a landscape `3:2` workspace frame and a
  balanced two-column credibility grid so the hero does not become a tall image
  wall or leave one proof item orphaned.
- Mobile: one column, 20px minimum side gutter, CTAs remain at least 44px high.
- Breakpoints: 640px, 768px, 1024px, 1280px.

## 5. Components

### Site header

- **Structure**: fixed `header` → `nav` → desktop links/actions or mobile menu.
- **Variants**: home navigation, back-link navigation on detail pages.
- **States**: default, hover, focus-visible, open mobile menu, reduced motion.
- **Accessibility**: existing skip link, labelled nav, Escape-to-close, focus return.
- **Motion**: short opacity/transform transition.
- **Layout**: fixed navigation over the document.

### Credibility strip

- **Structure**: one semantic strip with four icon-and-label proof items.
- **Responsive variants**: a single balanced row on wide screens, a two-column
  grid from `640px`–`1119px`, and a single readable column below `640px`.
- **Iconography**: one consistent 20px SVG stroke treatment; icons are
  decorative because each item also has a visible text label.

### Greeting kicker

- **Structure**: availability dot, personal greeting, and a compact hand icon
  badge.
- **States**: static, focus-adjacent, and reduced-motion; no decorative loop.
- **Iconography**: the hand keeps the existing Lucide source but gains a
  tactile accent badge and optical rotation so it reads as a greeting rather
  than a stop symbol.

### CTA button (existing shared primitive)

- **Structure**: semantic anchor with optional Cal.com data attributes.
- **Variants**: primary filled accent, secondary transparent/tonal.
- **Spacing**: `--space-4` to `--space-8`, minimum 44px block size.
- **States**: default, hover, active, focus-visible; disabled is not rendered.
- **Accessibility**: real `href`, visible focus outline, readable contrast.
- **Motion**: color/opacity/transform only, 120–180ms.

### Outcome card

- **Structure**: icon, buyer outcome, concise explanation, optional contextual link.
- **Variants**: three equal cards on desktop, one-column flow on mobile.
- **Content rule**: lead with what the visitor can achieve, then describe implementation scope.

### Evidence disclosure

- **Structure**: native `details` and `summary`, concise verified result,
  challenge/risk/decision detail, and a case-study link.
- **States**: collapsed, open, hover, focus-visible.
- **Accessibility**: platform keyboard behavior and exposed expanded state; no
  custom disclosure JavaScript.

### Project brief

- **Structure**: labelled name, email, problem, optional budget and timeline
  fields, honeypot, validation summary, submit action, and calendar alternative.
- **States**: default, focus, invalid, preparing, email-client opened.
- **Constraint**: without a server endpoint, the action truthfully prepares a
  structured email draft and never claims delivery.

### Hero composition

- **Structure**: full-bleed `section` → constrained grid → copy column + media column.
- **Variants**: desktop split, stacked tablet/mobile.
- **Spacing**: generous top padding, 24px copy rhythm, 32px CTA gap, 48px proof gap.
- **States**: reveal entry, hover/focus on CTAs, reduced-motion static state.
- **Accessibility**: labelled section, semantic `h1`, meaningful personal-image alt text, no
  information conveyed by the image alone.
- **Motion**: one staged reveal sequence plus CTA interaction; no decorative loop.
- **Layout**: document scroll owner; full-bleed desktop media becomes an intrinsic
  aspect-ratio frame on tablet and mobile.

### Media fade

- **Structure**: aspect-ratio media wrapper → optimized `next/image` → tonal and
  directional overlay layers.
- **Variants**: dark workspace hero; existing project media remains unchanged.
- **States**: blurred placeholder, loaded, hover only when the containing link
  is interactive.
- **Accessibility**: explicit alt text and intrinsic `sizes`; only approved personal
  identity imagery is used.
- **Motion**: opacity/transform entry only, disabled under reduced motion.

## 6. Motion & Interaction

| Type | Duration | Easing | Usage |
|------|------|------|------|
| Micro | `120ms` | `ease-out` | Press feedback |
| Standard | `180ms` | `ease-in-out` | CTA color/edge |
| Emphasis | `600ms` | `cubic-bezier(.16,1,.3,1)` | Hero reveal |

- Animate only `transform` and `opacity` for hero entry.
- The existing `IntersectionObserver` reveal system remains the single entry
  mechanism; no scroll listener or new animation dependency.
- `prefers-reduced-motion: reduce` removes the reveal movement and keeps content
  visible.

## 7. Depth & Surface

### Strategy

Mixed: open tonal canvas for the hero, restrained one-pixel edges for controls,
and photographic depth from the approved workspace image. The hero does not place a second
bordered diagram or card on the right.

### Hero layers

1. Near-black page token.
2. Low-opacity cobalt radial wash behind the copy.
3. Workspace image with subtle contrast/saturation adjustment.
4. Directional dark fade from copy into the workspace plus a bottom fade into the page.

Below the hero, open sections and restrained one-pixel borders replace repeated
glass panels. Glass remains limited to the fixed header and small controls where
layer separation is useful.

## 8. Accessibility Constraints & Accepted Debt

### Constraints

- WCAG 2.2 AA target: 4.5:1 body text and 3:1 large text minimum.
- Every interactive element keeps keyboard focus visibility and a 44px minimum
  target.
- Hero media has meaningful alt text, stable aspect ratio, and no layout shift.
- Mobile has no horizontal overflow; copy precedes the visual in DOM order.
- Reduced motion is respected.

### Accepted debt

| Item | Location | Why accepted | Owner / Exit |
|------|------|------|------|
| User-supplied generated workspace image | Design process | The approved image keeps the requested back-facing developer-workspace composition and identity | Replace only with another explicitly approved asset |
| Email-draft contact transport | Homepage contact section | No verified server-side contact endpoint exists and no new vendor/dependency is authorized | Add a first-party endpoint when delivery receipts, storage, and spam controls are approved |
