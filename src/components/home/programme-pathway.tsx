"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon, SwimIcon, WhatsAppIcon, ShieldCheckIcon } from "@/components/ui/icons";
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

const STAGES = [
  { id: "all", label: "Full Journey (7)", sub: "Complete Progression" },
  { id: "early", label: "01. Early Years", sub: "Water Comfort & Safety" },
  { id: "tech", label: "02. Technical", sub: "4-Stroke Biomechanics" },
  { id: "squad", label: "03. Competitive", sub: "Aerobic & Galas" },
  { id: "adult", label: "04. Adults & Fit", sub: "Lifelong Swimming" },
];

export function ProgrammePathway({ onOpenAssessmentForProgram }: ProgrammePathwayProps) {
  const [activeStage, setActiveStage] = useState<string>("all");

  const filteredProgrammes = PROGRAMMES.filter((p) => {
    if (activeStage === "all") return true;
    if (activeStage === "early") return p.id === "aqua-bubble" || p.id === "aqua-star";
    if (activeStage === "tech") return p.id === "aqua-tech";
    if (activeStage === "squad") return p.id === "aqua-swift" || p.id === "aqua-rapid";
    if (activeStage === "adult") return p.id === "aqua-adult" || p.id === "aqua-fitness";
    return true;
  });

  return (
    <section id="programmes" className="py-20 lg:py-28 bg-[#F8FCFD] border-b border-sky-100/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial & Atmospheric */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
              Curriculum &amp; Progression Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
              The Swimmer&apos;s Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              From building relaxed breathing and submersion trust to mastering Olympic start dives and interval sets. Every tier has defined exit milestones.
            </p>
          </div>

          {/* Interactive Stage Journey Selector */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-sky-200/80 shadow-xs overflow-x-auto max-w-full hide-scrollbar">
            {STAGES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStage(s.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeStage === s.id
                    ? "bg-[#0D9488] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0A2540] hover:bg-sky-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Learning Journey Track */}
        {/* On desktop: Grid with varied depth; On mobile: Horizontal smooth snap scroll */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x-mandatory hide-scrollbar pb-4 md:pb-0">
          {filteredProgrammes.map((prog, index) => {
            const imageSrc = PROGRAMME_IMAGES[prog.id] || "/images/hero/hero-banner.jpg";
            return (
              <div
                key={prog.id}
                className="min-w-[85vw] sm:min-w-[420px] md:min-w-0 snap-center-card bg-white rounded-3xl border border-sky-100/90 shadow-sm hover:shadow-xl hover:border-teal-400/80 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Large Cinematic Programme Photography */}
                  <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={`${prog.name} swimming lessons at Aqua Nation Sports Academy`}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Soft Aquatic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-[#0A2540]/25 to-transparent pointer-events-none" />

                    {/* Top Tier Badge & Ratio Badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs font-bold">
                      <span className="bg-white/95 backdrop-blur-md text-[#0A2540] px-2.5 py-1 rounded-lg border border-sky-200/80 shadow-xs">
                        Stage 0{index + 1}
                      </span>
                      <span className="bg-[#0A2540]/85 backdrop-blur-md text-sky-200 px-2.5 py-1 rounded-lg border border-sky-400/30">
                        Ratio: {prog.coachRatio}
                      </span>
                    </div>

                    {/* Image Footer Details */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <p className="text-[11px] font-semibold text-teal-300 tracking-wide uppercase">
                        {prog.targetAge} · {prog.durationMinutes} Mins
                      </p>
                      <h3 className="text-xl font-bold leading-tight drop-shadow-xs">
                        {prog.name}
                      </h3>
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
                        <span>Key Exit Milestones:</span>
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
                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenAssessmentForProgram(prog.name)}
                    className="flex-1 py-3 px-4 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-extrabold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
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
