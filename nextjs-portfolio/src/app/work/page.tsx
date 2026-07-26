import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";
import { siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "Software & Automation Project Portfolio | Salmen Khelifi";
const description =
  "Explore full-stack web platforms, mobile applications, SaaS systems, e-commerce products, and automated workflows built by Salmen Khelifi in case studies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/work`,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [twitterImage],
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
