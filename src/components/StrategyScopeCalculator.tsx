"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, ShieldCheck, Check, Sparkles, Users, Zap, Award } from "lucide-react";

interface ScopeCalculatorProps {
  onOpenBriefing: () => void;
}

export default function StrategyScopeCalculator({ onOpenBriefing }: ScopeCalculatorProps) {
  const [monthlySpend, setMonthlySpend] = useState<number>(50); // $50k to $500k slider
  const [focusArea, setFocusArea] = useState<"paid" | "brand" | "full">("full");
  const [targetMultiplier, setTargetMultiplier] = useState<"3x" | "5x" | "10x">("5x");

  // Dynamic calculations
  const calculateOutput = () => {
    const spendVal = monthlySpend * 1000;
    let team = ["Senior Growth Architect", "Performance PPC Lead", "Conversion Copywriter"];
    let sprintDays = 14;
    let expectedROAS = "3.8x - 5.2x";
    let scopeTier = "Enterprise Scale Sprint";

    if (focusArea === "brand") {
      team.push("3D Visual Designer", "Design Systems Engineer");
      scopeTier = "Brand Identity & Web Systems Sprint";
    } else if (focusArea === "paid") {
      team.push("Paid Media Buyer", "Multi-Touch Data Analyst");
      scopeTier = "Performance Acquisition Sprint";
    } else {
      team.push("3D Visual Lead", "Lifecycle Marketing Specialist", "Attribution Data Engineer");
      scopeTier = "Full-Funnel Enterprise Accelerator";
      sprintDays = 14;
      expectedROAS = "4.2x - 6.5x";
    }

    return {
      monthlyArr: `$${(spendVal * 12 / 1000000).toFixed(1)}M`,
      scopeTier,
      team,
      sprintDays,
      expectedROAS,
    };
  };

  const output = calculateOutput();

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Modeling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Estimate Your Custom Growth <span className="blue-gradient-text">Sprint Scope</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-navy-600 font-normal">
            Select your monthly growth parameters to model team allocation, sprint velocity, and projected ROAS efficiency.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card-soft">
          
          {/* Left Column: Interactive Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Control 1: Monthly Ad Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-navy-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-brand-600" />
                  <span>Monthly Growth / Media Budget:</span>
                </label>
                <span className="text-xl font-black text-brand-600 font-space">
                  ${monthlySpend}k / mo
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
              <div className="flex justify-between text-[11px] font-bold text-navy-500 mt-2">
                <span>$10k / mo</span>
                <span>$100k / mo</span>
                <span>$250k+ / mo</span>
              </div>
            </div>

            {/* Control 2: Primary Focus Area Toggle */}
            <div>
              <label className="text-sm font-bold text-navy-900 block mb-3">
                Primary Growth Focus Area:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "paid", label: "Paid Performance" },
                  { key: "brand", label: "Brand System & Web" },
                  { key: "full", label: "Full-Funnel Scale" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setFocusArea(item.key as any)}
                    className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                      focusArea === item.key
                        ? "bg-brand-600 text-white border-brand-600 shadow-glow-subtle"
                        : "bg-white text-navy-800 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Growth Target Multiplier */}
            <div>
              <label className="text-sm font-bold text-navy-900 block mb-3">
                Target ARR Multiplier (12-Month Horizon):
              </label>
              <div className="flex gap-3">
                {(["3x", "5x", "10x"] as const).map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setTargetMultiplier(mult)}
                    className={`flex-1 py-3 rounded-xl border text-xs font-extrabold transition-all font-space ${
                      targetMultiplier === mult
                        ? "bg-brand-600 text-white border-brand-600 shadow-glow-subtle"
                        : "bg-white text-navy-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {mult} Scale Target
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Output Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-brand-600/20 shadow-card-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Modeled Output</span>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200">
                  Sprint Guaranteed
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-semibold text-navy-500">Recommended Scope Tier</span>
                  <div className="text-lg font-bold text-navy-900 mt-0.5">{output.scopeTier}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-semibold text-navy-500 block">Sprint Velocity</span>
                    <span className="text-base font-bold text-brand-600 font-space">{output.sprintDays} Days</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-semibold text-navy-500 block">Projected ROAS</span>
                    <span className="text-base font-bold text-emerald-600 font-space">{output.expectedROAS}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-navy-500 block mb-2">Dedicated Growth Squad</span>
                  <div className="space-y-1.5">
                    {output.team.map((member, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-navy-800">
                        <Check className="w-3.5 h-3.5 text-brand-600" />
                        <span>{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBriefing}
              className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-glow-subtle transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              <span>Lock In Scope Briefing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
