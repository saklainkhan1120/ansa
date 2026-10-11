"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  SwimIcon, 
  MapPinIcon, 
  ShieldCheckIcon, 
  AwardIcon, 
  StarIcon, 
  CheckCircleIcon, 
  UsersIcon, 
    WhatsAppIcon, 
  ChevronRightIcon, 
  ClockIcon 
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AssessmentModal } from "@/components/forms/assessment-modal";
import { PROGRAMMES } from "@/data/programmes";
import { ACTIVE_LOCATIONS } from "@/data/locations";
import { CHAMPIONS } from "@/data/champions";

export function HomeClient() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedVenueFilter, setSelectedVenueFilter] = useState<"All" | "Dubai" | "Abu Dhabi">("All");

  const filteredVenues = ACTIVE_LOCATIONS.filter((venue) => {
    if (selectedVenueFilter === "All") return true;
    return venue.city === selectedVenueFilter;
  });

  return (
    <>
      {/* SECTION 1: HERO STAGE */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Subtle Aquatic Glow Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left: Message & Conversion Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wide uppercase">
                <AwardIcon className="w-4 h-4 text-teal-400" />
                <span>Olympian-Led Swimming Academy · Dubai & Abu Dhabi</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                From First Splashes <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-teal-200">
                  to Olympic Podiums.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Mentored by Dronacharya Awardee & 4-time Olympic Coach <strong>Pradeep Kumar Sreedharan</strong>. Scientific, safe, and structured swimming instruction across <strong>9 world-class temperature-controlled pools</strong> in Dubai and Abu Dhabi.
              </p>

              {/* Verified Proof Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <Badge variant="verified">9 Temperature-Controlled Pools</Badge>
                <Badge variant="verified">Strict Max 1:6 Ratio in Aqua Bubble</Badge>
                <Badge variant="verified">Certified Lady Coaches at All Venues</Badge>
                <Badge variant="verified">100% CPR & Lifeguard Certified</Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setAssessmentModalOpen(true)}
                  className="shadow-lg shadow-teal-900/30"
                >
                  Book Swimming Assessment →
                </Button>

                <a
                  href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20lessons%20and%20assessment%20timings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base shadow-lg shadow-emerald-950/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Admissions WhatsApp</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <ClockIcon className="w-3.5 h-3.5 text-teal-400" />
                <span>Admissions response average: under 15 minutes during training hours.</span>
              </p>
            </div>

            {/* Hero Right: Authority & Facility Showcase Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">
                      Consulting CEO & Head Coach
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      Pradeep Kumar Sreedharan
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-xs font-bold">
                    Dronacharya Awardee
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                      <AwardIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">4-Time Olympic Swimming Coach</p>
                      <p className="text-xs text-slate-400">National Coach of India with 35+ years shaping world-class athletes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                      <SwimIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Coach to Multiple Olympians</p>
                      <p className="text-xs text-slate-400">Trained 2-time Olympian Sajan Prakash, Nisha Millet, and Asian Games medalists.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">DIAC Award Recognized</p>
                      <p className="text-xs text-slate-400">Honoured by Dubai International Academic City for sports development.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>9 UAE Pool Facilities</span>
                  <span>15+ Certified Coaches</span>
                  <span>12 Months Year-Round</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL TRUST BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-6 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs font-semibold">
            <div className="p-2 border-r border-slate-800 last:border-r-0">
              <span className="text-teal-400 block font-bold text-sm">Dronacharya</span>
              <span>Govt. of India Honour</span>
            </div>
            <div className="p-2 border-r border-slate-800 last:border-r-0">
              <span className="text-teal-400 block font-bold text-sm">DIAC Award</span>
              <span>Sports Development</span>
            </div>
            <div className="p-2 border-r border-slate-800 last:border-r-0">
              <span className="text-teal-400 block font-bold text-sm">ASCA Certified</span>
              <span>Level 1 to Level 5</span>
            </div>
            <div className="p-2 border-r border-slate-800 last:border-r-0">
              <span className="text-teal-400 block font-bold text-sm">World Aquatics</span>
              <span>International Biomechanics</span>
            </div>
            <div className="p-2 border-r border-slate-800 last:border-r-0">
              <span className="text-teal-400 block font-bold text-sm">Dubai Sports</span>
              <span>Permitted Academy</span>
            </div>
            <div className="p-2">
              <span className="text-teal-400 block font-bold text-sm">100% Lifeguard</span>
              <span>Certified Pool Deck</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 7-TIER AQUATIC PATHWAY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="teal">Proven Aquatic Progression</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The ANSA Swimming Ladder
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every swimmer is placed following an individual water assessment. Our scientific pathway guides children from initial water comfort to competitive podiums and lifelong fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMMES.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                      {prog.durationMinutes} Minutes
                    </span>
                    <Badge variant="verified" size="sm">
                      {prog.coachRatio}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {prog.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {prog.targetAge}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prog.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Milestone Focus:
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {prog.exitMilestones.slice(0, 2).map((m, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircleIcon className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Curriculum</span>
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setAssessmentModalOpen(true)}
                  >
                    Assess Level
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 9 VERIFIED UAE POOL VENUES */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <Badge variant="aquatic">UAE Pool Directory</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                9 Temperature-Controlled Pool Centres
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Discover safe, modern swimming facilities across Dubai and Abu Dhabi. All pools are climate-controlled between 28°C and 30°C year-round with dedicated lifeguards.
              </p>
            </div>

            {/* City Switcher */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
              {(["All", "Dubai", "Abu Dhabi"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedVenueFilter(filter)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedVenueFilter === filter
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {filter} {filter === "Dubai" ? "(7)" : filter === "Abu Dhabi" ? "(2)" : "(9)"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-800 bg-sky-100/70 px-2.5 py-1 rounded-md">
                      {venue.city} · {venue.district}
                    </span>
                    <Badge variant="verified" size="sm">
                      {venue.poolCategory}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {venue.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-start gap-1.5">
                      <MapPinIcon className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{venue.address}</span>
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs space-y-1.5 text-slate-600">
                    <p>
                      <strong>Pool Specs:</strong> {venue.poolDimensions}
                    </p>
                    <p>
                      <strong>Environment:</strong> {venue.poolEnvironment}
                    </p>
                    <p>
                      <strong>Water Temp:</strong> {venue.targetWaterTemp}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <a
                    href={venue.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ChevronRightIcon className="w-3 h-3" />
                  </a>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setAssessmentModalOpen(true)}
                  >
                    Enquire Venue
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: REAL CHAMPIONS & ATHLETE ACCOLADES */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="gold">National & International Roll of Honour</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trained Under ANSA Mentorship
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From Asian Games medals to two-time Olympian standards, our swimmers prove the effectiveness of our scientific coaching pedagogy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHAMPIONS.slice(0, 4).map((champ) => (
              <div
                key={champ.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden bg-slate-800 mb-4">
                    <Image
                      src={champ.photoPath}
                      alt={`${champ.name} - ${champ.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {champ.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400 mt-0.5">
                    {champ.title}
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-slate-300">
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
        </div>
      </section>

      {/* SECTION 6: PEACE OF MIND & POLICIES */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="teal">Academy Safeguards & Policies</Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Parent Peace of Mind by Design
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ClockIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Free Make-Up Lessons</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Life happens. When sickness or school tests conflict with practice, book free make-up slots within our academy scheduling policies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <SwimIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">12 Months Year-Round</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We train Tuesday to Sunday through all 12 months. Your child&apos;s water safety and stamina never regress over school breaks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <UsersIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Certified Lady Coaches</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated female coaches across all centres ensure comfort, encouragement, and cultural respect for all families.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero Private Classes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We focus exclusively on structured small group lessons. Swimmers progress faster through healthy peer camaraderie and discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CALL TO ACTION BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="teal">Begin Your Aquatic Journey</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Schedule Your Swimmer&apos;s Assessment Today
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Take the first step toward confident water safety or competitive excellence. Connect with our admissions team to arrange an assessment at your closest pool.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setAssessmentModalOpen(true)}
              className="w-full sm:w-auto"
            >
              Book Swimming Assessment →
            </Button>

            <a
              href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20book%20an%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg text-base shadow-sm transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Admissions (+971 56 244 4207)
            </a>
          </div>
        </div>
      </section>

      {/* Assessment Modal Dialog */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
      />
    </>
  );
}
