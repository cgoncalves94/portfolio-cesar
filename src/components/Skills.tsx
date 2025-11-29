'use client'
import { motion } from 'framer-motion'
import { Code2, Layers, Database, Cloud, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    name: 'Frameworks',
    icon: Layers,
    skills: ['FastAPI', 'Fastify', 'LangGraph', 'PydanticAI', 'React', 'Node.js'],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'GCP', 'Grafana', 'Prometheus'],
  },
  {
    name: 'AI/ML',
    icon: Sparkles,
    skills: ['MCP Servers', 'RAG', 'LLMs', 'Fine-Tuning', 'Agentic Workflows', 'Embeddings'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
            id="skills-heading"
          >
            Technical Skills
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
        </motion.div>

        {/* Skills Grid */}
        <div className="mx-auto max-w-5xl">
          {/* First row - 3 cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.slice(0, 3).map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  className="group rounded-xl border border-border-subtle bg-bg-secondary p-6 transition-all duration-300 hover:border-border-hover"
                >
                  {/* Category Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-bg-tertiary px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-[calc(66.666%+0.75rem)]">
            {skillCategories.slice(3).map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx + 3) * 0.1,
                  }}
                  className="group rounded-xl border border-border-subtle bg-bg-secondary p-6 transition-all duration-300 hover:border-border-hover"
                >
                  {/* Category Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-text-primary">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-bg-tertiary px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
