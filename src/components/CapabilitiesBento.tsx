"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  Globe, 
  Palette, 
  BarChart4, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Code2, 
  Layers, 
  Activity,
  Filter
} from "lucide-react";

export default function CapabilitiesBento() {
  const [activeTab, setActiveTab] = useState<"all" | "seo" | "ppc" | "web" | "brand">("all");
  const [activeSeoMetric, setActiveSeoMetric] = useState(0);
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);

  const brandPalettes = [
    { name: "Vibrant Corporate Blue", primary: "#0B5CFF", accent: "#1E3A8A" },
    { name: "Cobalt Digital Innovation", primary: "#0052FF", accent: "#0F172A" },
    { name: "Emerald Performance System", primary: "#059669", accent: "#065F46" },
  ];

  const seoData = [
    { metric: "+240%", label: "Organic Search Impressions", detail: "Keywords ranking on Google Page 1" },
    { metric: "99/100", label: "Google Core Web Vitals Score", detail: "Ultra-fast page speed optimization" },
    { metric: "+180%", label: "Inbound Qualified Leads", detail: "High-intent organic conversion value" },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Service Digital Marketing Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Complete Enterprise <span className="blue-gradient-text">Digital Growth Services</span>
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-navy-600 font-normal leading-relaxed max-w-2xl mx-auto">
            From technical SEO and high-converting website engineering to multi-channel PPC campaigns, we deploy battle-tested digital marketing engines designed for revenue scale.
          </p>
        </div>

        {/* 5 Core Digital Marketing Capability Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Service 1: Search Engine Optimization (SEO) & Organic Scale (Large 7 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-600/15 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                  Page 1 Google Dominance
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Search Engine Optimization (SEO) & Technical Authority
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Data-driven technical SEO audits, high-intent keyword positioning, Core Web Vitals speed optimization, and high-authority backlink architecture that drives non-stop organic traffic.
              </p>

              {/* Interactive SEO Metrics Preview Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-navy-700 pb-2 border-b border-slate-200">
                  <span>SEO Performance Pillar</span>
                  <span className="text-brand-600">Organic Growth Target</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {seoData.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSeoMetric(idx)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        activeSeoMetric === idx
                          ? "bg-white border-brand-600 shadow-sm"
                          : "bg-slate-100/60 border-slate-200"
                      }`}
                    >
                      <div className="text-base sm:text-lg font-black text-navy-900 font-space">{item.metric}</div>
                      <div className="text-[10px] font-bold text-navy-600 mt-0.5 line-clamp-1">{item.label}</div>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="font-semibold text-navy-800">{seoData[activeSeoMetric].detail}</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Verified Result</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-navy-500">Technical SEO, Content Velocity & Schema Markup</span>
              <a href="#work" className="font-bold text-brand-600 flex items-center gap-1 hover:gap-2 transition-all">
                Explore SEO Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Service 2: Website Engineering & Conversion CRO (5 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-brand-600/15 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-brand-700 bg-blue-50 px-3.5 py-1 rounded-full border border-brand-200">
                  Next.js & React 18+
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                High-Converting Website Engineering
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Bespoke, lightning-fast web applications designed for maximum conversion rates (CRO), mobile responsiveness, and seamless CRM integrations.
              </p>

              {/* Website Tech Stack Badges Box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
                <div className="text-xs font-bold text-navy-700 flex items-center justify-between">
                  <span>Website Speed & Performance</span>
                  <span className="text-emerald-600 font-mono">100/100 Lighthouse</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                    <span className="font-bold text-navy-900">App Router Architecture</span>
                    <span className="text-brand-600 font-mono font-semibold">Sub-100ms Load</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                    <span className="font-bold text-navy-900">Conversion Funnel CRO</span>
                    <span className="text-emerald-600 font-mono font-semibold">+42% CVR Lift</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-navy-500">Custom UX/UI & Responsive Code</span>
              <span className="font-bold text-brand-600">Framer Motion + Tailwind</span>
            </div>
          </motion.div>

          {/* Service 3: Performance PPC & Paid Acquisition (5 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-brand-600/15 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                  3.8x Avg. ROAS
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Performance PPC & Paid Media
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Google Search Ads, LinkedIn B2B acquisition, Meta video scaling, and programmatic display managed with real-time bid automation.
              </p>

              {/* Paid Channels Box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-navy-900">Google Ads (Search & Shopping)</span>
                  <span className="text-brand-600 font-mono font-bold">6.42% CVR</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-navy-900">LinkedIn B2B PPC Scaling</span>
                  <span className="text-brand-600 font-mono font-bold">4.18% CVR</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-navy-900">Meta Video Retargeting</span>
                  <span className="text-brand-600 font-mono font-bold">5.90% CVR</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-navy-500">Google, Meta & LinkedIn Certified</span>
              <span className="font-bold text-emerald-600">-42% CAC Cut</span>
            </div>
          </motion.div>

          {/* Service 4: Brand Identity & Visual Systems (7 Cols) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-600/15 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-navy-800 bg-slate-100 px-3.5 py-1 rounded-full border border-slate-200">
                  3D Brand Design
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Brand Identity & Visual Systems Architecture
              </h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Bespoke corporate design systems, high-res 3D brand assets, interactive token palettes, and structured typography metrics that elevate market positioning.
              </p>

              {/* Interactive Token Palette */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                <div className="text-xs font-bold text-navy-700 flex items-center justify-between">
                  <span>Interactive Brand System Tokens</span>
                  <span className="text-brand-600 font-mono">Hex & Color System</span>
                </div>

                <div className="flex gap-3">
                  {brandPalettes.map((pal, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePaletteIndex(idx)}
                      className={`flex-1 p-2.5 rounded-xl border text-left transition-all ${
                        activePaletteIndex === idx ? "border-brand-600 bg-white shadow-sm" : "border-slate-200"
                      }`}
                    >
                      <div className="w-full h-6 rounded-lg mb-1.5" style={{ backgroundColor: pal.primary }} />
                      <span className="text-[11px] font-bold text-navy-800 block truncate">{pal.name}</span>
                    </button>
                  ))}
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border" style={{ backgroundColor: brandPalettes[activePaletteIndex].primary }} />
                    <span className="font-mono font-bold text-navy-900">{brandPalettes[activePaletteIndex].primary}</span>
                  </div>
                  <span className="text-navy-500 font-medium">Primary Design System Token</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-navy-500">Corporate Identity & 3D Visual Assets</span>
              <a href="#systems" className="font-bold text-brand-600 flex items-center gap-1">
                View Design Tokens <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
