# chatgpt Absolutely — I can help you create a complete set of **AI image prompts** for your project, including:

- Portfolio cover image
    
- Marketplace thumbnail
    
- Project showcase mockups
    
- Website or app page designs
    
- Desktop, tablet, and mobile screens
    
- Feature-highlight images
    
- Before-and-after visuals
    

Send me these details:

1. **Project name**
    
2. **Project type** — website, mobile app, dashboard, e-commerce store, branding project, etc.
    
3. **What the project does**
    
4. **Target users**
    
5. **Preferred style** — modern, minimal, luxury, futuristic, playful, dark mode, colorful, etc.
    
6. **Brand colors**
    
7. **Pages or screens you need**
    
8. **Image generator** you will use — ChatGPT, Midjourney, Leonardo, Ideogram, Flux, Firefly, or another tool
    
9. Any existing **logo, screenshots, sketches, or references**
    

Here is a reusable prompt structure:

Create a professional portfolio presentation image for “[PROJECT NAME],” a [PROJECT TYPE] designed for [TARGET USERS].

The project helps users [MAIN PURPOSE OR PROBLEM SOLVED].

Show [PAGE, SCREEN, OR FEATURE] inside a realistic premium device mockup. Use a [VISUAL STYLE] design direction with [BRAND COLORS]. The interface should include [IMPORTANT UI ELEMENTS].

Composition: clean and balanced layout, strong visual hierarchy, generous spacing, subtle shadows, realistic lighting, premium product-presentation aesthetic, high-end UI/UX case-study style.

Background: [BACKGROUND DESCRIPTION].

Camera and presentation: slightly angled perspective, crisp screen details, polished studio lighting, professional Behance and Dribbble presentation quality.

Do not include random logos, unreadable text, distorted devices, duplicate interface elements, watermarks, excessive decoration, or clutter.

Aspect ratio: [16:9 FOR PORTFOLIO / 4:3 FOR MARKETPLACE / 1:1 FOR SOCIAL MEDIA].

For example, for a food-delivery app:

Create a premium marketplace thumbnail for “QuickBite,” a modern mobile food-delivery application for students and young professionals.

Show three realistic smartphones displaying the app’s home page, restaurant listing, and order-tracking screen. Use a clean, energetic visual style with warm orange, cream, charcoal, and subtle green accents.

Include food category cards, restaurant images, ratings, delivery times, a clear search bar, promotional banners, an order-progress map, and modern rounded interface components.

Arrange the phones in a dynamic but balanced composition with the main home screen in the center. Add subtle floating food ingredients and soft abstract shapes around the devices without making the design cluttered.

Use a light cream studio background, soft shadows, realistic reflections, crisp interface details, premium commercial lighting, and a professional UI/UX case-study presentation suitable for Behance, a portfolio, and a digital marketplace.

Do not include distorted phones, fake brand logos, illegible text, watermarks, duplicated elements, excessive decorations, or unrealistic hands.

Aspect ratio: 4:3.

Paste your project description—even rough or incomplete—and I’ll turn it into prompts for each page, thumbnail, and portfolio image.




#Image Generation Briefs — Portfolio Projects

