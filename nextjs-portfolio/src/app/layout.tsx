import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { personAndServiceJsonLd, siteUrl } from "@/data/schema";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    template: "%s | Salmen Khelifi",
  },
  description:
    "Salmen Khelifi is a Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, and AI workflows.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, and AI workflows.",
    url: siteUrl,
    siteName: "Salmen Khelifi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, and AI workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Pre-hydration theme resolution: sets data-theme on <html> before
            first paint so there is no flash of the wrong theme. Must run
            here, synchronously, before body renders — see src/lib/theme.ts
            for the single source of truth this mirrors. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personAndServiceJsonLd),
          }}
        />
        <div className="bg-blooms" aria-hidden="true">
          <span />
        </div>
        {children}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
