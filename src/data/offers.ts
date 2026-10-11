import { OfferCampaign } from "@/types/content";

export const OFFERS: OfferCampaign[] = [
  {
    id: "aqua-aerobics-wellness",
    title: "Aqua Aerobics & Hydrotherapy Sessions",
    slug: "aqua-aerobics-wellness",
    category: "aqua_fitness",
    targetAudience: "Adults, Women, Seniors, and Post-Rehab Swimmers",
    locationsAvailable: [
      "Swiss International Scientific School (Al Jaddaf)",
      "Dubai Club for People of Determination (Al Qusais 3)",
      "Al Wasl Swimming Club (Zabeel)"
    ],
    description: "Low-impact, high-energy aquatic workouts designed to improve mobility, boost cardiovascular health, and support joint pain relief under certified female instructors.",
    verificationStatus: "verified_official",
    terms: [
      "Available across Jaddaf, Qusais & Zabeel facilities",
      "Flexible session passes available upon request",
      "Prior registration required due to pool capacity limits"
    ]
  },
  {
    id: "women-wellness-program",
    title: "Dedicated Women Wellness Swimming",
    slug: "women-wellness-program",
    category: "aqua_fitness",
    targetAudience: "Women seeking private and comfortable aquatic wellness",
    locationsAvailable: [
      "Al Wasl Swimming Club (Zabeel)",
      "Swiss International Scientific School (Al Jaddaf)",
      "New Academy School (Mankhool)"
    ],
    description: "A tailored wellness program focused on physical fitness, self-care, and strength with certified lady coaches ensuring cultural comfort.",
    verificationStatus: "verified_official",
    terms: [
      "Female instructor led",
      "Covered and climate-controlled pool sessions",
      "All fitness levels welcome"
    ]
  },
  {
    id: "seasonal-swim-camps",
    title: "Intensive Seasonal Swim Camps (Summer & Winter)",
    slug: "seasonal-swim-camps",
    category: "swim_camp",
    targetAudience: "Children (Ages 4.5 to 15 years)",
    locationsAvailable: [
      "Dubai Centres (Al Jaddaf, Al Quoz, Al Qusais, Mankhool)",
      "Abu Dhabi Centres (MBZ City, Bani Yas)"
    ],
    description: "Accelerate your child's swimming development during school breaks with structured daily training modules focusing on stroke refinement, endurance, and water games.",
    verificationStatus: "verified_official",
    terms: [
      "Conducted during official UAE school holidays",
      "Limited slots per pool to maintain small group ratios",
      "Pre-registration required"
    ]
  }
];
