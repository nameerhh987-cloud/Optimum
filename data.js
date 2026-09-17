/* ============================================================
   data.js — Big Tex Gym | Hardcore Veteran-Owned Theme
   Central content store — Austin, TX
   Clean format, zero emojis, Bento Grid & interactive regimes
   ============================================================ */

const GYM = {
  name:        "BIG TEX GYM",
  tagline:     "VETERAN-OWNED • AUSTIN, TX",
  phone:       "(512) 775-7838",
  altPhone:    "(512) 775-7838",
  address:     "1921 Cedar Bend Dr A 130, Austin, TX 78758",
  landmark:    "North Austin • Near MoPac & Parmer Ln",
  mapLink:     "https://maps.google.com/?q=1921+Cedar+Bend+Dr+A+130,+Austin,+TX+78758",
  email:       "bigtexgym@gmail.com",
  admission:   "$0 Enrollment on Annual & Quarterly Memberships",
  hours: {
    weekday:   "24/7 Access for Members (Staffed 8:00 AM - 8:00 PM)",
    saturday:  "24/7 Access for Members (Staffed 9:00 AM - 6:00 PM)",
    sunday:    "24/7 Access for Members (Staffed 10:00 AM - 4:00 PM)",
    memberAccess: "24/7/365 Unrestricted Keycard & App Access",
  },
  social: {
    instagram: "https://instagram.com/bigtexgym",
    facebook:  "https://facebook.com/bigtexgym",
    youtube:   "https://youtube.com/bigtexgym",
  },
};

/* ── STATS CARDS (BOTTOM HERO ROW) ───────────────────────── */
const STATS = [
  { value: "4.8", suffix: "",  label: "540+ GOOGLE REVIEWS", sub: "Austin's highest rated iron den", icon: "star" },
  { value: "24/7", suffix: "",  label: "MEMBER ACCESS",      sub: "Train day or night, 365 days",   icon: "clock" },
  { value: "VETERAN", suffix: "", label: "OWNED & OPERATED", sub: "Disciplined Texas pride",         icon: "shield" },
  { value: "REAL", suffix: "",  label: "HARDCORE GEAR",      sub: "Texas power bars & heavy iron",   icon: "skull" },
];

/* ── FEATURES / THE BIG TEX BENTO GRID ───────────────────── */
const FEATURES = [
  {
    id:    "feat-iron",
    bento: "hero",
    icon:  "skull",
    tag:   "AUTHENTIC STEEL",
    title: "CALIBRATED TEXAS IRON",
    desc:  "Texas power bars, calibrated competition plates, custom monolithic cages, and urethane dumbbells reaching 150+ lbs. Real heavy iron forged for champions.",
    highlight: "150+ LBS DUMBBELLS",
    specs: ["Calibrated Steel & Bumper Plates", "Texas & Ohio 29mm Power Bars", "Solid Dumbbells up to 150+ lbs", "Custom Heavy Olympic Squat Cages"],
  },
  {
    id:    "feat-access",
    bento: "tall",
    icon:  "clock",
    tag:   "UNRESTRICTED",
    title: "24/7/365 KEYCARD ACCESS",
    desc:  "Round-the-clock keycard entry every single day of the year. Blast through early morning PRs or midnight deadlifts on your schedule.",
    highlight: "OPEN 24 HOURS",
    specs: ["Secure Digital Phone & Card Entry", "Staffed Front Desk Support Daily", "Well-Lit Secure Private Parking", "Open All Major US Holidays"],
  },
  {
    id:    "feat-deadlift",
    bento: "wide",
    icon:  "bone",
    tag:   "POWER ARENA",
    title: "DEDICATED DEADLIFT PLATFORMS",
    desc:  "Triple-layer shock-absorbing oak hardwood platforms with deadlift jacks, band pegs, and chalk stations at every single bay. Zero noise complaints.",
    highlight: "CHALK AT EVERY STATION",
    specs: ["Heavy Oak Deadlift Platforms", "Competition Powerlifting Benches", "Specialty Safety Squat Bars", "Bands, Chains & Reverse Hyper"],
  },
  {
    id:    "feat-coaching",
    bento: "standard",
    icon:  "lightning",
    tag:   "ELITE COACHING",
    title: "VETERAN STRENGTH COACHES",
    desc:  "USAPL powerlifters and IFBB champions enforcing strict biomechanics and progressive overload without gimmicks.",
    specs: ["USAPL & IFBB Pro Specialists", "1-on-1 Biomechanical Form Audits", "Custom Progressive Periodization", "Zero Bro-Science Protocols"],
  },
  {
    id:    "feat-turf",
    bento: "standard",
    icon:  "arena",
    tag:   "CONDITIONING",
    title: "COMBAT & SPRINT TURF",
    desc:  "30-meter high-traction sprint turf, prowlers, heavy leather punching bags, and Rogue Echo bikes for metabolic conditioning.",
    specs: ["High-Traction Sprint Sled Turf", "Prowler Sleds & Tire Flip Stations", "Heavy Leather Muay Thai Punching Bags", "Concept2 Rowers, SkiErgs & Echo Bikes"],
  },
  {
    id:    "feat-recovery",
    bento: "standard",
    icon:  "recovery",
    tag:   "RELOAD",
    title: "ATHLETE RECOVERY LAB",
    desc:  "Percussion therapy, deep tissue rollers, and decompression rigs ensuring maximum joint mobility and nervous system reload.",
    specs: ["Theragun Pro Percussion Therapy", "Decompression Benches & Rigs", "Specialty Mobility Bands", "Cold Hydration & Shower Suites"],
  },
  {
    id:    "feat-brotherhood",
    bento: "wide",
    icon:  "shield",
    tag:   "CULTURE",
    title: "VETERAN DISCIPLINE & BROTHERHOOD",
    desc:  "An uncompromising gym environment centered around focus, mutual respect, and hard work. No influencers crowding equipment, no nonsense.",
    highlight: "ZERO-TOLERANCE CODE",
    specs: ["Respectful Hardcore Atmosphere", "24/7 High-Definition Security CCTV", "Special Military & Veteran Concessions", "Supportive Champion Community"],
  },
];

