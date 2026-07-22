import {
  Briefcase,
  Code2,
  Database,
  Layers,
  LayoutDashboard,
  LucideIcon,
  Network,
  ScanEye,
  Smartphone,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import {
  freelancerUrl,
  githubUrl,
  linkedinUrl,
  upworkUrl,
  xUrl,
} from "@/data/schema";

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterSocial {
  href: string;
  label: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkLabel: string;
  image: string;
}

export type WorkFilter =
  | "All"
  | "SaaS & Booking"
  | "E-commerce"
  | "Automation & AI"
  | "Company Sites";

export interface FeaturedWorkRow {
  label: string;
  text: string;
}

export interface FeaturedWorkItem {
  eyebrow: string;
  title: string;
  href: string;
  image: string;
  tags: string[];
  rows: FeaturedWorkRow[];
}

export interface CredibilityItem {
  icon: LucideIcon;
  label: string;
}

export interface EcosystemNodeItem {
  icon: LucideIcon;
  label: string;
  top: string;
  left: string;
}

export interface TechnicalDepthItem {
  icon: LucideIcon;
  title: string;
  challenge: string;
  risk: string;
  decision: string;
  verification: string;
  projectLabel: string;
  href: string;
  description?: string;
  span?: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAFAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhc+1FFFUB/9k=";

export interface ProcessStep {
  number: string;
  title: string;
  concern: string;
  activity: string;
  deliverable: string;
}

export const capabilityMarkers = [
  "Product Engineering",
  "Automation & Integrations",
  "High-Performance Experiences",
] as const;

// Absolute home anchors so nav works from every route (/work, /resume, /projects/*),
// plus real route links (résumé) for the recruiter path.
export const navLinks: NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/#contact", label: "Contact" },
];

export const footerSocials: FooterSocial[] = [
  { href: githubUrl, label: "GitHub" },
  { href: linkedinUrl, label: "LinkedIn" },
  { href: upworkUrl, label: "Upwork" },
  { href: freelancerUrl, label: "Freelancer" },
  { href: xUrl, label: "X" },
];

export const projects: Project[] = [
  {
    category: "SaaS & Booking Platform",
    title: "White-Label Booking System",
    description:
      "A comprehensive white-label booking, CRM, and management system designed for appointment-based service businesses (spas, salons, clinics) with dynamic preset-based branding, real-time messaging, and an AI concierge.",
    tags: ["Next.js 16", "Express.js", "PostgreSQL", "Socket.io", "Gemini API"],
    href: "/projects/luxe-spa",
    linkLabel: "View Case Study",
    image: "/images/luxe_spa_home.png",
  },
  {
    category: "AI Writing SaaS",
    title: "Anlingo - AI Writing Assistant",
    description:
      "Privacy-first grammar and writing platform with a public landing site, web editor, Express API, billing, usage limits, and Flutter mobile companion.",
    tags: ["Next.js", "Express", "Firebase", "Flutter", "Gemini", "Stripe"],
    href: "/projects/anlingo",
    linkLabel: "View Case Study",
    image: "/images/anlingo/gallery/anlingo-web-dashboard.png",
  },
  {
    category: "WhatsApp Automation SaaS",
    title: "Noxivo - Agency Automation Platform",
    description:
      "WhatsApp-first automation SaaS with a public waitlist, protected agency dashboard, developer docs, multi-tenant workspaces, and a Fastify workflow engine.",
    tags: ["Next.js 15", "Fastify", "MongoDB", "Redis", "Docusaurus"],
    href: "/projects/noxivo",
    linkLabel: "View Case Study",
    image: "/images/noxivo/noxivo-01.png",
  },
  {
    category: "Fashion E-commerce",
    title: "LEYEL Modest Fashion",
    description:
      "Modest ready-to-wear storefront and brand presentation built around simplicity, refined product imagery, and collection browsing.",
    tags: ["Fashion", "E-commerce", "Brand Site"],
    href: "/projects/leyel",
    linkLabel: "View Case Study",
    image: "/images/freelancer-portfolio/leyel/leyel-02.png",
  },
  {
    category: "AI & Automation",
    title: "AI-Powered Workflow Automation",
    description:
      "n8n automation hub connecting Gmail, Google APIs, OpenAI, Google Sheets, Google Voice, and WhatsApp inputs into structured tasks.",
    tags: ["n8n", "OpenAI", "Google APIs", "Automation"],
    href: "/projects/ai-workflow-automation",
    linkLabel: "View Case Study",
    image:
      "/images/freelancer-portfolio/ai-workflow-automation/ai-workflow-automation-01.png",
  },
  {
    category: "E-commerce Website",
    title: "HTI.tn Electronic E-commerce",
    description:
      "WordPress and WooCommerce electronics storefront with custom UI enhancements, payment setup, SEO structure, and performance work.",
    tags: ["WordPress", "WooCommerce", "SEO", "Payments"],
    href: "/projects/hti-ecommerce",
    linkLabel: "View Case Study",
    image: "/images/HTI.png",
  },
  {
    category: "E-commerce Website",
    title: "Chab-ka Concept Store",
    description:
      "Concept-store website for handcrafted artisanal products with product showcase, responsive browsing, and SEO-friendly presentation.",
    tags: ["Concept Store", "Responsive", "SEO"],
    href: "/projects/chab-ka",
    linkLabel: "View Case Study",
    image: "/images/chab-ka.png",
  },
  {
    category: "Fashion E-commerce",
    title: "Velyssa Fashion E-commerce",
    description:
      "WordPress and WooCommerce fashion storefront with product categories, checkout, AWS services, Brevo, and All in One SEO.",
    tags: ["WordPress", "WooCommerce", "AWS", "Brevo", "SEO"],
    href: "/projects/velyssa",
    linkLabel: "View Case Study",
    image: "/images/Velyssa.png",
  },
  {
    category: "Blog Platform",
    title: "blog-sainteagnes.fr",
    description:
      "Modern blog platform with responsive design, SEO optimization, performance and security work, and CMS-friendly content management.",
    tags: ["Blog", "CMS", "SEO", "Performance"],
    href: "/projects/sainteagnes-blog",
    linkLabel: "View Case Study",
    image:
      "/images/freelancer-portfolio/sainteagnes-blog/sainteagnes-blog-02.png",
  },
  {
    category: "Company Website",
    title: "DigiTrends.dev",
    description:
      "Responsive IT company website for software development, cloud solutions, DevOps, and digital transformation positioning.",
    tags: ["Company Website", "SEO", "Performance"],
    href: "/projects/digitrends-dev",
    linkLabel: "View Case Study",
    image: "/images/digitrends.png",
  },
  {
    category: "E-commerce Website",
    title: "Electronic E-Commerce Website",
    description:
      "WordPress electronics store using the Proto theme, responsive layouts, product listings, search, filtering, and reviews.",
    tags: ["WordPress", "Proto Theme", "E-commerce"],
    href: "/projects/electronic-ecommerce",
    linkLabel: "View Case Study",
    image:
      "/images/freelancer-portfolio/electronic-ecommerce/electronic-ecommerce-01.png",
  },
  {
    category: "Company Website",
    title: "digitrends.pro",
    description:
      "French-language business website presenting operational excellence and digital innovation as connected transformation services.",
    tags: ["Company Website", "French", "Digital Transformation"],
    href: "/projects/digitrends-pro",
    linkLabel: "View Case Study",
    image: "/images/freelancer-portfolio/digitrends-pro/digitrends-pro-01.png",
  },
  {
    category: "Car Rental Platform",
    title: "rentiora.com",
    description:
      "Car-rental platform concept for presenting premium vehicles including sedans, coupes, SUVs, and convertibles.",
    tags: ["Car Rental", "Landing Page", "Luxury"],
    href: "/projects/rentiora",
    linkLabel: "View Case Study",
    image: "/images/rentiora.png",
  },
  {
    category: "E-commerce Platform",
    title: "ChakTech Platform",
    description:
      "Production e-commerce platform for the Tunisian market: multi-tenant storefront, Payload CMS admin, custom Express API, COD checkout, and FR/AR RTL.",
    tags: ["Next.js 16", "Payload CMS", "Express", "PostgreSQL", "Typesense"],
    href: "/projects/chaktech",
    linkLabel: "View Case Study",
    image: "/images/chaktech/chaktech-admin-dashboard-live.png",
  },
  {
    category: "AI Mobile App",
    title: "Adaptifit - AI Fitness Coach",
    description:
      "AI-powered fitness and nutrition app with personalized workout plans, meal tracking, progress analytics, and an AI coach chat. Full-stack mobile + backend solution.",
    tags: ["Flutter", "Node.js", "MongoDB", "OpenAI", "n8n"],
    href: "/projects/adaptifit",
    linkLabel: "View Project",
    image: "/images/adaptifit_1.png",
  },
];

export const workFilters: readonly WorkFilter[] = [
  "All",
  "SaaS & Booking",
  "E-commerce",
  "Automation & AI",
  "Company Sites",
] as const;

export const categoryToFilter: Record<string, WorkFilter> = {
  "SaaS & Booking Platform": "SaaS & Booking",
  "AI Writing SaaS": "SaaS & Booking",
  "WhatsApp Automation SaaS": "SaaS & Booking",
  "Fashion E-commerce": "E-commerce",
  "E-commerce Website": "E-commerce",
  "E-commerce Platform": "E-commerce",
  "AI & Automation": "Automation & AI",
  "AI Mobile App": "Automation & AI",
  "Blog Platform": "Company Sites",
  "Company Website": "Company Sites",
  "Car Rental Platform": "Company Sites",
};

export const featuredHrefs: string[] = [
  "/projects/luxe-spa",
  "/projects/anlingo",
];

// The homepage shows at most four projects: the two featured above plus these
// two compact ones (an automation platform + a specialist e-commerce platform).
// The full archive lives at /work. Order here is the render order.
export const homepageCompactHrefs: string[] = [
  "/projects/noxivo",
  "/projects/chaktech",
];

export const featuredWork: FeaturedWorkItem[] = [
  {
    eyebrow: "FEATURED PLATFORM",
    title: "Luxe Spa Booking",
    href: "/projects/luxe-spa",
    image: "/images/luxe_spa_home.png",
    tags: ["SaaS", "Booking"],
    rows: [
      {
        label: "Problem",
        text: "Appointment businesses get squeezed between expensive booking SaaS with per-transaction fees and slow one-off custom builds that are hard to change.",
      },
      {
        label: "What I built",
        text: "A white-label booking and CRM platform where one preset reconfigures the whole product for a new vertical, spa to clinic, in under 10 seconds with no code changes.",
      },
      {
        label: "My role",
        text: "Solo across architecture, booking engine, staff dashboards, payments, and the automation pipeline, end to end.",
      },
    ],
  },
  {
    eyebrow: "AI WRITING SAAS",
    title: "Anlingo",
    href: "/projects/anlingo",
    image: "/images/anlingo/gallery/anlingo-web-dashboard.png",
    tags: ["AI", "SaaS"],
    rows: [
      {
        label: "Problem",
        text: "Grammar tools force a trade-off between a fast, lightweight experience and access to stronger, more expensive AI.",
      },
      {
        label: "What I built",
        text: "A writing platform that keeps the free path lightweight, then routes advanced work through guarded backend AI providers with usage limits and fallbacks.",
      },
      {
        label: "My role",
        text: "Solo across the web app, admin tooling, API, subscription billing, and the Flutter companion, end to end.",
      },
    ],
  },
];

export const credibilityItems: CredibilityItem[] = [
  { icon: Code2, label: "5+ years building software" },
  { icon: Briefcase, label: "3+ years freelance delivery" },
  { icon: Star, label: "4.9/5 on Freelancer.com" },
  { icon: Layers, label: "Full-stack ownership" },
];

export const ecosystemNodes: EcosystemNodeItem[] = [
  { icon: Smartphone, label: "Interface", top: "10%", left: "18%" },
  { icon: LayoutDashboard, label: "Admin", top: "8%", left: "80%" },
  { icon: Database, label: "Data", top: "82%", left: "16%" },
  { icon: Zap, label: "Automation", top: "84%", left: "82%" },
];

export const technicalDepth: TechnicalDepthItem[] = [
  {
    icon: Database,
    title: "Zero-Downtime Database Migration",
    challenge: "Live migration from MongoDB to PostgreSQL on a multi-tenant commerce platform.",
    risk: "Potential data loss, schema corruption, or ordering downtime during live migration.",
    decision: "Ran a 54-finding self-audit before the migration, then moved the data layer live.",
    verification: "Completed the live migration with no data loss.",
    projectLabel: "ChakTech Platform",
    href: "/projects/chaktech",
  },
  {
    icon: Zap,
    title: "10-Second Vertical Preset Swap",
    challenge: "Instant product re-configuration across distinct service verticals (spa to clinic).",
    risk: "Maintaining custom code forks per business vertical slows releases and increases drift.",
    decision: "Architected a Zod-validated JSON preset schema to reconfigure categories, terms, and rules on seed.",
    verification: "Reconfigured an entire vertical setup in under 10 seconds with zero code changes.",
    projectLabel: "Luxe Spa Booking",
    href: "/projects/luxe-spa",
  },
  {
    icon: ScanEye,
    title: "On-Device AI Pose Detection",
    challenge: "Real-time mobile motion estimation for workout tracking.",
    risk: "Cloud video streaming adds network latency, bandwidth cost, and privacy exposure.",
    decision: "Implemented camera-based pose estimation directly on-device using Google ML Kit.",
    verification: "Executed real-time motion feedback locally with no cloud round-trips or video egress.",
    projectLabel: "Adaptifit",
    href: "/projects/adaptifit",
  },
  {
    icon: Network,
    title: "Guarded AI Routing & Rate Limits",
    challenge: "Multi-surface writing product (web, admin, Flutter mobile) consuming LLM APIs.",
    risk: "Unbounded API costs, rate-limit failures, and latency spikes during request surges.",
    decision: "Built a guarded Express backend with Redis usage tracking, tier limits, and provider fallbacks.",
    verification: "Rate limits, usage tracking, and provider fallbacks bound API cost and keep the service responsive across web and Flutter.",
    projectLabel: "Anlingo",
    href: "/projects/anlingo",
  },
];

export const portraitPreviewImages: Set<string> = new Set([
  "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
  "/images/freelancer-portfolio/leyel/leyel-02.png",
  "/images/adaptifit_1.png",
]);

// Three focused service areas, dominant one first. Reduced from six generic
// categories so positioning reads as focused, not scattered.
export const services: ServiceItem[] = [
  {
    icon: Network,
    title: "Product Engineering",
    description:
      "Full-stack SaaS products and multi-tenant platforms, built end to end: architecture, authentication, payments, databases, dashboards, and mobile and web delivery. React, Next.js, Flutter, Node, Express, PostgreSQL.",
  },
  {
    icon: Workflow,
    title: "Automation & Integrations",
    description:
      "n8n and AI-assisted workflows that remove repetitive operations, connected to CRMs, messaging, notifications, data sync, and third-party APIs, with reliable monitoring.",
  },
  {
    icon: Zap,
    title: "High-Performance Web Experiences",
    description:
      "Conversion-focused, accessible, SEO-ready websites and storefronts with strong performance and clear interaction design.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    concern: "Will you understand the real problem?",
    activity: "Clarify users, workflows, business constraints, and success criteria.",
    deliverable: "A focused product brief and prioritized scope.",
  },
  {
    number: "02",
    title: "Architect",
    concern: "Will the system stay reliable as it grows?",
    activity: "Define data, services, integrations, security, and operational risks.",
    deliverable: "A practical architecture and delivery plan.",
  },
  {
    number: "03",
    title: "Build",
    concern: "Will I see progress and get working software?",
    activity: "Implement in reviewable stages with regular validation.",
    deliverable: "Tested increments and visible progress.",
  },
  {
    number: "04",
    title: "Launch and Improve",
    concern: "Will it stay stable after release?",
    activity: "Validate production behavior, monitor risks, and improve from real use.",
    deliverable: "A launch checklist, production verification, and an improvement backlog.",
  },
];
