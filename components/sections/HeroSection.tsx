"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

/* ─── Animation Variants ─── */
const mapBurnVariants: Variants = {
  initial: { opacity: 1 },
  reveal: {
    opacity: 0,
    transition: { duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 1.0 },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut", delay: 1.4 },
  },
};

/* ─── SVG Map Lines (procedural "sketched map" effect) ─── */
const MapLines = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 1440 900"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Continent outlines — abstract map-like shapes */}
    <motion.path
      d="M 200 300 C 280 250, 350 320, 420 280 S 520 200, 600 260 S 700 340, 780 290"
      stroke="rgba(212,175,55,0.18)"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
    />
    <motion.path
      d="M 100 500 C 180 460, 240 530, 310 490 S 400 440, 480 500 S 560 570, 620 530"
      stroke="rgba(212,175,55,0.1)"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path
      d="M 860 180 C 920 140, 1010 200, 1060 160 S 1180 100, 1240 160 S 1320 240, 1380 200"
      stroke="rgba(212,175,55,0.14)"
      strokeWidth="1"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 3.2, ease: "easeInOut", delay: 0.3 }}
    />
    <motion.path
      d="M 900 600 C 960 550, 1040 620, 1100 580 S 1220 510, 1280 570 S 1360 650, 1420 610"
      stroke="rgba(74,107,130,0.15)"
      strokeWidth="0.8"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 4, ease: "easeInOut", delay: 0.6 }}
    />
    {/* Grid lines */}
    {[150, 300, 450, 600, 750].map((y, i) => (
      <motion.line
        key={`h-${i}`}
        x1="0" y1={y} x2="1440" y2={y}
        stroke="rgba(212,175,55,0.04)"
        strokeWidth="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 * i }}
      />
    ))}
    {[240, 480, 720, 960, 1200].map((x, i) => (
      <motion.line
        key={`v-${i}`}
        x1={x} y1="0" x2={x} y2="900"
        stroke="rgba(212,175,55,0.04)"
        strokeWidth="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 * i }}
      />
    ))}
    {/* Location markers */}
    {[
      { cx: 420, cy: 280 },
      { cx: 780, cy: 290 },
      { cx: 1060, cy: 160 },
      { cx: 620, cy: 530 },
    ].map((dot, i) => (
      <motion.g key={i}>
        <motion.circle
          cx={dot.cx} cy={dot.cy} r="3"
          fill="rgba(212,175,55,0.5)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5 + i * 0.2 }}
        />
        <motion.circle
          cx={dot.cx} cy={dot.cy} r="8"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="0.5"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.7 + i * 0.2 }}
        />
      </motion.g>
    ))}
    {/* Compass rose (bottom right) */}
    <motion.g
      transform="translate(1300, 750)"
      initial={{ opacity: 0, rotate: -30 }}
      animate={{ opacity: 0.3, rotate: 0 }}
      transition={{ duration: 2, delay: 1.2 }}
    >
      <circle cx="0" cy="0" r="40" stroke="rgba(212,175,55,0.4)" strokeWidth="0.5" fill="none" />
      <circle cx="0" cy="0" r="30" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" fill="none" />
      <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5" />
      <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5" />
      <line x1="-28" y1="-28" x2="28" y2="28" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
      <line x1="28" y1="-28" x2="-28" y2="28" stroke="rgba(212,175,55,0.25)" strokeWidth="0.5" />
      <polygon points="0,-18 4,-6 0,0 -4,-6" fill="rgba(212,175,55,0.6)" />
      <text x="-3" y="-22" fill="rgba(212,175,55,0.7)" fontSize="6" fontFamily="serif">N</text>
    </motion.g>
  </svg>
);

/* ─── Burn / Vignette Overlay ─── */
const BurnOverlay = () => (
  <motion.div
    className="absolute inset-0 z-10 pointer-events-none"
    variants={mapBurnVariants}
    initial="initial"
    animate="reveal"
    style={{
      background:
        "radial-gradient(ellipse at 50% 50%, rgba(11,12,16,0) 20%, rgba(11,12,16,0.85) 70%, rgba(11,12,16,1) 100%)",
    }}
  />
);

