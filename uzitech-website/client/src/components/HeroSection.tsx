/* UziTech HeroSection — Void Intelligence Design
 * Full-viewport hero with:
 * - Animated particle field background
 * - Hero image with blue glow
 * - Staggered headline reveal
 * - Floating glassmorphism stat cards (like pylonai.net)
 * - Scroll indicator
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleField from "./ParticleField";
import { Phone, Mail, MessageSquare, ArrowDown, Zap } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452799463/Y5FV2YF43sdmeKoFkSBmgR/uzitech-hero-bg-8dmSHR9FjaumsyVaNHdDg8.webp";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleCTA = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleLearn = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Particle field */}
      <ParticleField count={90} />

      {/* Hero background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/80 via-transparent to-[#050508]/80" />
      </motion.div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            animation: "orb-float-1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            top: "30%",
            right: "10%",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            animation: "orb-float-2 15s ease-in-out infinite",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container pt-28 pb-16"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI-Powered Communication
            </div>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Your Business{" "}
              <span className="text-gradient">Never</span>
              <br />
              Misses Again.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            UziTech deploys AI agents that answer every missed call, respond to every email,
            and reply to every text — 24/7, instantly, so you never lose another lead.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCTA}
              className="relative px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden group"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <Zap size={16} />
                Book a Free Consultation
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLearn}
              className="px-8 py-4 text-base font-semibold text-white/80 hover:text-white rounded-xl border border-white/12 hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Syne', sans-serif", background: "rgba(255,255,255,0.04)" }}
            >
              See How It Works
            </motion.button>
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Services image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden border border-white/8"
            style={{ boxShadow: "0 0 80px rgba(37,99,235,0.15), 0 40px 80px rgba(0,0,0,0.5)" }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663452799463/Y5FV2YF43sdmeKoFkSBmgR/uzitech-services-bg-nwNA4vrhpJ2LSZJ5cha6Dt.webp"
              alt="AI Communication Services"
              className="w-full h-64 md:h-80 object-cover"
              style={{ filter: "brightness(0.7)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent" />

            {/* Floating cards overlay */}
            <div className="absolute inset-0 flex items-center justify-around px-8">
              {[
                { icon: Phone, label: "Missed Calls", value: "100%", sub: "Answered" },
                { icon: Mail, label: "Email Response", value: "<2 min", sub: "Avg Reply Time" },
                { icon: MessageSquare, label: "Text Replies", value: "24/7", sub: "Always On" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 + i * 0.15 }}
                  className="glass-card border-gradient px-5 py-4 text-center hidden md:block"
                  style={{ animation: `float-up ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                >
                  <item.icon size={20} className="text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{item.value}</div>
                  <div className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</div>
                  <div className="text-xs text-cyan-400/70 mt-0.5">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="absolute -left-4 top-1/2 -translate-y-1/2 glass-card px-4 py-3 hidden lg:flex items-center gap-3"
            style={{ animation: "float-up 5s ease-in-out infinite" }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div>
              <div className="text-xs font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>AI Active</div>
              <div className="text-xs text-white/40">3 agents running</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="absolute -right-4 top-1/3 glass-card px-4 py-3 hidden lg:flex items-center gap-3"
            style={{ animation: "float-up 6s ease-in-out infinite", animationDelay: "1s" }}
          >
            <div className="text-2xl font-bold text-gradient" style={{ fontFamily: "'Syne', sans-serif" }}>+340%</div>
            <div>
              <div className="text-xs font-semibold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Lead Recovery</div>
              <div className="text-xs text-white/40">vs. no AI</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
