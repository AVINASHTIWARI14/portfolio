import { skillGroups, timeline } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="03" eyebrow="About" title={<>Curious about systems, <em className="text-lime">obsessed</em> with the details.</>} />
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
        <SectionHeading index="04" eyebrow="" title={<>Tools / Skills.</>} />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="group bg-background p-6 transition-colors hover:bg-card sm:p-8">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{g.title}</h3>
                <span className="font-mono text-xs text-muted-foreground group-hover:text-lime">/{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:border-lime hover:text-lime">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
