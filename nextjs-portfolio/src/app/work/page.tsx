import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Software & Automation Portfolio | Salmen Khelifi",
  description:
    "Explore full-stack web platforms, mobile applications, SaaS systems, and automated workflows built by Salmen Khelifi.",
  alternates: {
    canonical: "/work",
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
