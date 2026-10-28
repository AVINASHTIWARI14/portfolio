import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8">
      <motion.svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <motion.g
          stroke="#777777"
          strokeWidth="1.15"
          animate={reduce ? undefined : { x: [0, -24, 12, 0], y: [0, 14, -10, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        >
          <path opacity=".20" d="M-180 110 C80 20 160 210 390 130 S710 35 900 130 S1240 260 1620 90" />
          <path opacity=".26" d="M-180 135 C80 45 160 235 390 155 S710 60 900 155 S1240 285 1620 115" />
          <path opacity=".32" d="M-180 160 C80 70 160 260 390 180 S710 85 900 180 S1240 310 1620 140" />
          <path opacity=".24" d="M-180 185 C80 95 160 285 390 205 S710 110 900 205 S1240 335 1620 165" />
          <path opacity=".18" d="M-180 210 C80 120 160 310 390 230 S710 135 900 230 S1240 360 1620 190" />
          <path opacity=".24" d="M-160 410 C100 300 230 500 440 420 S760 310 950 420 S1280 520 1610 390" />
          <path opacity=".30" d="M-160 435 C100 325 230 525 440 445 S760 335 950 445 S1280 545 1610 415" />
          <path opacity=".22" d="M-160 460 C100 350 230 550 440 470 S760 360 950 470 S1280 570 1610 440" />
          <path opacity=".17" d="M-160 485 C100 375 230 575 440 495 S760 385 950 495 S1280 595 1610 465" />
          <path opacity=".24" d="M-180 700 C70 610 220 800 430 710 S740 620 960 710 S1280 820 1620 680" />
          <path opacity=".30" d="M-180 725 C70 635 220 825 430 735 S740 645 960 735 S1280 845 1620 705" />
          <path opacity=".22" d="M-180 750 C70 660 220 850 430 760 S740 670 960 760 S1280 870 1620 730" />
          <path opacity=".16" d="M-180 775 C70 685 220 875 430 785 S740 695 960 785 S1280 895 1620 755" />
        </motion.g>
        <motion.g
          stroke="#222222"
          strokeWidth=".8"
          opacity=".20"
          animate={reduce ? undefined : { x: [0, 18, -12, 0], y: [0, -10, 16, 0] }}
          transition={{ duration: 42, repeat: Infinity, ease: "easeInOut", delay: -7 }}
        >
          <path d="M-100 280 C120 170 270 350 480 270 S790 170 1010 270 S1320 360 1540 250" />
          <path d="M-100 295 C120 185 270 365 480 285 S790 185 1010 285 S1320 375 1540 265" />
          <path d="M-100 310 C120 200 270 380 480 300 S790 200 1010 300 S1320 390 1540 280" />
          <path d="M-100 590 C120 480 270 660 480 580 S790 480 1010 580 S1320 670 1540 560" />
          <path d="M-100 605 C120 495 270 675 480 595 S790 495 1010 595 S1320 685 1540 575" />
          <path d="M-100 620 C120 510 270 690 480 610 S790 510 1010 610 S1320 700 1540 590" />
        </motion.g>
      </motion.svg>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8">
        <div className="relative z-10 min-w-0">
          <h1 className="font-[Lobster] text-left text-[clamp(4.5rem,13.5vw,10.5rem)] leading-[0.95] tracking-tight">
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
        </div>

      </div>


    </section>
  );
}
