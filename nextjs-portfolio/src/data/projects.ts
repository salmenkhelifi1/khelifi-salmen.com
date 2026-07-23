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

/**
 * Project delivery status. Kept honest per the founder record: owned products
 * are solo, pre-launch, and have no verified users/revenue, so nothing here
 * implies a shipped commercial outcome.
 */
export type ProjectStatus =
  | "live"
  | "in-development"
  | "prototype"
  | "archived";

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
  gallery: { src: string; alt: string; aspect?: "desktop" | "phone" }[];
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
    demo?: string;
  };
  /**
   * Project snapshot fields — all optional. Every consumer must render a field
   * only when it is present; a missing field must never show an empty label.
   * Populate ONLY with verified facts (founder record or owner-confirmed).
   * Leave unset rather than guessing — see docs/CONTENT_NEEDED.md.
   */
  snapshot?: {
    timeframe?: string; // e.g. "2023 - present"
    status?: ProjectStatus;
    role?: string; // e.g. "Solo full-stack developer"
    ownership?: string; // what I personally owned, end to end
    team?: string; // omit for solo work rather than writing "solo"
    industry?: string;
    platform?: string; // e.g. "Web + mobile"
  };
};

const freelancerAccent: ProjectAccent = {
  text: "text-cyan-400",
  hoverText: "hover:text-cyan-400",
  button: "bg-cyan-600 hover:bg-cyan-500",
};

