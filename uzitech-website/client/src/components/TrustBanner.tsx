/* UziTech TrustBanner — Void Intelligence Design
 * Scrolling marquee of industry types served + trust signals
 */
import { motion } from "framer-motion";

const industries = [
  "Plumbing & HVAC",
  "Real Estate",
  "Medical Practices",
  "Law Firms",
  "Auto Dealerships",
  "Dental Studios",
  "Fitness Studios",
  "Roofing Companies",
  "Insurance Agencies",
  "Home Services",
  "Restaurants",
  "Retail Businesses",
];

export default function TrustBanner() {
  const doubled = [...industries, ...industries];

  return (
    <div
      className="relative py-5 overflow-hidden"
      style={{
        background: "rgba(37,99,235,0.05)",
        borderTop: "1px solid rgba(37,99,235,0.15)",
        borderBottom: "1px solid rgba(37,99,235,0.15)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050508, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #050508, transparent)" }}
      />

      {/* Label */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 px-4 py-1.5 rounded-full"
        style={{
          background: "rgba(5,5,8,0.9)",
          border: "1px solid rgba(37,99,235,0.3)",
        }}
      >
        <span
          className="text-xs font-semibold text-blue-400 tracking-widest uppercase whitespace-nowrap"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Trusted Across Industries
        </span>
      </div>

      {/* Marquee */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((industry, i) => (
          <div
            key={i}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <span
              className="w-1 h-1 rounded-full bg-blue-500/50"
            />
            <span
              className="text-sm text-white/30"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {industry}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
