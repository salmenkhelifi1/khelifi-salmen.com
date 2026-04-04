import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Rentiora - Car Rental Platform | Salmen Khelifi",
  description: "Rentiora car rental platform built by Salmen Khelifi",
};

export default function ProjectRentiora() {
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
          <div className="text-purple-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            Web Application & SaaS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Rentiora - Car Rental Platform
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            100% Trusted car rental platform. Experience the ultimate in
            comfort, performance, and sophistication with our luxury car
            rentals. From sleek sedans to spacious SUVs.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              React.js
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Node.js
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              MongoDB
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Stripe
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 w-6 h-6 mt-1" />
              <span>User authentication and authorization system</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 w-6 h-6 mt-1" />
              <span>Real-time vehicle availability and booking</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 w-6 h-6 mt-1" />
              <span>Secure payment processing with Stripe</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 w-6 h-6 mt-1" />
              <span>Admin dashboard for fleet management</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-400 w-6 h-6 mt-1" />
              <span>Responsive design for all devices</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <a
            href="https://rentiora.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full transition-colors"
          >
            Visit Website <ExternalLink className="w-5 h-5" />
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
