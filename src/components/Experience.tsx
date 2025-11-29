'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Teya',
    location: 'London, UK',
    period: 'Jul 2025 - Present',
    details: [
      'Owner of an internal MCP Server connecting AI agents to internal systems and CRM platforms.',
      'Built tools enabling AI to resolve customer tickets faster by retrieving merchant data and analyzing settlements.',
      'Integrated with support workflows to help AI agents handle queries before human escalation.',
      'Collaborated with product, operations, and backend teams to increase AI-driven ticket resolution.',
    ],
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'Warestack',
    location: 'London, UK',
    period: 'Jan 2024 - Jun 2025',
    details: [
      'Architected and maintained core FastAPI backend with domain models for internal and customer-facing APIs.',
      'Built text-to-SQL reporting tool enabling users to query live data dashboards using plain English.',
      'Developed "Warestack Assistant" chatbot with RAG for intelligent, context-rich interactions from GitHub repos.',
      'Integrated with GitHub for PR reviews, deployment checks, and repository insights.',
      'Created dynamic monitoring system with natural language rule definitions for flagging events.',
      'Introduced Alembic for automated database migrations, eliminating manual SQL scripts.',
      'Migrated to UV packaging, reducing CI/CD build times by ~50%.',
    ],
    current: false,
  },
  {
    role: 'Teaching Assistant',
    company: 'Birkbeck, University of London',
    location: 'London, UK',
    period: 'May 2024 - Jul 2025',
    details: [
      'Led labs for 30+ students in Cloud Computing (GCP) and Big Data Analytics.',
      'Taught API development with Node.js, Docker containerization, and GitHub Actions automation.',
    ],
    current: false,
  },
  {
    role: 'Head Bartender → Bar Manager',
    company: 'The Wolseley Hospitality Group',
    location: 'London, UK',
    period: 'Oct 2016 - Jan 2024',
    details: [
      'Progressed from head bartender to managing a 10-person team through demonstrated leadership.',
      'Developed strong communication, problem-solving, and stakeholder management skills.',
      'Streamlined inventory management and increased profits by ~5%.',
    ],
    current: false,
  },
  {
    role: 'Bartender',
    company: 'Casual Dining Group - Belgo Centraal',
    location: 'London, UK',
    period: 'Feb 2015 - Oct 2016',
    details: [
      'Delivered high-quality service in a fast-paced central London restaurant.',
    ],
    current: false,
  },
  {
    role: 'Software Developer',
    company: 'GSystem',
    location: 'Lisbon, Portugal',
    period: 'Mar 2013 - Jan 2015',
    details: ['Built applications with Visual Basic 6 and MySQL.'],
    current: false,
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-bg-primary py-24 md:py-32"
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
            id="experience-heading"
          >
            Experience
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-px bg-border-subtle md:left-8" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pb-12 pl-8 last:pb-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 md:left-8">
                  <div
                    className={`h-3 w-3 rounded-full border-2 ${
                      exp.current
                        ? 'border-accent bg-accent'
                        : 'border-border-subtle bg-bg-primary'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="group">
                  {/* Period */}
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-sm text-text-muted">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h3 className="mb-1 font-display text-lg font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <p className="mb-4 text-sm text-text-secondary">
                    {exp.company} · {exp.location}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-text-muted" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
