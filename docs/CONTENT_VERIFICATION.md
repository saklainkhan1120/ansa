# Aqua Nation Sports Academy (ANSA) — Content Verification & Fact Audit

**Document Status:** Complete Fact Inventory & Discrepancy Register  
**Audit Date:** October 12, 2026  
**Auditor Role:** Senior Product Designer & UX Architect  
**Source Baseline:** Live production site (`https://aquanationsports.com/`), public page crawl, and ANSA Digital Operating System Proposal (October 2026).

---

## 1. Verified Facts vs. Assumptions vs. Discrepancies

### 1.1 Academy Brand & Corporate Identity
| Entity Item | Verified Fact (Source) | Assumptions / Inconsistencies | Action Required |
| :--- | :--- | :--- | :--- |
| **Legal Entity Name** | Aqua Nation Sports Academy L.L.C | Shortened casually to "ANSA" or "Aqua Nation" | Standardize on **Aqua Nation Sports Academy (ANSA)** across all headers, meta tags, and schema. |
| **Headquarters** | Dubai, United Arab Emirates | Trade license and registered office address not explicitly published on contact page. | Verify registered commercial office address for Footer & Legal imprint. |
| **Core Leadership** | - Pradeep Kumar Sreedharan: Consulting CEO & Head Coach<br>- Viji Susan Mathew: Managing Director<br>- George Mathew: Director & Sports Entrepreneur<br>- Vidhya Sukhil: Marketing Director<br>- Cherylaine Franklin: Business Ops & HR Head | None. Verified from `/team/` and official records. | Confirmed. Maintain bios, official designations, and leadership authority. |
| **Head Coach Accreditations** | - 4-Time Olympic Coach (National Swimming Coach of India)<br>- Dronacharya Awardee (Govt. of India)<br>- Eklavya Awardee<br>- 35+ years coaching experience | Mentored Olympians including Sajan Prakash, Nisha Millet, Vedaant Madhavan, Tanish George Mathew. | Confirmed. Highlight prominently as primary trust & authority anchor. |
| **Academy Accreditations** | - Dubai International Academic City (DIAC) Sports Development Award<br>- Dubai Sports Council Registered Academy | Exact permit numbers or license badges not shown on site. | Request Dubai Sports Council Academy Permit number to display in trust badges. |
| **Official Contact Channels** | - Phone / WhatsApp 1: `+971 56 244 4207`<br>- Phone / WhatsApp 2: `+971 50 565 8191`<br>- Official Email: `info@ansadxb.com`<br>- Socials: Facebook (`@AquaNationSportsAcademy`), Instagram (`@ansadxb`), LinkedIn (`@aqua-nation-sports-academy`) | The live site footer had malformed HTML (`mailto:%22info@ansadxb.com%22` and spaces in `tel:`) | Fix href formatting so one-tap calling and emailing work seamlessly on iOS/Android. |

---

### 1.2 Training Venues & Facilities (The 9 vs. 10 Discrepancy)
The live site asserts "10+ Centres across UAE" in headers and copy, but lists varying venues across different pages.

