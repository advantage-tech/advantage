'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowUpRight, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'
import { ScrollReveal } from './motion'
import { IMAGES, STATS, MARQUEE_LOGOS, SERVICE_MONOLITHS, TESTIMONIALS, CLIENT_LOGOS, PROJECTS } from '@/lib/data'

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({ x: (e.clientX - rect.left) / rect.width - 0.5, y: (e.clientY - rect.top) / rect.height - 0.5 })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ x: mousePos.x * -20, y: mousePos.y * -20 }}>
        <img src={IMAGES.heroBg} alt="Advantage Intelligence" className="w-full h-full object-cover opacity-45 scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      <div className="absolute inset-0 z-[1] opacity-[0.025]" style={{ backgroundImage: `linear-gradient(hsl(0 0% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 95%) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 sm:pt-36">
        <div className="flex flex-col items-start">
          <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">AI-Powered Business Solutions</span>
          </motion.div>

          <div className="space-y-2 lg:space-y-3">
            {(['Your Business.', 'Amplified.', 'Intelligently.'] as const).map((line, i) => (
              <motion.h1
                key={line}
                className={`font-inter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl tracking-tight leading-[0.9] ${i === 1 ? 'font-bold text-primary' : 'font-extralight text-secondary'}`}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.div className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-end gap-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }}>
            <p className="font-inter text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
              From brand identity to enterprise ERP, SaaS platforms to AI-driven marketing — Advantage delivers end-to-end transformation across every industry.
            </p>
            <a href="#contact" className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 shrink-0">
              Get Started <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div className="mt-20 lg:mt-28 grid grid-cols-3 gap-8 lg:gap-16 border-t border-border/50 pt-8 w-full max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}>
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </motion.div>
    </section>
  )
}

