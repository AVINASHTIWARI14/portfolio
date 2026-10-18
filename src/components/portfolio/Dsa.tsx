import { Reveal, SectionHeading } from "./Reveal";
import "./dsa-editor.css";

export function Dsa() {
  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} titleFontFamily="Lobster, cursive" />

        <Reveal>
          <article className="dsa-code-window brutalist-card mx-auto flex min-w-0 max-w-4xl flex-col overflow-hidden border-2 border-black bg-white text-black shadow-[6px_6px_0_0_#000]" style={{ background: "#ffffff", borderColor: "#000000", color: "#000000", fontFamily: "monospace", fontSize: 16 }}>
            <div className="dsa-code-titlebar flex h-11 shrink-0 items-center justify-end border-b-2 border-black" style={{ background: "#ffffff", color: "#000000" }}>
              <span className="mr-auto truncate px-3 text-sm font-bold text-black">dsa-journey.txt</span>
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot" aria-hidden="true" />
              <span className="dsa-window-dot dsa-window-dot-close" aria-hidden="true" />
            </div>

            <div className="space-y-5 p-6 text-base leading-8 text-black sm:p-9 sm:text-lg sm:leading-9">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 sm:text-base">A work in progress</p>
              <p className="text-black">
                My DSA journey has been less about collecting solved questions and more about learning how to think through a problem.
              </p>
              <p className="text-black">
                I practice primarily in C++, working through patterns, revisiting problems, and trying to understand why a solution works—not just how to make it pass.
              </p>
              <p className="text-black">
                With 300+ problems solved on LeetCode, I’ve learned that progress comes from consistency: getting stuck, finding the gap in my thinking, and coming back to the problem with a better approach.
              </p>
              <p className="font-bold text-black">Still learning. Still solving. Still getting better.</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="brutalist-card mx-auto mt-8 max-w-4xl overflow-hidden border-2 border-black bg-white text-black shadow-[6px_6px_0_0_#000]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-white px-4 py-3">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-black">leetcode-activity</h3>
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
            <div className="bg-white px-2 py-2 sm:px-4 sm:py-3">
              <img
                src="https://leetcode-calander-svg.vercel.app/AVINASH-TIWARI"
                alt="Live LeetCode submission heatmap for AVINASH-TIWARI"
                loading="lazy"
                className="mx-auto block h-[120px] w-full object-fill sm:h-[140px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
