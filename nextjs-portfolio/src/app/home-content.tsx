"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Code2,
  Database,
  Download,
  Layers,
  LayoutDashboard,
  Menu,
  Network,
  ScanEye,
  ServerCog,
  Smartphone,
  Star,
  Workflow,
  X,
  Zap,
  createLucideIcon,
} from "lucide-react";
import {
  bookingUrl,
  facebookUrl,
  freelancerUrl,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  upworkUrl,
  xUrl,
} from "@/data/schema";
import { testimonials } from "@/data/testimonials";

const GithubIcon = createLucideIcon("Github", [
  [
    "path",
    {
      key: "github-path",
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ],
]);

const LinkedinIcon = createLucideIcon("Linkedin", [
  [
    "path",
    {
      key: "linkedin-main",
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z",
    },
  ],
  ["rect", { key: "linkedin-posts", width: "4", height: "12", x: "2", y: "9" }],
  ["circle", { key: "linkedin-dot", cx: "4", cy: "4", r: "2" }],
]);

const FacebookIcon = createLucideIcon("Facebook", [
  [
    "path",
    {
      key: "facebook-path",
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
  ],
]);

const InstagramIcon = createLucideIcon("Instagram", [
  ["rect", { key: "instagram-frame", width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
  [
    "path",
    {
      key: "instagram-lens",
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    },
  ],
  ["line", { key: "instagram-dot", x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }],
]);

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      key: "x-path",
      d: "M18.9 2h3.4l-7.4 8.5L23.6 22h-6.8l-5.3-7-6.1 7H2l7.9-9L1.6 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.6 3.9h-2L17.7 20Z",
    },
  ],
]);

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

const footerSocials = [
  { href: githubUrl, label: "GitHub" },
  { href: linkedinUrl, label: "LinkedIn" },
  { href: upworkUrl, label: "Upwork" },
  { href: freelancerUrl, label: "Freelancer" },
  { href: xUrl, label: "X" },
];

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAFAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhc+1FFFUB/9k=";

const projects = [
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

const workFilters = ["All", "SaaS & Booking", "E-commerce", "Automation & AI", "Company Sites"] as const;

const categoryToFilter: Record<string, (typeof workFilters)[number]> = {
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

const featuredHrefs = ["/projects/luxe-spa", "/projects/anlingo"];

const featuredWork = [
  {
    eyebrow: "FEATURED PLATFORM",
    title: "Luxe Spa Booking",
    href: "/projects/luxe-spa",
    image: "/images/luxe_spa_home.png",
    tags: ["SaaS", "Booking"],
    rows: [
      {
        label: "Problem",
        text: "Service businesses trade off between expensive booking SaaS with high transaction fees, or slow, costly custom software.",
      },
      {
        label: "Solution",
        text: "A white-label booking engine that swaps an entire business vertical, spa to clinic, in under 10 seconds with zero code changes.",
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
        text: "Most grammar tools force a choice between speed, privacy, and stronger AI.",
      },
      {
        label: "Solution",
        text: "Anlingo keeps the free path lightweight and private, then routes advanced writing work through guarded backend AI providers.",
      },
    ],
  },
];

const credibilityItems = [
  { icon: Code2, label: "5+ years building software" },
  { icon: Briefcase, label: "3+ years freelance delivery" },
  { icon: Star, label: "4.9/5 on Freelancer.com" },
  { icon: Layers, label: "Full-stack ownership" },
];

const ecosystemNodes = [
  { icon: Smartphone, label: "Interface", top: "10%", left: "18%" },
  { icon: LayoutDashboard, label: "Admin", top: "8%", left: "80%" },
  { icon: Database, label: "Data", top: "82%", left: "16%" },
  { icon: Zap, label: "Automation", top: "84%", left: "82%" },
];

const technicalDepth = [
  {
    icon: Database,
    title: "Zero-Downtime Migration",
    description:
      "Ran a structured self-audit on a multi-tenant platform I built, then migrated it from MongoDB to PostgreSQL live, with no data loss.",
    span: "md:col-span-2",
  },
  {
    icon: Zap,
    title: "10-Second Vertical Swap",
    description:
      "A preset-based booking engine that reconfigures an entire business vertical, spa to clinic, in under 10 seconds, no code changes.",
    span: "",
  },
  {
    icon: ScanEye,
    title: "On-Device AI",
    description:
      "Camera-based pose detection running on-device with Google ML Kit, no cloud round-trip for real-time feedback.",
    span: "",
  },
];

const portraitPreviewImages = new Set([
  "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
  "/images/freelancer-portfolio/leyel/leyel-02.png",
  "/images/adaptifit_1.png",
]);

const services = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "React, Next.js, and Flutter interfaces built for fast, polished product experiences.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Node, Express, PostgreSQL, and MongoDB systems with clean API contracts.",
  },
  {
    icon: Network,
    title: "Architecture",
    description:
      "Multi-tenant SaaS foundations, clean architecture, and maintainable feature boundaries.",
  },
  {
    icon: ServerCog,
    title: "DevOps & Infrastructure",
    description:
      "Docker, Linux/Ubuntu, CI/CD, Netlify, and Cloudflare deployment workflows.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "n8n, Make.com, and workflow engineering that removes repetitive business operations.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "OpenAI, Gemini, Vapi voice AI, and on-device ML connected to real product flows.",
  },
];

