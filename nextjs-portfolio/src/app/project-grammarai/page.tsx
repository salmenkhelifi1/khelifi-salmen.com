import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Smartphone, Server, PenTool, Mic, Globe, History, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "GrammarAI - Privacy-First AI Grammar Checker | Salmen Khelifi",
  description: "A full-stack, mobile-first grammar correction application featuring on-device AI for free users and cloud-powered premium features.",
};

export default function ProjectGrammarAI() {
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
          <div className="text-emerald-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            AI SaaS Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            GrammarAI - Privacy-First Cross-Platform Editor
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            A full-stack, mobile-first grammar correction application featuring on-device AI for free users and cloud-powered premium features (Gemini, Deepgram, ElevenLabs) for subscribers.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Flutter (iOS/Android)
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Next.js 14
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Express.js
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Gemini & Deepgram
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              RevenueCat & Stripe
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/stitch-projects/14620193470260808168-70889deedbc14545be22752d8c352941.png" alt="GrammarAI App Screen 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl md:-mt-8">
              <Image src="/images/stitch-projects/14620193470260808168-86bf1b392bcc4a1787cbc2c9ab421f87.png" alt="GrammarAI App Screen 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/images/stitch-projects/14620193470260808168-f9331ca9a91140e2960b24a81db062bf.png" alt="GrammarAI App Screen 3" fill className="object-cover" />
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
                <PenTool className="text-emerald-400 w-5 h-5" /> Grammar Correction
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>AI-powered grammar checking with explanations</li>
                <li>Multiple modes: professional, casual, academic, social</li>
                <li>On-device ML (Free) / Gemini 1.5 Flash (Premium)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <CheckCircle className="text-emerald-400 w-5 h-5" /> OCR Text Scanner
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Capture text from images via Google ML Kit</li>
                <li>Fully on-device for maximum privacy</li>
                <li>Seamless extraction of handwritten notes</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Mic className="text-emerald-400 w-5 h-5" /> Voice Input & Dictation
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Speak naturally and convert to formatted text</li>
                <li>Deepgram Nova-2 cloud accuracy for Premium</li>
                <li>Native speech recognition for Free tier</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Globe className="text-emerald-400 w-5 h-5" /> Text-to-Speech Playback
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Listen to corrected text with natural voices</li>
                <li>ElevenLabs neural voices with speed control</li>
                <li>Native TTS fallback for Free users</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <History className="text-emerald-400 w-5 h-5" /> History Management
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>Persistent history stored in Firestore</li>
                <li>Full error analytics and writing scores</li>
                <li>Unlimited history for Premium users</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Lock className="text-emerald-400 w-5 h-5" /> Premium Subscriptions
              </h3>
              <ul className="list-disc list-inside pl-7 space-y-1">
                <li>RevenueCat-integrated paywall</li>
                <li>Stripe backend payment processing</li>
                <li>Instant gating via Cloud Functions</li>
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
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                <Smartphone className="w-5 h-5" /> Frontend / Mobile
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-white font-medium">Mobile:</span> Flutter & Riverpod</li>
                <li><span className="text-white font-medium">Web:</span> Next.js 14, React 18, TailwindCSS</li>
                <li><span className="text-white font-medium">BaaS:</span> Firebase Core/Auth/Firestore</li>
                <li><span className="text-white font-medium">On-Device AI:</span> ML Kit, MediaPipe GenAI</li>
                <li><span className="text-white font-medium">Monetization:</span> RevenueCat</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                <Server className="w-5 h-5" /> Backend / Server
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li><span className="text-white font-medium">Runtime:</span> Node.js / Express.js (TypeScript)</li>
                <li><span className="text-white font-medium">Cloud AI APIs:</span> Gemini, Deepgram, ElevenLabs</li>
                <li><span className="text-white font-medium">Caching:</span> Redis (ioredis)</li>
                <li><span className="text-white font-medium">Payments:</span> Stripe</li>
                <li><span className="text-white font-medium">Infrastructure:</span> Docker, Render.com</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white">Clean Architecture</h3>
              <div className="bg-[#0d0d0d] border border-white/10 p-5 rounded-xl font-mono text-sm text-gray-400 overflow-x-auto">
<pre>{`Presentation Layer
├── Screens / Widgets
└── Providers (Riverpod)

Domain Layer
├── Models
├── Repository
└── GrammarEngineProxy

Data Layer
├── Firebase Services
├── On-Device AI SDKs
└── Express.js Server (Cloud APIs)`}</pre>
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
                  <td className="py-4 px-4 text-white">On-device AI for free tier</td>
                  <td className="py-4 px-4">Implemented GrammarEngineProxy with fallback chain: Cloud → On-Device (MediaPipe) → Local heuristics.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Privacy-preserving OCR</td>
                  <td className="py-4 px-4">All image processing via Google ML Kit on-device. Images never leave the device.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Multi-platform AI routing</td>
                  <td className="py-4 px-4">Abstraction layer routes requests based on subscription tier seamlessly.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Secure API key management</td>
                  <td className="py-4 px-4">Express.js proxies requests, validating Firebase tokens before forwarding.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-4 px-4 text-white">Freemium subscription sync</td>
                  <td className="py-4 px-4">RevenueCat webhooks → Firebase Cloud Function → Firestore write.</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-white">Rate limiting without DB</td>
                  <td className="py-4 px-4">Redis sliding window algorithm in Express middleware.</td>
                </tr>
              </tbody>
            </table>
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