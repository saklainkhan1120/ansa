"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppIcon, SwimIcon, ClockIcon, CheckCircleIcon } from "@/components/ui/icons";

interface ClosingCTAProps {
  onOpenAssessment: () => void;
}

export function ClosingCTA({ onOpenAssessment }: ClosingCTAProps) {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0A2540] text-white">
      {/* 1. Full-Bleed Authentic Aquatic Photography Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/facilities/all-ages-pool.jpeg"
          alt="Aqua Nation Sports Academy swimming pool facility"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* 2. Layered Aquatic Atmospheric Shimmer & Pool Blue Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/85 to-[#0284C7]/60 pointer-events-none" 
          aria-hidden="true"
        />

        {/* 3. Ambient Caustic Lighting Reflection */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen animate-caustic"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 40%, rgba(45, 212, 191, 0.45) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Overline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-widest uppercase">
          <SwimIcon className="w-4 h-4 text-teal-300" />
          <span>Begin Your Swimmer&apos;s Journey</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Ready to Step Onto the Pool Deck?
          </h2>

          <p className="text-sky-100 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Book an individual swimming evaluation at your nearest Dubai or Abu Dhabi pool centre. Our coaches assess water comfort, determine the ideal coach ratio, and establish clear milestones.
          </p>
        </div>

        {/* 3 Step Transparent Pathway Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left pt-2">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
            <span className="text-teal-300 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 01</span>
            <strong className="block text-sm font-bold text-white mb-1">Select Nearest Pool</strong>
            <span className="text-xs text-sky-100/90 leading-relaxed block">
              Choose from 9 facilities across Dubai &amp; Abu Dhabi.
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
            <span className="text-teal-300 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 02</span>
            <strong className="block text-sm font-bold text-white mb-1">In-Water Assessment</strong>
            <span className="text-xs text-sky-100/90 leading-relaxed block">
              Certified coaches evaluate breath control &amp; strokes.
            </span>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
            <span className="text-teal-300 font-bold block mb-1 uppercase tracking-wider text-[11px]">Step 03</span>
            <strong className="block text-sm font-bold text-white mb-1">Confirm Schedule</strong>
            <span className="text-xs text-sky-100/90 leading-relaxed block">
              Reserve slots on our Tue–Sun year-round timetable.
            </span>
          </div>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 bg-[#0D9488] hover:bg-[#0f766e] text-white font-extrabold rounded-2xl text-base shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all cursor-pointer"
          >
            <SwimIcon className="w-5 h-5" />
            <span>Book Swimming Assessment</span>
            <span className="text-teal-200">→</span>
          </button>

          <a
            href="https://wa.me/971562444207?text=Hi%20ANSA%20Admissions%2C%20I%20would%20like%20to%20book%20a%20swimming%20assessment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-white/95 hover:bg-white text-[#0A2540] font-extrabold rounded-2xl text-base shadow-lg hover:shadow-xl active:scale-[0.98] backdrop-blur-md transition-all"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span>Admissions WhatsApp (+971 56 244 4207)</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-sky-200 pt-3">
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-teal-300" />
            <span>12 Months Year-Round Training</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-teal-300" />
            <span>Regulated 28°C–30°C Water Temperature</span>
          </div>
        </div>

      </div>
    </section>
  );
}
