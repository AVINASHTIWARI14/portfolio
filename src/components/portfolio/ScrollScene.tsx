import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Adds a subtle, scroll-linked camera movement to each major page section.
 * Motion is intentionally restrained and disabled for reduced-motion users.
 */
export function ScrollScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center", "end center", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.84, 1, 1, 0.84]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [26, 0, 0, -18]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.985, 1, 1, 0.992]);

  return (
    <motion.div
      ref={ref}
      className="scroll-scene"
      style={reduce ? undefined : { opacity, y, scale }}
    >
      {children}
    </motion.div>
  );
}