export const projects: Project[] = [
  {
    slug: "founderflow",
    title: "FounderFlow",
    tagline:
      "An iOS-first founder discovery and curated meetup app with a focused seven-screen journey, privacy-aware connections, and iOS 26 Liquid Glass navigation.",
    category: "iOS Founder Network",
    accent: {
      text: "text-indigo-400",
      hoverText: "hover:text-indigo-400",
      button: "bg-indigo-600 hover:bg-indigo-500",
    },
    heroImage: "/images/founderflow/founderflow-cover.png",
    galleryAspect: "desktop",
    overview: {
      what: "A feature-first Flutter application covering sign-in, founder onboarding, a state-preserving Home dashboard, list and map discovery, privacy-aware founder profiles, curated events, and account management. The client is backed by Supabase Auth, Postgres, Storage, RLS, RPCs, and Edge Functions.",
      problem:
        "Founders often have to search noisy social feeds or broad professional networks to find relevant builders and small, useful meetups. FounderFlow deliberately removes posts, likes, followers, chat, and marketplace mechanics so discovery, connection requests, and curated event invitations stay clear and private.",
      audience:
        "Early-stage founders looking for relevant builders, collaborators, and reviewed founder meetups without joining another engagement-driven social network.",
    },
    features: [
      {
        title: "Locked Founder Journey",
        description:
          "A deterministic Welcome → profile setup → Home → Discover → founder → Connect → Events → Invite → Profile flow keeps the MVP understandable and testable.",
      },
      {
        title: "List and Map Discovery",
        description:
          "Founder search, filters, map/list switching, approximate locations, safe missing-key and empty states, and consistent results share one discovery state model.",
      },
      {
        title: "Privacy-Aware Connections",
        description:
          "Contact-link visibility, profile visibility, owner-only writes, self-connection prevention, duplicate-request prevention, reporting, blocking, and terminal request states are enforced across UI and backend policies.",
      },
      {
        title: "Curated Event Invitations",
        description:
          "Founders browse reviewed events and request invitations with explicit pending, approved, declined, full, retry, and duplicate-action states instead of publishing an open social feed.",
      },
      {
        title: "iOS 26 Interaction Layer",
        description:
          "A stable four-tab floating navigation surface and pill controls use functional Liquid Glass hierarchy on iOS, while content stays opaque and Android retains Material 3 behavior.",
      },
    ],
    gallery: [
      {
        src: "/images/founderflow/founderflow-demo.gif",
        alt: "FounderFlow iPhone simulator demo with realistic sample founder and event data",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-welcome.png",
        alt: "FounderFlow Welcome screen with Apple, Google, and email sign-in actions",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-create-profile.png",
        alt: "FounderFlow profile setup with Salmen's founder portrait, location consent, and founder focus controls",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-home.png",
        alt: "FounderFlow Home dashboard showing a nearby sample founder and curated event",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-discover.png",
        alt: "FounderFlow Discover screen with Salmen marked as You, a safe own-profile action, realistic sample founders, and search controls",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-map.png",
        alt: "FounderFlow live Google Map with Map and List modes, location sharing, current-location control, and a sample San Francisco founder marker",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-founder-profile.png",
        alt: "FounderFlow high-resolution Sarah Chen founder profile with one clear connection action",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-events.png",
        alt: "FounderFlow Curated Events screen with a realistic Da Nang meetup example",
        aspect: "phone",
      },
      {
        src: "/images/founderflow/founderflow-profile.png",
        alt: "FounderFlow Salmen Khelifi account profile with a high-resolution portrait, links, visibility, revenue verification, and settings",
        aspect: "phone",
      },
    ],
    techStack: {
      frontend: [
        "Flutter & Dart",
        "Riverpod",
        "GoRouter",
        "Cupertino / iOS 26 interaction patterns",
        "Material 3 on Android",
      ],
      backend: [
        "Supabase Auth",
        "PostgreSQL with RLS and RPCs",
        "Supabase Storage",
        "Supabase Edge Functions",
      ],
      tools: [
        "Xcode & iOS Simulator",
        "Flutter integration tests",
        "Google Maps SDK",
        "Google Stitch",
        "Optional Sentry and PostHog",
      ],
    },
    badges: ["Flutter", "Supabase", "iOS 26", "Riverpod", "PostgreSQL"],
    challenges: [
      {
        challenge: "Adopting Liquid Glass without turning the whole interface into decoration",
        solution:
          "Centralized the design tokens and limited translucency to navigation and controls. Founder cards, profiles, event content, and forms remain opaque for contrast, while Reduce Transparency, Increase Contrast, Reduce Motion, dark mode, and 44-point targets are represented in the UI contracts.",
      },
      {
        challenge: "Keeping private founder data safe across discovery and connection flows",
        solution:
          "Separated owner tables from visibility-filtered discovery RPCs, enforced RLS and fixed Storage paths, and represented moderation, report, block, in-flight, duplicate, self-request, retry, and deletion states explicitly in the client.",
      },
      {
        challenge: "Proving a multi-screen MVP without expanding it into a social network",
        solution:
          "Locked the product to seven top-level screens and one core journey, then covered it with focused widget/provider tests and a deterministic iPhone simulator smoke test that exercises every primary destination and action.",
      },
    ],
    links: {
      demo: "/images/founderflow/founderflow-demo.mp4",
    },
    snapshot: {
      timeframe: "2026",
      status: "in-development",
      role: "Solo product designer and full-stack mobile developer",
      ownership:
        "Product scope, Flutter architecture, iOS interaction design, Supabase data/security layer, automated QA, and release preparation",
      industry: "Founder networking and curated events",
      platform: "iOS-first mobile app",
    },
  },
  {
    slug: "luxe-spa",
    title: "Luxe Spa Booking",
    tagline:
      "A high-performance white-label booking, CRM, and management system for appointment-based service businesses, featuring real-time staff dashboards, BullMQ workflows, and AI-powered concierge scheduling.",
    category: "SaaS & Booking Platform",
    accent: {
      text: "text-purple-400",
      hoverText: "hover:text-purple-400",
      button: "bg-purple-600 hover:bg-purple-500",
    },
    heroImage: "/images/luxe_spa_home.png",
    galleryAspect: "desktop",
    overview: {
      what: "A comprehensive multi-service white-label booking, CRM, and shop management SaaS platform. The system is designed to allow service-oriented businesses (such as medical aesthetics clinics, hair salons, spas, and consultants) to launch custom-branded online booking experiences, manage technicians, automate customer communications, and handle deposits/payments, fully isolated from other clients.",
      problem:
        "Service businesses face a trade-off: use expensive SaaS platforms (Mindbody, Vagaro) that charge high transaction fees, or build custom software that is slow and costly to maintain. Furthermore, switching a platform from a nail spa layout to a dental clinic layout typically requires extensive code modifications, custom databases, and frontend rebuilds.",
      audience:
        "Independent boutique operators, local clinic chains, and digital agencies looking to offer localized booking platforms as a service without rebuilding the core scheduling engine.",
    },
    features: [
      {
        title: "Instant Multi-Vertical Preset System",
        description:
          "Zod-validated preset structures (Spa, Salon, Barber, Clinic) dynamically seed the database on command. Swaps catalog categories, custom services, brand colors, vocabulary terminology, and operational hours in less than 10 seconds without code changes.",
      },
      {
        title: "Real-Time Staff Inbox & Messaging",
        description:
          "Socket.io-based communication pipeline syncs technician agendas instantly when appointments are updated. Incorporates a unified staff inbox for receptionist-to-client live chats and system notifications.",
      },
      {
        title: "Automated Multi-Channel Engagement",
        description:
          "Twilio-integrated SMS review invitations, automated booking confirmations, and customer discount campaigns running on background workers powered by Redis and BullMQ to prevent main event-loop degradation.",
      },
      {
        title: "AI Concierge Booking Flow",
        description:
          "An intelligent conversational booking assistant powered by the Gemini API. The AI references live business settings, catalog metadata, and provider availability to answer customer queries and guide them through the scheduling funnel.",
      },
      {
        title: "Granular Role-Based Access Control",
        description:
          "Strict hierarchical security rules (OWNER > MANAGER > RECEPTIONIST > TECHNICIAN > CUSTOMER) protecting sensitive customer CRM files, financial metrics, and operational settings.",
      },
      {
        title: "Secure Payments & Digital Vouchers",
        description:
          "Full Stripe Checkout integration for session deposits, active VIP memberships subscription billing, and dynamically generated barcodes for digital gift card validation.",
      },
    ],
    gallery: [
      {
        src: "/images/luxe_spa_video_demo.webp",
        alt: "Full end-to-end video walkthrough of the Luxe Spa platform",
      },
      {
        src: "/images/luxe_spa_home.png",
        alt: "Customer facing booking website landing page showing premium typography and active services",
      },
      {
        src: "/images/luxe_spa_booking_flow.png",
        alt: "Interactive step-by-step customer booking wizard page",
      },
      {
        src: "/images/luxe_spa_ai_chat.png",
        alt: "Conversational AI concierge bot answering services questions and guiding bookings",
      },
      {
        src: "/images/luxe_spa_admin.png",
        alt: "Admin dashboard page showing recent activity metrics and bookings queue",
      },
    ],
    techStack: {
      frontend: [
        "Next.js 16 (App Router)",
        "React 19",
        "Tailwind CSS 4",
        "Zustand State Store",
        "shadcn/ui Layouts",
      ],
      backend: [
        "Express.js (TypeScript)",
        "PostgreSQL & Prisma ORM",
        "Socket.io Websockets",
        "Redis / BullMQ Queue Workers",
        "Nodemailer & Twilio API",
      ],
      tools: ["ImageKit CDN", "Docker", "Dokploy / VPS", "Zod Validation", "Helmet HTTP Headers"],
    },
    badges: ["Next.js 16", "Express.js", "PostgreSQL", "Socket.io", "Gemini API"],
    challenges: [
      {
        challenge: "Instant re-branding per client/vertical",
        solution:
          "Designed a centralized JSON preset schema that dynamically populates Categories, MenuItems, and SiteSetting records in the database on seed, translating terms (e.g. 'Therapist' vs 'Doctor') globally at runtime.",
      },
      {
        challenge: "Real-time calendar concurrency and synchronization",
        solution:
          "Built a robust transaction layer in Prisma to enforce slot validation at booking time, coupled with Socket.io broadcast rooms to instantly update booking states on the receptionist dashboard.",
      },
      {
        challenge: "Decoupled asynchronous notification pipelines",
        solution:
          "Offloaded high-latency operations (Nodemailer dispatch, Twilio SMS sending, membership credits updates) to a background BullMQ worker process running alongside Express, with retry logic and failure handling.",
      },
      {
        challenge: "Largest Contentful Paint (LCP) and media optimization",
        solution:
          "Optimized image sizes and aspect ratios using ImageKit real-time transformation parameters, prevented layout shifts via fixed Next.js Image dimensions, and added database indexing on foreign keys.",
      },
      {
        challenge: "AI concierge query security and context control",
        solution:
          "Injected live catalog details, open hours, and booking guidelines dynamically into the Gemini system prompt and sanitized user inputs to reduce the risk of prompt injection and off-catalog answers.",
      },
    ],
    links: {
      // Live demo intentionally omitted: previous value was a localhost URL.
      // Owner to supply the real public URL — see docs/CONTENT_NEEDED.md.
    },
    snapshot: {
      status: "in-development",
      role: "Solo full-stack developer",
      ownership:
        "Architecture, booking engine, admin and staff dashboards, payments, and automation, built end to end",
      industry: "Appointment-based services (spa, salon, clinic)",
      platform: "Web",
    },
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
    heroImage: "/images/adaptifit_1.png",
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
        src: "/images/adaptifit_1.png",
        alt: "Adaptifit sign-in screen on mobile",
      },
      {
        src: "/images/adaptifit_dashboard.png",
        alt: "Adaptifit sign-in screen on tablet",
        aspect: "desktop",
      },
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Node.js", "MongoDB", "OpenAI API"],
      tools: ["n8n"],
    },
    badges: ["Flutter", "Node.js", "MongoDB", "OpenAI", "n8n"],
    links: {},
    snapshot: {
      timeframe: "2026",
      status: "prototype",
      role: "Solo full-stack and AI developer",
      ownership:
        "Mobile app, backend services, and on-device ML integration, built end to end",
      industry: "Fitness and wellness",
      platform: "Mobile",
    },
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
        "Most grammar tools force users to choose between a fast, lightweight experience and stronger cloud AI. Anlingo keeps the free path lightweight while routing advanced writing work through guarded backend AI providers.",
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
      {
        src: "/images/anlingo/gallery/anlingo-landing-hero.png",
        alt: "Anlingo landing page hero — AI-generated document summary",
      },
      {
        src: "/images/anlingo/gallery/anlingo-landing-features.png",
        alt: "Anlingo landing page feature overview",
      },
      {
        src: "/images/anlingo/gallery/anlingo-landing-speaking-ad.png",
        alt: "Anlingo landing page — speaking practice feature",
      },
      {
        src: "/images/anlingo/gallery/anlingo-web-dashboard.png",
        alt: "Anlingo web dashboard home",
      },
      {
        src: "/images/anlingo/gallery/anlingo-web-progress.png",
        alt: "Anlingo web writing progress and score trend",
      },
      {
        src: "/images/anlingo/gallery/anlingo-web-vocabulary-sprint.png",
        alt: "Anlingo web weekly vocabulary leaderboard",
      },
      {
        src: "/images/anlingo/gallery/anlingo-admin-ai-operations.png",
        alt: "Anlingo admin AI operations panel",
      },
      {
        src: "/images/anlingo/gallery/anlingo-admin-subscriptions.png",
        alt: "Anlingo admin subscriptions and revenue dashboard",
      },
      {
        src: "/images/anlingo/gallery/anlingo-admin-users.png",
        alt: "Anlingo admin users table",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-home.png",
        alt: "Anlingo mobile home dashboard",
        aspect: "phone",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-pricing.png",
        alt: "Anlingo mobile pricing screen",
        aspect: "phone",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-history.png",
        alt: "Anlingo mobile writing history",
        aspect: "phone",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-writing-exercise.png",
        alt: "Anlingo mobile IELTS writing exercise",
        aspect: "phone",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-band-feedback.png",
        alt: "Anlingo mobile band score feedback",
        aspect: "phone",
      },
      {
        src: "/images/anlingo/gallery/anlingo-mobile-translate.png",
        alt: "Anlingo mobile translation exercise",
        aspect: "phone",
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
          "Kept the free experience lightweight while sending premium grammar, rewrite, translation, chat, and speech work through guarded backend routes.",
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
    snapshot: {
      timeframe: "2025 - present",
      status: "in-development",
      role: "Solo full-stack developer",
      ownership:
        "Web app, admin tooling, API, subscription billing, and Flutter companion, built end to end",
      industry: "AI writing and language learning (SaaS)",
      platform: "Web and mobile",
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
    snapshot: {
      timeframe: "2023 - present",
      status: "in-development",
      role: "Solo full-stack developer",
      ownership:
        "Multi-tenant architecture, backend, storefront, admin back-office, and deployment, built end to end",
      industry: "E-commerce (Tunisian market)",
      platform: "Web",
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
          "The public site presents an early-access waitlist with Netlify form handling, consent links, theme switching, cookie consent, and a contact modal.",
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
      // Owner confirmed live. Domain to double-check: data uses noxivo.pro,
      // founder record references noxivo.app — see docs/CONTENT_NEEDED.md.
      live: "https://noxivo.pro",
    },
    snapshot: {
      timeframe: "2025 - present",
      status: "in-development",
      role: "Solo full-stack developer",
      ownership:
        "Multi-tenant automation engine, API, and dashboard, built end to end",
      industry: "WhatsApp automation (SaaS)",
      platform: "Web",
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
      what: "A public storefront and brand presentation built for LEYEL, a modest ready-to-wear fashion label focused on simplicity, quality, and durable style.",
      problem:
        "The brand needed to communicate a modest fashion identity built around refined cuts, subtle details, durable materials, and a calmer alternative to fast fashion.",
      audience:
        "Customers looking for modest ready-to-wear pieces with a simple, premium, and value-aligned brand experience.",
    },
    features: [
      {
        title: "Brand Storytelling",
        description:
          "LEYEL is positioned as a modest fashion universe built around simplicity, refinement, quality fabrics, and durable wardrobe pieces.",
      },
      {
        title: "Collection Browsing",
        description:
          "Collection pages and product-led layouts make it easy to browse clothing and new arrivals.",
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
      frontend: ["Storefront layout", "Collection & product pages"],
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
          "WooCommerce powers the storefront, product browsing, and full e-commerce operations.",
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
          "Performance optimization, SEO-friendly structure, and mobile-responsive design were core parts of the build.",
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
          "A dedicated gallery showcases detailed handmade products, from jewelry to ceramics.",
      },
      {
        title: "Brand Navigation",
        description:
          "Navigation was built around collections, brand story, and materials so visitors can understand the concept-store positioning.",
      },
      {
        title: "Responsive Experience",
        description:
          "Built with responsive design for accessible browsing across devices.",
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
      frontend: ["Responsive website", "Product gallery"],
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
          "Product categories, detailed product pages, and a user-friendly checkout process support the full shopping flow.",
      },
      {
        title: "Marketing and SEO Tools",
        description:
          "Brevo is listed for email marketing and All in One SEO for improved search visibility.",
      },
      {
        title: "Performance Support",
        description:
          "AWS services were integrated for performance and reliability.",
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
          "Custom web development delivers a responsive and visually appealing blog experience.",
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
          "Content updates and management were made user-friendly through CMS integration.",
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
          "Dedicated pages focus on software development, cloud solutions, DevOps, and digital transformation services.",
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
      frontend: ["Responsive company website"],
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
          "Built with responsive behavior across desktops, tablets, and smartphones.",
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
          "Advanced search and filtering help shoppers narrow down products quickly.",
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
          "Operational excellence and digital innovation are presented as two connected strengths.",
      },
      {
        title: "Service Pillar Structure",
        description:
          "The site organizes the business around process optimization and digitalization services.",
      },
      {
        title: "Corporate Visual System",
        description:
          "A polished company presentation with service-focused page layouts.",
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
      frontend: ["French-language company website"],
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
      what: "A car-rental platform concept built for rentiora.com, presenting premium rental vehicles with a comfort- and trust-focused brand experience.",
      problem:
        "The product needed to present premium rental vehicles and communicate comfort, performance, and trust.",
      audience:
        "Customers comparing luxury rental vehicles by style, comfort, and use case.",
    },
    features: [
      {
        title: "Premium Vehicle Positioning",
        description:
          "The service is positioned around comfort, performance, sophistication, and trusted rentals.",
      },
      {
        title: "Vehicle Category Browsing",
        description:
          "Supported rental categories include sedans, coupes, SUVs, and convertibles.",
      },
      {
        title: "Marketing Landing Experience",
        description:
          "A polished visual landing-page treatment carries the car rental brand.",
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
      frontend: ["Marketing landing page"],
    },
    badges: ["Car Rental", "Landing Page", "Luxury"],
    links: {},
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
