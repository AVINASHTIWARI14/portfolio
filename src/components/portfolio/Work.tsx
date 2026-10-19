import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

const suplaiScreenshots = [
  "/images/suplai-1.png",
  "/images/suplai-2.png",
  "/images/suplai-3.png",
  "/images/suplai-4.png",
  "/images/suplai-5.png",
];

export function Work() {
  const list = projects.filter((p) => p.slug === "juribrief" || p.slug === "supplai");

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <h2 className="mb-12 font-[Lobster] text-5xl tracking-tight sm:text-6xl md:text-7xl">Things I build.</h2>

      <motion.div layout className="grid items-start gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col self-start overflow-hidden rounded-3xl border border-border bg-card p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 hover:scale-[1.015] hover:border-lime/50 hover:bg-black hover:shadow-[8px_8px_0_#000] sm:p-8 dark:hover:bg-black"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 glow-lime opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="font-mono text-xs text-muted-foreground transition-all duration-300 group-hover:hidden">0{i + 1}</span>
                <h3 className="mt-5 font-display text-4xl tracking-tight transition-all duration-300 group-hover:mt-0 group-hover:text-white md:text-5xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground transition-all duration-300 group-hover:hidden">{p.summary}</p>
                <div className="relative mt-3 grid h-0 overflow-hidden border-0 border-transparent bg-transparent opacity-0 transition-[height,opacity] duration-500 ease-out group-hover:h-56 group-hover:opacity-100 sm:group-hover:h-64">
                  {p.slug === "supplai" ? (
                    <div className="project-screenshot-slideshow absolute inset-0 overflow-hidden">
                      <div className="project-screenshot-track flex h-full w-full">
                        {[...suplaiScreenshots, ...suplaiScreenshots].map((src, index) => (
                          <img
                            key={`${src}-${index}`}
                            src={src}
                            alt={`SupplAI project screenshot ${(index % suplaiScreenshots.length) + 1}`}
                            className="h-full shrink-0 object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-white/70">
                      JURIbrief screenshots coming next
                    </div>
                  )}
                </div>
              </div>

              <div className="relative mt-auto grid grid-cols-1 gap-3 pt-10 sm:grid-cols-3">
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-live">
                    <span className="brutalist-button-text">Live</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-live brutalist-button-disabled">
                    <span className="brutalist-button-text">Live</span>
                  </span>
                )}
                {p.slug === "supplai" ? (
                  <a href="https://youtu.be/9WQxe0l1aWE" target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-video">
                    <span className="brutalist-button-text">Demo video</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" title="Demo video link not added yet" className="brutalist-button brutalist-button-video brutalist-button-disabled">
                    <span className="brutalist-button-text">Demo video</span><ArrowUpRight aria-hidden="true" className="brutalist-button-arrow !static !h-4 !w-4 shrink-0" />
                  </span>
                )}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-repo">
                    <span className="brutalist-button-text">Repo</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-repo brutalist-button-disabled">
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
