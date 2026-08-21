import React from "react";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { GoogleAdsLogo, MetaLogo, HubSpotLogo, NextJsLogo } from "./TechLogos";

interface FooterProps {
  onOpenAudit: () => void;
}

export default function Footer({ onOpenAudit }: FooterProps) {
  return (
    <footer className="bg-brand-950 text-white pt-16 pb-12 border-t border-brand-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 rounded-3xl p-8 sm:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-extrabold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-brand-200" />
              <span>Direct US Agency Engagement</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Turn Clicks Into Verified Deals?
            </h3>
            <p className="text-xs sm:text-base text-brand-100 max-w-xl">
              Get a custom 30-day performance roadmap tailored specifically for your target audience, search landscape, and conversion funnels.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="flex-shrink-0 px-8 py-4 rounded-xl bg-white text-brand-950 hover:bg-brand-50 font-black text-sm sm:text-base transition-all shadow-2xl flex items-center gap-2 group"
          >
            <span>Request Free Growth Proposal</span>
            <ArrowUpRight className="w-4 h-4 text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-6">
          
          {/* Col 1: Pure Image Logo & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-14 w-44 rounded-2xl bg-white p-2.5 flex items-center justify-center shadow-lg ring-2 ring-brand-400">
              <Image src="/PET_Blue.png" alt="Company Logo" width={176} height={56} className="object-contain w-full h-full" />
            </div>

            <p className="text-xs sm:text-sm text-brand-100/90 leading-relaxed max-w-sm">
              We are an elite US performance digital marketing platform helping SaaS, eCommerce, and enterprise brands scale revenue with precision SEO, Google & Meta Ads, and high-converting web architecture.
            </p>

            <div className="space-y-2 text-xs text-brand-200 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Headquarters: 401 Congress Ave, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>Toll-Free USA: +1 (800) 492-7381</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>growth@agencyplatform.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-200">Core Services</h4>
            <ul className="space-y-2 text-xs text-brand-100/80 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Precision Technical SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Ads & Search Intent</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meta & Paid Social Scaling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Next.js Web Application Dev</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversion Rate Opt. (CRO)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GA4 & Attribution Setup</a></li>
            </ul>
          </div>

          {/* Col 3: Platform & Proof */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-200">Platform</h4>
            <ul className="space-y-2 text-xs text-brand-100/80 font-medium">
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Growth Engine</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Platform vs. Traditional Agency</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Simulator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Directory</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Certifications */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-brand-200">Certified Partners</h4>
            <div className="space-y-2.5 text-xs text-brand-100/90">
              <div className="flex items-center gap-2">
                <GoogleAdsLogo className="w-5 h-5" />
                <span className="font-bold">Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <MetaLogo className="w-5 h-5" />
                <span className="font-bold">Meta Certified Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <HubSpotLogo className="w-5 h-5" />
                <span className="font-bold">HubSpot Diamond Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <NextJsLogo className="w-5 h-5" />
                <span className="font-bold">Next.js Enterprise Dev</span>
              </div>
              <p className="text-[11px] text-brand-200/70 pt-2">
                Protected by strict US privacy laws & SOC-2 compliance.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-brand-900 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-200/70 gap-4 font-medium">
          <div>
            © {new Date().getFullYear()} Digital Growth Platform LLC. All rights reserved. Registered in Texas & Delaware, USA.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
