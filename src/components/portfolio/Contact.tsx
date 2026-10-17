import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
            Let's <em className="text-gradient">connect.</em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Avinash Tiwari</p>
        <p className="font-mono text-xs">Built with React, TypeScript & Framer Motion</p>
        <a href="#top" className="hover:text-lime">Back to top ↑</a>
      </div>
    </footer>
  );
}
