import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-dot-matrix" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.25" fill="#222222" />
          </pattern>
          <radialGradient id="hero-dot-fade">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="58%" stopColor="white" stopOpacity="0.72" />
            <stop offset="100%" stopColor="white" stopOpacity="0.18" />
          </radialGradient>
          <linearGradient id="hero-dot-bottom-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="38%" stopColor="white" stopOpacity="1" />
            <stop offset="58%" stopColor="white" stopOpacity="0.88" />
            <stop offset="72%" stopColor="white" stopOpacity="0.52" />
            <stop offset="84%" stopColor="white" stopOpacity="0.18" />
            <stop offset="94%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="hero-dot-mask">
            <rect width="1440" height="900" fill="url(#hero-dot-fade)" />
            <rect width="1440" height="900" fill="url(#hero-dot-bottom-fade)" />
          </mask>
        </defs>
        <rect width="1440" height="900" fill="url(#hero-dot-matrix)" mask="url(#hero-dot-mask)" />
        <motion.rect
          width="1440"
          height="900"
          fill="url(#hero-dot-matrix)"
          opacity="0.34"
          style={{ transformOrigin: "center" }}
          animate={reduce ? undefined : {
            x: [0, 0, 0],
            y: [0, -12, 0],
            scaleY: [1, 1.025, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8">
        <div className="relative z-10 min-w-0">
          <h1 className="font-[Anton_SC] text-left text-[clamp(4.5rem,13.5vw,10.5rem)] leading-[0.95] tracking-tight">
            <span className="sr-only">Avinash Tiwari</span>
            <span aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                Avinash
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                <em className="text-gradient not-italic">Tiwari</em>
              </motion.span>
            </span>
          </h1>
        </div>

      </div>


    </section>
  );
}
