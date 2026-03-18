/* UziTech HowItWorksSection — Void Intelligence Design
 * Animated numbered steps with connecting line
 * Alternating left/right layout on desktop
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Phone, Settings, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "We Audit Your Communication Gaps",
    description:
      "We start with a free consultation to map out exactly where your business is losing leads — missed calls, slow email responses, unanswered texts. We identify the highest-impact opportunities first.",
    detail: "Free 30-minute strategy call",
  },
  {
    number: "02",
    icon: Settings,
    title: "We Build Your Custom AI Agents",
    description:
      "Our team configures AI agents specifically trained on your business — your services, pricing, FAQs, tone of voice, and booking process. No generic bots. Your AI sounds like you.",
    detail: "Typically deployed in 5–7 days",
  },
  {
    number: "03",
    icon: Zap,
    title: "Your AI Goes Live",
    description:
      "We integrate seamlessly with your existing phone system, email, and CRM. From day one, every missed call is answered, every email gets a reply, and every text is responded to — instantly.",
    detail: "Zero disruption to your workflow",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Watch Your Revenue Grow",
    description:
      "You get full visibility into every conversation your AI handles. Track recovered leads, booked appointments, and response rates. We continuously optimize your agents as your business grows.",
    detail: "Monthly performance reports",
  },
];

export default function HowItWorksSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden" style={{ background: "#07070C" }}>
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "700px",
            height: "700px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <div className="flex justify-center mb-5">
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              The Process
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            From Setup to{" "}
            <span className="text-gradient">Revenue</span>
            <br />
            in Days, Not Months.
          </h2>
          <p
            className="text-lg text-white/50 max-w-2xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A predictable, proven roadmap to deploying AI that actually works for your business.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              className="w-full origin-top"
              style={{
                height: "100%",
                background: "linear-gradient(to bottom, #2563EB, #06B6D4)",
                scaleY: isInView ? 1 : 0,
                transition: "transform 2s ease-in-out",
              }}
            />
          </div>

          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {steps.map((step, i) => (
              <StaggerItem key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl p-7 relative group"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {/* Step number */}
                      <motion.div
                        className={`text-6xl mb-4 leading-none transition-all duration-300 ${i % 2 === 0 ? "md:text-right" : ""}`}
                        style={{
                          color: "#2563EB",
                          fontFamily: "'Bebas Neue', sans-serif",
                          letterSpacing: "0.05em",
                          fontWeight: "700",
                        }}
                        whileHover={{
                          opacity: 1,
                          textShadow: "0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(6,182,212,0.6)",
                        }}
                        initial={{ opacity: 0.3 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3
                        className="text-xl md:text-2xl font-bold text-white mb-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-white/50 leading-relaxed mb-4"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {step.description}
                      </p>
                      <div
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {step.detail}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="relative flex-shrink-0 hidden md:flex items-center justify-center" style={{ width: "0px" }}>
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="absolute w-12 h-12 rounded-full flex items-center justify-center -translate-x-1/2 z-10"
                      style={{
                        background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                        boxShadow: "0 0 20px rgba(37,99,235,0.5)",
                      }}
                    >
                      <step.icon size={18} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
    </section>
  );
}
