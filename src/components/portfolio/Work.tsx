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

const juribriefScreenshots = [
  "/images/juribrief-1.png",
  "/images/juribrief-2.png",
  "/images/juribrief-3.png",
  "/images/juribrief-4.png",
];

export function Work() {
  const list = projects.filter((p) => p.slug === "juribrief" || p.slug === "supplai");

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <h2 className="mb-12 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">Things I build.</h2>

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
              className={`group relative z-0 flex flex-col self-start overflow-hidden rounded-3xl border border-border !bg-[#ffffff] p-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:scale-[1.025] hover:!bg-[#ffffff] hover:border-border hover:shadow-[8px_8px_0_#000] sm:p-8`}
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 glow-lime opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex min-h-16 items-start justify-between gap-4 sm:min-h-20">
                  <span className="font-display text-3xl leading-none tracking-tight text-foreground sm:text-4xl">0{i + 1}</span>
                  <img
                    src={p.slug === "supplai" ? "/images/supplai-logo.png" : "/images/juribrief-logo.png"}
                    alt={`${p.title} logo`}
                    className="ml-auto max-h-16 max-w-[78%] object-contain object-right mix-blend-multiply transition-all duration-300 sm:max-h-20"
                  />
                </div>
                <p className="mt-4 text-justify text-muted-foreground">{p.summary}</p>
                <div className="relative mt-3 grid h-56 overflow-hidden border-0 border-transparent bg-transparent opacity-100 transition-[height,opacity] duration-500 ease-out sm:h-64">
                  {p.slug === "supplai" || p.slug === "juribrief" ? (
                    <div className="project-screenshot-slideshow absolute inset-0 overflow-hidden">
                      <div
                        className={`project-screenshot-track project-screenshot-track--${p.slug === "supplai" ? "five" : "four"} flex h-full`}
                        style={{ animationDuration: "40s" }}
                      >
                        {(p.slug === "supplai" ? suplaiScreenshots : juribriefScreenshots).concat(
                          p.slug === "supplai" ? suplaiScreenshots : juribriefScreenshots
                        ).map((src, index, all) => (
                          <img
                            key={`${src}-${index}`}
                            src={src}
                            alt={`${p.title} screenshot ${(index % (all.length / 2)) + 1}`}
                            className="h-full shrink-0 object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="relative mt-auto grid grid-cols-1 gap-3 pt-10 sm:grid-cols-3">
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-live">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Live</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-live brutalist-button-disabled">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Live</span>
                  </span>
                )}
                {p.slug === "supplai" ? (
                  <a href="https://youtu.be/9WQxe0l1aWE" target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-video">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Demo video</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : p.slug === "juribrief" ? (
                  <a href="https://youtu.be/mgFznzZRvkA?si=L4Q4J4BXljPqWwUh" target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-video">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Demo video</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" title="Demo video link not added yet" className="brutalist-button brutalist-button-video brutalist-button-disabled">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Demo video</span><ArrowUpRight aria-hidden="true" className="brutalist-button-arrow !static !h-4 !w-4 shrink-0" />
                  </span>
                )}
                {p.repo ? (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="brutalist-button brutalist-button-repo">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Repo</span><ArrowUpRight className="brutalist-button-arrow" />
                  </a>
                ) : (
                  <span aria-disabled="true" className="brutalist-button brutalist-button-repo brutalist-button-disabled">
                    <span className="brutalist-button-text text-lg font-medium sm:text-xl">Repo</span>
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
