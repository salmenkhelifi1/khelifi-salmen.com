# Adaptifit Case Study Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Update the existing Adaptifit portfolio case study with accurate client/developer credits and real mobile-product proof.

**Architecture:** Keep the current \`/projects/[slug]\` route and data-driven \`Project\` model. Add only the missing \`snapshot.team\` rendering, update the Adaptifit data record, stage a curated portrait gallery, and make the Adaptifit hero preserve the portrait screenshot instead of cropping it.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, \`next/image\`, static PNG assets.

---

### Task 1: Stage the curated Adaptifit screenshots

**Files:**
- Create: \`nextjs-portfolio/public/images/adaptifit/my-plan.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/coach.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/profile.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/calendar.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/workout.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/workout-list.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/daily-plan.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/nutrition.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/upcoming-plan.png\`
- Create: \`nextjs-portfolio/public/images/adaptifit/progress.png\`

- [ ] **Step 1: Create the destination directory**

Run from \`/Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com\`:

~~~
mkdir -p nextjs-portfolio/public/images/adaptifit
~~~

- [ ] **Step 2: Copy the exact supplied screenshots**

~~~
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.05.14.png" nextjs-portfolio/public/images/adaptifit/my-plan.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.05.24.png" nextjs-portfolio/public/images/adaptifit/coach.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.05.32.png" nextjs-portfolio/public/images/adaptifit/profile.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.06.14.png" nextjs-portfolio/public/images/adaptifit/calendar.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.06.04.png" nextjs-portfolio/public/images/adaptifit/workout.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.06.33.png" nextjs-portfolio/public/images/adaptifit/workout-list.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.06.24.png" nextjs-portfolio/public/images/adaptifit/daily-plan.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.06.47.png" nextjs-portfolio/public/images/adaptifit/nutrition.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.07.02.png" nextjs-portfolio/public/images/adaptifit/upcoming-plan.png
cp "/Users/salmenkhelifi/Developer/adaptifit/screen/Screenshot 2026-07-26 at 18.05.40.png" nextjs-portfolio/public/images/adaptifit/progress.png
~~~

- [ ] **Step 3: Verify the staged files are readable PNGs**

Run:

~~~
file nextjs-portfolio/public/images/adaptifit/*.png
~~~

Expected: ten \`PNG image data\` entries and no missing-file errors.

### Task 2: Add the client/developer case-study content

**Files:**
- Modify: \`nextjs-portfolio/src/data/projects.ts:362-430\`

- [ ] **Step 1: Replace the Adaptifit record with the factual project scope**

Use this content shape in the existing \`adaptifit\` object:

~~~ts
{
  slug: "adaptifit",
  title: "Adaptifit",
  tagline:
    "A client fitness and nutrition app implemented in Flutter, backed by an Express API and n8n-powered AI plan generation.",
  category: "Client Fitness & Nutrition App",
  heroImage: "/images/adaptifit/my-plan.png",
  galleryAspect: "phone",
  overview: {
    what:
      "A cross-platform Flutter mobile app that turns a client's fitness product brief and supplied UI/UX into daily workout plans, nutrition plans, progress tracking, calendar views, profile management, and an AI coach experience. The app connects to an Express and MongoDB backend, with n8n workflows coordinating AI-generated plan data.",
    problem:
      "Fitness users need one place to follow an adaptive workout and nutrition routine instead of managing plans, meals, completion data, and coaching conversations across separate tools.",
    audience:
      "People following a personalized fitness and nutrition program through the client's Adaptifit product.",
  },
  techStack: {
    frontend: ["Flutter", "Dart", "Riverpod"],
    backend: ["Express.js", "MongoDB", "Mongoose", "JWT authentication"],
    tools: ["n8n", "OpenAI"],
  },
  badges: ["Flutter", "Express.js", "MongoDB", "n8n", "OpenAI"],
  links: {},
  snapshot: {
    role: "Flutter, backend & automation developer",
    ownership:
      "Flutter mobile implementation, Express/MongoDB API, authentication and data flows, progress/calendar integration, and n8n AI workflows",
    team: "Client-owned brand; UI/UX created by a separate designer",
    industry: "Fitness and wellness",
    platform: "Mobile",
  },
}
~~~

- [ ] **Step 2: Add four product-flow features**

Use these four feature entries so the existing key-flow and engineering-decision sections stay useful:

~~~ts
features: [
  {
    title: "Personalized Daily Plans",
    description:
      "Workout and nutrition plans are generated from the user's profile and surfaced as a single daily routine with completion state and upcoming-plan previews.",
  },
  {
    title: "Workout, Nutrition & Calendar Flows",
    description:
      "Users can move from calendar dates to workout details, exercise sets, meal breakdowns, hydration targets, and daily tasks without leaving the mobile flow.",
  },
  {
    title: "AI Coach Chat",
    description:
      "The Flutter coach experience sends authenticated prompts through Express to an n8n webhook and stores the resulting conversation history.",
  },
  {
    title: "Progress & Plan Management",
    description:
      "Profile progress, completed workouts and meals, streak-oriented feedback, and plan rewriting are connected to the same backend data model.",
  },
],
~~~

- [ ] **Step 3: Add three engineering challenges**

~~~ts
challenges: [
  {
    challenge: "Implementing an existing client-owned visual system without claiming design ownership",
    solution:
      "Translated the supplied brand and UI/UX into reusable Flutter screens, navigation, state, and responsive mobile layouts while keeping the portfolio credit explicit: the client owns the brand and a separate designer created the UI/UX.",
  },
  {
    challenge: "Turning AI output into consistent product data",
    solution:
      "Connected Express endpoints to n8n workflows that generate and parse AI output, then save the main plan, individual workouts, nutrition, and calendar entries through authenticated API calls.",
  },
  {
    challenge: "Keeping plan rewrites and progress views aligned",
    solution:
      "Handled active-plan replacement across related workout, nutrition, and calendar records so the mobile app can regenerate a plan without leaving stale data visible in the user's daily flow.",
  },
],
~~~

### Task 3: Render the existing team-credit field and preserve the portrait hero

**Files:**
- Modify: \`nextjs-portfolio/src/app/projects/[slug]/page.tsx:388-394\`
- Modify: \`nextjs-portfolio/src/app/projects/[slug]/page.tsx:545-555\`

- [ ] **Step 1: Include \`snapshot.team\` in the existing snapshot list**

Add this entry immediately after the ownership entry:

~~~tsx
["Team / Credits", project.snapshot.team],
~~~

The existing \`Boolean\` filter already omits the field for projects that do not provide it.

- [ ] **Step 2: Use \`object-contain\` only for Adaptifit's portrait hero**

Change the hero image class from:

~~~tsx
className="object-cover bg-black"
~~~

to:

~~~tsx
className={\`\${project.slug === "adaptifit" ? "object-contain" : "object-cover"} bg-black\`}
~~~

This keeps every other project's rendering unchanged and prevents the new phone screenshot from being cropped.

### Task 4: Align the homepage card with the updated case study

**Files:**
- Modify: \`nextjs-portfolio/src/data/homepage.ts:285-297\`

- [ ] **Step 1: Point the Adaptifit card at the new hero and client-focused copy**

Keep its existing route and tags, but use:

~~~ts
description:
  "Client fitness and nutrition app implemented in Flutter with an Express/MongoDB backend and n8n-powered AI plan generation.",
tags: ["Flutter", "Express.js", "MongoDB", "n8n", "OpenAI"],
image: "/images/adaptifit/my-plan.png",
~~~

- [ ] **Step 2: Confirm the card still links to \`/projects/adaptifit\`**

Do not add a public source or live-demo link.

### Task 5: Verify the route and content

**Files:**
- Test: \`nextjs-portfolio/src/data/projects.ts\`
- Test: \`nextjs-portfolio/src/app/projects/[slug]/page.tsx\`
- Test: \`nextjs-portfolio/public/images/adaptifit/*.png\`

- [ ] **Step 1: Run lint**

Run from \`/Users/salmenkhelifi/Developer/salmen/khelifi-salmen.com/nextjs-portfolio\`:

~~~
npm run lint
~~~

Expected: exit code 0.

- [ ] **Step 2: Run the production build**

~~~
npm run build
~~~

Expected: exit code 0 and \`/projects/adaptifit\` included in the generated routes.

- [ ] **Step 3: Run the app and review both breakpoints**

~~~
npm run dev
~~~

Open \`http://localhost:3000/projects/adaptifit\` and verify:

- the snapshot visibly says “Team / Credits”;
- the role and ownership text do not say “solo”;
- the page does not claim Salmen designed the UI/UX;
- the portrait hero is fully visible;
- all ten curated gallery images load with descriptive alt text;
- desktop and mobile layouts remain readable.

- [ ] **Step 4: Review only the intended diff**

~~~
git status --short
git diff --check
git diff -- src/data/projects.ts src/app/projects/'[slug]'/page.tsx src/data/homepage.ts
~~~

Expected: no whitespace errors and no unrelated files staged or overwritten.

