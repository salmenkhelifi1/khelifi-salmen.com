export type ProjectAccent = {
  // Full literal class names so Tailwind can statically detect them
  text: string;
  hoverText: string;
  button: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  accent: ProjectAccent;
  heroImage?: string;
  galleryAspect?: "phone" | "desktop";
  overview: {
    what: string;
    problem: string;
    audience: string;
  };
  features: ProjectFeature[];
  gallery: { src: string; alt: string }[];
  techStack: {
    frontend: string[];
    backend?: string[];
    tools?: string[];
  };
  badges: string[];
  challenges?: ProjectChallenge[];
  links: {
    github?: string;
    live?: string;
  };
};

const freelancerAccent: ProjectAccent = {
  text: "text-cyan-400",
  hoverText: "hover:text-cyan-400",
  button: "bg-cyan-600 hover:bg-cyan-500",
};

export const projects: Project[] = [
  {
    slug: "grammarai",
    title: "GrammarAI",
    tagline:
      "A privacy-first, cross-platform grammar editor with on-device AI for free users and cloud-powered premium features.",
    category: "AI SaaS Platform",
    accent: {
      text: "text-emerald-400",
      hoverText: "hover:text-emerald-400",
      button: "bg-emerald-600 hover:bg-emerald-500",
    },
    heroImage:
      "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
    overview: {
      what: "A full-stack, mobile-first grammar correction application built natively for iOS, Android, and Web. Free users get fully on-device AI; subscribers unlock cloud models like Gemini, Deepgram, and ElevenLabs.",
      problem:
        "Most grammar tools send every keystroke to the cloud. GrammarAI keeps the free tier entirely on-device, so private text never leaves the phone — while still offering state-of-the-art cloud accuracy for those who want it.",
      audience:
        "Students, professionals, and non-native English speakers who want polished writing without giving up privacy.",
    },
    features: [
      {
        title: "Grammar Correction",
        description:
          "AI-powered checking with explanations and multiple modes — professional, casual, academic, social. On-device ML for free, Gemini 1.5 Flash for premium.",
      },
      {
        title: "OCR Text Scanner",
        description:
          "Capture text from images via Google ML Kit, fully on-device for maximum privacy. Handles handwritten notes seamlessly.",
      },
      {
        title: "Voice Input & Dictation",
        description:
          "Speak naturally and convert to formatted text. Deepgram Nova-2 cloud accuracy for premium, native speech recognition for free.",
      },
      {
        title: "Text-to-Speech Playback",
        description:
          "Listen to corrected text with ElevenLabs neural voices and speed control, with native TTS fallback for free users.",
      },
      {
        title: "History & Analytics",
        description:
          "Persistent history in Firestore with full error analytics and writing scores. Unlimited history for premium users.",
      },
      {
        title: "Premium Subscriptions",
        description:
          "RevenueCat-integrated paywall with Stripe backend processing and instant gating via Cloud Functions.",
      },
    ],
    gallery: [
      {
        src: "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
        alt: "GrammarAI editor screen",
      },
      {
        src: "/images/stitch-projects/14620193470260808168-86bf1b392bcc4a1787cbc2c9ab421f87.png",
        alt: "GrammarAI correction results screen",
      },
      {
        src: "/images/stitch-projects/14620193470260808168-f9331ca9a91140e2960b24a81db062bf.png",
        alt: "GrammarAI premium features screen",
      },
    ],
    techStack: {
      frontend: [
        "Flutter & Riverpod",
        "Next.js 14",
        "React 18",
        "TailwindCSS",
        "ML Kit & MediaPipe GenAI",
      ],
      backend: [
        "Node.js / Express.js (TypeScript)",
        "Gemini, Deepgram, ElevenLabs APIs",
        "Redis (ioredis)",
        "Stripe",
        "Firebase Auth / Firestore",
      ],
      tools: ["Docker", "Render.com", "RevenueCat"],
    },
    badges: ["Flutter", "Next.js 14", "Express.js", "Gemini API", "RevenueCat"],
    challenges: [
      {
        challenge: "On-device AI for the free tier",
        solution:
          "Implemented a GrammarEngineProxy with a fallback chain: Cloud → On-Device (MediaPipe) → local heuristics.",
      },
      {
        challenge: "Privacy-preserving OCR",
        solution:
          "All image processing runs via Google ML Kit on-device — images never leave the device.",
      },
      {
        challenge: "Secure API key management",
        solution:
          "Express.js proxies all cloud requests, validating Firebase tokens before forwarding.",
      },
      {
        challenge: "Freemium subscription sync",
        solution:
          "RevenueCat webhooks trigger a Firebase Cloud Function that writes entitlements to Firestore.",
      },
    ],
    links: {},
  },
  {
    slug: "adaptifit",
    title: "Adaptifit",
    tagline:
      "An AI-powered fitness and nutrition coach with personalized workout plans, meal tracking, and progress analytics.",
    category: "AI Mobile App",
    accent: {
      text: "text-cyan-400",
      hoverText: "hover:text-cyan-400",
      button: "bg-cyan-600 hover:bg-cyan-500",
    },
    heroImage:
      "/images/stitch-projects/15863999156109095280-3ed15ebb08364f629544f22ce389d1c4.png",
    overview: {
      what: "A full-stack mobile + backend solution: AI-generated workout plans, meal tracking, progress analytics, and an AI coach chat, built with Flutter and a Node.js backend.",
      problem:
        "Generic fitness apps hand everyone the same plan. Adaptifit generates and adapts plans from each user's goals, equipment, and progress data.",
      audience:
        "People who want a personal-trainer experience — adaptive plans and coaching — at app-subscription prices.",
    },
    features: [
      {
        title: "Personalized Workout Plans",
        description:
          "AI-generated programs tailored to goals, experience level, and available equipment — re-adapted as progress data comes in.",
      },
      {
        title: "Meal Tracking & Nutrition",
        description:
          "Log meals and track macros with AI-assisted suggestions aligned to training goals.",
      },
      {
        title: "Progress Analytics",
        description:
          "Charts and trends for workouts, body metrics, and nutrition over time.",
      },
      {
        title: "AI Coach Chat",
        description:
          "An OpenAI-powered coach that answers questions and adjusts plans conversationally, with n8n automations behind the scenes.",
      },
    ],
    gallery: [
      {
        src: "/images/stitch-projects/15863999156109095280-3ed15ebb08364f629544f22ce389d1c4.png",
        alt: "Adaptifit dashboard screen",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Node.js", "MongoDB", "OpenAI API"],
      tools: ["n8n"],
    },
    badges: ["Flutter", "Node.js", "MongoDB", "OpenAI", "n8n"],
    links: {},
  },
  {
    slug: "anlingo",
    title: "Anlingo",
    tagline:
      "A privacy-first AI writing assistant with a public landing site, web editor, Express API, billing, usage limits, and a Flutter mobile companion.",
    category: "AI Writing SaaS",
    accent: {
      text: "text-violet-400",
      hoverText: "hover:text-violet-400",
      button: "bg-violet-600 hover:bg-violet-500",
    },
    heroImage: "/images/anlingo/anlingo-03.jpg",
    galleryAspect: "desktop",
    overview: {
      what: "A full-stack writing product for grammar correction, rewriting, translation, voice dictation, document import, AI chat, history, pricing, and account workflows across web and mobile.",
      problem:
        "Most grammar tools force users to choose between speed, privacy, and stronger cloud AI. Anlingo keeps the free path lightweight and private while routing advanced writing work through guarded backend AI providers.",
      audience:
        "Professionals, students, job seekers, support teams, and non-native English writers who need cleaner writing without a complicated editing workflow.",
    },
    features: [
      {
        title: "Privacy-First Writing Flow",
        description:
          "The landing page positions free checks as private and fast, while the product editor keeps the writing workflow focused on paste, check, revise, and send.",
      },
      {
        title: "AI Editor Workspace",
        description:
          "A dashboard editor with grammar, translation, refinement presets, import, dictation, AI assistant prompts, smart suggestions, and quality scoring.",
      },
      {
        title: "Provider-Backed Express API",
        description:
          "Express routes handle grammar, rewrite, transform, translate, chat, document ingestion, speech, history, billing, usage, support, and readiness checks.",
      },
      {
        title: "Usage Limits & Subscriptions",
        description:
          "Free and Pro plans are backed by usage APIs, Stripe, Whop, MoMo, webhook verification, entitlement refresh, and pricing screens.",
      },
      {
        title: "Installable Web App",
        description:
          "A conservative PWA setup caches only immutable assets and avoids caching API or authenticated data, keeping offline behavior useful without leaking private writing.",
      },
      {
        title: "Flutter Mobile Companion",
        description:
          "The separate mobile app uses Riverpod, GoRouter, Dio, Firebase Auth, RevenueCat, Sentry, and matching editor, chat, history, pricing, profile, and support modules.",
      },
      {
        title: "Protected Admin Surface",
        description:
          "A separate Next.js admin app supports analytics, users, plans, support, activity logs, security, email operations, and 2FA-gated access.",
      },
    ],
    gallery: [
      {
        src: "/images/anlingo/anlingo-01.jpg",
        alt: "Anlingo marketing landing page",
      },
      {
        src: "/images/anlingo/anlingo-02.jpg",
        alt: "Anlingo editor workspace",
      },
      {
        src: "/images/anlingo/anlingo-03.jpg",
        alt: "Anlingo pricing screen",
      },
      {
        src: "/images/anlingo/anlingo-04.jpg",
        alt: "Anlingo documentation center",
      },
      {
        src: "/images/anlingo/anlingo-05.jpg",
        alt: "Anlingo admin two-factor security screen",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 14 App Router",
        "Next.js 16 landing",
        "Next.js admin",
        "React 18/19",
        "TailwindCSS",
        "Flutter & Riverpod",
      ],
      backend: [
        "Express",
        "TypeScript",
        "Firebase Auth / Firestore",
        "Redis",
        "PostgreSQL",
        "Gemini, OpenRouter, NVIDIA, DeepSeek",
      ],
      tools: ["Stripe", "Whop", "MoMo", "Docker", "Dokploy", "Sentry", "PostHog"],
    },
    badges: ["Next.js", "Express", "Firebase", "Flutter", "Gemini", "Stripe"],
    challenges: [
      {
        challenge: "Privacy and AI quality tradeoff",
        solution:
          "Kept the free experience lightweight and private while sending premium grammar, rewrite, translation, chat, and speech work through guarded backend routes.",
      },
      {
        challenge: "Multiple product surfaces",
        solution:
          "Split the system into a marketing landing site, app dashboard, Express API, admin surface, and separate Flutter mobile repo instead of forcing every surface into one app.",
      },
      {
        challenge: "AI cost and abuse control",
        solution:
          "Added global rate limiting, usage APIs, tier checks, provider fallbacks, operational kill switches, and readiness/security smoke scripts.",
      },
      {
        challenge: "Billing provider complexity",
        solution:
          "Handled Stripe, Whop, and MoMo behind dedicated backend routes with raw-body webhook verification and entitlement refresh behavior.",
      },
      {
        challenge: "Session-gated route consistency",
        solution:
          "Chrome QA exposed that the editor and pricing pages were reachable while some deeper app routes redirected back to auth, so the follow-up is to align route guards with Firebase session hydration.",
      },
    ],
    links: {
      live: "https://anlingo.online",
    },
  },
  {
    slug: "chaktech",
    title: "ChakTech Platform",
    tagline:
      "A production e-commerce platform for Tunisia with a localized storefront, admin back-office, and tenant-scoped API.",
    category: "E-commerce Platform",
    accent: {
      text: "text-orange-400",
      hoverText: "hover:text-orange-400",
      button: "bg-orange-600 hover:bg-orange-500",
    },
    heroImage: "/images/chaktech/chaktech-01.jpg",
    galleryAspect: "desktop",
    overview: {
      what: "A full-stack commerce platform built for the Tunisian market: customer storefront, admin back-office, and custom API, architected as multi-tenant SaaS and launched as a single store.",
      problem:
        "Tunisian online buying is still driven by cash on delivery, phone-first ordering, French and Arabic content, and fast product discovery. ChakTech handles those local workflows without hardcoding the store into the app.",
      audience:
        "Store operators who need a localized storefront, tenant-aware operations, and a back-office that manages catalog, orders, customers, and reporting without code changes.",
    },
    features: [
      {
        title: "Tenant Resolver Theming",
        description:
          "Each request resolves the hostname against registered tenant domains in PostgreSQL, then returns branding, theme tokens, commerce settings, and the tenant UI pack.",
      },
      {
        title: "No-FOUC Server Theming",
        description:
          "Theme CSS variables are injected before first paint, so the storefront arrives fully branded instead of flashing a default design.",
      },
      {
        title: "French + Arabic RTL",
        description:
          "French is the default storefront language, with Arabic support and full right-to-left layout for localized browsing.",
      },
      {
        title: "Cash-on-Delivery Checkout",
        description:
          "A Tunisia-first checkout with quick order, WhatsApp ordering, promo codes, delivery fees, timbre fiscal, and server-side price and stock revalidation.",
      },
      {
        title: "Typesense Product Search",
        description:
          "Instant typo-tolerant search, faceted filtering, and an admin reindex pipeline make product discovery fast and operable.",
      },
      {
        title: "Payload Admin Back-Office",
        description:
          "A French admin surface at admin.chaktech.tn for catalog, orders, analytics, CSV import/export, role-based access, and tenant-aware collection rules.",
      },
    ],
    gallery: [
      {
        src: "/images/chaktech/chaktech-01.jpg",
        alt: "ChakTech platform dashboard",
      },
      {
        src: "/images/chaktech/chaktech-02.jpg",
        alt: "ChakTech storefront homepage",
      },
      {
        src: "/images/chaktech/chaktech-03.jpg",
        alt: "ChakTech product listing and filters",
      },
      {
        src: "/images/chaktech/chaktech-04.jpg",
        alt: "ChakTech product page and quick order",
      },
      {
        src: "/images/chaktech/chaktech-05.jpg",
        alt: "ChakTech cart and checkout flow",
      },
      {
        src: "/images/chaktech/chaktech-06.jpg",
        alt: "ChakTech checkout customer details step",
      },
      {
        src: "/images/chaktech/chaktech-admin-login.png",
        alt: "ChakTech admin secure login screen",
      },
      {
        src: "/images/chaktech/chaktech-admin-dashboard-live.png",
        alt: "ChakTech live admin dashboard",
      },
      {
        src: "/images/chaktech/chaktech-admin-products-live.png",
        alt: "ChakTech live admin product catalog",
      },
      {
        src: "/images/chaktech/chaktech-admin-orders-live.png",
        alt: "ChakTech live admin order queue",
      },
      {
        src: "/images/chaktech/chaktech-admin-add-product-live.png",
        alt: "ChakTech live admin add product form",
      },
      {
        src: "/images/chaktech/chaktech-08.jpg",
        alt: "ChakTech admin dashboard and onboarding checklist",
      },
      {
        src: "/images/chaktech/chaktech-10.jpg",
        alt: "ChakTech admin product catalog",
      },
      {
        src: "/images/chaktech/chaktech-12.jpg",
        alt: "ChakTech admin order detail and fulfillment timeline",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Payload CMS",
        "FR/AR RTL i18n",
      ],
      backend: [
        "Express",
        "TypeScript",
        "PostgreSQL 16",
        "Drizzle ORM",
        "Redis",
        "Typesense",
      ],
      tools: ["Cloudflare R2", "Docker", "Dokploy", "Zod", "Helmet"],
    },
    badges: ["Next.js 16", "React 19", "Payload CMS", "PostgreSQL", "Typesense"],
    challenges: [
      {
        challenge: "Multi-tenant core, single-store launch",
        solution:
          "Built tenant tables, domain mapping, per-tenant branding, RBAC, and UI packs, then launched with one store active to keep the release scope small.",
      },
      {
        challenge: "Checkout integrity",
        solution:
          "Revalidated prices and stock on the server at order time, ignored client totals, and decremented stock atomically when orders are placed.",
      },
      {
        challenge: "Fast localized storefront",
        solution:
          "Combined ISR caching with server-side tenant theming and FR/AR RTL support so pages are fast and correctly branded before hydration.",
      },
      {
        challenge: "Production hardening",
        solution:
          "Ran a 54-finding self-audit covering tenant isolation, PII protection, Zod validation, HTTP hardening, auth, uploads, and operational controls.",
      },
    ],
    links: {
      live: "https://dev.chaktech.tn",
    },
  },
  {
    slug: "noxivo",
    title: "Noxivo",
    tagline:
      "A WhatsApp-first automation SaaS for agencies with a public waitlist, protected agency dashboard, developer docs, and a Fastify workflow engine.",
    category: "WhatsApp Automation SaaS",
    accent: {
      text: "text-green-400",
      hoverText: "hover:text-green-400",
      button: "bg-green-600 hover:bg-green-500",
    },
    heroImage: "/images/noxivo/noxivo-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A multi-tenant platform for agencies to manage tenant workspaces, WhatsApp sessions, team inbox operations, automation workflows, public API access, and developer documentation.",
      problem:
        "Agencies need one operating layer for multiple client WhatsApp workspaces instead of separate dashboards, scattered automations, and one-off session infrastructure per client.",
      audience:
        "Agency owners, platform operators, client workspace admins, and developers building against tenant-scoped WhatsApp automation APIs.",
    },
    features: [
      {
        title: "Public Waitlist Funnel",
        description:
          "The live site at noxivo.pro presents an early-access waitlist with Netlify form handling, consent links, theme switching, cookie consent, and a contact modal.",
      },
      {
        title: "Agency And Tenant Dashboard",
        description:
          "The protected Next.js dashboard includes agency context, tenant workspaces, team access, settings, billing, catalog, conversations, inbox, workflows, analytics, and admin routes.",
      },
      {
        title: "WhatsApp-First Team Inbox",
        description:
          "Dashboard and engine code support WhatsApp conversation management, CRM context, saved replies, inbox rules, macros, summaries, media handling, assignment, and handoff workflows.",
      },
      {
        title: "Workflow Engine",
        description:
          "A Fastify service runs DAG-style automation, queues delayed work with BullMQ, publishes workflow events, and shares contracts with the dashboard through Zod packages.",
      },
      {
        title: "Public Developer API",
        description:
          "Docusaurus docs cover tenant-scoped public API use, WhatsApp messaging, contacts, webhooks, rate limits, SDK guides, and n8n integration paths.",
      },
      {
        title: "Multi-Tier Access Model",
        description:
          "The repo documents and implements a Platform -> Agency -> Tenant model with membership roles, tenant scopes, custom roles, and protected admin surfaces.",
      },
    ],
    gallery: [
      {
        src: "/images/noxivo/noxivo-01.png",
        alt: "Noxivo public waitlist landing page",
      },
      {
        src: "/images/noxivo/noxivo-02.png",
        alt: "Noxivo protected dashboard login screen",
      },
      {
        src: "/images/noxivo/noxivo-03.png",
        alt: "Noxivo agency settings dashboard",
      },
      {
        src: "/images/noxivo/noxivo-06.png",
        alt: "Noxivo tenant workspace dashboard",
      },
      {
        src: "/images/noxivo/noxivo-04.png",
        alt: "Noxivo developer documentation site",
      },
    ],
    techStack: {
      frontend: [
        "Static HTML/CSS/JS waitlist",
        "Next.js 15 App Router",
        "React 19",
        "TailwindCSS",
        "Docusaurus 3",
      ],
      backend: [
        "Fastify 5",
        "MongoDB / Mongoose",
        "Redis / BullMQ",
        "Zod contracts",
        "MessagingProvider / WAHA adapters",
      ],
      tools: ["pnpm + Turborepo", "Netlify", "Dokploy", "Sentry", "PostHog", "Langfuse"],
    },
    badges: ["Next.js 15", "Fastify", "MongoDB", "Redis", "Docusaurus", "BullMQ"],
    challenges: [
      {
        challenge: "Multi-tenant agency boundaries",
        solution:
          "Kept platform, agency, and tenant ownership explicit in docs, contracts, models, session context, dashboard navigation, and engine authorization paths.",
      },
      {
        challenge: "WhatsApp session scale",
        solution:
          "Designed shared MessagingProvider cluster allocation instead of a separate provider container per tenant workspace.",
      },
      {
        challenge: "Dashboard and engine separation",
        solution:
          "Split browser-facing dashboard code from Fastify runtime code, with shared Zod contracts and database packages preserving boundary consistency.",
      },
      {
        challenge: "Developer integration path",
        solution:
          "Published Docusaurus docs for public API authentication, WhatsApp messaging, contacts, webhooks, SDKs, and n8n-style workflow integration.",
      },
    ],
    links: {
      live: "https://noxivo.pro",
    },
  },
  {
    slug: "leyel",
    title: "LEYEL Modest Fashion",
    tagline:
      "A public storefront and brand presentation for LEYEL, a modest ready-to-wear fashion label focused on simplicity, quality, and durable style.",
    category: "Fashion E-commerce",
    accent: freelancerAccent,
    heroImage: "/images/freelancer-portfolio/leyel/leyel-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A fashion storefront case study based on the public Freelancer portfolio entry and screenshots for LEYEL.",
      problem:
        "The brand needed to communicate a modest fashion identity built around refined cuts, subtle details, durable materials, and a calmer alternative to fast fashion.",
      audience:
        "Customers looking for modest ready-to-wear pieces with a simple, premium, and value-aligned brand experience.",
    },
    features: [
      {
        title: "Brand Storytelling",
        description:
          "The portfolio description frames LEYEL as a modest fashion universe built around simplicity, refinement, quality fabrics, and durable wardrobe pieces.",
      },
      {
        title: "Collection Browsing",
        description:
          "The screenshots show collection pages and product-led layouts for browsing clothing and new arrivals.",
      },
      {
        title: "Visual Product Presentation",
        description:
          "Large imagery, soft editorial spacing, and product-focused pages keep attention on the garments and brand tone.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/leyel/leyel-01.png",
        alt: "LEYEL storefront homepage screenshot",
      },
      {
        src: "/images/freelancer-portfolio/leyel/leyel-02.png",
        alt: "LEYEL collection page screenshot",
      },
      {
        src: "/images/freelancer-portfolio/leyel/leyel-03.png",
        alt: "LEYEL product listing screenshot",
      },
    ],
    techStack: {
      frontend: [
        "Public storefront screenshots",
        "Collection and product pages",
        "Platform not stated in the Freelancer item",
      ],
    },
    badges: ["Fashion", "E-commerce", "Brand Site"],
    links: {},
  },
  {
    slug: "ai-workflow-automation",
    title: "AI-Powered Workflow Automation",
    tagline:
      "An n8n automation hub connecting Gmail, Google APIs, OpenAI, Google Sheets, Google Voice, and WhatsApp inputs into structured task workflows.",
    category: "AI & Automation",
    accent: freelancerAccent,
    heroImage:
      "/images/freelancer-portfolio/ai-workflow-automation/ai-workflow-automation-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A workflow automation system built with n8n, OpenAI, and Google APIs for intelligent task management across multiple channels.",
      problem:
        "The client needed emails, SMS, and WhatsApp inputs classified, enriched, and turned into structured tasks without manual copying between tools.",
      audience:
        "Teams that rely on inboxes, voice notes, SMS, and spreadsheets to coordinate sales, support, authorizations, and travel-related operations.",
    },
    features: [
      {
        title: "Gmail Classification",
        description:
          "Rule-based filters and OpenAI GPT logic categorize emails into groups such as Sales, Support, and CC Authorizations.",
      },
      {
        title: "AI Reply Drafting",
        description:
          "The workflow drafts smart replies, assigns labels, and formats context-aware data for follow-up.",
      },
      {
        title: "Spreadsheet CRM Logging",
        description:
          "Task-related details are extracted and written into a structured Google Sheet CRM.",
      },
      {
        title: "Voice and Message Inputs",
        description:
          "Google Voice SMS and WhatsApp voice/text inputs are classified, transcribed with OpenAI Whisper when needed, and converted into structured tasks.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/ai-workflow-automation/ai-workflow-automation-01.png",
        alt: "AI-powered n8n workflow automation canvas",
      },
    ],
    techStack: {
      frontend: ["n8n workflow canvas"],
      backend: [
        "n8n",
        "OpenAI GPT",
        "OpenAI Whisper",
        "Google APIs",
        "Gmail",
        "Google Sheets",
        "Google Voice",
      ],
      tools: ["WhatsApp input handling", "Rule-based filters"],
    },
    badges: ["n8n", "OpenAI", "Google APIs", "Automation"],
    links: {},
  },
  {
    slug: "hti-ecommerce",
    title: "HTI.tn Electronic E-commerce",
    tagline:
      "A WordPress and WooCommerce electronics storefront for HTI.tn with product browsing, payment setup, SEO structure, and performance-focused customization.",
    category: "E-commerce Website",
    accent: freelancerAccent,
    heroImage: "/images/freelancer-portfolio/hti-ecommerce/hti-ecommerce-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A professional e-commerce website for an electronics and surveillance equipment retailer, built and customized on WordPress and WooCommerce.",
      problem:
        "HTI.tn needed a modern store that could present electronics products clearly, support shopping workflows, and stay usable on mobile devices.",
      audience:
        "Customers shopping for electronics and surveillance equipment, and store operators managing a WooCommerce catalog.",
    },
    features: [
      {
        title: "WooCommerce Storefront",
        description:
          "The Freelancer entry verifies WooCommerce integration for product browsing and e-commerce operations.",
      },
      {
        title: "Custom Theme Enhancements",
        description:
          "The project included custom theme and UI enhancements for a modern, user-friendly design.",
      },
      {
        title: "Payment Gateway Setup",
        description:
          "Secure online payment gateway setup is listed as part of the delivered work.",
      },
      {
        title: "SEO and Performance",
        description:
          "The portfolio description calls out performance optimization, SEO-friendly structure, and mobile-responsive design.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/hti-ecommerce/hti-ecommerce-01.png",
        alt: "HTI.tn e-commerce project overview",
      },
      {
        src: "/images/freelancer-portfolio/hti-ecommerce/hti-ecommerce-02.png",
        alt: "HTI.tn storefront screenshot",
      },
      {
        src: "/images/freelancer-portfolio/hti-ecommerce/hti-ecommerce-03.png",
        alt: "HTI.tn product page screenshot",
      },
    ],
    techStack: {
      frontend: ["WordPress", "Custom theme enhancements", "Responsive design"],
      backend: ["WooCommerce", "Payment gateway setup"],
      tools: ["SEO-friendly structure", "Performance optimization"],
    },
    badges: ["WordPress", "WooCommerce", "SEO", "Payments"],
    links: {
      live: "https://hti.tn",
    },
  },
  {
    slug: "chab-ka",
    title: "Chab-ka Concept Store",
    tagline:
      "A concept-store website for handcrafted artisanal products, focused on product showcase, responsive browsing, and SEO-friendly presentation.",
    category: "E-commerce Website",
    accent: freelancerAccent,
    heroImage: "/images/freelancer-portfolio/chab-ka/chab-ka-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A visually focused concept-store website for Chab-ka, presenting handcrafted artisanal products such as jewelry and ceramic pieces.",
      problem:
        "The store needed a site that could communicate authenticity and craftsmanship while making collections easy to explore.",
      audience:
        "Visitors browsing unique handcrafted products and learning about the brand story, materials, and collections.",
    },
    features: [
      {
        title: "Product Showcase",
        description:
          "The portfolio entry describes a gallery designed to show detailed handmade products, from jewelry to ceramics.",
      },
      {
        title: "Brand Navigation",
        description:
          "Navigation was built around collections, brand story, and materials so visitors can understand the concept-store positioning.",
      },
      {
        title: "Responsive Experience",
        description:
          "The Freelancer description verifies responsive design for accessible browsing across devices.",
      },
      {
        title: "SEO Optimization",
        description:
          "The project included search optimization practices to improve visibility and organic traffic.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/chab-ka/chab-ka-01.png",
        alt: "Chab-ka concept store overview",
      },
      {
        src: "/images/freelancer-portfolio/chab-ka/chab-ka-02.png",
        alt: "Chab-ka concept store product view",
      },
      {
        src: "/images/freelancer-portfolio/chab-ka/chab-ka-03.png",
        alt: "Chab-ka storefront screenshot",
      },
    ],
    techStack: {
      frontend: [
        "Responsive website",
        "Product gallery",
        "Platform not stated in the Freelancer item",
      ],
      tools: ["SEO optimization"],
    },
    badges: ["Concept Store", "Responsive", "SEO"],
    links: {},
  },
  {
    slug: "velyssa",
    title: "Velyssa Fashion E-commerce",
    tagline:
      "A WordPress and WooCommerce fashion storefront with product categories, product pages, checkout, AWS services, Brevo, and All in One SEO.",
    category: "Fashion E-commerce",
    accent: freelancerAccent,
    heroImage: "/images/freelancer-portfolio/velyssa/velyssa-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A fully functional e-commerce website for Velyssa, a fashion brand, built with WordPress and WooCommerce.",
      problem:
        "The brand needed a polished storefront for collections and products, plus a shopping experience that supports browsing and checkout.",
      audience:
        "Fashion shoppers browsing collections and store operators managing product categories, product pages, and marketing tools.",
    },
    features: [
      {
        title: "Fashion Storefront",
        description:
          "The site showcases latest collections and products with a clean, modern fashion-focused design.",
      },
      {
        title: "WooCommerce Shopping Flow",
        description:
          "Product categories, detailed product pages, and a user-friendly checkout process are verified in the portfolio description.",
      },
      {
        title: "Marketing and SEO Tools",
        description:
          "Brevo is listed for email marketing and All in One SEO for improved search visibility.",
      },
      {
        title: "Performance Support",
        description:
          "The Freelancer item states that AWS services were integrated for performance and reliability.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/velyssa/velyssa-01.png",
        alt: "Velyssa fashion e-commerce overview",
      },
      {
        src: "/images/freelancer-portfolio/velyssa/velyssa-02.png",
        alt: "Velyssa storefront homepage screenshot",
      },
      {
        src: "/images/freelancer-portfolio/velyssa/velyssa-03.png",
        alt: "Velyssa shop screenshot",
      },
    ],
    techStack: {
      frontend: ["WordPress", "Responsive storefront", "Fashion product pages"],
      backend: ["WooCommerce"],
      tools: ["AWS services", "Brevo", "All in One SEO"],
    },
    badges: ["WordPress", "WooCommerce", "AWS", "Brevo", "SEO"],
    links: {
      live: "https://velyssa.com",
    },
  },
  {
    slug: "sainteagnes-blog",
    title: "blog-sainteagnes.fr",
    tagline:
      "A modern blog platform with responsive design, SEO optimization, performance and security work, and CMS-friendly content management.",
    category: "Blog Platform",
    accent: freelancerAccent,
    heroImage:
      "/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A blog platform for blog-sainteagnes.fr, designed for clean reading, performance, SEO, and easy content updates.",
      problem:
        "The site needed a professional publishing surface that improved content reach while staying simple to manage.",
      audience:
        "School or organization readers browsing articles, and content editors who need straightforward publishing workflows.",
    },
    features: [
      {
        title: "Responsive Blog Design",
        description:
          "The Freelancer item verifies custom web development for a responsive and visually appealing blog.",
      },
      {
        title: "SEO Optimization",
        description:
          "Search visibility improvements were listed as a key contribution.",
      },
      {
        title: "Performance and Security",
        description:
          "The delivered work included fast-loading and secure browsing optimizations.",
      },
      {
        title: "CMS Integration",
        description:
          "The portfolio description states that content updates and management were made user-friendly through CMS integration.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-01.png",
        alt: "blog-sainteagnes.fr project overview",
      },
      {
        src: "/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-02.png",
        alt: "blog-sainteagnes.fr homepage screenshot",
      },
      {
        src: "/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-03.png",
        alt: "blog-sainteagnes.fr blog listing screenshot",
      },
    ],
    techStack: {
      frontend: ["Responsive blog website", "Custom web development"],
      tools: ["CMS integration", "SEO optimization", "Performance and security"],
    },
    badges: ["Blog", "CMS", "SEO", "Performance"],
    links: {
      live: "https://blog-sainteagnes.fr",
    },
  },
  {
    slug: "digitrends-dev",
    title: "DigiTrends.dev",
    tagline:
      "A responsive company website for an IT solutions brand covering software development, cloud solutions, DevOps, and digital transformation.",
    category: "Company Website",
    accent: freelancerAccent,
    heroImage:
      "/images/freelancer-portfolio/digitrends-dev/digitrends-dev-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "The official website for DigiTrends.dev, created to present the company's IT services and brand identity.",
      problem:
        "The company needed a modern website to showcase software development, cloud, DevOps, and digital transformation expertise.",
      audience:
        "Prospective clients and partners evaluating DigiTrends.dev's service capabilities.",
    },
    features: [
      {
        title: "Service Positioning",
        description:
          "The portfolio entry verifies pages focused on software development, cloud solutions, DevOps, and digital transformation.",
      },
      {
        title: "Responsive Web Experience",
        description:
          "The work included responsive and performance-optimized implementation across devices.",
      },
      {
        title: "SEO and Best Practices",
        description:
          "On-page SEO and secure, scalable infrastructure are listed in the delivered scope.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/digitrends-dev/digitrends-dev-01.png",
        alt: "DigiTrends.dev homepage screenshot",
      },
    ],
    techStack: {
      frontend: [
        "Responsive company website",
        "Platform not stated in the Freelancer item",
      ],
      tools: ["On-page SEO", "Performance optimization", "Secure infrastructure"],
    },
    badges: ["Company Website", "SEO", "Performance"],
    links: {
      live: "https://digitrends.dev",
    },
  },
  {
    slug: "electronic-ecommerce",
    title: "Electronic E-Commerce Website",
    tagline:
      "A WordPress electronics store built with the Proto theme, product listings, responsive layouts, search and filtering, and e-commerce functionality.",
    category: "E-commerce Website",
    accent: freelancerAccent,
    heroImage:
      "/images/freelancer-portfolio/electronic-ecommerce/electronic-ecommerce-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A fully functional electronics e-commerce website built using WordPress and the Proto theme.",
      problem:
        "The store needed a professional online shopping experience with product discovery, listings, and device-friendly layouts.",
      audience:
        "Electronics shoppers browsing products by category, search, filters, descriptions, pricing, and reviews.",
    },
    features: [
      {
        title: "Responsive Storefront",
        description:
          "The Freelancer description verifies responsive behavior across desktops, tablets, and smartphones.",
      },
      {
        title: "Proto Theme Customization",
        description:
          "The project used the Proto theme to create a store design aligned with an electronics retail identity.",
      },
      {
        title: "Product Listings",
        description:
          "The site included categorized listings with images, descriptions, pricing, and customer reviews.",
      },
      {
        title: "Search and Filtering",
        description:
          "Advanced search and filtering are listed in the public portfolio description.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/electronic-ecommerce/electronic-ecommerce-01.png",
        alt: "Electronic e-commerce website screenshot",
      },
    ],
    techStack: {
      frontend: ["WordPress", "Proto theme", "Responsive design"],
      backend: ["E-commerce functionality"],
      tools: ["Search and filtering", "Product reviews"],
    },
    badges: ["WordPress", "Proto Theme", "E-commerce"],
    links: {},
  },
  {
    slug: "digitrends-pro",
    title: "digitrends.pro",
    tagline:
      "A French-language business website presenting operational excellence and digital innovation as two connected transformation services.",
    category: "Company Website",
    accent: freelancerAccent,
    heroImage:
      "/images/freelancer-portfolio/digitrends-pro/digitrends-pro-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A business website for digitrends.pro, based on a French-language positioning around operational excellence and digital innovation.",
      problem:
        "The brand needed to explain two complementary service pillars and present them as one transformation offer.",
      audience:
        "Businesses looking for process optimization, digitalization, and operational transformation support.",
    },
    features: [
      {
        title: "French-Language Positioning",
        description:
          "The portfolio text presents operational excellence and digital innovation as two connected strengths.",
      },
      {
        title: "Service Pillar Structure",
        description:
          "The site organizes the business around process optimization and digitalization services.",
      },
      {
        title: "Corporate Visual System",
        description:
          "The screenshots show a polished company presentation with service-focused page layouts.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/digitrends-pro/digitrends-pro-01.png",
        alt: "digitrends.pro project overview",
      },
      {
        src: "/images/freelancer-portfolio/digitrends-pro/digitrends-pro-02.png",
        alt: "digitrends.pro homepage screenshot",
      },
      {
        src: "/images/freelancer-portfolio/digitrends-pro/digitrends-pro-03.png",
        alt: "digitrends.pro services screenshot",
      },
    ],
    techStack: {
      frontend: [
        "French-language company website",
        "Platform not stated in the Freelancer item",
      ],
    },
    badges: ["Company Website", "French", "Digital Transformation"],
    links: {
      live: "https://digitrends.pro",
    },
  },
  {
    slug: "rentiora",
    title: "rentiora.com",
    tagline:
      "A car-rental platform concept for browsing premium vehicles such as sedans, coupes, SUVs, and convertibles.",
    category: "Car Rental Platform",
    accent: freelancerAccent,
    heroImage: "/images/freelancer-portfolio/rentiora/rentiora-01.png",
    galleryAspect: "desktop",
    overview: {
      what: "A car-rental platform case study based on the public Freelancer item and screenshots for rentiora.com.",
      problem:
        "The product needed to present premium rental vehicles and communicate comfort, performance, and trust.",
      audience:
        "Customers comparing luxury rental vehicles by style, comfort, and use case.",
    },
    features: [
      {
        title: "Premium Vehicle Positioning",
        description:
          "The public description positions the service around comfort, performance, sophistication, and trusted rentals.",
      },
      {
        title: "Vehicle Category Browsing",
        description:
          "The portfolio text references sedans, coupes, SUVs, and convertibles as supported rental categories.",
      },
      {
        title: "Marketing Landing Experience",
        description:
          "The screenshots show a polished visual landing-page treatment for a car rental brand.",
      },
    ],
    gallery: [
      {
        src: "/images/freelancer-portfolio/rentiora/rentiora-01.png",
        alt: "Rentiora car rental project overview",
      },
      {
        src: "/images/freelancer-portfolio/rentiora/rentiora-02.png",
        alt: "Rentiora car rental homepage screenshot",
      },
    ],
    techStack: {
      frontend: [
        "Marketing landing page",
        "Platform not stated in the Freelancer item",
      ],
    },
    badges: ["Car Rental", "Landing Page", "Luxury"],
    links: {},
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
