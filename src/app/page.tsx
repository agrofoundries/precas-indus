"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import TechStackSection from "@/components/TechStackSection";
import CapabilitiesBento from "@/components/CapabilitiesBento";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import RoiMetricsStrip from "@/components/RoiMetricsStrip";
import GrowthFramework from "@/components/GrowthFramework";
import ExecutiveProof from "@/components/ExecutiveProof";
import StrategyScopeCalculator from "@/components/StrategyScopeCalculator";
import FooterConsultation from "@/components/FooterConsultation";
import ExecutiveBriefingModal from "@/components/ExecutiveBriefingModal";

export default function Home() {
  const [isBriefingModalOpen, setIsBriefingModalOpen] = useState(false);

  const handleOpenBriefing = () => {
    setIsBriefingModalOpen(true);
  };

  const handleCloseBriefing = () => {
    setIsBriefingModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-navy-900 selection:bg-brand-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. Sticky Glassmorphic Navigation Bar */}
      <Navbar onOpenBriefing={handleOpenBriefing} />

      {/* 2. High-Impact Hero Section */}
      <Hero onOpenBriefing={handleOpenBriefing} />

      {/* 3. Enterprise Client Trust & Technology Marquee */}
      <TrustMarquee />

      {/* 4. Full Digital Agency Services Matrix (SEO, Website Dev, PPC, CRO, Email, Data Analytics) */}
      <ServicesGrid />

      {/* 5. Dedicated Agency Technologies Showcase (WordPress, PHP, Laravel, React, Next.js, SEO) */}
      <TechStackSection />

      {/* 6. Strategic Capabilities & System Architecture */}
      <CapabilitiesBento />

      {/* 7. Portfolio Work Showcase & Agency Layouts */}
      <CaseStudiesGrid />

      {/* 8. Execution Quality & Engineering Standards */}
      <RoiMetricsStrip />

      {/* 9. Proprietary 4-Phase Growth Framework */}
      <GrowthFramework />

      {/* 10. Client Feedback & Review Proof */}
      <ExecutiveProof />

      {/* 11. Interactive Strategy Cost & Scope Calculator */}
      <StrategyScopeCalculator onOpenBriefing={handleOpenBriefing} />

      {/* 12. Modern High-Conversion Consultation Footer */}
      <FooterConsultation onOpenBriefing={handleOpenBriefing} />

      {/* Interactive Executive Briefing Modal */}
      <ExecutiveBriefingModal isOpen={isBriefingModalOpen} onClose={handleCloseBriefing} />

    </main>
  );
}
