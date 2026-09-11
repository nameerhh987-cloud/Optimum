/* ============================================================
   data.js — Optimum Fitness | Monster Theme
   Central content store — no diet section
   North Nazimabad, Karachi's Premier Hardcore Training Ground
   ============================================================ */

const GYM = {
  name:        "Optimum Fitness",
  tagline:     "The Monster Den — North Nazimabad",
  phone:       "03360222340",
  altPhone:    "03001234567",
  whatsapp:    "923360222340",
  whatsappUrl: "https://wa.me/923360222340?text=Salam%20Optimum%20Fitness!%20I%20want%20to%20join%20the%20Monster%20Den%20and%20claim%20my%20free%20trial%20pass.",
  address:     "B 69 Street Number 6, Block H North Nazimabad Town, Karachi",
  landmark:    "Near 5 Star Chowrangi, KDA Flats & Shipowners College, Block H",
  mapLink:     "https://maps.google.com/?q=B+69+Street+6+Block+H+North+Nazimabad+Karachi",
  email:       "optimumfitness.nn@gmail.com",
  raastId:     "03360222340",
  bankTitle:   "Optimum Fitness Karachi",
  admission:   "PKR 1,500 (One-time registration — Waived on Quarterly Plans)",
  hours: {
    weekday:   "5:00 AM - 11:00 PM (Monday to Friday)",
    saturday:  "6:00 AM - 10:00 PM",
    sunday:    "7:00 AM - 09:00 PM",
    ladies:    "10:30 AM - 2:30 PM (Daily Dedicated Ladies Only Shift)",
  },
  social: {
    instagram: "https://instagram.com/optimumfitness",
    facebook:  "https://facebook.com/optimumfitness",
    youtube:   "https://youtube.com/optimumfitness",
  },
};

/* ── STATS ────────────────────────────────────────────────── */
const STATS = [
  { value: 500,  suffix: "+", label: "Active Beasts",      sub: "Zero quitters tolerated",  icon: "skull" },
  { value: 15,   suffix: "+", label: "Apex Coaches",       sub: "Powerlifting & IFBB cert", icon: "lightning" },
  { value: 8000, suffix: "",  label: "Sqft Monster Arena", sub: "Heavy iron & fight turf",   icon: "arena" },
  { value: 5,    suffix: "★", label: "Beast Rating",       sub: "North Nazimabad's finest",  icon: "demon" },
];