/* ── TRAINING REGIMES / INTERACTIVE SHOWCASE ──────────────── */
const DIVISIONS = [
  {
    id: "power",
    icon: "skull",
    badge: "POWERLIFTING DIVISION",
    title: "POWERLIFTING & MAX STRENGTH",
    desc: "Built for lifters whose goal is moving maximum poundage. Calibrated plates, Texas squat & deadlift bars, competition benches, and chalk-friendly atmosphere.",
    highlights: ["Calibrated Steel Competition Plates", "Authentic Texas & Ohio 29mm Power Bars", "Heavy Monolift & Competition Squat Racks", "Deadlift Platforms with Band Pegs"],
    target: "Target Lifters: Competitive Powerlifters, Strongmen & Heavy Pullers",
    split: "Protocol: 4-Day Undulating Strength Waves (Squat / Bench / Deadlift / Accessories)",
  },
  {
    id: "bodybuilding",
    icon: "lightning",
    badge: "HYPERTROPHY LAB",
    title: "HARDCORE BODYBUILDING",
    desc: "Engineered for pure muscle hypertrophy and dense muscularity. Complete Hammer Strength lines, plate-loaded stations, and heavy dumbbells up to 150+ lbs.",
    highlights: ["Hammer Strength ISO-Lateral Machines", "Dumbbells from 5 lbs to 150+ lbs", "Pendulum Squat, Hack Squat & Leg Press Suite", "Multi-Angle Cable Crossovers & Lat Rigs"],
    target: "Target Lifters: Classic Physique, Open Bodybuilders & Muscle Density Athletes",
    split: "Protocol: Push / Pull / Legs (PPL) 6-Day Periodized Hypertrophy Program",
  },
  {
    id: "combat",
    icon: "flame",
    badge: "METABOLIC WARFARE",
    title: "COMBAT & ATHLETIC CONDITIONING",
    desc: "Build unshakeable lung capacity, explosive work capacity, and mental grit. Turf sprint pushes, heavy bag work, and intense interval circuits.",
    highlights: ["Indoor Sprint & Sled Prowler Turf", "Heavy Leather Muay Thai & Boxing Bag Rig", "Concept2 Rowers, SkiErgs & Rogue Echo Bikes", "Cast Iron Competition Kettlebells (up to 100 lbs)"],
    target: "Target Athletes: Combat Fighters, Hybrid Athletes & Tactical Lifters",
    split: "Protocol: High-Intensity Metabolic Conditioning & Lactate Threshold Circuits",
  },
  {
    id: "rehab",
    icon: "recovery",
    badge: "LONGEVITY & RECOVERY",
    title: "ATHLETIC MOBILITY & POSTURE",
    desc: "Bulletproof your joints and reverse chronic aches from heavy lifts or desk fatigue. Specialized decompression, rotator cuff therapy, and posterior chain rebuilding.",
    highlights: ["Theragun Pro Percussion Therapy", "Reverse Hyper Extensions & GHD Benches", "Spinal Decompression & Band Distraction Rigs", "Certified Biomechanics & Mobility Screening"],
    target: "Target Clients: Heavy Lifters, Tactical Athletes & Masters Athletes",
    split: "Protocol: Pre-Hab Mobilization, Myofascial Release & Postural Symmetry",
  },
  {
    id: "foundations",
    icon: "shield",
    badge: "FOUNDATIONS",
    title: "ROOKIE TO CHAMPION PROTOCOL",
    desc: "Zero intimidation, maximum progress. Designed for lifters eager to master proper barbell compound technique safely under veteran coach supervision.",
    highlights: ["Complimentary Technique & Movement Assessment", "Dedicated Technique Racks with Light Practice Bars", "Progressive Overload Blueprint", "Approachable, Highly Skilled Certified Coaches"],
    target: "Target Members: Beginner Lifters, Young Athletes & Returning Veterans",
    split: "Protocol: 3-Day Full Body Linear Progression (The Big Tex Blueprint)",
  },
  {
    id: "tactical",
    icon: "arena",
    badge: "FIRST RESPONDER",
    title: "TACTICAL & VETERAN READINESS",
    desc: "Tailored conditioning and functional power for military personnel, veterans, law enforcement, and firefighters demanding mission-ready physical capability.",
    highlights: ["Weighted Vest & Rucking Conditioning Stations", "Grip Strength & Farmer Carry Implements", "Explosive Power & Sled Acceleration Drills", "Special Military & Veteran Community Events"],
    target: "Target Members: Active Military, Veterans, Police & Firefighters",
    split: "Protocol: Tactical Strength & Readiness Periodization",
  },
];

