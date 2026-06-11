"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Aditya4234",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aditya-gupta-a7372b36a",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      dot.className = "absolute rounded-full";
      const size = Math.random() * 3 + 1;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.background = i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#06b6d4" : "#6366f1";
      dot.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      dot.style.animation = `float-particle ${Math.random() * 8 + 6}s ease-in-out infinite`;
      dot.style.animationDelay = `${Math.random() * 5}s`;
      el.appendChild(dot);
    }
    return () => { el.innerHTML = ""; };
  }, []);

  return <div ref={ref} className="absolute inset-0 pointer-events-none z-0" />;
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      <Particles />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/3 -left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm" style={{ color: "#94a3b8" }}>Open to Work</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ color: "#f1f5f9" }}
            >
              Hi, I&apos;m{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4, #6366f1)",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 4s ease infinite",
                }}
              >
                Aditya Gupta
              </span>
              <br />
              Full Stack Developer
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg mt-6 leading-relaxed max-w-xl"
              style={{ color: "#94a3b8" }}
            >
              I build modern, scalable web applications with cutting-edge technologies. Passionate about creating seamless user experiences and robust backend systems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 30px rgba(59,130,246,0.5)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,130,246,0.3)"}
              >
                View My Work
                <ArrowDown size={16} className="group-hover:animate-bounce transition-all" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  color: "#e2e8f0",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
              >
                <ExternalLink size={16} />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-12"
            >
              <span className="text-xs tracking-widest uppercase" style={{ color: "#475569" }}>Connect</span>
              <span className="w-12 h-px" style={{ background: "linear-gradient(90deg, #475569, transparent)" }} />
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ color: "#64748b" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#3b82f6"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#64748b"}
                  aria-label={label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4, #6366f1)",
                  animation: "pulse-glow 3s ease-in-out infinite",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden"
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

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(5,5,5,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="text-2xl font-bold" style={{ color: "#3b82f6" }}>10+</span>
                <span className="text-xs ml-1" style={{ color: "#64748b" }}>Projects</span>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(5,5,5,0.8)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span className="text-2xl font-bold" style={{ color: "#06b6d4" }}>10+</span>
                <span className="text-xs ml-1" style={{ color: "#64748b" }}>Tools</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { delay: 1.5, duration: 1.5, repeat: Infinity } }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#475569" }}>Scroll</span>
          <div
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1px solid rgba(71,85,105,0.5)" }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce"
              style={{ background: "#3b82f6" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
