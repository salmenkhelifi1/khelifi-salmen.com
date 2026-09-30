# UTM Tracking Guide

Pattern: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`. PostHog picks these up automatically (`save_campaign_params: true`); GA4 too. Do not UTM-tag normal organic nav — only owned outbound links below.

## LinkedIn profile (website link)

`https://www.khelifi-salmen.com/?utm_source=linkedin&utm_medium=profile&utm_campaign=portfolio`

## LinkedIn post

`https://www.khelifi-salmen.com/work?utm_source=linkedin&utm_medium=social&utm_campaign=<post-slug>&utm_content=<post-date>`
Example: `.../work?utm_source=linkedin&utm_medium=social&utm_campaign=noxivo-case-study&utm_content=2026-10-05`

## Freelancer profile

`https://www.khelifi-salmen.com/?utm_source=freelancer&utm_medium=profile&utm_campaign=portfolio`

## GitHub profile / repo

`https://www.khelifi-salmen.com/?utm_source=github&utm_medium=profile&utm_campaign=portfolio`

## Direct outreach (email/DM proposal)

`https://www.khelifi-salmen.com/?utm_source=outreach&utm_medium=email&utm_campaign=<prospect-or-batch>&utm_content=<date>`
Example: `...?utm_source=outreach&utm_medium=email&utm_campaign=agencies-batch-3&utm_content=2026-10-01`
For DMs use `utm_medium=dm`.

## Job application (when appropriate)

`https://www.khelifi-salmen.com/resume?utm_source=application&utm_medium=job-board&utm_campaign=<company-role>&utm_content=<date>`
Example: `.../resume?utm_source=application&utm_medium=job-board&utm_campaign=acme-frontend&utm_content=2026-10-02`
Prefer the site root if the board strips deep links.

## CV PDF / campaigns

Printed CVs cannot carry clicks; use the plain domain. For digital CVs use:
`https://www.khelifi-salmen.com/?utm_source=cv&utm_medium=pdf&utm_campaign=<version>&utm_content=<date>`

## Rules

- lowercase, hyphens, no spaces/PII.
- `utm_campaign` = what piece; `utm_content` = which instance/date.
- Verify attribution in PostHog with `?utm_source=test&utm_medium=test&utm_campaign=verify` once, then remove test data via internal filter.
