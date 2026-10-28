import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <motion.div
        className="absolute -left-40 top-10 h-[520px] w-[520px] glow-lavender blur-3xl"
        aria-hidden="true"
        animate={reduce ? undefined : {
          x: [0, 90, -55, 0],
          y: [0, -65, 45, 0],
          scale: [1, 1.18, 0.92, 1],
          opacity: [0.7, 1, 0.75, 0.7],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-0 h-[520px] w-[520px] glow-lime blur-3xl"
        aria-hidden="true"
        animate={reduce ? undefined : {
          x: [0, -85, 50, 0],
          y: [0, 70, -45, 0],
          scale: [1, 0.9, 1.2, 1],
          opacity: [0.6, 0.95, 0.7, 0.6],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: -4 }}
      />

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
