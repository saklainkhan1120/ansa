import React from "react";

export function TrustSection() {
  const credentials = [
    { title: "Dronacharya Award", subtitle: "Govt. of India Honour" },
    { title: "DIAC Award", subtitle: "Dubai Sports Development" },
    { title: "ASCA Faculty", subtitle: "Levels 1 through 5" },
    { title: "World Aquatics", subtitle: "Scientific Biomechanics" },
    { title: "Dubai Sports Council", subtitle: "Registered Academy" },
    { title: "100% Lifeguards", subtitle: "Certified Pool Decks" },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-6 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center text-xs font-semibold">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-2 border-r border-slate-800/80 last:border-r-0"
            >
              <span className="text-teal-400 block font-bold text-sm">
                {cred.title}
              </span>
              <span className="text-slate-400 text-xs">
                {cred.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
