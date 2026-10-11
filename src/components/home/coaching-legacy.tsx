import React from "react";
import Image from "next/image";
import { AwardIcon, ShieldCheckIcon, CheckCircleIcon, UsersIcon, StarIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { COACHES, LADY_COACHES } from "@/data/coaches";

export function CoachingLegacy() {
  const coachesWithPhotos = COACHES.filter((c) => c.photoPath);

  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="teal">Olympic-Grade Pedagogy</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Coaching Legacy &amp; Certified Faculty
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Led by National Swimming Coach of India Pradeep Kumar Sreedharan. Every ANSA coach is certified across international sporting federations and 100% qualified in CPR, AED, and water safety.
          </p>
        </div>

        {/* Head Coach Pradeep Kumar Spotlight Card */}
        <div className="bg-gradient-to-br from-[#E0F5FC]/60 via-white to-[#EFFAFF] border border-sky-200 rounded-3xl p-8 sm:p-10 mb-16 shadow-lg shadow-sky-900/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <AwardIcon className="w-3.5 h-3.5 text-amber-700" />
                  Dronacharya Awardee · Eklavya Awardee
                </span>
                <span className="px-3 py-1 rounded-lg bg-teal-100 border border-teal-300 text-teal-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <StarIcon className="w-3.5 h-3.5 text-teal-700" />
                  4-Time Olympic Coach
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                Pradeep Kumar Sreedharan
              </h3>
              <p className="text-xs text-teal-700 font-bold uppercase tracking-wider">
                Consulting CEO &amp; Head Coach · Aqua Nation Sports Academy LLC
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                With over 35 years of coaching distinction, Mr. Pradeep Kumar has coached India and UAE&apos;s most celebrated aquatic talents from grassroots learners to Olympic finals (including Sajan Prakash in Rio 2016 and Tokyo 2020). His scientific biomechanics methodology forms the core curriculum of every ANSA session.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-800 font-medium">
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>35+ Years Coaching</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>ASCA Level 5 Certified</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-sky-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircleIcon className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>2x Olympian Coach</span>
                </div>
              </div>
            </div>

            {/* Coach Pradeep Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-100">
                <Image
                  src="/images/coaching/pradeep-dronacharya.png"
                  alt="Coach Pradeep Kumar receiving Dronacharya Award from President of India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Lady Coaches Available Feature Banner */}
        <div className="bg-gradient-to-r from-teal-50 via-sky-50 to-teal-50 border border-teal-200 rounded-3xl p-6 sm:p-8 mb-16 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <UsersIcon className="w-3.5 h-3.5 text-teal-700" />
              Certified Lady Coaches Available
            </div>
            <h4 className="text-xl font-bold text-[#0A2540]">
              Dedicated Female Swimming Instructors Across Dubai &amp; Abu Dhabi
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              ANSA provides experienced, certified female coaches ({LADY_COACHES.map(c => c.name).join(", ")}) for girls, ladies-only groups, and toddlers desiring gentle female supervision.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-teal-200 text-teal-800 text-xs font-bold shadow-2xs">
              <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
              100% Certified Female Lifeguards
            </span>
          </div>
        </div>

        {/* Coach Faculty Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-xl font-bold text-[#0A2540]">
            Verified Academy Coaches
          </h4>
          <span className="text-xs font-semibold text-slate-500">
            {COACHES.length} Certified Instructors
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {coachesWithPhotos.map((coach) => (
            <div
              key={coach.id}
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center hover:border-teal-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden border-2 border-white shadow-sm mb-3.5 bg-slate-200">
                  <Image
                    src={coach.photoPath!}
                    alt={coach.name + " - Swimming Coach at ANSA UAE"}
                    fill
                    sizes="(max-width: 640px) 100px, 120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {coach.isLadyCoach && (
                    <div className="absolute top-1 right-1 bg-teal-600 text-white rounded-full p-1 shadow-xs">
                      <UsersIcon className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <h5 className="font-bold text-sm sm:text-base text-[#0A2540] leading-snug group-hover:text-teal-700 transition-colors">
                  {coach.name}
                </h5>
                <p className="text-xs text-teal-700 font-semibold mt-0.5">
                  {coach.designation}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">
                  {coach.experienceYears}+ Years Exp. {coach.nationalitiesOrigin ? " · " + coach.nationalitiesOrigin : ""}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap justify-center gap-1">
                {coach.accreditations.slice(0, 2).map((acc, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                  >
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
