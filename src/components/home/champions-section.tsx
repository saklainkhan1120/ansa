import React from "react";
import Image from "next/image";
import { StarIcon, AwardIcon } from "@/components/ui/icons";
import { CHAMPIONS } from "@/data/champions";

export function ChampionsSection() {
  const topChampions = CHAMPIONS.slice(0, 4);
  const juniorRecordHolders = CHAMPIONS.slice(4);

  return (
    <section id="champions" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-sky-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-700">
              International Competition Pedigree
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
              Roll of Honour
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Swimmers developed under ANSA coaching standards compete on the world&apos;s biggest stages — from the Olympic Games and Asian Games to the Danish Open and World Championships.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-2xl border border-amber-200/80 text-amber-900 text-xs font-bold self-start md:self-auto">
            <AwardIcon className="w-4 h-4 text-amber-600" />
            <span>Verified International Track Record</span>
          </div>
        </div>

        {/* Top 4 Champions Editorial Showcase */}
        {/* On desktop: 4-column athletic portrait grid; On mobile: smooth touch-snap carousel */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto sm:overflow-visible snap-x-mandatory hide-scrollbar pb-4 sm:pb-0">
          {topChampions.map((champ) => (
            <div
              key={champ.id}
              className="min-w-[78vw] sm:min-w-0 snap-center-card bg-[#F8FCFD] border border-sky-100 rounded-3xl overflow-hidden hover:border-amber-300/80 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Authentic High-Res Athlete Portrait */}
                <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                  <Image
                    src={champ.photoPath}
                    alt={`${champ.name} - ${champ.title}`}
                    fill
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Primary Event Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 bg-[#0A2540]/85 backdrop-blur-md text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30 shadow-xs">
                      <StarIcon className="w-3 h-3 fill-amber-400" />
                      <span>{champ.gamesRepresented[0]}</span>
                    </span>
                  </div>

                  {/* Bottom Name on Image */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="text-xl font-bold leading-tight drop-shadow-xs">
                      {champ.name}
                    </h3>
                    <p className="text-xs text-amber-300 font-semibold mt-0.5">
                      {champ.title}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {champ.gamesRepresented.join(" · ")}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                      Verified Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {champ.honours.slice(0, 2).map((medal, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-white border border-amber-200 text-amber-950 px-2 py-0.5 rounded-md font-medium"
                        >
                          {medal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rising National Squad & Junior Record Holders Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F8FCFD] border border-sky-100 rounded-3xl">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-sky-100">
            <div className="flex items-center gap-2">
              <AwardIcon className="w-4 h-4 text-amber-600" />
              <h4 className="text-sm sm:text-base font-bold text-[#0A2540]">
                National Squad &amp; Junior Record Holders Mentored Under ANSA
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              {juniorRecordHolders.length} Honourees
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {juniorRecordHolders.map((champ) => (
              <div
                key={champ.id}
                className="p-3 rounded-2xl bg-white border border-sky-100/90 hover:border-sky-300 transition-colors flex items-center gap-3"
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