/* ── PRICING PLANS ────────────────────────────────────────── */
const PLANS = [
  {
    id:             "standard",
    name:           "STANDARD ACCESS",
    icon:           "shield",
    monthlyPrice:   65,
    quarterlyPrice: 175,
    saveText:       "Save $20",
    period:         "/ month",
    badge:          null,
    desc:           "Full 24/7 keycard access to the entire gym floor, heavy iron, and conditioning equipment.",
    features: [
      "24/7/365 Unlimited Keycard Access",
      "Full access to Texas bars, dumbbells & platforms",
      "Access to Combat Turf, Echo Bikes & Cardio",
      "Locker room & shower amenities",
      "High-speed member WiFi & filtered water",
      "Free guest day pass (1x per quarter)",
      "Big Tex Athlete Community access",
    ],
    cta: "JOIN NOW",
  },
  {
    id:             "iron",
    name:           "HARDCORE ATHLETE",
    icon:           "skull",
    monthlyPrice:   95,
    quarterlyPrice: 255,
    saveText:       "Save $30",
    period:         "/ month",
    badge:          "MOST POPULAR",
    desc:           "Our premier membership for dedicated lifters wanting coaching check-ins and recovery tools.",
    features: [
      "Everything included in Standard Access",
      "24/7/365 Keycard & Mobile App Entry",
      "Monthly body composition & strength scan",
      "Custom progressive overload workout plan",
      "Unlimited Recovery Lab & Theragun access",
      "2 Guest Day Passes included per month",
      "10% discount on Big Tex Gym apparel & supplements",
      "Priority equipment reservations during peak hours",
    ],
    cta: "BECOME A MEMBER",
  },
  {
    id:             "vip",
    name:           "VETERAN VIP",
    icon:           "demon",
    monthlyPrice:   145,
    quarterlyPrice: 390,
    saveText:       "Save $45",
    period:         "/ month",
    badge:          "ELITE ACCESS",
    desc:           "The all-inclusive elite pass with private locker, direct trainer access, and maximum perks.",
    features: [
      "Everything included in Hardcore Athlete",
      "2x 1-on-1 Personal Training sessions / month",
      "Bi-weekly body composition scans",
      "Dedicated Reserved Personal Locker",
      "Unlimited Guest Passes (up to 4/month)",
      "Direct coach support & programming check-ins",
      "Official Big Tex Gym Heavyweight Hoodie & Lifting Straps",
      "15% off all retail, supplements & recovery gear",
    ],
    cta: "JOIN ELITE",
  },
];

