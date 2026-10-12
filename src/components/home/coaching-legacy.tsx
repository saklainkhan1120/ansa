"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AwardIcon, ShieldCheckIcon, CheckCircleIcon, UsersIcon, StarIcon, SwimIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { COACHES, LADY_COACHES, LEADERSHIP_COACHES } from "@/data/coaches";

interface CoachingLegacyProps {
  onOpenAssessment?: () => void;
}

export function CoachingLegacy({ onOpenAssessment }: CoachingLegacyProps) {
  const [activeTab, setActiveTab] = useState<"all" | "leadership" | "lady_coaches" | "squad">("all");

  const filteredCoaches = COACHES.filter((coach) => {
    if (activeTab === "all") return true;
    if (activeTab === "leadership") return coach.isLeadership;
    if (activeTab === "lady_coaches") return coach.isLadyCoach;
    if (activeTab === "squad") {
      return (
        coach.accreditations.some((a) => a.includes("ASCA Level 5") || a.includes("NIS") || a.includes("SFI Level 2") || a.includes("Dryland"))
      );
    }
    return true;
  });

  return (
    <section id="coaches" className="py-20 lg:py-28 bg-white border-b border-sky-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Badge variant="teal">Olympic-Grade Pedagogy</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
            Coaching Faculty &amp; Mentorship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Led by National Swimming Coach of India Pradeep Kumar Sreedharan. Every ANSA coach is certified across international sporting federations and 100% qualified in CPR, AED, and water safety.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Faculty ({COACHES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("leadership")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "leadership"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Olympic Leadership ({LEADERSHIP_COACHES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("lady_coaches")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "lady_coaches"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Certified Lady Coaches ({LADY_COACHES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("squad")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeTab === "squad"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Competitive Squad Faculty
            </button>
          </div>
        </div>

        {/* Head Coach Pradeep Kumar Spotlight Hero Card */}
        <div className="bg-gradient-to-br from-[#E0F5FC]/80 via-white to-[#EFFAFF] border-2 border-sky-200 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl shadow-sky-950/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <AwardIcon className="w-3.5 h-3.5 text-amber-700" />
                  Dronacharya Awardee (Govt. of India)
                </span>
                <span className="px-3 py-1 rounded-lg bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <StarIcon className="w-3.5 h-3.5 text-teal-700" />
                  4-Time Olympic Coach
                </span>
                <span className="px-3 py-1 rounded-lg bg-sky-100 border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  Eklavya Awardee
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540]">
                  Pradeep Kumar Sreedharan
                </h3>
                <p className="text-xs sm:text-sm text-teal-700 font-bold uppercase tracking-wider mt-1">
                  Consulting CEO &amp; Head Coach · Aqua Nation Sports Academy LLC
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                With over 35 years of coaching distinction, Mr. Pradeep Kumar has coached India and UAE&apos;s most celebrated aquatic talents from grassroots learners to Olympic finals (including 2-time Olympian Sajan Prakash in Rio 2016 &amp; Tokyo 2020, Vedaant Madhavan, and Tanish George Mathew). His scientific biomechanics methodology forms the core curriculum of every ANSA session.
              </p>

              {/* Verified Mentee Chips */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Notable Athletes Mentored:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Sajan Prakash (2-Time Olympian)",
                    "Vedaant Madhavan (International Medallist)",
                    "Tanish George Mathew (Asian Games 2023)",
                    "Nisha Millet (Olympian)"
                  ].map((athlete, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white border border-sky-200 text-slate-800 font-semibold px-2.5 py-1 rounded-lg shadow-2xs"
                    >
                      ✓ {athlete}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Trust Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-800 font-medium">
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>35+ Years Coaching</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>National Head Coach</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>ASCA Level 5 Certified</span>
                </div>
              </div>
            </div>

            {/* Coach Pradeep Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-100 group">
                <Image
                  src="/images/coaching/pradeep-dronacharya.png"
                  alt="Coach Pradeep Kumar receiving Dronacharya Award from President of India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-bold">Receiving the Dronacharya National Award</p>
                  <p className="text-[11px] text-sky-200">Highest Coaching Honour conferred by the President of India</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Lady Coaches Available Feature Showcase Banner with Authentic Asset */}
        <div className="bg-gradient-to-br from-[#E0F7F6] via-white to-[#F0FAFF] border-2 border-teal-200 rounded-3xl p-6 sm:p-8 mb-16 shadow-lg shadow-teal-950/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                <UsersIcon className="w-3.5 h-3.5 text-teal-700" />
                <span>Cultural Comfort &amp; Gentle Supervision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                Dedicated Lady Swimming Instructors Across the UAE
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
                ANSA provides certified female coaches across Dubai and Abu Dhabi for young girls, toddlers, and ladies-only groups desiring cultural privacy and gentle reassurance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {LADY_COACHES.map((lc) => (
                  <div key={lc.id} className="bg-white p-3 rounded-xl border border-teal-200 shadow-2xs">
                    <p className="text-xs font-bold text-[#0A2540]">{lc.name}</p>
                    <p className="text-[11px] text-teal-700 font-semibold">{lc.designation}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{lc.experienceYears}+ Years Exp.</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-300 text-teal-900 text-xs font-bold">
                  <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
                  100% CPR, AED &amp; Female Lifeguard Certified
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-teal-100">
                <Image
                  src="/images/coaching/lady-coach-banner.png"
                  alt="ANSA Certified Lady Coaches with young swimmers at swimming pool"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Faculty Grid & Mobile Swipeable Container */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
              Verified Academy Coaching Faculty
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Showing {filteredCoaches.length} certified professionals with international credentials
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-lg">
            100% Lifeguard &amp; CPR Certified
          </span>
        </div>

        {/* Responsive Grid with Touch-Smooth Mobile Horizontal Scroll Capability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredCoaches.map((coach) => {
            return (
              <div
                key={coach.id}
                className="bg-white border border-slate-200 rounded-3xl p-5 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Coach Photo Frame */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100 shadow-2xs">
                    {coach.photoPath ? (
                      <Image
                        src={coach.photoPath}
                        alt={coach.name + " - Swimming Coach at ANSA UAE"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-teal-100 text-[#0A2540]">
                        <SwimIcon className="w-12 h-12 text-teal-600 mb-1" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">ANSA Certified</span>
                      </div>
                    )}

                    {/* Lady Coach Badge Overlay */}
                    {coach.isLadyCoach && (
                      <div className="absolute top-2.5 right-2.5 bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                        <UsersIcon className="w-3 h-3" />
                        <span>Lady Coach</span>
                      </div>
                    )}

                    {/* Experience Badge */}
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {coach.experienceYears}+ Years Exp.
                    </div>
                  </div>

                  {/* Coach Details */}
                  <h5 className="font-bold text-base text-[#0A2540] group-hover:text-teal-700 transition-colors leading-snug">
                    {coach.name}
                  </h5>
                  <p className="text-xs text-teal-700 font-semibold mt-0.5">
                    {coach.designation}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {coach.bioSummary}
                  </p>
                </div>

                {/* Accreditations & Booking Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {coach.accreditations.slice(0, 2).map((acc, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>

                  {onOpenAssessment && (
                    <button
                      type="button"
                      onClick={onOpenAssessment}
                      className="w-full py-2 px-3 text-xs font-bold text-teal-700 hover:text-white bg-teal-50 hover:bg-teal-600 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <SwimIcon className="w-3.5 h-3.5" />
                      <span>Book Assessment</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
