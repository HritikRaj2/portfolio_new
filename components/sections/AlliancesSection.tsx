"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Alliance {
  org: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  prs?: string;
  badge?: string;
}

const alliances: Alliance[] = [
  {
    org: "Linux Foundation",
    role: "LFX Mentee — Open Hyphae",
    period: "2025 — Present",
    description:
      "Selected as a mentee to architect microservices and manage Vert.x distributed systems within Open Hyphae — a Sony CSL project under the Linux Foundation.",
    tags: ["Microservices", "Vert.x", "Java", "Distributed Systems"],
    color: "var(--winter-blue-bright)",
    icon: "🐧",
    badge: "Mentee",
  },
  {
    org: "NASA JPF",
    role: "Open Source Contributor",
    period: "2025 — Present",
    description:
      "Contributing to Java Pathfinder — NASA's formal verification tool for JVM analysis. Focused on customizing the JVM to detect deadlocks and concurrency bugs. 5+ PRs merged.",
    tags: ["JVM Internals", "Java", "Concurrency", "Bytecode"],
    color: "var(--crimson-bright)",
    icon: "🚀",
    prs: "5+ PRs Merged",
  },
  {
    org: "Eclipse Foundation",
    role: "Contributor — SW360",
    period: "2025 — Present",
    description:
      "Contributing to SW360, a Spring Boot-based open source compliance management tool under Eclipse Foundation. Working on backend services and REST API improvements.",
    tags: ["Spring Boot", "REST APIs", "Java", "Open Source"],
    color: "var(--gold)",
    icon: "🔓",
  },
  {
    org: "GDG AKGEC",
    role: "Web Developer — Member",
    period: "June 2025 — Present",
    description:
      "Developing scalable RESTful APIs using Spring Boot for community-driven projects. Collaborating on open-source initiatives and knowledge-sharing within the developer community.",
    tags: ["Spring Boot", "REST APIs", "Team Collaboration"],
    color: "var(--winter-blue-bright)",
    icon: "🟢",
  },
];

/* ─── Banner Card ─── */
function BannerCard({ alliance }: { alliance: Alliance }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[420px] corner-ornament rounded-sm overflow-hidden"
      style={{
        background: "var(--gradient-steel)",
        border: `1px solid ${alliance.color}22`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(to right, transparent, ${alliance.color}80, transparent)`,
        }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{alliance.icon}</span>
              {alliance.badge && (
                <span
                  className="font-cinzel text-[0.5rem] tracking-widest uppercase px-2 py-0.5 border"
                  style={{
                    color: alliance.color,
                    borderColor: `${alliance.color}40`,
                    background: `${alliance.color}0f`,
                  }}
                >
                  {alliance.badge}
                </span>
              )}
              {alliance.prs && (
                <span
                  className="font-cinzel text-[0.5rem] tracking-widest uppercase px-2 py-0.5 border"
                  style={{
                    color: "var(--gold)",
                    borderColor: "rgba(212,175,55,0.3)",
                    background: "rgba(212,175,55,0.05)",
                  }}
                >
                  {alliance.prs}
                </span>
              )}
            </div>
            <h3
              className="font-cinzel font-semibold text-base tracking-wider"
              style={{ color: "var(--parchment)" }}
            >
              {alliance.org}
            </h3>
            <p
              className="font-garamond italic text-sm mt-0.5"
              style={{ color: alliance.color, opacity: 0.85 }}
            >
              {alliance.role}
            </p>
          </div>
          <span
            className="font-cinzel text-[0.55rem] tracking-widest uppercase text-right"
            style={{ color: "var(--parchment-ghost)" }}
          >
            {alliance.period}
          </span>
        </div>

        <p
          className="font-inter text-xs leading-relaxed mb-5"
          style={{ color: "var(--parchment-dim)" }}
        >
          {alliance.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {alliance.tags.map((tag) => (
            <span
              key={tag}
              className="font-cinzel text-[0.5rem] tracking-widest uppercase px-2 py-0.5 border"
              style={{
                color: "var(--parchment-ghost)",
                borderColor: "rgba(212,175,55,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(to right, transparent, ${alliance.color}40, transparent)`,
        }}
      />
    </div>
  );
}

export default function AlliancesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!trackRef.current || !horizontalRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth;
      const viewWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewWidth + 96; // 96 = padding

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Fade-in cards as they enter viewport during horizontal scroll
      const cards = track.querySelectorAll(".alliance-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0.3, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.05,
            scrollTrigger: {
              trigger: horizontalRef.current,
              start: "top top",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="alliances"
      ref={sectionRef}
      style={{ background: "var(--void)" }}
    >
      {/* ─── Section Header (not pinned) ─── */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <div className="flex items-center gap-4 mb-16">
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(212,175,55,0.2))",
            }}
          />
          <span className="section-label">IV — Forging Alliances</span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(212,175,55,0.2))",
            }}
          />
        </div>

        <div ref={titleRef} className="text-center">
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
            Open Source{" "}
            <span style={{ color: "var(--gold)" }}>Alliances</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-garamond italic text-lg max-w-lg mx-auto"
            style={{ color: "var(--parchment-dim)" }}
          >
            Sworn to the great houses of open source. Each contribution, a pledge of fealty.
          </motion.p>
          <div className="divider-gold" />
        </div>
      </div>

      {/* ─── Horizontal Scroll Track ─── */}
      <div ref={horizontalRef} className="overflow-hidden relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--void), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--void), transparent)",
          }}
        />

        {/* Scroll label */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
          <span
            className="font-cinzel text-[0.5rem] tracking-[0.3em] uppercase"
            style={{ color: "var(--parchment-ghost)", writingMode: "vertical-rl" }}
          >
            Scroll to Advance
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, var(--gold-dim), transparent)",
            }}
          />
        </div>

        {/* Banner Track */}
        <div
          ref={trackRef}
          className="horizontal-track flex items-center py-20 pl-[8vw] pr-[20vw] will-change-transform"
        >
          {/* Decorative torch dividers between cards */}
          {alliances.map((alliance, i) => (
            <div key={alliance.org} className="flex items-center gap-8 alliance-card">
              <BannerCard alliance={alliance} />
              {/* Torch between cards */}
              {i < alliances.length - 1 && (
                <div className="flex-shrink-0 flex flex-col items-center gap-1 opacity-30 torch-flicker">
                  <div
                    className="w-px h-16"
                    style={{
                      background:
                        "linear-gradient(to top, var(--gold), transparent)",
                    }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <div
                    className="w-px h-16"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--gold), transparent)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ─── Section Footer ─── */}
      <div className="max-w-7xl mx-auto px-6 pb-32 pt-8">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,175,55,0.15), transparent)",
          }}
        />
      </div>
    </section>
  );
}
