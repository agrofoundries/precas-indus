"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, ArrowUpRight, DollarSign, Users, Target } from "lucide-react";

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export default function RoiCalculator({ onOpenAudit }: RoiCalculatorProps) {
  const [monthlyVisitors, setMonthlyVisitors] = useState(15000);
  const [currentConversionRate, setCurrentConversionRate] = useState(2.0);
  const [avgDealValue, setAvgDealValue] = useState(1200);

  // Calculations
  const currentMonthlyLeads = (monthlyVisitors * (currentConversionRate / 100));
  const currentMonthlyRevenue = currentMonthlyLeads * avgDealValue;

  // Projected with PET Agency optimization (Estimated 2.8x organic boost and +65% conversion lift)
  const projectedVisitors = Math.round(monthlyVisitors * 2.4);
  const projectedConversionRate = Number((currentConversionRate * 1.6).toFixed(1));
  const projectedMonthlyLeads = Math.round(projectedVisitors * (projectedConversionRate / 100));
  const projectedMonthlyRevenue = Math.round(projectedMonthlyLeads * avgDealValue);
  const revenueGain = projectedMonthlyRevenue - currentMonthlyRevenue;

  return (
    <section id="calculator" className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 rounded-[40px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-brand-700/50">
        
        {/* Decorative Grid & Glows */}
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Headline & Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Interactive Growth Estimator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Estimate Your Revenue Growth with PET Agency
            </h2>

            <p className="text-brand-100 text-sm leading-relaxed">
              Adjust your current numbers below to see the projected 90-day pipeline increase with our precision SEO and conversion funnels.
            </p>

            {/* Sliders */}
            <div className="space-y-5 pt-2">
              
              {/* Slider 1: Monthly Website Traffic */}
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-brand-100 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-brand-cyan" /> Monthly Visitors
                  </span>
                  <span className="text-white text-sm">{monthlyVisitors.toLocaleString()} / mo</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="150000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-brand-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
              </div>

              {/* Slider 2: Current Conversion Rate */}
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-brand-100 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-brand-cyan" /> Current Conversion Rate
                  </span>
                  <span className="text-white text-sm">{currentConversionRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="8.0"
                  step="0.1"
                  value={currentConversionRate}
                  onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-brand-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
              </div>

              {/* Slider 3: Average Customer Deal Value */}
              <div className="bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-brand-100 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-brand-cyan" /> Avg. Deal / Customer Value
                  </span>
                  <span className="text-white text-sm">${avgDealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-brand-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
              </div>

            </div>
          </div>

          {/* Right: Projected Output Card */}
          <div className="lg:col-span-6 bg-white text-brand-950 p-6 sm:p-8 rounded-3xl shadow-2xl border border-brand-100 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-surface-100">
              <div>
                <span className="text-xs font-bold text-surface-500 uppercase tracking-wider block">Estimated Projection</span>
                <h3 className="text-lg font-black text-brand-950">90-Day Full-Funnel Impact</h3>
              </div>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-extrabold rounded-full border border-brand-200">
                +{(revenueGain / (currentMonthlyRevenue || 1) * 100).toFixed(0)}% Lift
              </span>
            </div>

            {/* Metric Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface-50 rounded-2xl border border-surface-200/80">
                <span className="text-xs text-surface-500 font-medium block">Current Monthly Run-Rate</span>
                <span className="text-xl sm:text-2xl font-black text-surface-700 mt-1 block">
                  ${Math.round(currentMonthlyRevenue).toLocaleString()}
                </span>
                <span className="text-[11px] text-surface-400 mt-0.5 block">{Math.round(currentMonthlyLeads)} deals/mo</span>
              </div>

              <div className="p-4 bg-brand-50 rounded-2xl border border-brand-200">
                <span className="text-xs text-brand-800 font-bold block">Projected with PET</span>
                <span className="text-xl sm:text-2xl font-black text-brand-600 mt-1 block">
                  ${Math.round(projectedMonthlyRevenue).toLocaleString()}
                </span>
                <span className="text-[11px] text-brand-700 mt-0.5 block font-semibold">{projectedMonthlyLeads} deals/mo</span>
              </div>
            </div>

            {/* Estimated Additional Annual Revenue */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-900 to-brand-800 text-white space-y-1">
              <span className="text-xs font-semibold text-brand-200 uppercase tracking-wider block">
                Estimated Annual Revenue Growth
              </span>
              <div className="text-3xl sm:text-4xl font-black text-brand-cyan">
                +${Math.round(revenueGain * 12).toLocaleString()} / yr
              </div>
              <p className="text-[11px] text-brand-100 pt-1">
                *Based on proven average client performance across SEO rankings and CRO improvements.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenAudit}
              className="w-full py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-brand-600/30 transition-all duration-200 group"
            >
              <span>Unlock Your Customized Growth Blueprint</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
