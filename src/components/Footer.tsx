'use client'
import Link from 'next/link'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center md:px-8 md:py-20">
        <h3 className="mb-4 font-display text-2xl font-semibold text-text-primary md:text-3xl">
          Let's work together
        </h3>
        <p className="mb-8 text-text-secondary">
          I'm always open to discussing new projects and opportunities.
        </p>
        <Link
          href="mailto:goncalves.cesaraugusto94@gmail.com"
          className="btn-glow inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-bg-primary transition-all hover:bg-accent/90"
        >
          <Mail className="h-4 w-4" />
          Get in touch
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-8">
          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} Cesar Goncalves
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
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
            <a
              href="mailto:goncalves.cesaraugusto94@gmail.com"
              className="text-text-muted transition-colors duration-300 hover:text-accent"
              aria-label="Email Cesar Goncalves"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
