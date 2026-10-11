"use client";

import React from "react";
import { AwardIcon, SwimIcon, ShieldCheckIcon, ClockIcon, WhatsAppIcon, MapPinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Decorative Aquatic Radial Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Proof, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide uppercase">
              <AwardIcon className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Olympian-Led Swimming Academy · Dubai &amp; Abu Dhabi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              From First Splashes <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-200">
                to Olympic Podiums.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Mentored by Dronacharya Awardee &amp; 4-time Olympic Coach <strong>Pradeep Kumar Sreedharan</strong>. Scientific, safe, and structured swimming pathways across <strong>9 verified temperature-controlled pool facilities</strong> in Dubai and Abu Dhabi.
            </p>

            {/* Verified Operational Facts */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <Badge variant="verified">9 Temperature-Controlled Pools</Badge>
              <Badge variant="verified">Strict Max 1:6 Ratio in Aqua Bubble</Badge>
              <Badge variant="verified">Certified Lady Coaches at All Centres</Badge>
              <Badge variant="verified">100% CPR &amp; Lifeguard Certified</Badge>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenAssessment}
                className="shadow-lg shadow-teal-950/40"
              >
                Book Swimming Assessment →
              </Button>

              <button
                type="button"
                onClick={scrollToVenues}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <MapPinIcon className="w-4 h-4 text-teal-400" />
                <span>Explore 9 UAE Pools</span>
              </button>

              <a
                href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20lessons%20and%20assessment%20timings."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Direct Admissions WhatsApp chat"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Admissions WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <ClockIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Training Tuesday to Sunday · Mondays weekly rest day · All 12 months year-round</span>
            </p>
          </div>

          {/* Right Column: Head Coach Heritage Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">
                    Consulting CEO &amp; Head Coach
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Pradeep Kumar Sreedharan
                  </h3>
                </div>
                <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs font-bold">
                  Dronacharya Award
                </div>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <AwardIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">4-Time Olympic Coach</p>
                    <p className="text-xs text-slate-400">National Swimming Coach of India with 35+ years shaping world-class athletes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <SwimIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Mentored Multiple Olympians</p>
                    <p className="text-xs text-slate-400">Coached 2-time Olympian Sajan Prakash, Nisha Millet, and Asian Games medalists.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">DIAC Award Recognized</p>
                    <p className="text-xs text-slate-400">Honoured by Dubai International Academic City for contributions to UAE sports development.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>9 UAE Pool Facilities</span>
                <span>15+ Certified Coaches</span>
                <span>12 Months Year-Round</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
