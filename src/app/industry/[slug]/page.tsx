import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PulseLines, ScrollReveal } from '@/components/landing/motion'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { IMAGES } from '@/lib/data'

type IndustryData = {
  label: string
  headline: string
  image: string
  intro: string
  challenges: string[]
  solutions: { service: string; detail: string }[]
  results: { metric: string; label: string }[]
  caseStudy: string
}

const industries: Record<string, IndustryData> = {
  hospitality: {
    label: 'Hospitality', headline: 'Technology that elevates the guest experience.', image: IMAGES.hospitality,
    intro: 'The hospitality industry runs on experience — but behind every seamless guest moment is an operational infrastructure that either enables excellence or creates friction. Advantage helps hotels, resorts, restaurant groups, and travel companies build the digital backbone that makes world-class hospitality possible.',
    challenges: ['Fragmented PMS, POS, and CRM systems that don\'t talk to each other', 'Manual back-office processes consuming management time', 'Inconsistent brand presence across digital and physical channels', 'Inability to personalise guest communications at scale', 'Poor visibility into operational performance across multiple properties'],
    solutions: [
      { service: 'Custom Hospitality ERP', detail: 'Unified platform managing reservations, housekeeping, F&B, procurement, and finance across all properties in one dashboard.' },
      { service: 'Brand Identity & Positioning', detail: 'Premium brand systems that command higher ADR — from visual identity to environmental branding for lobbies, signage, and uniforms.' },
      { service: 'AI Marketing for Hospitality', detail: 'Automated campaigns targeting high-value guests, dynamic pricing communications, and loyalty programme marketing with real-time optimisation.' },
      { service: 'Booking & Guest Portal SaaS', detail: 'Custom-built direct booking platforms that reduce OTA dependency and increase direct revenue — personalised, mobile-first, and conversion-optimised.' },
    ],
    results: [{ metric: '+40%', label: 'Direct bookings increase' }, { metric: '60%', label: 'Admin time reduction' }, { metric: '3×', label: 'Marketing ROI improvement' }],
    caseStudy: 'Ivory Suites Hotels — Full brand overhaul and custom booking platform. Direct bookings increased 40% in Q1 post-launch across 4 city properties.',
  },
  fintech: {
    label: 'FinTech', headline: 'Infrastructure for the future of money.', image: IMAGES.fintech,
    intro: 'Financial technology companies operate in one of the most demanding environments in business — combining regulatory complexity, security imperatives, and the need to move at startup speed. Advantage builds the platforms, systems, and brands that let FinTechs compete and win.',
    challenges: ['Compliance and regulatory requirements (KYC, AML, PCI-DSS, GDPR) from day one', 'The need for enterprise-grade security without enterprise-scale budgets', 'Building trust with users in a sceptical financial services market', 'Scaling infrastructure when growth is non-linear and sudden', 'Integrating with legacy banking and payment infrastructure'],
    solutions: [
      { service: 'Compliant SaaS Platform Development', detail: 'Full-stack FinTech platform engineering with compliance architecture built in — not bolted on. KYC flows, audit logs, encryption, and role-based access by design.' },
      { service: 'FinTech Brand Identity', detail: 'Brand systems that communicate trust, innovation, and authority — critical for user acquisition and investor confidence in a crowded market.' },
      { service: 'Performance Marketing for FinTech', detail: 'Precision user acquisition campaigns targeting high-intent audiences, with full attribution and ROAS visibility across every channel.' },
      { service: 'Back-Office ERP', detail: 'Internal operations platforms for compliance tracking, team management, transaction monitoring, and reporting to regulators.' },
    ],
    results: [{ metric: '14 wks', label: 'MVP to production' }, { metric: '500k+', label: 'Users supported at launch' }, { metric: 'SOC 2', label: 'Compliance-ready architecture' }],
    caseStudy: 'ClearFund — Consumer lending SaaS platform built from concept to production in 14 weeks. Full compliance architecture included. Scaled to 500,000 users without infrastructure changes.',
  },
  'interior-design': {
    label: 'Interior Design', headline: 'Systems as considered as your spaces.', image: IMAGES.interior,
    intro: 'Interior design firms are creative businesses with complex operational demands — managing multiple projects simultaneously, coordinating contractors, sourcing products, and communicating with exacting clients. Advantage builds the tools and brands that allow design talent to scale without sacrificing quality.',
    challenges: ['Project management chaos across spreadsheets, email, and paper', 'Difficulty maintaining brand consistency and premium positioning as the firm grows', 'Inefficient client communication and approval workflows', 'No single source of truth for procurement, supplier relationships, and inventory', 'Time lost to admin instead of design'],
    solutions: [
      { service: 'Interior Design Studio ERP', detail: 'Custom project management platform covering client briefs, design phases, contractor scheduling, procurement, and invoice management — all in one place.' },
      { service: 'Premium Brand Identity', detail: 'Luxury brand systems for interior design studios entering premium markets — particularly GCC, European, and international markets where brand perception drives client acquisition.' },
      { service: 'Client Portal SaaS', detail: 'Private client portals where clients can review mood boards, approve selections, track project progress, and communicate in real-time.' },
      { service: 'Lead Generation Marketing', detail: 'SEO and content strategy targeting high-net-worth homeowners and commercial developers. Showcase your portfolio to the right audiences.' },
    ],
    results: [{ metric: '20 hrs', label: 'Saved per week via ERP' }, { metric: '4×', label: 'Faster client approvals' }, { metric: 'GCC', label: 'New market entry enabled' }],
    caseStudy: 'Studio FORM — Combined brand identity and custom ERP engagement. The studio now saves 20+ hours per week on administration and has successfully expanded into the GCC market with a repositioned brand.',
  },
  media: {
    label: 'Media & Broadcasting', headline: 'Platforms and reach for the attention economy.', image: IMAGES.media,
    intro: 'Media and broadcasting companies face a dual challenge: building the technology infrastructure to distribute content at scale, while marketing that content effectively in an environment of infinite distraction. Advantage helps media businesses solve both problems.',
    challenges: ['Content management systems that can\'t keep pace with production volume', 'Audience fragmentation across streaming, social, broadcast, and digital', 'Monetisation model disruption and the shift from advertising to subscription', 'Inability to attribute marketing spend to audience growth accurately', 'Brand erosion in increasingly competitive media landscapes'],
    solutions: [
      { service: 'Media SaaS & CMS Platforms', detail: 'Custom content management and distribution platforms built for high-volume media organisations — managing editorial workflows, video hosting, syndication, and subscriber management.' },
      { service: 'AI Performance Marketing', detail: 'Machine-learning campaign systems that optimise audience acquisition across digital channels in real-time — programmatic, social, search, and content marketing unified.' },
      { service: 'Brand Positioning for Media', detail: 'Brand strategy and visual identity that cuts through noise — for networks, streaming services, production companies, and digital publishers.' },
      { service: 'Audience Analytics ERP', detail: 'Unified data dashboards integrating viewership, engagement, subscription, and ad revenue data to give leadership a complete operational picture.' },
    ],
    results: [{ metric: '3×', label: 'Campaign ROAS improvement' }, { metric: '60 days', label: 'To outperform legacy agency' }, { metric: '100%', label: 'Attribution visibility' }],
    caseStudy: 'PrimeMedia Group — AI marketing system deployment for a national media network. Outperformed their previous agency within 60 days. Full attribution reporting across all digital channels.',
  },
  retail: {
    label: 'Retail & E-Commerce', headline: 'Commerce infrastructure built to convert.', image: IMAGES.retail,
    intro: 'Modern retail operates across physical and digital simultaneously — and the businesses winning are those whose technology, brand, and marketing work as one unified system. Advantage builds that system for retail and e-commerce businesses ready to scale.',
    challenges: ['Disconnected e-commerce, inventory, and point-of-sale systems', 'Rising customer acquisition costs with stagnant conversion rates', 'Brand identity that fails to differentiate in crowded markets', 'Poor customer lifetime value due to lack of retention infrastructure', 'Manual inventory management leading to stockouts and overstock'],
    solutions: [
      { service: 'Retail ERP & Inventory Management', detail: 'Unified inventory, purchasing, supplier management, and financial reporting across all channels — online, in-store, and wholesale — in a single platform.' },
      { service: 'E-Commerce SaaS Platform', detail: 'Custom-built online stores optimised for conversion, with integrated loyalty programmes, personalised recommendations, and headless architecture for performance.' },
      { service: 'Retail Brand Identity', detail: 'Brand systems that work across packaging, store environments, digital campaigns, and social — built for consistency at scale.' },
      { service: 'E-Commerce Performance Marketing', detail: 'Full-funnel digital marketing — Google Shopping, Meta, email, and SEO — orchestrated by AI to maximise ROAS and customer lifetime value.' },
    ],
    results: [{ metric: '3×', label: 'E-commerce ROAS' }, { metric: '45%', label: 'Reduction in stock discrepancies' }, { metric: '80%', label: 'Faster inventory reporting' }],
    caseStudy: 'Novalux Retail — Integrated ERP and performance marketing engagement. Stock discrepancies reduced by 45%, marketing ROAS tripled within 90 days of campaign system deployment.',
  },
}

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries[params.slug]
  if (!industry) return { title: 'Not Found' }
  return { title: `${industry.label} — Advantage` }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug]
  if (!industry) notFound()

  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <PulseLines />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={industry.image} alt={industry.label} className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Industry Focus</div>
          <h1 className="font-inter text-5xl lg:text-8xl font-bold text-foreground leading-[0.9] mb-6">
            {industry.label}<span className="text-primary">.</span>
          </h1>
          <p className="font-inter text-xl lg:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed">{industry.headline}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <p className="font-inter text-base lg:text-lg text-muted-foreground leading-relaxed">{industry.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-6">
              {industry.results.map((r) => (
                <div key={r.label} className="text-center py-8 border border-border/30 rounded-sm bg-card">
                  <div className="font-inter text-3xl lg:text-4xl font-bold text-primary mb-1">{r.metric}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 lg:py-28 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Common Challenges</div>
              <h2 className="font-inter text-3xl lg:text-4xl font-bold text-foreground mb-8">What we typically see.</h2>
              <div className="space-y-4">
                {industry.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-b border-border/30">
                    <span className="font-mono text-xs text-primary shrink-0 mt-0.5">—</span>
                    <span className="font-inter text-sm text-muted-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Solutions</div>
              <h2 className="font-inter text-3xl lg:text-4xl font-bold text-foreground mb-8">How we solve them.</h2>
              <div className="space-y-5">
                {industry.solutions.map((s, i) => (
                  <div key={i} className="p-5 bg-card border border-border/30 rounded-sm hover:border-primary/30 transition-colors duration-300">
                    <div className="font-inter text-sm font-semibold text-foreground mb-1.5">{s.service}</div>
                    <p className="font-inter text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 lg:p-12 bg-card border border-primary/20 rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Client Story</div>
              <p className="font-inter text-lg lg:text-xl text-foreground font-light leading-relaxed max-w-3xl">{industry.caseStudy}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Ready to Start?</div>
            <h2 className="font-inter text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let&apos;s build your advantage<span className="text-primary">.</span>
            </h2>
            <p className="font-inter text-base text-muted-foreground max-w-md mx-auto mb-10 font-light">
              Book a complimentary consultation with a senior solution architect who specialises in {industry.label}.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest px-10 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300">
              Get Started <ArrowUpRight className="w-3 h-3" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
