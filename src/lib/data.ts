// ─── Images (Base44 CDN — update to self-hosted when ready) ──────────────────
export const IMAGES = {
  logoWhite: '/images/advantage-white.png',
  heroBg: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1769cf076_generated_image.png',
  footerBg: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/a1e5ed57a_generated_image.png',
  erp: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/2d1182774_generated_image.png',
  saas: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/d3d72cfa3_generated_image.png',
  brand: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/a73cd91ec_generated_image.png',
  marketing: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/4258bc162_generated_image.png',
  hospitality: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/c6ccd7909_generated_image.png',
  fintech: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/51b66b580_generated_image.png',
  interior: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/96a773d0f_generated_image.png',
  media: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/cb89b57f4_generated_image.png',
  retail: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1271a0e6c_generated_image.png',
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/#work' },
  { label: 'Team', href: '/#team' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#reach-out' },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '12+', label: 'Industries Served' },
]

// ─── Logo Marquee ─────────────────────────────────────────────────────────────
export const MARQUEE_LOGOS = [
  'IVORY SUITES', 'CLEARFUND', 'STUDIO FORM', 'PRIMEMEDIA GROUP',
  'ARCLINE HOMES', 'VERTEXIO', 'MERIDIAN GROUP', 'NOVALUX RETAIL',
]

// ─── Service Monoliths ────────────────────────────────────────────────────────
export const SERVICE_MONOLITHS = [
  {
    id: 'branding',
    number: '01',
    title: 'Strategic Branding',
    subtitle: 'Identity Architecture',
    description: 'We engineer brand identities that resonate across every touchpoint — from visual systems and naming to narrative frameworks that position your business as a category leader.',
    capabilities: ['Brand Strategy', 'Visual Identity Design', 'Brand Guidelines', 'Naming & Messaging', 'Brand Audits', 'Motion & Campaign Assets'],
    image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/96a773d0f_generated_image.png',
  },
  {
    id: 'erp',
    number: '02',
    title: 'Enterprise ERP',
    subtitle: 'Operational Intelligence',
    description: 'Custom ERP solutions that transform complex operational workflows into streamlined, AI-augmented systems. Built for manufacturers, hospitality groups, logistics firms, and multi-location enterprises.',
    capabilities: ['Custom ERP Development', 'System Integration', 'Process Automation', 'Data Migration', 'Analytics Dashboards', 'Legacy System Modernization'],
    image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/51b66b580_generated_image.png',
  },
  {
    id: 'saas',
    number: '03',
    title: 'SaaS Platforms',
    subtitle: 'Scalable Architecture',
    description: 'Full-stack SaaS product development from concept to market. We build cloud-native platforms engineered for hypergrowth — for FinTech startups, media tools, booking systems, and everything in between.',
    capabilities: ['Product Architecture', 'Cloud Infrastructure', 'API Development', 'User Experience Design', 'Growth Engineering', 'Ongoing Product Support'],
    image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1271a0e6c_generated_image.png',
  },
  {
    id: 'marketing',
    number: '04',
    title: 'AI Marketing',
    subtitle: 'Performance Systems',
    description: 'Data-driven marketing ecosystems powered by machine learning. We deploy intelligent campaigns for media houses, hospitality brands, and FinTechs — adapting in real-time for maximum ROI.',
    capabilities: ['Performance Marketing', 'SEO & Content Strategy', 'Marketing Automation', 'Social Media Management', 'Analytics & Attribution', 'Conversion Optimization'],
    image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/cb89b57f4_generated_image.png',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: 'Advantage completely transformed how our luxury brand is perceived. From the visual identity to the digital experience, every touchpoint now tells a cohesive, premium story. Our bookings increased 40% in the first quarter after launch.',
    author: 'Amara Osei',
    title: 'Managing Director, Ivory Suites Hotels',
    company: 'IVORY SUITES',
    industry: 'Hospitality',
  },
  {
    quote: 'We needed a fintech platform built fast, with serious compliance and scale in mind. Advantage delivered a production-ready SaaS product in 14 weeks. The architecture has handled 10× our initial projections without breaking a sweat.',
    author: 'Kwame Asante',
    title: 'CEO, ClearFund',
    company: 'CLEARFUND',
    industry: 'FinTech',
  },
  {
    quote: 'Our interior design firm was drowning in project management chaos. The custom ERP Advantage built for us now handles client proposals, contractor scheduling, and inventory in one place. We\'ve saved over 20 hours a week.',
    author: 'Fatima Al-Rashid',
    title: 'Founder, Studio FORM',
    company: 'STUDIO FORM',
    industry: 'Interior Design',
  },
  {
    quote: 'The AI marketing system Advantage deployed for our media network is unlike anything we\'ve used. Campaign performance is tracked in real-time, and the automated optimisation genuinely outperforms our previous agency by a wide margin.',
    author: 'David Mensah',
    title: 'Head of Growth, PrimeMedia Group',
    company: 'PRIMEMEDIA',
    industry: 'Media & Broadcasting',
  },
]

export const CLIENT_LOGOS = [
  { name: 'IVORY SUITES', tag: 'Hospitality' },
  { name: 'CLEARFUND', tag: 'FinTech' },
  { name: 'STUDIO FORM', tag: 'Interior Design' },
  { name: 'PRIMEMEDIA', tag: 'Media' },
  { name: 'NOVALUX RETAIL', tag: 'Retail' },
  { name: 'VERTEXIO', tag: 'Logistics' },
  { name: 'ARCLINE HOMES', tag: 'Real Estate' },
  { name: 'MERIDIAN GROUP', tag: 'Enterprise' },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  { id: 1, title: 'ClearFund Platform', client: 'ClearFund', type: 'SaaS Platform', tag: 'saas', year: '2025', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/1271a0e6c_generated_image.png', size: 'large' as const, description: 'End-to-end FinTech SaaS for consumer lending — built to scale from 0 to 500k users in under 12 months.' },
  { id: 2, title: 'Studio FORM Identity', client: 'Studio FORM', type: 'Brand Identity', tag: 'branding', year: '2024', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/a73cd91ec_generated_image.png', size: 'small' as const, description: 'Premium visual identity for a luxury interior design firm entering the GCC market.' },
  { id: 3, title: 'Meridian ERP Suite', client: 'Meridian Group', type: 'Enterprise ERP', tag: 'erp', year: '2025', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/51b66b580_generated_image.png', size: 'small' as const, description: 'Unified operational ERP across procurement, HR, and finance for a regional conglomerate.' },
  { id: 4, title: 'PrimeMedia Campaign AI', client: 'PrimeMedia Group', type: 'AI Marketing', tag: 'marketing', year: '2025', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/4258bc162_generated_image.png', size: 'medium' as const, description: 'AI-driven media buying and audience targeting system delivering 3× ROAS improvement.' },
  { id: 5, title: 'Ivory Suites Experience', client: 'Ivory Suites Hotels', type: 'Brand Identity', tag: 'branding', year: '2025', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/c6ccd7909_generated_image.png', size: 'medium' as const, description: 'Full brand refresh and digital presence overhaul for a 5-star hospitality group across 4 cities.' },
  { id: 6, title: 'Arcline Interior OS', client: 'Arcline Homes', type: 'Enterprise ERP', tag: 'erp', year: '2026', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/96a773d0f_generated_image.png', size: 'small' as const, description: 'Custom project management and client portal ERP tailored for high-end interior design studios.' },
]

// ─── Case Studies ─────────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  { client: 'Ivory Suites Hotels', industry: 'Hospitality', service: 'Brand Identity', metric: '+40%', metricLabel: 'Booking Increase Post-Rebrand', description: 'Full brand overhaul and digital experience redesign for a 5-star hotel group operating across 4 major cities.' },
  { client: 'ClearFund', industry: 'FinTech', service: 'SaaS Platform', metric: '14 Wks', metricLabel: 'MVP to Production Launch', description: 'Built a fully compliant consumer lending platform architected for hypergrowth, from zero to 500k users.' },
  { client: 'PrimeMedia Group', industry: 'Media & Broadcasting', service: 'AI Marketing', metric: '3× ROAS', metricLabel: 'Return on Ad Spend', description: 'Deployed an AI campaign engine for a national media network, outperforming their legacy agency within 60 days.' },
  { client: 'Studio FORM', industry: 'Interior Design', service: 'Brand + ERP', metric: '20 hrs', metricLabel: 'Saved Per Week via ERP', description: 'Dual engagement: premium brand identity for GCC market entry, plus custom ERP for end-to-end project management.' },
]

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { number: '01', title: 'Discover', description: 'Deep-dive into your business DNA. We analyze systems, map workflows, and identify the precise intersection where AI can amplify human capability.', icon: 'Search' },
  { number: '02', title: 'Architect', description: 'Blueprint the solution with surgical precision. Every component is designed for scalability, every integration point mapped for seamless data flow.', icon: 'Layers' },
  { number: '03', title: 'Engineer', description: 'Agile sprints powered by AI-augmented development. Continuous integration, real-time testing, and transparent progress tracking throughout.', icon: 'Code2' },
  { number: '04', title: 'Launch', description: 'Deployment with zero downtime. Post-launch optimization cycles ensure your solution evolves with your business and the technology landscape.', icon: 'Rocket' },
]

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM = [
  { name: 'Akubo Favor', title: 'Co-Founder & CEO', image: 'https://www.spacedezyn.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnwqqmdee%2Fimage%2Fupload%2Fv1758473366%2FFavour_Akubo_1_ajpsrt.jpg&w=828&q=75', bio: '15 years leading enterprise transformation across Africa and the Middle East. Former McKinsey consultant turned technology entrepreneur. Akubo founded Advantage with the conviction that every business deserves access to world-class digital infrastructure.', expertise: ['Strategy', 'Enterprise Clients', 'Fundraising'] },
  { name: 'Ekong Evie Emmanuel', title: 'Co-Founder & CTO', image: 'https://www.spacedezyn.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnwqqmdee%2Fimage%2Fupload%2Fv1758473365%2Fekong_xsrt48.jpg&w=828&q=75', bio: 'Full-stack architect with deep expertise in cloud-native systems, AI integration, and enterprise ERP. Ekong has led engineering teams at companies backed by Sequoia and Andreessen Horowitz.', expertise: ['Cloud Architecture', 'AI/ML Systems', 'ERP Engineering'] },
  { name: 'Amara Mensah', title: 'Chief Operating Officer', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/69444f92d_generated_image.png', bio: 'Operations architect with a track record of scaling service businesses from 10 to 200+ people. Amara oversees all client delivery, ensuring every engagement runs on time, on budget, and above expectation.', expertise: ['Delivery Excellence', 'Team Scaling', 'Client Relations'] },
  { name: 'Layla Al-Farsi', title: 'Creative Director', image: 'https://media.base44.com/images/public/69efaf66bbc04c94531bd0d2/f69b6d955_generated_image.png', bio: 'Award-winning brand strategist who has defined the visual identities of luxury hospitality brands, GCC retail groups, and global media companies. Layla leads our branding practice.', expertise: ['Brand Strategy', 'Visual Identity', 'Luxury Markets'] },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQS = [
  { category: 'Getting Started', question: 'What industries does Advantage work with?', answer: 'We work across virtually every major industry — including hospitality, FinTech, interior design, media and broadcasting, retail, real estate, logistics, and enterprise manufacturing. Our team brings sector-specific knowledge to every engagement.' },
  { category: 'Getting Started', question: 'How do I know if my business is ready for an Advantage engagement?', answer: "If you're experiencing operational friction, outgrowing your current systems, preparing for a growth inflection (fundraise, market expansion, rebrand, product launch), or simply losing ground to more tech-forward competitors — you're ready." },
  { category: 'Services', question: "What's included in your branding service? Is it just a logo?", answer: "Not even close. Our branding engagements produce a complete Brand Intelligence System — visual identity (logo, colour, typography, iconography), brand voice and messaging frameworks, application across print and digital, motion guidelines, and a living brand document." },
  { category: 'Services', question: "What's the difference between a custom ERP and using an off-the-shelf tool like SAP or QuickBooks?", answer: "Off-the-shelf tools are built for the average business — and they make you bend your workflows to fit their software. A custom ERP is built around how you actually operate. On average, custom ERP clients save 40–60% in long-term costs compared to enterprise licensing." },
  { category: 'Services', question: 'Can you build a SaaS product from scratch if we only have an idea?', answer: "Absolutely — this is one of our most common engagements. We take you from concept to a production-ready product. The process covers market validation, product architecture, UX design, development, infrastructure setup, and launch." },
  { category: 'Process', question: 'How long does a typical engagement take?', answer: 'Brand identity: 6–10 weeks. SaaS MVP: 12–20 weeks. Custom ERP: 16–36 weeks depending on complexity. AI marketing systems: 4–8 weeks for initial deployment. All timelines are scoped transparently in your proposal.' },
  { category: 'Pricing', question: 'How is pricing structured?', answer: "Brand and design engagements are fixed-scope, fixed-fee — no surprises. Product and ERP development is structured in milestone-based phases. We don't do open-ended retainers. Every proposal includes a detailed scope, deliverable list, and payment schedule." },
  { category: 'Pricing', question: 'What is the minimum project size you work with?', answer: "Our minimum engagement is $15,000 USD (or equivalent local currency). For earlier-stage businesses, we offer a focused 4-week Accelerator Sprint — maximum impact, defined scope, fixed budget." },
]

// ─── Contact info ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { label: 'Email Us', value: 'info@advantageng.com', icon: 'Mail' },
  { label: 'Call Us', value: '+234 905 536 6549', icon: 'Phone' },
  { label: 'Headquarters', value: 'Plot 430, Ali Muhammad Zara Street, Central Business District, FCT Abuja', icon: 'MapPin' },
]

// ─── Conversion form options ───────────────────────────────────────────────────
export const INDUSTRIES = ['Hospitality', 'FinTech', 'Interior Design', 'Media & Broadcasting', 'Retail & E-Commerce', 'Real Estate', 'Logistics', 'Manufacturing', 'Education', 'Energy', 'Other']
export const SERVICES_LIST = ['Strategic Branding', 'Enterprise ERP', 'SaaS Platform', 'AI Marketing', 'Full-Stack Transformation']
export const TARGETS = ['Increase Revenue', 'Reduce Operational Costs', 'Scale to New Markets', 'Launch a Product', 'Modernise Existing Systems']
