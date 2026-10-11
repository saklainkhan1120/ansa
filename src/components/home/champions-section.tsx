import React from "react";
import Image from "next/image";
import { StarIcon, AwardIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { CHAMPIONS } from "@/data/champions";

export function ChampionsSection() {
  return (
    <section id="champions" className="py-20 bg-[#EFFAFF] border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="gold">Proven International Pedigree</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Roll of Honour: ANSA Champions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Athletes mentored under ANSA coaching standards compete and win on the biggest stages — from the Asian Games and Commonwealth Championships to the Olympic Games.
          </p>
        </div>

        {/* Top 4 Champions Showcase with Authentic Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CHAMPIONS.slice(0, 4).map((champ) => (
            <div
              key={champ.id}
              className="bg-white border border-sky-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-3/4 rounded-2xl overflow-hidden bg-sky-50 mb-4 border border-slate-100 shadow-xs">
                  <Image
                    src={champ.photoPath}
                    alt={champ.name + " - " + champ.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white font-bold">
                    <span className="flex items-center gap-1 bg-amber-500/95 text-white px-2.5 py-1 rounded-lg shadow-xs text-[11px]">
                      <StarIcon className="w-3.5 h-3.5" />
                      <span>{champ.gamesRepresented[0]}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-sky-700 transition-colors">
                  {champ.name}
                </h3>
                <p className="text-xs font-bold text-amber-700 mt-0.5">
                  {champ.title}
                </p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {champ.gamesRepresented.join(" · ")}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Verified Career Highlights
                </p>
                <div className="flex flex-wrap gap-1">
                  {champ.honours.slice(0, 2).map((medal, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-amber-50 border border-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md font-medium"
                    >
                      {medal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* National Squad & Junior Record Holders Strip */}
        <div className="mt-12 p-6 bg-white border border-sky-100 rounded-3xl shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AwardIcon className="w-5 h-5 text-amber-600" />
              <h4 className="text-base font-bold text-[#0A2540]">
                Rising ANSA National &amp; Junior Record Holders
              </h4>
            </div>
            <span className="text-xs font-bold text-slate-500">
              {CHAMPIONS.length - 4} Additional Honourees
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHAMPIONS.slice(4).map((champ) => (
              <div
                key={champ.id}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-sky-50/50 hover:border-sky-200 transition-colors flex items-center gap-3"
              >
                <div className="relative w-12 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <Image
                    src={champ.photoPath}
                    alt={champ.name}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#0A2540] truncate">
                    {champ.name}
                  </p>
                  <p className="text-[11px] text-amber-700 font-semibold truncate">
                    {champ.title}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate">
                    {champ.honours[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
