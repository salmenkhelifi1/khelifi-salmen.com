# PORTFOLIO REDESIGN SPECIFICATION

This design specification outlines the architectural and visual overhaul of the portfolio codebase. It references the current implementation in [globals.css](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/globals.css), [home-content.tsx](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/home-content.tsx), and [page.tsx](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/projects/[slug]/page.tsx).

---

## 1. DESIGN TOKENS

Implement these tokens inside `:root` in [globals.css](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/globals.css) using exact CSS custom properties:

```css
:root {
  /* Color Palette (Refined Dark Architecture) */
  --bg-page: #08080a;               /* Base layout background */
  --bg-surface: #0e0e12;            /* Cards and primary container fills */
  --bg-surface-elevated: #16161f;   /* Hover states and floating elements */
  
  --border-subtle: rgba(255, 255, 255, 0.03);
  --border-muted: rgba(255, 255, 255, 0.08);    /* Standard structural borders */
  --border-active: rgba(255, 255, 255, 0.16);   /* Interactive components on focus/hover */
  
  /* Text Hierarchy */
  --text-primary: #f5f5f7;          /* High contrast readability */
  --text-secondary: #8e8e93;        /* Meta tags, descriptions, labels */
  --text-tertiary: #515156;         /* Captions, subtle footer text */
  
  /* Accent (Single Color System: Steel Blue/Cyan) */
  --accent: #2f80ed;                /* Used sparingly: active indicators, key links */
  --accent-dim: rgba(47, 128, 237, 0.1);
  --accent-glow: rgba(47, 128, 237, 0.04);

  /* Spacing Scale (8pt grid system) */
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-24: 6rem;    /* 96px */

  /* Radius Scale */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;   /* Default card radius */

  /* Elevation & Shadows */
  --shadow-card: 0 4px 30px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  --shadow-hover: 0 10px 40px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  --glow-accent: 0 0 40px -10px rgba(47, 128, 237, 0.15);
}
```

### Type Scale (using native Manrope font)
- **Display Hero**: `font-size: 3.5rem (56px) / @media md: 5.5rem (88px) | line-height: 1.05 | letter-spacing: -0.04em | font-weight: 800`
- **H1 (Case Study Titles)**: `font-size: 2.75rem (44px) / @media md: 3.5rem (56px) | line-height: 1.1 | letter-spacing: -0.03em | font-weight: 700`
- **H2 (Section Titles)**: `font-size: 2rem (32px) / @media md: 2.25rem (36px) | line-height: 1.2 | letter-spacing: -0.02em | font-weight: 600`
- **H3 (Card Titles)**: `font-size: 1.25rem (20px) | line-height: 1.4 | letter-spacing: -0.01em | font-weight: 600`
- **Body Large**: `font-size: 1.125rem (18px) | line-height: 1.6 | letter-spacing: -0.01em | font-weight: 300`
- **Body Regular**: `font-size: 1rem (16px) | line-height: 1.6 | letter-spacing: 0 | font-weight: 400`
- **Caption / Badge**: `font-size: 0.75rem (12px) | line-height: 1.5 | letter-spacing: 0.05em | font-weight: 600 | text-transform: uppercase`

---

## 2. HOME PAGE REDESIGN ([home-content.tsx](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/home-content.tsx))

### A. Navigation Bar
- **Layout & Structure**: Keep horizontal flex layout with maximum constraint `max-w-7xl px-6`.
- **Aesthetic Refinement**: Replace generic border border-bottom with a subtle sub-pixel line (`border-bottom: 1px solid var(--border-subtle)`). Remove the primary solid blue dot from the logo. Make the dot high-fidelity gray or match `--accent`.
- **Primary CTA button**: Replace the white pill `Let's Talk` (`cta-primary` class) with a clean dark link bordered button that highlights on hover using a subtle accent background fade, instead of bright solid white.

### B. Hero Section
- **Aesthetic Refinement**: Remove the custom `.blob` elements and raw background inline CSS gradients. Implement a centered, sharp, and minimal ambient glow.
- **Lighting Effect**: Use a single static CSS radial-gradient pinned to top-center of the screen background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(47, 128, 237, 0.08), transparent 60%)`.
- **Hero Badge**: Remove the green blinking dot and plain styling. Redesign `AVAILABLE FOR NEW PROJECTS` badge into an elegant hairline border pill with `--text-secondary` and a micro `--accent` active dot.
- **Hero Copy**: Update title structure. The text gradient must transitions from `#ffffff` (top) to `#a1a1aa` (bottom) directly via standard vertical clipping (rather than diagonal coordinates).

### C. Technology Marquee
- **Layout & Structure**: Reduce marquee height. Apply exact mask gradient to left and right edges.
- **Typography & Interaction**: Items must use a dark monospaced styling (`font-mono`) or plain sans-serif in `--text-tertiary` without scaling text sizing. On hover, translate color smoothly to `--text-primary`.

