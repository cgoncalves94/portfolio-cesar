'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle/50'
          : 'bg-transparent'
      }`}
      aria-label="Primary"
      role="navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        {/* Logo / Name */}
        <Link
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
        >
          CG
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="link-underline text-sm font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
            >
              {item.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-4 w-px bg-border-subtle" />

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/cesar-goncalves94/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors duration-300 hover:text-accent"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/cgoncalves94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors duration-300 hover:text-accent"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 text-text-secondary transition-colors hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-0 right-0 top-full border-b border-border-subtle/50 bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium text-text-secondary transition-colors hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-4 flex gap-6 border-t border-border-subtle pt-6"
              >
                <a
                  href="https://www.linkedin.com/in/cesar-goncalves94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors duration-300 hover:text-accent"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/cgoncalves94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted transition-colors duration-300 hover:text-accent"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
