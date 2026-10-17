# Avinash Tiwari — Portfolio

A responsive, immersive developer portfolio built with **React, TypeScript, Vite, Tailwind CSS v4 and Framer Motion**. The design combines expressive editorial typography, ambient motion, a dark/light theme toggle, and a DSA-notebook section.

## Live preview

The interactive portfolio is published here: https://avinash-tiwari.vercel.app

## Run locally

Requires Node.js 20.19+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Contact form setup (EmailJS)

The contact form uses EmailJS to send messages to the inbox configured in your EmailJS email template. To enable delivery:

1. Create an account at https://www.emailjs.com/ and connect an email service.
2. Create an email template. Set its **To Email** to the inbox where you want to receive messages. Use these template variables in the email body:
   - `{{from_name}}` — sender's name
   - `{{user_email}}` or `{{reply_to}}` — sender's email
   - `{{message}}` — message text
   - `{{subject}}` — generated subject
3. In Vercel, open **Project Settings → Environment Variables** and add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy the project so the variables are included in the build.

Use the same variable names in a local `.env` file if running locally. `.env.example` lists the required keys. Do not put private email-service credentials in frontend code; only use the EmailJS public key here. The form will show a setup message until all three values are configured.

## Personalising content

Edit `src/data/portfolio.ts` to update profile links, projects, DSA revision topics, skills, and the education/project timeline.

- Add a verified LinkedIn URL to `profile.linkedin`.
- Add a resume PDF under `public/` and set `profile.resume` (for example `/resume.pdf`).
- SupplAI intentionally has no demo URL until a real one is supplied.

## Structure

- `src/components/portfolio/` — modular hero, navigation, project cards, DSA notes, about, skills and contact sections.
- `src/data/portfolio.ts` — content separated from UI.
- `src/styles.css` — design tokens, responsive utilities and motion styles.
- `vite.config.ts` — Vite, React, Tailwind CSS v4 and path aliases.

## Original portfolio source is preserved

Before the redesign, the repository held a large single-file `index.html`. A backup branch named `legacy-backup-2026-10-17` was created before replacing the main branch, so the original file and its embedded assets remain recoverable in Git. The new app reuses the verified project/profile information and recreates the portfolio as modular React components; old embedded visuals have not been automatically extracted.

## Deploy

- **Vercel:** import this repository and use the default Vite settings.
- **GitHub Actions:** every push to `main` runs a production build check and uploads the generated `dist/` artifact. To host on GitHub Pages, enable Pages for the repository in Settings first; Vercel can also import this Vite project directly.