/* ── TIMETABLE / OPERATIONAL SHIFTS ───────────────────────── */
const SCHEDULE = [
  {
    shift:  "EARLY DAWN PATROL",
    time:   "5:00 AM – 8:30 AM",
    vibe:   "Pure Focus / Heavy Barbell Sets",
    access: "24/7 Keycard Entry (Staffed from 8am)",
    icon:   "lightning",
    status: "Peak Focus / Zero Crowds",
    desc:   "The floor belongs to serious early risers. Olympic bars are fresh, squat racks are open, and the intensity is unmatched.",
  },
  {
    shift:  "MID-MORNING IRON",
    time:   "8:30 AM – 12:00 PM",
    vibe:   "Steady Lifting & Machine Access",
    access: "24/7 Members + Staffed Desk",
    icon:   "arena",
    status: "Great For All Athletes",
    desc:   "Ideal for remote professionals, entrepreneurs, and athletes looking for prime machine access and coaching guidance.",
  },
  {
    shift:  "AFTERNOON HYPERTROPHY",
    time:   "12:00 PM – 4:30 PM",
    vibe:   "High Energy / Cable & Dumbbell Work",
    access: "24/7 Members + Staffed Desk",
    icon:   "shield",
    status: "Active Momentum",
    desc:   "College athletes, tactical lifters, and bodybuilders take over the turf for sled pushes, heavy presses, and supersets.",
  },
  {
    shift:  "PRIMETIME POWER HOURS",
    time:   "4:30 PM – 8:00 PM",
    vibe:   "Electrifying Energy / Full House",
    access: "24/7 Members + Full Staff On-Site",
    icon:   "skull",
    status: "Peak Austin Lifting Vibe",
    desc:   "Austin's strongest lifters descend on Big Tex Gym. Loud iron, coaches on the floor, and an unbeatable brotherhood atmosphere.",
  },
  {
    shift:  "NIGHT OPS WARFARE",
    time:   "8:00 PM – 12:00 AM",
    vibe:   "Dark Atmosphere / Heavy Sets",
    access: "24/7 Keycard Member Access",
    icon:   "flame",
    status: "Unbroken Iron Session",
    desc:   "For those who train under the night sky. Unwind your day by breaking personal records with heavy plates and zero distractions.",
  },
  {
    shift:  "GRAVEYARD SHIFT (24/7)",
    time:   "12:00 AM – 5:00 AM",
    vibe:   "Solo Grit / Total Freedom",
    access: "24/7 Secure Keycard Access",
    icon:   "demon",
    status: "The Den Never Closes",
    desc:   "Shift workers, tactical personnel, and night owls own the entire facility with full access to every bar, platform, and cage.",
  },
];

/* ── GALLERY ──────────────────────────────────────────────── */
const GALLERY = [
  { 
    src: "gallery/g1.jpg", 
    category: "iron",    
    tag: "POWER RACKS",    
    alt: "Olympic Power Rack Arena", 
    desc: "Custom heavy-gauge squat cages with safety strap spotters, Texas power bars, calibrated steel plates, and chalk stations." 
  },
  { 
    src: "gallery/g2.jpg", 
    category: "cardio",  
    tag: "TURF & CONDITIONING",   
    alt: "Conditioning & HIIT Deck",     
    desc: "Non-motorized curved treadmills, Concept2 rowers, Rogue Echo bikes, and sleds engineered for high-octane conditioning." 
  },
  { 
    src: "gallery/g3.jpg", 
    category: "iron",    
    tag: "FREE WEIGHTS",   
    alt: "Heavy Dumbbell Arsenal",  
    desc: "Solid urethane dumbbell line climbing in increments all the way up to 150+ lbs pairs with flat and incline commercial benches." 
  },
  { 
    src: "gallery/g4.jpg", 
    category: "iron",    
    tag: "PLATFORMS",      
    alt: "Olympic Deadlift Decks",   
    desc: "Triple-layer shock-absorbing oak platforms built for heavy deadlifts, cleans, and snatches with zero vibration feedback." 
  },
  { 
    src: "gallery/g5.jpg", 
    category: "machine", 
    tag: "CABLE RIGS",     
    alt: "Hammer Strength Rig",     
    desc: "Full line of plate-loaded iso-lateral machines, multi-station cable jungle gyms, heavy rows, and leg curl towers." 
  },
  { 
    src: "gallery/g6.jpg", 
    category: "iron",  
    tag: "STRENGTH SANCTUM", 
    alt: "Hardcore Training Floor",    
    desc: "Spacious training floor equipped with calibrated plates, competition benches, glute-ham developers, and belt squats." 
  },
];

