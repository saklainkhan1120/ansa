import React from "react";
import { StarIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { REVIEWS } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#EFFAFF] border-y border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="verified">100% Authentic Google &amp; Parent Reviews</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            Trusted by Parents Across the UAE
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real feedback from verified parents and students across our Dubai and Abu Dhabi swimming centres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Source Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                    {review.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#0A2540]">{review.authorName}</p>
                  <p className="text-[11px] text-slate-500">{review.swimmerContext}</p>
                </div>
                {review.coachesMentioned && review.coachesMentioned.length > 0 && (
                  <span className="text-[11px] text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md font-semibold">
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
