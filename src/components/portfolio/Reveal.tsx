import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-lime">{index}</span>
        <span className="h-px w-10 bg-border" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      {children && <div className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{children}</div>}
    </Reveal>
  );
}