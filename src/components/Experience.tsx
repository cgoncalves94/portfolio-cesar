"use client";
// src/components/Experience.tsx
import React from 'react';
import { Briefcase, GraduationCap, TrendingUp, Martini, Code } from 'lucide-react'; // Icons for different roles
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Warestack",
    location: "London, UK",
    period: "2024 - Present",
    details: [
      "Built and maintained a FastAPI backend on PostgreSQL and Redis, delivering reliable performance with 99.8% uptime.",
      "Developed LangGraph agents (web search, RAG, Slack, Project Management) to automate tasks and surface context-aware insights.",
      "Eliminated deployment risk by replacing manual SQL scripts with Alembic versioned migrations.",
      "Reduced CI/CD build time from 10 min to 5 min by adding UV packaging and optimising GitHub Actions."
    ],
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-600 to-pink-500"
  },
  {
    role: "Teaching Assistant",
    company: "Birkbeck, University of London",
    location: "London, UK",
    period: "2024 - Present",
    details: [
      "Led Python/cloud computing labs for 30+ students, focusing on GCP deployments, data pipelines, and demonstrating cloud-native practices (Node.js, Docker, CI/CD)."
    ],
    icon: <GraduationCap className="w-6 h-6 text-sky-400" />,
    gradient: "from-sky-600 to-cyan-500"
  },
  {
    role: "Bar Manager",
    company: "The Wolseley Hospitality Group",
    location: "London, UK",
    period: "2018 - 2024",
    details: [
      "Led a 10-person team and streamlined inventory, raising gross profit from 76% to 79%."
    ],
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-600 to-green-500"
  },
  {
    role: "Head Bartender",
    company: "The Wolseley Hospitality Group",
    location: "London, UK",
    period: "2016 - 2018",
    details: [
      "Supervised transactions, inventory, and customer service, earning promotion to Bar Manager for leadership."
    ],
    icon: <Martini className="w-6 h-6 text-amber-400" />,
    gradient: "from-amber-500 to-yellow-400"
  },
  {
    role: "Junior Software Developer",
    company: "GSystem",
    location: "Lisbon, Portugal",
    period: "2013 - 2015",
    details: [
      "Built applications with Visual Basic 6 and MySQL."
    ],
    icon: <Code className="w-6 h-6 text-rose-400" />,
    gradient: "from-rose-600 to-red-500"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-900/80 backdrop-blur-lg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 pb-2">
            Professional Journey
          </h2>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Removed Vertical timeline bar */}

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex items-start group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Icon and Line Connector - Desktop */} 
              <div className="hidden md:flex flex-col items-center w-1/6 mx-auto relative">
                <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full shadow-lg ring-4 ring-gray-800/50 bg-gray-800 group-hover:ring-opacity-100 group-hover:ring-pink-500/70 transition-all duration-300 bg-gradient-to-br ${exp.gradient}`}>
                  {exp.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/6 bg-slate-800/70 border border-slate-700 shadow-xl shadow-slate-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-500 ease-in-out transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                {/* Icon - Mobile */} 
                <div className="md:hidden flex items-center mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg ring-2 ring-gray-800/50 bg-gradient-to-br ${exp.gradient}`}>
                    {exp.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-purple-300">{exp.company} - {exp.location}</p>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                  </div>
                </div>
                {/* Title and Details - Desktop */} 
                <div className="hidden md:block">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">{exp.role}</h3>
                  <p className="text-md text-purple-300 mb-1">{exp.company} - {exp.location}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base leading-relaxed marker:text-purple-400">
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
  );
}
