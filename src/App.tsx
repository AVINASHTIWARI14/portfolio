import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Dsa } from "@/components/portfolio/Dsa";
import { About, Skills } from "@/components/portfolio/About";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CursorPet } from "@/components/portfolio/CursorPet";
import { BoneCursor } from "@/components/portfolio/BoneCursor";
import { playClickSound, playHoverSound } from "@/lib/ui-sounds";

export function App() {
  useEffect(() => {
    const selector = "button, a, [role='button'], input[type='submit']";

    const handleHover = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest(selector);
      if (!control || control.hasAttribute("disabled") || control.getAttribute("aria-disabled") === "true") return;
      if (event.relatedTarget instanceof Node && control.contains(event.relatedTarget)) return;
      playHoverSound();
    };

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest(selector);
      if (!control || control.hasAttribute("disabled") || control.getAttribute("aria-disabled") === "true") return;
      playClickSound();
    };

    document.addEventListener("mouseover", handleHover);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="bg-noise relative">
      <a
        href="#work"
        className="sr-only z-[80] rounded bg-lime px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <CursorPet />
      <BoneCursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Dsa />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
