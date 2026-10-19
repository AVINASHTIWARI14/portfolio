import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Dsa } from "@/components/portfolio/Dsa";
import { About, Skills } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CursorPet } from "@/components/portfolio/CursorPet";

export function App() {
  return (
    <div className="bg-noise relative">
      <a
        href="#work"
        className="sr-only z-[80] rounded bg-lime px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <CursorPet />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Dsa />
        <About />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
