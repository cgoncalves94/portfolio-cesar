'use client'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-bg-secondary py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
            id="education-heading"
          >
            Education
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-xl border border-border-subtle bg-bg-primary p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    BSc Computer Science
                  </h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    1st Class Honours
                  </span>
                </div>
                <p className="mb-4 text-text-secondary">
                  Birkbeck, University of London · 2021 - 2024
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Studied core computer science concepts, advanced algorithms, and
                  modern software engineering practices. Gained hands-on experience
                  with cloud-native architectures, CI/CD pipelines, and full-stack
                  development.
                </p>
                <div className="mt-6 border-t border-border-subtle pt-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                    Final Year Project
                  </p>
                  <p className="text-sm text-text-secondary">
                    Built an AI-powered NLP tool that interpreted project requirements
                    in plain English and recommended cloud-native technologies,
                    suitable architectures, and efficient workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
