import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { isSoundMuted, setSoundMuted } from "@/lib/ui-sounds";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

export function Nav() {
  const active = useActiveSection();
  const [muted, setMuted] = useState(() => isSoundMuted());
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX, backgroundColor: "#FFD400" }} className="h-0.5 origin-left" aria-hidden />
      <div className="mx-auto mt-3 max-w-6xl px-3 sm:px-6">
        <nav
          aria-label="Primary"
          className="relative flex items-center justify-center border-[3px] border-black bg-[#b3b3b3] px-2 py-2 text-neutral-950 shadow-[6px_6px_0_#080808]"
        >
          <ul className="flex w-full items-center justify-start gap-1 overflow-x-auto whitespace-nowrap md:justify-center md:gap-2.5">
            {navItems.map((n) => (
              <li key={n.id} className="shrink-0">
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={cn(
                    "nav-brutalist relative px-2 py-2 text-xs font-bold uppercase tracking-wide sm:px-3 md:px-4 md:py-2.5 md:text-sm",
                    active === n.id ? "nav-brutalist-active" : "",
                  )}
                >
                  {active === n.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 bg-black" />
                  )}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        type="button"
        onClick={() => {
          const nextMuted = !muted;
          setMuted(nextMuted);
          setSoundMuted(nextMuted);
        }}
        aria-label={muted ? "Unmute interface sounds" : "Mute interface sounds"}
        aria-pressed={muted}
        className="brutalist-button brutalist-button-contact fixed bottom-5 right-5 z-[70] !h-14 !w-14 !min-w-0 !p-3 text-black sm:bottom-6 sm:right-6 sm:!h-16 sm:!w-16 sm:!p-3.5" style={{ width: "56px", height: "56px", outlineColor: "#080808", backgroundColor: muted ? "#f87171" : "#4ade80" }}
      >
        {muted ? <VolumeX size={18} strokeWidth={2.5} /> : <Volume2 size={18} strokeWidth={2.5} />}
      </button>
    </header>
  );
}
