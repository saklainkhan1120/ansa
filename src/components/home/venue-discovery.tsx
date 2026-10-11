"use client";

import React, { useState } from "react";
import { MapPinIcon, ChevronRightIcon, CheckCircleIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ACTIVE_LOCATIONS } from "@/data/locations";

interface VenueDiscoveryProps {
  onOpenAssessmentForLocation: (locationName: string) => void;
}

export function VenueDiscovery({ onOpenAssessmentForLocation }: VenueDiscoveryProps) {
  const [selectedCity, setSelectedCity] = useState<"All" | "Dubai" | "Abu Dhabi">("All");

  const filteredVenues = ACTIVE_LOCATIONS.filter((venue) => {
    if (selectedCity === "All") return true;
    return venue.city === selectedCity;
  });

  return (
    <section id="venue-discovery" className="py-20 bg-white border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="aquatic">UAE Facility Network</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              9 Verified Temperature-Controlled Pools
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find an authentic ANSA training pool near you across Dubai and Abu Dhabi. All pools are regulated between 28°C and 30°C year-round with certified lifeguards on duty.
            </p>
          </div>

          {/* City Filter Buttons */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shadow-2xs">
            {(["All", "Dubai", "Abu Dhabi"] as const).map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedCity === city
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {city} {city === "Dubai" ? "(7)" : city === "Abu Dhabi" ? "(2)" : "(9)"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-800 bg-sky-100/70 px-2.5 py-1 rounded-md">
                    {venue.city} · {venue.district}
                  </span>
                  <Badge variant="verified" size="sm">
                    {venue.poolCategory}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-start gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{venue.address}</span>
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 text-xs space-y-1.5 text-slate-700">
                  <p>
                    <strong className="text-slate-900">Pool Specs:</strong> {venue.poolDimensions}
                  </p>
                  <p>
                    <strong className="text-slate-900">Environment:</strong> {venue.poolEnvironment}
                  </p>
                  <p>
                    <strong className="text-slate-900">Target Water Temp:</strong> {venue.targetWaterTemp}
                  </p>
                  <p>
                    <strong className="text-slate-900">Schedule:</strong> {venue.scheduleOverview}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Venue Amenities:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {venue.amenities.slice(0, 3).map((a, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        <CheckCircleIcon className="w-3 h-3 text-teal-600 shrink-0" />
                        <span>{a}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <a
                  href={venue.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-700 hover:text-teal-700 flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </a>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenAssessmentForLocation(venue.name)}
                >
                  Enquire at This Pool
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