| # | Venue Name | Location / City | Pool Specification | Listed Programs | Discrepancy / Uncertainty |
| :- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Swiss International Scientific School (SISD) — Olympic** | Dubai Healthcare City 2, Al Jaddaf, Dubai | 50m Olympic-Size, Semi-Covered, Temperature-Controlled | Aqua Tech, Aqua Swift, Aqua Rapid | Confirmed. One of the top private 50m school facilities in Dubai. |
| **2** | **Swiss International Scientific School (SISD) — Junior** | Dubai Healthcare City 2, Al Jaddaf, Dubai | 18m Training Pool, Semi-Covered, Temperature-Controlled | Aqua Bubble, Learn 2 Swim, Aqua Star | Confirmed. Provides dedicated beginner safe zone separated from 50m squad. |
| **3** | **Al Wasl Swimming Club** | Zabeel (Near Latifa Hospital), Dubai | 25m Indoor A/C Temperature-Controlled | Bubble, Star, Tech, Swift, Rapid, Adults | Confirmed. |
| **4** | **Dubai Club for People of Determination** | Al Qusais 3 (Next to Stadium Metro / Al Nahda), Dubai | 25m Semi-Covered, Temperature-Controlled | Bubble, Star, Tech, Adults, Fitness | Confirmed. Metro accessible. |
| **5** | **New Academy School** | Mankhool, Bur Dubai | 25m Indoor Temperature-Controlled | Bubble, Star, Adults, Fitness | **Critical Bug on Live Site:** Maps button routed to GIIS Abu Dhabi directions URL! |
| **6** | **Egyptian Club** | 14th St, Oud Metha, Dubai | 25m Semi-Covered, Temperature-Controlled | Bubble, Star, Adults, Tech | Confirmed. |
| **7** | **Al Nasr Club** | 11B Street, Oud Metha, Bur Dubai | 25m Indoor Temperature-Controlled | Bubble, Star, Tech, Adults, Fitness | Confirmed. |
| **8** | **Ambassador International Academy** | Al Khail Gate, Al Quoz, Dubai | 25m Indoor Temperature-Controlled | Bubble, Star, Tech, Adults, Fitness | Confirmed. |
| **9** | **Bright Riders School** | Plot P1C, Zone 17_01, Mohammed Bin Zayed (MBZ) City, Abu Dhabi | 25m Indoor Temperature-Controlled | Bubble, Star, Adults, Fitness, Tech | Confirmed Abu Dhabi hub. |
| **10** | **GIIS School (Global Indian International School)** | Bani Yas, Abu Dhabi | 25m Indoor Temperature-Controlled | Bubble, Star, Adults, Fitness | Confirmed Abu Dhabi hub. |
| **?** | **Springdales School** | Al Quoz 4, Dubai | Mentioned in FAQ Question #1 only | Not listed on `/location/` | **Uncertainty:** Is Springdales an active operational venue, a seasonal venue, or a former venue? |

> **Action Required:** Confirm with ANSA management whether Springdales School is currently operational. If active, add full pool specs and schedule; if inactive, remove from FAQ to avoid parent confusion.

---

### 1.3 Programme Ladder & Progression Matrix
| Program Level | Target Swimmer / Age | Session Duration | Student-to-Coach Ratio | Core Focus & Exit Milestone |
| :--- | :--- | :--- | :--- | :--- |
| **Aqua Bubble** | Beginners & Toddlers (Age 4.5+ yrs) | 45 minutes | **Max 1:6** (Verified) | Water familiarisation, bubble blowing, submersion, floating, streamline kick, up to 25m freestyle. Coaches in-water. No goggles initially. |
| **Aqua Star** | Intermediate Beginners | **60 minutes** (Conflicting: 60 min vs 90 min on old site) | **1:8 to 1:10** (Verified) | Technique refinement, streamline push-offs, backstroke introduction. Exit: 50m freestyle + backstroke with continuous kicking. |
| **Aqua Tech** | Pre-Competitive Stroke School | **60 & 90 minutes** (Varies by squad) | **1:10 to 1:15** (Verified) | Foundation for competitive swimming. All 4 strokes (Freestyle, Backstroke, Breaststroke, Butterfly), racing dive starts, tumble turns. |
| **Aqua Swift** | Competitive Junior Squad | 90 minutes | Competitive team grouping | Endurance development, stroke biomechanics, racing speed, interval sets, local gala preparation. |
| **Aqua Rapid** | Elite Squad | 120 minutes | Elite team grouping | High-performance competitive squad. Target: National championships, Asian Games, World Aquatics, Olympics. |
| **Aqua Fitness** | Teens, Adults & Seniors | 60 minutes | Group fitness | Aqua Aerobics & Hydrotherapy. Low-impact cardiovascular resistance, joint mobility, rehabilitation, and prenatal/postnatal recovery. |
| **Aqua Adult** | Adults (16+ yrs) | 60 minutes | Adult small group | Beginner water confidence to stroke refinement and adult fitness. |

