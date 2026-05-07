'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { ScrollReveal } from './motion'
import { CONTACT_INFO } from '@/lib/data'

const ICONS = { Mail, Phone, MapPin }

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onTouched' })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
      reset()
      toast.success("Message sent! We'll be in touch within 24 hours.")
    } catch {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="reach-out" className="relative py-24 lg:py-36 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Direct Line</div>
            <h2 className="font-inter text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Let&apos;s Talk<span className="text-primary">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal>
            <p className="font-inter text-base text-muted-foreground leading-relaxed mb-12 font-light max-w-md">
              Have a question? Not ready for a full brief yet? That&apos;s fine. Drop us a message and a real person from our team will respond — no auto-responders, no BDRs.
            </p>
            <div className="space-y-6">
              {CONTACT_INFO.map(({ label, value, icon }) => {
                const Icon = ICONS[icon as keyof typeof ICONS]
                return (
                  <div key={label} className="flex items-start gap-4 py-5 border-b border-border/30">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
                      <div className="font-inter text-base text-foreground mt-0.5">{value}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {sent ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-inter text-2xl font-semibold text-foreground mb-2">Message Received</h3>
                <p className="font-inter text-sm text-muted-foreground max-w-xs">
                  Someone from our team will reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs uppercase tracking-widest text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Your Name</label>
                  <input
                    {...register('name')}
                    placeholder="Full name"
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.name ? 'border-destructive' : 'border-border/50'}`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />{errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="work@company.com"
                    className={`w-full bg-muted/50 border rounded-sm h-12 px-4 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors ${errors.email ? 'border-destructive' : 'border-border/50'}`}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />{errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Your Message</label>
                  <textarea
                    {...register('message')}
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    className={`w-full bg-muted/50 border rounded-sm px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none ${errors.message ? 'border-destructive' : 'border-border/50'}`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 font-inter text-xs text-destructive">
                      <AlertCircle className="w-3 h-3" />{errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Send Message</span><ArrowUpRight className="w-3 h-3" /></>}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
