"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "hritikraj723@gmail.com",
    href: "mailto:hritikraj723@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    accent: "var(--gold)",
  },
  {
    label: "GitHub",
    value: "HritikRaj2",
    href: "https://github.com/HritikRaj2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    accent: "var(--parchment-dim)",
  },
  {
    label: "LinkedIn",
    value: "hritik-raj-paradox",
    href: "https://www.linkedin.com/in/hritik-raj-paradox",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "var(--winter-blue-bright)",
  },
  {
    label: "Phone",
    value: "+91 9457718488",
    href: "tel:+919457718488",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 9.11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    accent: "var(--parchment-ghost)",
  },
];

const socialLinks = [
  { label: "LeetCode", href: "https://leetcode.com/illogicalCoder20", short: "LC" },
  { label: "Codeforces", href: "https://codeforces.com/profile/illogicalCoder", short: "CF" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hritik-raj-paradox", short: "LI" },
  { label: "GitHub", href: "https://github.com/HritikRaj2", short: "GH" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--obsidian)" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-16">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2))" }}
          />
          <span className="section-label">VI — Send a Raven</span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.2))" }}
          />
        </div>

        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--parchment)",
              letterSpacing: "0.08em",
            }}
          >
            Get In <span style={{ color: "var(--gold)" }}>Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-garamond italic text-lg max-w-xl mx-auto"
            style={{ color: "var(--parchment-dim)" }}
          >
            Whether it's an opportunity, a collaboration, or simply a word — all ravens are welcome.
            <br />
            Usually respond within the sun's rising.
          </motion.p>
          <div className="divider-gold" />
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center mb-16"
        >
          <a
            href="mailto:hritikraj723@gmail.com"
            className="btn-primary text-sm py-4 px-10 inline-flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
            Say Hello
          </a>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 border transition-all duration-300 rounded-sm"
              style={{
                borderColor: "rgba(212,175,55,0.1)",
                background: "rgba(26,26,31,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${link.accent}40`;
                e.currentTarget.style.background = `${link.accent}08`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.1)";
                e.currentTarget.style.background = "rgba(26,26,31,0.6)";
              }}
            >
              <span
                className="transition-colors duration-300"
                style={{ color: link.accent, opacity: 0.7 }}
              >
                {link.icon}
              </span>
              <div>
                <p
                  className="font-cinzel text-[0.55rem] tracking-[0.25em] uppercase mb-0.5"
                  style={{ color: "var(--parchment-ghost)" }}
                >
                  {link.label}
                </p>
                <p
                  className="font-inter text-sm"
                  style={{ color: "var(--parchment-dim)" }}
                >
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px mb-10"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)",
          }}
        />

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-8"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-cinzel text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--parchment-ghost)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--parchment-ghost)")}
              title={social.label}
            >
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