> **Uncertainty Flag — Assessment & Promotion Criteria:**  
> The FAQ mentions "continuous assessment from time to time assessing technique, endurance, discipline, team spirit, sportsmanship."  
> *Question for ANSA:* Is there a formal assessment scorecard or digital level graduation certificate provided to parents when a child transitions (e.g., Bubble to Star)?

---

### 1.4 Coaching Team Verification
From live `/team/` inspection:
1. **Pradeep Kumar Sreedharan** — Consulting CEO & Head Coach (35+ years experience, Dronacharya Award, 4-time Olympian Coach).
2. **Abin Jose TP** — Head Coach (10+ Years Exp, NIS, SFI-2, World Aquatics-1, ASCA-5).  
   *Note: Duplicated twice on old WordPress site.*
3. **Anantha Krishnan** — Swimming Coach (8+ years, ASCA Level 3, SFI-1, S&C-1, First Aid, CPR & AED).
4. **Harshani D S** — Swimming Coach (Female Coach, 6+ Years Exp, S&C-1, First Aid & CPR).
5. **Sabin S S** — Swimming Coach (7+ years Exp, KSA-1, ASCA Level-5, First Aid & CPR).
6. **Iresha Wijethunga** — Swimming Coach (Female Coach, 8+ Years, B.Sc.Ed, ASCA-1, Pedagogy, Aqua Aerobics & Therapy).
7. **Fathima Amna** — Swimming Coach (Female Coach, 6+ Years Exp, ASCA-1 & 2, STA-1).
8. **Ajilal Anil Kumar** — Swimming Coach (12+ years Exp, ASCA-1&2, SFI-1, Lifeguard).
9. **Vineeth K S** — Swimming Coach (8+ years Exp, B.P.Ed, NIS, ASCA-1&2, SFI-1, CPR & AED).
10. **Arun K** — Swimming Coach (5+ years Exp, ASCA Level 1 & 2, SFI-1, S&C-1, First Aid & CPR).
11. **Abhijith Nair** — Swimming Coach (3+ years Exp, B.P.Ed, ASCA Level-1, S&C-1, First Aid & CPR).
12. **Abhijith R** — Swimming Coach (5+ years Exp, Lifeguard, First Aid & CPR).
13. **Anand T** — Swimming Coach (8+ years Exp).
14. **Manoj** — Coach (Mentioned in authentic parent testimonials).

> **Uncertainty Flag — Coach Location Mapping:**  
> The live site does not indicate which coach teaches at which specific venue or pool.  
> *Question for ANSA:* Can we display coach assignment badges per centre (e.g., "Coaches at Al Wasl & SISD") so parents know who will be coaching their child?

---

### 1.5 Authentic Athletes & Champions Roster
17 champions verified with authentic photography and national/international accolades:
1. **Sajan Prakash** — Two-time Olympian (Rio 2016, Tokyo 2020), Asian Games 2023.
2. **Vedaant Madhavan** — Indian International Swimmer, Medallist (Malaysian Open, Danish Open, Latvian Open), Commonwealth Youth Games.
3. **Tanish George Mathew** — Indian International Swimmer, Eklavya Awardee, Asian Games 2023.
4. **Sanjana Prabhugaonkar** — National Level Champion.
5. **Naythan Anthony Rajesh** — National Swimmer.
6. **Sudipt Sudhanshu** — National Swimmer.
7. **Kritharth Pandya** — National Medalist.
8. **Kaadambaree Mahesh** — International Medalist.
9. **Samarvir Sharma** — National Swimmer.
10. **Arjunn Girish** — International Medalist.
11. **Vignesh Umesh Menon** — National Swimmer.
12. **Zenin Nishad** — National Swimmer.
13. **Mohina Singh** — National Swimmer.
14. **Aahana Afzal** — International Medalist.
15. **Malavika Renjith** — International Medalist.
16. **Jiya Nirav Gandhi** — International Medalist.
17. **Saimeera Janarthan Janani** — International Medalist.

