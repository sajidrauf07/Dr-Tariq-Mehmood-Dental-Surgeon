export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: "General" | "Restorative" | "Cosmetic" | "Surgical" | "Preventive";
  iconName: string;
  duration?: string;
  isPopular?: boolean;
}

export interface FeaturedTreatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  whenNeeded: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  review: string;
  serviceTag?: string;
  isVerifiedGoogle?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Treatments" | "Appointments" | "Location";
}

export const siteConfig = {
  clinicName: "Dr Tariq Mehmood Dental Surgeon",
  doctorName: "Dr. Tariq Mehmood",
  designation: "Dental Surgeon",
  tagline: "Professional Dental Care in Mianwali",
  subheadline:
    "Compassionate, professional dental care focused on healthier teeth, better oral health and confident smiles.",
  
  contact: {
    phone: "0300 4757123",
    phoneInternational: "+923004757123",
    whatsappDisplay: "+92 300 4757123",
    whatsappNumber: "923004757123",
    whatsappDefaultMessage:
      "Hello Dr. Tariq Mehmood, I would like to book a dental appointment. Please share the available timings.",
    email: "info@drtariqdental.pk", // Editable placeholder
    address: {
      street: "Sumbal Shaheed Road, near NADRA Office",
      neighborhood: "Civil Lines",
      city: "Mianwali",
      province: "Punjab",
      country: "Pakistan",
      postalCode: "42200",
      fullAddress:
        "Sumbal Shaheed Road, near NADRA Office, Civil Lines, Mianwali, Pakistan",
    },
    googleMapsUrl:
      "https://maps.google.com/?q=Sumbal+Shaheed+Road+Civil+Lines+Mianwali+Pakistan",
    coordinates: {
      latitude: 32.5855,
      longitude: 71.5436,
    },
    hours: [
      { days: "Monday - Saturday", time: "03:00 PM - 09:00 PM (Clinic Timings - Editable)" },
      { days: "Sunday", time: "Closed / By Prior Appointment" },
    ],
  },

  googleRating: {
    score: 4.2,
    maxScore: 5.0,
    reviewCount: 9,
    source: "Google Reviews",
    googleUrl: "https://maps.google.com/?q=Dr+Tariq+Mehmood+Dental+Surgeon+Mianwali",
  },

  doctorProfile: {
    name: "Dr. Tariq Mehmood",
    title: "Dental Surgeon",
    location: "Civil Lines, Mianwali, Punjab",
    biography:
      "Dr. Tariq Mehmood is a dedicated Dental Surgeon practicing in Civil Lines, Mianwali. With a patient-centered philosophy, he focuses on delivering ethical, comfortable, and comprehensive oral healthcare tailored to patients of all age groups.",
    // Note: Publicly documented references, marked clearly as editable by clinic owner
    educationNotes: [
      "Dentistry education mentioned as Montmorency College of Dentistry (Historical public reference - editable)",
      "Formerly associated with DHQ Hospital Mianwali (Public reference - editable)",
      "Registered Dental Surgeon in Pakistan",
    ],
    philosophy:
      "Prioritizing conservative dental treatments, patient comfort, thorough clinical examination, and transparent guidance before any procedure.",
    image: "/images/doctor.jpg",
    isPlaceholderImage: true,
  },

  trustCards: [
    {
      title: "Professional Dental Care",
      desc: "Comprehensive diagnostic evaluations and hygienic clinical standards for long-lasting oral health.",
      icon: "ShieldCheck",
    },
    {
      title: "Patient-Focused Approach",
      desc: "Personalized care plans tailored to your comfort, schedule, and individual dental needs.",
      icon: "HeartHandshake",
    },
    {
      title: "Modern Treatment Experience",
      desc: "Gentle techniques and contemporary dental instruments aimed at minimizing discomfort.",
      icon: "Sparkles",
    },
    {
      title: "Convenient Mianwali Location",
      desc: "Centrally located on Sumbal Shaheed Road, easily accessible from all sectors of Mianwali.",
      icon: "MapPin",
    },
  ],

  whyChooseUs: [
    {
      title: "Professional Dental Care",
      desc: "Expert diagnostic skills and gentle clinical procedures tailored to restore your oral health.",
      icon: "Activity",
    },
    {
      title: "Patient-Centered Approach",
      desc: "Every treatment starts with attentive listening, addressing your dental concerns without haste.",
      icon: "Users",
    },
    {
      title: "Clear Treatment Guidance",
      desc: "Transparent explanations of available options, expected outcomes, and home-care tips.",
      icon: "FileText",
    },
    {
      title: "Comfort-Focused Experience",
      desc: "Gentle techniques designed to alleviate dental anxiety for children and adults alike.",
      icon: "Smile",
    },
    {
      title: "Convenient Mianwali Location",
      desc: "Situated near the landmark NADRA Office on Sumbal Shaheed Road in Civil Lines.",
      icon: "Navigation",
    },
    {
      title: "Easy Appointment Booking",
      desc: "Quickly book appointments via direct phone call, WhatsApp messaging, or online form.",
      icon: "CalendarCheck",
    },
  ],

  patientJourney: [
    {
      step: "01",
      title: "Book Appointment",
      desc: "Reach out easily via direct call, WhatsApp, or our quick online appointment request form.",
    },
    {
      step: "02",
      title: "Dental Consultation",
      desc: "Thorough clinical examination, symptom discussion, and digital assessment of your teeth and gums.",
    },
    {
      step: "03",
      title: "Treatment Planning",
      desc: "Clear discussion of recommended options, procedure steps, and prevention advice before starting.",
    },
    {
      step: "04",
      title: "Follow-Up Care",
      desc: "Post-treatment monitoring, hygiene instructions, and personalized follow-ups for lasting results.",
    },
  ],

  services: [
    {
      id: "dental-checkup",
      name: "Dental Checkup",
      shortDesc: "Routine clinical oral examination to detect cavities, plaque, and gum issues early.",
      fullDesc: "Regular dental checkups help identify potential oral concerns before they become painful or costly complications. We perform visual tooth examination, gum health checks, and bite alignment evaluations.",
      category: "Preventive",
      iconName: "Stethoscope",
      isPopular: true,
    },
    {
      id: "dental-consultation",
      name: "Dental Consultation",
      shortDesc: "In-depth discussion and diagnosis for your specific toothache or dental questions.",
      fullDesc: "A dedicated consultation session to review your dental history, discuss discomfort, evaluate aesthetic concerns, and determine tailored treatment roadmaps.",
      category: "General",
      iconName: "MessageSquare",
      isPopular: true,
    },
    {
      id: "teeth-cleaning",
      name: "Teeth Cleaning",
      shortDesc: "Professional removal of plaque and tartar buildup to safeguard gums and fresh breath.",
      fullDesc: "Professional ultrasonic and manual cleaning removes stubborn calculus that daily brushing cannot reach, helping prevent gingivitis and periodontal problems.",
      category: "Preventive",
      iconName: "Sparkles",
      isPopular: true,
    },
    {
      id: "scaling-and-polishing",
      name: "Scaling & Polishing",
      shortDesc: "Deep cleaning along the gum line followed by gentle surface stain polishing.",
      fullDesc: "Comprehensive scaling removes subgingival tartar deposits, followed by therapeutic polishing to smooth tooth surfaces, reduce future plaque retention, and brighten your smile.",
      category: "Preventive",
      iconName: "Award",
      isPopular: true,
    },
    {
      id: "teeth-whitening",
      name: "Teeth Whitening",
      shortDesc: "Safe dental procedures designed to lighten stains from tea, coffee, and daily wear.",
      fullDesc: "Professional whitening treatments carefully supervised to improve shade brightness while safeguarding enamel integrity and minimizing post-treatment tooth sensitivity.",
      category: "Cosmetic",
      iconName: "Sun",
      isPopular: true,
    },
    {
      id: "dental-fillings",
      name: "Dental Fillings",
      shortDesc: "Tooth-colored restorations to treat decay and restore tooth structure seamlessly.",
      fullDesc: "Durable composite and restorative fillings preserve natural tooth anatomy, seal cavities against progressive decay, and match your natural tooth shade.",
      category: "Restorative",
      iconName: "Layers",
      isPopular: true,
    },
    {
      id: "root-canal-treatment",
      name: "Root Canal Treatment",
      shortDesc: "Therapy to relieve severe toothache and save infected natural teeth from extraction.",
      fullDesc: "Endodontic therapy involves carefully cleaning infected pulp tissue from within the root canals, disinfecting the space, and sealing it hermetically to preserve your natural tooth.",
      category: "Restorative",
      iconName: "Zap",
      isPopular: true,
    },
    {
      id: "tooth-extraction",
      name: "Tooth Extraction",
      shortDesc: "Gentle removal of severely broken, unrestorable, or problematic decayed teeth.",
      fullDesc: "Performed with modern local anesthesia and gentle techniques to ensure patient comfort and prompt post-extraction socket healing.",
      category: "Surgical",
      iconName: "Scissors",
      isPopular: true,
    },
    {
      id: "wisdom-tooth-treatment",
      name: "Wisdom Tooth Treatment",
      shortDesc: "Evaluation and therapeutic management for impacted or painful third molars.",
      fullDesc: "Diagnostic evaluation for pericoronitis, impaction, or pressure crowding caused by emerging third molars, with appropriate medical management or surgical extraction.",
      category: "Surgical",
      iconName: "HelpCircle",
    },
    {
      id: "gum-disease-treatment",
      name: "Gum Disease Treatment",
      shortDesc: "Therapy for bleeding, swollen, or receding gums to preserve tooth support.",
      fullDesc: "Targeted periodontal intervention to arrest bacterial infection, reduce pocket depths, and regenerate healthy gum attachments around natural teeth.",
      category: "General",
      iconName: "Shield",
    },
    {
      id: "crowns",
      name: "Dental Crowns",
      shortDesc: "Custom protective caps to restore strength, function, and aesthetics to damaged teeth.",
      fullDesc: "High-strength ceramic or porcelain crowns precisely fitted to protect weakened teeth post-root canal or following substantial fracture.",
      category: "Restorative",
      iconName: "Crown",
      isPopular: true,
    },
    {
      id: "dental-bridges",
      name: "Dental Bridges",
      shortDesc: "Fixed dental prosthetics to replace one or more missing teeth naturally.",
      fullDesc: "Bridges anchor to adjacent healthy teeth or implants, restoring efficient chewing capacity, speech clarity, and arch alignment.",
      category: "Restorative",
      iconName: "GitMerge",
    },
    {
      id: "dentures",
      name: "Dentures (Partial & Complete)",
      shortDesc: "Removable dental appliances custom-made for comfortable chewing and smile restoration.",
      fullDesc: "Carefully fabricated partial or full dentures to restore facial profile, mastication, and everyday confidence for patients with multiple missing teeth.",
      category: "Restorative",
      iconName: "Box",
    },
    {
      id: "dental-implants",
      name: "Dental Implants Consultation",
      shortDesc: "Assessment and planning for permanent artificial tooth root replacements.",
      fullDesc: "Detailed clinical and radiological examination to determine bone density suitability for titanium dental implants, providing a permanent solution for missing teeth.",
      category: "Surgical",
      iconName: "Anchor",
    },
    {
      id: "braces-orthodontic",
      name: "Braces / Orthodontic Consultation",
      shortDesc: "Evaluation for misaligned teeth, crowding, gaps, and bite irregularities.",
      fullDesc: "Orthodontic assessment to examine dental arches, spacing, and jaw alignment, advising on appropriate alignment strategies.",
      category: "General",
      iconName: "Compass",
    },
    {
      id: "childrens-dental-care",
      name: "Children's Dental Care",
      shortDesc: "Gentle, friendly oral healthcare designed specifically for younger patients.",
      fullDesc: "Preventive fluoridation, cavity prevention, gentle habit counseling, and primary tooth maintenance in a welcoming, anxiety-free setting.",
      category: "Preventive",
      iconName: "Heart",
    },
    {
      id: "tooth-sensitivity-treatment",
      name: "Tooth Sensitivity Treatment",
      shortDesc: "Relief for sharp pain triggered by hot, cold, sweet, or acidic foods and drinks.",
      fullDesc: "Application of clinical desensitizing varnishes, bonding agents, and guidance on enamel preservation to stop nerve sensitivity at the source.",
      category: "General",
      iconName: "Thermometer",
    },
    {
      id: "cosmetic-dentistry",
      name: "Cosmetic Dentistry",
      shortDesc: "Aesthetic enhancement for tooth alignment, shape, and overall smile harmony.",
      fullDesc: "Customized cosmetic approaches including composite bonding, enamel recontouring, and aesthetic restorations designed to harmonize your smile.",
      category: "Cosmetic",
      iconName: "Smile",
    },
    {
      id: "smile-enhancement",
      name: "Smile Enhancement",
      shortDesc: "Comprehensive aesthetic consultation to transform your confidence when smiling.",
      fullDesc: "Holistic evaluation of lip line, tooth proportion, gum display, and color shade to design an appealing, natural-looking smile makeover.",
      category: "Cosmetic",
      iconName: "Sparkles",
    },
    {
      id: "emergency-dental-consultation",
      name: "Emergency Dental Consultation",
      shortDesc: "Prompt triage and pain relief for acute toothaches, fractured teeth, or oral trauma.",
      fullDesc: "Prioritized evaluation for sudden severe dental pain, dislodged fillings, broken teeth, or facial swelling requiring urgent clinical intervention.",
      category: "General",
      iconName: "AlertCircle",
      isPopular: true,
    },
  ],

  featuredTreatments: [
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      subtitle: "Relieve severe pain and save your natural tooth",
      description:
        "Endodontic therapy gently cleans out infected nerve tissue, disinfects the inner roots, and places a sterile seal so you can keep your original tooth without needing an extraction.",
      benefits: [
        "Eliminates throbbing toothache and thermal sensitivity",
        "Prevents spread of infection to jawbone and surrounding tissues",
        "Preserves your natural chewing mechanics and jaw structure",
        "High success rate when followed by a protective dental crown",
      ],
      whenNeeded: [
        "Constant or throbbing tooth pain, especially when lying down",
        "Prolonged sensitivity to hot or cold drinks",
        "Swelling or a small pimple on the adjacent gum tissue",
        "Deep cavity reaching the inner pulp chamber",
      ],
      image: "/images/root-canal.jpg",
    },
    {
      id: "dental-cleaning",
      title: "Dental Cleaning & Polishing",
      subtitle: "Fresh breath, healthy gums, and plaque prevention",
      description:
        "Professional scaling removes stubborn tartar and calculus that regular brushing misses, followed by polishing to leave tooth enamel smooth and resistant to future plaque accumulation.",
      benefits: [
        "Prevents bleeding gums and chronic gingivitis",
        "Removes surface stains caused by tea, coffee, and spices",
        "Restores natural freshness and combats persistent bad breath",
        "Protects the supporting bone around your natural teeth",
      ],
      whenNeeded: [
        "Gums that bleed when brushing or flossing",
        "Noticeable yellowish tartar along the gum margins",
        "It has been over 6 months since your last professional cleaning",
        "Persistent halitosis (bad breath) despite home oral care",
      ],
      image: "/images/cleaning.jpg",
    },
    {
      id: "dental-fillings",
      title: "Tooth-Colored Dental Fillings",
      subtitle: "Seamless restorations that blend with your natural teeth",
      description:
        "Modern composite dental fillings restore cavities with biocompatible resin that matches the natural shade of your enamel, preventing decay from reaching the sensitive inner nerve.",
      benefits: [
        "Tooth-colored aesthetic appearance that blends seamlessly",
        "Halts progression of dental decay immediately",
        "Bonds directly to tooth structure, requiring minimal removal",
        "Restores normal chewing comfort and prevents food trapping",
      ],
      whenNeeded: [
        "Visible dark spots or visible holes on chewing surfaces",
        "Mild pain or food catching between adjacent teeth",
        "Chipped, worn down, or rough tooth edges",
        "Replacement of old, broken, or discolored fillings",
      ],
      image: "/images/filling.jpg",
    },
    {
      id: "tooth-extraction",
      title: "Gentle Tooth Extraction",
      subtitle: "Comfortable removal for severely compromised teeth",
      description:
        "When a tooth is broken beyond restorative repair or causing severe crowding, our gentle extraction technique ensures minimal tissue trauma, localized comfort, and smooth socket healing.",
      benefits: [
        "Prompt relief from unmanageable pain caused by unrestorable decay",
        "Prevents deep-seated infections from spreading to neighboring teeth",
        "Relieves pressure pain associated with impacted wisdom teeth",
        "Prepares the oral cavity for eventual dental bridge or implant",
      ],
      whenNeeded: [
        "Severe tooth breakage below the gumline",
        "Advanced periodontitis with severe tooth mobility",
        "Impacted wisdom teeth causing recurrent pain or gum swelling",
        "Severe structural damage not candidate for root canal",
      ],
      image: "/images/dental-treatment.jpg",
    },
    {
      id: "crowns-bridges",
      title: "Dental Crowns & Bridges",
      subtitle: "Durable reinforcement and gap replacement",
      description:
        "Precision-crafted dental crowns protect weakened or post-root canal teeth, while custom bridges bridge the gap left by missing teeth to restore normal chewing and facial symmetry.",
      benefits: [
        "Restores full chewing power and natural speech articulation",
        "Reinforces brittle teeth after extensive root canal therapy",
        "Prevents remaining teeth from shifting into open spaces",
        "Crafted from premium materials for long-term aesthetic appeal",
      ],
      whenNeeded: [
        "Post-root canal tooth requiring fracture protection",
        "Extensively filled or cracked tooth structure",
        "One or more missing teeth causing chewing difficulty",
        "Aesthetic enhancement for severely discolored or misshapen teeth",
      ],
      image: "/images/crown.jpg",
    },
    {
      id: "teeth-whitening",
      title: "Professional Teeth Whitening",
      subtitle: "Safely brighten your smile with clinical expertise",
      description:
        "Gentle, clinically monitored whitening solutions designed to lift deep lifestyle stains from tea, coffee, and aging while taking special care to safeguard your enamel and minimize sensitivity.",
      benefits: [
        "Visibly brightens smile shade for special occasions and weddings",
        "Non-invasive aesthetic treatment preserving natural enamel",
        "Monitored under professional dental supervision for safety",
        "Boosts confidence when smiling and speaking in social settings",
      ],
      whenNeeded: [
        "Yellowish or brownish staining from tea, coffee, or tobacco",
        "Upcoming wedding, job interview, or family milestone event",
        "General dulling of tooth shade due to natural aging",
        "Desire for a rejuvenated, healthy-looking smile",
      ],
      image: "/images/whitening.jpg",
    },
  ],

  // Editable testimonials placeholder with clear client instruction
  testimonials: [
    {
      id: "test-1",
      patientName: "Mianwali Patient",
      rating: 5,
      date: "Recent Patient Feedback",
      review:
        "Visited Dr. Tariq Mehmood for dental consultation. Very polite, professional approach and clear guidance on the treatment needed. Highly recommend for residents of Mianwali.",
      serviceTag: "Dental Consultation",
      isVerifiedGoogle: true,
    },
    {
      id: "test-2",
      patientName: "Civil Lines Resident",
      rating: 5,
      date: "Recent Patient Feedback",
      review:
        "Clean clinic environment and gentle procedure during teeth cleaning. Appreciated the doctor taking time to explain proper oral hygiene habits.",
      serviceTag: "Scaling & Polishing",
      isVerifiedGoogle: true,
    },
    {
      id: "test-3",
      patientName: "Verified Visitor",
      rating: 4,
      date: "Recent Patient Feedback",
      review:
        "Good experience with dental filling. Dr. Tariq is patient, answers all questions, and the clinic location on Sumbal Shaheed Road is very convenient.",
      serviceTag: "Dental Fillings",
      isVerifiedGoogle: true,
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What dental services are available at the clinic?",
      answer:
        "Dr. Tariq Mehmood provides comprehensive dental care services including routine checkups, dental consultations, teeth cleaning, scaling and polishing, tooth-colored fillings, root canal therapy, tooth extractions, crowns, bridges, and emergency dental consultations. All procedures are recommended based on an in-person clinical examination.",
      category: "General",
    },
    {
      id: "faq-2",
      question: "How do I book an appointment with Dr. Tariq Mehmood?",
      answer:
        "You can book an appointment easily by calling 0300 4757123, sending a WhatsApp message with your preferred timing, or submitting our online appointment request form. Our clinic team will confirm your slot based on doctor availability.",
      category: "Appointments",
    },
    {
      id: "faq-3",
      question: "Where is the clinic located in Mianwali?",
      answer:
        "The clinic is conveniently located on Sumbal Shaheed Road, near the NADRA Office in Civil Lines, Mianwali, Punjab. You can click 'Get Directions' on the website for GPS directions via Google Maps.",
      category: "Location",
    },
    {
      id: "faq-4",
      question: "How can I contact Dr. Tariq Mehmood directly?",
      answer:
        "You can call the clinic on 0300 4757123 or message on WhatsApp at +92 300 4757123. For general inquiries or directions, our team is happy to assist during clinic operating hours.",
      category: "General",
    },
    {
      id: "faq-5",
      question: "What should I bring to my dental appointment?",
      answer:
        "Please bring any previous dental X-rays, medical records, a list of medications you currently take (especially for blood pressure or diabetes), and your identification. Arriving 10 minutes early helps with smooth registration.",
      category: "Appointments",
    },
    {
      id: "faq-6",
      question: "How often should I have a dental checkup and cleaning?",
      answer:
        "General dental guidelines recommend visiting your dental surgeon every 6 months for a routine oral examination and professional cleaning. Regular checkups catch cavities and gum inflammation before they cause discomfort.",
      category: "Treatments",
    },
    {
      id: "faq-7",
      question: "Is dental scaling or cleaning painful?",
      answer:
        "Routine dental scaling is generally comfortable. Modern ultrasonic instruments are designed to remove calculus gently. If you have sensitive gums or heavy buildup, topical or mild local numbing can be provided to ensure complete comfort.",
      category: "Treatments",
    },
    {
      id: "faq-8",
      question: "What is a root canal treatment and will it hurt?",
      answer:
        "A root canal treatment is a restorative procedure that removes infected or inflamed nerve tissue from inside your tooth, relieving the severe ache caused by infection. It is performed under effective local anesthesia, so the procedure itself is virtually painless and provides relief from acute tooth pain.",
      category: "Treatments",
    },
    {
      id: "faq-9",
      question: "When should I visit a dentist urgently?",
      answer:
        "You should seek prompt dental attention if you experience severe, throbbing tooth pain, facial or gum swelling, a broken or knocked-out tooth, persistent bleeding after trauma, or difficulty chewing due to sharp discomfort.",
      category: "Treatments",
    },
    {
      id: "faq-10",
      question: "Can children receive dental care at the clinic?",
      answer:
        "Yes, children can receive preventive dental care, dental checkups, cavity fillings, and guidance on habit management in a gentle, reassuring environment.",
      category: "General",
    },
  ],
};
