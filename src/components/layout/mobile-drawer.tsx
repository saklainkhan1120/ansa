"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { XIcon, SwimIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { PROGRAMMES } from "@/data/programmes";
import { ACTIVE_LOCATIONS } from "@/data/locations";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAssessment: () => void;
}

export function MobileDrawer({ isOpen, onClose, onOpenAssessment }: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="relative w-36 h-10">
            <Image
              src="/images/brand/ansa-logo.png"
              alt="ANSA Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="p-4 space-y-6 flex-1 text-sm font-medium text-slate-800">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-900"
            >
              About ANSA & Heritage
            </Link>
            <Link
              href="/coaches"
              onClick={onClose}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-900"
            >
              Coaches & Faculty
            </Link>
            <Link
              href="/champions"
              onClick={onClose}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-900"
            >
              Champions & Olympians
            </Link>
            <Link
              href="/fees-and-schedules"
              onClick={onClose}
              className="block px-3 py-2 rounded-lg hover:bg-slate-100 font-semibold text-slate-900"
            >
              Fees, Policies & FAQ
            </Link>
          </div>

          {/* Programmes List */}
          <div>
            <div className="px-3 text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5 mb-2">
              <SwimIcon className="w-4 h-4" />
              <span>Programmes</span>
            </div>
            <div className="space-y-0.5">
              {PROGRAMMES.map((prog) => (
                <Link
                  key={prog.id}
                  href={`/programmes/${prog.slug}`}
                  onClick={onClose}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-teal-700 hover:bg-sky-50 rounded-md"
                >
                  {prog.name} ({prog.targetAge})
                </Link>
              ))}
            </div>
          </div>

          {/* Locations Preview */}
          <div>
            <div className="px-3 text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5 mb-2">
              <MapPinIcon className="w-4 h-4" />
              <span>Locations (9 Pools)</span>
            </div>
            <div className="space-y-0.5 max-h-40 overflow-y-auto pr-1">
              {ACTIVE_LOCATIONS.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/locations/${loc.slug}`}
                  onClick={onClose}
                  className="block px-3 py-1.5 text-xs text-slate-600 hover:text-teal-700 hover:bg-sky-50 rounded-md"
                >
                  {loc.displayName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={onOpenAssessment}
          >
            Book Free Assessment →
          </Button>

          <a
            href="https://wa.me/971562444207?text=Hi%20ANSA%20team%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] text-white rounded-lg font-semibold text-xs transition-colors hover:bg-[#20ba59]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp Admissions
          </a>

          <a
            href="tel:+971562444207"
            className="flex items-center justify-center gap-2 w-full py-2 text-xs text-slate-600 hover:text-slate-900"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            Call +971 56 244 4207
          </a>
        </div>
      </div>
    </div>
  );
}
