"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Server, Search, CheckCircle2, Terminal } from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: any;
  items: { name: string; desc: string; iconFile: string; tag: string }[];
}

const techCategories: TechCategory[] = [
  {
    id: "cms-backend",
    name: "CMS, PHP & Backend Frameworks",
    icon: Server,
    items: [
      { name: "WordPress", desc: "Custom theme development, speed optimization, and secure plugin architecture.", iconFile: "wordpress.svg", tag: "CMS Leader" },
      { name: "PHP", desc: "Server-side web logic, custom API development, and enterprise database integration.", iconFile: "php.svg", tag: "Core Backend" },
      { name: "Laravel", desc: "Elegant PHP framework for scalable web applications, REST APIs, and SaaS platforms.", iconFile: "laravel.svg", tag: "MVC Framework" },
      { name: "Node.js", desc: "High-performance JavaScript runtime for real-time web services and backend APIs.", iconFile: "nodejs.svg", tag: "Runtime" },
      { name: "Shopify", desc: "E-Commerce store setup, custom Liquid theme design, and conversion checkout optimization.", iconFile: "shopify.svg", tag: "E-Commerce" },
      { name: "MySQL & PostgreSQL", desc: "Robust relational database design, query optimization, and secure data storage.", iconFile: "mysql.svg", tag: "Database" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Modern Web Stack",
    icon: Code2,
    items: [
      { name: "React.js", desc: "Interactive user interfaces, component-driven design systems, and fast SPA state management.", iconFile: "react.svg", tag: "UI Library" },
      { name: "Next.js 14+", desc: "Full-stack React framework with App Router, server-side rendering (SSR), and SEO optimization.", iconFile: "nextjs.svg", tag: "Framework" },
      { name: "Vue.js", desc: "Progressive JavaScript framework for building intuitive single-page web applications.", iconFile: "vue.svg", tag: "UI Framework" },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for ultra-clean, custom responsive web designs without code bloat.", iconFile: "tailwind.svg", tag: "Styling" },
      { name: "TypeScript", desc: "Type-safe JavaScript architecture preventing runtime bugs and streamlining code quality.", iconFile: "typescript.svg", tag: "Language" },
      { name: "HTML5 / CSS3", desc: "Semantic web standards, accessibility compliance (WCAG), and responsive CSS grid/flexbox layouts.", iconFile: "html5.svg", tag: "Web Standard" }
    ]
  },
  {
    id: "seo-marketing",
    name: "SEO & Digital Marketing Suite",
    icon: Search,
    items: [
      { name: "Google Analytics 4 & GTM", desc: "Custom event tracking, goal conversions, and multi-touch web traffic analytics.", iconFile: "ga4.svg", tag: "Analytics" },
      { name: "Google Search Console", desc: "Indexing verification, sitemap submission, technical SEO error tracking, and keyword rankings.", iconFile: "gsc.svg", tag: "SEO Core" },
      { name: "SEMrush & Ahrefs", desc: "Competitor keyword analysis, backlink audits, topic gap discovery, and search intent strategy.", iconFile: "semrush.svg", tag: "Research" },
      { name: "Google & Meta Ads", desc: "High-ROI PPC campaigns, audience targeting, conversion tracking, and retargeting pixels.", iconFile: "googleads.svg", tag: "Paid Media" },
      { name: "HubSpot & Mailchimp", desc: "Automated email sequences, CRM lead scoring, customer newsletters, and drip campaigns.", iconFile: "hubspot.svg", tag: "Automation" },
      { name: "Figma & Adobe CC", desc: "Visual UI mockups, graphic assets, brand guidelines, and high-res vector graphics.", iconFile: "figma.svg", tag: "Design" }
    ]
  }
];

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>("cms-backend");

  const currentCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-brand-600" />
            <span>Official Technologies & Engineering Frameworks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.28]">
            Technologies & Tools We <span className="blue-gradient-text">Master & Deploy</span>
          </h2>

          <p className="text-base sm:text-lg text-navy-700 font-normal leading-relaxed sm:leading-loose max-w-2xl mx-auto">
            From classic content systems like WordPress and PHP/Laravel to modern JavaScript frameworks like React, Next.js, and advanced SEO/Marketing suites.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-brand-600 text-white shadow-glow-subtle scale-105"
                    : "bg-slate-100 text-navy-800 hover:bg-slate-200/80 border border-slate-200/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Visual Cards Grid with Official SVG File Logos */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentCategory.items.map((tech, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-brand-600/40 hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Official SVG File Logo Box */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={`/images/tech/${tech.iconFile}`}
                      alt={`${tech.name} Official Logo`}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <span className="text-[11px] font-bold text-brand-700 bg-blue-50 px-3 py-1 rounded-full border border-brand-200">
                    {tech.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Agency Setup & Support</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-brand-600 shrink-0" />
            <p className="text-xs sm:text-sm text-navy-800 font-semibold leading-normal">
              Need a custom web solution built with <span className="text-brand-600 font-bold">WordPress, PHP, Laravel, or React</span>? We engineer layouts tailored to your exact agency requirements.
            </p>
          </div>

          <a
            href="#systems"
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
          >
            Explore Tech Workflows
          </a>
        </div>

      </div>
    </section>
  );
}
