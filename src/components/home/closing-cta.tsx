"use client";

import React from "react";
import { WhatsAppIcon, SwimIcon, ClockIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ClosingCTAProps {
  onOpenAssessment: () => void;
}

export function ClosingCTA({ onOpenAssessment }: ClosingCTAProps) {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <Badge variant="teal">Begin Your Swimmer&apos;s Journey</Badge>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Step Onto the Pool Deck?
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Book an individual swimming evaluation at your nearest Dubai or Abu Dhabi pool centre. Our certified coaches will assess your swimmer&apos;s comfort, recommend the ideal class ratio, and answer all your questions.
        </p>

        {/* 3 Step Pathway Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-slate-300 pt-2 text-left">
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1">Step 1</span>
            <strong>Select Nearest Pool</strong> from our 9 UAE locations.
          </div>
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1">Step 2</span>
            <strong>In-Water Assessment</strong> with certified coaches.
          </div>
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
            <span className="text-teal-400 font-bold block mb-1">Step 3</span>
            <strong>Confirm Level &amp; Slot</strong> from Tue to Sun schedule.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenAssessment}
            className="w-full sm:w-auto shadow-lg shadow-teal-950/50"
          >
            <SwimIcon className="w-5 h-5 mr-1" />
            Book Swimming Assessment →
          </Button>

          <a
            href="https://wa.me/971562444207?text=Hi%20ANSA%20team%2C%20I%20would%20like%20to%20book%20a%20swimming%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Admissions WhatsApp (+971 56 244 4207)
          </a>
        </div>

        <p className="text-xs text-slate-400 flex items-center justify-center gap-2 pt-2">
          <ClockIcon className="w-3.5 h-3.5 text-teal-400" />
          <span>Training 12 months year-round across Dubai &amp; Abu Dhabi</span>
        </p>
      </div>
    </section>
  );
}
