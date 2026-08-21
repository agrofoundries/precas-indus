"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, ShieldCheck, Rocket, Zap, Search, CheckCircle2 } from "lucide-react";

export default function RoiMetricsStrip() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const metrics = [
    {
      value: "100%",
      label: "Custom Clean Code",
      subtext: "Bespoke WordPress, PHP, Laravel & Next.js architectures with zero bloat",
      icon: Code2,
      color: "text-brand-600",
      bgColor: "bg-blue-50",
      borderColor: "border-brand-600/20",
    },
    {
      value: "99/100",
      label: "SEO Speed Score",
      subtext: "Core Web Vitals optimized for top Google Page 1 search visibility",
      icon: Search,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      value: "Full-Funnel",
      label: "Digital Agency Stack",
      subtext: "End-to-end SEO, PPC campaigns, responsive web design & lead analytics",
      icon: Rocket,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      value: "14 Days",
      label: "Avg. Sprint Velocity",
      subtext: "Rapid 2-week execution cycles from layout design to live launch",
      icon: Zap,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <section id="roi-metrics" className="py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Agency Engineering Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-[1.28]">
            Quality Standards & <span className="blue-gradient-text">Execution Metrics</span>
          </h2>

          <p className="text-base text-navy-700 font-normal leading-relaxed">
            Built strictly on modern technology stacks and clean design layouts.
          </p>
        </div>

        {/* 4 Execution Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl bg-white p-8 border ${metric.borderColor} shadow-card-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Micro Grid Background */}
                <div className="absolute inset-0 bg-micro-grid opacity-30 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl ${metric.bgColor} flex items-center justify-center border border-slate-100`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      Standard
                    </span>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <div className="text-3xl sm:text-4xl font-black text-navy-900 font-space tracking-tight">
                      {metric.value}
                    </div>
                    <h3 className="text-base font-bold text-navy-800">
                      {metric.label}
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed font-normal">
                      {metric.subtext}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold relative z-10">
                  <span className="text-navy-500">Production Ready</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
