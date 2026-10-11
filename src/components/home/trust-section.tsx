import React from "react";
import { AwardIcon, ShieldCheckIcon, SwimIcon, StarIcon, CheckCircleIcon } from "@/components/ui/icons";

export function TrustSection() {
  const credentials = [
    { title: "Dronacharya Award", subtitle: "Olympic Coaching Honour", icon: AwardIcon, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { title: "4x Olympic Coach", subtitle: "Pradeep Kumar Mentorship", icon: SwimIcon, color: "text-sky-600 bg-sky-50 border-sky-200" },
    { title: "DIAC Sports Award", subtitle: "Dubai Sports Development", icon: StarIcon, color: "text-teal-600 bg-teal-50 border-teal-200" },
    { title: "ASCA & WA Certified", subtitle: "Levels 1-5 Biomechanics", icon: ShieldCheckIcon, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { title: "Dubai Sports Council", subtitle: "Licensed UAE Academy", icon: CheckCircleIcon, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { title: "100% Lifeguards", subtitle: "Certified Safety On Deck", icon: ShieldCheckIcon, color: "text-teal-600 bg-teal-50 border-teal-200" },
  ];

  return (
    <section className="bg-white border-y border-sky-100 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {credentials.map((cred, idx) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 transition-colors"
              >
                <div className={"w-9 h-9 rounded-xl border shrink-0 flex items-center justify-center " + cred.color}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="text-left min-w-0">
                  <span className="text-[#0A2540] block font-bold text-xs sm:text-sm leading-tight truncate">
                    {cred.title}
                  </span>
                  <span className="text-slate-500 text-[11px] block leading-tight truncate font-medium">
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
