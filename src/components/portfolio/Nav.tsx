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
          className="arcade-nav flex items-center justify-between rounded-full border border-maze/60 bg-glass py-1.5 pl-4 pr-1.5 text-foreground backdrop-blur-xl"
        >
          <a href="#top" className="flex items-center gap-2.5" aria-label="Avinash Tiwari — home">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-lime font-display text-sm font-semibold text-primary-foreground">
              AT
            </span>
            <span className="hidden font-display text-lg sm:inline">Avinash Tiwari</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active === n.id ? "text-lime" : "text-muted-foreground hover:text-lime",
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
          <div className="flex items-center gap-1.5">
            <button
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground hover:border-lime hover:text-lime md:hidden"
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
            className="arcade-nav mx-3 mt-2 rounded-3xl border border-maze/60 bg-card p-3 text-foreground md:hidden"
          >
            <ul>
              {navItems.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl",
                      active === n.id ? "bg-secondary text-lime" : "text-foreground",
                    )}
                  >
                    {n.label}
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
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