/* ── FEATURES / THE MONSTER EDGE ──────────────────────────── */
const FEATURES = [
  {
    icon:  "skull",
    tag:   "HEAVY STEEL",
    title: "DEATH-GRADE IRON",
    desc:  "Olympic Texas power bars, calibrated Eleiko steel plates, monolithic power cages, and skull-crushing dumbbells climbing to 100 kg.",
    specs: ["Calibrated Eleiko & Rogue Steel", "Texas & Ohio 29mm Power Bars", "Solid Urethane Dumbbells 2.5kg - 100kg", "6 Heavy Olympic Squat Cages"],
  },
  {
    icon:  "lightning",
    tag:   "NO MERCY",
    title: "LETHAL APEX COACHING",
    desc:  "Certified monster trainers who dismantle plateaus, enforce strict biomechanics, and forge champion physiques without fluff.",
    specs: ["IFBB & Certified Strength Specialists", "1-on-1 Biomechanical Form Audits", "Progressive Overload Periodization", "Zero Bro-Science Protocols"],
  },
  {
    icon:  "flame",
    tag:   "UNBROKEN",
    title: "INFERNO OPERATING HOURS",
    desc:  "5:00 AM to 11:00 PM non-stop iron warfare. Attack the weights before dawn or unleash nocturnal aggression. The cage never sleeps.",
    specs: ["18 Continuous Hours Every Weekday", "Early Bird Dawn Shift 5am - 9am", "Night Owl Primetime 8pm - 11pm", "Open 365 Days Including Public Holidays"],
  },
  {
    icon:  "blood",
    tag:   "DATA-DRIVEN",
    title: "SWEAT. BLEED. GROW.",
    desc:  "InBody 570 clinical composition scans every 30 days. We track muscle mass gains, visceral fat drops, and brute strength metrics.",
    specs: ["InBody 570 Medical Grade Body Scans", "Visceral Fat & Skeletal Muscle Tracking", "Monthly Strength Baseline Benchmark", "Digital Transformation App Portal"],
  },
  {
    icon:  "bone",
    tag:   "EXCLUSIVE",
    title: "DEDICATED LADIES SANCTUM",
    desc:  "Private floor with separate entrance, frosted soundproof glass, complete duplicate dumbbell and squat racks, guided by female coaches.",
    specs: ["Strict 100% Female Staff & Trainers", "Heavy Barbell Platforms & Glute Rigs", "Private Soundproof Frosted Enclosure", "Locker Room & Luxury Shower Suites"],
  },
  {
    icon:  "shield",
    tag:   "BIO-DEFENSE",
    title: "MONSTER-SAFE FORTRESS",
    desc:  "Hospital-grade antimicrobial air filtration, sanitized barbells, 24/7 CCTV surveillance, and an uncompromising zero-bullying culture.",
    specs: ["Industrial Negative-Pressure Air Chillers", "Barbells Sanitized Between Shifts", "24/7 Security & CCTV Parking Surveillance", "Zero-Tolerance Safe Hardcore Environment"],
  },
  {
    icon:  "arena",
    tag:   "FIGHT READY",
    title: "COMBAT & FUNCTIONAL TURF",
    desc:  "Heavy leather punching bags, speed bags, 30-meter sprint turf, battle ropes, and assault bikes for conditioning that shocks the nervous system.",
    specs: ["30-Meter High-Traction Sprint Turf", "Prowler Sleds & Tire Flip Stations", "Heavy Leather Muay Thai Punching Bags", "Concept2 Rowers, SkiErgs & AirBikes"],
  },
  {
    icon:  "recovery",
    tag:   "RELOAD",
    title: "ISOLATION & RECOVERY LAB",
    desc:  "Theragun deep-tissue percussion guns, foam rolling sanctuary, and mobility protocols to ensure rapid recovery for next-day battle.",
    specs: ["Theragun PRO Percussive Therapy Guns", "High-Density Rumble Rollers & Mobility Bands", "Dynamic Joint Decompression Rigs", "Contrast Hot & Cold Shower Therapy"],
  },
];

