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
    "Salmen Khelifi is a full-stack, mobile, DevOps, automation, and AI integration freelancer building revenue-focused software systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Full-stack, mobile, DevOps, automation, and AI integration freelancer with 5+ years of delivery experience.",
    url: siteUrl,
    siteName: "Salmen Khelifi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/khelifi_salmen.png",
        width: 1200,
        height: 630,
        alt: "Salmen Khelifi portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salmen Khelifi | Full-Stack, Mobile & Automation Specialist",
    description:
      "Full-stack, mobile, DevOps, automation, and AI integration freelancer with 5+ years of delivery experience.",
    images: ["/images/khelifi_salmen.png"],
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
