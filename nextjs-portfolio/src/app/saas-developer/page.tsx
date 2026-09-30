import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/ServicePage";
import { breadcrumbJsonLd, personId, siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "Full-Stack SaaS Developer for Hire | Salmen Khelifi";
const description =
  "Hire a full-stack developer to build a SaaS product, web app or e-commerce platform, or improve an existing one. Next.js, Node.js, PostgreSQL, database to interface.";
const pageUrl = `${siteUrl}/saas-developer`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/saas-developer" },
  openGraph: { title, description, url: pageUrl, type: "website", images: [socialImage] },
  twitter: { card: "summary_large_image", title, description, images: [twitterImage] },
};

const content: ServiceContent = {
  eyebrow: "Full-stack & SaaS development",
  h1: "Full-stack SaaS development, from database to interface.",
  intro:
    "I am Salmen Khelifi, a full-stack developer who builds SaaS products, web applications and e-commerce platforms, and improves products that already exist. One person owns the result: architecture, frontend, backend APIs, database, integrations, testing and deployment.",
  problems: [
    "You have an idea or a validated need and want a working first version, not a slide deck.",
    "Your current product is slow, fragile or hard to extend and needs someone to fix and grow it safely.",
    "Your booking, ordering or admin workflow lives in spreadsheets, plugins or manual steps.",
    "You need one developer who can cover frontend, backend and database instead of coordinating three.",
  ],
  builds: [
    "SaaS products and internal tools with Next.js, React, TypeScript and Node.js.",
    "APIs and data models on PostgreSQL, with authentication and role-based access.",
    "Real-time features and background jobs (Socket.io, Redis, BullMQ).",
    "E-commerce and platform work, including moving catalogs off WordPress/WooCommerce.",
    "Improvements to an existing codebase: performance, reliability, new features.",
  ],
  proof: [
    { slug: "luxe-spa", name: "Luxe", summary: "White-label booking and CRM platform: specialist-aware scheduling, server-side booking validation, real-time staff inbox, queue-backed notifications." },
    { slug: "anlingo", name: "Anlingo", summary: "Privacy-first AI writing assistant: web editor, Express API with multi-provider AI routing, billing and a Flutter companion app." },
    { slug: "chaktech", name: "ChakTech", summary: "Client e-commerce platform: Next.js storefront, Payload CMS admin, tenant-scoped Express and PostgreSQL API, French, Arabic and English." },
    { slug: "noxivo", name: "Noxivo (in development)", summary: "Multi-tenant WhatsApp operations platform for agencies with tenant-scoped inbox and workflow engine." },
  ],
  steps: [
    "Send the problem, your current stack (if any) and the outcome you want.",
    "I reply with the safest path: scope, risks, what to build first.",
    "Build in small, testable increments with a working deployment early.",
    "Handover with documentation so the product is maintainable without me.",
  ],
  related: [
    { href: "/api-integration-developer", label: "API & integration development" },
    { href: "/n8n-automation-developer", label: "n8n automation" },
    { href: "/work", label: "All work" },
  ],
  jsonLd: [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Full-Stack SaaS Developer", url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Full-stack and SaaS development",
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      serviceType: "Full-stack and SaaS development",
      areaServed: "Worldwide",
      provider: { "@id": personId },
    },
  ],
};

export default function SaasDeveloperPage() {
  return <ServicePage content={content} />;
}
