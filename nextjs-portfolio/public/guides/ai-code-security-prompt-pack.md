# The 7-Prompt Security Audit Pack

**For anyone shipping AI-generated code to production.**

Copy each prompt into Claude, ChatGPT or Codex, in order, in the same session as your codebase. Do not skip stage 4. That is the one that catches the confident, wrong answer.

By Salmen Khelifi — [khelifi-salmen.com](https://www.khelifi-salmen.com) — full guide at [guide.khelifi-salmen.com](https://guide.khelifi-salmen.com)

---

## Why this exists

A working application is not a secure application, and a confident AI response is not evidence.

The unsafe loop is `Idea → AI agent → Production`. The manual checks in between usually test the happy path: does the page load, does login work, does checkout return success. None of those answer a security question. Authorization bypasses, replayed webhooks, reusable reset tokens and browser-trusted prices all live *outside* the happy path.

These seven prompts force the model to produce evidence instead of reassurance.

---

## Stage 1 — Map the architecture

> Before any security work, map this codebase. List every entry point: HTTP routes, server actions, background jobs, webhooks, scheduled tasks and CLI commands. For each one give me: the path, the HTTP method, whether authentication is required, whether authorization is checked, and which database tables it touches. Present it as a table. Where you cannot determine something from the code, write UNKNOWN rather than guessing.

**Why:** you cannot audit what you have not enumerated. `UNKNOWN` is the instruction that matters — it is what stops the model inventing coverage.

---

## Stage 2 — Build the threat model

> Using the entry point table above, build a threat model for this application. For each entry point, identify what an attacker would try: broken object-level authorization, injection, secret exposure, unsafe automation, and business-logic abuse. Rank each threat by likelihood and blast radius. Focus on what is actually reachable in this code, not generic OWASP items.

**Why:** an unranked list of every possible vulnerability is noise. You want the handful that are reachable here.

---

## Stage 3 — Audit with evidence

> For each high-ranked threat, audit the code and produce findings. Every finding MUST include: the exact file and line, the vulnerable code quoted verbatim, a concrete exploitation scenario with specific inputs, and the impact. If you cannot cite a file and line, do not report the finding. Do not report theoretical issues.

**Why:** "you should validate user input" is worthless. `src/api/orders.ts:47 reads req.params.id and queries without checking ownership` is actionable. The file-and-line requirement is what forces the difference.

---

## Stage 4 — Challenge the findings

> Now argue against your own findings. For each one, make the strongest case that it is a false positive. Check whether a guard exists elsewhere: middleware, a database policy, an RLS rule, a framework default, or a type constraint. Then give a final verdict per finding: CONFIRMED, or FALSE POSITIVE with the reason.

**Why:** this is the stage people skip and it is the one that pays. Models pattern-match to vulnerability shapes and report guards they did not look for. Making it adversarial to its own output removes most of the noise.

---

## Stage 5 — Plan the fixes

> For every CONFIRMED finding, propose a fix. For each: the smallest change that closes it, what it might break, and how to verify it worked. Order by risk reduced per unit of effort. Do not write any code yet.

**Why:** separating the plan from the edit stops the agent rewriting half your codebase to fix one missing check.

---

## Stage 6 — Apply, one at a time

> Apply fix #1 only. Show me the diff. Do not touch any other file. Do not refactor anything you were not asked to change.

**Why:** one fix per turn keeps the diff reviewable. A twelve-file security "fix" is not reviewable, and unreviewed security changes are how you introduce the next bug.

---

## Stage 7 — Verify independently

> Start a fresh session with no memory of the previous work. Here is the codebase. Audit these specific concerns: [paste your CONFIRMED list]. Tell me, with file and line evidence, whether each is now closed. Do not trust any comment or commit message claiming a fix.

**Why:** the model that wrote the fix is the worst judge of the fix. A clean session with no stake in the previous answer is the check that counts.

---

## The rule underneath all seven

**Evidence, not assurance.** Every stage demands a file, a line, an input, or a diff. Any answer that cannot produce one gets discarded.

Speed from AI is real. So is the risk. These prompts are the gate between the two.

---

*Found this useful? The full write-up with screenshots is at [guide.khelifi-salmen.com](https://guide.khelifi-salmen.com) — one practical guide a week on shipping AI-assisted software without shipping bugs.*
