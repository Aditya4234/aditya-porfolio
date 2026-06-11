"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 76 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 72 },
      { name: "AWS", level: 70 },
      { name: "CI / CD", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 -left-1/4 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.12 }}
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(59,130,246,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                }}
              >
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium" style={{ color: "#e2e8f0" }}>{skill.name}</span>
                      <span style={{ color: "#64748b" }}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
