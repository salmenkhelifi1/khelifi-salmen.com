import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Bot, Shield, TrendingUp, Calendar, MessageSquare, UserPlus, Smartphone, Server, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "AdaptiFit - AI Fitness Coach | Salmen Khelifi",
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
            AdaptiFit - AI-Powered Fitness & Nutrition Platform
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            A full-stack mobile fitness application delivering personalized workout and nutrition plans through AI.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              iOS & Android (Flutter)
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              REST API (Node.js)
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              MongoDB
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              N8N AI Workflows
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Offline-First SQLite
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://github.com/salmenkhelifi1/adaptifit-monorepo" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <ExternalLink className="w-5 h-5" /> View Repository
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/untitled-design-1-mePgG6RMebFyGXPM.png" alt="AdaptiFit App Screen 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl md:-mt-8">
              <Image src="/images/untitled-design-2-mxB28aRWk6sZbzP8.png" alt="AdaptiFit Dashboard" fill className="object-cover" />
            </div>
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/untitled-design-YyvD2OMBJRTQ9WO5.png" alt="AdaptiFit App Screen 2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">✨ Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-400">
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Bot className="text-cyan-400 w-5 h-5" /> AI-Powered Plan Generation
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Personalized workout plans based on goals, experience, and preferences</li>
                <li>Dynamic nutrition planning with macro tracking</li>
                <li>Plan regeneration with AI adjustment</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Shield className="text-cyan-400 w-5 h-5" /> Authentication & Security
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>JWT-based secure authentication</li>
                <li>Password reset flow via email</li>
                <li>Certificate pinning for API security</li>
                <li>Encrypted token storage</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="text-cyan-400 w-5 h-5" /> Progress Tracking
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Daily workout completion</li>
                <li>Weekly and monthly analytics</li>
                <li>Streaks and achievement badges</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Calendar className="text-cyan-400 w-5 h-5" /> Interactive Calendar
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Daily workout/nutrition scheduling</li>
                <li>Completion tracking</li>
                <li>Historical data view</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <MessageSquare className="text-cyan-400 w-5 h-5" /> AI Coach Chat
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Real-time messaging with AI fitness coach</li>
                <li>WebSocket integration</li>
                <li>Offline message caching</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <UserPlus className="text-cyan-400 w-5 h-5" /> Onboarding Flow
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Comprehensive user profile questionnaire</li>
                <li>Goal and preference collection</li>
                <li>AI-driven initial plan generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">💻 Technology Stack & Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> Mobile (Flutter)
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-white font-medium">Framework:</span> Flutter 3.0+ / Dart 3.0+</li>
                <li><span className="text-white font-medium">State Management:</span> Riverpod 2.x</li>
                <li><span className="text-white font-medium">Local Database:</span> Drift (SQLite)</li>
                <li><span className="text-white font-medium">Networking:</span> HTTP + WebSocket</li>
                <li><span className="text-white font-medium">Security:</span> FlutterSecureStorage, Certificate Pinning</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                <Server className="w-5 h-5" /> Backend (Node.js)
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-white font-medium">Runtime/Framework:</span> Node.js 18+ / Express.js</li>
                <li><span className="text-white font-medium">Database:</span> MongoDB (Mongoose)</li>
                <li><span className="text-white font-medium">Authentication:</span> JWT</li>
                <li><span className="text-white font-medium">Security:</span> Helmet, Rate Limiting, Mongo Sanitize</li>
                <li><span className="text-white font-medium">Email & Testing:</span> Brevo API, Jest, Supertest</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Mobile Architecture (Clean Architecture)</h3>
              <div className="bg-[#0d0d0d] border border-white/10 p-5 rounded-xl font-mono text-sm text-gray-400 overflow-x-auto">
<pre>{`lib/src/
├── core/           → Config, exceptions, utilities
├── constants/      → App colors, strings
├── models/         → Data models
├── providers/      → Riverpod state management
├── repositories/   → Data abstraction layer
├── services/       → API clients, business logic
├── screens/        → UI screens (auth, core, onboarding)
├── theme/          → App theming
└── utils/          → Formatters, validators, logger`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Backend Architecture (Controller-Service-Model)</h3>
              <div className="bg-[#0d0d0d] border border-white/10 p-5 rounded-xl font-mono text-sm text-gray-400 overflow-x-auto">
<pre>{`routes/      → HTTP endpoints + validation
middleware/  → Auth, security, error handling
services/    → Business logic + external integrations
models/      → Mongoose schemas`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Database Schema</h3>
              <div className="bg-[#0d0d0d] border border-white/10 p-5 rounded-xl font-mono text-sm text-gray-400 overflow-x-auto">
<pre>{`User (1) ────── Plan (M)
    │               ├── Workout (1:M)
    │               └── Nutrition (1:M)
    │
    ├── Calendar (by date)
    └── WorkoutProgress (tracking)`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">🔑 Key Technical Achievements</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-300">
                  <th className="py-4 px-4 font-semibold">Challenge</th>
                  <th className="py-4 px-4 font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Personalized AI plans</td>
                  <td className="py-4 px-4">N8N webhook integration with dynamic prompts</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Offline functionality</td>
                  <td className="py-4 px-4">Drift database + WebSocket sync</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Real-time chat</td>
                  <td className="py-4 px-4">WebSocket + N8N workflow trigger</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Security</td>
                  <td className="py-4 px-4">JWT + secure storage + certificate pinning</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">API rate limiting</td>
                  <td className="py-4 px-4">Express rate limiter on auth routes</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white">Email delivery</td>
                  <td className="py-4 px-4">Brevo (Sendinblue) integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">📈 Project Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-sm text-gray-400">Mobile Screens</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">30+</div>
              <div className="text-sm text-gray-400">API Endpoints</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
              <div className="text-sm text-gray-400">Database Models</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Test Types</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-sm text-gray-400">Platforms</div>
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