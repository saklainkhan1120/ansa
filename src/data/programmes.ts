import { Programme } from "@/types/content";

export const PROGRAMMES: Programme[] = [
  {
    id: "aqua-bubble",
    slug: "aqua-bubble",
    name: "Aqua Bubble",
    tagline: "Water Comfort & Life-Saving Water Safety Foundation",
    targetAge: "Toddlers & Young Children (Age 4.5+ years)",
    minAgeYears: 4.5,
    durationMinutes: 45,
    coachRatio: "Strict Max 1:6 (Coach in Water)",
    inWaterCoach: true,
    summary: "Gentle, confidence-building aquatic familiarisation for early swimmers. Children conquer water fear, master submersions, and learn basic breath control in shallow, warm water.",
    curriculum: [
      "Water acclimation and blowing rhythmic bubbles",
      "Submersion, eye-opening, and relaxed breath control",
      "Assisted & unassisted horizontal star-floating (front and back)",
      "Streamline glide with gentle flutter kick off pool steps",
      "Self-rescue instincts: turning back to pool edge and climbing out safely",
      "Introductory freestyle arm recovery up to 25m continuous swim"
    ],
    exitMilestones: [
      "Can submerge comfortably without panic or nose-holding",
      "Floats independently on front and back for 10+ seconds",
      "Kicks 25 metres continuously on front and back with kickboard",
      "Safe unassisted water entry and recovery to the wall"
    ],
    equipmentGuidelines: [
      "Proper swimming costume (girls) or trunks (boys) - no loose board shorts",
      "Swim cap mandatory for hair containment",
      "Goggles are discouraged at this initial stage so children develop natural water safety instinct without optical dependence (unless medically advised)"
    ],
    recommendedFor: "Children age 4.5+ who have never swum or feel apprehensive around pools.",
    category: "learn_to_swim",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-star",
    slug: "aqua-star",
    name: "Aqua Star",
    tagline: "Stroke Technique Refinement & Backstroke Foundation",
    targetAge: "Junior Swimmers (Age 5 - 9 years)",
    minAgeYears: 5,
    durationMinutes: 60,
    coachRatio: "Max 1:8 to 1:10",
    inWaterCoach: false,
    summary: "Refining freestyle biomechanics and introducing backstroke propulsion. Swimmers build stamina and stroke rhythm in semi-deep water while having structured fun.",
    curriculum: [
      "Streamline wall push-offs in tight hydrodynamic arrow posture",
      "Bilateral breathing rhythm (breathing every 3 strokes)",
      "Continuous backstroke arm turnover and steady flutter kick",
      "Deep water tread-water survival skills for 60 seconds",
      "Introductory dolphin kick motion off walls"
    ],
    exitMilestones: [
      "50m continuous freestyle with consistent side breathing",
      "50m continuous backstroke with steady horizontal body alignment",
      "Correct streamline push-offs off the wall past the flags",
      "Demonstrated water independence in 2m+ deep water"
    ],
    equipmentGuidelines: [
      "Fitted competition swimwear",
      "Comfortable anti-fog training goggles",
      "Silicone swim cap"
    ],
    recommendedFor: "Swimmers who can swim 25m unassisted and are ready to learn backstroke and bilateral breathing.",
    category: "stroke_development",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-tech",
    slug: "aqua-tech",
    name: "Aqua Tech",
    tagline: "Pre-Competitive 4-Stroke Mastery & Racing Foundations",
    targetAge: "Development Swimmers (Age 7 - 14 years)",
    minAgeYears: 7,
    durationMinutes: 60,
    coachRatio: "Max 1:10 to 1:12",
    inWaterCoach: false,
    summary: "Building technical excellence across all four competitive strokes (Freestyle, Backstroke, Breaststroke, Butterfly) with racing dive starts and legal competition turns.",
    curriculum: [
      "Full Breaststroke timing: pull, breathe, kick, glide synchronization",
      "Butterfly stroke biomechanics: undulation, double kick per arm cycle",
      "Racing starts: track start off starting blocks with streamlined entry",
      "Tumble turns (Freestyle & Backstroke) and touch turns (Breast & Fly)",
      "Pace-clock reading, lane etiquette, and set management"
    ],
    exitMilestones: [
      "Legal 100m Individual Medley (IM) execution according to World Aquatics rules",
      "Correct execution of all 4 competitive turns without pause",
      "Track start off the block maintaining streamline depth",
      "Readiness for Junior Gala and developmental squad trials"
    ],
    equipmentGuidelines: [
      "Training fins (short blade)",
      "Standard kickboard and pull buoy",
      "Racing goggles and silicone cap"
    ],
    recommendedFor: "Swimmers proficient in Freestyle and Backstroke who want to learn Breaststroke, Butterfly, and racing turns.",
    category: "stroke_development",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-swift",
    slug: "aqua-swift",
    name: "Aqua Swift",
    tagline: "Performance Squad: Aerobic Endurance & Race Strategy",
    targetAge: "Junior Competitive Athletes (Age 8 - 15 years)",
    minAgeYears: 8,
    durationMinutes: 90,
    coachRatio: "Squad Grouping (Assigned Squad Coach)",
    inWaterCoach: false,
    summary: "Rigorous competitive squad training designed to build aerobic capacity, race-pace endurance, mental resilience, and stroke efficiency under fatigue.",
    curriculum: [
      "High-volume aerobic base building and lactate threshold intervals",
      "Stroke biomechanics analysis and underwater camera feedback",
      "Race split pacing, sprint finishes, and stroke count maintenance",
      "Dryland strength & conditioning: core stability, flexibility, injury prevention",
      "Preparation for UAE inter-club galas and national age-group meets"
    ],
    exitMilestones: [
      "Qualification times achieved for UAE National Club Championships",
      "Ability to complete 2,500m - 3,500m structured training sessions",
      "Consistent stroke mechanics maintained under high physiological load"
    ],
    equipmentGuidelines: [
      "Full competitive training gear (fins, pull buoy, paddles, snorkel, mesh bag)",
      "Club team uniform and cap"
    ],
    recommendedFor: "Aspiring competitive swimmers selected via technical assessment.",
    category: "competitive_squad",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-rapid",
    slug: "aqua-rapid",
    name: "Aqua Rapid",
    tagline: "Elite High-Performance Squad (Olympic & International Pathway)",
    targetAge: "National & International Swimmers",
    minAgeYears: 10,
    durationMinutes: 120,
    coachRatio: "Elite Squad Mentorship (Head Coach Directed)",
    inWaterCoach: false,
    summary: "The flagship high-performance squad coached under the direct mentorship of 4-time Olympian Coach Pradeep Kumar. Targeted at national record holders, Asian Games, and Olympic aspirants.",
    curriculum: [
      "Elite aerobic, threshold, and VO2-max cycle periodisation",
      "High-speed velocity training with targeted drag reduction",
      "Comprehensive dryland gym and strength periodisation program",
      "Sports nutrition, race recovery protocols, and competitive psychology",
      "National and International championship tapering"
    ],
    exitMilestones: [
      "National championship podium finishes",
      "Selection for national squads, Asian Games, Commonwealth, or World Aquatics events",
      "Olympic trial standard achievements"
    ],
    equipmentGuidelines: [
      "Full high-performance competitive kit and heart rate monitors"
    ],
    recommendedFor: "Ranked national and international swimmers by trial invitation only.",
    category: "competitive_squad",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-fitness",
    slug: "aqua-fitness",
    name: "Aqua Fitness",
    tagline: "Aqua Aerobics & Hydrotherapy Conditioning",
    targetAge: "Teens, Adults & Seniors (All fitness levels)",
    minAgeYears: 16,
    durationMinutes: 60,
    coachRatio: "Group Fitness",
    inWaterCoach: true,
    summary: "A low-impact, high-energy aquatic workout combining cardiovascular exercises with water resistance. Excellent for joint rehabilitation, mobility, calorie burn, and women wellness.",
    curriculum: [
      "Water resistance aerobics using aquatic dumbbells and noodles",
      "Hydrotherapy movement to alleviate joint and back pain",
      "Core stabilization and posture correction in buoyant water",
      "Cardiovascular interval circuits with zero joint impact",
      "Relaxing aquatic mobility stretches and cooldown"
    ],
    exitMilestones: [
      "Enhanced cardiovascular stamina and muscular tone",
      "Noticeable improvement in joint flexibility and pain relief",
      "Active calorie burning in a gentle water-supported environment"
    ],
    equipmentGuidelines: [
      "Comfortable aquatic fitness swimwear",
      "Water shoes optional for enhanced pool deck traction"
    ],
    recommendedFor: "Adults seeking low-impact workouts, active recovery, or safe postpartum/rehab fitness.",
    category: "adult_fitness",
    verificationStatus: "verified_official"
  },
  {
    id: "aqua-adult",
    slug: "aqua-adult",
    name: "Aqua Adult",
    tagline: "Adult Learn-to-Swim, Fear Overcoming & Lap Mastery",
    targetAge: "Adults (Age 16+ to Seniors)",
    minAgeYears: 16,
    durationMinutes: 60,
    coachRatio: "Small Adult Group",
    inWaterCoach: true,
    summary: "Tailored adult swimming from conquering water phobia to learning effortless freestyle laps or training for triathlons. Patient, respectful coaching adapted to adult learning paces.",
    curriculum: [
      "Overcoming adult fear of deep water with patient, systematic acclimation",
      "Floating balance and relaxed breathing mechanics",
      "Energy-efficient Freestyle stroke technique (swimming without exhaustion)",
      "Backstroke and Breaststroke for leisure swimming and cardio health",
      "Lap swimming stamina and open-water confidence"
    ],
    exitMilestones: [
      "Comfortable deep-water swimming without hesitation",
      "Continuous 100m+ lap swimming for cardio fitness",
      "Achievement of personal leisure or fitness goals"
    ],
    equipmentGuidelines: [
      "Comfortable adult swimwear and goggles",
      "Swim cap"
    ],
    recommendedFor: "Any adult who wants to learn to swim from scratch or improve their lap technique.",
    category: "adult_fitness",
    verificationStatus: "verified_official"
  }
];
