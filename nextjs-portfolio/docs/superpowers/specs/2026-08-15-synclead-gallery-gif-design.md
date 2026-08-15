# SyncLead gallery GIF design

## Goal

Replace the outdated full-project MP4 with one animated GIF assembled from the seven current 1280×720 SyncLead portfolio screenshots.

## Media

The GIF follows the existing gallery order: dashboard, unified messaging, AI assistant, campaign management, quote detail, shared calendar, and public landing page. Each screenshot is shown for two seconds. The animation plays once and holds on the final screen to avoid permanent motion.

## Integration

Render the GIF with the existing Next.js `Image` component, useful alt text, responsive sizing, and `unoptimized` so Next.js does not alter the animation. Keep the seven individual controlled MP4 walkthroughs unchanged below it. Remove the obsolete full-project MP4 from public assets.

## Verification

The regression check must reject the old full-project MP4 reference and require the new GIF. Verify the GIF is 1280×720 with seven frames, then run tests, lint, build, and live HTTP checks after deployment.
