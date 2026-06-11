"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Senior Developer, TechStart",
    content:
      "Aditya picked up our codebase quickly and started contributing meaningful PRs within his first week. His React skills are solid and he writes clean, well-structured TypeScript.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Team Lead, Freelance Project",
    content:
      "I managed Aditya on a client project and was impressed by his ownership. He delivered the frontend ahead of schedule, communicated proactively, and handled feedback really well.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Cohort Lead, Web Dev Bootcamp",
    content:
      "Aditya was one of the standout developers in our bootcamp. He consistently built complete projects end-to-end and was always helping peers debug their code during sessions.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
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
            What{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              People Say
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(59,130,246,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: "#94a3b8" }}>
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="pt-4" style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}>
                <p className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "#64748b" }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
