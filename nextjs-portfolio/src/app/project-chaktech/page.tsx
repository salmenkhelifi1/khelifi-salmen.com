import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Chaktech.tn - E-commerce | Salmen Khelifi",
  description: "Chaktech.tn e-commerce website built by Salmen Khelifi",
};

export default function ProjectChaktech() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Khelifi<span className="text-blue-500">.</span>
          </Link>
          <Link
            href="/#work"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Work
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-green-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            CMS & E-commerce
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Chaktech.tn</h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            An eCommerce website built with WordPress, designed to provide a
            seamless online shopping experience for a local phone store.
            Integrated with secure payment options and optimized for
            performance.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              WordPress
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              WooCommerce
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              PHP
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Store Features</h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
              <span>Product catalog with categories and filters</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
              <span>Secure payment gateway integration</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
              <span>Inventory management system</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
              <span>Mobile-responsive design</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-400 w-6 h-6 mt-1" />
              <span>SEO optimization for local search</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <a
            href="https://chaktech.tn/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full transition-colors"
          >
            Visit Store <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 Salmen Khelifi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
