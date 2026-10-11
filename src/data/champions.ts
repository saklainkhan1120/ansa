import { Champion } from "@/types/content";

export const CHAMPIONS: Champion[] = [
  {
    id: "sajan-prakash",
    name: "Sajan Prakash",
    title: "Two-Time Olympian & National Record Holder",
    honours: [
      "Represented India at Rio 2016 & Tokyo 2020 Olympic Games",
      "Finalist at Asian Games 2023",
      "Multiple National Record Holder in 200m Butterfly"
    ],
    gamesRepresented: ["Rio 2016 Olympics", "Tokyo 2020 Olympics", "Asian Games 2023"],
    photoPath: "/images/champions/sajan-prakash.jpg",
    verificationStatus: "verified_official"
  },
  {
    id: "vedaant-madhavan",
    name: "Vedaant Madhavan",
    title: "Indian International Swimmer & Medallist",
    honours: [
      "Gold & Silver Medallist at Danish Open",
      "Medallist at Malaysian Open and Latvian Open Championships",
      "Represented India at the Commonwealth Youth Games"
    ],
    gamesRepresented: ["Danish Open", "Malaysian Open", "Commonwealth Youth Games"],
    photoPath: "/images/champions/vedaant-madhavan.jpg",
    verificationStatus: "verified_official"
  },
  {
    id: "tanish-george-mathew",
    name: "Tanish George Mathew",
    title: "Eklavya Awardee & Asian Games Swimmer",
    honours: [
      "Recipient of the prestigious Eklavya Award",
      "Represented India at the Asian Games 2023",
      "National Gold Medallist & Butterfly Specialist"
    ],
    gamesRepresented: ["Asian Games 2023", "National Aquatic Championships"],
    photoPath: "/images/champions/tanish-george-mathew.jpg",
    verificationStatus: "verified_official"
  },
  {
    id: "sanjana-prabhugaonkar",
    name: "Sanjana Prabhugaonkar",
    title: "National Level Swimming Champion",
    honours: [
      "National Championship Medallist",
      "Backstroke and Freestyle Podium Finisher"
    ],
    gamesRepresented: ["National Games", "National Junior Aquatics"],
    photoPath: "/images/champions/sanjana-prabhugaonkar.jpg",
    verificationStatus: "verified_official"
  },
  {
    id: "naythan-anthony-rajesh",
    name: "Naythan Anthony Rajesh",
    title: "National Swimmer",
    honours: ["State & National Level Competitor"],
    gamesRepresented: ["National Level Meets"],
    photoPath: "/images/champions/sajan-prakash.jpg", // fallback
    verificationStatus: "verified_official"
  },
  {
    id: "kaadambaree-mahesh",
    name: "Kaadambaree Mahesh",
    title: "International Medallist",
    honours: ["International Open Medallist & Podium Finisher"],
    gamesRepresented: ["International Aquatic Invitationals"],
    photoPath: "/images/champions/sanjana-prabhugaonkar.jpg", // fallback
    verificationStatus: "verified_official"
  },
  {
    id: "kritharth-pandya",
    name: "Kritharth Pandya",
    title: "National Medallist",
    honours: ["National Age-Group Medallist"],
    gamesRepresented: ["National Championships"],
    photoPath: "/images/champions/vedaant-madhavan.jpg", // fallback
    verificationStatus: "verified_official"
  },
  {
    id: "arjunn-girish",
    name: "Arjunn Girish",
    title: "International Medallist",
    honours: ["International Age-Group Medallist"],
    gamesRepresented: ["International Invitational Meets"],
    photoPath: "/images/champions/tanish-george-mathew.jpg", // fallback
    verificationStatus: "verified_official"
  }
];
