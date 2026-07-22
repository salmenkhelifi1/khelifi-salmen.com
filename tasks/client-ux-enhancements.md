# Client-Psychology UX Enhancements

You know the tech. This doc is the other half — what a non-technical visitor actually
feels at each moment on the site, and where that feeling breaks. Written from the
"pretend I'm a client who just found this site" angle, not a code-review angle.

Already fixed (2026-07-20): work-section category filter (lets a visitor jump straight
to relevant projects instead of scrolling past 15 unrelated ones — see commit on `dev`).

Everything below is a prioritized backlog, not a to-do list you have to clear today.
Each item says what the client feels, why it matters, and roughly how big the fix is.

## High priority — trust and conversion moments

**1. The 30-second test: does a stranger know what you *do for them* in 30 seconds?**
Right now the hero says "Building automated digital ecosystems" — that's a line that
sounds good to *you* but a business owner reading it doesn't picture their own problem
getting solved. Compare to something like "I build the booking system, online store, or
automation that's currently costing you time or customers." The gap: your work is
concrete and outcome-driven (real case studies, real metrics); your headline is
abstract. Client psychology: people don't hire a "digital ecosystem," they hire someone
to fix *their* specific headache. Worth a copy pass on the hero line specifically —
keep the current subhead, it already does this better ("I build systems that drive
revenue").

**2. Testimonials don't match the pitch.**
The hero and case studies sell "I build SaaS platforms and booking systems." The 4
testimonials are all about small technical gigs — bug fixes, an automation script,
server troubleshooting. A skeptical client reads both and notices the mismatch: "if he's
built real platforms, why do all the reviews sound like small freelance tasks?" This
isn't fixable with a code change — it needs 1-2 testimonials from clients who hired you
for exactly the kind of work you're now leading with (Luxe Spa, Anlingo, Chaktech, if
any of those clients would give a quote). Until then, consider whether the testimonial
section should sit lower on the page (after the case studies have already built trust)
rather than right after the hero.

**3. No visible price signal anywhere.**
A client scrolling the whole site never gets even a rough sense of "is this $500 or
$50,000." That ambiguity is itself a friction point — people self-select out rather than
ask, because asking about money feels like commitment. You don't need public pricing,
but something like "Projects typically start at $X" or "Most engagements run 2-6 weeks"
on the booking CTA removes the single biggest reason a curious visitor never books the
call.

**4. The booking CTA doesn't say what happens on the call.**
"Book a 30-min call" is friction-neutral but doesn't reduce anxiety. A first-time visitor
doesn't know if this is a sales pitch, a technical interview, or a real scoping
conversation. The "How I Work" section (Discovery call → Proposal & spec → Build with
weekly demos → Launch & support) already answers this — but it's a separate section, not
attached to the CTA itself. Consider a one-line sub-caption under the primary "Book a
30-min call" button: "Free scoping call, no pressure — we'll figure out if it's a fit."

## Medium priority — perception and polish

**5. Perceived load / "is this broken" moment.**
Several project images render with a visible blank/black frame for a second before the
photo pops in (confirmed benign — just image lazy-load timing, not a real bug). For a
technical visitor this reads as "still loading." For a non-technical one, a beat of
"is this broken?" is a real, if small, trust ding on first impression. A simple fix:
add a low-res blurred placeholder (Next.js Image already supports `placeholder="blur"`)
so the space never reads as empty.

**6. Mobile first impression.**
Checked at 390px (2026-07-20): filter pills wrap cleanly, tap targets are comfortable,
"All" reads clearly active. No action needed right now — flagging as a standing
reminder, since more than half of first visits to a freelancer's site are on a phone
(LinkedIn/Upwork link, a text, a referral), so any future homepage change should get
the same mobile check before shipping.

**7. No sense of "who else has hired him" at a glance.**
Client counts, years active, or a simple "X projects shipped" stat near the hero gives
an instant credibility anchor before anyone reads a single case study. You have the raw
material (15+ real projects) but nowhere does the number itself do any work for you.

## Lower priority — nice-to-haves

**8. No FAQ / objection-handling section.**
Common client hesitations ("how do payments work," "what if I don't like the direction
halfway through," "do you sign an NDA") go unaddressed. A short FAQ near the bottom
answers these before they become reasons not to book — most people won't email to ask,
they'll just leave.

**9. Response-time expectation.**
Nothing tells a visitor how fast you reply once they book or message. "I typically
respond within 24 hours" is a small line that removes a real source of hesitation
("will this even go anywhere").

**10. Case-study social proof is buried per-project.**
The Luxe Spa case study has a real "Live Demo" button and concrete challenge/solution
detail — genuinely your strongest trust-builder. Consider surfacing one standout metric
or quote from your best case study directly on the homepage card, not just inside the
case study itself, so visitors who don't click through still see it.

## How to use this

Pick 2-3 items that map to an actual upcoming conversation with a client (not all 10 at
once) — the point isn't to gold-plate the site, it's to remove the specific friction
that's currently costing you a booked call.
