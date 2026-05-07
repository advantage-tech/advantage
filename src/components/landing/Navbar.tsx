'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, IMAGES } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link href="/">
            <Image src={IMAGES.logoWhite} alt="Advantage" width={140} height={36} className="h-8 lg:h-9 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link key={link.label} href={link.href} className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </a>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="font-mono text-xs uppercase tracking-widest px-6 py-2.5 border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background flex flex-col"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-border/30">
              <Image src={IMAGES.logoWhite} alt="Advantage" width={120} height={32} className="h-8 w-auto" />
              <button onClick={() => setMobileOpen(false)}><X className="w-6 h-6 text-foreground" /></button>
            </div>
            <div className="flex flex-col items-start px-6 pt-10 gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label} href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-inter text-3xl font-light text-foreground"
                  initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact" onClick={() => setMobileOpen(false)}
                className="mt-6 font-mono text-sm uppercase tracking-widest px-8 py-3 bg-primary text-primary-foreground rounded-sm"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
