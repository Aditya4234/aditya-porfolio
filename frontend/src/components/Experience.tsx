"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    period: "Mar 2026 - Present",
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
                <div className="hidden md:block md:w-1/2" />
                <div
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 mt-1.5 z-10"
                  style={{
                    background: "#3b82f6",
                    borderColor: "#050505",
                    boxShadow: "0 0 10px rgba(59,130,246,0.5)",
                  }}
                />
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10">
                  <div
                    className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(59,130,246,0.1)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        color: "#93c5fd",
                      }}
                    >
                      {exp.period}
                    </div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: "#e2e8f0" }}>{exp.role}</h3>
                    <p className="text-sm mb-3" style={{ color: "#3b82f6" }}>{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm flex items-start gap-2" style={{ color: "#94a3b8" }}>
                          <span className="mt-1 flex-shrink-0" style={{ color: "#3b82f6" }}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
