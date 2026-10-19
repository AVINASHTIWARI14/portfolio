import { Reveal, SectionHeading } from "./Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" eyebrow="Milestones" title={<>Achievements.</>} titleFontFamily="Lobster, cursive">
          Assessments, milestones, and progress worth documenting.
        </SectionHeading>

        <Reveal>
          <article className="mx-auto grid max-w-5xl overflow-hidden border-2 border-black bg-white text-black shadow-[8px_8px_0_#000] md:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-[260px] items-center justify-center border-b-2 border-black bg-[#f4f4f0] p-4 sm:p-6 md:border-b-0 md:border-r-2">
              <img
                src="/images/tcs-ion-nqt-scorecard.png"
                alt="TCS iON NQT IT scorecard"
                loading="lazy"
                className="block h-auto max-h-[560px] w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 md:p-10">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">IT Assessment · 26 Aug 2026</p>
              <h3 className="text-3xl leading-tight sm:text-4xl" style={{ fontFamily: "Lobster, cursive" }}>TCS iON NQT Score</h3>
              <div className="border-y-2 border-black py-4">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">Overall score</p>
                <p className="mt-1 text-5xl font-black tracking-tight sm:text-6xl">80.17<span className="text-2xl">%</span></p>
                <p className="mt-1 text-sm text-neutral-600">2,405.02 / 3,000</p>
              </div>
              <p className="text-sm leading-7 sm:text-base">
                Scored 80.17% overall in the TCS iON NQT-IT assessment, with strong results in Advanced Quantitative &amp; Reasoning (84.73%) and Foundation/Cognitive (82.23%).
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="border-2 border-black p-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Foundation / Cognitive</p>
                  <p className="mt-1 text-2xl font-extrabold">82.23%</p>
                </div>
                <div className="border-2 border-black p-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Advanced Quant &amp; Reasoning</p>
                  <p className="mt-1 text-2xl font-extrabold">84.73%</p>
                </div>
                <div className="col-span-2 border-2 border-black p-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Programming · C++</p>
                  <p className="mt-1 text-2xl font-extrabold">69.41%</p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
