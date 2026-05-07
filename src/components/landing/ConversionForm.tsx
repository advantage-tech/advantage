'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { ScrollReveal } from './motion'
import { INDUSTRIES, SERVICES_LIST, TARGETS } from '@/lib/data'

interface FormData {
  name: string
  email: string
  industry: string
  service: string
  target: string
  details: string
}

const INITIAL: FormData = { name: '', email: '', industry: '', service: '', target: '', details: '' }

export default function ConversionForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [key]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.industry || !formData.service) {
      toast.error('Please fill in all required fields')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
      toast.success('Consultation request submitted!')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-inter rounded-sm h-12 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors'
  const selectCls = `${inputCls} cursor-pointer`

  return (
    <section id="contact" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — intro */}
          <ScrollReveal>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Begin</div>
              <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Configure Your<br />Solution<span className="text-primary">.</span>
              </h2>
              <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-md font-light">
                Tell us about your business. Our team will analyse your requirements and deliver a strategic roadmap within 48 hours.
              </p>
              <div className="mt-12 space-y-6">
                {[
                  { label: 'Response Time', value: '< 48 Hours' },
                  { label: 'Initial Consultation', value: 'Complimentary' },
                  { label: 'NDA Provided', value: 'Standard' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-border/30">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.label}</span>
                    <span className="font-inter text-sm font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.2}>
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-inter text-2xl font-semibold text-foreground mb-3">Consultation Initiated</h3>
                <p className="font-inter text-sm text-muted-foreground max-w-sm">
                  Our team will analyse your requirements and reach out within 48 hours with a strategic proposal tailored to your industry.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  // Solution Configuration Terminal
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name *</label>
                    <input value={formData.name} onChange={set('name')} placeholder="Your name" className={inputCls} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email *</label>
                    <input type="email" value={formData.email} onChange={set('email')} placeholder="work@company.com" className={inputCls} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">My business is in *</label>
                  <select value={formData.industry} onChange={set('industry')} className={selectCls}>
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">And we need to *</label>
                  <select value={formData.service} onChange={set('service')} className={selectCls}>
                    <option value="">Select a service</option>
                    {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">To achieve</label>
                  <select value={formData.target} onChange={set('target')} className={selectCls}>
                    <option value="">Select your goal</option>
                    {TARGETS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Additional Details</label>
                  <textarea
                    value={formData.details}
                    onChange={set('details')}
                    placeholder="Tell us more about your project..."
                    rows={4}
                    className="w-full bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-inter rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Submit Configuration</span><ArrowUpRight className="w-3 h-3" /></>}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
