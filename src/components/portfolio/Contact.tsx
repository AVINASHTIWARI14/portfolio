import { useState } from "react";
import { motion } from "framer-motion";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { InteractiveDotField } from "./InteractiveDotField";
import "./social-brutalist.css";

type FormState = "idle" | "sending" | "success" | "error" | "setup";

const socials = [
  { name: "GitHub", href: "https://github.com/AVINASHTIWARI14", icon: "https://cdn.simpleicons.org/github/080808" },
  { name: "Instagram", href: "https://www.instagram.com/vesper.commw?igsi=OWR0cDlkNWx0NHhm", icon: "https://cdn.simpleicons.org/instagram/E4405F" },
  { name: "LinkedIn", href: "https://www.linkedin.com/", icon: null },
  { name: "YouTube", href: "https://www.youtube.com/@avinash_tiwari14", icon: "https://cdn.simpleicons.org/youtube/FF0000" },
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
      await emailjs.send(serviceId, templateId, {
        from_name: name.trim(),
        reply_to: email.trim(),
        user_email: email.trim(),
        message: message.trim(),
        subject: `Portfolio message from ${name.trim()}`,
      }, { publicKey });
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-40"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, rgb(255 255 255 / 92%) 18%, rgb(255 255 255 / 65%) 42%, rgb(255 255 255 / 28%) 72%, rgb(255 255 255 / 0%) 100%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "linear-gradient(125deg, #a0a0a0 0%, #ffffff 32%, #b0b0b0 58%, #ffffff 82%, #a0a0a0 100%)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.62, 0.88, 0.62],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <InteractiveDotField variant="contact" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight">
            Let's <em className="not-italic text-foreground">connect.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <form onSubmit={sendMessage} className="space-y-6 border-2 border-foreground bg-white p-6 shadow-[6px_6px_0_var(--foreground)] sm:p-8 md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Your name</span>
                <input required autoComplete="name" maxLength={100} value={name} onChange={(event) => { setName(event.target.value); setStatus("idle"); }} placeholder="Name" className="h-12 w-full border-2 border-foreground bg-white px-4 text-black placeholder:text-neutral-500 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]" />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Your email</span>
                <input required type="email" autoComplete="email" maxLength={254} value={email} onChange={(event) => { setEmail(event.target.value); setStatus("idle"); }} placeholder="you@example.com" className="h-12 w-full border-2 border-foreground bg-white px-4 text-black placeholder:text-neutral-500 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea required rows={5} maxLength={5000} value={message} onChange={(event) => { setMessage(event.target.value); setStatus("idle"); }} placeholder="Tell me what you have in mind..." className="w-full resize-y border-2 border-foreground bg-white p-4 text-black placeholder:text-neutral-500 outline-none transition-shadow focus:shadow-[3px_3px_0_var(--foreground)]" />
            </label>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={status === "sending"} className="brutalist-button brutalist-button-live brutalist-button-contact disabled:cursor-wait disabled:opacity-60">
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
          <nav aria-label="Social links" className="flex items-center justify-center gap-5 sm:gap-7">
            {socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} title={social.name}
                className="social-brutalist group inline-flex h-[76px] w-[76px] items-center justify-center border-[3px] border-foreground bg-background shadow-[5px_5px_0_var(--foreground)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#080808] hover:shadow-[8px_8px_0_#080808] active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 sm:h-[88px] sm:w-[88px]">
                {social.name === "LinkedIn" ? (
                  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-14 w-14 sm:h-16 sm:w-16">
                    <path fill="#0A66C2" d="M11 18h6v20h-6zM14 9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M21 18h5.8v2.7h.1c.8-1.5 2.8-3.2 5.8-3.2 6.2 0 7.3 4.1 7.3 9.4V38h-6V28c0-2.4 0-5.5-3.4-5.5s-3.9 2.6-3.9 5.3V38h-6z" />
                  </svg>
                ) : (
                  <img src={social.icon ?? ""} alt="" loading="lazy" className="h-14 w-14 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16" />
                )}
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
        <a href="#top" className="hover:text-lime">Back to top ↑</a>
      </div>
    </footer>
  );
}
