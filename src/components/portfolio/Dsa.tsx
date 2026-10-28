import { useEffect, useMemo, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import "./dsa-editor.css";

function CodeforcesHeatmap() {
  const [submissions, setSubmissions] = useState<Record<string, number>>({});
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let active = true;
    fetch("https://codeforces.com/api/user.status?handle=avinashtiwari2005ws&from=1&count=1000")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load Codeforces submissions");
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        if (data.status !== "OK" || !Array.isArray(data.result)) throw new Error("Invalid Codeforces response");
        const counts: Record<string, number> = {};
        const cutoff = Math.floor(Date.now() / 1000) - 366 * 24 * 60 * 60;
        data.result.forEach((submission: { creationTimeSeconds?: number }) => {
          if (!submission.creationTimeSeconds || submission.creationTimeSeconds < cutoff) return;
          const date = new Date(submission.creationTimeSeconds * 1000);
          const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
          counts[key] = (counts[key] ?? 0) + 1;
        });
        setSubmissions(counts);
        setStatus("ready");
      })
      .catch(() => {
        if (active) setStatus("error");
      });
    return () => { active = false; };
  }, []);

  const weeks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today);
    start.setDate(start.getDate() - 363);
    start.setDate(start.getDate() - start.getDay());
    const result: { date: string; count: number; future: boolean }[][] = [];
    const cursor = new Date(start);
    while (cursor <= today) {
      const week: { date: string; count: number; future: boolean }[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(cursor);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
        week.push({ date: key, count: submissions[key] ?? 0, future: date > today });
        cursor.setDate(cursor.getDate() + 1);
      }
      result.push(week);
    }
    return result;
  }, [submissions]);

  const monthLabels = useMemo(() => weeks.map((week, index) => {
    const first = week[0];
    if (!first) return "";
    const date = new Date(`${first.date}T12:00:00`);
    return index === 0 || date.getDate() <= 7 ? date.toLocaleString("en-US", { month: "short" }) : "";
  }), [weeks]);

  const colorFor = (count: number) => {
    if (count === 0) return "#d1d5db";
    if (count <= 2) return "#9be9a8";
    if (count <= 5) return "#40c463";
    if (count <= 9) return "#30a14e";
    return "#216e39";
  };

  return (
    <div className="min-w-[760px] text-zinc-700">
      <div className="mb-2 grid gap-1 text-[10px] text-zinc-500" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
        {monthLabels.map((month, index) => <span key={index}>{month}</span>)}
      </div>
      <div className="flex gap-[3px]" aria-label="Codeforces submission activity over the past year">
        {weeks.map((week, index) => (
          <div className="flex flex-col gap-[3px]" key={index}>
            {week.map((day) => (
              <span
                key={day.date}
                title={day.future ? "" : `${day.date}: ${day.count} submissions`}
                aria-label={day.future ? undefined : `${day.date}: ${day.count} submissions`}
                className="block h-[10px] w-[10px] rounded-[2px]"
                style={{ backgroundColor: day.future ? "transparent" : colorFor(day.count) }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-zinc-500">
        <span>Less</span>
        {["#d1d5db", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map((color) => <span key={color} className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: color }} />)}
        <span>More</span>
      </div>
      {status === "loading" && <p className="mt-2 text-xs text-zinc-500">Loading Codeforces activity…</p>}
      {status === "error" && <p className="mt-2 text-xs text-zinc-500">Couldn’t load activity right now. Please try again later.</p>}
    </div>
  );
}

export function Dsa() {
  return (
    <section id="dsa" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="" eyebrow="" title={<>DSA Journey</>} />

        <Reveal>
          <div className="mx-auto max-w-4xl px-1 py-2 text-muted-foreground">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-base">MY PROBLEM-SOLVING LOG</p>
            <p className="text-justify text-base leading-8 sm:text-lg sm:leading-9" style={{ textAlign: "justify", textJustify: "inter-word" }}>
              My journey with DSA started with a simple goal: getting better at problem solving, and somehow turned into 500+ problems solved across different platforms. I have solved 300+ problems on LeetCode alone and regularly practice on platforms like Codeforces, CodeChef, and HackerRank. Recently, I stepped into competitive programming and have participated in 20+ live contests, which has taught me that solving a problem is one thing, solving it before the clock runs out is a completely different game. I still struggle with problems, get stuck on ideas, and occasionally spend far too long debugging something that turns out to be a tiny mistake, but that is also what I enjoy about it. Every problem gives me something new to learn, and I am continuously working to improve my problem-solving skills, speed, and consistency.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="brutalist-card mx-auto mt-8 max-w-4xl overflow-hidden border-2 border-black bg-white text-zinc-900 shadow-[6px_6px_0_0_#52525b]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-white px-4 py-3">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-zinc-900 sm:text-3xl">LeetCode</h3>
              <a
                href="https://leetcode.com/u/AVINASH-TIWARI/"
                target="_blank"
                rel="noreferrer"
                className="brutalist-button brutalist-button-live !inline-flex !w-auto !min-w-0 !min-h-0 !h-auto !px-3 !py-1.5 !text-sm sm:!px-3.5 sm:!py-1.5 sm:!text-base"
                style={{ width: "fit-content", minWidth: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0, whiteSpace: "nowrap" }}
              >
                PROFILE ↗
              </a>
            </div>
            <div className="overflow-x-auto bg-zinc-900 px-2 py-2 sm:px-4 sm:py-3">
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
        <Reveal delay={0.2}>
          <div className="brutalist-card mx-auto mt-8 max-w-4xl overflow-hidden border-2 border-black bg-white text-zinc-900 shadow-[6px_6px_0_0_#52525b]">
            <div className="flex items-center justify-between gap-3 border-b-2 border-black bg-white px-4 py-3">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-zinc-900 sm:text-3xl">Codeforces</h3>
              <a
                href="https://codeforces.com/profile/avinashtiwari2005ws"
                target="_blank"
                rel="noreferrer"
                className="brutalist-button brutalist-button-live !inline-flex !w-auto !min-w-0 !min-h-0 !h-auto !px-3 !py-1.5 !text-sm sm:!px-3.5 sm:!py-1.5 sm:!text-base"
                style={{ width: "fit-content", minWidth: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 0, whiteSpace: "nowrap" }}
              >
                PROFILE ↗
              </a>
            </div>
            <div className="overflow-x-auto bg-white px-2 py-2 sm:px-4 sm:py-3">
              <CodeforcesHeatmap />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
