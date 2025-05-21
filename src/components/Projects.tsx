'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DynamicIcon } from 'lucide-react/dynamic'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

const projectsData = [
  {
    title: 'Multi-Agent PydanticAI Chat System',
    description:
      'Developed a full-stack multi-agent chat system leveraging PydanticAI for structured data extraction and response generation, and React for user interaction. This system enables complex, context-aware conversations with multiple AI agents collaborating to fulfill user requests.',
    tags: [
      'Python',
      'FastAPI',
      'PydanticAI',
      'SQLite',
      'Typescript',
      'React',
      'Next.js',
    ],
    githubLink: 'https://github.com/cgoncalves94/multi-agent-pydanticAI',
    liveLink: null,
  },
  {
    title: 'ReceiptScanner API',
    description:
      'Built a FastAPI-based backend service for scanning and extracting information from receipts. The API utilize Gemini OCR capabilities to parse receipt data, providing a structured JSON output. The scanned data is stored in a PostgreSQL database, and the system is containerized using Docker for easy deployment.',
    tags: [
      'Python',
      'FastAPI',
      'OCR',
      'Docker',
      'SQLModel',
      'PydanticAI',
      'PostgreSQL',
      'Gemini',
    ],
    githubLink: 'https://github.com/cgoncalves94/ReceiptScanner',
    liveLink: null,
  },
  {
    title: 'Multi-Agent LangGraph System',
    description:
      'Engineered a multi-agent system using LangGraph, enabling complex workflows and interactions between different AI agents. This project focused on creating robust and scalable agentic applications for various tasks, including data analysis and automated decision-making.',
    tags: [
      'Python',
      'FastAPI',
      'LangGraph',
      'OpenAI',
      'RAG',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    githubLink: 'https://github.com/cgoncalves94/multi_agent_system',
    liveLink: null,
  },
  {
    title: 'Warestack - Core-API',
    description:
      'Backend service providing essential functionality for the Warestack platform, integrating with GitHub, Slack, and Linear to manage development workflows, repositories, and team collaboration. It focuses on detecting issues, enforcing rules, and standardizing deployments to reduce lead times and ensure consistent, reliable releases.',
    tags: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Github Actions',
      'Redis',
      'Firebase',
      'AWS',
    ],
    githubLink: null,
    liveLink: 'https://warestack.com/',
  },
]

export default function Projects() {
  const isMobile = useIsMobile()

  return (
    <section
      id="projects"
      className="bg-gray-900/80 pb-10 pt-10 backdrop-blur-lg md:pb-16 md:pt-16"
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
            id="projects-heading"
          >
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            A selection of projects that demonstrate my skills in backend
            development, AI, and full-stack engineering. Each project reflects
            my commitment to building efficient, scalable, and innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/70 shadow-xl shadow-slate-900/50 backdrop-blur-sm transition-shadow duration-300 ease-in-out hover:shadow-slate-700/40">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-100 transition-colors group-hover:text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="custom-scrollbar h-20 overflow-y-auto pt-1 text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-4 pt-2">
                  <div
                    className={`flex flex-wrap gap-2 ${isMobile ? 'mb-6' : 'mb-4'}`}
                  >
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="border-gray-600 bg-gray-700/60 text-xs text-gray-300 transition-colors hover:text-gray-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter
                  className={`flex ${isMobile ? 'flex-col items-start space-x-0 space-y-2' : 'justify-end space-x-3'} border-t border-slate-700/50 bg-slate-800/50 pb-6 pt-2`}
                >
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-700/70 hover:text-white"
                      >
                        <DynamicIcon name="github" className="mr-2 h-4 w-4" />{' '}
                        GitHub
                      </Button>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-700/70 hover:text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
