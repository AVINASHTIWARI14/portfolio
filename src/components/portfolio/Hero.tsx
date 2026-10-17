import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Orbit() {
  const chips = ["{ ai }", "O(log n)", "<UI/>", "dp[i]", "fetch()", "∑"];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px] [container-type:inline-size]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full border border-dashed border-border animate-orbit">
        {chips.slice(0, 3).map((chip, i) => (
          <span
            key={chip}
            className="absolute left-1/2 top-1/2 -ml-10 -mt-3 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs"
            style={{ transform: `rotate(${i * 120}deg) translateY(-42cqw)` }}
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="absolute inset-[24%] rounded-full border border-border animate-orbit-rev">
        {chips.slice(3).map((chip, i) => (
          <span
            key={chip}
            className="absolute left-1/2 top-1/2 -ml-10 -mt-3 rounded-full bg-accent px-3 py-1 font-mono text-xs"
            style={{ transform: `rotate(${i * 120 + 60}deg) translateY(-26cqw)` }}
          >
            {chip}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 200 200" className="absolute inset-[30%] h-[40%] w-[40%] animate-float">
        <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" fill="var(--foreground)" opacity="0.18" />
        <circle cx="100" cy="100" r="14" fill="var(--lime)" />
        <path d="M100 10 L100 190 M22 55 L178 145 M178 55 L22 145" stroke="var(--border)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] glow-lavender blur-3xl" aria-hidden="true" />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] glow-lime blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="relative z-10 min-w-0">
          <h1 className="font-display text-left text-[clamp(3rem,7.5vw,7rem)] font-normal uppercase leading-[0.88] tracking-tight">
            <span className="sr-only">Avinash Tiwari</span>
            <span aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
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
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mx-auto w-full max-w-[460px] lg:max-w-none"
        >
          <Orbit />
        </motion.div>
      </div>

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
