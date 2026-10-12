"use client";

import React from "react";
import Image from "next/image";
import { AwardIcon, SwimIcon, MapPinIcon, CheckCircleIcon, WhatsAppIcon, ShieldCheckIcon, StarIcon } from "@/components/ui/icons";

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
    <section className="relative bg-gradient-to-b from-[#EBF8FE] via-[#F4FBFE] to-white text-[#0A2540] overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-sky-100">
      {/* Aquatic Ambient Background Caustics */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-200/35 rounded-full blur-3xl pointer-events-none animate-caustic" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Wave Contours in Background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Value Prop, Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              <AwardIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Olympic-Mentored Swimming Academy · Dubai &amp; Abu Dhabi</span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#0A2540] leading-[1.1]">
              From First Splashes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-cyan-600">
                to Olympic Podiums.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Led by National Coach of India &amp; 4-time Olympic Coach <strong className="text-slate-800 font-semibold">Pradeep Kumar (Dronacharya Awardee)</strong>. Structured, safe, and certified aquatic pathways from early water comfort (max 1:6 ratio) to elite international squads across 9 world-class venues.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenAssessment}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-extrabold rounded-2xl text-base shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/35 active:scale-[0.98] transition-all cursor-pointer"
              >
                <SwimIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book Swimming Assessment</span>
                <span className="text-teal-200 group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="https://wa.me/971562444207?text=Hi%20ANSA%20Admissions%2C%20I%20would%20like%20to%20book%20a%20swimming%20assessment%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-2xl text-sm shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp (Avg. 5 min reply)</span>
              </a>
            </div>

            {/* Location Jump Link */}
            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToVenues}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors cursor-pointer"
              >
                <MapPinIcon className="w-3.5 h-3.5 text-sky-600" />
                <span>Explore 9 Pool Facilities across Dubai &amp; Abu Dhabi ↓</span>
              </button>
            </div>

            {/* Verified Trust Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-sky-100 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                <span>4-Time Olympic Coach</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>9 Regulated Pools (28°C–30°C)</span>
              </div>
              <div className="flex items-center gap-2 font-medium col-span-2 sm:col-span-1">
                <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Certified Lady Coaches Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sky-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
              
              {/* Authentic High-Res Banner */}
              <Image
                src="/images/hero/hero-banner.jpg"
                alt="Swimmer in crystal blue swimming pool at Aqua Nation Sports Academy UAE"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Aquatic Atmospheric Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/65 via-transparent to-transparent pointer-events-none" />

              {/* Floating Top Right: Temperature Regulation Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-lg border border-sky-100 flex items-center gap-2 text-xs font-bold text-sky-950">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>28°C – 30°C Year-Round</span>
              </div>

              {/* Floating Top Left: Ratio Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-md border border-teal-100 flex items-center gap-1.5 text-xs font-bold text-teal-900">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-600" />
                <span>Max 1:6 in Aqua Bubble</span>
              </div>

              {/* Floating Bottom Card: Olympic Mentorship */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <AwardIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      <StarIcon className="w-3 h-3 fill-amber-500" />
                      <span>Dronacharya National Honour</span>
                    </div>
                    <p className="text-xs font-bold text-[#0A2540] truncate">
                      Coach Pradeep Kumar Mentorship
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      Mentored 2-Time Olympian Sajan Prakash
                    </p>
                  </div>
                </div>

                <div className="shrink-0 hidden sm:block">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 px-2 py-1 rounded-md">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
