import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-lime" aria-hidden />
      <div className="mx-auto mt-3 max-w-6xl px-3 sm:px-6">
        <nav
          aria-label="Primary"
          className="relative flex items-center justify-center border-[3px] border-black bg-white px-2 py-2 text-neutral-950 shadow-[6px_6px_0_#080808]"
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
    </header>
  );
}
