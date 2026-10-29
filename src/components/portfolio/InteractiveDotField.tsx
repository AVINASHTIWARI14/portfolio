import { useEffect, useRef } from "react";

type InteractiveDotFieldProps = {
  variant: "hero" | "contact";
};

type DogPosition = { x: number; y: number };

export function InteractiveDotField({ variant }: InteractiveDotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dogRef = useRef<DogPosition>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    const spacing = 24;
    const dotRadius = 1.15;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onDogMove = (event: Event) => {
      const customEvent = event as CustomEvent<DogPosition>;
      if (customEvent.detail) dogRef.current = customEvent.detail;
    };

    const draw = (timestamp = 0) => {
      context.clearRect(0, 0, width, height);
      const bounds = canvas.getBoundingClientRect();
      const dogX = dogRef.current.x - bounds.left;
      const dogY = dogRef.current.y - bounds.top;
      const influenceRadius = 88;

      for (let y = spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          const dx = x - dogX;
          const dy = y - dogY;
          const distance = Math.hypot(dx, dy);
          // Give the dot field a gentle, continuous wave even when the cursor is idle.
          // Cursor interaction is layered on top of this ambient motion.
          let offsetX = reducedMotion ? 0 : Math.sin(timestamp * 0.0011 + x * 0.035 + y * 0.018) * 2.2;
          let offsetY = reducedMotion ? 0 : Math.cos(timestamp * 0.0009 + x * 0.022 - y * 0.031) * 1.8;

          if (!reducedMotion && distance < influenceRadius && distance > 0.1) {
            const strength = (1 - distance / influenceRadius) * 7;
            offsetX += (dx / distance) * strength;
            offsetY += (dy / distance) * strength;
          }

          const fade = variant === "hero"
            ? Math.max(0.12, Math.min(0.88, 0.88 - (y / Math.max(height, 1)) * 0.68))
            : Math.max(0, Math.min(0.7, (y / Math.max(height, 1) - 0.04) * 0.76));

          context.beginPath();
          context.arc(x + offsetX, y + offsetY, dotRadius, 0, Math.PI * 2);
          context.fillStyle = `rgba(34, 34, 34, ${fade})`;
          context.fill();
        }
      }
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("dog-position", onDogMove as EventListener);
    window.addEventListener("resize", resize);
    frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("dog-position", onDogMove as EventListener);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
      style={{ opacity: variant === "hero" ? 0.78 : 0.9 }}
    />
  );
}
