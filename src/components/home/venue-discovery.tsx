"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPinIcon, SwimIcon, ExternalLinkIcon, CheckCircleIcon } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { ACTIVE_LOCATIONS } from "@/data/locations";

interface VenueDiscoveryProps {
  onOpenAssessmentForLocation: (locationName: string) => void;
}

const VENUE_IMAGES: Record<string, string> = {
  "sisd-al-jaddaf": "/images/hero/hero-banner.jpg",
  "al-wasl-club": "/images/facilities/al-wasl-pool.jpg",
  "dubai-club-al-qusais": "/images/facilities/all-ages-pool.jpeg",
  "new-academy-mankhool": "/images/facilities/al-wasl-pool.jpg",
  "egyptian-club-oud-metha": "/images/facilities/all-ages-pool.jpeg",
  "al-nasr-club-oud-metha": "/images/facilities/al-wasl-pool.jpg",
  "ambassador-al-quoz": "/images/facilities/all-ages-pool.jpeg",
  "bright-riders-mbz-city": "/images/hero/training-session.jpeg",
  "giis-bani-yas": "/images/facilities/all-ages-pool.jpeg",
};

export function VenueDiscovery({ onOpenAssessmentForLocation }: VenueDiscoveryProps) {
  const [selectedCity, setSelectedCity] = useState<"All" | "Dubai" | "Abu Dhabi">("All");

  const filteredVenues = ACTIVE_LOCATIONS.filter((venue) => {
    if (selectedCity === "All") return true;
    return venue.city === selectedCity;
  });

  return (
    <section id="venue-discovery" className="py-20 lg:py-28 bg-[#F0F9FF] border-y border-sky-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="teal">UAE Facility Network</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              9 Temperature-Controlled Pool Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Find an authentic ANSA training pool near you across Dubai and Abu Dhabi. All pools are regulated between 28°C and 30°C year-round with certified lifeguards on duty.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-sky-200 self-start md:self-auto shadow-sm gap-1">
            {(["All", "Dubai", "Abu Dhabi"] as const).map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={
                  "px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer " +
                  (selectedCity === city
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50")
                }
              >
                {city} {city === "Dubai" ? "(7 Pools)" : city === "Abu Dhabi" ? "(2 Pools)" : "(9 Pools)"}
              </button>
            ))}
          </div>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVenues.map((venue) => {
            const imageSrc = VENUE_IMAGES[venue.id] || "/images/facilities/al-wasl-pool.jpg";
            return (
              <div
                key={venue.id}
                className="bg-white border border-sky-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-teal-400 hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Authentic Facility Image Container */}
                  <div className="relative w-full h-52 bg-sky-100 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={venue.name + " swimming pool in " + venue.city + ", UAE"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Aquatic Vignette Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/20 to-transparent" />

                    {/* Top Overlaid Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-teal-200 shadow-xs">
                        {venue.city}
                      </span>
                      {venue.nearMetro && (
                        <span className="text-[10px] font-bold text-sky-900 bg-sky-50/95 backdrop-blur-md px-2 py-1 rounded-lg border border-sky-200 shadow-xs">
                          Metro Accessible
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold text-sky-950 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
                        {venue.poolCategory}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-medium text-sky-200">{venue.district}</p>
                      <h3 className="text-lg font-bold leading-tight drop-shadow-xs truncate">{venue.displayName}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <MapPinIcon className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{venue.address}</span>
                    </div>

                    {/* Specs and Water Temp Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                      <div className="bg-sky-50/80 p-2.5 rounded-xl text-sky-950 font-medium border border-sky-100/70">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Pool Dimensions</span>
                        <span className="truncate block font-semibold">{venue.poolDimensions}</span>
                      </div>
                      <div className="bg-teal-50/80 p-2.5 rounded-xl text-teal-950 font-medium border border-teal-100/70">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Water Temperature</span>
                        <span className="truncate block font-semibold">28°C – 30°C Regulated</span>
                      </div>
                    </div>

                    {/* Amenities Chips */}
                    <div className="pt-1">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Campus Features:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {venue.amenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1 font-medium"
                          >
                            <CheckCircleIcon className="w-3 h-3 text-teal-600 shrink-0" />
                            <span className="truncate max-w-[200px]">{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metro station callout if available */}
                    {venue.metroStation && (
                      <p className="text-[11px] text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200 font-medium flex items-center gap-1.5">
                        <span>🚇</span>
                        <span className="truncate">{venue.metroStation}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Bottom Actions: Assessment + Verified Google Maps Link */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={() => onOpenAssessmentForLocation(venue.name)}
                    className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <SwimIcon className="w-4 h-4" />
                    <span>Book Assessment at this Pool</span>
                  </button>

                  <a
                    href={venue.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-slate-600 hover:text-sky-700 bg-slate-50 hover:bg-sky-50 border border-slate-200 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
