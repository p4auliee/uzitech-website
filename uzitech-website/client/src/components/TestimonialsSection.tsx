/* UziTech TestimonialsSection — Void Intelligence Design
 * Testimonial cards with avatar, quote, and business info
 * Horizontal scroll marquee effect on mobile
 */
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Before UziTech, we were losing at least 3–4 jobs a week to missed calls. Now our AI answers every single one, even at 2am. We've added $12k a month in revenue we were just throwing away.",
    name: "Marcus T.",
    title: "Owner, Elite Plumbing Services",
    initials: "MT",
    color: "#2563EB",
    stars: 5,
  },
  {
    quote: "The email AI is unreal. Leads that used to go cold because we couldn't respond fast enough are now booking viewings automatically. My agents can focus on closing, not chasing.",
    name: "Sarah K.",
    title: "Principal Agent, Horizon Realty",
    initials: "SK",
    color: "#06B6D4",
    stars: 5,
  },
  {
    quote: "I was skeptical about AI handling patient calls, but the setup was seamless and the AI sounds completely natural. Our no-show rate dropped 40% because appointments are confirmed automatically.",
    name: "Dr. James R.",
    title: "Medical Director, ClearPath Clinic",
    initials: "JR",
    color: "#818CF8",
    stars: 5,
  },
  {
    quote: "We tried other AI tools and they felt robotic. UziTech's AI actually understands context and responds like a real person. Our customers don't even realize they're talking to AI.",
    name: "Lisa M.",
    title: "CEO, Prestige Auto Detailing",
    initials: "LM",
    color: "#34D399",
    stars: 5,
  },
  {
    quote: "The ROI was immediate. Within the first week, the AI recovered 11 leads that would have gone to voicemail. The system paid for itself in day one.",
    name: "David C.",
    title: "Founder, Summit Roofing Co.",
    initials: "DC",
    color: "#F59E0B",
    stars: 5,
  },
  {
    quote: "UziTech didn't just set up a bot — they understood our business, our tone, and our customers. The AI feels like an extension of our team, not a replacement.",
    name: "Rachel B.",
    title: "Director, Bloom Dental Studio",
    initials: "RB",
    color: "#EC4899",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3 3.3 12.3l.7-4.1-3-2.9 4.2-.7L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden" style={{ background: "#07070C" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Client Stories
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Businesses That Stopped
            <br />
            <span className="text-gradient">Losing Leads.</span>
          </h2>
          <p
            className="text-lg text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Don't take our word for it. Here's what business owners say after deploying UziTech AI.
          </p>
        </AnimatedSection>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -5, boxShadow: `0 20px 50px ${t.color}15` }}
                className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.color}50, transparent)` }}
                />

                {/* Quote icon */}
                <Quote size={24} className="mb-4 opacity-20" style={{ color: t.color }} />

                {/* Stars */}
                <div className="mb-4">
                  <StarRating count={t.stars} />
                </div>

                {/* Quote text */}
                <p
                  className="text-white/70 leading-relaxed flex-1 mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}
                >
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs text-white/40"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {t.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
    </section>
  );
}
