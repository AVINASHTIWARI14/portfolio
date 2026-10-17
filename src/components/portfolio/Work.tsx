import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type ProjectTag } from "@/data/portfolio";
import { SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const filters: ("All" | ProjectTag)[] = ["All", "AI", "Full-stack", "Frontend"];

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="01" eyebrow="Selected work" title={<>Products with a <em className="text-lime">brain</em> and a face.</>}>
        A few things I've built — where machine learning meets interfaces people actually want to use.
      </SectionHeading>

      <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "h-11 rounded-full border px-5 text-sm transition-colors",
              filter === f ? "border-lime bg-lime text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

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
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-lime/50 sm:p-8",
                p.slug === "supplai" && "isolate border-white/20 bg-neutral-950 text-white",
                p.size === "sm" && "md:col-span-2 md:flex-row md:items-center md:gap-10",
              )}
            >
              {p.slug === "supplai" && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-5 -z-20 scale-110 bg-cover bg-center opacity-70 blur-xl"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=85')",
                    }}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-neutral-950/75" />
                </>
              )}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 glow-lime opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className={cn("relative min-w-0", p.slug === "supplai" && "text-white", p.size === "sm" && "md:flex-1")}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.kicker}</span>
                  <span className="font-mono text-xs text-lime">0{i + 1}</span>
                </div>
                <h3 className="font-display text-4xl tracking-tight md:text-5xl">{p.title}</h3>
                <p className={cn("mt-4 text-muted-foreground", p.slug === "supplai" && "text-white/80")}>{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li key={f} className={cn("rounded-full bg-secondary px-3 py-1 text-xs", p.slug === "supplai" && "border border-white/20 bg-white/10 text-white/90 backdrop-blur-sm")}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className={cn("relative mt-8 flex flex-col gap-5", p.size === "lg" && "mt-auto pt-8", p.size === "sm" && "md:mt-0 md:w-72")}>
                <p className={cn("font-mono text-xs text-muted-foreground", p.slug === "supplai" && "text-white/70")}>{p.stack.join(" · ")}</p>
                <div className="flex flex-wrap gap-2">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className={cn("inline-flex h-11 items-center gap-2 rounded-full bg-lime px-5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5", p.slug === "supplai" && "bg-white text-black")}>
                      Live demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className={cn("inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm transition-colors hover:border-lime hover:text-lime", p.slug === "supplai" && "border-white/35 text-white hover:border-white hover:text-white")}>
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                  {!p.demo && !p.repo && (
                    <span className="inline-flex h-11 items-center rounded-full border border-dashed border-border px-5 text-sm text-muted-foreground">
                      Links coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}