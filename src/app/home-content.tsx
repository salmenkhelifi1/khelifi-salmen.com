"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Smartphone,
  Zap,
  createLucideIcon,
} from "lucide-react";

const GithubIcon = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ],
]);

const LinkedinIcon = createLucideIcon("Linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }],
  ["rect", { x: "2", y: "9", width: "4", height: "12" }],
  ["circle", { cx: "4", cy: "4", r: "2" }],
]);

const TwitterIcon = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    },
  ],
]);

export default function HomeContent() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const updateParallax = () => {
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const reveal = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", reveal);
    updateParallax();
    reveal();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Khelifi<span className="text-blue-500">.</span>
          </Link>
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>
          <a
            href="mailto:contact@khelifi-salmen.com"
            className="cta-button cta-primary cta-small text-sm font-bold"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      <section className="hero-section min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
        <div className="parallax-layer layer-one" aria-hidden="true"></div>
        <div className="parallax-layer layer-two" aria-hidden="true"></div>

        <div className="blob w-96 h-96 bg-blue-600/20 rounded-full top-1/4 left-1/4 blur-[100px]"></div>
        <div
          className="blob w-[500px] h-[500px] bg-purple-600/10 rounded-full bottom-0 right-0 blur-[120px]"
          style={{ animationDelay: "-2s" }}
        ></div>

        <div className="hero-content max-w-5xl text-center z-10">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-wider text-gray-300 reveal">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>

          <h1
            className="hero-title text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8 reveal"
            style={{ transitionDelay: "100ms" }}
          >
            Building automated <br />
            <span className="text-gradient">digital ecosystems.</span>
          </h1>

          <p
            className="hero-subtitle text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed reveal"
            style={{ transitionDelay: "200ms" }}
          >
            I am Salmen Khelifi, a Software Engineer & Automation Specialist.
            From <span className="text-white font-medium">Web Apps & Mobile</span>
            to complex <span className="text-white font-medium">AI Workflows</span>,
            I build systems that drive revenue.
          </p>

          <div
            className="hero-actions flex flex-col md:flex-row gap-5 justify-center items-center reveal"
            style={{ transitionDelay: "300ms" }}
          >
            <a href="#work" className="cta-button cta-primary w-full md:w-auto">
              View Case Studies
            </a>
            <a href="#about" className="cta-button cta-secondary w-full md:w-auto">
              My Process
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item">n8n Automation</span>
            <span className="marquee-item">Flutter</span>
            <span className="marquee-item">React.js</span>
            <span className="marquee-item">Node.js</span>
            <span className="marquee-item">OpenAI API</span>
            <span className="marquee-item">Shopify Liquid</span>
            <span className="marquee-item">WordPress</span>
            <span className="marquee-item">Firebase</span>
            <span className="marquee-item">n8n Automation</span>
            <span className="marquee-item">Flutter</span>
            <span className="marquee-item">React.js</span>
            <span className="marquee-item">Node.js</span>
            <span className="marquee-item">OpenAI API</span>
            <span className="marquee-item">Shopify Liquid</span>
            <span className="marquee-item">WordPress</span>
            <span className="marquee-item">Firebase</span>
          </div>
        </div>
      </section>

      <section id="work" className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-24 reveal tracking-tight">
            Selected Work
          </h2>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="order-2 md:order-1">
              <div className="text-blue-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                Mobile Development
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Cross-Platform Mobile Application
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Built a high-performance native app using Flutter. Features
                include real-time data sync, push notifications, and a seamless
                UI consistent across iOS and Android.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Flutter
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Dart
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Firebase
                </span>
              </div>
              <Link
                href="/project-mobile"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-blue-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div
                  className="phone-screen"
                  style={{
                    backgroundImage: "url('/images/stitch-projects/93982865648166192-a91fc2eb22524eefab18d5b8c8b0dea8.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="mockup-container">
              <div className="laptop-wrapper">
                <div className="laptop-screen-frame">
                  <div
                    className="phone-notch"
                    style={{
                      width: "40px",
                      height: "10px",
                      borderRadius: "0 0 4px 4px",
                    }}
                  ></div>
                  <div
                    className="laptop-screen"
                    style={{
                      backgroundImage: "url('/images/rentiora.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  ></div>
                </div>
                <div className="laptop-base"></div>
              </div>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                Web Application & SaaS
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Rentiora - Car Rental Platform
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                100% Trusted car rental platform. Experience the ultimate in
                comfort, performance, and sophistication with our luxury car
                rentals. From sleek sedans to spacious SUVs.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  React.js
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Node.js
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  MongoDB
                </span>
              </div>
              <Link
                href="/project-rentiora"
                target="_blank"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-purple-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="order-2 md:order-1">
              <div className="text-orange-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                AI & Automation
              </div>
              <h3 className="text-4xl font-bold mb-6">Intelligent n8n Workflow</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Engineered complex automation pipelines connecting OpenAI agents
                with CRM data. Reduced manual administrative tasks by 85%
                through smart logic.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  n8n
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  OpenAI
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Webhooks
                </span>
              </div>
              <Link
                href="/project-n8n"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-orange-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div
                  className="phone-screen"
                  style={{
                    backgroundImage: "url('/images/stitch-projects/5420830943902664185-c38ca9c39e9a4a138fecbfdd173f7ccb.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center reveal">
            <div className="mockup-container">
              <div className="laptop-wrapper">
                <div className="laptop-screen-frame">
                  <div
                    className="phone-notch"
                    style={{
                      width: "40px",
                      height: "10px",
                      borderRadius: "0 0 4px 4px",
                    }}
                  ></div>
                  <div
                    className="laptop-screen"
                    style={{
                      backgroundImage: "url('/images/chaktech_1.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                    }}
                  ></div>
                </div>
                <div className="laptop-base"></div>
              </div>
            </div>
            <div>
              <div className="text-green-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                E-commerce & CMS
              </div>
              <h3 className="text-4xl font-bold mb-6">Chaktech.tn</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                An eCommerce website built with WordPress, designed to provide a
                seamless online shopping experience for a local phone store.
                Integrated with secure payment options and optimized for
                performance.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
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
              <Link
                href="/project-chaktech"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-green-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="order-2 md:order-1">
              <div className="text-cyan-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                AI Mobile App
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Adaptifit - AI Fitness Coach
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                AI-powered fitness and nutrition app with personalized workout
                plans, meal tracking, progress analytics, and an AI coach chat.
                Full-stack mobile + backend solution.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
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
              <Link
                href="/project-adaptifit"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-cyan-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div
                  className="phone-screen"
                  style={{
                    backgroundImage: "url('/images/stitch-projects/15863999156109095280-3ed15ebb08364f629544f22ce389d1c4.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div
                  className="phone-screen"
                  style={{
                    backgroundImage: "url('/images/stitch-projects/17997727846251710443-f3c2853b8b7f4691bd3875afb4621e7c.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div className="text-violet-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                AI UI Design
              </div>
              <h3 className="text-4xl font-bold mb-6">Stitch AI Prototypes</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                AI-generated UI prototypes designed with Google Stitch and
                Gemini. Features include modern mobile app interfaces, landing
                pages, and interactive web components. Rapid design iteration
                using AI-powered UI generation.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Google Stitch
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Gemini AI
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  UI/UX Design
                </span>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Mobile First
                </span>
              </div>
              <Link
                href="/project-stitch-mobile"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-violet-400 transition-colors"
              >
                View Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="project-card group grid md:grid-cols-2 gap-16 items-center mb-40 reveal">
            <div className="order-2 md:order-1">
              <div className="text-pink-400 font-semibold mb-4 tracking-wider text-sm uppercase">
                AI Design Tools
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Extensive UI Design Collection
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A comprehensive collection of AI-generated UI designs including
                dashboard interfaces, e-commerce layouts, social media apps, and
                productivity tools. Created with Google Stitch using Gemini for
                rapid design exploration.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
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
              </div>
              <Link
                href="/project-stitch-collection"
                className="project-link inline-flex items-center text-white font-bold text-lg hover:text-pink-400 transition-colors"
              >
                View All Projects <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
            <div className="order-1 md:order-2 mockup-container">
              <div className="phone-mockup">
                <div className="phone-notch"></div>
                <div
                  className="phone-screen"
                  style={{
                    backgroundImage: "url('/images/stitch-projects/4268395796315894993-d036a12166e64ecbbf83eb3ba3195a0e.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-24 text-center reveal tracking-tight">
            My Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card modern-card p-10 rounded-3xl reveal">
              <div className="service-icon w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Smartphone className="text-blue-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile & Web Apps</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Cross-platform Flutter apps and robust React web applications
                built for scale and performance.
              </p>
            </div>
            <div
              className="service-card modern-card p-10 rounded-3xl reveal"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="service-icon w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <Zap className="text-orange-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Automation</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Automating complex workflows with n8n and AI agents to save time
                and reduce operational overhead.
              </p>
            </div>
            <div
              className="service-card modern-card p-10 rounded-3xl reveal"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="service-icon w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                <ShoppingBag className="text-green-400 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CMS & E-commerce</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Custom WordPress plugins and Shopify theme development to create
                unique, high-converting stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-40 border-t border-white/5 bg-black/40">
        <div className="about-panel max-w-4xl mx-auto text-center">
          <h2 className="about-title section-title text-4xl font-bold mb-10 reveal">
            About Me
          </h2>
          <p className="about-text text-2xl text-gray-400 leading-relaxed mb-16 font-light reveal">
            With over <span className="text-white font-medium">5 years of experience</span>, I
            bridge the gap between complex code and business goals.
            <br />
            <br />
            Whether it&apos;s a mobile app in <span className="text-white font-medium">Flutter</span>, a
            custom <span className="text-white font-medium">WordPress</span> plugin, or an
            autonomous <span className="text-white font-medium">n8n</span> workflow, I build
            solutions that work.
          </p>
          <div className="about-links flex justify-center gap-8 reveal">
            <a
              href="https://github.com/salmenkhelifi1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <GithubIcon className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <LinkedinIcon className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <TwitterIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Salmen Khelifi. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a
              href="mailto:contact@khelifi-salmen.com"
              className="hover:text-white transition-colors"
            >
              contact@khelifi-salmen.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
