"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, ShieldCheck, ArrowRight, Building, Mail, User, Phone, Sparkles } from "lucide-react";

interface ExecutiveBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExecutiveBriefingModal({ isOpen, onClose }: ExecutiveBriefingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    monthlyBudget: "$50,000 - $100,000",
    primaryFocus: "Paid Performance Architecture",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-950/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 overflow-hidden shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-600 to-brand-800 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Executive Strategy Session</span>
              </div>

              <h3 className="text-2xl font-extrabold">Schedule Executive Briefing</h3>
              <p className="text-blue-100 text-xs mt-1">30-minute tailored growth sprint architecture review with Senior Partners.</p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-navy-900">Briefing Reserved!</h4>
                  <p className="text-navy-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-navy-900">{formData.fullName}</span>. Our Senior Growth Lead has received your brief for <span className="font-bold text-brand-600">{formData.companyName}</span> and will send a calendar invite within 2 business hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-8 py-3 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-glow-subtle hover:bg-brand-500 transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-navy-900 block mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:border-brand-600 focus:outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy-900 block mb-1">Work Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="e.g. sjenkins@company.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:border-brand-600 focus:outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-navy-900 block mb-1">Company Name</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. ScaleFlow Systems"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:border-brand-600 focus:outline-none bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-navy-900 block mb-1">Monthly Growth Budget</label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:border-brand-600 focus:outline-none bg-slate-50/50"
                      >
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy-900 block mb-1">Primary Growth Objective</label>
                    <select
                      value={formData.primaryFocus}
                      onChange={(e) => setFormData({ ...formData, primaryFocus: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-navy-900 focus:border-brand-600 focus:outline-none bg-slate-50/50"
                    >
                      <option>Paid Performance Architecture</option>
                      <option>Brand Identity & Visual Systems</option>
                      <option>Full-Funnel Lifecycle Marketing</option>
                      <option>Marketing Data & Attribution Infrastructure</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-glow-subtle transition-all flex items-center justify-center gap-2"
                    >
                      <span>Confirm & Schedule Briefing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-semibold text-navy-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Protected under strict NDA. Zero sales pressure.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
