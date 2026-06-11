"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OTP Mart",
    description: "A platform for buying temporary virtual numbers for OTP verification on WhatsApp, Telegram, Facebook, and other services with auto-refund and real-time status.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Razorpay"],
    image: "📱",
    links: { live: "https://otpmarket-six.vercel.app/" },
  },
  {
    title: "ShopVerse",
    description: "A premium e-commerce platform featuring product catalog, category browsing, shopping cart, and a modern shopping experience with trusted brand partnerships.",
    tags: ["Next.js", "React", "CSS", "Vercel"],
    image: "🛒",
    links: { live: "https://ecomerce-5tu8.vercel.app/" },
  },
  {
    title: "Sai Ranju Welfare Society",
    description: "A full-featured NGO website for a registered welfare society with donation system, volunteer registration, program management, gallery, and blog.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    image: "🤝",
    links: { live: "https://welfare-society-rho.vercel.app/" },
  },
  {
    title: "SBI Finance Bank",
    description: "A modern banking landing page for SBI Finance with loan calculators, service cards, branch locator, and a professional corporate finance UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "🏦",
    links: { live: "https://sbi-finance-bank.vercel.app/" },
  },

];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden" style={{ background: "#050505" }}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(59,130,246,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#e2e8f0" }}>{project.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      color: "#93c5fd",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-2" style={{ borderTop: "1px solid rgba(59,130,246,0.1)" }}>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: "#3b82f6" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#93c5fd"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#3b82f6"}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
