"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Network,
  ServerCog,
  Star,
  Workflow,
  createLucideIcon,
} from "lucide-react";
import {
  bookingUrl,
  facebookUrl,
  freelancerUrl,
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

const marqueeItems = [
  "n8n Automation",
  "Flutter",
  "React.js",
  "Node.js",
  "OpenAI API",
  "Shopify Liquid",
  "WordPress",
  "Firebase",
];

const projects = [
  {
    category: "AI SaaS Platform",
    title: "GrammarAI - Privacy-First Editor",
    description:
      "A full-stack, mobile-first grammar correction application featuring on-device AI for free users and cloud-powered premium features like Gemini, Deepgram, and ElevenLabs. Built natively for iOS, Android, and Web.",
    tags: ["Flutter", "Next.js 14", "Express.js", "Gemini API"],
    href: "/projects/grammarai",
    linkLabel: "View Project",
    image:
      "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
  },
  {
    category: "AI Writing SaaS",
    title: "Anlingo - AI Writing Assistant",
    description:
      "Privacy-first grammar and writing platform with a public landing site, web editor, Express API, billing, usage limits, and Flutter mobile companion.",
    tags: ["Next.js", "Express", "Firebase", "Flutter", "Gemini", "Stripe"],
    href: "/projects/anlingo",
    linkLabel: "View Case Study",
    image: "/images/anlingo/anlingo-03.jpg",
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
      "/images/blog-sainteagnes.png",
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
    category: "Mobile Development",
    title: "Cross-Platform Mobile Application",
    description:
      "Built a high-performance native app using Flutter. Features include real-time data sync, push notifications, and a seamless UI consistent across iOS and Android.",
    tags: ["Flutter", "Dart", "Firebase"],
    href: "/project-mobile",
    linkLabel: "View Project",
    image:
      "/images/stitch-projects/93982865648166192-a91fc2eb22524eefab18d5b8c8b0dea8.png",
  },
  {
    category: "Web Application & SaaS",
    title: "Rentiora - Car Rental Platform",
    description:
      "100% Trusted car rental platform. Experience the ultimate in comfort, performance, and sophistication with our luxury car rentals. From sleek sedans to spacious SUVs.",
    tags: ["React.js", "Node.js", "MongoDB"],
    href: "/project-rentiora",
    linkLabel: "View Project",
    target: "_blank",
    image: "/images/rentiora.png",
  },
  {
    category: "AI & Automation",
    title: "Intelligent n8n Workflow",
    description:
      "Engineered complex automation pipelines connecting OpenAI agents with CRM data. Reduced manual administrative tasks by 85% through smart logic.",
    tags: ["n8n", "OpenAI", "Webhooks"],
    href: "/project-n8n",
    linkLabel: "View Project",
    image:
      "/images/stitch-projects/5420830943902664185-c38ca9c39e9a4a138fecbfdd173f7ccb.png",
  },
  {
    category: "E-commerce & CMS",
    title: "Chaktech.tn",
    description:
      "An eCommerce website built with WordPress, designed to provide a seamless online shopping experience for a local phone store. Integrated with secure payment options and optimized for performance.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    href: "/project-chaktech",
    linkLabel: "View Project",
    image: "/images/chaktech_1.png",
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
    image:
      "/images/stitch-projects/15863999156109095280-3ed15ebb08364f629544f22ce389d1c4.png",
  },
  {
    category: "AI UI Design",
    title: "Stitch AI Prototypes",
    description:
      "AI-generated UI prototypes designed with Google Stitch and Gemini. Features include modern mobile app interfaces, landing pages, and interactive web components. Rapid design iteration using AI-powered UI generation.",
    tags: ["Google Stitch", "Gemini AI", "UI/UX Design", "Mobile First"],
    href: "/project-stitch-mobile",
    linkLabel: "View Project",
    image:
      "/images/stitch-projects/17997727846251710443-f3c2853b8b7f4691bd3875afb4621e7c.png",
  },
  {
    category: "AI Design Tools",
    title: "Extensive UI Design Collection",
    description:
      "A comprehensive collection of AI-generated UI designs including dashboard interfaces, e-commerce layouts, social media apps, and productivity tools. Created with Google Stitch using Gemini for rapid design exploration.",
    tags: ["Google Stitch", "Gemini 3", "Dashboard UI", "E-commerce"],
    href: "/project-stitch-collection",
    linkLabel: "View All Projects",
    image:
      "/images/stitch-projects/4268395796315894993-d036a12166e64ecbbf83eb3ba3195a0e.png",
  },
];

const portraitPreviewImages = new Set([
  "/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png",
  "/images/freelancer-portfolio/leyel/leyel-02.png",
  "/images/stitch-projects/93982865648166192-a91fc2eb22524eefab18d5b8c8b0dea8.png",
  "/images/stitch-projects/17997727846251710443-f3c2853b8b7f4691bd3875afb4621e7c.png",
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
      <nav className="fixed top-0 z-50 w-full nav-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Khelifi<span className="text-[var(--accent)]">.</span>
          </Link>
          <div className="hidden gap-10 text-sm font-medium text-[var(--text-secondary)] md:flex">
            <a href="#work" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              Work
            </a>
            <a href="#services" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              Services
            </a>
            <a href="#about" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              About
            </a>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--border-muted)] bg-[rgba(255,255,255,0.02)] px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--accent-dim)]"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <section className="hero-section flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
        <div className="hero-content z-10 max-w-5xl text-center">
          <div className="hero-badge reveal mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-caption text-[var(--text-secondary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1 className="hero-title reveal mb-8" style={{ transitionDelay: "100ms" }}>
            Building automated <br />
            <span className="text-gradient">digital ecosystems.</span>
          </h1>

          <p
            className="hero-subtitle reveal mx-auto mb-12 max-w-2xl text-body-large"
            style={{ transitionDelay: "200ms" }}
          >
            I am Salmen Khelifi, a Software Engineer & Automation Specialist.
            From <span className="font-medium text-[var(--text-primary)]">Web Apps & Mobile</span>{" "}
            to complex <span className="font-medium text-[var(--text-primary)]">AI Workflows</span>,
            I build systems that drive revenue.
          </p>

          <div
            className="hero-actions reveal flex flex-col items-center justify-center gap-5 md:flex-row"
            style={{ transitionDelay: "300ms" }}
          >
            <a href="#work" className="cta-button cta-primary w-full md:w-auto">
              View Case Studies
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-button cta-secondary w-full md:w-auto"
            >
              Book a 30-min call
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/40 py-6">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="section-title reveal mb-20 text-h2 md:mb-24">
            Selected Work
          </h2>

          <div className="space-y-28 md:space-y-36">
            {projects.map((project, index) => {
              const isPortraitPreview = portraitPreviewImages.has(project.image);

              return (
                <article
                  className="project-card group reveal grid items-center gap-10 md:grid-cols-2 md:gap-16"
                  key={project.title}
                >
                  <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                    <div className="mb-4 text-caption text-[var(--text-secondary)]">
                      {project.category}
                    </div>
                    <h3 className="mb-6 text-h3 md:text-[2rem] md:leading-tight">
                      {project.title}
                    </h3>
                    <p className="mb-8 text-body-large text-[var(--text-secondary)]">
                      {project.description}
                    </p>
                    <div className="mb-10 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span className="tech-badge" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.href}
                      target={project.target}
                      className="project-link inline-flex min-h-11 items-center text-lg font-bold text-[var(--text-primary)]"
                    >
                      {project.linkLabel} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>

                  <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                    <div
                      className={`image-preview relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-muted)] bg-[var(--bg-surface)] ${
                        isPortraitPreview
                          ? "mx-auto aspect-[4/5] max-w-sm"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes={
                          isPortraitPreview
                            ? "(max-width: 768px) 100vw, 384px"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </article>
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

      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="reveal mb-10 text-h2">How I Work</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="reveal">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-muted)] bg-[var(--bg-surface)] text-sm font-bold text-[var(--accent)]">
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
          <h2 className="section-title reveal mb-10 text-h2">About Me</h2>
          <p className="reveal mb-16 text-body-large text-[var(--text-secondary)] md:text-2xl md:leading-relaxed">
            With over <span className="font-medium text-[var(--text-primary)]">5 years of experience</span>, I
            bridge the gap between complex code and business goals.
            <br />
            <br />
            Whether it&apos;s a mobile app in <span className="font-medium text-[var(--text-primary)]">Flutter</span>, a
            custom <span className="font-medium text-[var(--text-primary)]">WordPress</span> plugin, or an
            autonomous <span className="font-medium text-[var(--text-primary)]">n8n</span> workflow, I build
            solutions that work.
          </p>
          <div className="about-links reveal flex justify-center gap-8">
            <a href="https://github.com/salmenkhelifi1" target="_blank" rel="noreferrer" aria-label="GitHub">
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
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-subtle)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 text-sm text-[var(--text-tertiary)] md:flex-row">
          <p>© 2026 Salmen Khelifi. All rights reserved.</p>
          <div className="mt-6 flex gap-8 md:mt-0">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
            >
              Book a 30-min call
            </a>
            <a
              href="mailto:contact@khelifi-salmen.com"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
            >
              contact@khelifi-salmen.com
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
