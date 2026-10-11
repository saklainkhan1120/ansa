"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPinIcon, SwimIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ACTIVE_LOCATIONS } from "@/data/locations";

interface VenueDiscoveryProps {
  onOpenAssessmentForLocation: (locationName: string) => void;
}

const VENUE_IMAGES: Record<string, string> = {
  "al-wasl-club": "/images/facilities/al-wasl-pool.jpg",
  "brighton-college-abu-dhabi": "/images/facilities/all-ages-pool.jpeg",
  "cranleigh-abu-dhabi": "/images/hero/hero-banner.jpg",
  "al-mizhar-american-academy": "/images/facilities/al-wasl-pool.jpg",
  "collegiate-international-school": "/images/hero/training-session.jpeg",
  "dubai-british-school-jumeirah-park": "/images/facilities/all-ages-pool.jpeg",
  "uptown-international-school": "/images/facilities/al-wasl-pool.jpg",
  "asfaa-academy-al-qusais": "/images/hero/training-session.jpeg",
  "delta-english-school": "/images/facilities/all-ages-pool.jpeg",
};

export function VenueDiscovery({ onOpenAssessmentForLocation }: VenueDiscoveryProps) {
  const [selectedCity, setSelectedCity] = useState<"All" | "Dubai" | "Abu Dhabi">("All");

  const filteredVenues = ACTIVE_LOCATIONS.filter((venue) => {
    if (selectedCity === "All") return true;
    return venue.city === selectedCity;
  });

  return (
    <section id="venue-discovery" className="py-20 bg-[#F0F9FF] border-y border-sky-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="teal">UAE Facility Network</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
              9 Temperature-Controlled Pool Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find an authentic ANSA training pool near you across Dubai and Abu Dhabi. All pools are regulated between 28°C and 30°C year-round with certified lifeguards on duty.
            </p>
          </div>

          {/* City Filter Buttons */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-sky-200 self-start md:self-auto shadow-2xs gap-1">
            {(["All", "Dubai", "Abu Dhabi"] as const).map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={
                  "px-4 py-2 text-xs font-bold rounded-xl transition-all " +
                  (selectedCity === city
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900")
                }
              >
                {city} {city === "Dubai" ? "(7)" : city === "Abu Dhabi" ? "(2)" : "(9)"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVenues.map((venue) => {
            const imageSrc = VENUE_IMAGES[venue.id] || "/images/facilities/al-wasl-pool.jpg";
            return (
              <div
                key={venue.id}
                className="bg-white border border-sky-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between group"
              >
                {/* Authentic Facility Image */}
                <div className="relative w-full h-44 bg-sky-100 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={venue.name + " swimming pool in " + venue.city + ", UAE"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-teal-200 shadow-xs">
                      {venue.city}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold text-sky-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
                      {venue.poolCategory}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-xs font-medium text-sky-200">{venue.district}</p>
                    <h3 className="text-lg font-bold leading-tight drop-shadow-xs">{venue.displayName}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <MapPinIcon className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="truncate">{venue.district}, {venue.city}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                      <div className="bg-sky-50/70 p-2 rounded-xl text-sky-900 font-medium">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Specs</span>
                        <span className="truncate block">{venue.poolDimensions}</span>
                      </div>
                      <div className="bg-teal-50/70 p-2 rounded-xl text-teal-900 font-medium">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Water Temp</span>
                        {venue.temperatureControlled ? "28°C – 30°C Regulated" : "Ambient Regulated"}
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Campus Amenities:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {venue.amenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onOpenAssessmentForLocation(venue.displayName)}
                      className="w-full justify-center text-xs font-bold py-2.5 rounded-xl"
                    >
                      <SwimIcon className="w-4 h-4" />
                      Book Assessment at this Pool
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