### D. Selected Work Cards
- **Structural Alignment**: Completely remove the inconsistent 3D perspective mockups (device wrappers like `.phone-mockup` and `.laptop-screen-frame`). Replace them with modern, standard rounded rectangles with clean inset shadows.
- **Unified Card Layout**:
  - Left-to-right alternating flex container (`flex-row`/`flex-row-reverse`).
  - Left Column: Metadata tag (always styled using `--text-secondary`), `H3` title in `--text-primary`, description in `--text-secondary`, clean stack list tags, and a low-key action text link.
  - Right Column (Visual asset): An optimized, masked image preview cropped in an aspect ratio container (16:10 for desktop, 4:5 for mobile) using a standard high-fidelity mockup style overlay with `border: 1px solid var(--border-muted)`.
  - Color Normalization: Remove all per-project accent overrides (e.g. `text-emerald-400`, `text-purple-400`, `text-orange-400`). All text tags must default to `--text-secondary`, and hover link animations must utilize the single accent color `--accent`.

### E. Expertise Section
- **Grid Layout**: Maintain 3-column grid structure. Use equal paddings (`p-8` or `p-10`).
- **Card Aesthetics**: Replace inline linear card gradients with a solid `background-color: var(--bg-surface)` and a subtle `border: 1px solid var(--border-subtle)`.
- **Icons**: Remove multi-colored neon backgrounds. Use a unified background color of `var(--bg-surface-elevated)` for all icon containers with a singular color scheme for the actual SVG lines (`--text-secondary`).

### F. About Section & Footer
- **About Panel**: Convert the panel card into a flat container structure. Instead of isolated card panels, integrate the biography cleanly into the page background directly with layout alignment.
- **Social Links**: Replace standard scale transforms with a clean CSS opacity and color transition directly to `--accent`.
- **Footer**: Align structure to `max-w-7xl px-6`. Keep copyrights minimal and transition link styling to `--text-tertiary` with standard hover updates.

---

## 3. CASE STUDY PAGE REFINEMENTS ([page.tsx](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/projects/%5Bslug%5D/page.tsx))

- **Consistent System Style**: Clean up header background blobs. Align top headers and navigation elements to use the new system variables.
- **Overview Cards & Grid Systems**: Realign the overview grid layout to match the main layout's cards (`var(--bg-surface)` with `var(--border-subtle)`).
- **Features List**: Standardize the check icons' color properties to use `--accent`.
- **Key metrics / Challenges Table**: Ensure the tables match clean dark aesthetics. Explicitly style the headers and rows using `--border-subtle` and `--text-secondary` for secondary column content.
- **Hero Screenshots**: Remove absolute perspective transforms, using flat screenshot previews with `border: 1px solid var(--border-muted)` and simple drop-shadow elements instead.

---

## 4. MOTION & TRANSITIONS

Configure standard timings and parameters in `globals.css` using standard cubic-bezier curves for premium feel:

- **Interactive Elements (Buttons, Cards, Links)**:
  - Transition properties: `color`, `background-color`, `border-color`, `box-shadow`, `opacity`
  - Duration/Easing: `180ms cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out)
- **Entrance Animation (Reveal)**:
  - Translate direction: Vertical offset of `12px` (reduced from current `32px` for a tighter feel).
  - Duration/Easing: `600ms cubic-bezier(0.16, 1, 0.3, 1)` (decelerate curve)
- **Reduced Motion Support**:
  - Maintain the active `@media (prefers-reduced-motion: reduce)` block to strip translations, transitions, animations, and marquee loops.

---

## 5. ACCESSIBILITY (a11y)

- **Contrast Ratios**: 
  - Ensure all body text (`--text-secondary` on `--bg-page`) yields a contrast ratio of at least 4.5:1. 
  - Do not use text colors below `#8e8e93` on base dark backdrops for functional copy.
- **Focus Indicator Style**:
  - Global interactive elements must exhibit a uniform custom focus ring: `outline: 2px solid var(--accent); outline-offset: 4px;` when using keyboard navigation (`:focus-visible`).
- **Interactive Element Targets**:
  - Guarantee that all mobile touch target links measure at least `44px` in height and width.

---

## 6. SYSTEM CLEANUP (DELETIONS)

Remove the following legacy classes and animation keyframes from [globals.css](file:///Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio/src/app/globals.css) to eliminate the low-end aesthetic:

- **`.blob` and `@keyframes blob-bounce`**: Removes random, performance-intensive background movements.
- **`.phone-mockup`, `.phone-notch`, `.phone-screen`**: Clears bulky, manual CSS phone mockup structures.
- **`.laptop-wrapper`, `.laptop-screen-frame`, `.laptop-screen`, `.laptop-base`**: Clears CSS laptop framing systems.
- **`.hero-gradient`**: Removes raw, high-contrast, linear gradients.
- **`.modern-card::before` with hover highlights**: Removes complex radial gradient overlays inside cards in favor of a clean, performance-optimized border and background transition.
