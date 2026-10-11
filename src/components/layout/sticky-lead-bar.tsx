"use client";

import React from "react";
import { WhatsAppIcon, SwimIcon } from "@/components/ui/icons";

interface StickyLeadBarProps {
  onOpenAssessment: () => void;
}

export function StickyLeadBar({ onOpenAssessment }: StickyLeadBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-lg flex items-center gap-2.5">
      <a
        href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] text-white rounded-xl text-xs font-bold shadow-xs active:scale-[0.98] transition-transform"
      >
        <WhatsAppIcon className="w-4 h-4" />
        WhatsApp Us
      </a>

      <button
        type="button"
        onClick={onOpenAssessment}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-teal-600 text-white rounded-xl text-xs font-bold shadow-xs active:scale-[0.98] transition-transform"
      >
        <SwimIcon className="w-4 h-4" />
        Book Assessment
      </button>
    </div>
  );
}
