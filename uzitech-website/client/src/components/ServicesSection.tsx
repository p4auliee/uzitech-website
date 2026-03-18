/* UziTech ServicesSection — Void Intelligence Design
 * Three core services with animated cards, icons, and hover effects
 * Scroll-triggered stagger animation
 */
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ChevronRight } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: Phone,
    color: "#2563EB",
    glow: "rgba(37,99,235,0.3)",
    label: "Voice AI",
    title: "Never Miss a Call Again",
    description:
      "Our AI voice agent picks up every missed call instantly, qualifies the lead, answers questions about your business, and books appointments directly into your calendar — all in a natural, human-like conversation.",
    features: ["Answers 100% of missed calls", "Natural conversation flow", "Books appointments automatically", "Works 24/7, no days off"],
    stat: "100%",
    statLabel: "Call Answer Rate",
  },
  {
    icon: Mail,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
    label: "Email AI",
    title: "Instant Email Responses",
    description:
      "Stop losing clients to slow email replies. Our AI reads incoming emails, understands context, and sends professional, personalized responses within minutes — keeping your leads warm and your reputation sharp.",
    features: ["Responds in under 2 minutes", "Personalized to each sender", "Handles FAQs automatically", "Escalates complex queries to you"],
    stat: "<2 min",
    statLabel: "Average Response Time",
  },
  {
    icon: MessageSquare,
    color: "#818CF8",
    glow: "rgba(129,140,248,0.3)",
    label: "SMS & Text AI",
    title: "Instant Text Replies",
    description:
      "Customers expect fast text responses. Our AI handles all inbound SMS and messaging app inquiries, keeps conversations moving, and converts interest into booked appointments — automatically.",
    features: ["Instant SMS replies", "Handles multiple platforms", "Lead qualification via text", "Seamless handoff to your team"],
    stat: "24/7",
    statLabel: "Always Available",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 overflow-hidden" style={{ background: "#050508" }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-100px",
            right: "-100px",
            background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <div className="flex justify-center mb-5">
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Core Services
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Three Channels.
            <br />
            <span className="text-gradient">Zero Missed Opportunities.</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            UziTech covers every way a customer tries to reach you — calls, emails, and texts —
            so no lead slips through the cracks while you're busy running your business.
          </p>
        </AnimatedSection>

        {/* Service cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${service.glow}` }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl p-8 h-full flex flex-col border-gradient group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `radial-gradient(circle at center, ${service.glow}, transparent)` }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: service.color, fontFamily: "'Syne', sans-serif" }}
                >
                  {service.label}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/50 leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5">
                      <ChevronRight size={14} style={{ color: service.color, flexShrink: 0 }} />
                      <span
                        className="text-sm text-white/60"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stat */}
                <div
                  className="pt-6 border-t flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div>
                <div
                  className="text-4xl md:text-5xl mb-2"
                  style={{
                    color: service.color,
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "0.05em",
                    lineHeight: "1.1",
                    fontWeight: "700",
                  }}
                >
                  {service.stat}
                </div>
                    <div className="text-xs text-white/40 mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {service.statLabel}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-sm font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: service.color, fontFamily: "'Syne', sans-serif" }}
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn more <ChevronRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
