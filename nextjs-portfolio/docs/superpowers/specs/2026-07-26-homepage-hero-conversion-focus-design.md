# Homepage Hero: Conversion Focus

## Outcome

The homepage hero communicates the offer and next action within the first
viewport while preserving the existing premium dark, glass-based identity.
The headline remains dominant without clipping supporting content, and the
automation diagram acts as supporting proof rather than a competing focal
point.

## Why Now

The homepage is public proof and a lead-generation surface. Its current
desktop composition hides the supporting copy and actions on common laptop
screens, weakening both comprehension and conversion.

## Approved Direction

Use the selected **Conversion focus** composition:

- Give the message roughly two-thirds of the desktop layout.
- Keep the diagram visible on desktop as a smaller, quieter trust signal.
- Use fluid typography and spacing rather than fixed viewport-specific
  offsets.
- Make **Start a Project** the primary action and **View Selected Work** the
  secondary action.
- Prevent the global floating Cal button from competing with homepage actions.

## Layout and Hierarchy

The hero retains a two-column desktop grid. The content column receives more
space; the diagram receives less space and a bounded maximum size. The section
uses a viewport-aware minimum height but allows its content to grow naturally,
so short screens scroll instead of clipping.

The visual order is:

1. Availability badge
2. Value proposition
3. Supporting explanation
4. Capability proof
5. Primary and secondary actions
6. Automation diagram as supporting context

The headline uses `clamp()` for continuous scaling across viewport widths.
Vertical gaps become smaller on short screens and expand at larger heights.
The emphasized phrase uses a brighter cool-blue gradient so it reads as
intentional emphasis rather than disabled text.

## Responsive Behavior

- Wide and standard desktop: conversion-focused two-column layout with the
  complete diagram visible and vertically centered.
- Short desktop: reduced fluid type and spacing keep the supporting content
  and actions visible without overlap.
- Tablet and mobile: one-column content; the diagram stays hidden, matching
  the current intent and avoiding a cramped decorative element.
- CTA buttons stack on narrow mobile screens and remain at least 44px high.
- Content may wrap naturally without relying on fixed line breaks.

## Booking Interaction

The header and hero already expose Cal booking actions. The floating Cal button
does not initialize on the homepage, eliminating overlap and duplicated action
hierarchy. It remains available on other routes unless their existing page
design says otherwise.

## Accessibility

- Preserve one semantic `h1`, the capability list, and existing landmark
  structure.
- Preserve the global visible focus indicator and reduced-motion behavior.
- Keep interactive targets at least 44px.
- Raise contrast for headline emphasis, diagram lines, diagram nodes, and
  secondary copy without turning supporting elements into primary content.
- Decorative diagram connector lines remain hidden from assistive technology.

## Implementation Boundary

Reuse the existing hero, CTA, diagram, theme-token, and Cal components. Do not
add dependencies, redesign navigation, change the core headline, add new
animations, or alter sections below the credibility strip.

## Acceptance Criteria

- No hero content is clipped or overlapped at 1440×900, 1366×768, 1280×720,
  1024×768, 768×1024, or 390×844.
- The full supporting copy and both CTAs are reachable and readable at every
  tested size.
- The desktop diagram is fully visible and subordinate to the copy.
- **Start a Project** is the clear primary hero action.
- The floating Cal button is absent on the homepage.
- Keyboard focus is visible on navigation and hero actions.
- Production lint and build complete successfully.

## Verification

Run the existing lint and production build commands. Then inspect the running
production page at every acceptance viewport, capture screenshots, check for
horizontal overflow and element overlap, tab through the navigation and hero
actions, and verify reduced-motion behavior through the browser.

