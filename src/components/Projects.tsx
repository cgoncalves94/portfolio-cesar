"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DynamicIcon } from 'lucide-react/dynamic';
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Multi-Agent PydanticAI Chat System",
    description: "Developed a full-stack multi-agent chat system leveraging PydanticAI for structured data extraction and response generation, and React for user interaction. This system enables complex, context-aware conversations with multiple AI agents collaborating to fulfill user requests.",
    tags: ["Python", "FastAPI", "PydanticAI", "Typescript", "React"],
    githubLink: "https://github.com/cgoncalves94/multi-agent-pydanticAI",
    liveLink: null,
  },
  {
    title: "ReceiptScanner API",
    description: "Built a FastAPI-based backend service for scanning and extracting information from receipts. The API utilize Gemini OCR capabilities to parse receipt data, providing a structured JSON output. The scanned data is stored in a PostgreSQL database, and the system is containerized using Docker for easy deployment.",
    tags: ["Python", "FastAPI", "OCR", "Docker", "SQLModel", "PydanticAI", "PostgreSQL", "Gemini"],
    githubLink: "https://github.com/cgoncalves94/ReceiptScanner",
    liveLink: null,
  },
  {
    title: "Multi-Agent LangGraph System",
    description: "Engineered a multi-agent system using LangGraph, enabling complex workflows and interactions between different AI agents. This project focused on creating robust and scalable agentic applications for various tasks, including data analysis and automated decision-making.",
    tags: ["Python", "LangGraph", "OpenAI", "RAG", "SQLite"],
    githubLink: "https://github.com/cgoncalves94/multi_agent_system",
    liveLink: null,
  },
  {
    title: "Warestack - Core-API",
    description: "Backend service providing essential functionality for the Warestack platform, integrating with GitHub, Slack, and Linear to manage development workflows, repositories, and team collaboration. It focuses on detecting issues, enforcing rules, and standardizing deployments to reduce lead times and ensure consistent, reliable releases.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Github Actions", "Redis", "Firebase", "AWS"],
    githubLink: null,
    liveLink: "https://warestack.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-10 md:pt-16 pb-10 md:pb-16 bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 pb-2">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of projects that demonstrate my skills in backend development, AI, and full-stack engineering. Each project reflects my commitment to building efficient, scalable, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="h-full flex flex-col bg-slate-800/70 border-slate-700 shadow-xl shadow-slate-900/50 hover:shadow-slate-700/40 transition-shadow duration-300 ease-in-out backdrop-blur-sm overflow-hidden group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 pt-1 h-20 overflow-y-auto custom-scrollbar">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2 pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700/60 border-gray-600 text-gray-300 text-xs hover:text-gray-800 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 pb-6 flex justify-end space-x-3 bg-slate-800/50 border-t border-slate-700/50">
                  {project.githubLink && (
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" passHref>
                      <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-700/70 hover:text-white hover:border-gray-500 transition-all">
                        <DynamicIcon name="github" className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                    </Link>
                  )}
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" passHref>
                      <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-700/70 hover:text-white hover:border-gray-500 transition-all">
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
  );
}
