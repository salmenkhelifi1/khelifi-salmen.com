import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import {
  siteJsonLd,
  siteUrl,
  socialImage,
  twitterImage,
} from "@/data/schema";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { ThemeProvider } from "@/components/theme/theme-provider";
import CalFloatingButton from "@/components/CalFloatingButton";
import Analytics from "@/components/Analytics";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.khelifi-salmen.com"),
  title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
  description:
    "Salmen Khelifi is a Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, SaaS platforms, and AI workflows worldwide.",
  authors: [{ name: "Salmen Khelifi", url: siteUrl }],
  creator: "Salmen Khelifi",
  publisher: "Salmen Khelifi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Salmen Khelifi is a Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, SaaS platforms, and AI workflows worldwide.",
    url: siteUrl,
    siteName: "Salmen Khelifi",
    locale: "en_US",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Salmen Khelifi is a Software Engineer & Automation Specialist building revenue-focused web apps, mobile products, SaaS platforms, and AI workflows worldwide.",
    images: [twitterImage],
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
        {/* PWA manifest + apple-touch-icon */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Pre-hydration theme resolution: sets data-theme on <html> before
            first paint so there is no flash of the wrong theme. Must run
            here, synchronously, before body renders — see src/lib/theme.ts
            for the single source of truth this mirrors. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Register service worker for PWA installability */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js')})}`,
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(siteJsonLd),
            }}
          />
          <div className="bg-blooms" aria-hidden="true">
            <span />
          </div>
          {children}
          <CalFloatingButton />
          <Analytics />
          {process.env.NODE_ENV === "development" && (
            <Script
              src="//unpkg.com/react-grab/dist/index.global.js"
              crossOrigin="anonymous"
              strategy="beforeInteractive"
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
