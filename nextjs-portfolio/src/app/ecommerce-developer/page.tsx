import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/ServicePage";
import { breadcrumbJsonLd, personId, siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "E-commerce Developer for Hire | Salmen Khelifi";
const description =
  "Hire a full-stack developer to build a custom online store, move a catalog off WordPress or WooCommerce, or fix a slow store. Next.js, Node.js, PostgreSQL, multilingual.";
const pageUrl = `${siteUrl}/ecommerce-developer`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ecommerce-developer" },
  openGraph: { title, description, url: pageUrl, type: "website", images: [socialImage] },
  twitter: { card: "summary_large_image", title, description, images: [twitterImage] },
};

const content: ServiceContent = {
  eyebrow: "E-commerce development",
  h1: "Online stores built around how you actually sell.",
  intro:
    "I am Salmen Khelifi, a full-stack developer who builds and improves online stores. One person owns the result: storefront, admin, backend API, database, integrations, testing and deployment. I start from the business problem, not from a template.",
  problems: [
    "Your store is slow, hard to change, or held together by plugins.",
    "You want to leave WordPress or WooCommerce without losing your catalog and orders.",
    "You sell in more than one language and your current setup cannot handle it cleanly.",
    "Orders, stock or customer follow-up still run through spreadsheets and manual steps.",
  ],
  builds: [
    "Custom storefronts with Next.js, React and TypeScript.",
    "An admin your team can run day to day (catalog, orders, content), for example with Payload CMS.",
    "Backend APIs and data models on Node.js, Express and PostgreSQL.",
    "Catalog migration from WordPress/WooCommerce.",
    "Multilingual stores, including right-to-left languages such as Arabic.",
    "Automation around the store: notifications, order and customer workflows.",
  ],
  proof: [
    { slug: "chaktech", name: "ChakTech", summary: "E-commerce platform built for a client: Next.js storefront, Payload CMS admin, tenant-scoped Express and PostgreSQL API, French, Arabic and English." },
    { slug: "luxe-spa", name: "Luxe", summary: "Booking and CRM platform built for a client: server-side validation, real-time staff inbox, queue-backed notifications." },
  ],
  steps: [
    "Send your store address (or the idea), what hurts today, and the result you want.",
    "I reply with the safest path: what to build first and what to leave alone.",
    "Build in small, testable increments with a working deployment early.",
    "Handover with documentation so your team can run it without me.",
  ],
  related: [
    { href: "/booking-system-developer", label: "Booking systems and CRM" },
    { href: "/saas-developer", label: "Full-stack SaaS development" },
    { href: "/n8n-automation-developer", label: "n8n automation" },
    { href: "/work", label: "All work" },
  ],
  jsonLd: [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "E-commerce Developer", url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "E-commerce development",
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      serviceType: "E-commerce development",
      areaServed: "Worldwide",
      provider: { "@id": personId },
    },
  ],
};

export default function EcommerceDeveloperPage() {
  return <ServicePage content={content} />;
}
