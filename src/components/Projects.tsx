'use client'
import Link from 'next/link'
import { Github, ExternalLink, ArrowUpRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  githubLink: string | null
  liveLink: string | null
  featured: boolean
}

const projectsData: Project[] = [
  {
    title: 'Multi-Agent PydanticAI Chat System',
    description:
      'Full-stack multi-agent chat system leveraging PydanticAI for structured data extraction and response generation. Enables complex, context-aware conversations with multiple AI agents collaborating to fulfill user requests.',
    tags: ['Python', 'FastAPI', 'PydanticAI', 'React', 'Next.js'],
    githubLink: 'https://github.com/cgoncalves94/multi-agent-pydanticAI',
    liveLink: null,
    featured: true,
  },
  {
    title: 'ReceiptScanner API',
    description:
      'FastAPI-based backend service for scanning and extracting information from receipts using Gemini OCR. Provides structured JSON output with PostgreSQL storage, containerized with Docker.',
    tags: ['Python', 'FastAPI', 'OCR', 'Docker', 'PostgreSQL', 'Gemini'],
    githubLink: 'https://github.com/cgoncalves94/ReceiptScanner',
    liveLink: null,
    featured: false,
  },
  {
    title: 'Multi-Agent LangGraph System',
    description:
      'Multi-agent system using LangGraph for complex workflows and interactions between AI agents. Focused on scalable agentic applications for data analysis and automated decision-making.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'OpenAI', 'RAG'],
    githubLink: 'https://github.com/cgoncalves94/multi_agent_system',
    liveLink: null,
    featured: false,
  },
  {
    title: 'Warestack - Core API',
    description:
      'Backend service for the Warestack platform, integrating with GitHub, Slack, and Linear to manage development workflows. Focuses on detecting issues, enforcing rules, and standardizing deployments.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
    githubLink: null,
    liveLink: 'https://warestack.com/',
    featured: false,
  },
]

// Extract owner/repo from GitHub URL
function getRepoPath(url: string): string | null {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/)
  return match ? match[1] : null
}

export default function Projects() {
  const [stars, setStars] = useState<Record<string, number>>({})
  const featuredProject = projectsData.find((p) => p.featured)
  const otherProjects = projectsData.filter((p) => !p.featured)

  useEffect(() => {
    // Fetch star counts for all projects with GitHub links
    const fetchStars = async () => {
      const repoUrls = projectsData
        .filter((p) => p.githubLink)
        .map((p) => p.githubLink as string)

      const starCounts: Record<string, number> = {}

      await Promise.all(
        repoUrls.map(async (url) => {
          const repoPath = getRepoPath(url)
          if (!repoPath) return

          try {
            const res = await fetch(`https://api.github.com/repos/${repoPath}`)
            if (res.ok) {
              const data = await res.json()
              starCounts[url] = data.stargazers_count
            }
          } catch {
            // Silently fail - stars just won't show
          }
        })
      )

      setStars(starCounts)
    }

    fetchStars()
  }, [])

  return (
    <section
      id="projects"
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
            id="projects-heading"
          >
            Featured Projects
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-text-secondary">
            A selection of projects demonstrating my expertise in backend development,
            AI systems, and full-stack engineering.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-primary p-8 transition-all duration-300 hover:border-accent/30 md:p-10">
              {/* Featured badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Featured Project
              </div>

              <h3 className="mb-4 font-display text-2xl font-semibold text-text-primary md:text-3xl">
                {featuredProject.title}
              </h3>

              <p className="mb-6 max-w-2xl text-text-secondary leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-bg-tertiary px-3 py-1.5 text-sm text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {featuredProject.githubLink && (
                  <Link
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {featuredProject.githubLink && stars[featuredProject.githubLink] !== undefined && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {stars[featuredProject.githubLink]}
                  </span>
                )}
                {featuredProject.liveLink && (
                  <Link
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="group flex h-full flex-col rounded-xl border border-border-subtle bg-bg-primary p-6 transition-all duration-300 hover:border-border-hover">
                <h3 className="mb-3 font-display text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 flex-grow text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-bg-tertiary px-2 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded bg-bg-tertiary px-2 py-1 text-xs text-text-muted">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-border-subtle pt-5">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Link>
                  )}
                  {project.githubLink && stars[project.githubLink] !== undefined && (
                    <span className="inline-flex items-center gap-1 text-sm text-text-muted">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      {stars[project.githubLink]}
                    </span>
                  )}
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
