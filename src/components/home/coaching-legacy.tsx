import React from "react";
import Image from "next/image";
import { AwardIcon, ShieldCheckIcon, CheckCircleIcon, UsersIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { COACHES, LADY_COACHES } from "@/data/coaches";

export function CoachingLegacy() {
  const featuredCoaches = COACHES.filter((c) => c.photoPath);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="teal">Olympic-Grade Pedagogy</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Coaching Legacy &amp; Certified Faculty
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Led by National Swimming Coach of India Pradeep Kumar Sreedharan. Every ANSA coach is certified across international sporting federations and 100% qualified in CPR, AED, and water safety.
          </p>
        </div>

        {/* Head Coach Spotlight Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  Dronacharya Awardee · Eklavya Awardee
                </span>
                <span className="px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
                  4-Time Olympic Swimming Coach
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Pradeep Kumar Sreedharan
              </h3>
              <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                Consulting CEO &amp; Head Coach · Aqua Nation Sports Academy LLC
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                With more than 35 years of coaching distinction, Mr. Pradeep Kumar has nurtured India and UAE&apos;s finest aquatic talents from grassroots learners to Olympic podiums. His mentorship directly guides ANSA&apos;s curriculum, coach training, and high-performance squad standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>National Coach of India</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Olympians Mentor</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>DIAC Award Recipient</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-400/20 text-teal-300 flex items-center justify-center mx-auto">
                <AwardIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white">
                Olympic Coaching Philosophy
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                &ldquo;Every child deserves scientific stroke mechanics from day one. Swimming is first a life skill, then discipline, and finally athletic excellence.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Certified Faculty Showcase */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-teal-400" />
            <span>Senior Coaching Faculty</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoaches.slice(0, 4).map((coach) => (
              <div
                key={coach.id}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-800 mb-4">
                    <Image
                      src={coach.photoPath!}
                      alt={`${coach.name} - ${coach.designation}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {coach.name}
                  </h4>
                  <p className="text-xs text-teal-400 font-semibold mt-0.5">
                    {coach.designation} · {coach.experienceYears}+ Yrs Exp
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {coach.accreditations.slice(0, 2).map((acc, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>100% CPR &amp; Safety Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Lady Coaches Banner */}
        <div className="bg-gradient-to-r from-teal-950/60 via-slate-950 to-teal-950/60 border border-teal-800/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
              Cultural Comfort &amp; Inclusivity
            </span>
            <h4 className="text-xl font-bold text-white">
              Certified Lady Swimming Coaches Available Across All Venues
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We provide certified female swimming instructors for young children, girls, adult women beginners, and our dedicated Women Wellness and Aqua Aerobics programmes.
            </p>
          </div>

          <div className="flex -space-x-3 shrink-0">
            {LADY_COACHES.filter((c) => c.photoPath).map((c) => (
              <div
                key={c.id}
                className="relative w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden shadow-md"
                title={c.name}
              >
                <Image
                  src={c.photoPath!}
                  alt={c.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
