import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Prototypes | Salmen Khelifi",
};

export default function ProjectStitchMobile() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#030303",
        color: "#ffffff",
        backgroundImage:
          "radial-gradient(circle at 15% 10%, rgba(139, 92, 246, 0.14), transparent 40%), radial-gradient(circle at 85% 20%, rgba(236, 72, 153, 0.12), transparent 45%)",
      }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-violet-400 font-semibold mb-4 tracking-wider text-sm uppercase">
              AI UI Design
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mobile App Prototypes
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              AI-generated mobile app interfaces designed with Google Stitch.
              These prototypes showcase modern app designs including login
              flows, dashboards, and feature-rich interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-a91fc2eb22524eefab18d5b8c8b0dea8.png"
                alt="Mobile App Screen 1"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-51193c005ab64a138260cc7d359fbc67.png"
                alt="Mobile App Screen 2"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-97acb516cbdd439bb97be241113fb29c.png"
                alt="Mobile App Screen 3"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-b837b2a09ba34e6db7132f17efda5cbf.png"
                alt="Mobile App Screen 4"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-4eec21b769e74efbba09adfcb8057f47.png"
                alt="Mobile App Screen 5"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/93982865648166192-fb1132055c5445ea9ad03d05ae7bdf55.png"
                alt="Mobile App Screen 6"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Google Stitch
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Gemini AI
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Mobile First
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              UI/UX Design
            </span>
            <a
              href="https://stitch.withgoogle.com/projects/93982865648166192"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 bg-violet-600 hover:bg-violet-500 rounded-full text-sm text-white font-medium transition-colors"
            >
              View in Stitch <ExternalLink className="inline w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
