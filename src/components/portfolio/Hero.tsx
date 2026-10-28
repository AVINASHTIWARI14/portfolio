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
          <linearGradient id="hero-dot-bottom-overlay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="22%" stopColor="white" stopOpacity="0.03" />
            <stop offset="42%" stopColor="white" stopOpacity="0.22" />
            <stop offset="62%" stopColor="white" stopOpacity="0.58" />
            <stop offset="82%" stopColor="white" stopOpacity="0.88" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
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
            x: [0, -28, 0],
            y: [0, 18, 0],
            scale: [1, 1.035, 1],
            opacity: [0.28, 0.48, 0.28],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          width="1440"
          height="900"
          fill="url(#hero-dot-matrix)"
          opacity="0.2"
          animate={reduce ? undefined : { x: [0, 24, 0], y: [0, -18, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <rect x="0" y="300" width="1440" height="600" fill="url(#hero-dot-bottom-overlay)" />
      </motion.svg>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(125deg, #b8b8b8 0%, #ffffff 48%, #b8b8b8 100%)",
          backgroundSize: "220% 220%",
        }}
        animate={reduce ? { opacity: 0.28 } : {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.28, 0.48, 0.28],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

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
