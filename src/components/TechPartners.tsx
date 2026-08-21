import React from "react";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { 
  GoogleAdsLogo, 
  MetaLogo, 
  HubSpotLogo, 
  ShopifyLogo, 
  NextJsLogo, 
  SEMrushLogo, 
  GoogleAnalyticsLogo,
  StripeLogo
} from "./TechLogos";

export default function TechPartners() {
  const partners = [
    { name: "Google Premier Partner", role: "Search & YouTube Ads", Logo: GoogleAdsLogo },
    { name: "Meta Certified Agency", role: "Paid Social & Instagram", Logo: MetaLogo },
    { name: "HubSpot Diamond Partner", role: "CRM & Funnel Workflows", Logo: HubSpotLogo },
    { name: "Shopify Plus Partner", role: "High-Volume eCommerce", Logo: ShopifyLogo },
    { name: "Next.js & Vercel Pro", role: "Ultra-Fast Web Apps", Logo: NextJsLogo },
    { name: "SEMrush Certified", role: "Enterprise SEO Audits", Logo: SEMrushLogo },
    { name: "Google Analytics 4", role: "Closed-Loop Attribution", Logo: GoogleAnalyticsLogo },
    { name: "Stripe Billing & CRO", role: "Frictionless Payments", Logo: StripeLogo },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-200 shadow-xl shadow-brand-900/5">
        
        {/* Title Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-surface-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-brand-700 block">
                Enterprise Certified Technology Stack
              </span>
              <h3 className="text-sm sm:text-base font-black text-brand-950">
                Official Agency Partnerships & Direct Engineering Integrations
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Top 3% US Performance Agency Tier</span>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-6">
          {partners.map((p) => {
            const Logo = p.Logo;
            return (
              <div 
                key={p.name}
                className="bg-surface-50 hover:bg-white p-3.5 rounded-2xl border border-surface-200 hover:border-brand-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  <Logo className="w-7 h-7" />
                </div>
                <span className="text-xs font-black text-brand-950 group-hover:text-brand-600 transition-colors leading-tight">
                  {p.name.split(" ")[0]}
                </span>
                <span className="text-[10px] text-surface-500 font-semibold mt-0.5 leading-tight">
                  {p.role}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
