import { AcademyProfile, OfficialContactChannel } from "@/types/content";

export const ACADEMY_PROFILE: AcademyProfile = {
  legalName: "Aqua Nation Sports Academy L.L.C",
  shortName: "ANSA",
  brandTagline: "Olympic Coaching & Holistic Swimming Excellence",
  foundingMentorship: "Mentored by Pradeep Kumar Sreedharan, 4-Time Olympic Coach & Dronacharya Awardee",
  dronacharyaAwardee: "Pradeep Kumar Sreedharan",
  registeredEmirate: "Dubai & Abu Dhabi, United Arab Emirates",
  operatingDays: "Tuesday to Sunday (Mondays Weekly Rest Day)",
  operatingHours: "12 Months Year-Round (Afternoon & Evening Sessions)",
  emergencyFirstAidResponse: "Certified Lifeguard & CPR Trained Coach on Deck at all times",
  socialLinks: {
    facebook: "https://www.facebook.com/AquaNationSportsAcademy",
    instagram: "https://www.instagram.com/ansadxb/",
    linkedin: "https://ae.linkedin.com/company/aqua-nation-sports-academy"
  }
};

export const CONTACT_CHANNELS: OfficialContactChannel[] = [
  {
    channel: "WhatsApp Admissions",
    displayValue: "+971 56 244 4207",
    actionHref: "https://wa.me/971562444207?text=Hi%20ANSA%20team%2C%20I%20would%20like%20to%20enquire%20about%20swimming%20classes%20and%20book%20an%20assessment.",
    purpose: "Instant Enquiries & Assessment Booking (Fastest Response)",
    isPrimary: true
  },
  {
    channel: "Telephone Direct 1",
    displayValue: "+971 56 244 4207",
    actionHref: "tel:+971562444207",
    purpose: "Admissions & Venue Assistance",
    isPrimary: true
  },
  {
    channel: "Telephone Direct 2",
    displayValue: "+971 50 565 8191",
    actionHref: "tel:+971505658191",
    purpose: "Customer Support & Abu Dhabi Centre Hotline",
    isPrimary: false
  },
  {
    channel: "Official Admissions Email",
    displayValue: "info@ansadxb.com",
    actionHref: "mailto:info@ansadxb.com",
    purpose: "Formal Inquiries, Corporate & School Partnerships",
    isPrimary: true
  }
];
