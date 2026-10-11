"use client";

import React, { useState } from "react";
import { CheckCircleIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROGRAMMES } from "@/data/programmes";

interface ProgrammePathwayProps {
  onOpenAssessmentForProgram: (programName: string) => void;
}

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
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="teal">Comprehensive Curriculum</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 7-Tier Swimming Pathway
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every programme has clear entry criteria, defined coach-to-student ratios, and verifiable milestone benchmarks before advancement.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 self-start md:self-auto shadow-2xs">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                filterCategory === "all" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All (7)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("kids")}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                filterCategory === "kids" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Learn-to-Swim &amp; Strokes
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("squad")}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                filterCategory === "squad" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Competitive Squads
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("adult")}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                filterCategory === "adult" ? "bg-teal-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Adults &amp; Fitness
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                    {prog.durationMinutes} Mins
                  </span>
                  <Badge variant="verified" size="sm">
                    {prog.coachRatio}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {prog.targetAge}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {prog.summary}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Key Exit Milestones:
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

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-500 font-medium">
                  {prog.inWaterCoach ? "Coach in Water" : "Deck & Lane Coaching"}
                </span>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenAssessmentForProgram(prog.name)}
                >
                  Assess for Level
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
