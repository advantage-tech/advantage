import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    default: 'Advantage — AI-Powered Business Solutions',
    template: '%s | Advantage',
  },
  description:
    'From brand identity to enterprise ERP, SaaS platforms to AI-driven marketing — Advantage delivers end-to-end transformation across every industry.',
  keywords: ['ERP', 'SaaS', 'branding', 'AI marketing', 'consulting', 'Nigeria', 'Abuja'],
  openGraph: { type: 'website', locale: 'en_NG', siteName: 'Advantage' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  )
}
