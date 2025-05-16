'use client'
import React from 'react'
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Martini,
  Code,
} from 'lucide-react' // Icons for different roles
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Warestack',
    location: 'London, UK',
    period: '2024 - Present',
    details: [
      'Built and maintained a FastAPI backend on PostgreSQL and Redis, delivering reliable performance with 99.8% uptime.',
      'Developed LangGraph agents (web search, RAG, Slack, Project Management) to automate tasks and surface context-aware insights.',
      'Eliminated deployment risk by replacing manual SQL scripts with Alembic versioned migrations.',
      'Reduced CI/CD build time by 50%, by adding UV packaging and optimising GitHub Actions.',
    ],
    icon: <Briefcase className="h-6 w-6 text-purple-400" />,
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    role: 'Teaching Assistant',
    company: 'Birkbeck, University of London',
    location: 'London, UK',
    period: '2024 - Present',
    details: [
      'Led Python/cloud computing labs for 30+ students, focusing on GCP deployments, data pipelines, and demonstrating cloud-native practices (Node.js, Docker, CI/CD).',
    ],
    icon: <GraduationCap className="h-6 w-6 text-sky-400" />,
    gradient: 'from-sky-600 to-cyan-500',
  },
  {
    role: 'Bar Manager',
    company: 'The Wolseley Hospitality Group',
    location: 'London, UK',
    period: '2018 - 2024',
    details: [
      'Led a 10-person hospitality team',
      'Streamlined inventory management',
      'Increased profits by around 5%',
    ],
    icon: <TrendingUp className="h-6 w-6 text-emerald-400" />,
    gradient: 'from-emerald-600 to-green-500',
  },
  {
    role: 'Head Bartender',
    company: 'The Wolseley Hospitality Group',
    location: 'London, UK',
    period: '2016 - 2018',
    details: [
      'Supervised transactions, inventory, and customer service',
      'Earned promotion to Bar Manager for leadership',
    ],
    icon: <Martini className="h-6 w-6 text-amber-400" />,
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    role: 'Junior Software Developer',
    company: 'GSystem',
    location: 'Lisbon, Portugal',
    period: '2013 - 2015',
    details: ['Built applications with Visual Basic 6 and MySQL'],
    icon: <Code className="h-6 w-6 text-rose-400" />,
    gradient: 'from-rose-600 to-red-500',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900/80 py-20 text-white backdrop-blur-lg md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
        >
          <h2
            className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl"
            id="experience-heading"
          >
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group mb-12 flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Icon and Line Connector - Desktop */}
              <div className="relative mx-auto hidden w-1/6 flex-col items-center md:flex">
                <div
                  className={`z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 bg-gradient-to-br shadow-lg ring-4 ring-gray-800/50 transition-all duration-300 group-hover:ring-pink-500/70 group-hover:ring-opacity-100 ${exp.gradient}`}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full transform rounded-xl border border-slate-700 bg-slate-800/70 p-6 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 sm:p-8 md:w-5/6 ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}
              >
                {/* Icon - Mobile */}
                <div className="mb-4 flex items-center md:hidden">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br shadow-lg ring-2 ring-gray-800/50 ${exp.gradient}`}
                  >
                    {exp.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-purple-300">
                      {exp.company} - {exp.location}
                    </p>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                  </div>
                </div>
                {/* Title and Details - Desktop */}
                <div className="hidden md:block">
                  <h3 className="mb-1 text-xl font-semibold text-white sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="text-md mb-1 text-purple-300">
                    {exp.company} - {exp.location}
                  </p>
                  <p className="mb-4 text-sm text-gray-400">{exp.period}</p>
                </div>
                <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-300 marker:text-purple-400 sm:text-base">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
