"use client";

import React from "react";
import { ShieldCheck, CheckCircle, Code2, Globe } from "lucide-react";

const clientLogos = [
  { name: "WordPress & PHP", category: "CMS & Backend", highlight: "Custom Plugins" },
  { name: "React & Next.js", category: "Modern Web Apps", highlight: "Sub-100ms Load" },
  { name: "Laravel Framework", category: "Web Applications", highlight: "Enterprise API" },
  { name: "Google SEO & PPC", category: "Organic & Paid", highlight: "Page 1 Focus" },
  { name: "Meta & Social Ads", category: "Social Marketing", highlight: "Target Audiences" },
  { name: "Shopify E-Commerce", category: "Online Stores", highlight: "High Conversion" },
  { name: "HubSpot & GA4", category: "CRM & Analytics", highlight: "Data Insights" },
  { name: "Tailwind & Figma", category: "UX/UI Design", highlight: "Clean Layouts" },
];

export default function TrustMarquee() {
  return (
    <section className="py-14 bg-white border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-navy-600 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <span>Full-Service Digital Marketing Agency & Technology Stack</span>
        </p>
      </div>

      {/* Ticker Container with gradient fades on edges */}
      <div className="relative w-full overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Ticker Animation track */}
        <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
          {[...clientLogos, ...clientLogos].map((client, idx) => (
            <div
              key={idx}
              className="flex-none px-6 py-3.5 mx-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-brand-600/30 hover:bg-blue-50/40 transition-all duration-300 group flex items-center gap-3 cursor-pointer shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-600/10 text-brand-600 font-black text-xs flex items-center justify-center font-space group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {client.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-semibold text-navy-500">
                  {client.category} • <span className="text-brand-600 font-bold">{client.highlight}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-navy-600 font-medium">
        <span className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Clean Responsive Code
        </span>
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-brand-600" /> SEO & Speed Optimized Layouts
        </span>
        <span className="flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-indigo-600" /> Custom PHP, Laravel & React Systems
        </span>
      </div>
    </section>
  );
}
