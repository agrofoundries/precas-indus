"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Briefcase, 
  CheckCircle2, 
  X, 
  Search,
  Globe,
  Code2,
  TrendingUp
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  metricHero: string;
  metrics: string[];
  deliverables: string[];
  description: string;
  gradient: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "seo-web-redesign",
    title: "WordPress & Custom Web App Redesign",
    client: "Digital Enterprise Platform",
    category: "Web Development & SEO",
    metricHero: "99/100 Speed Score",
    metrics: ["Core Web Vitals Optimized", "Page 1 Organic Ranking", "Mobile Responsive"],
    deliverables: ["Custom WordPress & PHP Theme", "Technical SEO Audit", "High-Converting CRO Layout"],
    description: "Re-engineered full website architecture with custom PHP code and clean Next.js/React layouts, optimizing page loading speed and organic search visibility.",
    gradient: "from-blue-600 to-indigo-800",
  },
  {
    id: "laravel-saas",
    title: "Laravel & React SaaS Web Platform",
    client: "Cloud SaaS Application",
    category: "Laravel & React Development",
    metricHero: "+180% Qualified Traffic",
    metrics: ["Custom Laravel API", "React Component Tokens", "Closed-Loop Analytics"],
    deliverables: ["Laravel Backend Architecture", "React Frontend UI", "Google Ads PPC Setup"],
    description: "Developed a custom Laravel backend with modern React UI, launching targeted search campaigns that doubled qualified lead signups.",
    gradient: "from-brand-600 to-blue-900",
  },
  {
    id: "ecommerce-growth",
    title: "Omnichannel E-Commerce & SEO Scale",
    client: "Direct-to-Consumer Brand",
    category: "E-Commerce & Digital Marketing",
    metricHero: "+210% Organic Leads",
    metrics: ["Shopify Custom Theme", "Meta & Search Ads", "Email Flow Automation"],
    deliverables: ["Custom E-Commerce Layout", "SEO Content Pipeline", "Klaviyo Email Automation"],
    description: "Built high-converting e-commerce web layouts, implemented automated email sequences, and optimized paid social ad funnels.",
    gradient: "from-blue-700 to-slate-900",
  }
];

export default function CaseStudiesGrid() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Line Height and Spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-brand-600" />
              <span>Agency Work Showcase</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.28]">
              Portfolio Work & <span className="blue-gradient-text">Agency Layouts</span>
            </h2>
          </div>

          <p className="text-navy-700 text-base max-w-md leading-relaxed">
            Explore sample web engineering layouts, WordPress themes, Laravel web applications, and digital marketing setups.
          </p>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <motion.div
              key={study.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCaseStudy(study)}
              className="group cursor-pointer rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Top Preview Box */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-brand-700 to-brand-950 p-6 flex flex-col justify-between">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-micro-grid opacity-30 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-white/90 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {study.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="text-xs font-semibold text-blue-200 uppercase tracking-widest">Layout Feature</div>
                  <div className="text-2xl font-black text-white font-space tracking-tight">
                    {study.metricHero}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    {study.client}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-navy-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-navy-800 shadow-sm"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="pt-5 mt-6 border-t border-slate-200/80 space-y-2">
                  <div className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">Tech & Deliverables</div>
                  <div className="space-y-1.5">
                    {study.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-navy-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:bg-blue-50/50 transition-colors">
                <span>View Full Layout Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 overflow-hidden shadow-2xl relative"
            >
              <div className={`p-8 bg-gradient-to-r ${selectedCaseStudy.gradient} text-white relative`}>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200">
                  {selectedCaseStudy.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-blue-100 text-xs mt-1">{selectedCaseStudy.client}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedCaseStudy.metrics.map((m, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Project Architecture & Strategy</h4>
                  <p className="text-navy-700 text-sm leading-relaxed">{selectedCaseStudy.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">Tech Stack & Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCaseStudy.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-navy-800 p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-navy-500">Agency Project Layout Showcase</span>
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-glow-subtle hover:bg-brand-500 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
