"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Users, Layers, Zap } from "lucide-react";

const stats = [
  { label: "Experience", value: "3 Months", Icon: Zap },
  { label: "Projects", value: "10+", Icon: Layers },
  { label: "Clients", value: "3+", Icon: Users },
  { label: "Technologies", value: "10+", Icon: Code2 },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 -right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
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
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              Me
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-40"
                style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(59,130,246,0.3)",
                  boxShadow: "0 0 40px rgba(59,130,246,0.15)",
                }}
              >
                <Image
                  src="/image/about.png"
                  alt="Aditya Gupta"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p style={{ color: "#94a3b8", lineHeight: "1.8" }}>
              I&apos;m an aspiring Full Stack Developer with 3 months of hands-on experience
              building modern web applications. I have a solid foundation in both frontend
              and backend technologies and I&apos;m passionate about creating clean,
              functional digital experiences.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: "1.8" }}>
              I work with React, Next.js, Node.js, and TypeScript, and I&apos;m constantly
              learning new technologies to grow as a developer. I&apos;m looking for
              opportunities where I can contribute and keep building my skills.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(59,130,246,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Icon size={20} className="mx-auto mb-2" style={{ color: "#3b82f6" }} />
                  <div
                    className="text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-sm mt-1" style={{ color: "#64748b" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
