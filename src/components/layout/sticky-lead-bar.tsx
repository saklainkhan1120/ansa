"use client";

import React from "react";
import { WhatsAppIcon, SwimIcon } from "@/components/ui/icons";

interface StickyLeadBarProps {
  onOpenAssessment: () => void;
}

export function StickyLeadBar({ onOpenAssessment }: StickyLeadBarProps) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 lg:hidden bg-white/95 backdrop-blur-xl border border-sky-200/90 p-2 rounded-2xl shadow-[0_10px_35px_rgba(4,16,30,0.18)] flex items-center gap-2">
      <a
        href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold shadow-xs active:scale-[0.97] transition-all"
        aria-label="Chat with ANSA Admissions on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <WhatsAppIcon className="w-4 h-4 shrink-0" />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={onOpenAssessment}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl text-xs font-bold shadow-sm shadow-teal-600/20 active:scale-[0.97] transition-all cursor-pointer"
      >
        <SwimIcon className="w-4 h-4 shrink-0" />
        <span>Book Assessment</span>
      </button>
    </div>
  );
}
