# Advantage NG — Next.js 14 + TypeScript

Converted from Vite/React/Base44 to Next.js 14 App Router with TypeScript.

## Stack
- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (exact same design tokens as original)
- **Framer Motion** (all animations preserved)
- **React Hook Form + Zod** (contact form validation)
- **Resend** (replaces Base44 email — both forms wired)
- **Sonner** (toast notifications)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Email Setup (Resend)

1. Sign up free at [resend.com](https://resend.com)
2. Get your API key
3. Edit `.env.local`:

```
RESEND_API_KEY=re_your_key_here
CONTACT_RECEIVE_EMAIL=info@advantageng.com
RESEND_FROM_EMAIL=noreply@advantageng.com
```

4. **For local dev**: Use `onboarding@resend.dev` as `RESEND_FROM_EMAIL` — no domain verification needed
5. **For production**: Verify your domain (`advantageng.com`) in Resend dashboard → add DNS records → update env vars

## Deploy to Vercel

```bash
npx vercel
```

Add your env vars in Vercel dashboard → Settings → Environment Variables.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404
│   ├── services/page.tsx       # Services detail page
│   ├── industry/[slug]/        # Dynamic industry pages
│   │   └── page.tsx            # hospitality, fintech, interior-design, media, retail
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── globals.css             # Exact CSS vars from original
│   └── api/
│       ├── contact/route.ts    # Contact form → Resend
│       └── consultation/route.ts # Conversion form → Resend
├── components/
│   └── landing/
│       ├── motion.tsx          # PulseLines + ScrollReveal
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── sections.tsx        # Hero, LogoMarquee, ServiceMonoliths, Testimonials, ProjectGrid
│       ├── more-sections.tsx   # CaseStudies, Process, Team, FAQ
│       ├── ContactSection.tsx  # Contact form (wired to Resend)
│       └── ConversionForm.tsx  # Consultation form (wired to Resend)
└── lib/
    ├── data.ts                 # All content in one place — edit here
    └── utils.ts                # cn() helper
```

## Customisation

All content (copy, images, team, testimonials, projects, FAQ) lives in **`src/lib/data.ts`** — edit that file to update anything site-wide.

Logo files are in `public/images/`.

## What Changed vs. Base44

| Before | After |
|--------|-------|
| Vite + React JSX | Next.js 14 + TypeScript |
| Base44 email (failing) | Resend (reliable, self-controlled) |
| Base44 auth/SDK overhead | Zero dependencies on any third-party platform |
| No SSR / poor SEO | Full SSR + static generation |
| `react-router-dom` | Next.js App Router |
| `Link` from react-router | `Link` from next/link |
| `img` tags | `next/image` for logos |
