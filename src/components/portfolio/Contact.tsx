import { useState } from "react";
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const hasEmail = Boolean(profile.email);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`Hello from ${name || "your portfolio"}`)}&body=${encodeURIComponent(msg)}`;

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 glow-lime blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"><span className="text-lime">05</span> — Contact</p>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
            Let's <em className="text-gradient">connect.</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Internships, collaborations, or just a good problem to talk through — I'd love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            {hasEmail ? (
              <form
                onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
                className="space-y-4 rounded-3xl border border-border bg-card p-6 sm:p-8"
              >
                <label className="block">
                  <span className="text-sm text-muted-foreground">Your name</span>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 outline-none focus:border-lime" />
                </label>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Message</span>
                  <textarea required value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} className="mt-2 w-full rounded-xl border border-input bg-background p-4 outline-none focus:border-lime" />
                </label>
                <div className="flex flex-wrap gap-2">
                  <button type="submit" className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 font-medium text-primary-foreground">
                    <Mail className="h-4 w-4" /> Open in email
                  </button>
                  <button type="button" onClick={copy} className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 hover:border-lime">
                    {copied ? <Check className="h-4 w-4 text-lime" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied" : profile.email}
                  </button>
                </div>
              </form>
            ) : (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-lime sm:p-8"
              >
                <Github className="h-8 w-8 text-lime" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Best way to reach me</p>
                  <p className="mt-2 flex items-center gap-3 font-display text-3xl sm:text-4xl">
                    github.com/AVINASHTIWARI14
                    <ArrowUpRight className="h-7 w-7 shrink-0 transition-transform group-hover:rotate-45" />
                  </p>
                </div>
              </a>
            )}
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex h-16 items-center justify-between rounded-2xl border border-border px-6 transition-colors hover:border-lime hover:text-lime">
              <span className="flex items-center gap-3"><Github className="h-5 w-5" /> GitHub</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex h-16 items-center justify-between rounded-2xl border border-border px-6 hover:border-lime hover:text-lime">
                <span className="flex items-center gap-3"><Linkedin className="h-5 w-5" /> LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {profile.resume && (
              <a href={profile.resume} target="_blank" rel="noreferrer" className="flex h-16 items-center justify-between rounded-2xl border border-border px-6 hover:border-lime hover:text-lime">
                <span className="flex items-center gap-3"><FileText className="h-5 w-5" /> Resume</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {!hasEmail && (
              <p className="rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                Email contact will appear here once a public address is added.
              </p>
            )}
          </Reveal>
        </div>
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