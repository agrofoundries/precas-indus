"use client";

import React from "react";
import { BarChart3, Edit3, Layers, Users } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Realtime Analytics",
      description: "Work with your team in real-time and monitor campaign performance securely.",
      icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "SEO Generator",
      description: "Generate placeholder tools and optimize high-intent keywords for your interfaces.",
      icon: <Edit3 className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Ads Library",
      description: "A repository of scenes, templates, and high-converting ad copies ready to use.",
      icon: <Layers className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Audience Builder",
      description: "Instantly create user avatars and target segments for maximum ROI.",
      icon: <Users className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-900 text-white font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Header / Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-start md:justify-between">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-0.035em] leading-[1.1] max-w-3xl">
            All the must haves of a <br />
            professional <span className="relative z-10 inline-block">
              growth
              <span className="absolute left-0 bottom-2 -z-10 w-10 h-10 rounded-full bg-blue-600/60 blur-md"></span>
              <span className="absolute left-0 bottom-2 -z-10 w-10 h-10 rounded-full bg-blue-500"></span>
            </span> app.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <div 
              key={index}
              className="bg-[#1A253A] border border-white/5 rounded-[32px] p-8 min-h-[380px] flex flex-col justify-between hover:bg-[#1E293B] transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8">
                {feat.icon}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-[-0.02em] text-white">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-400 font-normal leading-relaxed tracking-[-0.01em]">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
