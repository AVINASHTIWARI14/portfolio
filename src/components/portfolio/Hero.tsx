import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const lines = [
  ["I", "build", "things"],
  ["that", "think."],
];
const lines2 = ["and interfaces", "that feel."];

function Orbit() {
  const chips = ["{ ai }", "O(log n)", "<UI/>", "dp[i]", "fetch()", "∑"];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] [container-type:inline-size]" aria-hidden>
      <div className="absolute inset-0 rounded-full glow-lime blur-2xl" />
      <div className="absolute inset-[8%] rounded-full border border-dashed border-border animate-orbit">
        {chips.slice(0, 3).map((c, i) => (
          <span
            key={c}
            className="absolute left-1/2 top-1/2 -ml-8 -mt-3 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-lime"
            style={{ transform: `rotate(${i * 120}deg) translateY(-42cqw)` }}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="absolute inset-[24%] rounded-full border border-border animate-orbit-rev">
        {chips.slice(3).map((c, i) => (
          <span
            key={c}
            className="absolute left-1/2 top-1/2 -ml-8 -mt-3 rounded-full bg-accent px-3 py-1 font-mono text-xs text-lavender"
            style={{ transform: `rotate(${i * 120 + 60}deg) translateY(-26cqw)` }}
          >
            {c}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 200 200" className="absolute inset-[34%] animate-float">
        <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" fill="none" stroke="var(--foreground)" strokeWidth="2" />
        <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" fill="var(--foreground)" opacity="0.25" />
        <circle cx="100" cy="100" r="14" fill="var(--lime)" />
        <path d="M100 10 L100 190 M22 55 L178 145 M178 55 L22 145" stroke="var(--border)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  let wordIndex = 0;
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] glow-lavender blur-3xl" aria-hidden />
      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] glow-lime blur-3xl" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="min-w-0">

          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
            <span className="sr-only">I build things that think, and interfaces that feel.</span>
            <span aria-hidden>
              {lines.map((words, li) => (
                <span key={li} className="block overflow-hidden pb-1">
                  {words.map((w) => {
                    const i = wordIndex++;
                    return (
                      <motion.span
                        key={w}
                        className="mr-[0.22em] inline-block"
                        initial={reduce ? false : { y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {w}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
              {lines2.map((l, li) => (
                <span key={l} className="block overflow-hidden pb-2">
                  <motion.span
                    className={li === 1 ? "inline-block italic text-gradient" : "inline-block italic text-muted-foreground"}
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.55 + li * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            I'm <span className="text-foreground">Avinash Tiwari</span> — a CSE (AI/ML) student who builds AI products end to end,
            from the model to the last pixel.
          </motion.p>

        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="hidden sm:block"
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