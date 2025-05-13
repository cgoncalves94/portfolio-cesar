"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X} from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-gray-900/80 backdrop-blur-md shadow-xl py-3`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-end">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a href="https://www.linkedin.com/in/cesar-goncalves94/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn Profile">
            <DynamicIcon name="linkedin" size={20} />
          </a>
          <a href="https://github.com/cgoncalves94" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub Profile">
            <DynamicIcon name="github" size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-xl pb-4">
          <div className="container mx-auto px-4 md:px-6 flex flex-col space-y-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors block px-3 py-2 rounded-md text-base font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-4 pt-2">
                <a href="https://www.linkedin.com/in/cesar-goncalves94/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                    <DynamicIcon name="linkedin" size={22} />
                </a>
                <a href="https://github.com/cgoncalves94" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub Profile">
                    <DynamicIcon name="github" size={22} />
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
