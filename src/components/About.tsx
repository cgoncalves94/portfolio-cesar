'use client'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { Card, CardContent } from '@/components/ui/card'

export default function About() {
  const isMobile = useIsMobile()
  return (
    <section
      id="about"
      className="relative bg-gray-900 pb-10 pt-20 text-white md:pb-16 md:pt-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2
            className="bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-4xl font-bold tracking-tight text-transparent md:text-5xl"
            id="about-heading"
          >
            About Me
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`mx-auto ${isMobile ? 'max-w-sm' : 'max-w-2xl md:max-w-4xl'}`}
        >
          <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/70 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-shadow duration-300 ease-in-out hover:shadow-slate-700/40">
            <CardContent
              className={`space-y-4 text-center ${isMobile ? 'p-6 text-sm' : 'p-6 text-base md:p-12 md:text-lg'} leading-relaxed text-gray-300`}
            >
              <p>
                I’m a motivated Software Engineer specializing in building
                reliable Python backend systems with a focus on FastAPI. I hold
                a First-Class Honours degree in Computer Science from Birkbeck,
                University of London, and am passionate about leveraging AI,
                including LangGraph agents and Retrieval-Augmented Generation
                (RAG), to develop intelligent solutions. Currently, I work as a
                Backend Developer & AI Engineer at Warestack and support
                teaching cloud computing and big data analytics at Birkbeck. My
                skills also include Docker, CI/CD with GitHub Actions, and cloud
                deployments on AWS and GCP.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
