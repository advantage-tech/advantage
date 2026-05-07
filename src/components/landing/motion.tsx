'use client'
import { motion } from 'framer-motion'

export function PulseLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[0.15, 0.35, 0.55, 0.75, 0.92].map((top, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          style={{ top: `${top * 100}%` }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}
      {[0.2, 0.8].map((left, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/10 to-transparent"
          style={{ left: `${left * 100}%` }}
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
        />
      ))}
    </div>
  )
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}) {
  const dirs = { up: { y: 60, x: 0 }, down: { y: -60, x: 0 }, left: { y: 0, x: 60 }, right: { y: 0, x: -60 } }
  const d = dirs[direction]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: d.y, x: d.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
