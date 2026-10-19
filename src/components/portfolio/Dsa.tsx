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
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-600 sm:text-base">MY PROBLEM-SOLVING LOG</p>
              <p className="text-black">
                This is a record of my problem-solving journey — the patterns I learn, the problems that challenge me, and the ideas that become clearer with practice.
              </p>
              <p className="text-black">
                I work primarily in C++, focusing on data structures, algorithms, logical thinking, and competitive programming. The goal is not just to solve a question, but to understand the reasoning behind the solution and recognise when to use it again.
              </p>
              <div>
                <p className="mb-2 font-bold text-black">Topics I’ve been working through</p>
                <p className="text-black">Arrays · Strings · Hashing · Binary Search · Two Pointers · Sliding Window · Stack & Queue · Linked Lists · Trees · Graphs · DFS/BFS · Greedy · Dynamic Programming · Bit Manipulation</p>
              </div>
              <div>
                <p className="mb-2 font-bold text-black">Currently focusing on</p>
                <p className="text-black">Graphs, Dynamic Programming, advanced problem-solving patterns, and consistent contest practice.</p>
              </div>
              <p className="font-bold text-black">300+ LeetCode problems solved. Still learning, revising, and getting better.</p>
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
            <div className="overflow-x-auto bg-white px-2 py-2 sm:px-4 sm:py-3">
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
