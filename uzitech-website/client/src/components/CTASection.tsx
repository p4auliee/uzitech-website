/* UziTech CTASection — Void Intelligence Design
 * Dramatic CTA with background image, contact form
 * Parallax background, glow effects
 */
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Zap, CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663452799463/Y5FV2YF43sdmeKoFkSBmgR/uzitech-cta-bg-TYtQdd6q3ddvsG292AVmez.webp";

const benefits = [
  "Free 30-minute strategy consultation",
  "Custom AI roadmap for your business",
  "No contracts, cancel anytime",
  "Live in 5–7 business days",
];

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: "#050508" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${CTA_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/90 via-transparent to-[#050508]/90" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Copy */}
            <AnimatedSection direction="left">
              <div className="flex justify-start mb-5">
                <div className="section-label">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Get Started
                </div>
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Stop Losing Leads.
                <br />
                <span className="text-gradient">Start Automating.</span>
              </h2>
              <p
                className="text-lg text-white/55 mb-8 leading-relaxed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Book a free consultation. We'll audit your communication gaps, show you exactly
                where you're losing revenue, and build a custom AI roadmap for your business.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-10">
                {benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={18} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-white/70" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {b}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Contact channels */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Or reach us directly
                </div>
                {[
                  { icon: Mail, label: "hello@uzitech.net", href: "mailto:hello@uzitech.net" },
                  { icon: Phone, label: "Book a call via the form →", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <item.icon size={16} className="text-blue-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection direction="right" delay={0.2}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl p-10 text-center"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    border: "1px solid rgba(37,99,235,0.25)",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    We'll Be In Touch!
                  </h3>
                  <p className="text-white/55" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Thanks for reaching out. A member of the UziTech team will contact you within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Book Your Free Consultation
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Your Name", key: "name", placeholder: "John Smith", type: "text" },
                      { label: "Business Name", key: "business", placeholder: "Smith & Co.", type: "text" },
                      { label: "Email Address", key: "email", placeholder: "john@business.com", type: "email" },
                      { label: "Phone Number", key: "phone", placeholder: "+1 (555) 000-0000", type: "tel" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          className="block text-xs font-semibold text-white/40 mb-1.5 uppercase tracking-wider"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={formData[field.key as keyof typeof formData] as string}
                          onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-white/40 mb-2.5 uppercase tracking-wider"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Services Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Voice AI", icon: Phone },
                        { label: "Email AI", icon: Mail },
                        { label: "SMS AI", icon: MessageSquare },
                      ].map((s) => {
                        const active = formData.services.includes(s.label);
                        return (
                          <button
                            key={s.label}
                            type="button"
                            onClick={() => toggleService(s.label)}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              background: active ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.04)",
                              border: active ? "1px solid rgba(37,99,235,0.5)" : "1px solid rgba(255,255,255,0.08)",
                              color: active ? "#60A5FA" : "rgba(255,255,255,0.5)",
                            }}
                          >
                            <s.icon size={14} />
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-semibold text-white/40 mb-1.5 uppercase tracking-wider"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      Tell Us About Your Business
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What's your biggest communication challenge right now?"
                      value={formData.message}
                      onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/25 outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(37,99,235,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-base font-bold text-white rounded-xl relative overflow-hidden group"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center gap-2">
                      <Zap size={16} />
                      Book My Free Consultation
                    </span>
                  </motion.button>

                  <p className="text-xs text-white/25 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    No spam. No pressure. Just a conversation about your business.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