/* ── TRAINING REGIMES / DIVISIONS ─────────────────────────── */
const DIVISIONS = [
  {
    id: "power",
    icon: "skull",
    badge: "STRENGTH DIVISION",
    title: "POWERLIFTING & MAX IRON",
    desc: "Built for those who live to pull and press monster weight. Dedicated deadlift platforms with band pegs, competition monolifts, and calibrated steel plates.",
    highlights: ["Eleiko Calibrated Steel Plates", "Texas & Ohio 29mm Power Bars", "Competition Squat Cages with Safety Straps", "Deadlift Jacks & Chalk Stations at Every Platform"],
    target: "Target Lifters: Powerlifters, Strongmen, Raw Strength Seekers",
    split: "Protocol: 4-Day Undulating Strength Wave (Squat / Bench / Deadlift / Accessory Overload)",
  },
  {
    id: "bodybuilding",
    icon: "lightning",
    badge: "HYPERTROPHY LAB",
    title: "MONSTER BODYBUILDING",
    desc: "Engineered for maximum muscle fiber tears, 3D delts, and cobra backs. Full Hammer Strength plate-loaded stations, iso-lateral machine lines, and dual cable stacks.",
    highlights: ["Hammer Strength ISO-Lateral Chest & Row Rigs", "Dumbbells Ranging from 2.5kg up to 100kg", "Pendulum Squat, Hack Squat & V-Squat Arsenal", "Multi-Angle Cable Towers with Ergonomic Attachments"],
    target: "Target Lifters: Men's Physique, Classic Physique, Muscle Density Seekers",
    split: "Protocol: Push / Pull / Legs (PPL) 6-Day Periodized Hypertrophy Program",
  },
  {
    id: "combat",
    icon: "flame",
    badge: "CONDITIONING PROTOCOL",
    title: "COMBAT & HYROX TURF",
    desc: "Metabolic warfare for unshakeable stamina, savage lung capacity, and mental grit. Heavy bag striking, sledgehammer tire strikes, and prowler sprint pushes.",
    highlights: ["30-Meter Custom Sled & Prowler Turf Track", "Heavy Leather Muay Thai & Boxing Bag Rig", "Concept2 Rowers, SkiErgs & Rogue Echo Bikes", "Cast Iron Competition Kettlebells from 8kg to 48kg"],
    target: "Target Athletes: Martial Artists, Hyrox Competitors, High-Endurance Warriors",
    split: "Protocol: 45-Min High Intensity Conditioning & Metabolic Lactate Circuits",
  },
  {
    id: "ladies",
    icon: "bone",
    badge: "FEMALE SANCTUM",
    title: "LADIES IRON REGIME",
    desc: "Uncompromised heavy lifting in complete privacy. A fully equipped, secure zone run exclusively by certified female personal trainers and female-only staff.",
    highlights: ["100% Private Frosted Soundproof Enclosure", "Female IFBB Certified Coaches & Nutritionists", "Heavy Duty Hip Thrust Rigs & Booty Builders", "Full Set of Olympic Barbells & Free Dumbbells"],
    target: "Target Lifters: Beginners to Advanced Female Athletes Seeking Real Strength & Tone",
    split: "Protocol: Lower Body Hypertrophy & Full Body Functional Sculpting",
  },
  {
    id: "rehab",
    icon: "recovery",
    badge: "LONGEVITY LAB",
    title: "ATHLETIC REHAB & MOBILITY",
    desc: "Bulletproof your joints and reverse chronic posture dysfunctions. Specialized biomechanical decompression, rotator cuff therapy, and posterior chain rebuilding.",
    highlights: ["Theragun PRO Percussion Guns & Cryo Therapy", "Reverse Hyper Extensions & GHD Glute-Ham Benches", "Spinal Decompression Inversion Tables & Bands", "Certified Biomechanics & Physical Mobility Coaches"],
    target: "Target Clients: Desk Workers with Back Pain, Recovering Athletes, Masters Lifters",
    split: "Protocol: Pre-Hab Warmups, Myofascial Release & Postural Alignment",
  },
  {
    id: "novice",
    icon: "shield",
    badge: "FOUNDATIONS",
    title: "NOVICE BEAST PROTOCOL",
    desc: "Zero intimidation, 100% progression. Designed for first-time gym goers to master the foundational compound lifts safely under strict coach supervision.",
    highlights: ["Free Mandatory Form Audit & Baseline Screening", "Dedicated Novice Technique Racks with Light Bars", "Step-by-Step Progressive Overload Roadmap", "Patient, Friendly & Certified Foundation Trainers"],
    target: "Target Members: First-Time Lifters, Teenagers, Fitness Beginners",
    split: "Protocol: 3-Day Full Body Linear Progression (The Monster ABC Protocol)",
  },
];

/* ── PRICING PLANS ────────────────────────────────────────── */
const PLANS = [
  {
    id:             "rookie",
    name:           "ROOKIE CAGE",
    icon:           "bone",
    monthlyPrice:   2500,
    quarterlyPrice: 6500,
    saveText:       "Save PKR 1,000",
    period:         "/ month",
    badge:          null,
    desc:           "For beasts stepping into the underground den for the first time. Complete open floor iron access.",
    features: [
      "Full access to 8,000 sqft main gym floor",
      "Standard day lockers & hot/cold shower rooms",
      "Complimentary baseline form & strength audit",
      "Access to all Olympic power cages & free weights",
      "High-speed Den WiFi & filtered RO water stations",
      "Access during all standard operating gym hours",
      "Free inclusion in Den WhatsApp Community",
    ],
    cta: "ENTER AS ROOKIE",
  },
  {
    id:             "beast",
    name:           "BEAST OVERLOAD",
    icon:           "skull",
    monthlyPrice:   4000,
    quarterlyPrice: 10200,
    saveText:       "Save PKR 1,800",
    period:         "/ month",
    badge:          "MOST FEARED",
    desc:           "Our flagship membership pass for relentless strength and rapid muscle transformations.",
    features: [
      "Everything included in Rookie Cage pass",
      "4x 1-on-1 Apex Personal Trainer sessions / month",
      "Monthly InBody 570 clinical body composition scan",
      "Customized progressive overload training split",
      "Full access to Combat & Prowler Turf Zone",
      "Access to Recovery Lab & Percussion Guns",
      "Guest Day Pass (1x per month for a friend)",
      "Priority equipment reservations during peak hours",
    ],
    cta: "BECOME A BEAST",
  },
  {
    id:             "monster",
    name:           "APEX MONSTER",
    icon:           "demon",
    monthlyPrice:   6500,
    quarterlyPrice: 16500,
    saveText:       "Save PKR 3,000",
    period:         "/ month",
    badge:          "APEX PREDATOR",
    desc:           "The ruthless VIP pass for competitive lifters, athletes, and those who demand peak coaching attention.",
    features: [
      "Everything included in Beast Overload pass",
      "Unlimited Personal Trainer floor supervision",
      "Bi-weekly InBody 570 clinical composition scans",
      "Permanently assigned VIP Named Personal Locker",
      "Complimentary pre-workout chiller drink daily",
      "Unlimited Guest Day Passes (up to 4/month)",
      "Direct 24/7 WhatsApp VIP line with Head Coach",
      "Free official Optimum Monster Gym T-shirt & Lifting Straps",
    ],
    cta: "UNLEASH THE MONSTER",
  },
];

