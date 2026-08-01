# Handoff — Outreach CSV + Lead Enrichment

## 1. Outreach Comment CSV (DONE)

**File:** `brand-journal/backlink-match-opportunities.csv`

### What was done
- Scanned 112 blog posts → matched 199 link-building opportunities across 6 platforms
- Added **Outreach Comment** column with copy-paste ready messages
- Each comment contains: blog link (`https://khelifi-salmen.com/blog/{slug}`) + thread URL

### Coverage
| Platform | Rows |
|---|---|
| reddit | 109 |
| indiehackers | 37 |
| hackernews | 21 |
| stackoverflow | 17 |
| linkedin | 10 |
| devto | 6 |

### How to use
1. Open `brand-journal/backlink-match-opportunities.csv`
2. Filter by `Priority` = `high` (best matches first)
3. Copy the `Outreach Comment` column → paste into the `Thread URL` discussion
4. Click-test URLs before engaging (some were constructed from patterns)
5. Post 3-5 comments/day to stay natural

## 2. Lead Enrichment Script (RUNNING)

**Script:** `/Users/salmenkhelifi/Developer/salmen/leadgen/enrich_leads.py`

### What it does
Uses **Gemini 2.5 Flash** (Vertex AI) to enrich `leads.csv` with emails + social profiles (Instagram, Facebook, LinkedIn, X/Twitter, TikTok, YouTube).

### Current status
- **12,252 leads** processed / unknown total
- **$1.47** API cost so far
- **Still running** — auto-resumes if interrupted
- Started: 15:36, PID 61032

### Commands
```bash
python3 enrich_leads.py              # resume / continue
python3 enrich_leads.py --reset       # start fresh
python3 enrich_leads.py --test        # test 5 leads
python3 enrich_leads.py --limit=100   # process first 100
```

### Output
- `leads_enriched.csv` — original columns + enriched contact fields
- `enrich_state.json` — progress + cost (auto-resume)

## 3. Substack portfolio content (SAVED AS DRAFTS)

### Published post improved
- `Vibe Coding Isn’t the Problem—Shipping Unverified AI Code Is`
- Added an AI-readable `In brief` summary, stronger subtitle/description, and an author section linking to `https://www.khelifi-salmen.com/`.
- Verified live: https://salmenkhelifi.substack.com/p/vibe-coding-isnt-the-problemshipping

### Drafts ready for review (not published)
1. **How I Build Guarded AI Systems: Challenge, Risk, Decision, Verification**
   - Edit: https://salmenkhelifi.substack.com/publish/post/208495826
   - Uses the landing page's engineering-proof format and links to the portfolio plus Anlingo case study.
2. **How I Deliver Reliable Digital Products: Discover, Architect, Build, Launch**
   - Edit: https://salmenkhelifi.substack.com/publish/post/208495931
   - Uses the landing page's delivery-process format and links to the portfolio, work page, and blog.

### Reuse next time
- Follow `brand-journal/SUBSTACK_PORTFOLIO_PLAYBOOK.md`.
- Drafts do not affect Google until explicitly published and crawled.
