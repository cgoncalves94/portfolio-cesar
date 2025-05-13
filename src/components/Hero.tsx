'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button' // Assuming Shadcn UI button
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900 py-20 text-white md:py-28"
    >
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/31444937_cropped.jpg"
            alt="Cesar Goncalves"
            width={400}
            height={400}
            className="rounded-full border-4 border-gray-700 object-cover shadow-2xl shadow-gray-900/60"
            priority
          />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 bg-clip-text pb-2 text-transparent">
              Cesar Goncalves
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl md:max-w-2xl"
          >
            A Software Engineer specializing in intelligent back-end systems,
            fueled by a passion for creating AI-driven solutions.
          </motion.p>
          <Link href="#about" passHref>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="inline-block"
            >
              <Button
                variant="outline"
                size="lg"
                className="group transform rounded-lg border-2 border-gray-400 bg-transparent px-8 py-3 text-lg text-gray-200 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-500 hover:bg-gray-700/50 hover:text-white hover:shadow-gray-700/40"
              >
                Discover More
                <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
