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
          "A French admin surface for catalog, orders, customers, analytics, CSV import/export, role-based access, and tenant-aware collection rules.",
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
        alt: "ChakTech admin back-office",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
