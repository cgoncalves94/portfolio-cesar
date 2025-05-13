"use client";
// src/components/Skills.tsx
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Cloud, Sparkles } from "lucide-react";

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code2,
    gradient: "from-sky-500 to-blue-600",
    iconGlow: "shadow-[0_0_24px_4px_rgba(56,189,248,0.5)]",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    name: "Frameworks & Libraries",
    icon: Layers,
    gradient: "from-purple-500 to-pink-600",
    iconGlow: "shadow-[0_0_24px_4px_rgba(168,85,247,0.5)]",
    skills: ["FastAPI", "LangGraph", "PydanticAI", "React", "Node.js"],
  },
  {
    name: "Databases",
    icon: Database,
    gradient: "from-emerald-500 to-green-600",
    iconGlow: "shadow-[0_0_24px_4px_rgba(16,185,129,0.5)]",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-amber-500 to-yellow-600",
    iconGlow: "shadow-[0_0_24px_4px_rgba(245,158,11,0.5)]",
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "GCP"],
  },
  {
    name: "AI/ML",
    icon: Sparkles,
    gradient: "from-rose-500 to-red-600",
    iconGlow: "shadow-[0_0_24px_4px_rgba(244,63,94,0.5)]",
    skills: ["RAG", "Fine-Tuning LLMs", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative pt-10 md:pt-16 pb-10 md:pb-16 overflow-hidden"
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" aria-hidden>
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 pb-2">
            Technical Skills
          </h2>
        </motion.div>
        {/* Modified grid layout for 3-2 arrangement on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.slice(0, 3).map((cat, idx) => { // First 3 cards
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 24px 0 rgba(255,255,255,0.08)` }} 
                className={`relative group rounded-2xl bg-slate-800/70 border-2 border-transparent shadow-xl backdrop-blur-md p-8 flex flex-col items-center transition-all duration-300 overflow-hidden min-h-[320px]`} 
                style={{
                  borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                  '--tw-gradient-from': cat.gradient.split(' ')[0],
                  '--tw-gradient-to': cat.gradient.split(' ')[1],
                } as React.CSSProperties}
              >
                <div className={`mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${cat.gradient} p-4 ${cat.iconGlow} transition-all duration-300 group-hover:scale-110`}> 
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" /> 
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center" style={{letterSpacing: 0.5}}> 
                  {cat.name}
                </h3>
                <Card className="w-full bg-transparent border-none shadow-none">
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-gray-300 text-center text-base sm:text-base md:text-base lg:text-base xl:text-base break-words"> 
                      {cat.skills.map((skill) => (
                        <li key={skill} className="leading-relaxed break-words"> 
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Wrapper for the last two cards to center them */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-start-2 lg:col-span-1 gap-8 mt-8"> {/* Centering classes */}
          {skillCategories.slice(3).map((cat, idx) => { // Last 2 cards
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 24px 0 rgba(255,255,255,0.08)` }} 
                className={`relative group rounded-2xl bg-slate-800/70 border-2 border-transparent shadow-xl backdrop-blur-md p-8 flex flex-col items-center transition-all duration-300 overflow-hidden min-h-[320px]`} 
                style={{
                  borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                  '--tw-gradient-from': cat.gradient.split(' ')[0],
                  '--tw-gradient-to': cat.gradient.split(' ')[1],
                } as React.CSSProperties}
              >
                <div className={`mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${cat.gradient} p-4 ${cat.iconGlow} transition-all duration-300 group-hover:scale-110`}> 
                  <Icon className="w-8 h-8 text-white drop-shadow-lg" /> 
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 text-center" style={{letterSpacing: 0.5}}> 
                  {cat.name}
                </h3>
                <Card className="w-full bg-transparent border-none shadow-none">
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-gray-300 text-center text-base sm:text-base md:text-base lg:text-base xl:text-base break-words"> 
                      {cat.skills.map((skill) => (
                        <li key={skill} className="leading-relaxed break-words"> 
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