// ─── Logo Marquee ─────────────────────────────────────────────────────────────
export function LogoMarquee() {
  return (
    <section className="relative py-16 lg:py-20 border-t border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <ScrollReveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 text-center">
            Trusted across hospitality, FinTech, media, interior design & more
          </div>
        </ScrollReveal>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div className="flex items-center gap-16 whitespace-nowrap" animate={{ x: [0, -1200] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
          {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
            <span key={i} className="font-inter text-lg lg:text-xl font-semibold text-muted-foreground/20 tracking-widest select-none">{logo}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Service Monoliths ────────────────────────────────────────────────────────
type Service = typeof SERVICE_MONOLITHS[number]

function ServiceCard({ service, index, onExpand }: { service: Service; index: number; onExpand: (s: Service) => void }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div className="group relative bg-card border border-border/50 rounded-sm overflow-hidden cursor-pointer" whileHover={{ y: -4 }} transition={{ duration: 0.3 }} onClick={() => onExpand(service)}>
        <div className="relative h-72 lg:h-80 overflow-hidden">
          <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute top-4 left-4"><span className="font-mono text-xs tracking-widest text-muted-foreground">{service.number}</span></div>
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/30 backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </div>
        </div>
        <div className="p-6 lg:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{service.subtitle}</div>
          <h3 className="font-inter text-xl lg:text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-primary" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: 'left' }} />
      </motion.div>
    </ScrollReveal>
  )
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" onClick={onClose} />
      <motion.div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 rounded-sm" initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors">
          <X className="w-4 h-4 text-foreground" />
        </button>
        <div className="relative h-64 lg:h-80">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
        <div className="p-8 lg:p-12 -mt-16 relative">
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-2">{service.number} — {service.subtitle}</div>
          <h2 className="font-inter text-3xl lg:text-5xl font-bold text-foreground mb-6">{service.title}</h2>
          <p className="font-inter text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">{service.description}</p>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Core Capabilities</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3 py-3 border-b border-border/30">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <span className="font-inter text-sm text-foreground">{cap}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="#contact" onClick={onClose} className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300">
            Start a Project <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServiceMonoliths() {
  const [expanded, setExpanded] = useState<Service | null>(null)
  return (
    <section id="services" className="relative py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">What We Build</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Our Core<br />Services<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed font-light">Four pillars of business transformation — engineered with AI precision and delivered across every major industry vertical.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICE_MONOLITHS.map((s, i) => <ServiceCard key={s.id} service={s} index={i} onExpand={setExpanded} />)}
        </div>
      </div>
      <AnimatePresence>{expanded && <ServiceModal service={expanded} onClose={() => setExpanded(null)} />}</AnimatePresence>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export function Testimonials() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length)

  return (
    <section id="testimonials" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Social Proof</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Trusted by<br />Leaders<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">From boutique hospitality brands to FinTech unicorns — our clients span every industry that matters.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative bg-card border border-border/50 rounded-sm overflow-hidden mb-16 lg:mb-20">
            <div className="absolute top-6 left-8 opacity-15"><Quote className="w-16 h-16 text-primary" /></div>
            <AnimatePresence mode="wait">
              <motion.div key={active} className="p-8 lg:p-16" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <p className="font-inter text-xl lg:text-2xl font-light text-foreground leading-relaxed mt-4">&ldquo;{TESTIMONIALS[active].quote}&rdquo;</p>
                  </div>
                  <div className="lg:col-span-4 flex flex-col justify-center lg:border-l border-border/30 lg:pl-12">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className="font-inter font-semibold text-lg text-primary">{TESTIMONIALS[active].author[0]}</span>
                    </div>
                    <div className="font-inter font-semibold text-foreground text-lg">{TESTIMONIALS[active].author}</div>
                    <div className="font-inter text-sm text-muted-foreground mt-1">{TESTIMONIALS[active].title}</div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{TESTIMONIALS[active].industry}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-between px-8 lg:px-16 py-5 border-t border-border/30">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-1.5 bg-primary' : 'w-1.5 h-1.5 bg-border hover:bg-muted-foreground'}`} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prev} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
                <button onClick={next} className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors"><ChevronRight className="w-4 h-4 text-foreground" /></button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px border border-border/20 rounded-sm overflow-hidden">
            {CLIENT_LOGOS.map((logo, i) => (
              <motion.div key={i} className="group bg-card hover:bg-accent/40 transition-colors duration-300 flex flex-col items-center justify-center py-6 px-3 gap-1" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <span className="font-inter text-[11px] font-semibold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{logo.name}</span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">{logo.tag}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Project Grid ─────────────────────────────────────────────────────────────
const PROJECT_FILTERS = ['All', 'SaaS', 'ERP', 'Branding', 'Marketing']

function ProjectCard({ project, delay = 0 }: { project: typeof PROJECTS[number]; delay?: number }) {
  const isLarge = project.size === 'large'
  return (
    <ScrollReveal delay={delay} className={isLarge ? 'md:col-span-2' : ''}>
      <motion.div className="group relative bg-card border border-border/30 rounded-sm overflow-hidden cursor-pointer h-full" whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
        <div className={`relative overflow-hidden ${isLarge ? 'h-72 lg:h-96' : 'h-52 lg:h-64'}`}>
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" whileHover={{ scale: 1.06 }} transition={{ duration: 0.7 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-sm">{project.type}</span>
            <span className="font-mono text-[9px] text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-1 rounded-sm">{project.year}</span>
          </div>
        </div>
        <div className="p-5 lg:p-6">
          <div className="font-mono text-[9px] uppercase tracking-widest text-primary mb-1">{project.client}</div>
          <h3 className="font-inter text-base lg:text-lg font-semibold text-foreground mb-1.5">{project.title}</h3>
          <p className="font-inter text-xs text-muted-foreground leading-relaxed">{project.description}</p>
        </div>
        <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-primary" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: 'left' }} />
      </motion.div>
    </ScrollReveal>
  )
}

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.type.toLowerCase().includes(activeFilter.toLowerCase()) || p.tag.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section id="work" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Our Work</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Selected<br />Projects<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">Spanning hospitality, interior design, media, FinTech, and enterprise — a curated snapshot of our best work.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 flex-wrap mb-10 lg:mb-14">
            {PROJECT_FILTERS.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-sm border transition-all duration-300 ${activeFilter === filter ? 'border-primary bg-primary/10 text-primary' : 'border-border/40 text-muted-foreground hover:border-border hover:text-foreground'}`}>
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {filtered.map((project, i) => <ProjectCard key={project.id} project={project} delay={i * 0.07} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
