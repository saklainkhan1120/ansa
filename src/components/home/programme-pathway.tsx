"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon, SwimIcon, WhatsAppIcon, ShieldCheckIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { PROGRAMMES } from "@/data/programmes";

interface ProgrammePathwayProps {
  onOpenAssessmentForProgram: (programName: string) => void;
}

const PROGRAMME_IMAGES: Record<string, string> = {
  "aqua-bubble": "/images/programmes/aqua-bubble.jpg",
  "aqua-star": "/images/programmes/aqua-star.jpg",
  "aqua-tech": "/images/programmes/aqua-tech.jpg",
  "aqua-swift": "/images/programmes/aqua-swift.jpg",
  "aqua-rapid": "/images/hero/training-session.jpeg",
  "aqua-fitness": "/images/facilities/all-ages-pool.jpeg",
  "aqua-adult": "/images/programmes/aqua-adult.jpeg",
};

export function ProgrammePathway({ onOpenAssessmentForProgram }: ProgrammePathwayProps) {
  const [filterCategory, setFilterCategory] = useState<"all" | "kids" | "squad" | "adult">("all");

  const filteredProgrammes = PROGRAMMES.filter((p) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "kids") return p.category === "learn_to_swim" || p.category === "stroke_development";
    if (filterCategory === "squad") return p.category === "competitive_squad";
    if (filterCategory === "adult") return p.category === "adult_fitness";
    return true;
  });

  return (
    <section id="programmes" className="py-20 lg:py-28 bg-white border-b border-sky-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="teal">Structured Curriculum</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              The 7-Tier Swimming Pathway
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Every programme has clear entry criteria, defined coach-to-student ratios, and verifiable milestone benchmarks before advancement.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="inline-flex p-1.5 bg-slate-100/80 rounded-2xl border border-sky-200 self-start md:self-auto shadow-sm gap-1">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={
                "px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer " +
                (filterCategory === "all" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white")
              }
            >
              All Pathways (7)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("kids")}
              className={
                "px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer " +
                (filterCategory === "kids" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white")
              }
            >
              Learn-to-Swim &amp; Strokes
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("squad")}
              className={
                "px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer " +
                (filterCategory === "squad" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white")
              }
            >
              Competitive Squads
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("adult")}
              className={
                "px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer " +
                (filterCategory === "adult" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900 hover:bg-white")
              }
            >
              Adults &amp; Fitness
            </button>
          </div>
        </div>

        {/* 7 Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProgrammes.map((prog) => {
            const imageSrc = PROGRAMME_IMAGES[prog.id] || "/images/hero/hero-banner.jpg";
            return (
              <div
                key={prog.id}
                className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-2xl hover:border-teal-400 hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Authentic Programme Photography Header */}
                  <div className="relative w-full h-52 bg-sky-50 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={prog.name + " swimming lessons at Aqua Nation Sports Academy"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/20 to-transparent" />

                    {/* Overlaid Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-teal-200 shadow-xs">
                        {prog.durationMinutes} Mins
                      </span>
                      {prog.inWaterCoach && (
                        <span className="text-[10px] font-bold text-sky-950 bg-sky-100/95 backdrop-blur-md px-2 py-1 rounded-lg border border-sky-300 shadow-xs">
                          In-Water Coach
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold text-sky-950 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
                        Ratio: {prog.coachRatio}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold text-sky-200">{prog.targetAge}</p>
                      <h3 className="text-xl font-bold leading-tight drop-shadow-xs">{prog.name}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {prog.summary}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-600" />
                        <span>Core Exit Milestones:</span>
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {prog.exitMilestones.slice(0, 3).map((m, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircleIcon className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenAssessmentForProgram(prog.name)}
                    className="flex-1 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <SwimIcon className="w-4 h-4" />
                    <span>Book Assessment</span>
                  </button>

                  <a
                    href={`https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(prog.name)}%20swimming%20programme.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center shrink-0"
                    title={`Enquire about ${prog.name} on WhatsApp`}
                    aria-label={`Enquire about ${prog.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
