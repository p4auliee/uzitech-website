/* UziTech WhyUsSection — Void Intelligence Design
 * Why AI vs. hiring staff comparison + key differentiators
 */
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { X, Check } from "lucide-react";

const AI_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452799463/Y5FV2YF43sdmeKoFkSBmgR/uzitech-phone-ai-7LLR5jAVDxF7Qw5HCLGG9A.webp";

const comparison = [
  { label: "Available 24/7", human: false, ai: true },
  { label: "Responds in under 3 seconds", human: false, ai: true },
  { label: "Handles unlimited simultaneous contacts", human: false, ai: true },
  { label: "Never calls in sick", human: false, ai: true },
  { label: "No salary, benefits, or training costs", human: false, ai: true },
  { label: "Consistent quality every interaction", human: false, ai: true },
  { label: "Scales instantly with your growth", human: false, ai: true },
];

const differentiators = [
  {
    title: "Built For Your Business",
    description: "We don't install generic chatbots. Every AI agent is trained on your specific services, pricing, FAQs, and brand voice.",
    color: "#2563EB",
  },
  {
    title: "Seamless Integration",
    description: "Works with your existing phone system, email provider, and CRM. No ripping out what already works.",
    color: "#06B6D4",
  },
  {
    title: "Human When It Matters",
    description: "Our AI knows when to escalate. Complex issues get routed to you instantly, with full context already captured.",
    color: "#818CF8",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#07070C" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(37,99,235,0.2), 0 40px 80px rgba(0,0,0,0.5)" }}
              >
                <img
                  src={AI_VISUAL}
                  alt="AI Voice Agent"
                  className="w-full aspect-square object-cover"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070C]/60 to-transparent" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 -right-5 glass-card px-5 py-4"
                style={{ animation: "float-up 4s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <div className="text-sm font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                      AI Agent Online
                    </div>
                    <div className="text-xs text-white/40" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Handling 12 conversations
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-blue-500/20"
                    style={{
                      width: `${200 + i * 80}px`,
                      height: `${200 + i * 80}px`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      animation: `pulse-ring 3s ease-out infinite`,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Copy + comparison */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex justify-start mb-5">
              <div className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Why UziTech AI
              </div>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AI Outperforms
              <br />
              <span className="text-gradient">Hiring Every Time.</span>
            </h2>
            <p
              className="text-white/50 mb-8 leading-relaxed"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              A full-time receptionist costs $35k–$55k per year and still can't answer calls at 2am.
              UziTech AI costs a fraction of that and never sleeps.
            </p>

            {/* Comparison table */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Header */}
              <div
                className="grid grid-cols-3 px-4 py-3 text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                <div className="text-white/30">Capability</div>
                <div className="text-center text-white/30">Human Staff</div>
                <div className="text-center text-cyan-400">UziTech AI</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 px-4 py-3 items-center"
                  style={{
                    borderBottom: i < comparison.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                  }}
                >
                  <div className="text-sm text-white/60" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {row.label}
                  </div>
                  <div className="flex justify-center">
                    <X size={16} className="text-red-400/60" />
                  </div>
                  <div className="flex justify-center">
                    <Check size={16} className="text-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Differentiators */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {differentiators.map((d, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${d.color}60, transparent)` }}
                />
                <div
                  className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: `${d.color}15`, border: `1px solid ${d.color}30` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {d.title}
                </h3>
                <p
                  className="text-sm text-white/50 leading-relaxed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {d.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
    </section>
  );
}
