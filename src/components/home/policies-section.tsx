import React from "react";
import { ClockIcon, SwimIcon, UsersIcon, ShieldCheckIcon, CheckCircleIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";

export function PoliciesSection() {
  const policies = [
    {
      icon: ClockIcon,
      title: "Free Make-Up Lessons",
      subtitle: "Flexible Absence Rescheduling",
      desc: "School exams, birthday parties, or unexpected illness shouldn\'t disrupt your child\'s training. ANSA provides flexible, free make-up lesson opportunities within academy scheduling rules."
    },
    {
      icon: SwimIcon,
      title: "12 Months Year-Round",
      subtitle: "Uninterrupted Progression",
      desc: "We train Tuesday to Sunday through all 12 months. Swimming is a continuous muscle memory skill; our year-round schedule prevents regression over summer and winter holidays."
    },
    {
      icon: UsersIcon,
      title: "Structured Small Groups",
      subtitle: "Never 1-on-1 Isolation",
      desc: "We do not offer private one-on-one lessons. Swimmers learn faster, overcome fears, and develop sportsman spirit inside strictly controlled small groups (max 1:6 in Bubble)."
    },
    {
      icon: ShieldCheckIcon,
      title: "Continuous Assessment",
      subtitle: "Objective Technical Milestones",
      desc: "Advancement is never arbitrary. Swimmers are continuously evaluated on stroke technique, streamline efficiency, and stamina before being recommended for promotion."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="teal">Academy Operating Policies</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Parent Peace of Mind by Design
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparent rules and supportive systems built to respect busy parent schedules across Dubai and Abu Dhabi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 mt-0.5">
                      {p.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Verified Academy Policy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
