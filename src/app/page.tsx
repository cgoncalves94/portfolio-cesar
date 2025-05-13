'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
// import Contact from "@/components/Contact"; // Assuming a Contact component might be added later
import Footer from '@/components/Footer' // Assuming a Footer component might be added later

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}
