import { Reveal, SectionHeading } from "./Reveal";
import "./dsa-editor.css";

export function Dsa() {
  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} titleFontFamily="Lobster, cursive" />

        <Reveal>
          <div className="mx-auto max-w-4xl px-1 py-2 text-foreground">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-base">MY PROBLEM-SOLVING LOG</p>
            <p className="text-justify text-base leading-8 sm:text-lg sm:leading-9" style={{ textAlign: "justify", textJustify: "inter-word" }}>
              My journey with DSA started with a simple goal: getting better at problem solving, and somehow turned into 500+ problems solved across different platforms. I have solved 300+ problems on LeetCode alone and regularly practice on platforms like Codeforces, CodeChef, and HackerRank. Recently, I stepped into competitive programming and have participated in 20+ live contests, which has taught me that solving a problem is one thing, solving it before the clock runs out is a completely different game. I still struggle with problems, get stuck on ideas, and occasionally spend far too long debugging something that turns out to be a tiny mistake, but that is also what I enjoy about it. Every problem gives me something new to learn, and I am continuously working to improve my problem-solving skills, speed, and consistency.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="brutalist-card mx-auto mt-8 max-w-4xl overflow-hidden border-2 border-zinc-500 bg-zinc-400 text-zinc-950 shadow-[6px_6px_0_0_#71717a]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-zinc-500 bg-zinc-400 px-4 py-3">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-zinc-950">leetcode-activity</h3>
              <a
                href="https://leetcode.com/u/AVINASH-TIWARI/"
                target="_blank"
                rel="noreferrer"
                className="brutalist-button brutalist-button-live !inline-flex !w-auto !min-w-0 !min-h-0 !h-auto !px-2 !py-1 !text-[10px] sm:!px-2.5 sm:!py-1 sm:!text-[10px]"
                style={{ width: "fit-content", minWidth: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0, whiteSpace: "nowrap" }}
              >
                VIEW PROFILE
              </a>
            </div>
            <div className="overflow-x-auto bg-zinc-400 px-2 py-2 sm:px-4 sm:py-3">
              <img
                src="https://leetcode-calander-svg.vercel.app/AVINASH-TIWARI"
                alt="Live LeetCode submission heatmap for AVINASH-TIWARI"
                loading="lazy"
                onLoad={(event) => {
                  const container = event.currentTarget.parentElement;
                  if (container) container.scrollLeft = container.scrollWidth;
                }}
                className="mx-0 block h-[200px] w-[1200px] max-w-none sm:h-[220px] sm:w-[1300px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
