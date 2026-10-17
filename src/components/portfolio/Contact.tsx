import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Reveal } from "./Reveal";

type FormState = "idle" | "sending" | "success" | "error" | "setup";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/AVINASHTIWARI14",
    icon: "https://cdn.simpleicons.org/github/080808",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vesper.commw?igsi=OWR0cDlkNWx0NHhm",
    icon: "https://cdn.simpleicons.org/instagram/E4405F",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@avinash_tiwari14",
    icon: "https://cdn.simpleicons.org/youtube/FF0000",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("setup");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name.trim(),
          reply_to: email.trim(),
          user_email: email.trim(),
          message: message.trim(),
          subject: `Portfolio message from ${name.trim()}`,
        },
        { publicKey },
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 md:py-36">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
            Let's <em className="text-gradient">connect.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <form
            onSubmit={sendMessage}
            className="space-y-6 border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_var(--foreground)] sm:p-8 md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Your name</span>
                <input
                  required
                  autoComplete="name"
                  maxLength={100}
                  value={name}
                  onChange={(event) => { setName(event.target.value); setStatus("idle"); }}
                  placeholder="Name"
                  className="h-12 w-full border-2 border-foreground bg-background px-4 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Your email</span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={email}
                  onChange={(event) => { setEmail(event.target.value); setStatus("idle"); }}
                  placeholder="you@example.com"
                  className="h-12 w-full border-2 border-foreground bg-background px-4 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                maxLength={5000}
                value={message}
                onChange={(event) => { setMessage(event.target.value); setStatus("idle"); }}
                placeholder="Tell me what you have in mind..."
                className="w-full resize-y border-2 border-foreground bg-background p-4 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]"
              />
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="brutalist-button brutalist-button-live brutalist-button-contact disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                <span className="brutalist-button-text">{status === "sending" ? "Sending..." : "Send message"}</span>
                {status !== "sending" && <ArrowUpRight className="brutalist-button-arrow" />}
              </button>

              <p aria-live="polite" className="text-sm text-muted-foreground">
                {status === "success" && "Message sent. Thanks for reaching out!"}
                {status === "error" && "Message couldn't be sent. Please try again shortly."}
                {status === "setup" && "Contact form setup is pending. Please configure the EmailJS environment variables in Vercel."}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-12 max-w-3xl">
          <nav aria-label="Social links" className="flex items-center justify-center gap-8 sm:gap-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="group inline-flex h-16 w-16 items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 sm:h-[76px] sm:w-[76px]"
              >
                <img
                  src={social.icon}
                  alt=""
                  loading="lazy"
                  className="h-14 w-14 object-contain transition-[filter] duration-200 group-hover:drop-shadow-[0_3px_5px_rgb(0_0_0_/_20%)] sm:h-16 sm:w-16"
                />
              </a>
            ))}
          </nav>
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
