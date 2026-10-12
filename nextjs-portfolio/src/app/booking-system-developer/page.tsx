import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/ServicePage";
import { breadcrumbJsonLd, personId, siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "Booking System & CRM Developer for Hire | Salmen Khelifi";
const description =
  "Hire a full-stack developer to build an online booking system and CRM for a salon, clinic or studio. Specialist-aware scheduling, double-booking protection, staff inbox.";
const pageUrl = `${siteUrl}/booking-system-developer`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/booking-system-developer" },
  openGraph: { title, description, url: pageUrl, type: "website", images: [socialImage] },
  twitter: { card: "summary_large_image", title, description, images: [twitterImage] },
};

const content: ServiceContent = {
  eyebrow: "Booking systems & CRM",
  h1: "Online booking that cannot double-book your team.",
  intro:
    "I am Salmen Khelifi, a full-stack developer who builds booking and CRM platforms for service businesses such as salons, clinics and studios. The browser asks for a slot, the server decides: every booking is validated against your real rules before anything is saved.",
  problems: [
    "Clients book by phone or message, and your calendar is always out of date.",
    "Two people end up booked with the same specialist at the same time.",
    "Durations, buffers, opening hours and staff skills are not reflected in your current booking tool.",
    "Reminders and confirmations are manual, and you lose time to no-shows and follow-ups.",
  ],
  builds: [
    "Specialist-aware scheduling: services, durations, staff, locations, hours and buffers.",
    "Server-side booking validation to prevent double bookings.",
    "A real-time staff inbox so your team sees new requests as they arrive.",
    "Queue-backed notifications that keep working when a provider is slow.",
    "A customer booking flow that works on a phone, in the languages you need.",
    "An admin and basic CRM for clients, services and staff.",
  ],
  proof: [
    { slug: "luxe-spa", name: "Luxe", summary: "White-label booking and CRM platform built for a client: specialist-aware scheduling, server-side booking validation, real-time staff inbox, queue-backed notifications." },
    { slug: "chaktech", name: "ChakTech", summary: "E-commerce platform built for a client: Next.js storefront, Payload CMS admin, tenant-scoped Express and PostgreSQL API." },
  ],
  steps: [
    "Tell me how bookings work today, who does what, and where it breaks.",
    "I reply with a small first version and the rules it must enforce.",
    "Build in small, testable increments, with a working version early.",
    "Handover with documentation, so your team can run it without me.",
  ],
  related: [
    { href: "/ecommerce-developer", label: "E-commerce development" },
    { href: "/saas-developer", label: "Full-stack SaaS development" },
    { href: "/n8n-automation-developer", label: "n8n automation" },
    { href: "/work", label: "All work" },
  ],
  jsonLd: [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Booking System Developer", url: pageUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Booking system and CRM development",
      description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      serviceType: "Booking system and CRM development",
      areaServed: "Worldwide",
      provider: { "@id": personId },
    },
  ],
};

export default function BookingSystemDeveloperPage() {
  return <ServicePage content={content} />;
}
