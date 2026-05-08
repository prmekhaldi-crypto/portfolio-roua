import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9997] h-[2px] origin-left bg-primary"
      style={{ scaleX: scrollYProgress, boxShadow: "0 0 12px var(--primary)" }}
    />
  );
}
