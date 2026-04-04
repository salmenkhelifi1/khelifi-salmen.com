import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Adaptifit - AI Fitness Coach | Salmen Khelifi",
  description: "Adaptifit AI Fitness Coach app built by Salmen Khelifi",
};

export default function ProjectAdaptifit() {
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
          <div className="text-cyan-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            AI Mobile App
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Adaptifit - AI Fitness Coach
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            AI-powered fitness and nutrition app with personalized workout
            plans, meal tracking, progress analytics, and an AI coach chat.
            Full-stack mobile + backend solution.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Flutter
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Node.js
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              MongoDB
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              OpenAI
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              n8n
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">App Features</h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-cyan-400 w-6 h-6 mt-1" />
              <span>Personalized AI-generated workout plans</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-cyan-400 w-6 h-6 mt-1" />
              <span>Meal tracking and nutrition analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-cyan-400 w-6 h-6 mt-1" />
              <span>Progress analytics and visualizations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-cyan-400 w-6 h-6 mt-1" />
              <span>AI Coach chat for fitness guidance</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-cyan-400 w-6 h-6 mt-1" />
              <span>Social features and community challenges</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Mobile (Flutter)
              </h3>
              <p className="text-gray-400">
                Cross-platform app with native performance, smooth animations,
                and offline support.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Backend (Node.js)
              </h3>
              <p className="text-gray-400">
                RESTful API with JWT authentication, real-time updates, and
                scalable architecture.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                Database (MongoDB)
              </h3>
              <p className="text-gray-400">
                Flexible schema for user profiles, workout data, and progress
                tracking.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">
                AI Integration
              </h3>
              <p className="text-gray-400">
                OpenAI GPT models for personalized coaching and meal
                recommendations.
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