---

### 1.6 Authentic Reviews & Testimonials
Verifiable Google Reviews via Trustindex widget on live site:
- **Ligesh Gopi**: Commends Coaches Abhi, Amnaa, Shani.
- **Prashanth Kumar**: Detailed testimonial commending Coach Abhijit for daughter's progression, safety, and encouragement.
- **vivekksankar**: Highlights Coach Abhijith Ramdas for technique and confidence.
- **Peichi Shih**: Commends schedule flexibility, small class ratios (max 4-6 kids in practice), and coach video updates.
- **Savita Menon**: Long-standing family association.
- **Vinoth Khumar**: Daughter in Aqua Star with Abhijith.
- **Jithin Sreenivasan**: Al Quoz branch testimonial commending Coach Anantha Krishnan.
- **Aparna Choletti**: Structured classes and coach conduct.
- **Binil Kumar**: Structured swim training with coaches Ananthakrishnan and Anand.
- **Parent Letters**:
  - Nataraj (Father of Pritish): Praises Vijithra and Manoj.
  - Ranjith (Father of Malavika): Praises competition exposure and discipline.
  - Abhirami Ganesh (Parents of Rohit & Vignesh): Dryland, gym sessions, and technical guidance from Vineeth Sir and Pradeep Sir.
  - Kavita Saraf (Mother of Yashvi Saraf): Overcoming deep fear of water with Arun Sir and Cherylaine.

---

## 2. Factual Uncertainties & Missing Business Data

The following items **must NOT be invented** in the code and require direct confirmation from the ANSA team:

### 2.1 Pricing & Fee Structures
- **Current Status:** The live site states "Fees structure varies based on the program for each group" with zero published prices.
- **Problem:** Total absence of pricing causes high drop-off and friction for parents searching for swimming lessons in Dubai.
- **Required Decision:**
  1. Can ANSA publish "From AED [X] / session" or "Term Packages from AED [Y]"?
  2. If pricing remains private, we should implement a dynamic **"Request Fee Structure & Schedule"** modal that delivers instant transparent quotes to parent's WhatsApp/email without manual phone tag.
  3. Are there standard registration fees, assessment fees, or sibling discounts (e.g., 10% for second child)?

### 2.2 Trial Class Terms
- **Current Status:** Buttons alternate between "Book An Assessment", "Book a Free Swimming Trial Class", and "Join Now".
- **Required Clarification:**
  - Is the initial water assessment completely **free of charge** at all 9 centres, or is it chargeable / deductible against term enrolment?
  - What is the duration of an initial assessment session (typically 20–30 mins)?

### 2.3 Springdales School Status
- Listed in FAQ #1, but omitted from `/location/` and from the CRM location codes.
- *Confirm:* Is Springdales active or decommissioned?

### 2.4 Zoho CRM Webhook & Field Mapping
- The existing form posted raw CRM fields including:
  - Lead Status (`Awaiting ASMT DT/FAC TOUR`, `Fee Sent`, `Junk Lead`, etc.)
  - Lead Source (`Meta Ads`, `Google Search`, `WhatsApp`, etc.)
  - Location Codes (`AIAD`, `AJAD`, `AUH`, `BRSAD`, `CSD`, `DC`, `DXB`, `ECD`, `GIISAD`, `NASD`, `SDD`, `SISD-LC`, `SISD-SC`, `WASL`)
- *Action Required:* Secure server-side API integration or hidden form parameters to map customer submissions cleanly into Zoho CRM without exposing CRM internal mechanics.

### 2.5 Child Safeguarding & Photography Consent
- Testimonials mention coaches sharing videos with parents, and photos of minors are displayed on the website.
- Under **UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL)** and child protection laws:
  - A formal **Child Safeguarding & Media Consent Policy** page is legally required.
  - Parental consent must be captured explicitly for youth athletes.
