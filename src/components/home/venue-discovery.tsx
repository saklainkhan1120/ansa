"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPinIcon, SwimIcon, ExternalLinkIcon, CheckCircleIcon } from "@/components/ui/icons";
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
  const [featuredVenueId, setFeaturedVenueId] = useState<string>("sisd-al-jaddaf");

  const filteredVenues = ACTIVE_LOCATIONS.filter((venue) => {
    if (selectedCity === "All") return true;
    return venue.city === selectedCity;
  });

  const featuredVenue = ACTIVE_LOCATIONS.find((v) => v.id === featuredVenueId) || ACTIVE_LOCATIONS[0];
  const featuredImageSrc = VENUE_IMAGES[featuredVenue.id] || "/images/hero/hero-banner.jpg";

  return (
    <section id="venue-discovery" className="py-20 lg:py-28 bg-[#F0F9FF] border-b border-sky-100/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
              Campus Facilities &amp; Aquatic Centres
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight">
              9 Regulated Swimming Venues
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Trained across 50m Olympic competition pools, 25m semi-Olympic facilities, and dedicated warm learner basins. All pools regulated between 28°C and 30°C.
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-sky-200/80 shadow-xs self-start md:self-auto gap-1">
            {(["All", "Dubai", "Abu Dhabi"] as const).map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedCity === city
                    ? "bg-[#0D9488] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0A2540] hover:bg-sky-50"
                }`}
              >
                {city} {city === "Dubai" ? "(7)" : city === "Abu Dhabi" ? "(2)" : "(9)"}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout: Featured Showcase (Left) + Interactive Directory (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Campus Stage (7 Columns on Large Screens) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-sky-200/90 shadow-md overflow-hidden flex flex-col justify-between">
            <div>
              {/* Large High-Res Swimming Pool Photo */}
              <div className="relative w-full aspect-16/10 sm:aspect-16/9 bg-sky-100 overflow-hidden">
                <Image
                  src={featuredImageSrc}
                  alt={`${featuredVenue.displayName} pool facility in ${featuredVenue.city}, UAE`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-all duration-700"
                />
                
                {/* Aquatic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-white/95 backdrop-blur-md text-[#0A2540] text-xs font-extrabold px-3 py-1 rounded-lg border border-sky-200 shadow-xs">
                    {featuredVenue.city} · {featuredVenue.district}
                  </span>
                  <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-xs">
                    {featuredVenue.poolCategory}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-[#0A2540]/90 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" aria-hidden="true" />
                  <span>28°C–30°C Chilled/Heated</span>
                </div>

                {/* Featured Headline on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold text-teal-300 tracking-wider uppercase">
                    Featured Training Facility
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight drop-shadow-xs">
                    {featuredVenue.displayName}
                  </h3>
                </div>
              </div>

              {/* Detailed Specs & Features */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <MapPinIcon className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{featuredVenue.address}</span>
                </div>

                {/* Specs Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-[#F8FCFD] p-3 rounded-2xl border border-sky-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Dimensions
                    </span>
                    <span className="text-xs font-bold text-[#0A2540] block mt-0.5 truncate">
                      {featuredVenue.poolDimensions}
                    </span>
                  </div>
                  <div className="bg-[#F8FCFD] p-3 rounded-2xl border border-sky-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Water Temp
                    </span>
                    <span className="text-xs font-bold text-teal-800 block mt-0.5">
                      28°C – 30°C Regulated
                    </span>
                  </div>
                  <div className="bg-[#F8FCFD] p-3 rounded-2xl border border-sky-100 col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Lifeguard Status
                    </span>
                    <span className="text-xs font-bold text-emerald-700 block mt-0.5">
                      100% Certified On-Duty
                    </span>
                  </div>
                </div>

                {/* Amenities Badges */}
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Campus Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredVenue.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-slate-700 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/90 flex items-center gap-1.5 font-medium"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                    {featuredVenue.metroStation && (
                      <span className="text-xs text-sky-800 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200 font-semibold flex items-center gap-1">
                        <span>🚇</span>
                        <span>{featuredVenue.metroStation}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Actions */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenAssessmentForLocation(featuredVenue.name)}
                className="flex-1 py-3.5 px-6 bg-[#0D9488] hover:bg-[#0f766e] text-white font-extrabold rounded-2xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <SwimIcon className="w-4 h-4" />
                <span>Book Assessment at this Campus</span>
              </button>

              <a
                href={featuredVenue.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 bg-white hover:bg-sky-50 text-[#0A2540] hover:text-sky-800 border border-sky-200 rounded-2xl text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <ExternalLinkIcon className="w-4 h-4 text-sky-600" />
                <span>Get Directions ↗</span>
              </a>
            </div>
          </div>

          {/* Directory of Other Campuses (5 Columns on Large Screens) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-sky-200/60">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                All Locations ({filteredVenues.length})
              </span>
              <span className="text-xs text-slate-500">
                Click any pool to view specs
              </span>
            </div>

            <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredVenues.map((venue) => {
                const isSelected = venue.id === featuredVenue.id;
                const thumbImg = VENUE_IMAGES[venue.id] || "/images/facilities/al-wasl-pool.jpg";
                return (
                  <div
                    key={venue.id}
                    onClick={() => setFeaturedVenueId(venue.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-white border-teal-500 shadow-md ring-1 ring-teal-500"
                        : "bg-white/80 hover:bg-white border-sky-100 hover:border-sky-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-sky-50">
                        <Image
                          src={thumbImg}
                          alt={venue.displayName}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 text-left">
                        <p className={`font-bold text-xs sm:text-sm truncate ${isSelected ? "text-teal-900" : "text-[#0A2540]"}`}>
                          {venue.displayName}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {venue.city} · {venue.district}
                        </p>
                        <p className="text-[10px] text-teal-700 font-semibold truncate">
                          {venue.poolDimensions}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5">
                      <a
                        href={venue.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Get Directions on Google Maps"
                        className="p-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
