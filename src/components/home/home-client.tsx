"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/home/hero-section";
import { TrustSection } from "@/components/home/trust-section";
import { LevelFinder } from "@/components/home/level-finder";
import { ProgrammePathway } from "@/components/home/programme-pathway";
import { VenueDiscovery } from "@/components/home/venue-discovery";
import { CoachingLegacy } from "@/components/home/coaching-legacy";
import { ChampionsSection } from "@/components/home/champions-section";
import { PoliciesSection } from "@/components/home/policies-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { GuidesSection } from "@/components/home/guides-section";
import { FAQAccordion } from "@/components/home/faq-accordion";
import { ClosingCTA } from "@/components/home/closing-cta";
import { AssessmentModal } from "@/components/forms/assessment-modal";
import { StickyLeadBar } from "@/components/layout/sticky-lead-bar";

export function HomeClient() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [defaultProgram, setDefaultProgram] = useState<string | undefined>(undefined);
  const [defaultLocation, setDefaultLocation] = useState<string | undefined>(undefined);

  const handleOpenAssessment = (program?: string, location?: string) => {
    setDefaultProgram(program);
    setDefaultLocation(location);
    setAssessmentModalOpen(true);
  };

  const handleCloseAssessment = () => {
    setAssessmentModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenAssessment={() => handleOpenAssessment()} />

      {/* 2. Institutional Trust Credentials */}
      <TrustSection />

      {/* 3. Interactive Swimmer Level Finder */}
      <LevelFinder onSelectProgram={(prog) => handleOpenAssessment(prog)} />

      {/* 4. Complete 7-Programme Pathway */}
      <ProgrammePathway onOpenAssessmentForProgram={(prog) => handleOpenAssessment(prog)} />

      {/* 5. Venue & Pool Discovery */}
      <VenueDiscovery onOpenAssessmentForLocation={(loc) => handleOpenAssessment(undefined, loc)} />

      {/* 6. Coaching Legacy & Olympic Mentorship */}
      <CoachingLegacy />

      {/* 7. Champion Athletes & High-Performance Hall */}
      <ChampionsSection />

      {/* 8. Parent Trust, Safety & Operational Policies */}
      <PoliciesSection />

      {/* 9. Authentic Parent & Swimmer Reviews */}
      <ReviewsSection />

      {/* 10. Swimming Guides & Parent Education */}
      <GuidesSection />

      {/* 11. Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* 12. Final High-Conversion Closing Call-to-Action */}
      <ClosingCTA onOpenAssessment={() => handleOpenAssessment()} />

      {/* Mobile Sticky Quick Lead Bar */}
      <StickyLeadBar onOpenAssessment={() => handleOpenAssessment()} />

      {/* Central Assessment & Enquiry Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={handleCloseAssessment}
        defaultProgramId={defaultProgram}
        defaultLocationId={defaultLocation}
      />
    </div>
  );
}
