"use client";

import React from "react";
import Image from "next/image";
import { AwardIcon, SwimIcon, MapPinIcon, CheckCircleIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

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
    <section className="relative bg-gradient-to-b from-[#EFFAFF] via-[#F4FBFE] to-white text-[#0A2540] overflow-hidden py-14 lg:py-20 border-b border-sky-100">
      {/* Subtle Aquatic Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-xs">
              <AwardIcon className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Olympic-Mentored Swimming Academy · Dubai &amp; Abu Dhabi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.12]">
              From First Splashes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-teal-600 to-cyan-600">
                to Olympic Podiums.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Mentored by 4-time Olympic Coach &amp; Dronacharya Awardee Pradeep Kumar. Structured swimming pathways from water-safety foundations to international competitive squads across 9 premium pool facilities in Dubai and Abu Dhabi.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAssessment}
                className="shadow-lg shadow-teal-600/20 text-base py-3.5 px-6 font-bold flex items-center justify-center gap-2"
              >
                <SwimIcon className="w-5 h-5" />
                Book Swimming Assessment
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToVenues}
                className="bg-white hover:bg-sky-50 text-sky-900 border-2 border-sky-200 hover:border-sky-300 text-base py-3.5 px-6 font-semibold flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPinIcon className="w-5 h-5 text-sky-600" />
                Explore 9 Pool Locations
              </Button>
            </div>

            {/* Verified Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-sky-100 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                <span>4-Time Olympic Coach</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>9 Temperature-Controlled Pools</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                <span>ASCA Certified Coaches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Swimming Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-sky-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src="/images/hero/hero-banner.jpg"
                alt="Swimmer in crystal blue swimming pool at Aqua Nation Sports Academy UAE"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              
              {/* Aquatic overlay tint for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent" />

              {/* Floating Badge: Olympic Mentorship */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-sky-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
                  <AwardIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Dronacharya Mentorship</p>
                  <p className="text-[11px] text-slate-500 font-medium">Head Coach Pradeep Kumar (4x Olympic Coach)</p>
                </div>
              </div>

              {/* Top-Right Pill: Active Facilities */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 shadow-md border border-sky-100 flex items-center gap-1.5 text-xs font-bold text-sky-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>9 Campuses Active</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
