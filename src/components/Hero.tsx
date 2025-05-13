"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Shadcn UI button
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      // Removed min-h-screen, significantly reduced padding
      className="relative flex flex-col items-center justify-center pt-20 md:pt-28 pb-16 md:pb-20 bg-gray-900 text-white overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 md:mb-10 transform transition-all duration-700 ease-out hover:scale-105"
        >
          <Image
            src="/31444937_cropped.jpg"
            alt="Cesar Goncalves"
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-gray-700 shadow-2xl shadow-gray-900/60"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 pb-2">
            Cesar Goncalves
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl md:max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed"
        >
          A Software Engineer crafting intelligent back-end systems with FastAPI, driven by a passion for AI-driven solutions.
        </motion.p>
        <Link href="#about" passHref>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="group bg-transparent border-2 border-gray-400 text-gray-200 hover:bg-gray-700/50 hover:border-gray-500 hover:text-white transition-all duration-300 ease-in-out rounded-lg px-8 py-3 text-lg shadow-lg hover:shadow-gray-700/40 transform hover:scale-105"
            >
              Discover More
              <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </Link>
      </div>
      {/* Removed Gradient Overlay */}
    </section>
  );
}
