import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX }} className="h-0.5 origin-left bg-lime" aria-hidden />
      <div className="mx-auto mt-3 max-w-6xl px-3 sm:px-6">
        <nav
          aria-label="Primary"
          className="relative flex items-center justify-center rounded-full border border-neutral-200 bg-white px-2 py-1.5 text-neutral-950 shadow-sm"
        >
          <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active === n.id ? "text-neutral-950" : "text-neutral-600 hover:text-neutral-950",
                  )}
                >
                  {active === n.id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-secondary" />
                  )}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute right-2 flex items-center gap-1.5">
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-neutral-300 text-neutral-950 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-3 mt-2 rounded-3xl border border-neutral-200 bg-white p-3 text-neutral-950 shadow-md md:hidden"
          >
            <ul>
              {navItems.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl",
                      active === n.id ? "bg-neutral-100 text-neutral-950" : "text-neutral-800",
                    )}
                  >
                    {n.label}
                    <span className="font-mono text-xs text-neutral-500">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
