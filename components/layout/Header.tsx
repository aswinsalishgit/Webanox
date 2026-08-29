"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#F7F7F5]/80 backdrop-blur-md border-b border-[#DCDCDC]">
      <div className="page-container h-16 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-2">
          {/* Logo will be inserted here when available. For now, text fallback but using an img tag ready to go */}
          <div className="relative w-[120px] h-[30px] flex items-center">
            {/* Replace with actual logo image when provided */}
            <span className="font-bold text-lg tracking-tight">Webanox</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#111111] ${
                pathname === link.href ? "text-[#111111]" : "text-[#686868]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium bg-[#111111] text-[#F7F7F5] px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            Start a project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-[#111111]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-[#F7F7F5] z-40 flex flex-col p-6 md:hidden border-t border-[#DCDCDC]"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-medium tracking-tight ${
                    pathname === link.href ? "text-[#111111]" : "text-[#686868]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block text-lg font-medium bg-[#111111] text-[#F7F7F5] px-8 py-4 rounded-full"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
