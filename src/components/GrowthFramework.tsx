"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cpu, Rocket, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const frameworkSteps = [
  {
    step: "01",
    name: "Discover & Audit",
    duration: "Week 1",
    icon: Search,
    summary: "Deep-dive data audit of existing acquisition channels, CRM conversion rates, and competitor ad strategies.",
    deliverables: ["Full CAC & ROAS Audit", "Competitor Ad Teardown", "Attribution Pipeline Mapping"]
  },
  {
    step: "02",
    name: "Architect & Systemize",
    duration: "Week 2",
    icon: Compass,
    summary: "Engineering custom landing pages, visual design tokens, tracking tags, and paid media campaign structures.",
    deliverables: ["High-Converting Figma UI", "Closed-Loop Analytics Setup", "Creative Ad Variant Matrix"]
  },
  {
    step: "03",
    name: "Execute & Launch",
    duration: "Week 3-4",
    icon: Cpu,
    summary: "Deploying multi-channel campaigns with automated bidding rules, A/B testing variations, and CRM syncing.",
    deliverables: ["Google & Meta Campaign Launch", "Live Interactive Dashboard", "Weekly Velocity Reports"]
  },
  {
    step: "04",
    name: "Scale & Optimize",
    duration: "Ongoing",
    icon: Rocket,
    summary: "Scaling budget allocation to top-performing ad vectors while reducing blended CAC through LTV retention workflows.",
    deliverables: ["Aggressive Budget Scale", "Lifecycle Email Automation", "Quarterly Executive Briefings"]
  }
];

export default function GrowthFramework() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="systems" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proprietary Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            The 4-Phase Enterprise <span className="blue-gradient-text">Growth Framework</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-navy-600 font-normal">
            A battle-tested 14-day sprint methodology engineered to remove guesswork and guarantee capital efficiency.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          
          {/* Animated Active Progress Line */}
          <div 
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-brand-600 -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStep / (frameworkSteps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {frameworkSteps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-brand-600 shadow-card-hover scale-[1.02]"
                      : isPast
                      ? "bg-blue-50/50 border-brand-200"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                      isActive 
                        ? "bg-brand-600 text-white shadow-glow-subtle"
                        : "bg-slate-200/80 text-navy-800"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                      isActive ? "bg-brand-50 text-brand-700 border border-brand-200" : "bg-slate-200/60 text-navy-600"
                    }`}>
                      {item.duration}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-brand-600 uppercase tracking-widest font-mono mb-1">
                    Phase {item.step}
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-navy-600 line-clamp-2">
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed View Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-card-soft"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold font-mono text-brand-600 uppercase tracking-wider">
                Phase {frameworkSteps[activeStep].step} Breakdown
              </span>
              <h4 className="text-2xl font-extrabold text-navy-900 mt-1">
                {frameworkSteps[activeStep].name} Strategy
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-navy-800 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <span>Expected Sprint Velocity:</span>
              <span className="text-brand-600 font-mono">{frameworkSteps[activeStep].duration}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {frameworkSteps[activeStep].deliverables.map((del, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-bold text-navy-800">{del}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
