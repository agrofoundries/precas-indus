"use client";

import React from "react";
import Image from "next/image";
import { 
  Globe2, 
  Wallet, 
  UserCheck
} from "lucide-react";

interface TrustBentoGridProps {
  onOpenAudit: () => void;
}

export default function TrustBentoGrid({ onOpenAudit }: TrustBentoGridProps) {
  return (
    <section id="why-us" className="py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 font-sans">
      
      {/* Top Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
        <div className="lg:col-span-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-tight">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>Why Choose PET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-[-0.035em] leading-[1.12]">
            Why Millions of <br />
            Users Trust PET
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm lg:text-[15px] max-w-xl leading-relaxed font-normal tracking-[-0.01em]">
            Built with enterprise-level security and designed for ease of use, we empower individuals and businesses to scale digital marketing and acquisition.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
          <div className="text-5xl sm:text-6xl font-extrabold text-blue-600 tracking-[-0.04em]">
            93.84%
          </div>
          <div className="text-xs text-slate-500 font-semibold mt-1 tracking-tight">
            Instant Conversions PET
          </div>
        </div>
      </div>

      {/* 3 Bento Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        
        {/* Column 1: Active Customers & Real Mobile Photo */}
        <div className="lg:col-span-4 bg-slate-50/70 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/70">
              <span className="text-xs font-bold text-slate-900 tracking-tight">Active Customers</span>
              <span className="text-xs text-slate-500 font-medium tracking-tight">12,300 customers</span>
            </div>

            <div className="mt-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Wallet className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Total Savings / Pipeline</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">$34,240,000.90</span>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                +24%
              </span>
            </div>
          </div>

          {/* Real Photo with Donut Ring */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-slate-200 shadow-md group">
            <Image
              src="/strategist_mobile_ui.jpg"
              alt="Strategist managing live marketing dashboard"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2.5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-600"
                    strokeDasharray="78, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-slate-900">78%</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">Growth Rate</span>
                <span className="text-xs font-bold text-slate-900 tracking-tight">78% Retention</span>
              </div>
            </div>
          </div>

        </div>

        {/* Column 2: Dedicated Support */}
        <div className="lg:col-span-4 bg-slate-50/70 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm">
              <Globe2 className="w-5 h-5" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Dedicated Support</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed tracking-[-0.01em]">
                Whether it&apos;s midnight or midday, our multilingual growth support team is always available to assist you.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all text-center tracking-tight"
              >
                Customer Support / Audit
              </button>
            </div>

            <ul className="space-y-2.5 pt-2 text-xs text-slate-600 font-medium tracking-tight">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>24/7 Live Chat Support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Multilingual Marketing Team</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Priority Assistance for Premium Users</span>
              </li>
            </ul>
          </div>

          <div className="text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-200 tracking-tight">
            Dedicated US Account Director Included
          </div>
        </div>

        {/* Column 3: Faster Transfers */}
        <div className="lg:col-span-4 bg-slate-50/70 rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Faster Transfers, Global Access</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed tracking-[-0.01em]">
                  Send and receive conversions instantly across 200+ channels and markets with competitive acquisition rates.
                </p>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-200 text-slate-700 shadow-sm flex-shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Sparkline Graph */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="h-32 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 240 90" preserveAspectRatio="none">
                  <path
                    d="M0,45 C30,10 60,70 90,20 C120,60 150,15 180,45 C210,10 240,30 240,30"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,75 C35,80 70,45 105,65 C140,35 175,70 210,40 C225,50 240,45 240,45"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2.5"
                  />
                  <circle cx="90" cy="20" r="3" fill="#2563EB" />
                  <circle cx="150" cy="15" r="3" fill="#2563EB" />
                  <circle cx="210" cy="40" r="3" fill="#2563EB" />
                </svg>

                <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-semibold tracking-tight">
                  $18,400 Target
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Total Balance</span>
                  <span className="text-lg font-bold text-slate-900 tracking-tight">$980,000</span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg tracking-tight">
                  Instant Access
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-semibold flex items-center justify-between tracking-tight">
            <span>Client Acquisition Target</span>
            <span className="text-slate-900 font-bold">100% Met</span>
          </div>
        </div>

      </div>

    </section>
  );
}
