import React from "react";
import Image from "next/image";
import { ClockIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { ARTICLES } from "@/data/articles";

export function GuidesSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="teal">Educational Insights &amp; Advice</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Swimmer &amp; Parent Guidance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Written by 4-time Olympic Coach Pradeep Kumar and our sports leadership team, sharing real insights on overcoming water phobia and building athletic confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full aspect-16/10 bg-slate-100 overflow-hidden">
                  <Image
                    src={art.imagePath}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {art.readingTimeMinutes} min read
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Author: {art.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