/* ─── Stats Row ─── */
const stats = [
  { value: "1.5+", label: "Years Building" },
  { value: "5+", label: "PRs @ NASA JPF" },
  { value: "3", label: "Major Projects" },
  { value: "4", label: "Open Source Orgs" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden map-texture"
    >
      {/* Deep background radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,107,130,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(138,3,3,0.05) 0%, transparent 50%)",
        }}
      />

      {/* Map SVG Layer */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <MapLines />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-5"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(11,12,16,0.7) 100%)",
        }}
      />

      {/* Burn reveal overlay */}
      <BurnOverlay />

      {/* ─── Main Content ─── */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={lineVariants}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
          />
          <span className="section-label text-[0.6rem]" style={{ color: "var(--parchment-dim)" }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* House name line */}
        <motion.p
          variants={lineVariants}
          className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: "var(--gold-dim)" }}
        >
          ✦ &nbsp; Backend Engineer &nbsp; ✦
        </motion.p>

        {/* Main name */}
        <motion.h1
          variants={lineVariants}
          className="font-cinzel font-black leading-none tracking-widest mb-4"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "var(--parchment)",
          }}
        >
          <span style={{ color: "var(--parchment)" }}>HRITIK</span>
          <br />
          <span
            className="text-glow-gold"
            style={{ color: "var(--gold)" }}
          >
            RAJ
          </span>
        </motion.h1>

        {/* Ornament */}
        <motion.div variants={lineVariants} className="flex items-center justify-center gap-4 my-6">
          <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to right, transparent, var(--gold-dim))" }} />
          <svg width="16" height="16" viewBox="0 0 16 16">
            <polygon points="8,1 15,5 15,11 8,15 1,11 1,5" stroke="var(--gold)" strokeWidth="0.8" fill="rgba(212,175,55,0.1)" />
            <circle cx="8" cy="8" r="2" fill="var(--gold)" />
          </svg>
          <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(to left, transparent, var(--gold-dim))" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={lineVariants}
          className="font-garamond text-xl md:text-2xl italic mb-2"
          style={{ color: "var(--parchment-dim)" }}
        >
          Java · Spring Boot · Microservices · System Design
        </motion.p>

        <motion.p
          variants={lineVariants}
          className="font-inter text-sm mb-10 max-w-xl mx-auto"
          style={{ color: "var(--parchment-ghost)", lineHeight: "1.8" }}
        >
          B.Tech CSE at AKGEC (2023–2027) &middot; Linux Foundation Mentee &middot; NASA JPF Contributor
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={lineVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#projects" className="btn-primary">
            <span>View the Forge</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L6 11M6 11L2 7M6 11L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="https://my-portfolio-new-gamma-nine.vercel.app/HritikResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Scroll of Deeds
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={glowVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.08)] max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-obsidian px-6 py-5 text-center group"
              data-cursor-hover
            >
              <p
                className="font-cinzel font-bold text-2xl mb-1 transition-colors duration-300 group-hover:text-glow-gold"
                style={{ color: "var(--gold)" }}
              >
                {stat.value}
              </p>
              <p
                className="font-inter text-[0.65rem] tracking-widest uppercase"
                style={{ color: "var(--parchment-ghost)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Social links — left sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute left-8 bottom-12 hidden lg:flex flex-col items-center gap-5 z-20"
      >
        {[
          { href: "https://github.com/HritikRaj2", label: "GH", title: "GitHub" },
          { href: "https://www.linkedin.com/in/hritik-raj-paradox", label: "LI", title: "LinkedIn" },
          { href: "https://leetcode.com/illogicalCoder20", label: "LC", title: "LeetCode" },
          { href: "https://codeforces.com/profile/illogicalCoder", label: "CF", title: "Codeforces" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={link.title}
            className="font-cinzel text-[0.55rem] tracking-widest transition-all duration-300 hover:scale-110"
            style={{ color: "var(--parchment-ghost)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--parchment-ghost)")}
          >
            {link.label}
          </a>
        ))}
        <div className="h-16 w-px" style={{ background: "linear-gradient(to bottom, var(--gold-dim), transparent)" }} />
      </motion.div>

      {/* Email — right sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-4 z-20"
      >
        <a
          href="mailto:hritikraj723@gmail.com"
          className="font-cinzel text-[0.55rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
          style={{
            color: "var(--parchment-ghost)",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          hritikraj723@gmail.com
        </a>
        <div className="h-16 w-px" style={{ background: "linear-gradient(to bottom, var(--gold-dim), transparent)" }} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase"
          style={{ color: "var(--parchment-ghost)" }}
        >
          Scroll
        </span>
        <div className="scroll-indicator">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(212,175,55,0.3)" strokeWidth="1" />
            <motion.rect
              x="6.5" y="4" width="3" height="6" rx="1.5"
              fill="var(--gold)"
              animate={{ y: [4, 12, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
