"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "The Map", href: "#hero" },
  { label: "The Citadel", href: "#skills" },
  { label: "Valyrian Steel", href: "#projects" },
  { label: "Alliances", href: "#alliances" },
  { label: "Maester's Path", href: "#timeline" },
  { label: "Ravens", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/90 backdrop-blur-md border-b border-[rgba(212,175,55,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Sigil / Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <polygon
                  points="16,2 30,9 30,23 16,30 2,23 2,9"
                  stroke="var(--gold)"
                  strokeWidth="1"
                  fill="none"
                  className="transition-all duration-300 group-hover:stroke-[var(--gold-bright)]"
                />
                <polygon
                  points="16,7 25,12 25,20 16,25 7,20 7,12"
                  stroke="var(--gold-dim)"
                  strokeWidth="0.5"
                  fill="rgba(212,175,55,0.04)"
                />
                <circle cx="16" cy="16" r="2" fill="var(--gold)" className="transition-all duration-300 group-hover:r-3" />
              </svg>
            </div>
            <span
              className="font-cinzel text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              HR
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.06 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://my-portfolio-new-gamma-nine.vercel.app/HritikResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              <span>Scroll of Deeds</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px bg-[var(--gold)] origin-center"
                animate={{
                  width: menuOpen && i === 1 ? 0 : i === 1 ? "1.5rem" : "1.5rem",
                  rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y: menuOpen ? (i === 0 ? 6 : i === 2 ? -6 : 0) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ width: "1.5rem" }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-obsidian/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-lg tracking-[0.2em] uppercase"
                style={{ color: "var(--parchment-dim)" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ color: "var(--gold)", x: 8 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="https://my-portfolio-new-gamma-nine.vercel.app/HritikResume.pdf"
              target="_blank"
              className="btn-primary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Scroll of Deeds
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
