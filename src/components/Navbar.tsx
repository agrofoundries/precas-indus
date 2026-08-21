"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Calendar, ShieldCheck, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenBriefing: () => void;
}

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Work", href: "#work" },
  { name: "Growth System", href: "#systems" },
  { name: "Standards", href: "#roi-metrics" },
];

export default function Navbar({ onOpenBriefing }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-3 glass-nav shadow-card-soft" : "py-5 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo only (Crossed-out side text removed) */}
        <a href="#" className="flex items-center group focus:outline-none">
          <div className="relative h-9 w-auto flex items-center">
            <Image
              src="/images/PET_Blue.png"
              alt="PET Digital Marketing Agency Logo"
              width={160}
              height={40}
              priority
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Center: Clean menu items with animated active underlines */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 ${
                  isActive ? "text-brand-600 font-bold" : "text-navy-900/75 hover:text-navy-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Interactive CTA button with glow hover */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-navy-700 font-semibold px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span className="hidden lg:inline text-[11px]">SOC2 Type II</span>
          </div>

          <button
            onClick={onOpenBriefing}
            className="relative group overflow-hidden rounded-full bg-brand-600 px-5 py-2.5 text-xs font-bold text-white shadow-glow-subtle hover:shadow-glow-blue hover:bg-brand-500 transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              Schedule Executive Briefing
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-navy-800 rounded-lg hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between py-2.5 text-sm font-semibold text-navy-900 hover:text-brand-600 border-b border-slate-100"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBriefing();
                  }}
                  className="w-full py-3 bg-brand-600 text-white font-bold text-sm rounded-xl shadow-glow-subtle flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Executive Briefing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
