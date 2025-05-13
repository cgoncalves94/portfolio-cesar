"use client";
import { Mail } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900/90 backdrop-blur-sm border-t border-slate-700/50">
      <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/cesar-goncalves94/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <DynamicIcon name="linkedin" size={24} />
          </a>
          <a
            href="https://github.com/cgoncalves94"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <DynamicIcon name="github" size={24} />
          </a>
          <a
            href="mailto:goncalves.cesaraugusto94@gmail.com" // Replace with actual email if desired, or a contact form link
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email Cesar Goncalves"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Cesar Goncalves. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js, Tailwind CSS, and Shadcn/UI.
        </p>
      </div>
    </footer>
  );
}
