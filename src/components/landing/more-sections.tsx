'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Search, Layers, Code2, Rocket, Plus, Minus } from 'lucide-react'
import { ScrollReveal } from './motion'
import { CASE_STUDIES, PROCESS_STEPS, TEAM, FAQS } from '@/lib/data'

// ─── Case Studies ─────────────────────────────────────────────────────────────
export function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Proven Impact</div>
            <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Results That<br />Speak<span className="text-primary">.</span></h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {CASE_STUDIES.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14 border-b border-border/30 cursor-pointer" whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                <div className="lg:col-span-3 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-inter text-xl lg:text-2xl font-semibold text-foreground">{item.client}</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{item.industry}</span>
                    <span className="text-muted-foreground/30">•</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{item.service}</span>
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <span className="font-inter text-4xl lg:text-5xl font-bold text-foreground">{item.metric}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{item.metricLabel}</span>
                </div>
                <div className="lg:col-span-5 flex items-center">
                  <p className="font-inter text-sm lg:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                <div className="lg:col-span-1 flex items-center justify-end">
                  <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────
const ICONS = { Search, Layers, Code2, Rocket }

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">How We Work</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">The<br />Protocol<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed font-light">A battle-tested methodology refined across 200+ enterprise engagements.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS]
            return (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <motion.div className="group relative p-8 lg:p-10 border border-border/30 rounded-sm hover:border-primary/30 transition-colors duration-500" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <div className="absolute inset-0 rounded-sm bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs tracking-widest text-muted-foreground">{step.number}</span>
                      <Icon className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-inter text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-primary" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: 'left' }} />
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">The People</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Meet the<br />Team<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">Behind every Advantage engagement is a senior team with the experience to make bold decisions and the integrity to stand behind them.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <motion.div className="group relative bg-card border border-border/30 rounded-sm overflow-hidden" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <div className="relative h-72 overflow-hidden">
                  <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" whileHover={{ scale: 1.04 }} transition={{ duration: 0.6 }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-inter text-lg font-semibold text-foreground">{member.name}</h3>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-primary mt-0.5 mb-3">{member.title}</div>
                  <p className="font-inter text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 bg-muted/60 text-muted-foreground rounded-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-primary" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} style={{ transformOrigin: 'left' }} />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQItem({ item, index }: { item: typeof FAQS[number]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-border/30">
        <button className="w-full flex items-start justify-between gap-4 py-6 text-left group" onClick={() => setOpen(!open)}>
          <div className="flex items-start gap-4 flex-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-primary mt-1 shrink-0 hidden sm:block w-24">{item.category}</span>
            <span className="font-inter text-base lg:text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-snug">{item.question}</span>
          </div>
          <div className="w-8 h-8 shrink-0 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors mt-0.5">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Minus className="w-3.5 h-3.5 text-primary" />
                </motion.div>
              ) : (
                <motion.div key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }} className="overflow-hidden">
              <div className="pb-6 sm:pl-28">
                <p className="font-inter text-sm lg:text-base text-muted-foreground leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Clarity</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">Common<br />Questions<span className="text-primary">.</span></h2>
            </div>
            <p className="font-inter text-base text-muted-foreground max-w-sm mt-6 lg:mt-0 leading-relaxed font-light">
              Everything you need to make a confident decision.{' '}
              <a href="#contact" className="text-primary hover:underline underline-offset-2">Can&apos;t find your answer? Ask us.</a>
            </p>
          </div>
        </ScrollReveal>
        <div className="max-w-4xl">
          {FAQS.map((faq, i) => <FAQItem key={i} item={faq} index={i} />)}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 lg:p-10 border border-border/30 rounded-sm bg-card">
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Still unsure?</div>
              <h3 className="font-inter text-xl lg:text-2xl font-semibold text-foreground">Talk to a Solution Architect</h3>
              <p className="font-inter text-sm text-muted-foreground mt-1">60 minutes. No obligation. No sales pitch.</p>
            </div>
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all duration-300 whitespace-nowrap">Book a Call</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
