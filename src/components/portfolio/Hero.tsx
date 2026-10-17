import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 pb-16"
    >
      <div
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden
      />
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] glow-lavender blur-3xl" aria-hidden />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] glow-lime blur-3xl" aria-hidden />

      <h1 className="relative z-10 text-center font-display text-[clamp(3.5rem,13vw,11rem)] font-bold uppercase leading-[0.78] tracking-[-0.06em]">
        <span className="sr-only">Avinash Tiwari</span>
        <span aria-hidden className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            AVINASH
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block text-gradient"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            TIWARI
          </motion.span>
        </span>
      </h1>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
        aria-label="Scroll to projects"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-lime animate-scroll-dot" />
        </span>
        <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
}
