"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Lock } from "lucide-react";
import confetti from "canvas-confetti";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$5,000 - $15,000 / mo",
    services: [] as string[],
  });

  if (!isOpen) return null;

  const toggleService = (svc: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0052FF', '#38BDF8', '#60A5FA', '#FFFFFF']
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/60 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-brand-100 p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-100 hover:bg-surface-200 text-surface-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-lg bg-brand-50 p-1 border border-brand-100">
                  <Image src="/PET_Blue.png" alt="PET Agency" width={32} height={32} className="object-contain" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Free 30-Day Growth Blueprint</span>
              </div>
              <h3 className="text-2xl font-extrabold text-brand-950">
                Claim Your Custom Marketing Audit
              </h3>
              <p className="text-xs sm:text-sm text-surface-600">
                Our US senior growth directors will analyze your SEO, Google & Meta Ads, and UI/UX funnel within 24 hours. Zero sales pitch, 100% actionable insight.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-surface-700">Your Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-surface-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-brand-950 placeholder:text-surface-400 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-surface-700">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-surface-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-brand-950 placeholder:text-surface-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-surface-700">Company Website URL</label>
                <input
                  required
                  type="text"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-brand-950 placeholder:text-surface-400 outline-none transition-all"
                />
              </div>

              {/* Service Selection Pills */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-surface-700">What services are you exploring?</label>
                <div className="grid grid-cols-2 gap-2">
                  {["SEO Optimization", "Google & Meta Ads", "Next.js Web Design", "CRO & Analytics"].map((svc) => {
                    const isSelected = formData.services.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all ${
                          isSelected
                            ? "bg-brand-50 border-brand-500 text-brand-700 font-bold"
                            : "bg-surface-50 border-surface-200 text-surface-600 hover:bg-white"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "} {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Ad/Growth Budget */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-surface-700">Estimated Monthly Growth Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-300 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 text-xs sm:text-sm text-brand-950 outline-none bg-white transition-all"
                >
                  <option>$3,000 - $7,500 / month</option>
                  <option>$7,500 - $20,000 / month</option>
                  <option>$20,000 - $50,000 / month</option>
                  <option>$50,000+ / month (Enterprise)</option>
                </select>
              </div>

              {/* CTA Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-brand-600/30 transition-all duration-200 group"
              >
                <Sparkles className="w-4 h-4 text-brand-200" />
                <span>Submit & Generate Growth Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-surface-400 pt-1">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-brand-600" /> 256-Bit Encrypted Data
                </span>
                <span>•</span>
                <span>No Spam Guarantee</span>
              </div>
            </form>

          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 border border-brand-200 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-brand-950">Proposal Request Received!</h3>
            <p className="text-sm text-surface-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-brand-900">{formData.name}</strong>. Our US Growth Director is reviewing <strong>{formData.website}</strong> and will deliver your comprehensive digital marketing audit within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 max-w-sm mx-auto text-xs text-brand-800 space-y-1">
              <div><strong>Direct Support Line:</strong> +1 (800) 492-7381</div>
              <div><strong>Email:</strong> growth@petdigital.com</div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 transition-colors"
            >
              Back to Overview
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