/* ── TIMETABLE / OPERATIONAL SHIFTS ───────────────────────── */
const SCHEDULE = [
  {
    shift:  "DAWN PREDATORS",
    time:   "5:00 AM – 8:30 AM",
    vibe:   "High Focus / Heavy Compound Warfare",
    access: "Open to All Male Members",
    icon:   "lightning",
    status: "Peak Focus / Zero Crowds",
    desc:   "The floor belongs to serious early risers. Olympic bars are fresh, squat racks are wide open, and the vibe is pure intensity.",
  },
  {
    shift:  "EXECUTIVE & MORNING IRON",
    time:   "8:30 AM – 10:30 AM",
    vibe:   "Moderate Traffic / Steady Lifting Pacing",
    access: "Open to All Male Members",
    icon:   "arena",
    status: "Great For Beginners",
    desc:   "Ideal for business owners, corporate executives, and remote workers who want relaxed access to machines and personalized coaching advice.",
  },
  {
    shift:  "LADIES ONLY SANCTUM",
    time:   "10:30 AM – 2:30 PM",
    vibe:   "100% Private / Female Staff & Coaches Only",
    access: "Exclusive to Female Members",
    icon:   "bone",
    status: "Strict Privacy Shield",
    desc:   "Frosted soundproof glass seals the entire floor. Female IFBB certified coaches guide full barbell squats, glute work, and HIIT circuits.",
  },
  {
    shift:  "AFTERNOON OPEN DECK",
    time:   "2:30 PM – 5:00 PM",
    vibe:   "High Energy / Student & Athlete Hours",
    access: "Open to All Male Members",
    icon:   "shield",
    status: "Active Energy",
    desc:   "College and university students, powerlifters, and athletes take over the turf for sprint intervals, heavy pulls, and supersets.",
  },
  {
    shift:  "PRIMETIME BEAST HOURS",
    time:   "5:00 PM – 8:30 PM",
    vibe:   "War Zone Atmosphere / Live Floor Spotters",
    access: "Full Arena in Maximum Battle Mode",
    icon:   "skull",
    status: "Peak Electric Atmosphere",
    desc:   "North Nazimabad's strongest lifters descend on the cage. High-octane music, certified trainers spotting every heavy set, and unbeatable energy.",
  },
  {
    shift:  "NOCTURNAL MONSTERS",
    time:   "8:30 PM – 11:00 PM",
    vibe:   "Deep Night Power / Focused Hypertrophy",
    access: "Open to All Male Members",
    icon:   "flame",
    status: "Night Owl Strength",
    desc:   "For those who train best under the dark sky. Wind down your day by destroying plateaus on the Hammer Strength machines.",
  },
];

