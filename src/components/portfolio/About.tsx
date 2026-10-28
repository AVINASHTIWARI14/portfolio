import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const skillColors: Record<string, { bg: string; fg: string }> = {
  "C++": { bg: "#00599C", fg: "#FFFFFF" },
  Python: { bg: "#3776AB", fg: "#FFFFFF" },
  TypeScript: { bg: "#3178C6", fg: "#FFFFFF" },
  JavaScript: { bg: "#F7DF1E", fg: "#111111" },
  SQL: { bg: "#4479A1", fg: "#FFFFFF" },
  React: { bg: "#61DAFB", fg: "#111111" },
  "Tailwind CSS": { bg: "#06B6D4", fg: "#111111" },
  "shadcn/ui": { bg: "#111111", fg: "#FFFFFF" },
  "Framer Motion": { bg: "#0055FF", fg: "#FFFFFF" },
  FastAPI: { bg: "#009688", fg: "#FFFFFF" },
  "Node.js": { bg: "#339933", fg: "#FFFFFF" },
  Express: { bg: "#222222", fg: "#FFFFFF" },
  "scikit-learn": { bg: "#F7931E", fg: "#111111" },
  spaCy: { bg: "#09A3D5", fg: "#FFFFFF" },
  "NLP pipelines": { bg: "#8B5CF6", fg: "#FFFFFF" },
  PostgreSQL: { bg: "#4169E1", fg: "#FFFFFF" },
  Supabase: { bg: "#3ECF8E", fg: "#111111" },
  MongoDB: { bg: "#47A248", fg: "#FFFFFF" },
  Git: { bg: "#F05032", fg: "#FFFFFF" },
  GitHub: { bg: "#181717", fg: "#FFFFFF" },
  Docker: { bg: "#2496ED", fg: "#FFFFFF" },
  "VS Code": { bg: "#007ACC", fg: "#FFFFFF" },
};



export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="[&>div]:mb-0">
        <SectionHeading index="03" eyebrow="About" title={<>Me.</>} />
      </div>
      <div className="mt-0 grid items-start gap-10 lg:-mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal className="flex h-full flex-col justify-center space-y-5 text-justify text-base leading-8 text-muted-foreground sm:text-lg">
          <p>
            Hey, I’m Avinash, a final-year B.Tech student specializing in Computer Science and AI/ML. I enjoy problem-solving, working with data structures and algorithms, and turning ideas into practical, polished applications that are ready to use.
          </p>
          <p>
            My interests lie at the intersection of software development and artificial intelligence, where I explore how intelligent systems can make applications more useful, efficient, and intuitive. I like understanding how things work under the hood and experimenting with new technologies.
          </p>
          <p>
            For me, a project should be more than functional: it should deliver a thoughtful user experience. I’m always learning, building, and looking for better ways to solve problems.
          </p>
          <div className="pt-2">
            <a href="https://drive.google.com/file/d/163jq7BqJCNd_NEYph46y0O-3kqTqoc0F/view?usp=drivesdk" target="_blank" rel="noreferrer" className="shine-on-hover resume-button-shine group relative isolate inline-flex min-h-12 items-center gap-2.5 overflow-hidden border-2 border-black bg-[#ffe033] px-4 py-2.5 font-sans text-sm font-medium normal-case tracking-[0.015em] text-black shadow-[3px_3px_0_#080808] [text-shadow:none] transition-transform hover:bg-[#ffe033] hover:text-black hover:shadow-[5px_5px_0_#080808] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              <span className="brutalist-button-text">View Resume</span>
              <span aria-hidden="true" className="brutalist-button-arrow">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-4 text-2xl text-foreground" >Achievements &amp; Certifications</h3>
          <div className="relative flex h-[620px] min-w-0 flex-col border-2 border-black bg-[#b3b3b3] p-3 text-black shadow-[8px_8px_0_#000] sm:h-[680px] sm:p-4">
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-auto [scrollbar-color:#111_#eee] [scrollbar-width:thin]">
              <article className="border-2 border-black bg-white">
                <div className="w-full overflow-hidden bg-white">
                  <img src="/images/tcs-ion-nqt-scorecard.png" alt="TCS iON NQT IT scorecard" loading="lazy" className="block h-auto w-full object-contain" />
                </div>
              </article>
              <article className="border-2 border-black bg-white">
                <div className="h-[250px] w-full overflow-hidden bg-white sm:h-[275px]">
                  <img src="/images/adobe-hackathon.png" alt="Adobe University Hackathon certificate" loading="lazy" className="block h-full w-full object-fill" />
                </div>
                <p className="border-t-2 border-black px-3 py-3 text-sm font-medium leading-relaxed">Participated in Adobe’s University Hackathon.</p>
              </article>
              <article className="border-2 border-black bg-white">
                <div className="h-[250px] w-full overflow-hidden bg-white sm:h-[275px]">
                  <img src="/images/hackindia-spark.png" alt="HackIndia Spark 4 certificate" loading="lazy" className="block h-full w-full object-fill" />
                </div>
                <p className="border-t-2 border-black px-3 py-3 text-sm font-medium leading-relaxed">Reached the pre-finals of HackIndia Spark 4 — East NCR Growth Region.</p>
              </article>
              <article className="border-2 border-black bg-white shadow-[4px_4px_0_#000]">
                <div className="h-[250px] w-full overflow-hidden bg-white sm:h-[275px]">
                  <img src="/images/smart-india-hackathon.png" alt="Internal Smart India Hackathon 2024 certificate" loading="lazy" className="block h-full w-full object-fill" />
                </div>
                <p className="border-t-2 border-black px-3 py-3 text-sm font-medium leading-relaxed">Led my team at the Internal Smart India Hackathon 2024.</p>
              </article>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="absolute -right-40 top-20 h-[420px] w-[420px] glow-lavender blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" eyebrow="" title={<>Tools / Skills.</>} />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="tools-skill-card group min-w-0 overflow-hidden !bg-white p-6 transition-colors hover:!bg-white sm:p-8">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl">{g.title}</h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground group-hover:text-lime">/{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="overflow-hidden" aria-label={`${g.title} skills`}>
                <div className="animate-marquee flex w-max items-center gap-2">
                  {[0, 1].map((copy) => (
                    <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-2">
                      {g.items.map((s) => (
                        <li
                          key={s}
                          title={s}
                          className="shrink-0 whitespace-nowrap border-2 border-black px-3 py-2 text-sm font-medium shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                          style={{ backgroundColor: skillColors[s]?.bg ?? "#FFFFFF", color: skillColors[s]?.fg ?? "#111111" }}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
