/* UziTech Navbar — Void Intelligence Design
 * Glassmorphism navbar that becomes more opaque on scroll
 * Syne font, electric blue accent
 */
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 5, 8, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {/* Logo mark */}
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 opacity-90" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative flex items-center justify-center w-full h-full">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L15.5 5.5V12.5L9 16L2.5 12.5V5.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="9" cy="9" r="2.5" fill="white"/>
                </svg>
              </div>
            </div>
            <span
              className="text-xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Uzi<span className="text-gradient">Tech</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav("#contact")}
              className="relative px-5 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden group"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-opacity" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Book a Free Call</span>
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-0 right-0 z-40 border-b border-white/8"
          style={{ background: "rgba(5, 5, 8, 0.97)", backdropFilter: "blur(20px)" }}
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-medium text-white/70 hover:text-white transition-colors py-2 border-b border-white/5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="mt-2 w-full py-3 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book a Free Call
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