/* ── TESTIMONIALS / BEAST RESULTS ─────────────────────────── */
const TESTIMONIALS = [
  {
    name:     "Marcus Vance",
    age:      "29 Years Old",
    role:     "Army Veteran & Software Engineer",
    badge:    "STRENGTH & RECOMP",
    result:   "Added 80 lbs to Deadlift",
    stats:    "Deadlift: 405 lbs to 485 lbs • Down 18 lbs fat",
    text:     "As a veteran, I missed the culture of accountability and hard work. Big Tex Gym is the real deal. No fluff, no people hogging equipment for social media clips. The coaches know true biomechanics and the 24/7 keycard access fits my demanding schedule.",
    stars:    5,
    location: "Austin, TX",
  },
  {
    name:     "Sarah Jenkins",
    age:      "31 Years Old",
    role:     "USAPL Competitor",
    badge:    "POWERLIFTING ELITE",
    result:   "State Qualifier 2025",
    stats:    "Squat: 185 lbs to 315 lbs • Bench: 115 lbs to 185 lbs",
    text:     "Texas power bars with sharp knurling, calibrated competition steel plates, and chalk bowls at every platform. If you want to move heavy weight without anyone telling you to be quiet, Big Tex Gym is by far the best gym in Austin.",
    stars:    5,
    location: "North Austin, TX",
  },
  {
    name:     "Colton Miller",
    age:      "26 Years Old",
    role:     "First Responder",
    badge:    "TACTICAL ATHLETE",
    result:   "+15 lbs Lean Mass in 7 Months",
    stats:    "Bench Press: 225 lbs to 335 lbs",
    text:     "The equipment here is heavy-duty and built to last. Hammer Strength iso-lateral pieces, heavy dumbbells up to 150 lbs, and a brotherhood culture that pushes you past your limits. Worth every single dollar.",
    stars:    5,
    location: "Round Rock, TX",
  },
  {
    name:     "Elena Rodriguez",
    age:      "34 Years Old",
    role:     "Physical Therapist",
    badge:    "REHAB & STRENGTH",
    result:   "Reversed Chronic Back Pain",
    stats:    "Trap Bar Deadlift: 95 lbs to 245 lbs",
    text:     "I was hesitant about lifting heavy after an old lumbar injury. The trainers at Big Tex evaluated my movement patterns and built a sensible posterior chain progression. Six months later, I am completely pain-free and stronger than ever.",
    stars:    5,
    location: "Cedar Park, TX",
  },
  {
    name:     "David Brooks",
    age:      "41 Years Old",
    role:     "Business Owner",
    badge:    "MASTERS STRENGTH",
    result:   "Dropped 24 lbs in 4 Months",
    stats:    "Bodyfat: 26% to 14% • Waist: 36\" to 31\"",
    text:     "I come in at 5:00 AM before work. The 24/7 keycard access is seamless, the gym is always clean, and the energy is unmatched. Big Tex Gym is hands down the gold standard for Austin gyms.",
    stars:    5,
    location: "Austin, TX",
  },
  {
    name:     "Travis Campbell",
    age:      "23 Years Old",
    role:     "Collegiate Athlete",
    badge:    "EXPLOSIVE POWER",
    result:   "Vertical Jump +5.5 inches",
    stats:    "Clean & Jerk: 185 lbs to 275 lbs",
    text:     "The sprint turf, prowler sleds, and bumper plates allow me to do high-velocity training that standard commercial gyms forbid. The veteran staff treats everyone with respect while demanding focus on the floor.",
    stars:    5,
    location: "Austin, TX",
  },
];

