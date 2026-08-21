"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Globe, 
  TrendingUp, 
  Share2, 
  Target, 
  Mail, 
  BarChart4, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code2, 
  Layers, 
  ShieldCheck,
  MousePointerClick
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

const agencyServices: ServiceCategory[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    badge: "Page 1 Organic Ranking",
    shortDesc: "Dominate Google search results with data-backed technical SEO, keyword authority, and high-quality backlink building.",
    fullDesc: "We engineer enterprise SEO strategies that drive sustained, non-paid organic growth. From technical Core Web Vitals audits to high-converting keyword content pipelines, we position your brand at the top of high-intent search queries.",
    icon: Search,
    color: "text-brand-600",
    bgColor: "bg-blue-50",
    borderColor: "border-brand-600/20",
    deliverables: [
      "Technical Core Web Vitals & Speed Audit",
      "High-Intent Keyword Research & Strategy",
      "On-Page Content Optimization & Schema",
      "Authority Backlink Acquisition & Digital PR",
      "Local & International SEO Domination",
      "Monthly Keyword Ranking & Revenue Reports"
    ],
    metrics: [
      { label: "Avg. Organic Traffic Lift", value: "+240%" },
      { label: "Page 1 Keyword Ratio", value: "84.2%" },
      { label: "Lighthouse Speed Score", value: "99/100" }
    ]
  },
  {
    id: "web-dev",
    title: "Custom Website Development & UX",
    badge: "Next.js & React 18+",
    shortDesc: "Bespoke, ultra-fast enterprise websites and web apps engineered for high conversion rates and seamless mobile experience.",
    fullDesc: "We build custom, modern web applications that load in under 100ms. Combining responsive UI/UX design with scalable Next.js App Router code, we turn passive visitors into qualified leads and buying customers.",
    icon: Globe,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    deliverables: [
      "Next.js 14+ / React 18+ Custom Codebase",
      "Responsive UX/UI Design & Figma Tokens",
      "E-Commerce & Headless Platform Integration",
      "Conversion Rate Optimization (CRO) Layouts",
      "Enterprise CMS & Headless Content Setup",
      "SSL Security & SOC2 Infrastructure"
    ],
    metrics: [
      { label: "Average Load Speed", value: "<100ms" },
      { label: "Conversion Rate (CVR) Lift", value: "+42.8%" },
      { label: "Mobile Performance Score", value: "98/100" }
    ]
  },
  {
    id: "ppc",
    title: "Performance PPC & Paid Media",
    badge: "Multi-Channel Ads",
    shortDesc: "High-ROI paid acquisition campaigns across Google Ads, Meta, LinkedIn, and Programmatic display networks.",
    fullDesc: "Scale revenue predictably with multi-channel paid ad campaigns. We combine AI-driven bid management with continuous creative A/B testing to lower customer acquisition costs (CAC) and maximize return on ad spend (ROAS).",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    deliverables: [
      "Google Search & Shopping Ads Management",
      "LinkedIn B2B Account-Based Marketing (ABM)",
      "Meta (Facebook & Instagram) Video Scale",
      "Programmatic Retargeting & Display Ads",
      "Ad Copywriting & Motion Graphic Design",
      "Real-Time Bid Optimization & Budget Scale"
    ],
    metrics: [
      { label: "Blended PPC ROAS", value: "3.8x - 5.2x" },
      { label: "CAC Reduction Average", value: "-41.5%" },
      { label: "Ad Click-Through Rate", value: "6.42%" }
    ]
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    badge: "Data-Driven Testing",
    shortDesc: "Turn existing traffic into qualified sales through scientific A/B testing, heatmap analysis, and friction reduction.",
    fullDesc: "Don't let valuable web traffic leak through unoptimized funnels. We deploy heatmaps, user session recordings, and multivariate A/B testing to optimize landing pages and checkout flows for maximum conversion velocity.",
    icon: Target,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    deliverables: [
      "Friction & Heatmap User Behavior Analysis",
      "A/B & Multivariate Split Testing",
      "Landing Page Copywriting & Layout CRO",
      "Form Field & Checkout Optimization",
      "Personalized User Journey Mapping",
      "Statistical Significance Verification"
    ],
    metrics: [
      { label: "Avg. Funnel Conversion Lift", value: "+54.0%" },
      { label: "Bounce Rate Reduction", value: "-32.4%" },
      { label: "Lead Form Completion", value: "4.85%" }
    ]
  },
  {
    id: "email",
    title: "Lifecycle Email & SMS Automation",
    badge: "Automated Revenue",
    shortDesc: "Automated email sequences, SMS triggers, lead scoring, and customer retention workflows that maximize LTV.",
    fullDesc: "Turn single-time buyers into loyal brand advocates. We build automated email and SMS drip campaigns using Klaviyo and HubSpot, driving repeat purchases and scaling customer lifetime value (LTV).",
    icon: Mail,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    deliverables: [
      "Klaviyo & HubSpot Flow Architecture",
      "High-Converting Email Design & Copywriting",
      "Behavioral SMS Automated Triggers",
      "Customer Lead Scoring & Segmentation",
      "Win-Back & Cart Abandonment Workflows",
      "VIP Retention & Loyalty Programs"
    ],
    metrics: [
      { label: "Email Attributed Revenue", value: "34.8%" },
      { label: "Average Email Open Rate", value: "48.2%" },
      { label: "Repeat Purchase Lift", value: "+62.0%" }
    ]
  },
  {
    id: "analytics",
    title: "Marketing Data & Attribution",
    badge: "Closed-Loop Analytics",
    shortDesc: "Unified analytics dashboards tracking every single dollar spent from initial ad impression to CRM closed revenue.",
    fullDesc: "Eliminate marketing attribution guesswork. We connect GA4, Google Tag Manager, CRM data, and paid ad networks into a single real-time executive dashboard so you know exactly which campaigns drive profit.",
    icon: BarChart4,
    color: "text-navy-900",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-300",
    deliverables: [
      "GA4 & Google Tag Manager Setup",
      "CRM (Salesforce / HubSpot) Closed-Loop Sync",
      "Multi-Touch Attribution Model Building",
      "Custom Real-Time Executive Dashboards",
      "Server-Side Conversion Tracking (CAPI)",
      "ROAS, LTV & CAC Profit Metrics"
    ],
    metrics: [
      { label: "Attribution Leakage", value: "0.0%" },
      { label: "CRM Sync Accuracy", value: "100%" },
      { label: "Real-Time Reporting", value: "24/7" }
    ]
  }
];

