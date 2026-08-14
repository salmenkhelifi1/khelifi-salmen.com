# SyncLead Portfolio Card Design

## Goal

Give SyncLead the same tall, prominent grid presence as FoundPeers while keeping complete browser screens visible without cropping their edges.

## Chosen design

- Reuse the existing `4:5` portrait-preview treatment in `CompactProject`.
- Replace the cropped listing cover with one `800x1000` asset containing two complete browser screenshots stacked in equal `800x500` rows.
- Use the verified quote workspace in the top row and unified messaging workspace in the bottom row.
- Fit each original `16:9` screenshot inside its row with narrow neutral bands. Keep every browser edge visible; do not zoom, stretch, or crop either source.
- Keep the card title, category, link, grid columns, and case-study page unchanged.
- Keep the original 4K screenshots and videos unchanged on the case-study page.

## Implementation boundary

The change is limited to one public SyncLead cover asset. It will not add components, dependencies, layout abstractions, metadata changes, or portfolio-wide styling changes.

## Responsive behavior

The cover will use the existing responsive `next/image` behavior, `object-cover`, top alignment, and lazy loading. Because the generated asset is already `4:5`, `object-cover` will not remove any part of either embedded browser screen. At desktop and mobile widths, the card should retain the same visual dimensions as FoundPeers without horizontal overflow.

## Verification

- Confirm the focused implementation diff contains only the replacement SyncLead cover.
- Confirm the output is `800x1000` and both source screenshots retain their complete bounds and original aspect ratios.
- Run the existing lint command and production build.
- Verify the work page and SyncLead case-study route locally.
- After the approved commit and push, confirm the live asset and work page return HTTP 200.
- Check desktop and mobile rendering in a real browser, including image source, dimensions, page errors, and horizontal overflow.

## Out of scope

- Redesigning the project grid.
- Changing other project cards.
- Altering SyncLead case-study copy or verified QA claims.
- Copying additional demo media.
