"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: "#050505" }}>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#f1f5f9" }}>
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              }}
            >
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4)" }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Have a project in mind? Let&apos;s work together to make something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(59,130,246,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(34,197,94,0.2)" }}
              >
                <Send size={24} style={{ color: "#22c55e" }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#e2e8f0" }}>Message Sent!</h3>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                    Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors placeholder:opacity-50"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#e2e8f0",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm transition-colors placeholder:opacity-50"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#e2e8f0",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                  Subject <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-colors placeholder:opacity-50"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: "#e2e8f0",
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>
                  Message <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl text-sm transition-colors placeholder:opacity-50 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: "#e2e8f0",
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "#3b82f6"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                  boxShadow: "0 4px 15px rgba(59,130,246,0.3)",
                }}
                onMouseEnter={(e) => { if (!loading) e.currentTarget.style.boxShadow = "0 6px 25px rgba(59,130,246,0.5)"; }}
                onMouseLeave={(e) => { if (!loading) e.currentTarget.style.boxShadow = "0 4px 15px rgba(59,130,246,0.3)"; }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { icon: Mail, label: "adityagupta200807@gmail.com", href: "mailto:adityagupta200807@gmail.com" },
            { icon: MapPin, label: "Lucknow, India", href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#e2e8f0"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
            >
              <item.icon size={18} style={{ color: "#3b82f6" }} />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
