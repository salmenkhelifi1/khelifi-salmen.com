# SyncLead Portfolio Card Design

## Goal

Give SyncLead the same tall, prominent grid presence as FoundPeers so its product interface is readable at a glance.

## Chosen design

- Reuse the existing `4:5` portrait-preview treatment in `CompactProject`.
- Replace the current landscape listing cover with a dedicated `4:5` SyncLead crop that focuses on the verified quote workspace.
- Keep the card title, category, link, grid columns, and case-study page unchanged.
- Keep the original 4K screenshots and videos unchanged on the case-study page.

## Implementation boundary

The change is limited to SyncLead project metadata and one public cover asset. It will not add components, dependencies, layout abstractions, or portfolio-wide styling changes.

## Responsive behavior

The cover will use the existing responsive `next/image` behavior, `object-cover`, top alignment, and lazy loading. At desktop and mobile widths, the card should use the same `4:5` visual height as other portrait previews without horizontal overflow.

## Verification

- Confirm the focused diff contains only SyncLead metadata and the replacement cover.
- Run the existing lint command and production build.
- Verify the work page and SyncLead case-study route locally.
- After the approved commit and push, confirm the live asset and work page return HTTP 200.
- Check desktop and mobile rendering in a real browser, including image source, dimensions, page errors, and horizontal overflow.

## Out of scope

- Redesigning the project grid.
- Changing other project cards.
- Altering SyncLead case-study copy or verified QA claims.
- Copying additional demo media.
