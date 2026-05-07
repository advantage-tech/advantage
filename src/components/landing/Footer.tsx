import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from './motion'
import { IMAGES } from '@/lib/data'

const SOLUTIONS = ['Strategic Branding', 'Enterprise ERP', 'SaaS Platforms', 'AI Marketing']
const INDUSTRIES_NAV = [
  { title: 'Hospitality', slug: 'hospitality' },
  { title: 'FinTech', slug: 'fintech' },
  { title: 'Interior Design', slug: 'interior-design' },
  { title: 'Media & Broadcasting', slug: 'media' },
  { title: 'Retail & E-Commerce', slug: 'retail' },
]
const COMPANY_LINKS = [
  { label: 'Our Work', href: '/#work' },
  { label: 'Case Studies', href: '/#cases' },
  { label: 'Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'info@advantageng.com', href: 'mailto:info@advantageng.com' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      <div className="relative h-32 lg:h-48 overflow-hidden">
        <img src={IMAGES.footerBg} alt="Digital horizon" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 -mt-16 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="lg:col-span-1">
              <Image src={IMAGES.logoWhite} alt="Advantage" width={140} height={36} className="h-8 w-auto mb-4" />
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                AI-powered business solutions for companies that refuse to settle for average — across every industry that matters.
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Solutions</div>
              <div className="space-y-3">
                {SOLUTIONS.map((item) => (
                  <a key={item} href="/#services" className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors">{item}</a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Industries</div>
              <div className="space-y-3">
                {INDUSTRIES_NAV.map((item) => (
                  <Link key={item.slug} href={`/industry/${item.slug}`} className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Company</div>
              <div className="space-y-3">
                {COMPANY_LINKS.map((item) => (
                  <a key={item.label} href={item.href} className="block font-inter text-sm text-foreground/70 hover:text-foreground transition-colors">{item.label}</a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">© 2026 Advantage. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-muted-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
