"use client";

import React from "react";
import Image from "next/image";
import { AwardIcon, SwimIcon, MapPinIcon, WhatsAppIcon, ShieldCheckIcon } from "@/components/ui/icons";

interface HeroSectionProps {
  onOpenAssessment: () => void;
}

export function HeroSection({ onOpenAssessment }: HeroSectionProps) {
  const scrollToVenues = () => {
    const el = document.getElementById("venue-discovery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[85svh] lg:min-h-[92svh] flex items-center overflow-hidden bg-[#0A2540]">
      {/* 1. Full-Bleed Edge-to-Edge Authentic Swimming Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="Swimmer training in crystal-clear Olympic competition swimming pool at Aqua Nation Sports Academy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-center transform scale-[1.02] transition-transform duration-1000 ease-out"
        />

        {/* 2. Refined Aquatic Caustic Light Layer (Sunlight pool refraction) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen animate-caustic"
          style={{
            backgroundImage: `radial-gradient(ellipse at 35% 45%, rgba(45, 212, 191, 0.45) 0%, rgba(2, 132, 199, 0.25) 45%, transparent 75%)`,
          }}
          aria-hidden="true"
        />

        {/* 3. Subtle Animated Caustic Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay animate-caustic-drift"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 40%),
                              radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.6) 0%, transparent 50%)`,
          }}
          aria-hidden="true"
        />

        {/* 4. Art-Directed Light Scrim for Flawless Typography Legibility */}
        {/* On Desktop: Left-to-right soft white frost that feathers out so the swimmer remains fully visible on the right */}
        {/* On Mobile: Bottom/top soft gradient protection */}
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:from-white/95 sm:via-white/75 sm:to-transparent lg:w-[68%]"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/90 via-transparent to-transparent sm:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Stage */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-7 text-left">
          
          {/* Institutional Concept Overline */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 shadow-xs text-xs font-bold tracking-widest uppercase text-[#0A2540]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
            </span>
            <AwardIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">The Art of Swimming · The Pursuit of Excellence</span>
          </div>

          {/* Cinematic Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight text-[#0A2540] leading-[1.06]">
            From First Splashes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#14B8A6]">
              to Olympic Podiums.
            </span>
          </h1>

          {/* Restrained, Credible Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal max-w-xl">
            Mentored by 4-time Olympic Coach &amp; Dronacharya Awardee <strong className="text-[#0A2540] font-bold">Pradeep Kumar</strong>. Structured swimming development from early water confidence to elite squads across 9 temperature-regulated venues in Dubai and Abu Dhabi.
          </p>

          {/* Action Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={onOpenAssessment}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0D9488] hover:bg-[#0f766e] text-white font-extrabold rounded-2xl text-base shadow-xl shadow-teal-900/15 hover:shadow-2xl hover:shadow-teal-900/25 active:scale-[0.98] transition-all cursor-pointer"
            >
              <SwimIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Book Swimming Assessment</span>
              <span className="text-teal-200 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              type="button"
              onClick={scrollToVenues}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/90 hover:bg-white text-[#0A2540] hover:text-sky-700 font-bold rounded-2xl text-base border border-sky-200/90 shadow-sm hover:shadow-md active:scale-[0.98] backdrop-blur-md transition-all cursor-pointer"
            >
              <MapPinIcon className="w-4 h-4 text-sky-600" />
              <span>Explore Our Locations</span>
            </button>
          </div>

          {/* Admissions WhatsApp Quick Line (Restrained) */}
          <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 font-medium">
            <span>Direct Admissions Desk:</span>
            <a
              href="https://wa.me/971562444207?text=Hi%20ANSA%20Admissions%2C%20I%20would%20like%20to%20inquire%20about%20swimming%20programmes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-800 hover:text-teal-950 font-bold underline underline-offset-2 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span>+971 56 244 4207 (WhatsApp)</span>
            </a>
          </div>

        </div>
      </div>

      {/* Floating Bottom Editorial Ribbon: Academy Benchmarks */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-sky-100/80 bg-white/85 backdrop-blur-md py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <strong className="text-[#0A2540]">28°C–30°C</strong>
              <span className="text-slate-500">Year-Round Temperature Control</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
              <strong className="text-[#0A2540]">Max 1:6</strong>
              <span className="text-slate-500">Early Years Foundation Ratio</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <AwardIcon className="w-4 h-4 text-amber-600" />
              <strong className="text-[#0A2540]">Dronacharya Mentorship</strong>
              <span className="text-slate-500">4-Time Olympic Coach Pradeep Kumar</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-sky-600" />
              <strong className="text-[#0A2540]">9 Pool Campuses</strong>
              <span className="text-slate-500">Dubai &amp; Abu Dhabi</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
