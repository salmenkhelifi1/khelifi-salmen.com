import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";
import { siteUrl } from "@/data/schema";

const title = "Work — Software & Automation Portfolio";
const description =
  "Explore full-stack web platforms, mobile applications, SaaS systems, and automated workflows built by Salmen Khelifi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/work`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        alt: "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        alt: "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <SiteHeader />
      <main className="pt-28 pb-20">
        <WorkGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