This doc is a paste-ready prompt library for generating marketing/portfolio imagery for every project on khelifi-salmen.com. Each section starts with a **fact sheet** (derived from `nextjs-portfolio/src/data/projects.ts`, not invented) followed by seven prompt categories. Pick an image generator per prompt (Midjourney, DALL-E/ChatGPT, Ideogram, Flux, Firefly, Leonovo — whatever fits the tool's strengths that week), paste the prompt text, and adjust aspect ratio flags for the target platform. Where a project already has real product screenshots in its `gallery` array, that's noted under "Existing references" so you don't waste generations re-creating what already exists — use AI generation for hero/marketing composites, device mockups, and stylized shots that don't exist yet.

Note: **GrammarAI was an earlier-stage version of Anlingo** (same product, rebranded). There is no separate GrammarAI section below — see **Anlingo**.

Color legend (Tailwind hex approximations used throughout): purple-400 `#C084FC`, cyan-400 `#22D3EE`, violet-400 `#A78BFA`, orange-400 `#FB923C`, green-400 `#4ADE80`.

---

## Luxe Spa Booking

### Fact Sheet
- **Project name:** Luxe Spa Booking
- **Project type:** White-label SaaS booking/CRM platform (multi-vertical: spa, salon, barber, clinic)
- **What it does:** Lets service businesses (spas, salons, clinics) launch a custom-branded online booking site with staff scheduling, AI concierge booking, payments, and CRM — all from one configurable engine.
- **Target users:** Boutique spa/salon/clinic owners, agencies reselling booking software to local businesses.
- **Preferred visual style:** Premium, calm, spa-luxury — soft gradients, generous whitespace, editorial photography feel, high-end wellness branding (think Aman resorts meets modern SaaS dashboard).
- **Brand colors:** Purple accent, `text-purple-400` → **#C084FC** (amethyst/lavender), paired with deep charcoal/near-black backgrounds and warm off-white surfaces for the booking-site side.
- **Pages/screens needed:** Customer booking homepage, step-by-step booking wizard, AI concierge chat, admin dashboard (bookings queue + metrics), staff inbox/messaging.
- **Image generator:** Open — pick per shot (photoreal spa scenes suit Midjourney/Flux; UI mockups suit Ideogram/DALL-E for clean text rendering).
- **Existing references:** `/images/luxe_spa_home.png`, `/images/luxe_spa_booking_flow.png`, `/images/luxe_spa_ai_chat.png`, `/images/luxe_spa_admin.png`, `/images/luxe_spa_video_demo.webp` — real product screenshots already exist for homepage, booking flow, AI chat, and admin dashboard. Generation should focus on hero composites, device mockups, and feature callouts built around these, not re-imagining the UI itself.

### Portfolio Cover Image
"A premium SaaS product hero shot: a sleek MacBook Pro floating at a slight 3/4 angle, displaying a luxurious spa booking website with soft lavender-purple (#C084FC) accents on a near-black UI. Behind the laptop, soft bokeh light in deep purple and charcoal tones, subtle spa elements (a single orchid, a folded white towel) blurred in the background for atmosphere. Cinematic studio lighting, soft rim light on the laptop edge, dark moody background with a gentle purple glow, ultra-clean composition, plenty of negative space top-right for a title overlay. Wide 16:9 aspect ratio."

### Marketplace Thumbnail
"Square 1:1 thumbnail for a freelance marketplace listing: a stylized browser window mockup showing a spa booking calendar interface with lavender-purple (#C084FC) highlights on a dark charcoal background, angled slightly for depth, drop shadow beneath. Minimal spa iconography (a small leaf, a bell icon) floating around the frame. Bold, legible sans-serif label space reserved at the bottom third. Clean gradient background from black to deep purple. High contrast, thumb-stopping at small sizes."

### Project Showcase Mockups
"A multi-device mockup scene: an iMac-style desktop monitor center-stage showing the Luxe Spa customer booking homepage, flanked by an iPhone tilted at 15 degrees on the left showing the AI concierge chat screen, and a tablet on the right showing the staff dashboard. All screens share a dark charcoal UI with lavender-purple (#C084FC) accent buttons and soft drop shadows. Studio product-photography lighting on a warm off-white backdrop, soft reflections beneath each device, professional SaaS marketing composition."

### Website/App Page Designs
"A standalone flat-lay composition of the Luxe Spa AI concierge booking screen: a phone-shaped UI card centered on a soft gradient background transitioning from charcoal to deep purple, showing a chat bubble interface with a scheduling calendar widget below it, purple (#C084FC) CTA buttons, clean modern sans-serif typography, minimalist spa iconography. Flat design mockup style suitable for a case-study page, no device frame, just the screen with a soft drop shadow."

### Desktop, Tablet, and Mobile Screens
"A responsive design showcase: three screens of the same Luxe Spa booking wizard shown at desktop (1440px browser frame), tablet (portrait iPad frame), and mobile (iPhone frame), arranged in a descending staircase layout from left to right, all sharing consistent lavender-purple (#C084FC) accents on dark UI, soft shadows connecting the three frames, clean white studio background, evenly lit, minimal SaaS marketing aesthetic."

### Feature-Highlight Images
"1. Instant Multi-Vertical Preset System — a UI card showing four toggle icons (spa, salon, barber, clinic) morphing into different color themes, with a subtle motion-blur transition effect, purple (#C084FC) accent glow, dark background, callout arrow pointing to a '10 seconds' timer icon.
2. Real-Time Staff Inbox — a chat/inbox interface mockup with live notification bubbles appearing, connection lines pulsing between two device icons to represent real-time sync, purple accent highlights, dark UI.
3. AI Concierge Booking Flow — a stylized chat bubble UI with a soft glowing AI orb icon beside it, calendar slots highlighting as if being auto-selected, lavender-purple glow effects, dark modern background.
4. Secure Payments & Digital Vouchers — a credit card and QR/barcode gift card icon rendered in clean 3D with a padlock overlay, purple accent lighting, dark charcoal backdrop, professional fintech-style render."

### Before-and-After Visuals
Not applicable — Luxe Spa Booking is a from-scratch platform build, not a redesign of an existing client site, so there is no real "before" state to depict.

---

## Adaptifit

### Fact Sheet
- **Project name:** Adaptifit
- **Project type:** Mobile app (AI fitness & nutrition coach)
- **What it does:** Generates personalized workout plans, tracks meals/macros, shows progress analytics, and offers an AI coach chat — a Flutter mobile app backed by Node.js and OpenAI.
- **Target users:** People who want adaptive, personal-trainer-style coaching at app-subscription prices.
- **Preferred visual style:** Energetic, athletic, modern fitness-app aesthetic — bold gradients, dynamic diagonal compositions, dark mode UI with vibrant accent pops (similar to Nike Training Club / Strava visual language).
- **Brand colors:** Cyan accent, `text-cyan-400` → **#22D3EE**, paired with deep navy/black backgrounds and energetic gradient pops (cyan into electric blue).
- **Pages/screens needed:** Workout plan dashboard, meal tracking/macros screen, progress analytics charts, AI coach chat.
- **Image generator:** Open — dynamic fitness photography scenes suit Midjourney; precise UI text suits Ideogram/DALL-E.
- **Existing references:** Only one real screenshot exists — `/images/stitch-projects/15863999156109095280-3ed15ebb08364f629544f22ce389d1c4.png` (dashboard screen). Everything else (meal tracking, analytics, AI chat, mobile mockups, marketing composites) needs to be generated fresh.

### Portfolio Cover Image
"A dynamic mobile fitness app hero shot: a smartphone held at a slight upward angle displaying a dark-mode workout dashboard with vibrant cyan (#22D3EE) accent charts and progress rings, set against a moody navy-to-black gradient background with faint motion-blur light streaks suggesting movement/energy. Subtle silhouette of dumbbells or a running figure blurred in the far background for context. Sharp, high-contrast studio lighting on the phone screen, cinematic sports-tech mood. 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 marketplace thumbnail: a phone mockup showing a fitness app dashboard with cyan (#22D3EE) progress rings and bar charts on a dark navy background, angled dynamically as if mid-motion, bold energetic diagonal composition, small AI-chat bubble icon glowing in the corner. Background is a deep navy-to-black gradient with subtle speed-line graphics. High-contrast, punchy, readable at small sizes."

### Project Showcase Mockups
"A trio of mockups: an iPhone showing the Adaptifit workout plan screen, a second iPhone beside it tilted showing the meal-tracking screen with macro rings, and an Apple Watch mockup showing a condensed workout summary — all three devices arranged in a dynamic diagonal cluster, dark navy UI with cyan (#22D3EE) accent elements, on a matte black studio backdrop with a subtle spotlight, professional fitness-tech product photography style."

### Website/App Page Designs
"A flat standalone screen composition of the Adaptifit AI Coach Chat interface: a phone-shaped UI card on a dark navy gradient background, showing a chat thread with a glowing cyan (#22D3EE) AI avatar bubble, workout plan cards suggested inline, clean bold sans-serif typography, minimal fitness iconography (a small barbell icon), soft ambient glow around interactive elements, no device bezel — just the screen and drop shadow, suitable for a case-study page."

### Desktop, Tablet, and Mobile Screens
"A responsive screen set for a fitness app companion web view: mobile (iPhone frame) showing the workout dashboard, tablet (iPad frame) showing the progress analytics chart screen, and a desktop browser frame showing an admin/coach view — arranged left to right in ascending size, consistent dark navy UI with cyan (#22D3EE) accents across all three, clean grey studio background, soft shadows, energetic but organized composition."

### Feature-Highlight Images
"1. Personalized Workout Plans — a UI card showing an exercise list morphing/adapting with a subtle 'regenerating' sparkle animation effect, cyan (#22D3EE) glow, dark background, small AI icon badge.
2. Meal Tracking & Nutrition — a macro-ring donut chart (protein/carbs/fat) in cyan and complementary accent colors, floating food icons around it, dark navy backdrop.
3. Progress Analytics — a sleek line/bar chart trending upward with a glowing cyan gradient fill, dark UI, small trophy or milestone badge icon.
4. AI Coach Chat — a chat bubble UI with a glowing orb avatar, subtle particle/spark effects around the AI icon, cyan accent lighting, dark navy background, professional app-store-style feature graphic."

### Before-and-After Visuals
Not applicable — Adaptifit is a new build with no prior product version to contrast against.

---

## Anlingo

*(Includes what was earlier called GrammarAI — same product, earlier-stage name. No separate section.)*

### Fact Sheet
- **Project name:** Anlingo
- **Project type:** AI writing SaaS — public landing site, web editor, Express API, billing, plus a Flutter mobile companion and a separate admin app.
- **What it does:** Grammar correction, rewriting, translation, voice dictation, document import, AI chat, writing history, and IELTS-style practice, across web and mobile, with free/Pro tiers.
- **Target users:** Professionals, students, job seekers, support teams, and non-native English writers.
- **Preferred visual style:** Clean, modern, trustworthy SaaS — think Grammarly/Notion visual language: soft violet gradients on white/light surfaces, generous whitespace, friendly rounded UI, privacy-forward tone (calm, not flashy).
- **Brand colors:** Violet accent, `text-violet-400` → **#A78BFA**, typically on light/white surfaces with soft violet gradient washes (distinct from Luxe Spa's darker purple-on-black treatment).
- **Pages/screens needed:** Marketing landing page, editor workspace (grammar/rewrite/translate/dictation), pricing page, documentation center, admin two-factor security screen, admin AI-operations panel, admin subscriptions dashboard, admin users table, mobile home dashboard, mobile pricing, mobile writing history, mobile IELTS writing exercise, mobile band-score feedback, mobile translation exercise.
- **Image generator:** Open — this project already has the deepest real-screenshot coverage of any project in the portfolio, so generation should mostly be limited to a few marketing hero composites and feature callouts.
- **Existing references:** Extensive — `/images/anlingo/anlingo-01.jpg` through `-05.jpg` (landing, editor, pricing, docs, admin 2FA) plus a full `gallery/` set: `anlingo-landing-hero.png`, `anlingo-landing-features.png`, `anlingo-landing-speaking-ad.png`, `anlingo-web-dashboard.png`, `anlingo-web-progress.png`, `anlingo-web-vocabulary-sprint.png`, `anlingo-admin-ai-operations.png`, `anlingo-admin-subscriptions.png`, `anlingo-admin-users.png`, and six mobile screens (`anlingo-mobile-home.png`, `-pricing.png`, `-history.png`, `-writing-exercise.png`, `-band-feedback.png`, `-translate.png`). Almost every screen type already has a real screenshot — prioritize AI generation only for the cover/thumbnail/showcase composites, not the individual UI screens themselves.

### Portfolio Cover Image
"A clean modern SaaS hero composite: a MacBook and an iPhone arranged together at a gentle angle on a soft off-white surface, the laptop showing a minimalist writing-assistant interface with a soft violet (#A78BFA) gradient header and clean sans-serif typography, the phone beside it showing a matching mobile editor screen. Soft natural studio lighting, airy white background with a subtle violet gradient glow in the upper corner, generous negative space, calm and trustworthy mood — no clutter, no dark theme. 16:9 wide composition."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser-window mockup showing a clean text-editor interface with grammar-correction underlines and a soft violet (#A78BFA) 'Fix Writing' button, angled slightly on a white-to-pale-violet gradient background, minimalist quill or checkmark icon accent, soft shadow beneath the window. Friendly, trustworthy, high-legibility at small sizes."

### Project Showcase Mockups
"A three-device mockup spread: a desktop browser frame center-left showing the Anlingo editor workspace, an iPhone tilted on the right showing the mobile writing-history screen, and a tablet behind them both showing the pricing page — all screens sharing a clean white UI with violet (#A78BFA) accent buttons and soft rounded cards. Bright, airy studio photography lighting on a pale grey-white backdrop, soft ground shadows, professional SaaS marketing composition, no dark tones."

### Website/App Page Designs
"A standalone flat composition of the Anlingo pricing page: a browser-window UI card floating on a soft white-to-violet gradient background, showing two pricing tiers (Free / Pro) as rounded cards, violet (#A78BFA) CTA button on the Pro tier, clean modern sans-serif typography, minimal iconography, soft drop shadow, no device bezel, professional case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive design showcase: desktop browser frame (editor workspace), tablet frame (documentation center), and mobile frame (IELTS writing exercise screen) arranged left to right in a clean ascending row, consistent white UI with violet (#A78BFA) accents across all three, soft studio lighting on a pale grey background, minimal shadows, calm professional SaaS aesthetic."

### Feature-Highlight Images
"1. Privacy-First Writing Flow — a lock icon merged with a pencil/quill icon in soft violet (#A78BFA), clean line-art style, white background, small 'private & fast' badge.
2. AI Editor Workspace — a text block with colored underline squiggles (grammar/style suggestions) and a floating AI suggestion tooltip, violet accent highlights, white card background.
3. Usage Limits & Subscriptions — a simple tier-comparison bar/meter graphic (Free vs Pro) with a violet progress fill, clean flat icon style.
4. Flutter Mobile Companion — a phone silhouette with a Flutter logo-inspired swirl accent in violet, minimal line art, white background, app-store-feature-graphic style."

### Before-and-After Visuals
"Since Anlingo evolved from an earlier product stage (formerly branded GrammarAI) into its current full-stack form, a legitimate before/after exists: **Before** — a simple, sparse single-page grammar-checker UI, plain text input box, basic 'Check' button, minimal branding, generic blue color scheme, flat unstyled layout. **After** — the current polished Anlingo editor workspace with violet (#A78BFA) branding, multi-feature toolbar (grammar, rewrite, translate, dictation), modern card-based layout, and refined typography. Present side-by-side with a clear left-to-right arrow, labeled 'Then' and 'Now', consistent lighting and framing on both sides, clean white background for direct comparison."

---

## ChakTech Platform

### Fact Sheet
- **Project name:** ChakTech Platform
- **Project type:** Multi-tenant e-commerce platform (storefront + admin back-office + API), launched as a single live store
- **What it does:** A localized e-commerce platform for the Tunisian market with French/Arabic RTL support, cash-on-delivery checkout, Typesense search, and a Payload-powered admin back-office.
- **Target users:** Tunisian store operators needing a localized storefront and tenant-aware back-office without custom rebuilds per client.
- **Preferred visual style:** Modern, energetic e-commerce — clean product-grid layouts, warm orange accent pops against neutral backgrounds, North African market context (subtle, tasteful — not stereotyped), bilingual FR/AR typography awareness.
- **Brand colors:** Orange accent, `text-orange-400` → **#FB923C**, on clean white/light-neutral storefront surfaces with dark admin-panel contrast.
- **Pages/screens needed:** Storefront homepage, product listing + filters, product page + quick order, cart/checkout flow, checkout customer-details step, admin login, admin dashboard, admin product catalog, admin order queue, admin add-product form, admin order detail/fulfillment.
- **Image generator:** Open — this project has near-complete real screenshot coverage already, so lean on generation mainly for the cover/thumbnail/showcase composites.
- **Existing references:** Extensive — `/images/chaktech/chaktech-01.jpg` through `-06.jpg` (dashboard, storefront home, listing/filters, product page, cart, checkout), `chaktech-admin-login.png`, `chaktech-admin-dashboard-live.png`, `chaktech-admin-products-live.png`, `chaktech-admin-orders-live.png`, `chaktech-admin-add-product-live.png`, plus `chaktech-08.jpg`, `-10.jpg`, `-12.jpg` (onboarding checklist, catalog, order fulfillment). Nearly every screen already exists as a real screenshot.

### Portfolio Cover Image
"A vibrant e-commerce hero shot: a laptop displaying a modern online storefront with warm orange (#FB923C) accent buttons and clean product-grid tiles on a white background, positioned beside a smartphone showing the same store's mobile checkout screen. Both devices angled dynamically on a light neutral studio surface, soft warm lighting with an orange gradient glow in the background, subtle North-African textile pattern texture blurred far in the background for cultural context without being literal. Energetic but clean e-commerce mood, 16:9 wide composition with space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a product grid storefront with orange (#FB923C) 'Add to Cart' buttons, angled with depth, small shopping-bag icon accent, warm gradient background from white to soft orange, drop shadow beneath the frame. Bold and legible at small sizes, energetic e-commerce feel."

### Project Showcase Mockups
"A device trio: a desktop monitor showing the ChakTech admin dashboard with order metrics, an iPhone tilted beside it showing the mobile storefront product page, and a tablet showing the checkout flow — orange (#FB923C) accent buttons consistent across all three, clean white UI, warm studio lighting on a light grey backdrop, soft shadows, professional e-commerce marketing composition."

### Website/App Page Designs
"A standalone flat composition of the ChakTech checkout customer-details screen: a browser-window UI card on a soft white-to-orange gradient background, showing a French-language checkout form with a cash-on-delivery option highlighted, orange (#FB923C) 'Confirm Order' button, clean modern sans-serif typography with FR/AR text elements, minimal iconography, soft drop shadow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (storefront homepage), tablet frame (product listing with filters), and mobile frame (cart/checkout) arranged left to right in ascending size, consistent white UI with orange (#FB923C) accents, warm studio lighting on a light background, soft shadows, cohesive e-commerce aesthetic across all three breakpoints."

### Feature-Highlight Images
"1. Tenant Resolver Theming — a UI card morphing between two different color-branded storefronts side by side, connected by a subtle 'swap' arrow icon, orange (#FB923C) accent highlight.
2. French + Arabic RTL — a text block showing mirrored LTR/RTL layout side by side, with a small language-toggle icon, clean flat design.
3. Cash-on-Delivery Checkout — a delivery-truck icon paired with a cash/bill icon in orange, minimal line-art style, white background.
4. Typesense Product Search — a search bar UI with instant-result dropdown and highlighted typo-tolerant matches, orange accent highlight on matched text, clean flat design."

### Before-and-After Visuals
Not applicable — ChakTech was launched as a new platform build rather than a redesign of a prior client site, so there's no legitimate "before" state on record in projects.ts.

---

## Noxivo

### Fact Sheet
- **Project name:** Noxivo
- **Project type:** WhatsApp-first automation SaaS for agencies (multi-tenant dashboard + workflow engine + developer docs)
- **What it does:** Lets agencies manage multiple client WhatsApp workspaces, team inboxes, and automation workflows from one platform, with a public developer API and docs.
- **Target users:** Agency owners, platform operators, client workspace admins, and developers integrating against the API.
- **Preferred visual style:** Modern, techy, communication-focused SaaS — green accent (nodding to WhatsApp's brand association without copying it), dark dashboard UI, workflow/automation visual motifs (nodes, connections, chat bubbles).
- **Brand colors:** Green accent, `text-green-400` → **#4ADE80**, on dark charcoal dashboard surfaces with a lighter public-facing waitlist site.
- **Pages/screens needed:** Public waitlist landing page, dashboard login screen, agency settings dashboard, tenant workspace dashboard, developer documentation site.
- **Image generator:** Open — real screenshots cover the core screens; generation should focus on hero composites and workflow-engine visualizations that don't exist as screenshots.
- **Existing references:** `/images/noxivo/noxivo-01.png` (waitlist landing), `-02.png` (dashboard login), `-03.png` (agency settings), `-06.png` (tenant workspace), `-04.png` (developer docs).

### Portfolio Cover Image
"A modern SaaS hero shot: a laptop displaying a dark-mode agency dashboard with green (#4ADE80) accent charts and a workflow-automation node graph, positioned on a dark charcoal studio surface with a smartphone beside it showing a WhatsApp-style chat inbox interface. Soft green ambient glow lighting from behind the devices, faint abstract connecting-node lines in the background suggesting automation/workflow, moody tech-forward atmosphere. 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a dark browser-window mockup showing a workflow automation canvas with green (#4ADE80) connected nodes and a chat-bubble icon, angled with depth, dark charcoal-to-black gradient background with a subtle green glow, drop shadow beneath the frame. Bold, techy, legible at small sizes."

### Project Showcase Mockups
"A device trio: a desktop monitor showing the Noxivo tenant workspace dashboard, a tablet beside it showing the workflow engine's node-based automation builder, and a smartphone showing a WhatsApp-style inbox conversation — green (#4ADE80) accent elements consistent across all three, dark charcoal UI, moody studio lighting on a black backdrop with soft green rim light, professional B2B SaaS marketing composition."

### Website/App Page Designs
"A standalone flat composition of the Noxivo public waitlist landing page: a browser-window UI card on a dark charcoal-to-black gradient background, showing a bold headline, an email capture form with a green (#4ADE80) 'Join Waitlist' button, and subtle WhatsApp-chat-bubble decorative graphics, clean modern sans-serif typography, soft green ambient glow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (agency settings dashboard), tablet frame (tenant workspace dashboard), and mobile frame (team inbox conversation view) arranged left to right in ascending size, consistent dark charcoal UI with green (#4ADE80) accents, moody studio lighting on a near-black background, soft green rim shadows, cohesive dark-SaaS aesthetic."

### Feature-Highlight Images
"1. Agency and Tenant Dashboard — a layered card stack representing Platform > Agency > Tenant hierarchy, green (#4ADE80) accent connecting lines, dark background.
2. WhatsApp-First Team Inbox — a chat inbox UI with multiple conversation threads and a 'saved reply' tag, green accent highlights, dark card background.
3. Workflow Engine — a node-graph diagram with animated-looking connection lines and a small 'DAG' automation icon, green glow effects, dark backdrop.
4. Public Developer API — a code-block snippet UI card with green syntax highlighting accents, a small API/webhook icon, dark terminal-style background."

### Before-and-After Visuals
Not applicable — Noxivo is a new platform build with no prior product version referenced in the project data.

---

## LEYEL Modest Fashion

### Fact Sheet
- **Project name:** LEYEL Modest Fashion
- **Project type:** E-commerce storefront / brand presentation website
- **What it does:** A public storefront and brand site for a modest ready-to-wear fashion label, focused on collection browsing and product presentation.
- **Target users:** Customers seeking modest fashion with a simple, premium, value-aligned brand experience.
- **Preferred visual style:** Soft, editorial, minimal luxury — muted neutral tones, generous whitespace, refined typography, calm fashion-editorial photography (distinct from the loud/energetic e-commerce projects — this is quiet luxury).
- **Brand colors:** Site uses the shared portfolio "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its UI badge color on khelifi-salmen.com, but that is the portfolio site's own accent, not LEYEL's actual brand palette. For image prompts, use LEYEL's real positioning instead: warm neutrals, sand, cream, and soft taupe tones consistent with a modest-fashion editorial identity.
- **Pages/screens needed:** Storefront homepage, collection browsing page, product listing page.
- **Image generator:** Open — this is a strong candidate for photoreal editorial-fashion generation (Midjourney/Flux excel here).
- **Existing references:** `/images/freelancer-portfolio/leyel/leyel-01.png` (homepage), `-02.png` (collection page), `-03.png` (product listing).

### Portfolio Cover Image
"An editorial fashion e-commerce hero shot: a laptop displaying a minimal modest-fashion storefront with soft cream and sand-toned product photography, clean serif/sans typography, positioned on a warm neutral linen-textured surface. Soft, diffused natural window light, muted taupe and off-white color palette throughout, a single draped fabric swatch resting beside the laptop for texture. Calm, quiet-luxury mood, generous negative space, 16:9 wide composition."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a modest-fashion product grid in soft cream and taupe tones, angled with gentle depth, minimal serif logotype placeholder, soft neutral gradient background from cream to warm beige, subtle soft shadow. Elegant, quiet, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the LEYEL homepage hero with an editorial model photo in soft neutral tones, beside a tablet showing the collection browsing grid — both sharing warm cream/sand color palette and refined serif typography, soft natural studio lighting on a linen-textured backdrop, calm minimal-luxury product photography style."

### Website/App Page Designs
"A standalone flat composition of the LEYEL collection page: a browser-window UI card on a soft cream gradient background, showing a clean product grid with modest ready-to-wear garments, refined typography, minimal navigation bar, soft neutral tones throughout, gentle drop shadow, quiet-luxury case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage), tablet frame (collection grid), and mobile frame (product listing) arranged left to right in ascending size, consistent cream/sand color palette and serif typography across all three, soft diffused studio lighting on a linen-textured neutral background, calm editorial-fashion aesthetic."

### Feature-Highlight Images
"1. Brand Storytelling — a soft-focus fabric texture close-up with an overlaid quote-style typography callout, cream and taupe tones.
2. Collection Browsing — a simple grid-icon graphic with garment silhouettes, minimal line art, neutral palette.
3. Visual Product Presentation — a single centered product photo with generous negative space and soft editorial lighting, minimal UI chrome."

### Before-and-After Visuals
Not applicable — projects.ts does not indicate LEYEL replaced a prior site; it is presented as a from-scratch brand build.

---

## AI-Powered Workflow Automation

### Fact Sheet
- **Project name:** AI-Powered Workflow Automation
- **Project type:** Backend automation system (n8n workflow hub, no traditional UI product)
- **What it does:** Connects Gmail, Google APIs, OpenAI, Google Sheets, Google Voice, and WhatsApp into classified, structured task workflows — email triage, AI reply drafting, spreadsheet CRM logging, and voice/message transcription.
- **Target users:** Teams coordinating sales, support, authorizations, and operations across inbox, SMS, and WhatsApp channels.
- **Preferred visual style:** Technical, systems-oriented, node/flowchart visual language — dark canvas backgrounds with glowing connection lines (matches n8n's own visual identity), clean iconography for each integrated service (Gmail, Sheets, WhatsApp, OpenAI).
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**). Since this is a backend automation tool rather than a branded product, keep cyan as the primary accent against a dark technical canvas — it fits the n8n-style workflow-builder aesthetic well.
- **Pages/screens needed:** n8n workflow canvas (the only real "screen" — this project has no traditional multi-page UI).
- **Image generator:** Open — node-graph/flowchart compositions render well in most tools; Ideogram/DALL-E for any embedded labels.
- **Existing references:** `/images/freelancer-portfolio/ai-workflow-automation/ai-workflow-automation-01.png` (workflow canvas) — the only existing screenshot; everything else needs generating.

### Portfolio Cover Image
"A technical automation hero shot: a laptop displaying a dark-mode workflow-automation canvas with glowing cyan (#22D3EE) connection lines linking Gmail, OpenAI, Google Sheets, and WhatsApp node icons, angled on a dark matte studio surface. Soft cyan ambient glow lighting, faint circuit-board-like texture in the background, clean technical/systems mood. 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a dark canvas mockup showing three connected workflow nodes with cyan (#22D3EE) glowing link lines and small service icons (envelope, chat bubble, spreadsheet), angled with depth, dark charcoal-to-black gradient background, subtle cyan glow, drop shadow. Bold and technical, legible at small sizes."

### Project Showcase Mockups
"A single large desktop-monitor mockup centered in frame, showing the full n8n-style workflow canvas with multiple connected automation nodes (Gmail classification, AI reply drafting, Sheets logging, WhatsApp input) in cyan (#22D3EE) accent lines on a dark canvas, flanked by smaller floating icon cards representing each integrated service, dark studio lighting with soft cyan rim glow, professional technical-product photography style."

### Website/App Page Designs
"A standalone flat composition of the workflow canvas itself as the 'page': a dark rounded-corner card on a black-to-charcoal gradient background, showing interconnected automation nodes with cyan (#22D3EE) glowing lines, small labeled icons for Gmail, OpenAI, Sheets, and WhatsApp, clean technical sans-serif labels, soft ambient glow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive-style triptych showing the same workflow canvas scaled across a desktop browser frame (full canvas view), a tablet frame (zoomed node cluster), and a mobile frame (a single notification/summary card from the automation) — consistent dark UI with cyan (#22D3EE) accents across all three, dark studio background, soft glow shadows, cohesive technical aesthetic. Note: since this project has no real mobile UI, the mobile frame should depict a plausible notification-summary view rather than an existing screen."

### Feature-Highlight Images
"1. Gmail Classification — an inbox icon with color-coded label tags (Sales, Support, CC) branching off it, cyan (#22D3EE) accent lines, dark background.
2. AI Reply Drafting — a chat-draft bubble with a small sparkle/AI icon, cyan glow, dark card.
3. Spreadsheet CRM Logging — a spreadsheet-grid icon with data rows populating automatically, cyan highlight on active cells, dark background.
4. Voice and Message Inputs — a microphone icon transforming into a text-bubble icon via a transcription arrow, cyan accent, dark backdrop."

### Before-and-After Visuals
"A legitimate before/after exists here: **Before** — a chaotic desk-scene illustration or split-screen of a cluttered inbox, sticky notes, and a manually-updated spreadsheet, muted grey tones, visual chaos. **After** — the clean automated n8n workflow canvas with cyan (#22D3EE) glowing connected nodes, calm and organized. Present side-by-side with a clear arrow between them, labeled 'Manual Chaos' and 'Automated Flow', consistent dark background across both halves for direct comparison."

---

## HTI.tn Electronic E-commerce

### Fact Sheet
- **Project name:** HTI.tn Electronic E-commerce
- **Project type:** WordPress/WooCommerce e-commerce website
- **What it does:** An electronics and surveillance-equipment storefront with product browsing, payment gateway setup, SEO structure, and mobile-responsive design.
- **Target users:** Customers shopping for electronics/surveillance gear; store operators managing the WooCommerce catalog.
- **Preferred visual style:** Tech-retail, trustworthy, functional — clean product photography on white backgrounds, blue/black tech-brand color language, straightforward e-commerce UX (not luxury, not playful — practical electronics retail).
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**). This reads naturally as a tech/electronics-retail blue-cyan, so it's a reasonable fit here — pair with black/dark-grey product-tech tones and white storefront backgrounds.
- **Pages/screens needed:** Storefront homepage, product page.
- **Image generator:** Open — product-photography-style renders suit Midjourney/Flux; any on-screen text suits Ideogram/DALL-E.
- **Existing references:** `/images/freelancer-portfolio/hti-ecommerce/hti-ecommerce-01.png` (overview), `-02.png` (storefront), `-03.png` (product page).

### Portfolio Cover Image
"A clean tech-retail e-commerce hero shot: a laptop displaying an electronics storefront with a grid of camera/surveillance-equipment product tiles, cyan (#22D3EE) 'Add to Cart' accents on a white UI, positioned on a matte black studio surface with a few blurred electronics products (a security camera, cables) softly out of focus in the background. Cool blue-toned studio lighting, clean and trustworthy tech-retail mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing an electronics product grid with cyan (#22D3EE) price tags and buttons on white background, angled with depth, small camera/electronics icon accent, cool blue-black gradient background, drop shadow. Clean, trustworthy, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the HTI.tn storefront homepage, beside a smartphone showing the mobile product-detail page with an 'Add to Cart' button, both with cyan (#22D3EE) accents on white UI, dark matte studio surface, cool-toned lighting, clean tech-retail product photography style."

### Website/App Page Designs
"A standalone flat composition of the HTI.tn product page: a browser-window UI card on a white-to-light-blue gradient background, showing a surveillance camera product photo, price, specs list, and a cyan (#22D3EE) 'Buy Now' button, clean modern sans-serif typography, soft drop shadow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage), tablet frame (product listing/filters), and mobile frame (product detail page) arranged left to right in ascending size, consistent white UI with cyan (#22D3EE) accents across all three, cool-toned studio lighting on a light grey background, clean functional e-commerce aesthetic."

### Feature-Highlight Images
"1. WooCommerce Storefront — a shopping-cart icon with electronics product thumbnails stacking into it, cyan accent, white background.
2. Custom Theme Enhancements — a before/after color-swatch style icon showing a theme palette being applied, cyan highlight.
3. Payment Gateway Setup — a credit-card icon with a padlock and checkmark, cyan accent, clean flat icon style.
4. SEO and Performance — a speedometer/gauge icon paired with a small magnifying-glass search icon, cyan highlight, white background."

### Before-and-After Visuals
Not applicable — projects.ts does not document a prior version of the HTI.tn site to compare against; the "custom theme enhancements" feature refers to WooCommerce theme customization within the same build, not a pre-existing separate site.

---

## Chab-ka Concept Store

### Fact Sheet
- **Project name:** Chab-ka Concept Store
- **Project type:** E-commerce/brand website for handcrafted artisanal products
- **What it does:** A visually focused concept-store site presenting handcrafted jewelry and ceramics, with collection browsing and brand storytelling.
- **Target users:** Shoppers looking for unique handcrafted products; visitors wanting to learn the brand's materials/story.
- **Preferred visual style:** Warm, artisanal, earthy — natural material textures (clay, wood, woven fiber), warm terracotta and cream tones, handcrafted/tactile photography feel, distinct from the tech-forward or luxury-spa projects.
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color, but that does not match the brand's actual artisanal identity. For image prompts, use warm terracotta, clay, and cream tones consistent with a handcrafted concept-store positioning.
- **Pages/screens needed:** Storefront overview, product/gallery view.
- **Image generator:** Open — strong candidate for warm, textured photoreal generation (Midjourney/Flux).
- **Existing references:** `/images/freelancer-portfolio/chab-ka/chab-ka-01.png` (overview), `-02.png` (product view), `-03.png` (storefront).

### Portfolio Cover Image
"A warm artisanal e-commerce hero shot: a laptop displaying a concept-store website with a gallery of handcrafted ceramic and jewelry product photos in warm terracotta and cream tones, positioned on a natural wood-textured surface. Soft warm afternoon light, a few blurred handmade ceramic pieces resting beside the laptop for texture, earthy and tactile mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a warm terracotta-toned product gallery grid with handcrafted jewelry/ceramic thumbnails, angled with gentle depth, soft cream-to-terracotta gradient background, subtle shadow. Warm, tactile, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the Chab-ka homepage with a warm editorial product gallery, beside a tablet showing the collection browsing page — both in warm terracotta/cream tones with earthy typography, soft natural studio lighting on a linen or wood-textured backdrop, artisanal product photography style."

### Website/App Page Designs
"A standalone flat composition of the Chab-ka product gallery page: a browser-window UI card on a warm cream gradient background, showing a grid of handcrafted ceramic and jewelry photos, terracotta accent typography, minimal clean navigation, soft drop shadow, warm artisanal case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage gallery), tablet frame (collection page), and mobile frame (product detail) arranged left to right in ascending size, consistent warm terracotta/cream palette across all three, soft natural studio lighting on a wood-textured background, cohesive artisanal aesthetic."

### Feature-Highlight Images
"1. Product Showcase — a close-up macro shot style icon of a ceramic textured surface with soft warm lighting.
2. Brand Navigation — a simple menu-icon graphic with 'Collections / Story / Materials' labels in earthy typography.
3. Responsive Experience — three small nested device outline icons (desktop/tablet/phone) in terracotta line art.
4. SEO Optimization — a small magnifying glass over a leaf or handcrafted-icon motif, warm tones."

### Before-and-After Visuals
Not applicable — no prior site version is referenced in projects.ts for Chab-ka.

---

## Velyssa Fashion E-commerce

### Fact Sheet
- **Project name:** Velyssa Fashion E-commerce
- **Project type:** WordPress/WooCommerce fashion storefront
- **What it does:** A fashion e-commerce site with product categories, product pages, checkout, AWS-backed performance, Brevo email marketing, and SEO via All in One SEO.
- **Target users:** Fashion shoppers browsing collections; store operators managing categories, marketing, and checkout.
- **Preferred visual style:** Clean, modern fashion-retail — polished product photography, elegant neutral-to-black palette, contemporary fashion-brand feel (more commercial/mainstream than LEYEL's quiet-luxury positioning).
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color. For image prompts, lean into a modern fashion-retail palette of black, white, and blush/soft-pink accents, which reads as more true-to-category than the cyan badge.
- **Pages/screens needed:** Storefront overview, homepage, shop/category listing.
- **Image generator:** Open — photoreal fashion-retail scenes suit Midjourney/Flux.
- **Existing references:** `/images/freelancer-portfolio/velyssa/velyssa-01.png` (overview), `-02.png` (homepage), `-03.png` (shop page).

### Portfolio Cover Image
"A modern fashion-retail e-commerce hero shot: a laptop displaying a Velyssa storefront with a clean product grid of fashion items on a white background, blush-pink accent 'Shop Now' buttons, positioned on a minimal black-and-white studio surface with a folded garment softly blurred beside it. Bright, polished studio lighting, contemporary fashion-brand mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a fashion product grid with blush-pink accent buttons on white background, angled with depth, small hanger or dress icon accent, soft white-to-blush gradient background, subtle shadow. Clean, elegant, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the Velyssa homepage with a hero fashion banner, beside a smartphone showing the mobile shop/category listing screen, both with blush-pink accents on white UI, bright minimal studio lighting on a light grey backdrop, polished fashion-retail product photography style."

### Website/App Page Designs
"A standalone flat composition of the Velyssa shop/category page: a browser-window UI card on a white-to-blush gradient background, showing a product grid with category filters, blush-pink accent 'Add to Cart' buttons, clean modern sans-serif typography, soft drop shadow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage), tablet frame (category listing), and mobile frame (checkout flow) arranged left to right in ascending size, consistent white UI with blush-pink accents across all three, bright studio lighting on a light background, clean modern fashion-retail aesthetic."

### Feature-Highlight Images
"1. Fashion Storefront — a hero-banner icon graphic with a clothing silhouette, blush-pink accent.
2. WooCommerce Shopping Flow — a simplified cart-to-checkout arrow flow icon, blush accent highlights.
3. Marketing and SEO Tools — a small envelope icon (Brevo email) paired with a magnifying-glass search icon (SEO), clean flat style.
4. Performance Support — a small cloud icon (AWS) with a speed/lightning bolt accent, blush-pink highlight."

### Before-and-After Visuals
Not applicable — no prior Velyssa site version is documented in projects.ts.

---

## blog-sainteagnes.fr

### Fact Sheet
- **Project name:** blog-sainteagnes.fr
- **Project type:** Blog/publishing platform (CMS-driven)
- **What it does:** A modern blog platform with responsive design, SEO optimization, performance/security hardening, and easy CMS-based content management.
- **Target users:** School/organization readers browsing articles; content editors managing publishing.
- **Preferred visual style:** Clean editorial, reading-focused — generous typography, calm neutral palette, minimal distraction (a content-first publishing aesthetic, not a commerce or SaaS look).
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color; for image prompts, keep it understated — cyan as a small link/accent color against a mostly white-and-charcoal editorial palette rather than a dominant brand color.
- **Pages/screens needed:** Homepage/overview, blog listing page.
- **Image generator:** Open — editorial/typography-forward compositions suit most tools; Ideogram/DALL-E for legible text.
- **Existing references:** `/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-01.png` (overview), `-02.png` (homepage), `-03.png` (blog listing).

### Portfolio Cover Image
"A clean editorial blog hero shot: a laptop displaying a minimal blog homepage with large serif article headlines, a small cyan (#22D3EE) 'Read More' link accent, and generous whitespace, positioned on a light neutral studio desk surface with a notebook and pen softly blurred beside it. Soft natural daylight, calm reading-focused mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a blog article-listing layout with serif headlines and small cyan (#22D3EE) accent tags, angled with gentle depth, white-to-light-grey gradient background, subtle shadow. Clean, editorial, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the blog homepage with a featured-article hero, beside a tablet showing the article listing page, both in a clean white/charcoal editorial palette with small cyan (#22D3EE) accent links, soft natural studio lighting on a light backdrop, calm publishing-platform product photography style."

### Website/App Page Designs
"A standalone flat composition of the blog listing page: a browser-window UI card on a soft white gradient background, showing a vertical list of article cards with serif headlines and small cyan (#22D3EE) tag accents, clean generous typography, minimal navigation bar, soft drop shadow, editorial case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage), tablet frame (article listing), and mobile frame (single article reading view) arranged left to right in ascending size, consistent white/charcoal editorial palette with cyan (#22D3EE) accents across all three, soft natural studio lighting, clean minimal reading-focused aesthetic."

### Feature-Highlight Images
"1. Responsive Blog Design — three nested device outline icons in clean line art, cyan accent.
2. SEO Optimization — a small magnifying-glass icon over a document, cyan highlight.
3. Performance and Security — a speedometer icon paired with a small shield/padlock icon, clean flat style.
4. CMS Integration — a simple content-block/editor icon with a pencil accent, cyan highlight."

### Before-and-After Visuals
Not applicable — no prior site version is documented in projects.ts for this blog.

---

## DigiTrends.dev

### Fact Sheet
- **Project name:** DigiTrends.dev
- **Project type:** Company/brand website
- **What it does:** The official site for an IT-solutions brand, presenting software development, cloud, DevOps, and digital-transformation services.
- **Target users:** Prospective clients and partners evaluating the company's service capabilities.
- **Preferred visual style:** Corporate tech, professional, trustworthy — clean blue/dark-navy palette, structured grid layouts, abstract tech visuals (cloud, code, network motifs), B2B service-site tone.
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color; this fits naturally as a corporate-tech accent — pair with navy/charcoal and white for a professional B2B feel.
- **Pages/screens needed:** Homepage.
- **Image generator:** Open — abstract tech/corporate compositions suit most tools well.
- **Existing references:** `/images/freelancer-portfolio/digitrends-dev/digitrends-dev-01.png` (homepage) — the only existing screenshot.

### Portfolio Cover Image
"A professional corporate-tech hero shot: a laptop displaying a clean IT-services homepage with a bold headline, cyan (#22D3EE) accent CTA button, and abstract cloud/network line-art graphics, positioned on a dark navy studio surface. Soft cool-toned studio lighting, faint abstract circuit or network-node pattern in the background, professional B2B mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a corporate services homepage with cyan (#22D3EE) accent buttons and a cloud-icon graphic, angled with depth, dark navy-to-black gradient background, subtle glow, drop shadow. Professional, legible at small sizes."

### Project Showcase Mockups
"A single desktop-monitor mockup centered in frame, showing the DigiTrends.dev homepage with service-pillar cards (software development, cloud, DevOps, digital transformation), cyan (#22D3EE) accents on a navy/white UI, professional studio lighting on a dark backdrop, clean corporate product photography style."

### Website/App Page Designs
"A standalone flat composition of the DigiTrends.dev homepage: a browser-window UI card on a navy-to-black gradient background, showing a hero headline, service cards in a grid, cyan (#22D3EE) accent CTA button, clean modern sans-serif typography, soft drop shadow, professional case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage hero), tablet frame (services grid section), and mobile frame (condensed service list) arranged left to right in ascending size, consistent navy/white UI with cyan (#22D3EE) accents across all three, cool-toned studio lighting, professional corporate-site aesthetic."

### Feature-Highlight Images
"1. Service Positioning — four small icon tiles (code brackets, cloud, gears, arrow-up chart) representing the four service pillars, cyan accent.
2. Responsive Web Experience — nested device outline icons in clean line art, cyan highlight.
3. SEO and Best Practices — a small checklist/shield icon combo, cyan accent, navy background."

### Before-and-After Visuals
Not applicable — no prior site version is documented in projects.ts.

---

## Electronic E-Commerce Website

### Fact Sheet
- **Project name:** Electronic E-Commerce Website
- **Project type:** WordPress e-commerce website (Proto theme)
- **What it does:** A WordPress electronics store with categorized product listings, search/filtering, and responsive layouts.
- **Target users:** Electronics shoppers browsing by category, search, filters, pricing, and reviews.
- **Preferred visual style:** Practical tech-retail — similar territory to HTI.tn but treat as its own distinct build (different theme/client); clean product-grid layout, blue/dark accent on white, straightforward retail UX.
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color; fits naturally as an electronics-retail accent — pair with white backgrounds and dark-grey product-photography tones.
- **Pages/screens needed:** Homepage/storefront overview (single existing screenshot).
- **Image generator:** Open.
- **Existing references:** `/images/freelancer-portfolio/electronic-ecommerce/electronic-ecommerce-01.png` — the only existing screenshot.

### Portfolio Cover Image
"A functional tech-retail e-commerce hero shot: a laptop displaying an electronics storefront homepage with a categorized product grid and cyan (#22D3EE) accent 'Shop Now' button, positioned on a matte grey studio surface with a blurred electronics gadget (headphones or a small speaker) in the background. Cool-toned studio lighting, clean practical retail mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing an electronics category grid with cyan (#22D3EE) filter tags and price labels, angled with depth, white-to-light-blue gradient background, subtle shadow. Clean, practical, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the storefront homepage with categorized product tiles, beside a tablet showing the search/filter results view, both with cyan (#22D3EE) accents on white UI, cool-toned studio lighting on a light grey backdrop, clean tech-retail product photography style."

### Website/App Page Designs
"A standalone flat composition of the product-listing page: a browser-window UI card on a white-to-light-blue gradient background, showing a filterable product grid with star-rating badges, cyan (#22D3EE) accent filter tags, clean modern sans-serif typography, soft drop shadow, case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage), tablet frame (category listing), and mobile frame (product detail with reviews) arranged left to right in ascending size, consistent white UI with cyan (#22D3EE) accents across all three, cool-toned studio lighting, clean functional e-commerce aesthetic."

### Feature-Highlight Images
"1. Responsive Storefront — nested device outline icons in clean line art, cyan accent.
2. Proto Theme Customization — a small paintbrush/theme-swatch icon, cyan highlight.
3. Product Listings — a grid icon with star-rating and price-tag accents, cyan highlight.
4. Search and Filtering — a search-bar icon with a funnel/filter icon beside it, cyan accent."

### Before-and-After Visuals
Not applicable — no prior site version is documented in projects.ts.

---

## digitrends.pro

### Fact Sheet
- **Project name:** digitrends.pro
- **Project type:** Company/brand website (French-language)
- **What it does:** A French-language business site presenting "operational excellence" and "digital innovation" as two connected transformation service pillars.
- **Target users:** Businesses seeking process optimization, digitalization, and operational transformation support.
- **Preferred visual style:** Corporate, polished, French B2B — structured two-pillar layout, professional blue/dark palette, similar family to DigiTrends.dev but treat as a distinct sibling brand/site.
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color; fits as a corporate-tech accent — pair with navy/charcoal and white.
- **Pages/screens needed:** Homepage/overview, services page.
- **Image generator:** Open.
- **Existing references:** `/images/freelancer-portfolio/digitrends-pro/digitrends-pro-01.png` (overview), `-02.png` (homepage), `-03.png` (services).

### Portfolio Cover Image
"A polished corporate-tech hero shot: a laptop displaying a French-language business homepage with a two-pillar service layout ('Excellence Opérationnelle' / 'Innovation Digitale'), cyan (#22D3EE) accent CTA button, positioned on a dark navy studio surface. Soft cool-toned studio lighting, faint abstract geometric pattern in the background suggesting structure/process, professional B2B mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a two-column service-pillar homepage with cyan (#22D3EE) accent dividers, angled with depth, navy-to-black gradient background, subtle glow, drop shadow. Professional, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the digitrends.pro homepage with the two-pillar hero section, beside a tablet showing the services page, both with cyan (#22D3EE) accents on navy/white UI, cool-toned studio lighting on a dark backdrop, clean corporate product photography style."

### Website/App Page Designs
"A standalone flat composition of the digitrends.pro services page: a browser-window UI card on a navy-to-black gradient background, showing two service-pillar cards side by side with French-language headings, cyan (#22D3EE) accent icons, clean modern sans-serif typography, soft drop shadow, professional case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage hero), tablet frame (services page), and mobile frame (condensed pillar list) arranged left to right in ascending size, consistent navy/white UI with cyan (#22D3EE) accents across all three, cool-toned studio lighting, professional corporate-site aesthetic."

### Feature-Highlight Images
"1. French-Language Positioning — a small tricolor-inspired accent line paired with a document/globe icon, cyan highlight.
2. Service Pillar Structure — two connected column icons representing the two service pillars, cyan accent line linking them.
3. Corporate Visual System — a small brand-guideline swatch/grid icon, clean flat style, navy background."

### Before-and-After Visuals
Not applicable — no prior site version is documented in projects.ts.

---

## rentiora.com

### Fact Sheet
- **Project name:** rentiora.com
- **Project type:** Marketing landing page (car-rental platform concept)
- **What it does:** Presents premium rental vehicles (sedans, coupes, SUVs, convertibles) with a comfort- and trust-focused brand experience.
- **Target users:** Customers comparing luxury rental vehicles by style, comfort, and use case.
- **Preferred visual style:** Luxury, sleek, automotive — dark backgrounds with dramatic vehicle photography, gold or chrome accent details, premium/trustworthy tone (distinct from every other project — this is the one that should feel like a luxury car brand, not a SaaS or generic e-commerce site).
- **Brand colors:** Site uses the shared "freelancer" accent (`text-cyan-400` → **#22D3EE**) as its portfolio badge color, but for actual image prompts, lean into a luxury automotive palette instead — deep black, chrome/silver, and a warm gold or amber accent, since that better matches a premium car-rental brand than cyan does.
- **Pages/screens needed:** Homepage/landing page.
- **Image generator:** Open — this is a strong candidate for photoreal automotive-luxury generation (Midjourney/Flux excel at car photography).
- **Existing references:** `/images/freelancer-portfolio/rentiora/rentiora-01.png` (overview), `-02.png` (homepage).

### Portfolio Cover Image
"A luxury automotive hero shot: a laptop displaying a sleek car-rental landing page with a dramatic dark hero photo of a premium sedan and warm gold (#D4A94F-ish amber) accent CTA button, positioned on a polished black studio surface with dramatic low-key lighting. Chrome reflections, deep black background with a subtle warm gold rim light, premium automotive-brand mood, 16:9 wide composition with negative space for a title."

### Marketplace Thumbnail
"Square 1:1 thumbnail: a browser mockup showing a car-rental landing page with a dark hero car photo and gold accent 'Book Now' button, angled with depth, deep black gradient background, subtle warm gold glow, drop shadow. Premium, sleek, legible at small sizes."

### Project Showcase Mockups
"A device pair: a desktop monitor showing the rentiora.com homepage with a full-width luxury-car hero image, beside a tablet showing the vehicle-category browsing section (sedans, coupes, SUVs, convertibles), both with gold accent buttons on a dark UI, dramatic low-key studio lighting on a black backdrop, premium automotive product photography style."

### Website/App Page Designs
"A standalone flat composition of the rentiora.com vehicle-category page: a browser-window UI card on a deep black gradient background, showing a grid of premium vehicle categories with gold accent labels, clean bold sans-serif typography, dramatic vehicle photography thumbnails, soft drop shadow, luxury case-study presentation style."

### Desktop, Tablet, and Mobile Screens
"A responsive screen showcase: desktop browser frame (homepage hero), tablet frame (vehicle category grid), and mobile frame (condensed vehicle list) arranged left to right in ascending size, consistent dark UI with warm gold accents across all three, dramatic low-key studio lighting, cohesive luxury-automotive aesthetic."

### Feature-Highlight Images
"1. Premium Vehicle Positioning — a small trophy or steering-wheel icon with a gold shimmer accent, dark background.
2. Vehicle Category Browsing — four small car-silhouette icons (sedan, coupe, SUV, convertible) in gold line art, dark background.
3. Marketing Landing Experience — a simple landing-page-layout icon with a gold accent CTA button graphic, dark backdrop."

### Before-and-After Visuals
Not applicable — rentiora.com is presented as a new concept build, with no prior version documented in projects.ts.
