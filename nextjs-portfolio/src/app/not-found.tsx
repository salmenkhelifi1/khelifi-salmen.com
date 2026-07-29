import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  bookingUrl,
  siteUrl,
  socialImage,
  twitterImage,
} from "@/data/schema";

const title = "Page Not Found | Salmen Khelifi Developer Portfolio";
const description =
  "The requested portfolio page is unavailable or may have moved. Return home, browse Salmen Khelifi’s project case studies, or use the listed contact options.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteUrl}/404` },
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/404`,
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

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg-page)] px-6 py-24 text-[var(--text-primary)]">
      <section className="mx-auto max-w-2xl text-center">
        <p className="mb-6 text-caption text-[var(--accent)]">404</p>
        <h1 className="mb-6 text-h1">This page is not available.</h1>
        <p className="mb-10 text-body-large text-[var(--text-secondary)]">
          The project or page may have moved. Head back home or book a short
          call if you were looking for something specific.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="cta-button cta-primary">
            Back Home <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-button cta-secondary"
          >
            Book a 30-min call
          </a>
        </div>
      </section>
    </main>
  );
}
