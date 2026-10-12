"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/icons";
import { FAQS } from "@/data/faqs";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-locations");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "admissions", label: "Admissions & Venues" },
    { key: "programmes", label: "Programmes & Ratios" },
    { key: "safety", label: "Safety & Coaches" },
    { key: "schedules", label: "Schedules & Timings" },
    { key: "fees_policies", label: "Fees & Policies" },
  ];

  const filteredFaqs = FAQS.filter((f) => {
    if (selectedCategory === "all") return true;
    return f.category === selectedCategory;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-sky-100/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
            Admissions &amp; Operational Information
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything parents need to know about our swimming schedules, venues, student-to-coach ratios, and policies.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setSelectedCategory(c.key)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === c.key
                  ? "bg-[#0D9488] text-white shadow-xs"
                  : "bg-[#F8FCFD] text-slate-600 border border-sky-100 hover:bg-sky-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion Items with Clean Hairline Separators */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-sky-100 rounded-2xl overflow-hidden transition-all bg-[#F8FCFD]/70"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A2540] hover:text-teal-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDownIcon
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
