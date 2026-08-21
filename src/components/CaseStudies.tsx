import React from "react";
import { TrendingUp, ArrowUpRight, CheckCircle2, Star, Sparkles } from "lucide-react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export default function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const cases = [
    {
      client: "FinVantage USA",
      industry: "Fintech & B2B SaaS",
      location: "San Francisco, CA",
      result: "+420% Organic Pipeline",
      roas: "14.2x ROAS",
      desc: "Re-architected enterprise SEO taxonomy and rebuilt web application in Next.js, driving 180k monthly organic visits and reducing CPA from $85 to $22.",
      tags: ["Technical SEO", "Next.js Web Dev", "Google Ads"],
      timeline: "6 Months",
    },
    {
      client: "Aura Home Living",
      industry: "eCommerce DTC Brand",
      location: "Austin, TX",
      result: "$4.2M Added Revenue",
      roas: "9.8x ROAS",
      desc: "Scaled Meta and Google Shopping campaigns with hyper-targeted audience modeling, dynamic remarketing funnels, and checkout CRO.",
      tags: ["Paid Social", "Google Shopping", "CRO"],
      timeline: "90 Days",
    },
    {
      client: "Apex Health Partners",
      industry: "Healthcare & MedTech",
      location: "Boston, MA",
      result: "+280% Qualified Patient Inquiries",
      roas: "Verified Lead Gen",
      desc: "Local and national high-intent SEO domination combined with HIPAA-compliant attribution tracking and landing page split-testing.",
      tags: ["Healthcare SEO", "GA4 Attribution", "Landing Pages"],
      timeline: "4 Months",
    },
  ];

  return (
    <section id="case-studies" className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-800 text-xs font-bold border border-brand-200">
            <TrendingUp className="w-3.5 h-3.5 text-brand-600" />
            <span>Proven US Client Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-950 tracking-tight leading-tight">
            Real Revenue. Zero Vanity Metrics.
          </h2>
        </div>

        <p className="text-surface-600 text-sm sm:text-base max-w-md">
          Explore how we help ambitious US companies consistently outrank legacy competitors and build scalable revenue engines.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item, idx) => (
          <div
            key={item.client}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-200 shadow-xl shadow-brand-900/5 hover:border-brand-400 hover:shadow-brand-500/10 transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-100">
                <div>
                  <span className="text-xs font-bold text-brand-600">{item.industry}</span>
                  <h3 className="text-lg font-black text-brand-950">{item.client}</h3>
                </div>
                <span className="text-[10px] font-bold text-surface-500 bg-surface-100 px-2.5 py-1 rounded-full">
                  {item.location}
                </span>
              </div>

              {/* Big Result Highlight */}
              <div className="p-4 bg-brand-50 rounded-2xl border border-brand-200/80">
                <div className="text-2xl font-black text-brand-950">{item.result}</div>
                <div className="text-xs font-bold text-brand-700 mt-0.5 flex items-center justify-between">
                  <span>{item.roas}</span>
                  <span className="text-surface-500 font-normal">Sprint: {item.timeline}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-[10px] font-semibold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenAudit}
              className="pt-3 border-t border-surface-100 w-full flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700 transition-colors"
            >
              <span>View In-Depth Breakdown</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
