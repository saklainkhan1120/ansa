/**
 * Aqua Nation Sports Academy (ANSA) - Content Type Definitions
 * Single-source of truth schema for programmes, venues, coaches, champions, FAQs, and contact data.
 * Includes explicit VerificationStatus metadata to separate verified facts from assumptions.
 */

export type VerificationStatus = 
  | "verified_official"      // Publicly verified from official academy records & authentic assets
  | "pending_confirmation"  // Awaiting explicit business/operational confirmation (e.g. Springdales)
  | "internal_restricted";  // Operational information excluded from public client bundles

export type City = "Dubai" | "Abu Dhabi";

export type PoolCategory = "50m Olympic" | "25m Semi-Olympic" | "18m Training";

export interface Programme {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  targetAge: string;
  minAgeYears: number;
  durationMinutes: number;
  coachRatio: string;
  inWaterCoach: boolean;
  summary: string;
  curriculum: string[];
  exitMilestones: string[];
  equipmentGuidelines: string[];
  recommendedFor: string;
  category: "learn_to_swim" | "stroke_development" | "competitive_squad" | "adult_fitness";
  verificationStatus: VerificationStatus;
}

export interface VenueLocation {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  city: City;
  district: string;
  address: string;
  poolCategory: PoolCategory;
  poolEnvironment: string; // e.g. "Indoor A/C Temperature-Controlled" or "Semi-Covered"
  poolDimensions: string;  // e.g. "50m x 25m, 10 Lanes, 2m depth"
  temperatureControlled: boolean;
  targetWaterTemp: string; // "28°C - 30°C year-round"
  hasParking: boolean;
  nearMetro: boolean;
  metroStation?: string;
  amenities: string[];
  scheduleOverview: string; // "Tuesday to Sunday (Mondays Closed)"
  googleMapsDirectionsUrl: string;
  availableProgrammeIds: string[];
  isActive: boolean; // Set to false if pending confirmation (e.g., Springdales)
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
}

export interface Coach {
  id: string;
  name: string;
  designation: string;
  isLeadership: boolean;
  isLadyCoach: boolean;
  experienceYears: number;
  nationalitiesOrigin?: string; // e.g. "Asia (India, Sri Lanka)"
  accreditations: string[];     // ASCA, SFI, NIS, World Aquatics, B.P.Ed
  safetyCertifications: string[]; // CPR, AED, Lifeguard, First Aid
  bioSummary: string;
  verificationStatus: VerificationStatus;
}

export interface Champion {
  id: string;
  name: string;
  title: string;
  honours: string[];
  gamesRepresented: string[]; // e.g. "Olympics (Rio 2016, Tokyo 2020)", "Asian Games 2023"
  photoPath: string;
  verificationStatus: VerificationStatus;
}

export interface FAQItem {
  id: string;
  category: "admissions" | "programmes" | "safety" | "schedules" | "fees_policies";
  question: string;
  answer: string;
  verificationStatus: VerificationStatus;
}

export interface OfferCampaign {
  id: string;
  title: string;
  slug: string;
  category: "swim_camp" | "aqua_fitness" | "group_training";
  targetAudience: string;
  locationsAvailable: string[];
  description: string;
  verificationStatus: VerificationStatus;
  terms: string[];
}

export interface OfficialContactChannel {
  channel: string;
  displayValue: string;
  actionHref: string;
  purpose: string;
  isPrimary: boolean;
}

export interface AcademyProfile {
  legalName: string;
  shortName: string;
  brandTagline: string;
  foundingMentorship: string;
  dronacharyaAwardee: string;
  registeredEmirate: string;
  operatingDays: string;
  operatingHours: string;
  emergencyFirstAidResponse: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
