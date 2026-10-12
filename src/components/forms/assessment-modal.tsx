"use client";

import React, { useState, useEffect } from "react";
import { XIcon, SwimIcon, WhatsAppIcon, CheckCircleIcon, MapPinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { ACTIVE_LOCATIONS } from "@/data/locations";
import { PROGRAMMES } from "@/data/programmes";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
  defaultLocationId?: string;
}

export function AssessmentModal({
  isOpen,
  onClose,
  defaultProgramId = "",
  defaultLocationId = "",
}: AssessmentModalProps) {
  const matchedLoc = ACTIVE_LOCATIONS.find(
    (l) => l.name === defaultLocationId || l.displayName === defaultLocationId || l.id === defaultLocationId
  );
  const initialLocation = matchedLoc ? matchedLoc.name : defaultLocationId;

  const [parentName, setParentName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [swimmerAge, setSwimmerAge] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedProgram, setSelectedProgram] = useState(defaultProgramId);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 1 Safeguard: Staging review; no real CRM transmission or fake delivery claim
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <SwimIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold tracking-tight">
                Swimming Assessment &amp; Fee Enquiry
              </h2>
              <p className="text-xs text-slate-300">
                Aqua Nation Sports Academy · Dubai &amp; Abu Dhabi
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Enquiry Staged for Review
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest in ANSA. Our admissions team evaluates each swimmer to assign the ideal pool level and coach ratio.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-xs text-sky-900 text-left space-y-2">
                <p className="font-semibold text-sky-950 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Instant Admissions WhatsApp Fast-Track:
                </p>
                <p>
                  For immediate confirmation of this week&apos;s assessment slots or fee quotes, you can connect directly with our admissions coordinator on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/971562444207?text=Hi%20ANSA%20Admissions%2C%20I%20am%20enquiring%20for%20${encodeURIComponent(parentName || "my child")}%20(Age%3A%20${encodeURIComponent(swimmerAge || "N/A")})%20at%20${encodeURIComponent(selectedLocation || "Dubai/Abu Dhabi")}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg text-xs shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Chat Directly on WhatsApp (+971 56 244 4207)
                </a>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
              >
                Close Window
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p>
                  Training across <strong>9 verified temperature-controlled pools</strong> in Dubai &amp; Abu Dhabi. Led by 4-time Olympic Coach Pradeep Kumar.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Swimmer Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Smith"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Swimmer Age *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 years (or Adult)"
                    value={swimmerAge}
                    onChange={(e) => setSwimmerAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Venue *
                  </label>
                  <select
                    required
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  >
                    <option value="">Select a pool venue...</option>
                    {ACTIVE_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.displayName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Interest / Level
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  >
                    <option value="">Assess my swimmer / Unsure</option>
                    {PROGRAMMES.map((prog) => (
                      <option key={prog.id} value={prog.name}>
                        {prog.name} ({prog.targetAge})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="w-full">
                  Submit Assessment Enquiry →
                </Button>
                <p className="text-[11px] text-slate-600 text-center mt-2">
                  No automated spam. We respect your privacy in accordance with UAE PDPL.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
