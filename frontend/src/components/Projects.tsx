"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OTP Mart",
    description: "A platform for buying temporary virtual numbers for OTP verification on WhatsApp, Telegram, Facebook, and other services with auto-refund and real-time status.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Razorpay"],
    icon: "📱",
    gradient: "from-blue-600 to-cyan-600",
    links: {
      live: "https://otpmarket-six.vercel.app/",
      github: null,
    },
  },
  {
    title: "ShopVerse",
    description: "A premium e-commerce platform featuring product catalog, category browsing, shopping cart, and a modern shopping experience with trusted brand partnerships.",
    tags: ["Next.js", "React", "CSS", "Vercel"],
    icon: "🛒",
    gradient: "from-purple-600 to-pink-600",
    links: {
      live: "https://ecomerce-5tu8.vercel.app/",
      github: null,
    },
  },
  {
    title: "Sai Ranju Welfare Society",
    description: "A full-featured NGO website for a registered welfare society with donation system, volunteer registration, program management, gallery, and blog.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    icon: "🤝",
    gradient: "from-emerald-600 to-teal-600",
    links: {
      live: "https://welfare-society-rho.vercel.app/",
      github: null,
    },
  },
  {
    title: "SBI Finance Bank",
    description: "A modern banking landing page for SBI Finance with loan calculators, service cards, branch locator, and a professional corporate finance UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: "🏦",
    gradient: "from-amber-600 to-orange-600",
    links: {
      live: "https://sbi-finance-bank.vercel.app/",
      github: null,
    },
  },
];

const gradients: Record<string, string> = {
  "from-blue-600 to-cyan-600": "linear-gradient(135deg, #2563eb, #0891b2)",
  "from-purple-600 to-pink-600": "linear-gradient(135deg, #9333ea, #db2777)",
  "from-emerald-600 to-teal-600": "linear-gradient(135deg, #059669, #0d9488)",
  "from-amber-600 to-orange-600": "linear-gradient(135deg, #d97706, #ea580c)",
};

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  "Next.js": { bg: "rgba(0,0,0,0.2)", text: "#e2e8f0", border: "rgba(255,255,255,0.1)" },
  "TypeScript": { bg: "rgba(49,120,198,0.15)", text: "#93c5fd", border: "rgba(49,120,198,0.2)" },
  "Tailwind CSS": { bg: "rgba(6,182,212,0.12)", text: "#67e8f9", border: "rgba(6,182,212,0.2)" },
  "React": { bg: "rgba(59,130,246,0.12)", text: "#93c5fd", border: "rgba(59,130,246,0.2)" },
  "CSS": { bg: "rgba(251,146,60,0.15)", text: "#fdba74", border: "rgba(251,146,60,0.2)" },
  "Vercel": { bg: "rgba(255,255,255,0.06)", text: "#a1a1aa", border: "rgba(255,255,255,0.08)" },
  "Razorpay": { bg: "rgba(6,182,212,0.12)", text: "#67e8f9", border: "rgba(6,182,212,0.2)" },
  "Payment Gateway": { bg: "rgba(52,211,153,0.12)", text: "#6ee7b7", border: "rgba(52,211,153,0.2)" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ background: "#050505", scrollMarginTop: "5rem" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Featured{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ color: "#64748b" }}>
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"
                style={{
                  background: `${gradients[project.gradient]}33`,
                  transform: "translateY(4px) scale(0.96)",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(59,130,246,0.1)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.25)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="relative h-40 flex items-center justify-center overflow-hidden"
                  style={{
                    background: gradients[project.gradient],
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)",
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-6xl filter drop-shadow-lg">{project.icon}</span>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4"
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(2px)" }}
                  >
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <ExternalLink size={20} style={{ color: "#fff" }} />
                    </a>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#fff" }}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "#e2e8f0" }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "#94a3b8" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => {
                      const colors = tagColors[tag] || { bg: "rgba(59,130,246,0.1)", text: "#93c5fd", border: "rgba(59,130,246,0.15)" };
                      return (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: colors.bg,
                            color: colors.text,
                            border: `1px solid ${colors.border}`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="pt-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(59,130,246,0.08)" }}>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2"
                      style={{ color: "#60a5fa" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#93c5fd"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#60a5fa"}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
                        style={{ color: "#64748b" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#e2e8f0"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
