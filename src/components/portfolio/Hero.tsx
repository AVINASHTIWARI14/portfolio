import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { InteractiveDotField } from "./InteractiveDotField";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-dot-fade">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop offset="58%" stopColor="white" stopOpacity="0.72" />
            <stop offset="100%" stopColor="white" stopOpacity="0.18" />
          </radialGradient>
          <linearGradient id="hero-dot-bottom-overlay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="22%" stopColor="white" stopOpacity="0.03" />
            <stop offset="42%" stopColor="white" stopOpacity="0.22" />
            <stop offset="62%" stopColor="white" stopOpacity="0.58" />
            <stop offset="82%" stopColor="white" stopOpacity="0.88" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="hero-dot-mask">
            <rect width="1440" height="900" fill="url(#hero-dot-fade)" />
          </mask>
        </defs>
        <rect x="0" y="300" width="1440" height="600" fill="url(#hero-dot-bottom-overlay)" />
      </motion.svg>
      <InteractiveDotField variant="hero" />
      <style>{`
        .hero-bubble-cluster {
          position: relative;
          flex: 0 0 190px;
          width: 190px;
          height: 200px;
          margin-left: 240px;
          pointer-events: none;
          filter: saturate(1.08);
        }
        .hero-bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255,255,255,.25);
          animation: hero-bubble-float 8s ease-in-out infinite;
        }
        .hero-bubble-2 { transform: scale(.45); left: -105px; top: -100px; animation-delay: -4s; }
        .hero-bubble-3 { transform: scale(.45); left: 80px; top: -115px; animation-delay: -6s; }
        .hero-bubble-4 { transform: scale(.35); left: -125px; top: 95px; animation-delay: -3s; }
        .hero-bubble-5 { transform: scale(.5); left: 5px; top: 105px; animation-delay: -5s; }
        .hero-bubble::before, .hero-bubble::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }
        .hero-bubble::before { top: 50px; left: 45px; width: 30px; height: 30px; }
        .hero-bubble::after { top: 80px; left: 80px; width: 20px; height: 20px; }
        .hero-bubble span { position: absolute; inset: 10px; border-radius: 50%; }
        .hero-bubble span:nth-child(1) { border-left: 15px solid #0fb4ff; filter: blur(8px); }
        .hero-bubble span:nth-child(2) { border-right: 15px solid #ff4484; filter: blur(8px); }
        .hero-bubble span:nth-child(3) { border-top: 15px solid #ffeb3b; filter: blur(8px); }
        .hero-bubble span:nth-child(4) { inset: 30px; border-left: 15px solid #ff4484; filter: blur(12px); }
        .hero-bubble span:nth-child(5) { border-bottom: 10px solid #fff; filter: blur(8px); transform: rotate(330deg); }
        @keyframes hero-bubble-float {
          0%, 100% { translate: 0 -20px; }
          50% { translate: 0 20px; }
        }
        @media (max-width: 640px) {
          .hero-bubble-cluster {
            flex-basis: 92px;
            width: 92px;
            height: 110px;
            margin-left: -42px;
            transform: scale(.48);
            transform-origin: left center;
            opacity: .95;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-bubble, .hero-bubble span { animation: none !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-56 sm:h-72 md:h-80"
        style={{
          background: "linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 45%) 45%, #ffffff 100%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(125deg, #a0a0a0 0%, #ffffff 32%, #b0b0b0 58%, #ffffff 82%, #a0a0a0 100%)",
          backgroundSize: "300% 300%",
        }}
        animate={reduce ? { opacity: 0.72 } : {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.62, 0.88, 0.62],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8">
        <div className="relative z-10 flex min-w-0 items-center">
          <h1 className="font-[Anton_SC] text-left text-[clamp(4.5rem,13.5vw,10.5rem)] leading-[0.95] tracking-tight">
            <span className="sr-only">Avinash Tiwari</span>
            <span aria-hidden="true" className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                Avinash
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span className="block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                <em className="text-gradient not-italic">Tiwari</em>
              </motion.span>
            </span>
          </h1>
      <div className="hero-bubble-cluster" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <div className={`hero-bubble hero-bubble-${index + 1}`} key={index}>
            <span /><span /><span /><span /><span />
          </div>
        ))}
      </div>
        </div>

      </div>


    </section>
  );
}
