import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "UI Design Collection | Salmen Khelifi",
};

export default function ProjectStitchCollection() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#030303",
        color: "#ffffff",
        backgroundImage:
          "radial-gradient(circle at 15% 10%, rgba(236, 72, 153, 0.14), transparent 40%), radial-gradient(circle at 85% 20%, rgba(139, 92, 246, 0.12), transparent 45%)",
      }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-xl hover:text-pink-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="text-pink-400 font-semibold mb-4 tracking-wider text-sm uppercase">
              AI Design Tools
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Extensive UI Design Collection
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              A comprehensive collection of AI-generated UI designs including
              dashboards, e-commerce layouts, social media apps, and
              productivity tools. Created with Google Stitch using Gemini for
              rapid design exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-29c6ed986012413dafb0497c88d668ca.png"
                alt="Dashboard UI"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-d036a12166e64ecbbf83eb3ba3195a0e.png"
                alt="E-commerce"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-47b738acf8b649cfb4970e18273b3e92.png"
                alt="Analytics"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-213fb9b9fe26459eb6ec11d01af9c3b0.png"
                alt="Settings"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-b37e8cf008394559888697debc203ada.png"
                alt="Profile"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-ed212c3c632046cea659d008d8a4e406.png"
                alt="Mobile App"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-fa86b24d3bc94e5b8ccc442be7e513f7.png"
                alt="Landing Page"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-91f2ded40d5c46a7a6f331864e201a99.png"
                alt="Social Media"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-4b326df5bb3d4e15af5ef2e7802d8f0d.png"
                alt="Chat UI"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-3775210f79ab4edf82b4513b02bb9736.png"
                alt="Calendar"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-1cd378689a934976b07ffab3466ae2b4.png"
                alt="Health App"
                className="w-full h-auto"
              />
            </div>
            <div className="screen-shot">
              <img
                src="/images/stitch-projects/4268395796315894993-67df7440afce4ebfa6287ed0cbe44af3.png"
                alt="Finance"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-3">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Google Stitch
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Gemini 3
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Dashboard UI
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              E-commerce
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              100+ Screens
            </span>
            <a
              href="https://stitch.withgoogle.com/projects/4268395796315894993"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 bg-pink-600 hover:bg-pink-500 rounded-full text-sm text-white font-medium transition-colors"
            >
              View in Stitch <ExternalLink className="inline w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
