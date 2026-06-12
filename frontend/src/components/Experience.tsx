"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ExternalLink, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "Mar 2026 - Present",
    location: "Remote",
    icon: "💻",
    highlights: ["4+ Projects Delivered", "End-to-End Development", "Client Collaboration"],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    description: [
      "Building end-to-end web applications with Next.js, React, Node.js, and PostgreSQL",
      "Designed responsive UIs with Tailwind CSS, Framer Motion animations, and TypeScript",
      "Developed RESTful APIs with authentication, rate limiting, and database optimization",
      "Deployed and monitored applications on Vercel with automated CI/CD pipelines",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    period: "Mar 2026 - Jun 2026",
    location: "Bangalore, India",
    icon: "🚀",
    highlights: ["30% Faster Dev Cycles", "Component Library", "Agile Team"],
    tags: ["React", "TypeScript", "Tailwind CSS", "React Query", "Zustand"],
    description: [
      "Developed and maintained responsive web applications using React, TypeScript, and Tailwind CSS",
      "Built reusable component libraries reducing development time by 30%",
      "Integrated REST APIs and managed state using React Query and Zustand",
      "Collaborated with cross-functional teams in an agile environment with 2-week sprints",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden" style={{ background: "#050505", scrollMarginTop: "5rem" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-1/3 -right-1/4 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#f1f5f9" }}>
            Work{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#64748b" }}>
            My professional journey building products and solving real-world problems.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, #3b82f6, #06b6d4, transparent)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-0"
              >
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  {index % 2 === 0 && (
                    <div className="md:pt-16">
                      <div className="text-5xl mb-4 inline-block">{exp.icon}</div>
                    </div>
                  )}
                </div>

                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-[3px] transform -translate-x-1/2 mt-2 z-10"
                  style={{
                    background: "#050505",
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 0 4px rgba(59,130,246,0.15), 0 0 15px rgba(59,130,246,0.3)",
                  }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full"
                    style={{ background: "#3b82f6" }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
                    className="relative group"
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1), rgba(99,102,241,0.15))",
                        transform: "translateY(4px) scale(0.98)",
                      }}
                    />
                    <div
                      className="relative p-6 rounded-2xl transition-all duration-500 group-hover:-translate-y-1"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                        border: "1px solid rgba(59,130,246,0.1)",
                        backdropFilter: "blur(16px)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                        e.currentTarget.style.boxShadow = "0 8px 40px rgba(59,130,246,0.12), inset 0 1px 0 rgba(59,130,246,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(59,130,246,0.1)";
                        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
                      }}
                    >
                      <div
                        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(to bottom, #3b82f6, #06b6d4)" }}
                      />

                      <div className="flex items-start justify-between mb-5 pl-3">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 relative overflow-hidden"
                            style={{
                              background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1))",
                              border: "1px solid rgba(59,130,246,0.15)",
                            }}
                          >
                            <div
                              className="absolute inset-0 opacity-20"
                              style={{
                                background: "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.4), transparent)",
                              }}
                            />
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold" style={{ color: "#f1f5f9" }}>{exp.role}</h3>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <p className="text-sm font-medium" style={{ color: "#60a5fa" }}>{exp.company}</p>
                              <span className="text-xs" style={{ color: "#475569" }}>•</span>
                              <span className="text-xs" style={{ color: "#64748b" }}>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap hidden sm:inline-block"
                            style={{
                              background: "rgba(59,130,246,0.08)",
                              color: "#93c5fd",
                              border: "1px solid rgba(59,130,246,0.12)",
                            }}
                          >
                            <Calendar size={10} className="inline mr-1 -mt-0.5" />
                            {exp.period}
                          </span>
                          {exp.period.includes("Present") && (
                            <span
                              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                              style={{
                                background: "rgba(34,197,94,0.15)",
                                color: "#4ade80",
                                border: "1px solid rgba(34,197,94,0.2)",
                              }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="sm:hidden flex items-center gap-1.5 mb-4 text-xs pl-3" style={{ color: "#64748b" }}>
                        <Calendar size={11} />
                        {exp.period}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4 pl-3">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                            style={{
                              background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08))",
                              color: "#a5b4fc",
                              border: "1px solid rgba(99,102,241,0.15)",
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div
                        className="rounded-xl p-4 mb-4 ml-3 transition-all duration-300 group-hover:bg-opacity-80"
                        style={{
                          background: "rgba(0,0,0,0.2)",
                          border: "1px solid rgba(255,255,255,0.03)",
                        }}
                      >
                        <ul className="space-y-2.5">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="text-sm flex items-start gap-2.5"
                              style={{ color: "#94a3b8" }}
                            >
                              <CheckCircle2 size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#3b82f6" }} />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pl-3 pt-3" style={{ borderTop: "1px solid rgba(59,130,246,0.06)" }}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded text-[11px] font-medium transition-all duration-200 hover:bg-opacity-20"
                            style={{
                              background: "rgba(59,130,246,0.06)",
                              color: "#64748b",
                              border: "1px solid rgba(59,130,246,0.06)",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#93c5fd"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className={`hidden md:block md:w-1/2 ${index % 2 !== 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  {index % 2 !== 0 && (
                    <div className="md:pt-16">
                      <div className="text-5xl mb-4 inline-block">{exp.icon}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
