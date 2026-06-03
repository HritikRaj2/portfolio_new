"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <footer
      ref={ref}
      className="relative py-12 px-6 overflow-hidden"
      style={{
        background: "var(--void)",
        borderTop: "1px solid rgba(212,175,55,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.15))" }}
          />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <polygon
              points="10,1 19,6 19,14 10,19 1,14 1,6"
              stroke="rgba(212,175,55,0.4)"
              strokeWidth="0.8"
              fill="rgba(212,175,55,0.04)"
            />
            <circle cx="10" cy="10" r="2" fill="rgba(212,175,55,0.4)" />
          </svg>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.15))" }}
          />
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase"
            style={{ color: "var(--parchment-ghost)" }}
          >
            Designed & Forged by{" "}
            <span style={{ color: "var(--gold)", opacity: 0.8 }}>Hritik Raj</span>
          </p>
          <p
            className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase"
            style={{ color: "var(--parchment-ghost)" }}
          >
            © 2026 — All Rights Reserved
          </p>
          <p
            className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase"
            style={{ color: "var(--parchment-ghost)" }}
          >
            Next.js · Framer Motion · GSAP
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
