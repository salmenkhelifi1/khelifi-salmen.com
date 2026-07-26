# Adaptifit Case Study Update

## Goal

Update the existing `/projects/adaptifit` portfolio case study so it accurately presents Adaptifit as a client project and demonstrates Salmen Khelifi's verified engineering contribution.

## Positioning and credits

- Adaptifit is a client-owned product and brand.
- Salmen's role was Flutter, backend, and automation developer.
- A separate designer created the UI/UX; the case study must not imply Salmen designed it.
- Do not describe the project as solo-built.
- Do not mention publication or release status.
- Do not publish source-code links.

## Verified engineering scope

- Flutter and Dart mobile implementation using Riverpod.
- Express API backed by MongoDB and Mongoose.
- JWT authentication and secure client-side token storage.
- Workout, nutrition, calendar, progress, profile, and AI-coach flows.
- n8n workflows using OpenAI to generate plan, workout, nutrition, and calendar data through authenticated Express endpoints.

## Page changes

Reuse the existing project case-study route and components. Update the Adaptifit record in `src/data/projects.ts` with accurate copy, role, credits, technology stack, features, and engineering challenges. Render the existing optional `snapshot.team` field so the third-party UI/UX credit is visible without adding a new content model.

Replace the current low-quality Adaptifit gallery with a curated set of 8–10 supplied phone screenshots. Prioritize screens that prove the implemented product flows: daily plan, AI coach, calendar, workout details, nutrition, progress, profile, and upcoming plans. Keep authentication screenshots secondary or omit them when they add little engineering proof.

Use a supplied phone screenshot as the hero and preserve its full portrait composition rather than cropping it into a landscape frame. Update the existing homepage Adaptifit card copy and image only where needed for consistency.

## Content structure

1. Client-project headline and factual tagline.
2. Snapshot with role, engineering ownership, and design/brand credits.
3. Product problem and target user.
4. Four verified product flows.
5. Architecture derived from the verified Flutter, Express, MongoDB, n8n, and OpenAI stack.
6. Three engineering stories:
   - implementing supplied UI/UX faithfully in Flutter;
   - coordinating generated plan data through n8n and Express;
   - preserving consistent active-plan, calendar, workout, nutrition, and progress state during plan rewrites.
7. Curated mobile gallery.

## Error handling and trust boundaries

Do not add unsupported outcomes, metrics, ownership claims, or release claims. Keep links empty. Preserve the existing application behavior and accessibility semantics. Use descriptive image alternative text for every screenshot.

## Verification

- Run ESLint.
- Run the production Next.js build and typecheck.
- Review `/projects/adaptifit` at desktop and mobile widths.
- Confirm portrait screenshots are not visibly cropped.
- Confirm the page visibly credits the client brand and separate UI/UX designer.
- Confirm no existing unrelated working-tree changes are overwritten or committed.

## Out of scope

- Rebuilding or running the Adaptifit mobile/backend systems.
- Redesigning the portfolio case-study template.
- Creating a custom long-form MDX narrative.
- Publishing or deploying the portfolio.
- Changing the separate Spotter AI project or blog article.
