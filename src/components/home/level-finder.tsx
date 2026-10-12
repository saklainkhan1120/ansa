"use client";

import React, { useState } from "react";
import { SwimIcon } from "@/components/ui/icons";
import { PROGRAMMES } from "@/data/programmes";

interface LevelFinderProps {
  onSelectProgram: (programName: string) => void;
}

type AgeGroupKey = "early" | "junior" | "youth" | "adult";

interface OptionChoice {
  id: string;
  label: string;
  description: string;
  recommendedProgramId: string;
  explanation: string;
}

export function LevelFinder({ onSelectProgram }: LevelFinderProps) {
  const [selectedAge, setSelectedAge] = useState<AgeGroupKey | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const ageGroups: { key: AgeGroupKey; label: string; sub: string }[] = [
    { key: "early", label: "Toddlers (4.5 – 6 yrs)", sub: "Early Years & Foundation" },
    { key: "junior", label: "Juniors (7 – 9 yrs)", sub: "Stroke Technique & Stamina" },
    { key: "youth", label: "Youth (10 – 14 yrs)", sub: "Pre-Competitive & Squad" },
    { key: "adult", label: "Teens & Adults (15+ yrs)", sub: "Water Confidence & Lap Fitness" },
  ];

  const optionsByAge: Record<AgeGroupKey, OptionChoice[]> = {
    early: [
      {
        id: "early-fear",
        label: "Brand new to water, or feels nervous / afraid",
        description: "Cannot float or submerge face without anxiety. Needs gentle confidence building.",
        recommendedProgramId: "aqua-bubble",
        explanation: "Aqua Bubble provides a warm, pressure-free environment with a coach physically in the water and a strict max 1:6 ratio."
      },
      {
        id: "early-floating",
        label: "Can submerge face, float, and kick across short distances",
        description: "Comfortable in water; ready to learn continuous kicking and backstroke basics.",
        recommendedProgramId: "aqua-star",
        explanation: "Aqua Star refines streamline push-offs and introduces backstroke and bilateral breathing over 60-minute structured sessions."
      }
    ],
    junior: [
      {
        id: "junior-beginner",
        label: "Beginner: Still learning to swim 25m continuously",
        description: "Needs water comfort, rhythmic breathing, and unassisted survival swimming skills.",
        recommendedProgramId: "aqua-bubble",
        explanation: "Starting with Aqua Bubble or Aqua Star foundation ensures your child gains safe, effortless water comfort before stroke refinement."
      },
      {
        id: "junior-intermediate",
        label: "Swims Freestyle & Backstroke; ready for all 4 strokes",
        description: "Can swim 50m independently. Ready to learn Breaststroke, Butterfly, dive starts, and turns.",
        recommendedProgramId: "aqua-tech",
        explanation: "Aqua Tech builds competitive swimming foundations across all 4 strokes with racing starts, tumble turns, and pace-clock training."
      },
      {
        id: "junior-competitive",
        label: "Knows all 4 strokes; wants high-volume squad training",
        description: "Aspires to compete in club galas and local UAE swimming championships.",
        recommendedProgramId: "aqua-swift",
        explanation: "Aqua Swift is our 90-minute competitive junior squad focused on aerobic endurance, race pacing, and gala preparation."
      }
    ],
    youth: [
      {
        id: "youth-technique",
        label: "Needs stroke correction & mastering all 4 strokes",
        description: "Knows basic strokes but needs legal competition turns, dive starts, and technical efficiency.",
        recommendedProgramId: "aqua-tech",
        explanation: "Aqua Tech refines biomechanics, starts, turns, and endurance to prepare youth swimmers for squads or school teams."
      },
      {
        id: "youth-squad",
        label: "Experienced competitive swimmer seeking squad training",
        description: "Swims high yardage and targets national or regional championship qualifications.",
        recommendedProgramId: "aqua-swift",
        explanation: "Aqua Swift or Aqua Rapid provides high-performance coaching under Olympic mentorship for competitive athletes."
      }
    ],
    adult: [
      {
        id: "adult-fear",
        label: "Adult Beginner: Overcoming fear of water / learning to swim",
        description: "Adults of any age who never learned to swim or feel anxious in deep water.",
        recommendedProgramId: "aqua-adult",
        explanation: "Aqua Adult provides patient, respectful guidance adapted to adult learning paces, progressing from relaxation to comfortable laps."
      },
      {
        id: "adult-laps",
        label: "Lap Swimmer: Stroke improvement or triathlon training",
        description: "Can swim but wants to improve efficiency, endurance, or learn new strokes.",
        recommendedProgramId: "aqua-adult",
        explanation: "Aqua Adult helps adults swim longer distances with less fatigue through refined breathing and body balance."
      },
      {
        id: "adult-fitness",
        label: "Low-Impact Fitness: Joint mobility & Hydrotherapy",
        description: "Gentle water aerobics and resistance conditioning with zero joint impact.",
        recommendedProgramId: "aqua-fitness",
        explanation: "Aqua Fitness combines Aqua Aerobics and Hydrotherapy for cardiovascular health, mobility, and active recovery."
      }
    ]
  };

  const currentOptions = selectedAge ? optionsByAge[selectedAge] : [];
  const selectedOption = currentOptions.find((o) => o.id === selectedOptionId);
  const recommendedProg = selectedOption
    ? PROGRAMMES.find((p) => p.id === selectedOption.recommendedProgramId)
    : null;

  const handleReset = () => {
    setSelectedAge(null);
    setSelectedOptionId(null);
  };

  return (
    <section id="level-finder" className="py-20 lg:py-28 bg-[#F1FAFD] border-b border-sky-100/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
            Interactive Swimmer Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            Find the Optimal Starting Lane
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Answer two quick questions to see which ANSA developmental pathway best matches your swimmer&apos;s current age and water comfort.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md border border-sky-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-sky-950/5 space-y-8">
          {/* STEP 1: SELECT AGE GROUP */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                Step 1 of 2: Select Swimmer Age Group
              </span>
              {selectedAge && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-[#0A2540] underline cursor-pointer"
                >
                  Reset Answers
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ageGroups.map((group) => {
                const isSelected = selectedAge === group.key;
                return (
                  <button
                    key={group.key}
                    type="button"
                    onClick={() => {
                      setSelectedAge(group.key);
                      setSelectedOptionId(null);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                      isSelected
                        ? "bg-[#0D9488] text-white border-[#0D9488] shadow-md scale-[1.01]"
                        : "bg-white text-slate-800 border-slate-200/90 hover:border-teal-400 hover:bg-sky-50/50"
                    }`}
                  >
                    <p className={`font-bold text-sm ${isSelected ? "text-white" : "text-slate-900"}`}>
                      {group.label}
                    </p>
                    <p className={`text-xs mt-1 ${isSelected ? "text-teal-100" : "text-slate-500"}`}>
                      {group.sub}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: SELECT CURRENT WATER COMFORT */}
          {selectedAge && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300 pt-6 border-t border-slate-100">
              <div className="mb-4">
                <span className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                  Step 2 of 2: Current Water Experience &amp; Goal
                </span>
              </div>

              <div className="space-y-3">
                {currentOptions.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedOptionId(opt.id)}
                      className={`w-full p-4.5 rounded-2xl border text-left transition-all flex items-start gap-3.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
                        isSelected
                          ? "bg-sky-50/90 border-[#0D9488] shadow-xs ring-1 ring-[#0D9488]"
                          : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isSelected
                            ? "border-[#0D9488] bg-[#0D9488] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#0A2540]">
                          {opt.label}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* RECOMMENDATION RESULT CARD */}
          {recommendedProg && selectedOption && (
            <div className="animate-in fade-in zoom-in-95 duration-300 bg-[#F0F9FF] border border-sky-300 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-sky-200/70">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#0D9488] flex items-center justify-center shrink-0 border border-teal-200">
                    <SwimIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block">
                      Recommended Initial Pathway
                    </span>
                    <h3 className="text-2xl font-black text-[#0A2540]">
                      {recommendedProg.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold bg-white text-[#0A2540] px-3 py-1 rounded-lg border border-sky-200 shadow-xs">
                    {recommendedProg.durationMinutes} Minutes
                  </span>
                  <span className="text-xs font-bold bg-teal-600 text-white px-3 py-1 rounded-lg shadow-xs">
                    Ratio {recommendedProg.coachRatio}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                  Assessment Rationale:
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-sky-100">
                  {selectedOption.explanation}
                </p>
              </div>

              {/* Conservative Explainability Disclaimer */}
              <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed flex items-start gap-2">
                <span className="font-bold shrink-0">Official Note:</span>
                <span>
                  This recommendation is a preliminary guide. Final placement is confirmed by an ANSA coach during an in-water evaluation to guarantee absolute swimmer comfort and water safety.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-slate-600 hover:text-[#0A2540] py-2 px-3 text-center cursor-pointer"
                >
                  ← Modify Answers
                </button>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectProgram(recommendedProg.name)}
                    className="px-6 py-3 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-extrabold rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Enquire for {recommendedProg.name}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
