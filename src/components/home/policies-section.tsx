import React from "react";
import Image from "next/image";
import { ClockIcon, SwimIcon, UsersIcon, ShieldCheckIcon, CheckCircleIcon } from "@/components/ui/icons";

export function PoliciesSection() {
  const policies = [
    {
      icon: ClockIcon,
      title: "Free Make-Up Lessons",
      subtitle: "Flexible Absence Rescheduling",
      desc: "School exams, family trips, or childhood illnesses shouldn't interrupt swimming progress. ANSA provides free, flexible make-up lessons within academy scheduling rules."
    },
    {
      icon: SwimIcon,
      title: "12 Months Year-Round Training",
      subtitle: "Uninterrupted Muscle Memory",
      desc: "We train Tuesday through Sunday all 12 months. Swimming is a continuous neuro-muscular skill; our year-round calendar prevents regression over long school holidays."
    },
    {
      icon: UsersIcon,
      title: "Strict Small-Group Ratios",
      subtitle: "Maximum 1:6 in Early Foundation",
      desc: "Swimmers learn faster, overcome fears, and develop water confidence in safe, structured small groups with the coach physically in the water for young learners."
    },
    {
      icon: ShieldCheckIcon,
      title: "Objective Milestone Assessment",
      subtitle: "Technical Advancement Criteria",
      desc: "Advancement is never arbitrary. Swimmers are continuously evaluated on stroke technique, streamline efficiency, and stamina before progressing to the next tier."
    }
  ];

  return (
    <section id="policies" className="py-20 lg:py-28 bg-[#F8FCFD] border-b border-sky-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Photography & Confidence Callout */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-sky-100">
              <Image
                src="/images/events/kids-swimming.jpeg"
                alt="Young swimmer learning water confidence with coach at Aqua Nation Sports Academy pool"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-[#0A2540]/25 to-transparent pointer-events-none" />

              {/* Overlaid Reassurance Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4.5 border border-sky-200/80 shadow-lg">
                <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheckIcon className="w-4 h-4 text-teal-600" />
                  <span>100% Lifeguard Supervised</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Every pool facility operates under strict Dubai Sports Council safety guidelines with temperature-controlled water (28°C–30°C) and certified deck lifeguards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Policy Breakdown */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
                Academy Safeguarding &amp; Principles
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
                Parent Peace of Mind by Design
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Transparent rules and thoughtful systems built to respect busy family schedules across Dubai and Abu Dhabi.
              </p>
            </div>

            {/* Structured Editorial Rows (Hairline Separators instead of cards) */}
            <div className="divide-y divide-sky-200/70 pt-2">
              {policies.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-teal-50 text-[#0D9488] shrink-0 border border-teal-200/60 mt-1">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-[#0A2540]">
                          {p.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200/60 hidden sm:inline-block">
                          {p.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#0A2540]">
              <CheckCircleIcon className="w-4 h-4 text-teal-600" />
              <span>Full academy policy documents available upon registration</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
