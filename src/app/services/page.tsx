import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PulseLines, ScrollReveal } from '@/components/landing/motion'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { IMAGES } from '@/lib/data'

export const metadata: Metadata = { title: 'Services — Advantage' }

const services = [
  {
    id: 'erp', number: '01', label: 'Enterprise ERP', headline: 'Your Operations, Unified.',
    image: IMAGES.erp,
    intro: 'Off-the-shelf ERP systems were not built for your business. They were built for the average one. We architect custom enterprise resource planning systems that model how you actually operate — not how a software vendor imagines you do.',
    process: [
      { step: '01 — Discovery & Audit', detail: 'We begin with a structured operational audit: mapping every workflow, identifying integration points, and documenting the data flows that keep your business running. This phase typically runs 2–3 weeks and produces a detailed system blueprint.' },
      { step: '02 — Architecture Design', detail: 'Our engineers design the module structure — HR, Finance, Procurement, CRM, Inventory, and any custom modules your business requires. Every design decision is made with scalability and future integrations in mind.' },
      { step: '03 — Agile Development', detail: 'We build in two-week sprints with weekly stakeholder reviews. You see working software from week four onwards. No black-box development — full transparency throughout.' },
      { step: '04 — Data Migration', detail: 'We handle the extraction, transformation, and loading of your historical data with zero data loss. Our migration process includes full verification and rollback protocols.' },
      { step: '05 — Training & Handover', detail: "We train your team at every level — from C-suite dashboards to operational user workflows. Full documentation is provided. We don't disappear at go-live." },
      { step: '06 — Ongoing Optimisation', detail: 'Post-launch, we offer structured support and optimisation cycles. Your ERP evolves as your business does — new modules, integrations, and AI-powered features added progressively.' },
    ],
    deliverables: ['Custom-built ERP platform', 'Unlimited user licences (no per-seat fees)', 'Full source code ownership', 'API integration layer', 'Admin dashboard & role-based access', 'Mobile-responsive interface', 'Data migration from legacy systems', 'Training & documentation package'],
    industries: ['Hospitality & Hotels', 'Interior Design Studios', 'Manufacturing', 'Retail Chains', 'Logistics & Distribution', 'Real Estate Groups'],
    timeline: '16–36 weeks', startingAt: '$40,000',
  },
  {
    id: 'saas', number: '02', label: 'SaaS Platform Development', headline: 'From Idea to Scalable Product.',
    image: IMAGES.saas,
    intro: "Building a SaaS product is not just about writing code. It's about making thousands of architectural decisions correctly, so your platform can handle 100 users today and 1 million tomorrow without being rebuilt. That's what we do.",
    process: [
      { step: '01 — Product Definition', detail: 'We translate your vision into a structured product specification — user personas, core feature set, monetisation model, and competitive differentiation. This shapes everything that follows.' },
      { step: '02 — UX & Prototype', detail: 'Before a single line of production code is written, we design the complete user experience. Wireframes, high-fidelity prototypes, and user testing with your target audience.' },
      { step: '03 — Cloud Architecture', detail: 'We design your infrastructure on AWS, GCP, or Azure — multi-tenant architecture, database design, authentication, security, and compliance requirements (GDPR, PCI-DSS, SOC 2) scoped from day one.' },
      { step: '04 — Sprint Development', detail: 'Agile delivery in two-week sprints. Each sprint ships a working, tested increment of the product. CI/CD pipelines ensure quality from the first line of code.' },
      { step: '05 — Beta & QA', detail: 'Structured beta programme with real users. Performance testing under simulated load, security penetration testing, and edge-case QA across all platforms and devices.' },
      { step: '06 — Launch & Growth', detail: 'Go-live with zero-downtime deployment. Post-launch, we remain engaged for optimisation, feature expansion, and growth engineering.' },
    ],
    deliverables: ['Full-stack SaaS application', 'Multi-tenant cloud infrastructure', 'Admin & client-facing dashboards', 'API & webhook system', 'Authentication & access control', 'Payment & subscription integration', 'Analytics & reporting layer', 'Technical documentation & deployment guide'],
    industries: ['FinTech & Payments', 'Media & Streaming', 'Hospitality Booking Tools', 'Interior Design Platforms', 'B2B Workflow Tools', 'EdTech & Learning'],
    timeline: '12–20 weeks', startingAt: '$30,000',
  },
  {
    id: 'branding', number: '03', label: 'Strategic Branding', headline: 'Identity Built to Last.',
    image: IMAGES.brand,
    intro: 'A logo is not a brand. A colour palette is not a brand. A brand is the sum of everything your business communicates — visually, verbally, and experientially. We architect brand systems that define how your company is remembered.',
    process: [
      { step: '01 — Brand Audit & Research', detail: 'We audit your existing identity, study your competitive landscape, and interview your key stakeholders. This gives us the strategic foundation to build from — not just aesthetic preference.' },
      { step: '02 — Strategy & Positioning', detail: 'We define your brand architecture: positioning statement, brand personality, tone of voice, and narrative framework. This is the strategic layer that makes everything that follows coherent.' },
      { step: '03 — Visual Identity Design', detail: 'Logo system, colour palette, typography, iconography, photography art direction, and illustration style. Every element is designed as part of an interconnected system.' },
      { step: '04 — Application Design', detail: 'We apply the identity across all touchpoints: digital (website, social, email), print (stationery, packaging, signage), and environment.' },
      { step: '05 — Brand Guidelines', detail: 'A living Brand Intelligence Document — comprehensive, structured, and built to be used by your internal team and external partners for years to come.' },
    ],
    deliverables: ['Logo system (primary, secondary, icon variants)', 'Full colour & typography system', 'Brand voice & messaging framework', 'Social media template suite', 'Print & stationery designs', 'Brand guidelines document', 'Motion & animation principles', 'File package (all formats)'],
    industries: ['Luxury Hospitality', 'Interior Design', 'Retail & Fashion', 'FinTech Startups', 'Media Companies', 'Real Estate'],
    timeline: '6–10 weeks', startingAt: '$15,000',
  },
  {
    id: 'marketing', number: '04', label: 'AI Marketing Systems', headline: 'Performance That Scales Itself.',
    image: IMAGES.marketing,
    intro: 'Traditional marketing agencies optimise manually and charge for the time. We build AI-powered marketing systems that learn, adapt, and optimise continuously — delivering compounding returns without compounding costs.',
    process: [
      { step: '01 — Audit & Strategy', detail: 'We audit your current marketing performance, ad accounts, content strategy, and analytics setup. We identify the gaps, the opportunities, and build a data-informed growth strategy.' },
      { step: '02 — Tech Stack Setup', detail: 'We deploy and configure your marketing infrastructure — tracking, attribution, CRM integration, email automation, and the AI campaign management tools that will power performance.' },
      { step: '03 — Campaign Architecture', detail: 'Full-funnel campaign design across paid search, paid social, SEO, content, and email. Every campaign is built with measurement frameworks from the start.' },
      { step: '04 — AI Optimisation Layer', detail: 'We deploy machine learning models for bid optimisation, audience segmentation, content personalisation, and predictive analytics. The system gets smarter every week.' },
      { step: '05 — Reporting & Insight', detail: 'Real-time dashboards showing every metric that matters. Monthly strategic reviews. You always know exactly where your marketing budget is going and what it\'s returning.' },
    ],
    deliverables: ['Full-funnel marketing strategy', 'AI-powered campaign management system', 'SEO & content strategy', 'Paid media setup & management', 'Email & CRM automation', 'Custom analytics dashboard', 'Monthly performance reports', 'Conversion rate optimisation'],
    industries: ['Media & Broadcasting', 'Hospitality & Travel', 'FinTech', 'Retail & E-Commerce', 'Interior Design', 'Real Estate'],
    timeline: '4–8 weeks to deploy', startingAt: '$8,000 / month',
  },
]

