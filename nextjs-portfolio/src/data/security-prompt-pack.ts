export type PromptStage = {
  number: number;
  title: string;
  prompt: string;
  why: string;
};

export const promptStages: PromptStage[] = [
  {
    number: 1,
    title: "Map the architecture",
    prompt:
      "Before any security work, map this codebase. List every entry point: HTTP routes, server actions, background jobs, webhooks, scheduled tasks and CLI commands. For each one give me: the path, the HTTP method, whether authentication is required, whether authorization is checked, and which database tables it touches. Present it as a table. Where you cannot determine something from the code, write UNKNOWN rather than guessing.",
    why: "You cannot audit what you have not enumerated. UNKNOWN is the instruction that matters: it is what stops the model inventing coverage.",
  },
  {
    number: 2,
    title: "Build the threat model",
    prompt:
      "Using the entry point table above, build a threat model for this application. For each entry point, identify what an attacker would try: broken object-level authorization, injection, secret exposure, unsafe automation, and business-logic abuse. Rank each threat by likelihood and blast radius. Focus on what is actually reachable in this code, not generic OWASP items.",
    why: "An unranked list of every possible vulnerability is noise. You want the handful that are reachable here.",
  },
  {
    number: 3,
    title: "Audit with evidence",
    prompt:
      "For each high-ranked threat, audit the code and produce findings. Every finding MUST include: the exact file and line, the vulnerable code quoted verbatim, a concrete exploitation scenario with specific inputs, and the impact. If you cannot cite a file and line, do not report the finding. Do not report theoretical issues.",
    why: "\"You should validate user input\" is worthless. \"src/api/orders.ts:47 reads req.params.id and queries without checking ownership\" is actionable. The file-and-line requirement is what forces the difference.",
  },
  {
    number: 4,
    title: "Challenge the findings",
    prompt:
      "Now argue against your own findings. For each one, make the strongest case that it is a false positive. Check whether a guard exists elsewhere: middleware, a database policy, an RLS rule, a framework default, or a type constraint. Then give a final verdict per finding: CONFIRMED, or FALSE POSITIVE with the reason.",
    why: "This is the stage people skip and it is the one that pays. Models pattern-match to vulnerability shapes and report guards they did not look for. Making it adversarial to its own output removes most of the noise.",
  },
  {
    number: 5,
    title: "Plan the fixes",
    prompt:
      "For every CONFIRMED finding, propose a fix. For each: the smallest change that closes it, what it might break, and how to verify it worked. Order by risk reduced per unit of effort. Do not write any code yet.",
    why: "Separating the plan from the edit stops the agent rewriting half your codebase to fix one missing check.",
  },
  {
    number: 6,
    title: "Apply, one at a time",
    prompt:
      "Apply fix #1 only. Show me the diff. Do not touch any other file. Do not refactor anything you were not asked to change.",
    why: "One fix per turn keeps the diff reviewable. A twelve-file security \"fix\" is not reviewable, and unreviewed security changes are how you introduce the next bug.",
  },
  {
    number: 7,
    title: "Verify independently",
    prompt:
      "Start a fresh session with no memory of the previous work. Here is the codebase. Audit these specific concerns: [paste your CONFIRMED list]. Tell me, with file and line evidence, whether each is now closed. Do not trust any comment or commit message claiming a fix.",
    why: "The model that wrote the fix is the worst judge of the fix. A clean session with no stake in the previous answer is the check that counts.",
  },
];
