import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { dsaRepo, dsaTopics, leetcode } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Dsa() {
  const [activeId, setActiveId] = useState(dsaTopics[0]?.id ?? "");
  const t = dsaTopics.find((d) => d.id === activeId)!;

  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} titleFontFamily="Lobster, cursive" />

        <div role="tablist" aria-label="DSA topics" className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {dsaTopics.map((d) => (
            <button
              key={d.id}
              role="tab"
              id={`tab-${d.id}`}
              aria-selected={d.id === activeId}
              aria-controls="dsa-panel"
              onClick={() => setActiveId(d.id)}
              className={cn(
                "h-11 shrink-0 rounded-full border px-5 font-mono text-sm transition-colors",
                d.id === activeId ? "border-lavender bg-accent text-foreground" : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {d.label}
            </button>
          ))}
        </div>

        <Reveal>
          <div id="dsa-panel" role="tabpanel" aria-labelledby={`tab-${t.id}`} className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            {/* notebook page */}
            <div className="relative overflow-hidden rounded-3xl paper-lines p-6 text-paper-foreground sm:p-8">
              <div className="absolute inset-y-0 left-10 w-px bg-destructive/40" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.div key={t.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.3 }} className="pl-8">
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60">Revision page · {t.label}</p>
                  <h3 className="mt-2 font-display text-3xl italic sm:text-4xl">{t.label}</h3>
                  <ul className="mt-6 space-y-2 leading-8">
                    {t.topics.map((x) => (
                      <li key={x} className="flex items-center gap-3">
                        <span className="h-3 w-3 shrink-0 rounded-sm border-2 border-current opacity-60" /> {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <p className="font-mono text-xs opacity-70">Personal revision focus (self-assessed)</p>
                    <div className="mt-2 flex gap-1.5" aria-label={`Revision focus ${t.focus} of 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={cn("h-2 flex-1 rounded-full", i < t.focus ? "bg-paper-foreground" : "bg-paper-foreground/15")} />
                      ))}
                    </div>
                  </div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -3 }}
                    className="mt-8 max-w-xs rounded-md bg-sticky p-4 font-mono text-sm text-sticky-foreground shadow-lg sm:ml-auto"
                  >
                    <span className="text-xs uppercase opacity-60">note to self</span>
                    <p className="mt-1">{t.note}</p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* code card */}
            <div className="flex min-w-0 flex-col rounded-3xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-sticky/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">{t.id}.cpp</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.pre key={t.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 overflow-x-auto p-5 font-mono text-[13px] leading-6 text-lime sm:p-6">
                  <code>{t.snippet}</code>
                </motion.pre>
              </AnimatePresence>
              <div className="flex flex-wrap gap-2 border-t border-border p-5">
                <a href={dsaRepo} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-primary-foreground">
                  <Github className="h-4 w-4" /> DSA repository
                </a>
                <a href={leetcode} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm hover:border-lime hover:text-lime">
                  LeetCode <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}