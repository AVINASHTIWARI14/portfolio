import { Reveal, SectionHeading } from "./Reveal";
import "./dsa-editor.css";

export function Dsa() {
  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} titleFontFamily="Lobster, cursive" />

        <Reveal>
          <article className="dsa-code-window mx-auto flex min-w-0 max-w-4xl flex-col overflow-hidden border" style={{ background: "#111111", borderColor: "#555555", fontFamily: "monospace", fontSize: 14 }}>
            <div className="dsa-code-titlebar flex h-11 shrink-0 items-center justify-end" style={{ background: "#222222" }}>
              <span className="mr-auto truncate px-3 text-xs text-[#eeeeee]">dsa-journey.txt</span>
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot dsa-window-dot-close" aria-hidden="true" />
            </div>

            <div className="space-y-5 p-6 leading-7 text-[#dddddd] sm:p-9 sm:leading-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999999]">A work in progress</p>
              <p>
                My DSA journey has been less about collecting solved questions and more about learning how to think through a problem.
              </p>
              <p>
                I practice primarily in C++, working through patterns, revisiting problems, and trying to understand why a solution works—not just how to make it pass.
              </p>
              <p>
                With 300+ problems solved on LeetCode, I’ve learned that progress comes from consistency: getting stuck, finding the gap in my thinking, and coming back to the problem with a better approach.
              </p>
              <p className="text-[#f5f5f5]">Still learning. Still solving. Still getting better.</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden border border-[#555555] bg-[#111111]">
            <div className="flex items-center justify-between gap-3 border-b border-[#444444] bg-[#222222] px-4 py-2">
              <h3 className="font-mono text-sm text-[#eeeeee]">leetcode-activity</h3>
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
            <div className="p-3 sm:p-4">
              <img
                src="https://leetcode-calander-svg.vercel.app/AVINASH-TIWARI"
                alt="Live LeetCode submission heatmap for AVINASH-TIWARI"
                loading="lazy"
                className="mx-auto block h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
