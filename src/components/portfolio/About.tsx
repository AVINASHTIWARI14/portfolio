import { skillGroups, timeline } from "@/data/portfolio";
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
      <SectionHeading index="03" eyebrow="About" title={<>Me.</>} titleFontFamily="Lobster, cursive" />
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a Computer Science student specialising in <span className="text-foreground">AI and machine learning</span> at
            KCC Institute of Technology & Management (AKTU). I like building things that are genuinely useful — and
            understanding how they work underneath.
          </p>
          <p>
            Most days that means switching between solving algorithm problems in C++, training and wiring up models in
            Python, and shaping React interfaces until they feel right.
          </p>
          <p>
            I'm happiest at the point where a rough idea turns into a polished product someone can actually use.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative space-y-8 border-l border-border pl-8" aria-label="Education and journey">
            {timeline.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-lime bg-background" />
                <p className="font-mono text-xs uppercase tracking-widest text-lime">{t.period}</p>
                <h3 className="mt-1 font-display text-xl">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.place}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </li>
            ))}
          </ol>
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
        <SectionHeading index="04" eyebrow="" title={<>Tools / Skills.</>} titleFontFamily="Lobster, cursive" />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="group min-w-0 overflow-hidden bg-background p-6 transition-colors hover:bg-card sm:p-8">
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
                          className="shrink-0 whitespace-nowrap border-2 border-black px-3 py-2 text-sm font-semibold shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
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
