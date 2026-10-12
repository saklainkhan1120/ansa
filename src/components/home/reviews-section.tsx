import React from "react";
import { StarIcon } from "@/components/ui/icons";
import { REVIEWS } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-sky-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
              Parent Community &amp; Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
              Voices from the Pool Deck
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Authentic feedback from verified parents and swimmers across our Dubai and Abu Dhabi training centres.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-slate-700 self-start md:self-auto border-l-2 border-teal-500 pl-3">
            <span className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="uppercase tracking-wider font-extrabold text-[#0A2540] text-[11px]">
              Verified Parent Reviews
            </span>
          </div>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8FCFD] rounded-3xl p-7 sm:p-8 border border-sky-100/90 hover:border-teal-300 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating & Source Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5">
                    {review.source}
                  </span>
                </div>

                {/* Editorial Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Author & Swimmer Context */}
              <div className="pt-5 mt-5 border-t border-sky-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#0A2540]">{review.authorName}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{review.swimmerContext}</p>
                </div>
                {review.coachesMentioned && review.coachesMentioned.length > 0 && (
                  <span className="text-[11px] text-teal-800 bg-white border border-teal-200 px-2.5 py-1 rounded-lg font-semibold">
                    {review.coachesMentioned[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
