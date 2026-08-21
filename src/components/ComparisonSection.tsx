"use client";

import React from "react";
import Image from "next/image";
import { Check, X, Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

interface ComparisonSectionProps {
  onOpenAudit: () => void;
}

export default function ComparisonSection({ onOpenAudit }: ComparisonSectionProps) {
  const comparisonItems = [
    {
      feature: "Time to Campaign Launch",
      traditional: "4 to 8 weeks of slow onboarding & meetings",
      platform: "7-Day High-Velocity Sprint Onboarding",
    },
    {
      feature: "Client Reporting & Transparency",
      traditional: "Vague monthly PDF decks with vanity clicks",
      platform: "24/7 Live Executive Dashboard with exact deal attribution",
    },
    {
      feature: "Website & Landing Page Speed",
      traditional: "Heavy WordPress templates loading in 4-6 seconds",
      platform: "Bespoke Next.js 15 & React apps loading under 0.8s",
    },
    {
      feature: "Ad Accounts & Intellectual Property",
      traditional: "Agency locks accounts & withholds custom funnels",
      platform: "100% Client-Owned Ad Accounts, Code & Creative Assets",
    },
    {
      feature: "Strategy & Execution Team",
      traditional: "Pitched by executives, handed off to junior interns",
      platform: "Senior US Growth Directors & Dedicated MarTech Engineers",
    },
    {
      feature: "Contract Structure",
      traditional: "12-Month rigid lock-in with zero guarantees",
      platform: "Agile, milestone-driven sprints with zero lock-in",
    },
  ];

  return (
    <section id="comparison" className="py-20 max-w-7xl mx-auto px-6 lg:px-8 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Performance Advantage</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-950 tracking-tight leading-tight">
          Why Modern US Brands Are Leaving <br className="hidden sm:inline" />
          Traditional Marketing Agencies
        </h2>
        <p className="text-surface-600 text-sm sm:text-base leading-relaxed">
          Traditional agencies bill high monthly retainers for vanity metrics and endless Zoom meetings. We operate like a high-growth Silicon Valley revenue engine.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="bg-white rounded-3xl border border-surface-200 shadow-2xl overflow-hidden">
        
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-surface-200">
          
          <div className="md:col-span-4 p-6 bg-surface-50 font-black text-sm uppercase tracking-wider text-surface-500 flex items-center">
            Key Capabilities
          </div>

          <div className="md:col-span-4 p-6 bg-surface-100/70 font-extrabold text-sm text-surface-700 flex items-center justify-between border-t md:border-t-0 md:border-l border-surface-200">
            <span>Traditional Retainer Agency</span>
            <span className="text-xs text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded-md">The Old Way</span>
          </div>

          <div className="md:col-span-4 p-5 bg-brand-600 text-white font-extrabold text-sm flex items-center justify-between border-t md:border-t-0 md:border-l border-brand-500 shadow-inner">
            <div className="relative h-10 w-28 rounded-lg bg-white px-2 py-1 flex items-center justify-center">
              <Image src="/PET_Blue.png" alt="Platform Logo" width={112} height={40} className="object-contain w-full h-full" />
            </div>
            <span className="text-xs bg-white text-brand-900 font-extrabold px-2.5 py-1 rounded-full">Recommended</span>
          </div>

        </div>

        {/* Table Rows */}
        <div className="divide-y divide-surface-200">
          {comparisonItems.map((row, idx) => (
            <div key={row.feature} className={`grid grid-cols-1 md:grid-cols-12 items-center transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-surface-50/40'}`}>
              
              <div className="md:col-span-4 p-5 sm:p-6 font-extrabold text-sm text-brand-950">
                {row.feature}
              </div>

              <div className="md:col-span-4 p-5 sm:p-6 text-xs sm:text-sm text-surface-600 md:border-l border-surface-200 flex items-start gap-2.5 bg-surface-50/20">
                <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>{row.traditional}</span>
              </div>

              <div className="md:col-span-4 p-5 sm:p-6 text-xs sm:text-sm font-bold text-brand-950 md:border-l border-brand-100 bg-brand-50/40 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>{row.platform}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="p-6 sm:p-8 bg-surface-50 border-t border-surface-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-surface-700">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>Try our proven framework risk-free with a custom 30-Day Growth Blueprint</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-brand-600/20 flex items-center gap-2"
          >
            <span>Claim Your Performance Blueprint</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
