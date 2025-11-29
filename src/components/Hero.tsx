'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Subtle radial gradient background */}
      <div className="pointer-events-none absolute inset-0 radial-gradient-bg" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Two-column layout on desktop */}
          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr] md:gap-16 lg:gap-20">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">
                {/* Subtle glow behind image */}
                <div className="absolute -inset-1 rounded-full bg-accent/10 blur-2xl" />
                <Image
                  src="/31444937_cropped.jpg"
                  alt="Cesar Goncalves, Software Engineer"
                  width={280}
                  height={280}
                  className="relative rounded-full border border-white/10 object-cover shadow-2xl shadow-black/50"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 font-mono text-sm tracking-wider text-accent"
              >
                SOFTWARE ENGINEER
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl"
                id="hero-heading"
              >
                Cesar{' '}
                <span className="gradient-text-accent">Goncalves</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-10 max-w-lg text-lg leading-relaxed text-text-secondary"
              >
                Building backend systems and AI tools that actually solve problems.
                Python, TypeScript, and a hospitality-trained eye for what users
                really need.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col items-center gap-4 sm:flex-row md:items-start"
              >
                <Link
                  href="#projects"
                  className="btn-glow inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-bg-primary transition-all hover:bg-accent/90"
                >
                  View my work
                  <ArrowDown className="h-4 w-4" />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-6 py-3 font-medium text-text-secondary transition-all hover:border-border-hover hover:text-text-primary"
                >
                  <FileText className="h-4 w-4" />
                  About me
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-wider text-text-muted">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