/* ── FAQ ──────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How does 24/7 member access work?",
    a: "Every active Big Tex Gym member receives a secure electronic keycard and smartphone app access. You can train 24 hours a day, 7 days a week, 365 days a year—including all major holidays. The facility is fully monitored with 24/7 high-definition security cameras.",
  },
  {
    q: "Are there staffed hours for tours and front desk assistance?",
    a: "Yes. Our front desk is staffed Monday through Friday from 8:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 10:00 AM to 4:00 PM. Walk-ins are always welcome during staffed hours for facility tours and day passes.",
  },
  {
    q: "How do I claim a day pass or try out the gym?",
    a: "You can stop by our front desk during staffed hours or submit the contact form on this page to claim a day pass. We invite serious lifters to experience our Texas iron, calibrated plates, and champion atmosphere firsthand.",
  },
  {
    q: "What equipment brands and barbell varieties do you feature?",
    a: "Our gym floor is loaded with genuine competition equipment: Texas power bars, Ohio bars, calibrated steel plates, heavy-duty monolithic cages, Hammer Strength plate-loaded stations, specialty safety squat bars, and dumbbells going up to 150+ lbs.",
  },
  {
    q: "Do you offer military, veteran, or first responder discounts?",
    a: "Yes. As a veteran-owned and operated facility, we take pride in supporting our service members, veterans, police officers, firefighters, and EMTs with exclusive membership discounts. Bring your valid ID to the front desk to apply.",
  },
  {
    q: "Is personal training or technique coaching available?",
    a: "Yes. We have certified strength specialists, USAPL powerlifting coaches, and competitive athletes available for 1-on-1 personal training, customized program design, and movement assessments. Inquire at the front desk or in the contact form.",
  },
  {
    q: "Can complete beginners or novice lifters train here safely?",
    a: "Yes. While we have a hardcore reputation, our culture is welcoming and grounded in discipline and safety. We have dedicated novice progression blueprints and our coaches are happy to guide proper compound lifting mechanics from day one.",
  },
  {
    q: "What payment options and membership contracts are available?",
    a: "We accept all major credit/debit cards (Visa, MasterCard, American Express, Discover) and Apple Pay. We offer flexible month-to-month memberships as well as discounted quarterly and annual options with zero cancellation penalties.",
  },
  {
    q: "What amenities and locker facilities are available?",
    a: "We offer secure day lockers, clean private restrooms and hot pressurized showers, filtered cold water refill stations, and a pro-shop stocked with pre-workouts, protein shakes, BCAAs, and official Big Tex Gym apparel.",
  },
  {
    q: "Where is Big Tex Gym located in Austin?",
    a: "We are located at 1921 Cedar Bend Dr A 130, Austin, TX 78758 in North Austin, with convenient access from MoPac Expressway and Parmer Lane. We have ample, well-lit, free parking right outside our doors.",
  },
];

/* ── BMI & BEAST CALORIC CATEGORIES ───────────────────────── */
const BMI_CATEGORIES = [
  { 
    range: "< 18.5",      
    label: "Underweight / Caloric Surplus", 
    color: "#E50914", 
    advice: "Your frame requires heavy caloric surplus (+400-600 kcal) and dense compound lifting to forge lean muscle mass. Prioritize 1.0g-1.2g protein per pound of bodyweight.",
    macroSplit: "40% Carbs • 30% Protein • 30% Healthy Fats"
  },
  { 
    range: "18.5 - 24.9", 
    label: "Athletic Baseline", 
    color: "#FFFFFF", 
    advice: "Optimal athletic baseline! Focus on progressive overload, explosive power, and clean hypertrophy. Maintain a slight surplus (+250 kcal) to add lean muscle without unwanted fat.",
    macroSplit: "45% Carbs • 35% Protein • 20% Healthy Fats"
  },
  { 
    range: "25 - 29.9",   
    label: "Power Mass / Heavy Muscular", 
    color: "#E50914", 
    advice: "If you lift heavy, you are in the prime muscular mass bulk zone! Maintain high protein (1.0g/lb) and focus on body recomposition or a mild 300 kcal deficit to carve razor-sharp definition.",
    macroSplit: "35% Carbs • 40% Protein • 25% Healthy Fats"
  },
  { 
    range: ">= 30",       
    label: "Heavy Duty / Shred Protocol", 
    color: "#B20710", 
    advice: "Commit to our metabolic turf conditioning, heavy progressive resistance, and a strict 500 kcal deficit. Prioritize protein to preserve raw power while shedding body fat.",
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
