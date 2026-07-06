import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { personAndServiceJsonLd, siteUrl } from "@/data/schema";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="min-h-full antialiased selection:bg-white selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personAndServiceJsonLd),
          }}
        />
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
