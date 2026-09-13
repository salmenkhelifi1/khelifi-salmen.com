# GEO analysis

## GEO implementation readiness: 86/100

This is a code-and-content readiness score, not a measurement of AI citations.

| Platform | Readiness | Evidence |
| --- | --- | --- |
| Google AI features | Good | Static HTML, canonical metadata, descriptive headings, real project proof, and schema. |
| ChatGPT search | Good after deploy | `llms.txt`, explicit `OAI-SearchBot` in source robots, and answer-first service copy. |
| Perplexity | Good | Crawlable source, citations/links where available, structured project and article context. |
| Bing/Copilot | Good | Crawlable HTML and sitemap; IndexNow is not warranted for this mostly static site. |

## What changed

- Homepage now names Salmen Khelifi, Tunisia, remote availability, and the core delivery categories in the first answer block.
- The n8n page identifies the provider, service, process, and scope both visibly and in truthful JSON-LD.
- Blog articles now show author context and real update dates when available.
- `llms.txt` links the n8n page and full context; `llms-full.txt` covers FoundPeers and Luxe Spa without inventing outcomes.

## Crawler status

Repository output explicitly allows `OAI-SearchBot`, `ChatGPT-User`, `GPTBot`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, and standard crawlers. The live deployment observed during the audit did not match that source policy, so recheck `https://www.khelifi-salmen.com/robots.txt` after deployment.

## Limitations and next evidence

- No test of actual ChatGPT, Perplexity, Copilot, or Google AI Overview citation was performed.
- No new `FAQPage` or `HowTo` markup was added; it would not match the site or current rich-result eligibility.
- `llms.txt` is optional and experimental. The durable strategy is helpful, original, people-first content as described in [Google's AI features guidance](https://developers.google.com/search/docs/appearance/ai-features).
- Monthly manual checks should record target query, platform, cited URL, competing sources, and referral traffic.
