import { PulseLines } from '@/components/landing/motion'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { Hero, LogoMarquee, ServiceMonoliths, Testimonials, ProjectGrid } from '@/components/landing/sections'
import { CaseStudies, Process, Team, FAQ } from '@/components/landing/more-sections'
import ContactSection from '@/components/landing/ContactSection'
import ConversionForm from '@/components/landing/ConversionForm'

export default function HomePage() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <PulseLines />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ServiceMonoliths />
      <Testimonials />
      <ProjectGrid />
      <CaseStudies />
      <Process />
      <Team />
      <FAQ />
      <ContactSection />
      <ConversionForm />
      <Footer />
    </div>
  )
}