function ServiceDetail({ service }: { service: typeof services[number] }) {
  return (
    <div id={service.id} className="py-24 lg:py-32 border-t border-border/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 lg:mb-24">
          <ScrollReveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{service.number} — {service.label}</div>
            <h2 className="font-inter text-3xl lg:text-5xl font-bold text-foreground leading-tight mb-6">{service.headline}</h2>
            <p className="font-inter text-base lg:text-lg text-muted-foreground leading-relaxed font-light mb-8">{service.intro}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border/30 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Timeline</div>
                <div className="font-inter text-lg font-semibold text-foreground">{service.timeline}</div>
              </div>
              <div className="p-4 bg-card border border-border/30 rounded-sm">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Starting At</div>
                <div className="font-inter text-lg font-semibold text-primary">{service.startingAt}</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-sm overflow-hidden h-72 lg:h-80">
              <img src={service.image} alt={service.label} className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">Our Process</div>
            </ScrollReveal>
            <div className="space-y-0">
              {service.process.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="py-6 border-b border-border/30">
                    <div className="font-mono text-xs tracking-widest text-primary mb-2">{item.step}</div>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <ScrollReveal delay={0.1}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">What You Get</div>
                <div className="space-y-3">
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-inter text-sm text-foreground/80">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Industries We Serve</div>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <span key={ind} className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 bg-muted/60 text-muted-foreground rounded-sm">{ind}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a href="/#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300">
                Start This Project <ArrowUpRight className="w-3 h-3" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <PulseLines />
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-3 h-3" /> Back to Home
        </Link>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Our Services</div>
        <h1 className="font-inter text-5xl lg:text-8xl font-bold text-foreground leading-[0.9] mb-6">
          What We<br />Build<span className="text-primary">.</span>
        </h1>
        <p className="font-inter text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
          Four core disciplines. One relentless standard of quality. Delivered across every industry that matters.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-border/40 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 rounded-sm">
              {s.number} {s.label}
            </a>
          ))}
        </div>
      </section>

      {services.map((service) => <ServiceDetail key={service.id} service={service} />)}

      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/30">
        <ScrollReveal>
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Ready?</div>
            <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Let&apos;s Build Something<br />Extraordinary<span className="text-primary">.</span>
            </h2>
            <p className="font-inter text-base text-muted-foreground mb-10 max-w-md mx-auto font-light">
              Book a complimentary 60-minute consultation with a senior solution architect.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest px-10 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300">
              Start the Conversation <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  )
}
