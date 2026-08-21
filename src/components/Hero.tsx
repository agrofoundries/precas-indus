"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Activity, 
  Target, 
  CheckCircle2, 
  Play, 
  RefreshCw,
  Globe,
  Award,
  Search,
  Code,
  Cpu,
  Layers
} from "lucide-react";

interface HeroProps {
  onOpenBriefing: () => void;
}

export default function Hero({ onOpenBriefing }: HeroProps) {
  const [activeMetricTab, setActiveMetricTab] = useState<"revenue" | "conversion" | "roas" | "cac">("revenue");
  const [timeframe, setTimeframe] = useState<"30D" | "90D" | "YTD">("90D");

  const metricStats = {
    revenue: {
      "30D": { value: "$48,500", growth: "+24.8%", label: "Organic & Paid Campaign Revenue", baseChart: [45, 52, 68, 74, 82, 95, 110] },
      "90D": { value: "$145,200", growth: "+32.1%", label: "Organic & Paid Campaign Revenue", baseChart: [30, 48, 62, 85, 98, 124, 150] },
      "YTD": { value: "$480,000", growth: "+44.8%", label: "Organic & Paid Campaign Revenue", baseChart: [20, 35, 55, 80, 115, 140, 195] },
    },
    conversion: {
      "30D": { value: "4.85%", growth: "+1.4%", label: "Avg. Website CVR", baseChart: [2.1, 2.8, 3.4, 3.9, 4.2, 4.6, 4.85] },
      "90D": { value: "5.12%", growth: "+2.1%", label: "Avg. Website CVR", baseChart: [1.8, 2.4, 3.1, 3.8, 4.4, 4.9, 5.12] },
      "YTD": { value: "5.45%", growth: "+3.2%", label: "Avg. Website CVR", baseChart: [1.5, 2.2, 3.0, 3.7, 4.5, 5.0, 5.45] },
    },
    roas: {
      "30D": { value: "3.85x", growth: "+1.2x", label: "Target Campaign ROAS", baseChart: [2.4, 2.9, 3.5, 4.0, 4.3, 4.6, 4.82] },
      "90D": { value: "4.20x", growth: "+1.8x", label: "Target Campaign ROAS", baseChart: [2.1, 2.8, 3.4, 4.1, 4.7, 5.0, 5.30] },
      "YTD": { value: "4.65x", growth: "+2.4x", label: "Target Campaign ROAS", baseChart: [2.0, 2.6, 3.3, 4.2, 5.0, 5.6, 6.15] },
    },
    cac: {
      "30D": { value: "$42.50", growth: "-28.2%", label: "Acquisition Cost Optimization", baseChart: [280, 240, 210, 185, 165, 150, 142] },
      "90D": { value: "$38.10", growth: "-35.5%", label: "Acquisition Cost Optimization", baseChart: [310, 260, 215, 180, 155, 138, 128] },
      "YTD": { value: "$34.00", growth: "-42.0%", label: "Acquisition Cost Optimization", baseChart: [340, 280, 220, 175, 145, 126, 114] },
    }
  };

  const currentData = metricStats[activeMetricTab][timeframe];

  return (
    <section className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      {/* Micro Grid Background */}
      <div className="absolute inset-0 bg-micro-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-brand-500/10 via-brand-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-brand-600/20 text-brand-700 text-xs font-bold shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Full-Service Digital Agency & Web Development</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-navy-800 text-xs font-semibold">
            <Code className="w-3.5 h-3.5 text-brand-600" />
            <span>WordPress • PHP • Laravel • React • Next.js • SEO</span>
          </div>
        </motion.div>

        {/* Hero Headline with Generous Explicit Line-Height & Spacing */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.32] sm:leading-[1.28] md:leading-[1.25] pb-2"
          >
            Engineering Scalable Growth for{" "}
            <span className="blue-gradient-text">Modern Enterprise Brands.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-navy-700 font-normal leading-relaxed sm:leading-loose max-w-3xl mx-auto pt-2"
          >
            We build high-converting websites, custom web applications, data-driven SEO campaigns, and targeted digital marketing systems designed to scale your business predictably.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenBriefing}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#capabilities"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-semibold text-base border border-slate-200 shadow-card-soft transition-all duration-200 flex items-center justify-center gap-2 hover:border-brand-600/30"
            >
              <Play className="w-4 h-4 text-brand-600 fill-brand-600" />
              <span>Explore Agency Services & Tech</span>
            </a>
          </motion.div>
        </div>

        {/* Dashboard Visual Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white border border-brand-600/15 shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8">
            
            {/* Top Bar of Dashboard Mockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-rose-400" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400" />
                <span className="h-4 w-[1px] bg-slate-200 mx-1" />
                <div className="flex items-center gap-2 text-xs font-bold text-navy-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/60">
                  <Activity className="w-3.5 h-3.5 text-brand-600" />
                  <span>PET Analytics Dashboard Preview</span>
                </div>
              </div>

              {/* Timeframe Selector */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/80">
                  {(["30D", "90D", "YTD"] as const).map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                        timeframe === tf
                          ? "bg-white text-brand-600 shadow-sm border border-slate-200/60"
                          : "text-navy-600 hover:text-navy-900"
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Preview</span>
                </div>
              </div>
            </div>

            {/* Dashboard Metric Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {[
                { key: "revenue", label: "Campaign Revenue", icon: TrendingUp },
                { key: "conversion", label: "Website Funnel CVR", icon: Target },
                { key: "roas", label: "Campaign ROAS", icon: Zap },
                { key: "cac", label: "Acquisition Cost", icon: BarChart3 },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeMetricTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveMetricTab(tab.key as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-brand-50/60 border-brand-600/40 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between text-navy-500 mb-1">
                      <span className="text-[11px] font-semibold text-navy-600">{tab.label}</span>
                      <Icon className={`w-4 h-4 ${isSelected ? "text-brand-600" : "text-slate-400"}`} />
                    </div>
                    <div className="text-lg font-bold text-navy-900 font-space tracking-tight">
                      {metricStats[tab.key as keyof typeof metricStats][timeframe].value}
                    </div>
                    <div className="text-[11px] font-bold text-emerald-600 mt-0.5">
                      {metricStats[tab.key as keyof typeof metricStats][timeframe].growth} vs prev
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Chart SVG */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {currentData.label} Growth Chart
                  </div>
                  <div className="text-2xl font-black text-navy-900 font-space mt-0.5 flex items-center gap-3">
                    <span>{currentData.value}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {currentData.growth} Growth Rate
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-navy-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-brand-600" />
                  <span>Real-Time Website & Marketing Tracking</span>
                </div>
              </div>

              {/* Graphic Chart SVG */}
              <div className="h-44 sm:h-52 w-full relative mt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroGradientChart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0B5CFF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0B5CFF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <line x1="0" y1="40" x2="700" y2="40" stroke="#e2e8f0" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="700" y2="90" stroke="#e2e8f0" strokeDasharray="4 4" />
                  <line x1="0" y1="140" x2="700" y2="140" stroke="#e2e8f0" strokeDasharray="4 4" />

                  <polygon 
                    points={`0,180 0,140 100,120 200,95 300,80 400,60 500,35 600,25 700,10 700,180`} 
                    fill="url(#heroGradientChart)" 
                  />

                  <path
                    d="M 0,140 Q 100,120 200,95 T 400,60 T 600,25 T 700,10"
                    fill="none"
                    stroke="#0B5CFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {[
                    { x: 0, y: 140 },
                    { x: 116, y: 118 },
                    { x: 233, y: 90 },
                    { x: 350, y: 70 },
                    { x: 466, y: 45 },
                    { x: 583, y: 25 },
                    { x: 700, y: 10 },
                  ].map((pt, idx) => (
                    <g key={idx} className="group cursor-pointer">
                      <circle cx={pt.x} cy={pt.y} r="5" fill="#ffffff" stroke="#0B5CFF" strokeWidth="3" />
                      <circle cx={pt.x} cy={pt.y} r="10" fill="#0B5CFF" fillOpacity="0.15" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Technologies Badges Bar inside Dashboard */}
              <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy-800">Tech Stack Supported:</span>
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-brand-800 font-bold">WordPress</span>
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-brand-800 font-bold">PHP & Laravel</span>
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-brand-800 font-bold">React & Next.js</span>
                  <span className="hidden md:inline-block px-2.5 py-0.5 rounded bg-blue-100 text-brand-800 font-bold">SEO & Analytics</span>
                </div>

                <div className="flex items-center gap-1.5 text-navy-600 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Custom Layout Design</span>
                </div>
              </div>
            </div>

            {/* Sub-Footer inside Card */}
            <div className="mt-6 flex flex-wrap items-center justify-around gap-4 text-xs text-navy-600 pt-4 border-t border-slate-100 font-medium">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-600" />
                <span>SEO & Organic Visibility</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-brand-600" />
                <span>Custom PHP, React & WordPress Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-600" />
                <span>Fast Loading Web Speed</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
