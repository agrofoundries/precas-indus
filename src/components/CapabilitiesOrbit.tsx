"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Lock, Globe, Zap, Check } from "lucide-react";

interface CapabilitiesOrbitProps {
  onOpenAudit: () => void;
}

export default function CapabilitiesOrbit({ onOpenAudit }: CapabilitiesOrbitProps) {
  const horizontalCards = [
    {
      title: "Smart Digital Cards",
      desc: "Easily create, manage, and use virtual cards for safer online payments and digital marketing ad spend.",
    },
    {
      title: "Bank Security",
      desc: "Enterprise-grade SOC-2 security protocols safeguarding your customer data and financial transactions.",
    },
    {
      title: "Global Transfers",
      desc: "Scale multi-channel campaigns and transactions globally with transparent reporting and automated workflows.",
    },
  ];

  return (
    <section id="how-we-help" className="py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 font-sans">
      
      {/* Top Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>Benefits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-[-0.035em] leading-[1.12]">
            Why PET Makes Your <br />
            Finances & Marketing Effortless
          </h2>
        </div>

        <div className="lg:col-span-4 flex items-center lg:justify-end">
          <p className="text-slate-500 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal tracking-[-0.01em]">
            Experience the future of money management and customer acquisition with powerful tools designed to simplify payments.
          </p>
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Concentric Arc Radar Network Card */}
        <div className="lg:col-span-5 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
          
          <div className="relative h-60 w-full flex items-center justify-center my-2">
            <div className="absolute w-64 h-64 rounded-full border border-slate-300 border-dashed" />
            <div className="absolute w-48 h-48 rounded-full border border-slate-300 border-dashed" />
            <div className="absolute w-32 h-32 rounded-full border border-blue-400 border-dashed" />
            
            <div className="absolute top-4 left-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-slate-700">
              <Lock className="w-4 h-4 text-blue-600" />
            </div>

            <div className="absolute top-10 right-8 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-slate-700">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>

            <div className="absolute bottom-8 left-12 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-slate-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
            </div>

            <div className="absolute bottom-6 right-10 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-slate-700">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white p-2 border border-slate-200 shadow-md flex items-center justify-center">
              <Image src="/PET_Blue.png" alt="PET" width={44} height={44} className="object-contain" />
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Trusted Banking & Growth Network
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal tracking-[-0.01em]">
              Connect seamlessly with global banks for secure and reliable money management. Easily create & use virtual cards for safer online payments and digital marketing ad spend.
            </p>
          </div>

        </div>

        {/* Right Column: 3 Horizontal Stacked Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          {horizontalCards.map((card) => (
            <div
              key={card.title}
              onClick={onOpenAudit}
              className="bg-slate-50/70 hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer group"
            >
              <div className="sm:w-1/3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {card.title}
                </h3>
              </div>

              <div className="sm:w-2/3">
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal tracking-[-0.01em]">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="p-4 bg-blue-50/80 rounded-2xl border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-tight">
              <Check className="w-4 h-4 text-blue-600" />
              <span>Available for all verified enterprise clients</span>
            </div>
            <button
              onClick={onOpenAudit}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm tracking-tight"
            >
              Explore Capabilities →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
