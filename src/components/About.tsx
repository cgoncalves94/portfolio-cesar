'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-bg-secondary py-24 md:py-32"
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2
              className="font-display text-3xl font-bold tracking-tight text-text-primary md:text-4xl"
              id="about-heading"
            >
              About Me
            </h2>
            <div className="mx-auto mt-4 h-px w-12 bg-accent" />
          </motion.div>

          {/* Pull Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 border-l-2 border-accent pl-6"
          >
            <p className="font-display text-xl font-medium leading-relaxed text-text-primary md:text-2xl">
              I build APIs and systems that are reliable and maintainable. Coming
              from hospitality, I learned that good communication beats perfect
              code.
            </p>
          </motion.blockquote>

          {/* Body Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-text-secondary"
          >
            <p className="leading-relaxed">
              I'm a backend engineer focused on{' '}
              <span className="text-text-primary">AI applications</span>,{' '}
              <span className="text-text-primary">LLMs</span>, and{' '}
              <span className="text-text-primary">agent workflows</span>. Currently
              building MCP servers that connect AI to business systems—enabling
              intelligent automation that teams can actually understand and maintain.
            </p>

            <p className="leading-relaxed">
              My toolkit spans Python and TypeScript, with experience in FastAPI,
              LangGraph, RAG systems, and the full DevOps stack—Docker, Kubernetes,
              CI/CD, and cloud deployments on AWS and GCP.
            </p>

            <p className="leading-relaxed">
              I hold a First-Class Honours degree in Computer Science from Birkbeck,
              University of London. If you're working on something interesting in AI
              or backend architecture, let's connect.
            </p>
          </motion.div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 gap-8 border-t border-border-subtle pt-12 md:grid-cols-4"
          >
            {[
              { label: 'Degree', value: '1st Class' },
              { label: 'Focus', value: 'Backend & AI' },
              { label: 'Stack', value: 'Python & TS' },
              { label: 'Cloud', value: 'AWS & GCP' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-lg font-semibold text-text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
