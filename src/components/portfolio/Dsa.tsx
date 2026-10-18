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
      </div>
    </section>
  );
}