/* ── GALLERY ──────────────────────────────────────────────── */
const GALLERY = [
  { 
    src: "gallery/g1.jpg", 
    category: "iron",    
    tag: "POWER RACKS",    
    alt: "Olympic Power Rack Zone", 
    desc: "Custom heavy-gauge monolithic squat cages with safety strap spotters, Texas power bars, calibrated steel plates, and chalk bowls." 
  },
  { 
    src: "gallery/g2.jpg", 
    category: "cardio",  
    tag: "CARDIO ARENA",   
    alt: "Cardio & HIIT Deck",     
    desc: "Curved non-motorized treadmills, Concept2 rowing machines, assault air-bikes, and SkiErgs designed for brutal metabolic calorie torching." 
  },
  { 
    src: "gallery/g3.jpg", 
    category: "iron",    
    tag: "FREE WEIGHTS",   
    alt: "Heavy Dumbbell Arsenal",  
    desc: "Complete urethane dumbbell line climbing in 2.5kg increments from 2.5kg all the way up to monstrous 100kg pairs with flat & incline benches." 
  },
  { 
    src: "gallery/g4.jpg", 
    category: "iron",    
    tag: "PLATFORMS",      
    alt: "Olympic Lifting Decks",   
    desc: "Triple-layer shock-absorbing oak hardwood platforms designed for heavy deadlifts, cleans, and snatches with zero vibration feedback." 
  },
  { 
    src: "gallery/g5.jpg", 
    category: "machine", 
    tag: "CABLE RIGS",     
    alt: "Hammer Strength Rig",     
    desc: "Full suite of pin-selected and plate-loaded iso-lateral machines, 8-station cable jungle gym, high-rowers, and seated leg curl stations." 
  },
  { 
    src: "gallery/g6.jpg", 
    category: "ladies",  
    tag: "LADIES SANCTUM", 
    alt: "Private Ladies Floor",    
    desc: "Secluded, soundproofed, frosted-glass ladies training floor equipped with dedicated squat cages, hip thrust benches, and dumbbell towers." 
  },
];

/* ── TESTIMONIALS / BEAST RESULTS ─────────────────────────── */
const TESTIMONIALS = [
  {
    name:     "Hamza Khan",
    age:      "24 Years Old",
    role:     "Software Engineer",
    badge:    "FAT LOSS & RECOMP",
    result:   "Lost 21 kg in 5.5 Months",
    stats:    "Bodyfat: 32% ➔ 14% • Waist: 38\" ➔ 31\"",
    text:     "Sitting at a desk 10 hours a day made me sluggish and overweight. Optimum Fitness completely restructured my life. The coaches here are relentless in the best way possible. They taught me progressive overload and held me accountable. Down 21 kg and stronger than ever.",
    stars:    5,
    location: "Block H, North Nazimabad",
  },
  {
    name:     "Sara Malik",
    age:      "28 Years Old",
    role:     "Architect",
    badge:    "FEMALE STRENGTH",
    result:   "Gained 6 kg Lean Muscle",
    stats:    "Hip Thrust: 40kg ➔ 135kg • Squat: 25kg ➔ 80kg",
    text:     "The dedicated ladies shift at Optimum is by far the cleanest, safest, and most private gym facility in Karachi. Real barbells, no silly pink plastic weights. Coach Ayesha transformed my posture, built my lower body strength, and gave me unmatched confidence.",
    stars:    5,
    location: "Block D, North Nazimabad",
  },
  {
    name:     "Bilal Raza",
    age:      "22 Years Old",
    role:     "Competitive Powerlifter",
    badge:    "POWERLIFTING APEX",
    result:   "National Qualifier 2025",
    stats:    "Squat: 130kg ➔ 215kg • Deadlift: 140kg ➔ 250kg",
    text:     "Proper competition power bars with sharp knurling, zero whip, and chalk bowls at every single platform. If you want to pull serious weight without staff complaining about noise, Optimum is the only authentic monster gym in North Nazimabad.",
    stars:    5,
    location: "Hyderi, North Nazimabad",
  },
  {
    name:     "Zain Ul Abideen",
    age:      "31 Years Old",
    role:     "Financial Analyst",
    badge:    "MASS MONSTER",
    result:   "+12 kg Lean Bulk in 8 Months",
    stats:    "Bench Press: 70kg ➔ 140kg • Arms: 14\" ➔ 17.5\"",
    text:     "The Hammer Strength machines here target muscle fibers at angles you simply cannot replicate with generic equipment. Subscribing to the Beast Overload plan with 1-on-1 training was hands down the highest ROI investment I ever made.",
    stars:    5,
    location: "Buffer Zone, Karachi",
  },
  {
    name:     "Dr. Faizan Sheikh",
    age:      "42 Years Old",
    role:     "Orthopedic Surgeon",
    badge:    "POSTURE & REHAB",
    result:   "Reversed Chronic Lumbar Pain",
    stats:    "Core Strength +250% • Zero Pain Killers",
    text:     "Standing on my feet during 8-hour surgeries left me with severe sciatica and lumbar strain. Optimum's recovery and athletic rehab coaches built a targeted posterior chain protocol. 6 months in, my core is rock solid and I am completely pain-free.",
    stars:    5,
    location: "Block B, North Nazimabad",
  },
  {
    name:     "Maha Siddiqui",
    age:      "26 Years Old",
    role:     "Educator",
    badge:    "TRANSFORMATION",
    result:   "Dropped 3 Dress Sizes",
    stats:    "Lost 15 kg Fat in 16 Weeks",
    text:     "I needed serious results before my wedding. The coaches at Optimum didn't give me generic crash diets; they gave me high-intensity resistance training that shaped my shoulders and toned my core. The ladies floor gave me 100% privacy and peace of mind.",
    stars:    5,
    location: "Block L, North Nazimabad",
  },
  {
    name:     "Daniyal Ahmed",
    age:      "19 Years Old",
    role:     "University Student",
    badge:    "NOVICE BEAST",
    result:   "Built First 100kg Bench",
    stats:    "Bodyweight: 58kg ➔ 70kg (+12kg)",
    text:     "I was skinny and insecure when I first walked through the doors. The older lifters and coaches treated me like a brother and guided my form on every set. In 6 months, my bench hit triple digits and I gained 12 kg of solid muscle.",
    stars:    5,
    location: "Block J, North Nazimabad",
  },
  {
    name:     "Rabia Tariq",
    age:      "34 Years Old",
    role:     "Mother of 2",
    badge:    "ENDURANCE APEX",
    result:   "Post-Partum Recomposition",
    stats:    "Lost 18 kg • 5km Run in 23 Mins",
    text:     "Balancing kids and fitness seemed impossible until I joined the morning ladies shift. The female coaches are encouraging, knowledgeable, and push you to reach your true athletic potential. Best decision of my life.",
    stars:    5,
    location: "Block N, North Nazimabad",
  },
];

