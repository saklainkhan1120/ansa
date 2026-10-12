"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MenuIcon, ChevronDownIcon, SwimIcon, MapPinIcon } from "@/components/ui/icons";
import { PROGRAMMES } from "@/data/programmes";
import { ACTIVE_LOCATIONS } from "@/data/locations";
import { AssessmentModal } from "@/components/forms/assessment-modal";
import { MobileDrawer } from "./mobile-drawer";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo: Preserving authentic official PNG */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg p-1"
              aria-label="Aqua Nation Sports Academy Home"
            >
              <div className="relative w-44 sm:w-48 h-14">
                <Image
                  src="/images/brand/ansa-logo.png"
                  alt="Aqua Nation Sports Academy (ANSA) Logo"
                  fill
                  sizes="(max-width: 640px) 176px, 192px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
              >
                Home
              </Link>

              {/* Programmes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <Link
                  href="/programmes"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
                >
                  Programmes
                  <ChevronDownIcon className="w-4 h-4 text-slate-400" />
                </Link>

                {programsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2 py-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      7-Tier Aquatic Pathway
                    </div>
                    {PROGRAMMES.map((prog) => (
                      <Link
                        key={prog.id}
                        href={`/programmes/${prog.slug}`}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-lg hover:bg-sky-50/80 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                          <SwimIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-700">
                            {prog.name}
                          </p>
                          <p className="text-xs text-slate-600 line-clamp-1">
                            {prog.targetAge} · {prog.durationMinutes} mins
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 px-3 border-t border-slate-100">
                      <Link
                        href="/programmes"
                        className="text-xs font-semibold text-teal-700 hover:underline block"
                      >
                        View Full Progression Matrix →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setLocationsDropdownOpen(true)}
                onMouseLeave={() => setLocationsDropdownOpen(false)}
              >
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
                >
                  Locations
                  <ChevronDownIcon className="w-4 h-4 text-slate-400" />
                </Link>

                {locationsDropdownOpen && (
                  <div className="absolute top-full left-0 w-88 bg-white rounded-xl shadow-xl border border-slate-200 p-3 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      9 Verified UAE Pool Centres
                    </div>
                    <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
                      {ACTIVE_LOCATIONS.map((loc) => (
                        <Link
                          key={loc.id}
                          href={`/locations/${loc.slug}`}
                          className="flex items-start gap-2 px-2.5 py-1.5 rounded-lg hover:bg-sky-50/80 transition-colors group text-left"
                        >
                          <MapPinIcon className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-slate-900 group-hover:text-teal-700">
                              {loc.displayName}
                            </p>
                            <p className="text-[11px] text-slate-600">
                              {loc.poolCategory} · {loc.city}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 px-2 border-t border-slate-100">
                      <Link
                        href="/locations"
                        className="text-xs font-semibold text-teal-700 hover:underline block"
                      >
                        Explore Interactive Venue Directory →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/coaches"
                className="px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
              >
                Coaches
              </Link>
              <Link
                href="/champions"
                className="px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
              >
                Champions
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
              >
                About
              </Link>
              <Link
                href="/fees-and-schedules"
                className="px-3 py-2 rounded-lg hover:text-teal-700 hover:bg-slate-100/70 transition-colors"
              >
                Fees & FAQ
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => setAssessmentModalOpen(true)}
              >
                Book Assessment →
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setAssessmentModalOpen(true)}
                className="text-xs font-semibold bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Book Assessment
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenAssessment={() => {
          setMobileMenuOpen(false);
          setAssessmentModalOpen(true);
        }}
      />

      {/* Primary Assessment / Enquiry Modal */}
      {assessmentModalOpen && (
        <AssessmentModal
          isOpen={assessmentModalOpen}
          onClose={() => setAssessmentModalOpen(false)}
        />
      )}
    </>
  );
}
