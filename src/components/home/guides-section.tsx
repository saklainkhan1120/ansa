import React from "react";
import Image from "next/image";
import { ClockIcon } from "@/components/ui/icons";
import { ARTICLES } from "@/data/articles";

export function GuidesSection() {
  const featuredArticle = ARTICLES[0];
  const supportingArticles = ARTICLES.slice(1);

  return (
    <section id="guides" className="py-20 lg:py-28 bg-[#F8FCFD] border-b border-sky-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
              Swimming Science &amp; Parent Resources
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
              Swimmer &amp; Parent Guidance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Curated articles by National Coach Pradeep Kumar on swimming technique, sports psychology, and overcoming childhood water anxiety.
            </p>
          </div>
        </div>

        {/* Editorial Magazine Layout: Lead Feature + Stacked Secondary Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lead Featured Article (7 Columns on Large Screens) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-100/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-teal-300 transition-all">
            <div>
              <div className="relative w-full aspect-16/9 bg-slate-100 overflow-hidden">
                <Image
                  src={featuredArticle.imagePath}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0A2540]/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg border border-sky-400/20">
                    Lead Editorial
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-teal-700">
                    <ClockIcon className="w-3.5 h-3.5" />
                    {featuredArticle.readingTimeMinutes} min read
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] group-hover:text-teal-700 transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-8 pb-7 pt-2 border-t border-slate-100 text-xs font-bold text-slate-500">
              By {featuredArticle.author}
            </div>
          </div>

          {/* Stacked Supporting Articles (5 Columns on Large Screens) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {supportingArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-3xl border border-sky-100/90 p-5 sm:p-6 shadow-sm hover:border-teal-300 transition-all flex flex-col justify-between group flex-1"
              >
                <div>
                  <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                    <Image
                      src={art.imagePath}
                      alt={art.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span>{art.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1 text-teal-700">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {art.readingTimeMinutes} min read
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0A2540] group-hover:text-teal-700 transition-colors leading-snug">
                      {art.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  By {art.author}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
