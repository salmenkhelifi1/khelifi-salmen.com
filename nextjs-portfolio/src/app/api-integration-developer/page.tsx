import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/ServicePage";
import { breadcrumbJsonLd, personId, siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "API Integration & Backend Developer | Salmen Khelifi";
const description =
  "Hire a backend developer for API development and third-party integrations: Node.js, Express, FastAPI, PostgreSQL, webhooks, queues, billing and messaging APIs.";
const pageUrl = `${siteUrl}/api-integration-developer`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/api-integration-developer" },
  openGraph: { title, description, url: pageUrl, type: "website", images: [socialImage] },
  twitter: { card: "summary_large_image", title, description, images: [twitterImage] },
};

const content: ServiceContent = {
  eyebrow: "Backend, APIs & integrations",
  h1: "API development and integrations that connect your systems reliably.",
  intro:
    "I am Salmen Khelifi, a full-stack developer with a backend and API focus. I design and build REST APIs, connect third-party services, and make sure the data behind them stays consistent when things fail.",
  problems: [
    "Two systems need to talk to each other and nobody owns the glue code.",
    "Webhooks, payments or messages arrive twice, late or not at all.",
    "An existing API is slow, undocumented or hard to change without breaking clients.",
    "You need AI providers, billing or messaging behind one clean backend.",
  ],
  builds: [
    "REST APIs with Node.js, Express, Fastify, TypeScript and FastAPI.",
    "Data models and transactions on PostgreSQL; MongoDB and Redis where they fit.",
    "Webhooks, background jobs and retries with Redis and BullMQ.",
    "Authentication, role-based access and tenant-scoped data.",
    "Third-party integrations: billing, messaging, AI model providers, automation with n8n.",
  ],
  proof: [
    { slug: "anlingo", name: "Anlingo", summary: "Express API behind a web editor and Flutter app: multi-provider AI model routing, billing, usage limits and admin controls." },
    { slug: "luxe-spa", name: "Luxe", summary: "Booking backend with server-side validation using PostgreSQL transactions, a real-time inbox and queue-backed notifications." },
    { slug: "chaktech", name: "ChakTech", summary: "Tenant-scoped Express and PostgreSQL API with hostname-resolved tenants and role-based access." },
    { slug: "ai-workflow-automation", name: "AI workflow automation", summary: "n8n hub turning Gmail, SMS and WhatsApp inputs into structured tasks with OpenAI; cut manual admin work by 85%." },
  ],
  steps: [
    "Send the systems involved, what breaks today and the outcome you want.",
    "I map the data flow and failure cases, then propose the smallest safe design.",
    "Build with tests around the risky parts, logging and retries.",
    "Deliver with documentation and a handover walkthrough.",
  ],
  related: [
    { href: "/saas-developer", label: "Full-stack & SaaS development" },
    { href: "/n8n-automation-developer", label: "n8n automation" },
    { href: "/work", label: "All work" },
  ],
  jsonLd: [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "API Integration Developer", url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "API development and integration",
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      serviceType: "API development and integration",
      areaServed: "Worldwide",
      provider: { "@id": personId },
    },
  ],
};

export default function ApiIntegrationDeveloperPage() {
  return <ServicePage content={content} />;
}
