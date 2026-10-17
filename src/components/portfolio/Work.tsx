import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Work() {
  const list = projects.filter((p) => p.slug === "juribrief" || p.slug === "supplai");

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <h2 className="mb-12 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">Things I build.</h2>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-lime/50 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 glow-lime opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-5 font-display text-4xl tracking-tight md:text-5xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.summary}</p>
              </div>

              <div className="relative mt-auto grid grid-cols-1 gap-3 pt-10 sm:grid-cols-3">
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="brutalist-button">
                    <span className="brutalist-button-text">Live</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-disabled">
                    <span className="brutalist-button-text">Live</span>
                  </span>
                )}
                {p.slug === "supplai" ? (
                  <a href="https://youtu.be/9WQxe0l1aWE" target="_blank" rel="noreferrer" className="brutalist-button">
                    <span className="brutalist-button-text">Demo video</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" title="Demo video link not added yet" className="brutalist-button brutalist-button-disabled">
                    <span className="brutalist-button-text">Demo video</span>
                  </span>
                )}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="brutalist-button">
                    <span className="brutalist-button-text">Repo</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-disabled">
                    <span className="brutalist-button-text">Repo</span>
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