const processSteps = [
  "Discovery call",
  "Proposal & spec",
  "Build with weekly demos",
  "Launch & support",
];

export default function HomeContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] =
    useState<(typeof workFilters)[number]>("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => categoryToFilter[p.category] === activeFilter);
  const remainingProjects = filteredProjects.filter((p) => !featuredHrefs.includes(p.href));
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
        <nav className="relative w-full max-w-5xl nav-pill">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Khelifi<span className="text-[var(--accent)]">.</span>
            </Link>
            <div className="hidden gap-10 text-sm font-medium text-[var(--text-secondary)] md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] md:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          <div
            className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] glass-panel px-6 backdrop-blur-xl transition-all duration-[180ms] md:hidden ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-11 items-center border-b border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="cta-button cta-primary mt-3 w-full"
              >
                Book a call
              </a>
            </div>
          </div>
        </nav>
      </div>

      <section className="hero-section flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 mx-auto max-w-7xl w-full">
        <div className="hero-content z-10 grid w-full grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="hero-badge reveal mb-8 inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-caption text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h1 className="hero-title reveal mb-8" style={{ transitionDelay: "100ms" }}>
              I build digital products that <span className="text-gradient">automate work</span>, convert users, and scale.
            </h1>

            <p
              className="hero-subtitle reveal mb-12 max-w-2xl text-body-large"
              style={{ transitionDelay: "200ms" }}
            >
              Full-stack software engineer and automation specialist. I design and build resilient systems, from React interfaces to n8n pipelines, that scale with the business behind them.
            </p>

            <div
              className="hero-actions reveal flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
              style={{ transitionDelay: "300ms" }}
            >
              <a href="#work" className="cta-button cta-primary w-full sm:w-auto">
                View Selected Work
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-button cta-secondary w-full sm:w-auto"
              >
                Start a Project
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block reveal" style={{ transitionDelay: "400ms" }}>
            <div className="glass-panel relative w-full aspect-square rounded-[var(--radius-xl)] flex items-center justify-center overflow-hidden">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                {ecosystemNodes.map((node, i) => (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={node.left}
                    y2={node.top}
                    className="ecosystem-line"
                  />
                ))}
              </svg>
              <div className="ecosystem-hub relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-[var(--accent)]">
                <Network className="h-8 w-8" />
              </div>
              {ecosystemNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div
                    key={i}
                    className="ecosystem-node absolute z-10 flex flex-col items-center justify-center gap-1 h-16 w-16 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-[9px] font-semibold uppercase tracking-wider">{node.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="credibility-strip py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
          {credibilityItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <span className="text-caption text-[var(--text-secondary)]">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="work" className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title reveal mb-10 text-h2">
            Selected Work
          </h2>

          <div className="reveal mb-20 flex flex-wrap gap-3 md:mb-24">
            {workFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`tech-badge min-h-11 transition-colors ${
                  activeFilter === filter
                    ? "!bg-[rgba(47,128,237,0.55)] !text-[var(--text-primary)]"
                    : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mb-24 md:mb-32 space-y-20 md:space-y-32">
            {featuredWork.map((item, index) => (
              <article
                className="project-card group reveal grid items-center gap-10 md:grid-cols-12 md:gap-16"
                key={item.title}
              >
                <div className={`md:col-span-5 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="mb-4 text-caption text-[var(--text-secondary)]">
                    {item.eyebrow}
                  </div>
                  <h2 className="mb-6 text-h2">
                    {item.title}
                  </h2>
                  <div className="mb-8 flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span className="tech-badge" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-10 space-y-6">
                    {item.rows.map((row) => (
                      <div key={row.label}>
                        <div className="mb-1 text-sm font-semibold text-[var(--text-secondary)] opacity-80 uppercase tracking-wider">
                          {row.label}
                        </div>
                        <p className="text-body-regular text-[var(--text-primary)]">
                          {row.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="project-link inline-flex min-h-11 items-center text-lg font-bold text-[var(--text-primary)]"
                  >
                    View Case Study <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={`md:col-span-7 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="image-preview relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-muted)] bg-[var(--bg-surface)] aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={`${item.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-top"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingProjects.map((project) => {
              const isPortraitPreview = portraitPreviewImages.has(project.image);

              return (
                <article className="project-card group reveal flex flex-col" key={project.title}>
                  <div
                    className={`image-preview relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-muted)] bg-[var(--bg-surface)] mb-6 ${
                      isPortraitPreview ? "aspect-[4/5] mx-auto w-full max-w-sm" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes={
                        isPortraitPreview
                          ? "(max-width: 768px) 100vw, 384px"
                          : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                      className="object-cover object-top"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                  </div>
                  <div className="mb-2 text-caption text-[var(--text-secondary)]">
                    {project.category}
                  </div>
                  <h3 className="mb-4 text-h3 flex-grow">
                    {project.title}
                  </h3>
                  <Link
                    href={project.href}
                    className="project-link inline-flex min-h-11 items-center font-bold text-[var(--text-primary)]"
                  >
                    {project.linkLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title reveal mb-16 text-center text-h2">
            Technical Depth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalDepth.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className={`modern-card reveal rounded-[var(--radius-xl)] p-8 md:p-10 flex flex-col ${item.span}`}
                  key={item.title}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon mb-8 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)]">
                    <Icon className="h-7 w-7 text-[var(--text-secondary)]" />
                  </div>
                  <h3 className="mb-4 text-h3">{item.title}</h3>
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title reveal mb-20 text-center text-h2 md:mb-24">
            My Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  className="service-card modern-card reveal rounded-[var(--radius-xl)] p-8 md:p-10"
                  key={service.title}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon mb-8 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)]">
                    <Icon className="h-7 w-7 text-[var(--text-secondary)]" />
                  </div>
                  <h3 className="mb-4 text-h3">{service.title}</h3>
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="feedback" className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <h2 className="section-title reveal text-h2">Client Feedback</h2>
            <a
              href={freelancerUrl}
              target="_blank"
              rel="noreferrer"
              className="reveal inline-flex min-h-11 items-center text-body-regular font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              4.9 / 5 across 8 reviews on Freelancer.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={`${item.author}-${item.projectTitle}`}
                className="modern-card reveal rounded-[var(--radius-xl)] p-8"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-6 flex items-center gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-[var(--text-secondary)]">
                    {item.rating.toFixed(1)}
                  </span>
                </div>
                <blockquote className="mb-8 text-body-regular text-[var(--text-primary)]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {item.author}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.projectTitle}
                  </p>
                  <span className="mt-5 inline-flex rounded-full border border-[var(--border-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-tertiary)]">
                    via Freelancer.com
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="reveal mb-10 text-h2">How I Work</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="reveal">
                <div className="service-icon mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[var(--accent)]">
                  {index + 1}
                </div>
                <h3 className="text-h3">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[var(--border-subtle)] py-32 md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="glass-panel reveal relative mx-auto mb-10 h-32 w-32 overflow-hidden !rounded-full md:h-40 md:w-40">
            <Image
              src="/images/salmen-khelifi-full-stack-developer-portrait.jpg"
              alt="Salmen Khelifi, Full-Stack Developer & Automation Specialist"
              fill
              sizes="160px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              priority={false}
            />
          </div>
          <h2 className="section-title reveal mb-10 text-h2">About Me</h2>
          <p className="reveal mb-16 text-body-large text-[var(--text-secondary)] md:text-2xl md:leading-relaxed">
            With <span className="font-medium text-[var(--text-primary)]">5+ years of experience</span>, I
            bridge the gap between complex code and business goals.
            <br />
            <br />
            Whether it&apos;s a mobile app in <span className="font-medium text-[var(--text-primary)]">Flutter</span>, a
            custom <span className="font-medium text-[var(--text-primary)]">WordPress</span> plugin, or an
            autonomous <span className="font-medium text-[var(--text-primary)]">n8n</span> workflow, I build
            solutions that work.
          </p>
          <div className="about-links reveal flex flex-wrap justify-center gap-4">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon className="h-8 w-8" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon className="h-8 w-8" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon className="h-8 w-8" />
            </a>
            <a href={xUrl} target="_blank" rel="noreferrer" aria-label="X">
              <XIcon className="h-8 w-8" />
            </a>
            <a
              href={freelancerUrl}
              target="_blank"
              rel="noreferrer"
              className="freelancer-link"
            >
              Freelancer.com
            </a>
            <a
              href={upworkUrl}
              target="_blank"
              rel="noreferrer"
              className="freelancer-link"
            >
              Upwork
            </a>
            <Link
              href="/resume"
              className="freelancer-link gap-2"
            >
              View résumé
            </Link>
            <a
              href="/salmen-khelifi-cv.pdf"
              download
              className="freelancer-link gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-subtle)] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-sm text-[var(--text-secondary)] md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Khelifi<span className="text-[var(--accent)]">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-body-regular text-[var(--text-secondary)]">
              Full-stack, mobile, and automation systems built for revenue-focused launches.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-caption text-[var(--text-tertiary)]">Quick Links</h2>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
              >
                Book a call
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-caption text-[var(--text-tertiary)]">Socials</h2>
            <div className="grid gap-2">
              {footerSocials.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[var(--border-subtle)] px-6 pt-8 text-sm text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Salmen Khelifi. All rights reserved.</p>
          <a
            href="mailto:contact@khelifi-salmen.com"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
          >
            contact@khelifi-salmen.com
          </a>
        </div>
      </footer>
    </>
  );
}
