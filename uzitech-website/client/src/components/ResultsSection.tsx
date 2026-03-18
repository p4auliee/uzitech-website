/* UziTech ResultsSection — Void Intelligence Design
 * Animated counter stats + case study cards
 * Parallax background image
 */
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import CounterNumber from "./CounterNumber";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 340, suffix: "%", label: "Average Lead Recovery Increase", color: "#2563EB" },
  { icon: Clock, value: 98, suffix: "%", label: "Calls Answered Within 3 Seconds", color: "#06B6D4" },
  { icon: Users, value: 500, suffix: "+", label: "Businesses Served Across Industries", color: "#818CF8" },
  { icon: DollarSign, value: 2.4, suffix: "M+", label: "Revenue Recovered for Clients", color: "#34D399", decimals: 1 },
];

const caseStudies = [
  {
    industry: "Plumbing & HVAC",
    metric: "4.2x",
    metricLabel: "More Booked Jobs",
    challenge: "Missing 60% of after-hours calls. Competitors were getting those leads.",
    solution: "Deployed Voice AI that answers every call, qualifies the job type, and books directly into their scheduling software.",
    tags: ["Voice AI", "Calendar Sync", "Lead Qualification"],
    color: "#2563EB",
  },
  {
    industry: "Real Estate Agency",
    metric: "87%",
    metricLabel: "Faster Lead Response",
    challenge: "Agents couldn't respond to email inquiries fast enough — hot leads went cold.",
    solution: "Email AI that responds to every inquiry within 90 seconds, qualifies buyer/seller intent, and schedules viewings automatically.",
    tags: ["Email AI", "CRM Integration", "Auto-Scheduling"],
    color: "#06B6D4",
  },
  {
    industry: "Medical Practice",
    metric: "$180k",
    metricLabel: "Annual Revenue Recovered",
    challenge: "Patients calling after hours got voicemail and booked with competitors instead.",
    solution: "24/7 Voice AI that handles appointment bookings, prescription refill requests, and urgent care routing.",
    tags: ["Voice AI", "HIPAA Compliant", "Appointment Booking"],
    color: "#818CF8",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-28 overflow-hidden" style={{ background: "#050508" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "800px",
            height: "400px",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Proven Results
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Real Numbers.
            <br />
            <span className="text-gradient">Real Businesses.</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            These aren't projections. These are results from live deployments.
          </p>
        </AnimatedSection>

        {/* Stats grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20" staggerDelay={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: `0 20px 40px ${stat.color}20` }}
                className="rounded-2xl p-6 text-center relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)` }}
                />
                <stat.icon size={20} className="mx-auto mb-3 opacity-60" style={{ color: stat.color }} />
                <div
                  className="text-4xl md:text-5xl mb-2"
                  style={{
                    color: stat.color,
                    fontFamily: "'Bebas Neue', sans-serif",
                    letterSpacing: "0.05em",
                    lineHeight: "1.1",
                    fontWeight: "700",
                  }}
                >
                  <CounterNumber
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2200}
                  />
                </div>
                <div
                  className="text-xs text-white/40 leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Case studies */}
        <AnimatedSection className="mb-8">
          <h3
            className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Case Studies
          </h3>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {caseStudies.map((cs, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${cs.color}60, transparent)` }}
                />

                {/* Industry */}
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: cs.color, fontFamily: "'Syne', sans-serif" }}
                >
                  {cs.industry}
                </div>

                {/* Metric */}
                <div className="mb-5">
                  <div
                    className="text-5xl leading-none"
                    style={{
                      color: cs.color,
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                      fontWeight: "700",
                    }}
                  >
                    {cs.metric}
                  </div>
                  <div className="text-sm text-white/50 mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {cs.metricLabel}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-3">
                  <div
                    className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    The Problem
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6 flex-1">
                  <div
                    className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    The Solution
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {cs.solution}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${cs.color}15`,
                        border: `1px solid ${cs.color}30`,
                        color: cs.color,
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
