/* UziTech Footer — Void Intelligence Design */
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t py-16"
      style={{
        background: "#030306",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 opacity-90" />
                <div className="relative flex items-center justify-center w-full h-full">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L15.5 5.5V12.5L9 16L2.5 12.5V5.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="9" r="2.5" fill="white"/>
                  </svg>
                </div>
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Uzi<span className="text-gradient">Tech</span>
              </span>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              AI-powered communication agents that answer every call, email, and text for your business — 24/7, instantly.
            </p>
            <div className="flex items-center gap-3">
              {[Phone, Mail, MessageSquare].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors"
                  style={{
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                  onClick={() => scrollTo("#contact")}
                >
                  <Icon size={15} className="text-blue-400" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Services
            </div>
            <ul className="space-y-2.5">
              {["Voice AI", "Email AI", "SMS AI", "Custom Integrations"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div
              className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Company
            </div>
            <ul className="space-y-2.5">
              {[
                { label: "How It Works", id: "#how-it-works" },
                { label: "Results", id: "#results" },
                { label: "Testimonials", id: "#testimonials" },
                { label: "Contact", id: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs text-white/25"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            © {year} UziTech. All rights reserved. Domain: uzitech.net
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <button
                key={item}
                className="text-xs text-white/25 hover:text-white/50 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
