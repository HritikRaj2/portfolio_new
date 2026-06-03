"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Skill Data ─── */
interface SkillGroup {
  sigil: string;
  house: string;
  title: string;
  color: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    sigil: "⚔️",
    house: "The Iron Tongue",
    title: "Languages",
    color: "var(--gold)",
    skills: [
      { name: "Java", level: 95 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "Python", level: 75 },
      { name: "C / C++", level: 80 },
    ],
  },
  {
    sigil: "🔧",
    house: "The Forge",
    title: "Backend",
    color: "var(--crimson-bright)",
    skills: [
      { name: "Spring Boot", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "Microservices", level: 75 },
      { name: "Hibernate / JPA", level: 85 },
      { name: "JDBC", level: 88 },
    ],
  },
  {
    sigil: "🗄️",
    house: "The Vault",
    title: "Databases & Infra",
    color: "var(--winter-blue-bright)",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Docker", level: 65 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
  {
    sigil: "🏰",
    house: "The Outer Wall",
    title: "Frontend & Tools",
    color: "var(--gold-dim)",
    skills: [
      { name: "Next.js", level: 72 },
      { name: "React", level: 78 },
      { name: "Tailwind CSS", level: 75 },
      { name: "HTML / CSS", level: 88 },
      { name: "Postman", level: 88 },
    ],
  },
];

/* ─── Also experienced with ─── */
const otherTools = [
  "Vert.x", "JSP", "Swing/AWT", "JUnit", "Maven",
  "Gradle", "TensorFlow", "Jupyter", "Linux", "IntelliJ IDEA",
];

/* ─── Single Skill Bar ─── */
function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline mb-1.5">
        <span
          className="font-inter text-xs"
          style={{ color: "var(--parchment-dim)" }}
        >
          {name}
        </span>
        <span
          className="font-cinzel text-[0.6rem] tracking-widest"
          style={{ color: "var(--parchment-ghost)" }}
        >
          {level}
        </span>
      </div>
      <div
        className="h-px w-full rounded-full overflow-hidden"
        style={{ background: "rgba(212,175,55,0.08)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}44 0%, ${color} 100%)`,
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─── Skill Card ─── */
function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="card-torch corner-ornament rounded-sm p-7"
    >
      {/* Card header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p
            className="font-cinzel text-[0.55rem] tracking-[0.3em] uppercase mb-1"
            style={{ color: "var(--parchment-ghost)" }}
          >
            {group.house}
          </p>
          <h3
            className="font-cinzel font-semibold text-base tracking-wider"
            style={{ color: group.color }}
          >
            {group.title}
          </h3>
        </div>
        <span className="text-2xl opacity-60">{group.sigil}</span>
      </div>

      {/* Skill bars */}
      {group.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={group.color}
          delay={index * 0.1 + i * 0.08}
        />
      ))}
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--void)" }}
    >
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(212,175,55,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Horizontal rule top */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div
            className="h-px flex-1"
            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2))" }}
          />
          <span className="section-label">II — The Citadel</span>
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
            Arsenal of a <span style={{ color: "var(--gold)" }}>Maester</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-garamond italic text-lg max-w-lg mx-auto"
            style={{ color: "var(--parchment-dim)" }}
          >
            Every chain in the Citadel is earned. Each skill, forged under pressure.
          </motion.p>
          <div className="divider-gold" />
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </motion.div>

        {/* Also experienced with */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p
            className="section-label mb-6"
            style={{ color: "var(--parchment-ghost)" }}
          >
            Also sworn to
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {otherTools.map((tool) => (
              <motion.span
                key={tool}
                className="font-inter text-xs px-3 py-1.5 border transition-all duration-300 cursor-default"
                style={{
                  color: "var(--parchment-ghost)",
                  borderColor: "rgba(212,175,55,0.1)",
                  background: "rgba(212,175,55,0.02)",
                }}
                whileHover={{
                  color: "var(--gold)",
                  borderColor: "rgba(212,175,55,0.35)",
                  background: "rgba(212,175,55,0.05)",
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
