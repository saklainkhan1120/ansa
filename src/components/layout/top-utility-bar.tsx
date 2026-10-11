import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/ui/icons";

export function TopUtilityBar() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Quick Location & Credentials */}
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <MapPinIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>9 Premier Pools across Dubai & Abu Dhabi</span>
          </span>
          <span className="hidden md:inline-block text-slate-600">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-teal-400 font-medium">
            <span>Olympic & Dronacharya Mentored</span>
          </span>
        </div>

        {/* Right: Direct Admissions Numbers & Email */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+971562444207"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded"
            aria-label="Call ANSA admissions at +971 56 244 4207"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>+971 56 244 4207</span>
          </a>

          <a
            href="mailto:info@ansadxb.com"
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded"
            aria-label="Email ANSA at info@ansadxb.com"
          >
            <MailIcon className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>info@ansadxb.com</span>
          </a>

          <a
            href="https://wa.me/971562444207?text=Hi%20ANSA%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20lessons."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 text-[#25D366] hover:text-emerald-400 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 rounded"
            aria-label="Chat with ANSA admissions on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            <span>Admissions WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
