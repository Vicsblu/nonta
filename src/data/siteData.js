// ─────────────────────────────────────────────
//  src/data/siteData.js
//  Central data for all Nonta Engineering content
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Nonta Engineering Services Enterprise',
  shortName: 'NONTA ENGINEERING',
  tagline: 'Solar & Electrical Solutions',
  rc: 'RC-3571621',
  phone: '+234-810-753-6266',
  phoneRaw: '+2348107536266',
  email: 'nontaengineeringservices@gmail.com',
  address: '136, Ishagamu Road, Opposite Sawmill',
  city: 'Ikorodu, Lagos State, Nigeria',
  mapsUrl: 'https://maps.google.com/?q=136+Ishagamu+Road+Ikorodu+Lagos',
  whatsapp: "https://wa.me/2348107536266?text=Hello%20I'm%20interested%20in%20your%20services",
  social: {
    instagram: 'https://instagram.com/nontaenergy',
    facebook: 'https://facebook.com/nontaenergy',
    tiktok: 'https://tiktok.com/@nontaeng',
    twitter: 'https://twitter.com/nontaenergy',
  },
  handle: '@nontaenergy',
}

export const HERO_STATS = [
  { value: '120+', label: 'Projects Done' },
  { value: '10+',   label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export const TRUST_BAR_ITEMS = [
  { icon: 'check', label: 'Registered Company' },
  { icon: 'text',  label: '⚡ Expert Installations' },
  { icon: 'text',  label: '☀️ Solar Specialists' },
  { icon: 'text',  label: '🔋 Inverter & Backup Systems' },
  { icon: 'text',  label: '📍 Lagos & Nationwide' },
]

export const SERVICES = [
  {
    icon: '⚡',
    title: 'Electrical Installations & Wiring',
    desc: 'Professional electrical wiring, panel installations, and full-building electrical setups for homes and commercial properties across Lagos.',
  },
  {
    icon: '☀️',
    title: 'Solar Energy Solutions',
    desc: 'End-to-end solar system design and installation — from panels to inverters and batteries — tailored for your energy needs and budget.',
  },
  {
    icon: '🔋',
    title: 'Inverter & Backup Systems',
    desc: 'Install, configure, and maintain inverter systems and battery backup solutions that keep your power on even during grid outages.',
  },
  {
    icon: '🔌',
    title: 'Supply of Electrical Materials',
    desc: 'We supply quality wires, cables, breakers, conduits, switches, and all electrical fittings — sourced from trusted manufacturers.',
  },
  {
    icon: '🌞',
    title: 'Supply of Solar Equipment',
    desc: 'Get quality solar panels, inverters, lithium and gel batteries, charge controllers, and accessories from reputable global brands.',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Repairs',
    desc: 'Regular servicing, system health checks, fault diagnosis, and repairs for solar and electrical systems to maximize performance and lifespan.',
  },
]

export const PROCESS_STEPS = [
  { num: '01', title: 'Consultation',      desc: 'We discuss your energy needs, budget, and goals via call or WhatsApp.' },
  { num: '02', title: 'Site Inspection',   desc: 'Our team visits your location to assess the site and measure requirements.' },
  { num: '03', title: 'System Design',     desc: 'We create a custom power solution design optimized for your property.' },
  { num: '04', title: 'Installation',      desc: 'Our certified technicians deploy and install all systems professionally.' },
  { num: '05', title: 'Testing & Handover',desc: 'Full system testing, user briefing, and handover documentation provided.' },
]

export const PROJECTS = [
  {
    img: '/notas/notasss.jpg',
    alt: 'Large Solar Array Installation',
    title: 'Residential Solar Array',
    subtitle: '☀️ Lagos Island – 7kW System',
  },
  
  {
    img: '/notas/notasu.jpg',
    alt: 'Inverter Installation',
    title: 'Home Inverter Setup',
    subtitle: '🔋 Ikorodu – 5kVA System',
  },
  {
    img: '/notas/notasa.jpg',
    alt: 'Solar Panels on Roof',
    title: 'Rooftop Solar Installation',
    subtitle: '☀️ Agege – 8kW System',
  },
  {
    img: '/notas/notass.jpg',
    alt: 'Electrical Panel',
    title: 'Office Solar Project',
    subtitle: '⚡ Ikeja – Full Office Setup',
  },
  {
    img: '/notas/notaso.jpg',
    alt: 'Solar System',
    title: 'Residential Solar Project',
    subtitle: '☀️ Epe – Full Home Setup',
    height: '400px',
  },
  {
    img: '/notas/not.jpg',
    alt: 'Solar System',
    title: 'Residential Solar Project',
    subtitle: '☀️ Lagos Island – Home Setup',
  },
]

export const WHY_FEATURES = [
  {
    icon: '🏗️',
    title: 'Reliable & Stable Power Solutions',
    desc: 'Every system we install is designed for maximum reliability, minimizing downtime and ensuring consistent power delivery.',
  },
  {
    icon: '👷',
    title: 'Experienced Technicians',
    desc: 'Our team consists of trained and certified electrical and solar engineers with years of hands-on installation experience.',
  },
  {
    icon: '📦',
    title: 'Quality Equipment Supply',
    desc: 'We source and supply only high-quality, certified panels, inverters, and batteries from reputable manufacturers.',
  },
  {
    icon: '💡',
    title: 'Affordable & Scalable Solutions',
    desc: 'Solutions designed to fit your current budget with room to expand as your energy needs grow over time.',
  },
]

export const TRUST_CARDS = [
  {
    icon: '🏛️',
    title: 'Registered Company',
    desc: `Officially registered business in Nigeria. RC Number: RC-3571621`,
    highlight: true,
  },
  {
    icon: '👷‍♂️',
    title: 'Professional Technicians',
    desc: 'Every project is handled by trained, experienced engineers — not amateurs.',
  },
  {
    icon: '✅',
    title: 'Quality Materials Only',
    desc: 'We supply and install only certified, premium-grade electrical and solar equipment.',
  },
  {
    icon: '🤝',
    title: 'Customer Satisfaction Focus',
    desc: "We don't close a job until the client is fully satisfied with the system and its performance.",
  },
]

export const TESTIMONIALS = [
  {
    initials: 'AO',
    name: 'Adeola Okafor',
    location: 'Homeowner, Ikorodu',
    text: "Nonta Engineering installed our 8kW solar system. Excellent workmanship, very professional team. We haven't had a power issue since. Highly recommended!",
  },
  {
    initials: 'BM',
    name: 'Babatunde M.',
    location: 'Business Owner, Ikeja',
    text: 'We needed inverter backup for our office in Ikeja. Nonta came, inspected, and had everything up and running. The team was clean, fast, and thorough.',
  },
  {
    initials: 'CF',
    name: 'Chioma F.',
    location: 'Resident, Agege',
    text: 'From quote to handover, everything was smooth. Their pricing was fair and the solar equipment is top quality. My electricity bill has dropped massively. Thank you Nonta!',
  },
]

export const FAQS = [
  {
    q: 'How long does installation take?',
    a: 'Most residential solar or inverter installations are completed within 1–3 days depending on system size and site conditions. Commercial projects may take longer. We give you a clear timeline before work begins.',
  },
  {
    q: 'Do you supply equipment only, without installation?',
    a: 'Yes! We supply solar panels, inverters, batteries, cables, and electrical materials to customers who have their own installation teams. Contact us on WhatsApp for a supply-only quote.',
  },
  {
    q: 'What is the cost of solar installation?',
    a: 'Cost depends on your energy consumption, the system size (kW), and equipment chosen. We offer free consultations and site assessments to give you an accurate, itemized quote. Message us on WhatsApp to start.',
  },
  {
    q: 'Do you provide ongoing maintenance services?',
    a: "Absolutely. We offer scheduled maintenance plans, system health checks, fault diagnosis, and repair services for all systems we've installed — as well as for systems installed by others.",
  },
  {
    q: 'Can I request a custom power solution?',
    a: "Yes. Every client gets a custom-designed solution based on their energy load, property layout, and budget. We don't do one-size-fits-all — we design what works best for you.",
  },
]

export const ENERGY_TIPS = [
  {
    icon: '☀️',
    title: 'Benefits of Solar Energy',
    text: 'Solar energy dramatically reduces electricity bills, provides independence from NEPA/grid failures, and pays for itself within a few years. It adds long-term value to your property and produces zero emissions — a smart investment for any Nigerian home or business.',
  },
  {
    icon: '🔋',
    title: 'Choosing the Right Inverter',
    text: 'Match your inverter capacity to your total appliance load — not just current needs, but future expansion. Consider battery bank compatibility, sine wave quality (pure sine for sensitive electronics), and the inverter\'s efficiency rating before purchasing.',
  },
  {
    icon: '💡',
    title: 'Reducing Electricity Costs',
    text: 'Switch to LED lighting throughout your home, unplug appliances when not in use, install smart surge protectors, use energy-efficient AC units, and time heavy appliances to run on solar during peak sunlight hours. Small habits create big savings.',
  },
]

export const FOOTER_LINKS = {
  services: [
    'Electrical Installations',
    'Solar Energy Systems',
    'Inverter & Backup',
    'Equipment Supply',
    'Maintenance & Repairs',
  ],
  company: [
    { label: 'About Us',     href: '#about' },
    { label: 'FAQ',          href: '#faq' },
    { label: 'Contact',      href: '#contact' },
  ],
}
