/* UziTech ScrollProgressBar — Void Intelligence Design
 * Thin electric blue progress bar at top of viewport that tracks scroll position
 */
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        scaleX,
        height: "2px",
        background: "linear-gradient(90deg, #2563EB, #06B6D4)",
        boxShadow: "0 0 8px rgba(6, 182, 212, 0.6)",
      }}
    />
  );
}
