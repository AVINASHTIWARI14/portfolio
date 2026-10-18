import { Reveal, SectionHeading } from "./Reveal";
import "./dsa-editor.css";

export function Dsa() {
  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} titleFontFamily="Lobster, cursive" />

        <Reveal>
          <article className="dsa-code-window mx-auto flex min-w-0 max-w-4xl flex-col overflow-hidden border" style={{ background: "#15001f", borderColor: "#c042ff", fontFamily: "monospace", fontSize: 14 }}>
            <div className="dsa-code-titlebar flex h-11 shrink-0 items-center justify-end" style={{ background: "#2e0043" }}>
              <span className="mr-auto truncate px-3 text-xs text-[#bafff8]">dsa-journey.txt</span>
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot dsa-window-dot-close" aria-hidden="true" />
            </div>

            <div className="space-y-5 p-6 leading-7 text-[#bafff8] sm:p-9 sm:leading-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c042ff]">A work in progress</p>
              <p>
                My DSA journey has been less about collecting solved questions and more about learning how to think through a problem.
              </p>
              <p>
                I practice primarily in C++, working through patterns, revisiting problems, and trying to understand why a solution works—not just how to make it pass.
              </p>
              <p>
                With 300+ problems solved on LeetCode, I’ve learned that progress comes from consistency: getting stuck, finding the gap in my thinking, and coming back to the problem with a better approach.
              </p>
              <p className="text-[#c042ff]">Still learning. Still solving. Still getting better.</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden border border-[#c042ff] bg-[#15001f]">
            <div className="flex items-center justify-between gap-3 border-b border-[#c042ff]/60 bg-[#2e0043] px-4 py-3">
              <h3 className="font-mono text-sm text-[#bafff8]">leetcode-activity</h3>
              <a
                href="https://leetcode.com/u/AVINASH-TIWARI/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[#c042ff] transition-colors hover:text-[#bafff8]"
              >
                VIEW PROFILE ↗
              </a>
            </div>
            <div className="p-4 sm:p-6">
              <img
                src="https://leetcode-calander-svg.vercel.app/AVINASH-TIWARI"
                alt="Live LeetCode submission heatmap for AVINASH-TIWARI"
                loading="lazy"
                className="mx-auto block h-auto w-full"
              />
              <p className="mt-3 text-center font-mono text-xs text-[#bafff8]/70">
                Submission activity · generated from your public LeetCode profile
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
