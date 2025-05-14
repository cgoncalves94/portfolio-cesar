'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

export default function About() {
  const isMobile = useIsMobile()
  return (
    <section
      id="about"
      className="relative bg-gray-900 pb-10 pt-20 text-white md:pb-16 md:pt-32" // Adjusted padding back
    >
      <div className="container mx-auto px-4 md:px-6">
        {' '}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`mx-auto rounded-xl border border-slate-700/50 bg-slate-800/30 shadow-lg backdrop-blur-sm ${isMobile ? 'max-w-sm p-2' : 'max-w-2xl p-4 md:max-w-4xl md:p-12'}`}
        >
          <h2
            className="mb-8 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-center text-4xl font-bold tracking-tight text-transparent md:text-5xl"
            id="about-heading"
          >
            About Me
          </h2>
          <div
            className={`space-y-4 text-center ${isMobile ? 'text-sm' : 'text-base md:text-lg'} leading-relaxed text-gray-300`}
          >
            <p>
              A highly motivated Software Engineer specializing in building
              robust and reliable Python back-end systems with a strong focus on
              FastAPI. I graduated with a Bachelor's in Computer Science with
              First-Class Honours from Birkbeck, University of London and am
              passionate about leveraging Artificial Intelligence, particularly
              LangGraph agents and Retrieval-Augmented Generation (RAG), to
              create efficient and intelligent solutions.
            </p>
            <p>
              My expertise extends to Docker, CI/CD pipelines with GitHub
              Actions, and cloud deployment strategies on platforms like AWS and
              GCP. Currently, I contribute as a Backend Developer & AI Engineer
              at Warestack and serve as a Teaching Assistant at Birkbeck
              University. I am driven by a passion for AI, developing scalable
              applications, and finding elegant solutions to complex problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
