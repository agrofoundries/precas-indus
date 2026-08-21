"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Mail, MapPin, CheckCircle, Lock, Phone } from "lucide-react";

interface FooterProps {
  onOpenBriefing: () => void;
}

export default function FooterConsultation({ onOpenBriefing }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-brand-900 via-brand-950 to-brand-900 text-white pt-20 pb-12 relative overflow-hidden border-t border-brand-800">
      {/* Background Blue Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-600/25 via-brand-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top High-Conversion Consultation Box */}
        <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden border border-brand-500/30">
          <div className="absolute inset-0 bg-micro-grid opacity-20 pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block mb-4">
              Executive Consultation
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Modernize Your <span className="text-blue-200">Growth Engine?</span>
            </h2>

            <p className="mt-4 text-blue-100 text-base sm:text-lg max-w-xl mx-auto">
              Request a zero-commitment 30-minute growth sprint audit with our Principal Growth Architects.
            </p>

            {/* Embedded Consultation Input Bar */}
            <div className="mt-8 max-w-md mx-auto">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Executive Briefing Reserved! We will contact you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 bg-white/15 p-2 rounded-2xl border border-white/20 backdrop-blur-md">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-blue-200 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter work email (e.g. name@company.com)"
                      className="w-full pl-10 pr-4 py-3 bg-transparent text-white placeholder-blue-200/70 text-xs font-semibold focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-brand-700 font-bold text-xs rounded-xl hover:bg-blue-50 transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <span>Request Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-blue-200 font-semibold">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-300" /> Strict NDA Protection</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-blue-200" /> SOC2 Compliant</span>
            </div>
          </div>
        </div>

        {/* Corporate Footer Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-brand-800/80">
          
          {/* Logo & Corporate Info (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-auto flex items-center bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="/images/PET_Blue.png"
                  alt="PET Logo"
                  width={150}
                  height={38}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-blue-100/80 leading-relaxed max-w-sm">
              PET Digital Growth Architecture is a premier US corporate agency engineering high-velocity paid performance, visual brand systems, and closed-loop data attribution.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800/80 text-xs font-bold text-blue-100 border border-brand-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOC2 Type II Certified</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li><a href="#services" className="hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Engineering</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">PPC Performance Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          {/* Company Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio Work</a></li>
              <li><a href="#tech-stack" className="hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#roi-metrics" className="hover:text-white transition-colors">Quality Standards</a></li>
              <li><button onClick={onOpenBriefing} className="hover:text-white transition-colors text-left">Executive Briefing</button></li>
            </ul>
          </div>

          {/* Office Locations (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Corporate Locations</h4>
            <div className="space-y-3 text-xs text-blue-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">New York Headquarters</span>
                  <span>55 Hudson Yards, Floor 32, New York, NY 10001</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">San Francisco Hub</span>
                  <span>500 Howard Street, Suite 400, San Francisco, CA 94105</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-blue-200/70 gap-4">
          <p>© {new Date().getFullYear()} PET Performance Digital Agency LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Security & SOC2</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
