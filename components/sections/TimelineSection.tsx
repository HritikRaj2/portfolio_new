"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
  accent: string;
  tags?: string[];
  status?: "completed" | "active" | "future";
}

const events: TimelineEvent[] = [
  {
    year: "Aug 2023",
    title: "Enrolled at AKGEC",
    subtitle: "B.Tech CSE — Ajay Kumar Garg Engineering College",
    description:
      "Began the journey at AKGEC, Ghaziabad. Chose Computer Science Engineering with a focus on backend systems and software architecture. The Great Ranging begins.",
    side: "left",
    accent: "var(--winter-blue-bright)",
    tags: ["B.Tech CSE", "AKGEC", "Ghaziabad"],
    status: "completed",
  },
  {
    year: "2023–2024",
    title: "First Sword Forged",
    subtitle: "Core Java & Backend Foundations",
    description:
      "Mastered core Java fundamentals: OOP, data structures, JDBC, and SQL. Built the Bank Management System — a fully-featured ATM simulation — as the first major project.",
    side: "right",
    accent: "var(--gold)",
    tags: ["Java", "JDBC", "SQL", "Swing/AWT"],
    status: "completed",
  },
  {
    year: "2024",
    title: "Spring Boot Initiation",
    subtitle: "REST APIs, Microservices & Backend Engineering",
    description:
      "Began building with Spring Boot, Hibernate, and REST APIs. Delivered the Social Media Backend with JWT auth, feed systems, and notification engines. Crossed 1 year of active backend development.",
    side: "left",
    accent: "var(--crimson-bright)",
    tags: ["Spring Boot", "Hibernate", "JWT", "MySQL"],
    status: "completed",
  },
  {
    year: "Early 2025",
    title: "Open Source — The First Raven",
    subtitle: "NASA JPF & SW360 Contributions",
    description:
      "First open source contributions land. Sent pull requests to NASA JPF — working deep inside JVM internals to detect deadlocks and concurrency issues. 5+ PRs merged into the core repository. Simultaneously contributing to SW360.",
    side: "right",
    accent: "var(--gold)",
    tags: ["NASA JPF", "JVM", "SW360", "Spring Boot"],
    status: "completed",
  },
  {
    year: "2025",
    title: "Linux Foundation Mentee",
    subtitle: "LFX Program — Open Hyphae (Sony CSL)",
    description:
      "Competitively selected for the LFX Mentorship Program. Working within Open Hyphae — a Sony CSL initiative under the Linux Foundation — on Vert.x microservices and distributed systems architecture.",
    side: "left",
    accent: "var(--winter-blue-bright)",
    tags: ["Linux Foundation", "Vert.x", "Microservices", "Sony CSL"],
    status: "active",
  },
  {
    year: "June 2025",
    title: "GDG AKGEC — Web Developer",
    subtitle: "Community Engineering Role",
    description:
      "Joined Google Developer Group AKGEC as a Web Developer. Building RESTful APIs for community platforms and contributing to open-source initiatives with the local developer ecosystem.",
    side: "right",
    accent: "var(--gold)",
    tags: ["GDG", "Spring Boot", "REST APIs"],
    status: "active",
  },
  {
    year: "2027",
    title: "B.Tech Graduation",
    subtitle: "The Maester's Chain Completed",
    description:
      "Expected completion of B.Tech Computer Science Engineering from AKGEC. Four years of code, architecture, open source, and relentless building — the chain is complete. The realm awaits.",
    side: "left",
    accent: "var(--gold)",
    tags: ["Graduation", "B.Tech CSE"],
    status: "future",
  },
];

