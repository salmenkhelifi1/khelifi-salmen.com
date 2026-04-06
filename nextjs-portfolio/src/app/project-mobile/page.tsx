import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cross-Platform Mobile App | Salmen Khelifi",
  description: "Flutter cross-platform mobile application built by Salmen Khelifi",
};

export default function ProjectMobile() {
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
          <div className="text-blue-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            Mobile Development
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Cross-Platform Mobile Application
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            A high-performance cross-platform mobile application built with
            Flutter, featuring real-time data synchronization, push
            notifications, and a seamless user experience across iOS and Android
            platforms.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Flutter
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Dart
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Firebase
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              REST API
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6 mt-1" />
              <span>Real-time data synchronization across all devices</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6 mt-1" />
              <span>Push notifications for user engagement</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6 mt-1" />
              <span>Native-like performance on both iOS and Android</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6 mt-1" />
              <span>Modern Material Design UI components</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6 mt-1" />
              <span>Offline-first architecture with local storage</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Architecture</h3>
              <p className="text-gray-400">
                Clean Architecture with BLoC pattern for state management,
                ensuring scalable and maintainable code.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <p className="text-gray-400">
                Firebase for authentication, real-time database, and cloud
                messaging. REST API integration for external services.
              </p>
            </div>
          </div>
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
