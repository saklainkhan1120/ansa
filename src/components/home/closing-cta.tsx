"use client";

import React from "react";
import { WhatsAppIcon, SwimIcon, ClockIcon } from "@/components/ui/icons";

interface ClosingCTAProps {
  onOpenAssessment: () => void;
}

export function ClosingCTA({ onOpenAssessment }: ClosingCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-sky-600 via-teal-600 to-cyan-700 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center space-y-6">
          
          {/* Subtle Ambient Aquatic Glows */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wide uppercase">
              <SwimIcon className="w-4 h-4" />
              <span>Begin Your Swimmer&apos;s Journey Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Step Onto the Pool Deck?
            </h2>

            <p className="text-sky-100 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Book an individual swimming assessment at your nearest Dubai or Abu Dhabi pool centre. Our certified coaches will evaluate your swimmer&apos;s comfort, recommend the ideal class ratio, and answer all your questions.
            </p>
          </div>

          {/* 3 Step Pathway Summary */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto text-xs text-white pt-2 text-left">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="text-cyan-200 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 1</span>
              <strong className="block text-sm font-bold text-white mb-0.5">Select Nearest Campus</strong>
              <span className="text-sky-100">Choose from our 9 pool facilities in Dubai or Abu Dhabi.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="text-cyan-200 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 2</span>
              <strong className="block text-sm font-bold text-white mb-0.5">In-Water Evaluation</strong>
              <span className="text-sky-100">Certified coaches assess water confidence &amp; strokes.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <span className="text-cyan-200 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 3</span>
              <strong className="block text-sm font-bold text-white mb-0.5">Confirm Schedule</strong>
              <span className="text-sky-100">Choose convenient slots on our Tue–Sun timetable.</span>
            </div>
          </div>

          {/* Action Button Group */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-800 hover:bg-sky-50 font-extrabold rounded-2xl text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <SwimIcon className="w-5 h-5 text-teal-600" />
              Book Swimming Assessment
            </button>

            <a
              href="https://wa.me/971562444207?text=Hi%20ANSA%20team%2C%20I%20would%20like%20to%20book%20a%20swimming%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold rounded-2xl text-base shadow-lg hover:shadow-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Admissions WhatsApp (+971 56 244 4207)
            </a>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-2 text-xs text-sky-100 pt-2">
            <ClockIcon className="w-4 h-4 text-cyan-200" />
            <span>Training 12 months year-round across Dubai &amp; Abu Dhabi</span>
          </div>

        </div>
      </div>
    </section>
  );
}
