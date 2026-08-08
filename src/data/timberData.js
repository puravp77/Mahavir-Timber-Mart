export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
};

export const COMPANY_INFO = {
  name: "SHREE MAHAVIR TIMBER MART",
  tagline: "Quality Timber. Lasting Trust.",
  logo: getAssetUrl("assets/Logo.jpeg"),
  instagramHandle: "mahavir.timber.mart",
  instagramUrl: "https://www.instagram.com/mahavir.timber.mart",
  description: "SHREE MAHAVIR TIMBER MART supplies premium quality timber logs, wood planks and natural hardwood for furniture manufacturers, architects, builders and interior designers throughout Gujarat.",
  address: "B/H Reliance Mall, Mahatma Industrial Estate, Khatodra Wadi, Surat, Gujarat 395002",
  phones: ["9825224702", "9909963638"],
  email: "info@mahavirtimber.com",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.613941421063!2d72.8123167!3d21.1677334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e3860000001%3A0x6b872b0e69123456!2sMahatma%20Industrial%20Estate%2C%20Khatodra%20Wadi%2C%20Surat%2C%20Gujarat%20395002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#whyChoose" },
  { label: "Contact", href: "#contact" }
];

export const FLOATING_CARDS = [
  { title: "Premium Timber", subtitle: "Grade A Hardwood Logs", icon: "TreePine" },
  { title: "Trusted Supplier", subtitle: "Decades of Legacy in Surat", icon: "ShieldCheck" },
  { title: "Natural Hardwood", subtitle: "Seasoned & Quality Treated", icon: "Layers" },
  { title: "Reliable Delivery", subtitle: "Pan-Gujarat Supply Chain", icon: "Truck" }
];

