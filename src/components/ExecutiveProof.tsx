"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, Quote, Sparkles, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: "SaaS" | "FinTech" | "E-Commerce" | "AI Enterprise";
  outcome: string;
  quote: string;
  avatarInitials: string;
  verifiedLinkedin: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Chief Marketing Officer",
    company: "PayCore Infrastructure",
    industry: "FinTech",
    outcome: "+$4.2M Attributed ARR in 90 Days",
    quote: "PET transformed our entire paid media acquisition architecture. They don't just run ads—they built a predictable revenue pipeline with zero attribution leakage.",
    avatarInitials: "MV",
    verifiedLinkedin: true,
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "VP of Enterprise Growth",
    company: "NeuraCloud AI",
    industry: "AI Enterprise",
    outcome: "3.8x ROAS Expansion & Series B Catalyst",
    quote: "The visual 3D design system paired with their high-velocity LinkedIn ad sprint doubled our demo conversion rates within the first 3 weeks of launch.",
    avatarInitials: "ER",
    verifiedLinkedin: true,
  },
  {
    id: "3",
    name: "David Sterling",
    role: "Founder & CEO",
    company: "Aura Life Sciences",
    industry: "E-Commerce",
    outcome: "+310% DTC Revenue Growth",
    quote: "Our previous agency burned budget on vanity metrics. PET's closed-loop CRM tracking gave us 100% clarity on actual payback period and LTV.",
    avatarInitials: "DS",
    verifiedLinkedin: true,
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Head of Demand Generation",
    company: "ScaleFlow Systems",
    industry: "SaaS",
    outcome: "-48.2% Reduction in Blended CAC",
    quote: "Their 14-day sprint framework is unmatched. The speed of execution and quality of visual creative exceeded everything we've seen in the US market.",
    avatarInitials: "SJ",
    verifiedLinkedin: true,
  }
];

export default function ExecutiveProof() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const filteredTestimonials = selectedIndustry === "All"
    ? testimonials
    : testimonials.filter((t) => t.industry === selectedIndustry);

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Executive Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Endorsed by Tier-1 <span className="blue-gradient-text">Marketing Leaders</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-navy-600 font-normal">
            Real transformation testimonials backed by verified LinkedIn credentials and closed ARR metrics.
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["All", "SaaS", "FinTech", "E-Commerce", "AI Enterprise"].map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedIndustry === ind
                  ? "bg-brand-600 text-white shadow-glow-subtle"
                  : "bg-white text-navy-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Multi-Column Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Outcome Badge & Rating */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {item.outcome}
                  </span>
                </div>

                <p className="text-navy-800 text-base italic leading-relaxed mb-6 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center font-space shadow-sm">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">{item.name}</h4>
                    <p className="text-xs text-navy-600 font-medium">{item.role} • <span className="text-brand-600 font-bold">{item.company}</span></p>
                  </div>
                </div>

                {item.verifiedLinkedin && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    <svg className="w-3.5 h-3.5 fill-blue-600" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span className="hidden sm:inline">Verified Executive</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