/* ── MONSTER FAQ ──────────────────────────────────────────── */
const FAQS = [
  {
    q: "How do I claim my complimentary Free 1-Day Trial Pass?",
    a: "It's 100% free and simple! Just walk into our facility during any staffed shift or tap the WhatsApp button on this site to book your day pass. You will receive unrestricted floor access, a locker, and an introductory form walkthrough with an Apex trainer at zero cost.",
  },
  {
    q: "What are the dedicated Ladies Only timings and privacy measures?",
    a: "Our private Ladies Only Sanctum runs daily from 10:30 AM to 2:30 PM. During this shift, the entire facility is shielded with soundproof frosted privacy glass, and operated strictly by certified female personal trainers and female-only staff. No male entry is permitted under any circumstances.",
  },
  {
    q: "Is personal training included in standard memberships?",
    a: "Every new member receives an initial form and baseline fitness assessment. 1-on-1 personal training packages are included in our Beast Overload (4x sessions/mo) and Apex Monster (Unlimited coaching) tiers, or can be added to the Rookie plan ala-carte.",
  },
  {
    q: "What parking and security arrangements exist at the gym?",
    a: "We have dedicated, well-lit street parking right outside B 69, Street 6, Block H, guarded 24/7 by on-site security personnel. In addition, high-definition CCTV cameras continuously monitor all parked vehicles and motorbikes.",
  },
  {
    q: "Can complete novices or teenagers train safely without injury?",
    a: "Absolutely. While our monster gym identity is hardcore and focused, our coaches specialize in teaching foundational mechanics. We have a dedicated Novice Beast Protocol with light technique bars to ensure complete beginners master squats, presses, and pulls injury-free.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash at the reception desk, Raast Instant Pay (03360222340), Direct Bank Transfers (Meezan Bank, HBL, Bank Alfalah), Nayapay, SadaPay, and JazzCash/Easypaisa. Monthly memberships and discounted Quarterly passes are available.",
  },
  {
    q: "What are the locker room and shower amenities?",
    a: "All members enjoy free access to clean day lockers, private changing cabins, and hot/cold pressurized showers. Apex Monster tier members receive their own permanently reserved, named VIP locker for private gear storage.",
  },
  {
    q: "Are student, sibling, or corporate group discounts available?",
    a: "Yes! Students with a valid student ID card receive a 10% discount on all monthly passes. We also offer special group concessions for siblings, gym buddies joining together (Duo Beast Pass), and corporate groups of 5+ members.",
  },
  {
    q: "Can I freeze or pause my membership if I travel or fall sick?",
    a: "Yes. Quarterly pass holders can freeze their membership for up to 14 consecutive days during travel, exam periods, or medical recovery simply by messaging our WhatsApp desk 24 hours in advance.",
  },
  {
    q: "What equipment brands and weight limits are available on the floor?",
    a: "Our floor is stacked with certified competition-grade gear: Eleiko & Rogue calibrated steel plates, 29mm Texas power bars with aggressive knurling, Hammer Strength plate-loaded stations, monolithic power cages, and urethane dumbbells reaching up to 100 kg per dumbbell.",
  },
  {
    q: "Do you have an on-site supplement and hydration bar?",
    a: "Yes! Our front desk features a dedicated pre-workout and protein shake counter stocked with authentic imported whey protein, creatine monohydrate, electrolytes, BCAAs, and chilled energy drinks. Free chilled RO water is also available across all floors.",
  },
  {
    q: "What hygiene and air ventilation standards are maintained?",
    a: "We operate commercial negative-pressure industrial air extraction systems that replace indoor air every 6 minutes. Barbells and benches are sanitized twice daily with medical-grade antimicrobial washdowns, ensuring a clean, odorless, and disease-free arena.",
  },
];