export const PRODUCTS = [
  {
    id: "timber-logs",
    title: "Timber Logs",
    category: "Hardwood Logs",
    image: getAssetUrl("assets/1.png"),
    description: "Premium quality raw and debarked hardwood timber logs directly supplied for sawmills, structural work, and large construction.",
    features: [
      "High natural oil content & weather resilience",
      "Exceptional structural load bearing capacity",
      "Available in customized log lengths and girths",
      "Direct mill procurement in Surat"
    ],
    badge: "Bestseller",
    specs: { density: "650 - 850 kg/m³", moisture: "12% - 15% Seasoned", finish: "Natural Rough / Debarked Log" }
  },
  {
    id: "valsadi-wood",
    title: "Valsadi Teak Wood",
    category: "Signature Teak",
    image: getAssetUrl("assets/2.JPG"),
    description: "Renowned Gujarat Valsadi teak wood with beautiful natural grain, exceptional durability, and rich termite resistance.",
    features: [
      "Authentic heritage Valsadi Teak timber",
      "Immune to white ants and moisture rot",
      "Superior machining & carving qualities",
      "High resale value for luxury home interiors"
    ],
    badge: "Heritage Selection",
    specs: { density: "720 kg/m³", moisture: "10% - 12%", finish: "Smooth Planed / Raw Sawn" }
  },
  {
    id: "wood-planks",
    title: "Furniture Wood Planks",
    category: "Precision Slabs",
    image: getAssetUrl("assets/3.JPG"),
    description: "Precision-sawn seasoned hardwood planks ready for immediate use by furniture manufacturers, carpenters, and interior designers.",
    features: [
      "Uniform thickness & zero warping tolerances",
      "Ideal for modular wardrobes, tables, and doors",
      "Available in custom thickness & width gauges",
      "Pre-treated against termites and decay"
    ],
    badge: "Ready-to-Use",
    specs: { density: "680 kg/m³", moisture: "8% - 10%", finish: "S4S (Surfaced 4 Sides)" }
  },
  {
    id: "custom-timber",
    title: "Custom Cut Timber",
    category: "Bespoke Millwork",
    image: getAssetUrl("assets/4.JPG"),
    description: "Tailor-made wood cuts produced according to exact project blueprints, CAD drawings, and architectural specifications.",
    features: [
      "Custom cross-sections & beam profiles",
      "Precision cut using computerized saw machinery",
      "Direct technical consultation in Surat",
      "Bulk volume order fulfillment"
    ],
    badge: "Architect's Choice",
    specs: { density: "Variable by species", moisture: "Custom Dry Target", finish: "Bespoke Specification" }
  },
  {
    id: "live-edge",
    title: "Live Edge Hardwood Slabs",
    category: "Architectural Statement",
    image: getAssetUrl("assets/5.JPG"),
    description: "Natural organic edge hardwood timber slabs for luxury dining tables, executive conference desks, and feature wall paneling.",
    features: [
      "Preserved natural organic tree contours",
      "Stunning figure, grain swirls & rich character",
      "Seasoned for years to guarantee stability",
      "One-of-a-kind natural wood statement piece"
    ],
    badge: "Luxury Edition",
    specs: { density: "750 kg/m³", moisture: "9% - 11%", finish: "Raw Bark Preserved / Planed" }
  },
  {
    id: "architectural-beams",
    title: "Structural Architectural Beams",
    category: "Heavy Timber",
    image: getAssetUrl("assets/6.JPG"),
    description: "Heavy-duty structural wood columns and ceiling beams engineered for luxury villas, resort pergolas, and roof trusses.",
    features: [
      "Exceptional flexural strength & beam span limit",
      "Distinctive rustic modern architectural appeal",
      "Solid heavy-section structural wood",
      "Custom surface distressing options"
    ],
    badge: "Structural Grade",
    specs: { density: "800+ kg/m³", moisture: "12% - 14%", finish: "Hand-hewn or Smooth" }
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Premium Timber Log Stack",
    category: "Logs",
    image: getAssetUrl("assets/1.png"),
    description: "High-grade hardwood logs stocked at our Surat yard."
  },
  {
    id: 2,
    title: "Valsadi Teak Wood Stock",
    category: "Valsadi Wood",
    image: getAssetUrl("assets/2.JPG"),
    description: "Authentic Valsadi teak wood logs with deep natural grain."
  },
  {
    id: 3,
    title: "Furniture Grade Wood Planks",
    category: "Planks",
    image: getAssetUrl("assets/3.JPG"),
    description: "Seasoned hardwood planks ready for furniture manufacturing."
  },
  {
    id: 4,
    title: "Custom Timber Cut Yard",
    category: "Custom Millwork",
    image: getAssetUrl("assets/4.JPG"),
    description: "Custom cut timber tailored to architectural blueprints."
  },
  {
    id: 5,
    title: "Natural Live Edge Timber Slabs",
    category: "Live Edge",
    image: getAssetUrl("assets/5.JPG"),
    description: "Exotic live-edge hardwood timber for bespoke dining tables."
  },
  {
    id: 6,
    title: "Heavy Structural Beams & Logs",
    category: "Architectural Beams",
    image: getAssetUrl("assets/6.JPG"),
    description: "Heavy structural timber sectioning for villas & resorts."
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "quality",
    title: "Premium Quality",
    description: "Rigorous grade sorting ensures every log and plank meets international architectural standards.",
    icon: "Award"
  },
  {
    id: "hardwood",
    title: "Natural Hardwood",
    description: "100% genuine solid timber with authentic natural wood grain, high oil content, and timeless strength.",
    icon: "Trees"
  },
  {
    id: "supply",
    title: "Reliable Supply",
    description: "Vast warehouse inventory guarantees on-time delivery for large-scale construction & interiors.",
    icon: "TruckCheck"
  },
  {
    id: "range",
    title: "Wide Product Range",
    description: "From heavy logs to finished furniture planks, Valsadi teak, and bespoke custom sizing.",
    icon: "LayoutGrid"
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    description: "Direct mill procurement allows us to offer unmatched luxury grade timber at wholesale prices.",
    icon: "Tag"
  },
  {
    id: "trust",
    title: "Trusted Since Years",
    description: "Decades of solid trust with Surat's leading architects, interior designers, and master carpenters.",
    icon: "Shield"
  }
];

export const STATISTICS = [
  { count: 25, suffix: "+", label: "Years of Experience", description: "Serving Gujarat timber market with integrity" },
  { count: 500, suffix: "+", label: "Premium Products", description: "Wide selection of wood logs, planks & slabs" },
  { count: 1200, suffix: "+", label: "Satisfied Customers", description: "Architects, interior designers & builders" },
  { count: 5000, suffix: "+", label: "Reliable Deliveries", description: "On-time project fulfillment guaranteed" }
];
