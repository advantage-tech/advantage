import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative bg-background min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="font-mono text-primary text-xs uppercase tracking-widest mb-4">404</div>
        <h1 className="font-inter text-4xl font-bold text-foreground mb-6">Page not found<span className="text-primary">.</span></h1>
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