/* ─── Event Card ─── */
function EventCard({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div
      className={`relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start mb-12 md:mb-16`}
    >
      {/* Left content (or spacer) */}
      <div className={event.side === "left" ? "" : "hidden md:block"}>
        {event.side === "left" && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:text-right"
          >
            <EventContent event={event} />
          </motion.div>
        )}
      </div>

      {/* Center dot + year */}
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div
          className="timeline-dot mx-auto"
          style={{
            borderColor: event.accent,
            boxShadow: `0 0 12px ${event.accent}40`,
          }}
        />
        <span
          className="font-cinzel text-[0.55rem] tracking-widest uppercase text-center whitespace-nowrap"
          style={{ color: event.accent, opacity: 0.9 }}
        >
          {event.year}
        </span>
      </div>

      {/* Right content (or spacer) */}
      <div className={event.side === "right" ? "" : "hidden md:block"}>
        {event.side === "right" && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <EventContent event={event} />
          </motion.div>
        )}
      </div>

      {/* Mobile: always render content below */}
      <div className="md:hidden col-span-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <EventContent event={event} />
        </motion.div>
      </div>
    </div>
  );
}

function EventContent({ event }: { event: TimelineEvent }) {
  return (
    <div
      className="corner-ornament rounded-sm p-5 md:p-6"
      style={{
        background: "rgba(26,26,31,0.6)",
        border: `1px solid ${event.accent}18`,
      }}
    >
      {/* Status indicator */}
      {event.status === "active" && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-cinzel text-[0.5rem] tracking-[0.25em] uppercase" style={{ color: "var(--parchment-ghost)" }}>
            Currently
          </span>
        </div>
      )}
      {event.status === "future" && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold-dim)" }} />
          <span className="font-cinzel text-[0.5rem] tracking-[0.25em] uppercase" style={{ color: "var(--parchment-ghost)" }}>
            Destined
          </span>
        </div>
      )}

      <h3
        className="font-cinzel font-semibold text-sm tracking-wide mb-1"
        style={{ color: "var(--parchment)" }}
      >
        {event.title}
      </h3>
      <p
        className="font-garamond italic text-sm mb-2"
        style={{ color: event.accent, opacity: 0.85 }}
      >
        {event.subtitle}
      </p>
      <p
        className="font-inter text-xs leading-relaxed mb-4"
        style={{ color: "var(--parchment-dim)" }}
      >
        {event.description}
      </p>
      {event.tags && (
        <div className="flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="font-cinzel text-[0.48rem] tracking-widest uppercase px-2 py-0.5 border"
              style={{
                color: "var(--parchment-ghost)",
                borderColor: `${event.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the line drawing downward as user scrolls
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--ash)" }}
    >
      {/* Ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-16">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2))" }}
          />
          <span className="section-label">V — The Maester's Path</span>
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.2))" }}
          />
        </div>

        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
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
            The Maester's{" "}
            <span style={{ color: "var(--gold)" }}>Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-garamond italic text-lg max-w-lg mx-auto"
            style={{ color: "var(--parchment-dim)" }}
          >
            A chronicle forged semester by semester. Each link in the chain, earned.
          </motion.p>
          <div className="divider-gold" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The scrolling vertical line — GSAP animates scaleY */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "rgba(212,175,55,0.06)" }}
          >
            <div
              ref={lineRef}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--gold-dim) 0%, var(--gold) 50%, var(--gold-dim) 100%)",
                transformOrigin: "top center",
                transformBox: "fill-box",
              }}
            />
          </div>

          {/* Events */}
          {events.map((event, i) => (
            <EventCard key={event.year + event.title} event={event} index={i} />
          ))}

          {/* End cap */}
          <div className="flex flex-col items-center mt-8">
            <div
              className="w-4 h-4 border-2 rounded-full flex items-center justify-center"
              style={{
                borderColor: "var(--gold)",
                background: "var(--ash)",
                boxShadow: "0 0 20px rgba(212,175,55,0.4)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "var(--gold)" }}
              />
            </div>
            <p
              className="font-cinzel text-[0.6rem] tracking-[0.3em] uppercase mt-3"
              style={{ color: "var(--gold)", opacity: 0.7 }}
            >
              ✦ &nbsp; To be continued &nbsp; ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