/* ── BMI & BEAST CALORIC CATEGORIES ───────────────────────── */
const BMI_CATEGORIES = [
  { 
    range: "< 18.5",      
    label: "Underweight", 
    color: "#60CFFF", 
    advice: "Your frame requires heavy caloric surplus (+400-600 kcal) and dense compound lifting to forge lean armor. Prioritize 2.0g protein/kg and complex carbohydrates.",
    macroSplit: "40% Carbs • 30% Protein • 30% Healthy Fats"
  },
  { 
    range: "18.5 - 24.9", 
    label: "Athletic Prime", 
    color: "#C8FF00", 
    advice: "Optimal athletic baseline! Focus on progressive overload, explosive strength, and clean hypertrophy. Maintain a slight surplus (+250 kcal) to add lean muscle without fat.",
    macroSplit: "45% Carbs • 35% Protein • 20% Healthy Fats"
  },
  { 
    range: "25 - 29.9",   
    label: "Beast Mass / Heavy", 
    color: "#FFD600", 
    advice: "If you lift heavy, you are in the prime muscular mass bulk zone! Maintain high protein (2.2g/kg) and focus on body recomposition or a mild 300 kcal deficit to carve muscle definition.",
    macroSplit: "35% Carbs • 40% Protein • 25% Healthy Fats"
  },
  { 
    range: ">= 30",       
    label: "High Density / Shred Protocol", 
    color: "#FF1E27", 
    advice: "Commit to our metabolic turf conditioning, heavy progressive resistance, and a strict 500 kcal deficit. Prioritize protein at 2.2g/kg to preserve muscle while aggressively shredding visceral fat. The cage will transform you.",
    macroSplit: "25% Carbs • 45% Protein • 30% Healthy Fats"
  },
];

/* ── EXPORT TO GLOBAL WINDOW OBJECT ──────────────────────── */
if (typeof window !== 'undefined') {
  window.GYM            = GYM;
  window.STATS          = STATS;
  window.FEATURES       = FEATURES;
  window.DIVISIONS      = DIVISIONS;
  window.PLANS          = PLANS;
  window.SCHEDULE       = SCHEDULE;
  window.GALLERY        = GALLERY;
  window.TESTIMONIALS   = TESTIMONIALS;
  window.FAQS           = FAQS;
  window.BMI_CATEGORIES = BMI_CATEGORIES;
}
