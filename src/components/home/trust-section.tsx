import React from "react";
import { AwardIcon, ShieldCheckIcon, SwimIcon, StarIcon, CheckCircleIcon } from "@/components/ui/icons";

export function TrustSection() {
  const credentials = [
    { title: "Dronacharya Awardee", subtitle: "National Coaching Honour", icon: AwardIcon, iconColor: "text-amber-600" },
    { title: "4-Time Olympic Coach", subtitle: "Pradeep Kumar Mentorship", icon: SwimIcon, iconColor: "text-sky-600" },
    { title: "DIAC Sports Award", subtitle: "Dubai Sports Excellence", icon: StarIcon, iconColor: "text-teal-600" },
    { title: "ASCA & WA Certified", subtitle: "Levels 1–5 Biomechanics", icon: ShieldCheckIcon, iconColor: "text-cyan-700" },
    { title: "Dubai Sports Council", subtitle: "Licensed UAE Academy", icon: CheckCircleIcon, iconColor: "text-emerald-600" },
    { title: "100% Certified Safety", subtitle: "Lifeguards on Every Deck", icon: ShieldCheckIcon, iconColor: "text-teal-600" },
  ];

  return (
    <section className="bg-white border-b border-sky-100/80 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-sky-100/80">
          {credentials.map((cred, idx) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-3 sm:py-2 first:pl-0 last:pr-0"
              >
                <div className="shrink-0 p-1.5 rounded-lg bg-sky-50/80 text-sky-700">
                  <IconComponent className={`w-4 h-4 ${cred.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <span className="text-[#0A2540] block font-bold text-xs sm:text-sm tracking-tight leading-tight truncate">
                    {cred.title}
                  </span>
                  <span className="text-slate-500 text-[11px] block leading-tight truncate font-normal mt-0.5">
                    {cred.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
