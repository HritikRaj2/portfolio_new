"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Project {
  id: string;
  name: string;
  epithet: string;
  description: string;
  tags: string[];
  accent: string;
  github: string;
  featured: boolean;
  icon: string;
}

const projects: Project[] = [
  {
    id: "smart-repo",
    name: "AI-Powered Dev Intelligence",
    epithet: "The All-Seeing Eye",
    description:
      "An AI-integrated repository analysis platform built with Spring Boot. Provides deep architecture insights, code health metrics, and intelligent refactor suggestions via Gemini API. Ingests entire codebases and synthesizes actionable intelligence.",
    tags: ["Spring Boot", "Gemini AI", "PostgreSQL", "REST APIs", "Next.js"],
    accent: "var(--gold)",
    github: "https://github.com/HritikRaj2",
    featured: true,
    icon: "🧠",
  },
  {
    id: "social-backend",
    name: "Social Media Backend",
    epithet: "The Grand Maester's Network",
    description:
      "Production-grade social platform backend with JWT authentication, post CRUD, friend connections, activity feeds, and a real-time notification engine. Optimized with database indexing and connection pooling.",
    tags: ["Spring Boot", "MySQL", "JWT", "REST APIs", "Hibernate"],
    accent: "var(--crimson-bright)",
    github: "https://github.com/HritikRaj2",
    featured: true,
    icon: "🔗",
  },
  {
    id: "gdg-blog",
    name: "GDG Community Blog",
    epithet: "The Citadel's Chronicle",
    description:
      "Collaborative blogging portal for GDG AKGEC with role-based access control (Admin, Author, Reader), a content management system, and community interaction features.",
    tags: ["Spring Boot", "MySQL", "RBAC", "REST APIs"],
    accent: "var(--winter-blue-bright)",
    github: "https://github.com/HritikRaj2",
    featured: true,
    icon: "📝",
  },
];

const minorProjects = [
  {
    icon: "📒",
    name: "Note Nest",
    description: "Rich text note-taking app with folder organization and real-time content management.",
    tags: ["Spring Boot", "MongoDB", "REST APIs"],
    github: "https://github.com/HritikRaj2",
  },
  {
    icon: "🏦",
    name: "Bank Management System",
    description: "Secure ATM-style banking app with full transaction management using core Java.",
    tags: ["Java", "Swing/AWT", "JDBC", "SQL"],
    github: "https://github.com/HritikRaj2",
  },
  {
    icon: "🌿",
    name: "Plant Disease Detection",
    description: "CNN-based AI system trained on 17,000+ images for accurate plant health diagnosis.",
    tags: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/HritikRaj2",
  },
];

/* ─── Tag Pill ─── */
function TagPill({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="font-cinzel text-[0.55rem] tracking-widest uppercase px-2.5 py-1 border"
      style={{
        color: color,
        borderColor: `${color}40`,
        background: `${color}0a`,
      }}
    >
      {label}
    </span>
  );
}

/* ─── Featured Project Card ─── */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      variants={cardVariants}
      className="card-steel corner-ornament rounded-sm overflow-hidden"
    >
      <div className={`grid md:grid-cols-2 ${isEven ? "" : "md:grid-flow-dense"}`}>
        {/* Visual panel */}
        <div
          className={`relative h-56 md:h-auto flex items-center justify-center overflow-hidden ${isEven ? "" : "md:col-start-2"}`}
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${project.accent}18 0%, rgba(11,12,16,0.9) 80%)`,
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(212,175,55,0.04) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(212,175,55,0.04) 40px)",
            }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10 text-6xl opacity-40"
            whileHover={{ scale: 1.15, opacity: 0.7 }}
            transition={{ duration: 0.4 }}
          >
            {project.icon}
          </motion.div>

          {/* Accent corner line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${project.accent}60, transparent)`,
            }}
          />
        </div>

        {/* Content panel */}
        <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? "" : "md:col-start-1"}`}>
          <p
            className="font-cinzel text-[0.55rem] tracking-[0.35em] uppercase mb-2"
            style={{ color: project.accent, opacity: 0.7 }}
          >
            {project.epithet}
          </p>
          <h3
            className="font-cinzel font-bold text-xl md:text-2xl tracking-wide mb-3"
            style={{ color: "var(--parchment)" }}
          >
            {project.name}
          </h3>
          <p
            className="font-inter text-sm leading-relaxed mb-6"
            style={{ color: "var(--parchment-dim)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <TagPill key={tag} label={tag} color={project.accent} />
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[0.6rem] py-2 px-4"
              style={{ borderColor: `${project.accent}40`, color: project.accent }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View Source
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Minor Project Card ─── */
function MinorCard({
  project,
}: {
  project: (typeof minorProjects)[0];
}) {
  return (
    <motion.article
      variants={cardVariants}
      className="card-steel corner-ornament rounded-sm p-6 flex flex-col h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-2xl opacity-50">{project.icon}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300"
          style={{ color: "var(--parchment-ghost)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--parchment-ghost)")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
      <h4
        className="font-cinzel font-semibold text-sm tracking-wider mb-2"
        style={{ color: "var(--parchment)" }}
      >
        {project.name}
      </h4>
      <p
        className="font-inter text-xs leading-relaxed mb-4 flex-1"
        style={{ color: "var(--parchment-dim)" }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
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
    </motion.article>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--obsidian)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 10% 60%, rgba(138,3,3,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-16">
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(212,175,55,0.2))",
            }}
          />
          <span className="section-label">III — The Forge</span>
          <div
            className="h-px flex-1"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(212,175,55,0.2))",
            }}
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
            Forging{" "}
            <span style={{ color: "var(--gold)" }}>Valyrian Steel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-garamond italic text-lg max-w-lg mx-auto"
            style={{ color: "var(--parchment-dim)" }}
          >
            Builds of consequence. Systems that endure.
          </motion.p>
          <div className="divider-gold" />
        </div>

        {/* Featured Projects */}
        <motion.div
          className="flex flex-col gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Minor Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p
            className="section-label text-center mb-8"
            style={{ color: "var(--parchment-ghost)" }}
          >
            Other Noteworthy Builds
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {minorProjects.map((project) => (
              <MinorCard key={project.name} project={project} />
            ))}
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/HritikRaj2?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <span>View All Forged Works</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
