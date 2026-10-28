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
          <mask id="hero-dot-mask">
            <rect width="1440" height="900" fill="url(#hero-dot-fade)" />
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
        <motion.path
          d="M-40 300 C180 220 260 380 470 300 S770 220 980 300 S1270 380 1480 280"
          stroke="#555555"
          strokeWidth="1"
          strokeDasharray="3 8"
          fill="none"
          opacity="0.28"
          animate={reduce ? undefined : { pathLength: [0.72, 1, 0.72], x: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M-40 620 C180 540 260 700 470 620 S770 540 980 620 S1270 700 1480 600"
          stroke="#555555"
          strokeWidth="1"
          strokeDasharray="3 8"
          fill="none"
          opacity="0.24"
          animate={reduce ? undefined : { pathLength: [0.7, 0.95, 0.7], x: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: -3 }}
        />
      </motion.svg>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8">
        <div className="relative z-10 min-w-0">
          <h1 className="font-[Lobster] text-left text-[clamp(4.5rem,13.5vw,10.5rem)] leading-[0.95] tracking-tight">
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
