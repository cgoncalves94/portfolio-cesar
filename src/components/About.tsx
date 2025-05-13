"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    // Refactored: Added gradient, grid pattern, adjusted padding for consistency
    <section
      id="about"
      // Reverted background to bg-gray-900 to match Hero, adjusted padding
      className="relative pt-20 md:pt-32 pb-10 md:pb-16 bg-gray-900 text-white" // Adjusted padding back
    >
      <div className="container mx-auto px-4 md:px-6"> {/* Removed text-center from container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          // Added styled container div for content
          className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 md:p-12 shadow-lg backdrop-blur-sm"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 pb-2">
            About Me
          </h2>
          {/* Kept text centered */}
          <div className="text-lg text-gray-300 leading-relaxed space-y-6 text-center">
            <p>
              A highly motivated Software Engineer specializing in building robust and reliable Python back-end systems with a strong focus on FastAPI. I graduated with a Bachelor's in Computer Science with First-Class Honours from Birkbeck, University of London and am passionate about leveraging Artificial Intelligence, particularly LangGraph agents and Retrieval-Augmented Generation (RAG), to create efficient and intelligent solutions.
            </p>
            <p>
              My expertise extends to Docker, CI/CD pipelines with GitHub Actions, and cloud deployment strategies on platforms like AWS and GCP. Currently, I contribute as a Backend Developer & AI Engineer at Warestack and serve as a Teaching Assistant at Birkbeck University. I am driven by a passion for AI, developing scalable applications, and finding elegant solutions to complex problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