export default function ServicesGrid() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("seo");

  const currentService = agencyServices.find((s) => s.id === selectedServiceId) || agencyServices[0];

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Line Height and Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-brand-600/20 text-brand-700 text-xs font-extrabold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Service Digital Marketing Agency Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.2]">
            Comprehensive <span className="blue-gradient-text">Digital Growth Services</span>
          </h2>

          <p className="text-base sm:text-lg text-navy-700 font-normal leading-relaxed max-w-2xl mx-auto tracking-normal">
            Everything your brand needs to capture market share—from search engine optimization and high-speed web apps to multi-channel PPC campaigns and closed-loop data analytics.
          </p>
        </div>

        {/* Interactive Service Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {agencyServices.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServiceId === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-brand-600 text-white shadow-glow-subtle scale-105"
                    : "bg-white text-navy-800 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-white" : service.color}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${currentService.bgColor} border border-slate-200 flex items-center justify-center`}>
                  <currentService.icon className={`w-6 h-6 ${currentService.color}`} />
                </div>

                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 font-mono">
                    {currentService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-snug">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-navy-700 leading-relaxed font-normal">
                {currentService.fullDesc}
              </p>

              {/* Core Deliverables List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-500">
                  Key Service Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-navy-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metrics & Proof Box (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-bold text-navy-800 uppercase tracking-wider">Verified Service Benchmarks</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Top 1% Agency Performance
                </span>
              </div>

              <div className="space-y-4">
                {currentService.metrics.map((m, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-semibold text-navy-600">{m.label}</span>
                    <span className="text-xl font-extrabold text-navy-900 font-space">{m.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#roi-metrics"
                className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-glow-subtle transition-all flex items-center justify-center gap-2 group"
              >
                <span>View Full ROI Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 6 Quick Service Grid Overview Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencyServices.map((srv) => {
            const Icon = srv.icon;
            const isSelected = selectedServiceId === srv.id;

            return (
              <div
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`p-6 rounded-3xl bg-white border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-brand-600 shadow-card-hover"
                    : "border-slate-200/90 hover:border-brand-600/30 hover:shadow-card-soft"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${srv.bgColor} flex items-center justify-center border border-slate-100`}>
                      <Icon className={`w-5 h-5 ${srv.color}`} />
                    </div>
                    <span className="text-[10px] font-bold text-navy-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-navy-600 leading-relaxed line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
