import React from "react";
import Image from "next/image";
import { StarIcon, AwardIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { CHAMPIONS } from "@/data/champions";

export function ChampionsSection() {
  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gold">Proven International Pedigree</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Roll of Honour: ANSA Champions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Athletes mentored under ANSA coaching standards compete and win on the biggest stages — from the Asian Games and Commonwealth to the Olympic Games.
          </p>
        </div>

        {/* Top 4 Champions Showcase with Authentic Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHAMPIONS.slice(0, 4).map((champ) => (
            <div
              key={champ.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between group hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden bg-slate-800 mb-4">
                  <Image
                    src={champ.photoPath}
                    alt={`${champ.name} - ${champ.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-amber-300 font-bold">
                    <span className="flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{champ.gamesRepresented[0]}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {champ.name}
                </h3>
                <p className="text-xs font-semibold text-amber-400 mt-0.5">
                  {champ.title}
                </p>

                <ul className="mt-3.5 space-y-1.5 text-xs text-slate-300">
                  {champ.honours.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <StarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on High-Performance Pathway */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center text-xs text-slate-400 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <AwardIcon className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            Every beginner child in Aqua Bubble is taught using the exact same hydrodynamic biomechanics that created these national and international records.
          </span>
        </div>
      </div>
    </section>
  );
}
