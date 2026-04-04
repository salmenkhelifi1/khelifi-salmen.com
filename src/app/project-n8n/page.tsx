import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Intelligent n8n Workflow | Salmen Khelifi",
  description: "Intelligent n8n workflow automation built by Salmen Khelifi",
};

export default function ProjectN8n() {
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
          <div className="text-orange-400 font-semibold mb-4 tracking-wider text-sm uppercase">
            AI & Automation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Intelligent n8n Workflow
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Engineered complex automation pipelines connecting OpenAI agents
            with CRM data. Reduced manual administrative tasks by 85% through
            smart logic and AI-powered decision making.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              n8n
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              OpenAI
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              Webhooks
            </span>
            <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
              CRM
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Automation Features</h2>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 w-6 h-6 mt-1" />
              <span>AI-powered customer response generation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 w-6 h-6 mt-1" />
              <span>Automated data synchronization between systems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 w-6 h-6" />
              <span>Smart lead routing and scoring</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 w-6 h-6 mt-1" />
              <span>Real-time notification system</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 w-6 h-6 mt-1" />
              <span>Custom workflow triggers and conditions</span>
            </li>
          </ul>
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
