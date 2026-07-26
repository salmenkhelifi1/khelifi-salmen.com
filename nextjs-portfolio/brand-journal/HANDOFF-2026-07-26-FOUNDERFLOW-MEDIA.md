# FounderFlow portfolio media handoff — 2026-07-26

- Replaced the FounderFlow case-study cover and gallery captures with the verified `final-2026-07-26` retina media set.
- The case-study hero now uses the lossless animated WebP instead of the lower-quality GIF.
- Replaced both MP4 paths with the current nine-screen exports: a 3840×2160
  downloadable cut and a 1320×2868 portrait cut for the in-page phone player.
  Both are 15.8-second H.264/30 fps exports with Rec.709 metadata and zero
  `avmediainfo` errors.
- Added the verified Request Sent capture and updated the case-study description to the complete nine-screen flow.
- Pushed the replacement videos in `4384bec`; Netlify serves the new
  12,509,788-byte landscape and 17,336,364-byte portrait assets. Fresh public
  downloads match the source SHA-256 hashes exactly.
- Production build passed and commit `12d4b93` was pushed to `main`.
- Verified the new WebP reference on `https://www.khelifi-salmen.com/projects/founderflow`.
- No remaining media blocker. Use `final-2026-07-26` as the canonical portfolio source.
