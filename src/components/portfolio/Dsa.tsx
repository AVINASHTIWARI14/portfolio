import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Minus, Square, X } from "lucide-react";
import { dsaRepo, dsaTopics, leetcode } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";
import "./dsa-editor.css";

export function Dsa() {
  const [activeId, setActiveId] = useState(dsaTopics[0]?.id ?? "");
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
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

            {/* C++ editor */}
            <div
              className={cn(
                "dsa-code-window flex min-w-0 flex-col overflow-auto border",
                maximized ? "min-h-[520px]" : "min-h-[300px]",
              )}
              style={{ background: "#15001f", borderColor: "#c042ff", fontFamily: "monospace", fontSize: 14 }}
            >
              <div className="dsa-code-titlebar flex h-11 shrink-0 items-center justify-end" style={{ background: "#2e0043" }}>
                <span className="mr-auto truncate px-3 text-xs text-[#bafff8]">{t.id}.cpp</span>
                <button type="button" aria-label="Minimize editor" title="Minimize" onClick={() => setMinimized((v) => !v)} className="dsa-window-control">
                  <Minus />
                </button>
                <button type="button" aria-label={maximized ? "Restore editor size" : "Maximize editor"} title={maximized ? "Restore" : "Maximize"} onClick={() => setMaximized((v) => !v)} className="dsa-window-control">
                  <Square />
                </button>
                <button type="button" aria-label="Reset editor view" title="Reset view" onClick={() => { setMinimized(false); setMaximized(false); }} className="dsa-window-control dsa-window-close">
                  <X />
                </button>
              </div>
              {!minimized && (
                <>
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={t.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={cn("flex-1 overflow-auto whitespace-pre p-3 text-[#bafff8]", maximized ? "min-h-[420px]" : "max-h-[300px]")}
                      style={{ scrollbarWidth: "none" }}
                    >
                      <code>{t.snippet}</code>
                    </motion.pre>
                  </AnimatePresence>
                  <div className="flex flex-wrap gap-2 border-t border-[#c042ff]/50 p-3">
                    <a href={dsaRepo} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 border border-[#c042ff] px-4 text-sm text-[#bafff8] transition-colors hover:bg-[#2e0043]">
                      <Github className="h-4 w-4" /> DSA repository
                    </a>
                    <a href={leetcode} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 border border-[#c042ff] px-4 text-sm text-[#bafff8] transition-colors hover:bg-[#2e0043]">
                      LeetCode <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}