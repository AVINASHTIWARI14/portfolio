import { useEffect, useRef, useState } from "react";

type PetState = { x: number; y: number; facing: 1 | -1; visible: boolean; running: boolean };

export function CursorPet() {
  const target = useRef({ x: -100, y: -100 });
  const position = useRef({ x: -100, y: -100 });
  const [pet, setPet] = useState<PetState>({ x: -100, y: -100, facing: 1, visible: false, running: false });

  useEffect(() => {
    const updateTarget = (x: number, y: number) => {
      target.current = { x, y };
      if (!pet.visible) {
        position.current = { x: x + 72, y: y + 42 };
        setPet({ x: x + 72, y: y + 42, facing: -1, visible: true, running: true });
      }
    };
    const onMouseMove = (event: MouseEvent) => updateTarget(event.clientX, event.clientY);
    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateTarget(touch.clientX, touch.clientY);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    const step = window.setInterval(() => {
      const current = position.current;
      const destination = target.current;
      const dx = destination.x - current.x;
      const dy = destination.y - current.y;
      const distance = Math.hypot(dx, dy);
      const running = distance > 34;
      const speed = running ? Math.min(8, Math.max(2.4, distance * 0.12)) : 0;
      const next = distance > 34
        ? { x: current.x + (dx / distance) * speed, y: current.y + (dy / distance) * speed }
        : current;
      // Snap coordinates to a small grid for a deliberately retro, pixel-step movement.
      position.current = { x: Math.round(next.x / 2) * 2, y: Math.round(next.y / 2) * 2 };
      setPet((previous) => ({
        ...previous,
        x: position.current.x,
        y: position.current.y,
        facing: Math.abs(dx) > 2 ? (dx > 0 ? 1 : -1) : previous.facing,
        running,
      }));
    }, 40);

    return () => {
      window.clearInterval(step);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [pet.visible]);

  if (!pet.visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90]"
      style={{
        left: pet.x,
        top: pet.y,
        width: 48,
        height: 40,
        transform: `translate(-50%, -75%) scaleX(${pet.facing})`,
        imageRendering: "pixelated",
      }}
    >
      <svg viewBox="0 0 32 26" width="48" height="40" shapeRendering="crispEdges" className="overflow-visible">
        <style>{`
          .pet-tail { transform-box: fill-box; transform-origin: 2px 2px; animation: pet-tail-wag .22s steps(2,end) infinite alternate; }
          .pet-run { animation: pet-bob .16s steps(2,end) infinite alternate; }
          .pet-ear { animation: pet-ear .45s steps(2,end) infinite alternate; }
          .pet-leg-a { animation: pet-leg-a .16s steps(2,end) infinite alternate; }
          .pet-leg-b { animation: pet-leg-b .16s steps(2,end) infinite alternate; }
          .pet-sit-tail { animation: pet-tail-wag .32s steps(2,end) infinite alternate; }
          @keyframes pet-tail-wag { from { transform: rotate(-18deg); } to { transform: rotate(22deg); } }
          @keyframes pet-bob { from { transform: translateY(0); } to { transform: translateY(-2px); } }
          @keyframes pet-ear { from { transform: translateY(0); } to { transform: translateY(1px); } }
          @keyframes pet-leg-a { from { transform: translateY(-1px); } to { transform: translateY(1px); } }
          @keyframes pet-leg-b { from { transform: translateY(1px); } to { transform: translateY(-1px); } }
          @media (prefers-reduced-motion: reduce) { .pet-tail, .pet-run, .pet-ear, .pet-leg-a, .pet-leg-b, .pet-sit-tail { animation: none; } }
        `}</style>
        <g className={pet.running ? "pet-run" : ""}>
          <g className={pet.running ? "pet-tail" : "pet-sit-tail"}>
            <rect x="3" y="11" width="4" height="4" fill="#9b5d32" />
            <rect x="1" y="9" width="4" height="4" fill="#c88449" />
          </g>
          <rect x="6" y="10" width="16" height="9" fill="#c88449" />
          <rect x="8" y="8" width="12" height="3" fill="#e7b779" />
          <rect x="7" y="15" width="14" height="4" fill="#9b5d32" />
          <rect x="10" y="12" width="7" height="3" fill="#f4d5a0" />
          <rect x="17" y="4" width="10" height="10" fill="#e7b779" />
          <rect x="20" y="2" width="5" height="3" fill="#e7b779" />
          <g className="pet-ear">
            <rect x="17" y="1" width="4" height="6" fill="#9b5d32" />
            <rect x="18" y="2" width="2" height="3" fill="#c88449" />
          </g>
          <rect x="25" y="7" width="4" height="5" fill="#f4d5a0" />
          <rect x="27" y="9" width="3" height="2" fill="#33251d" />
          <rect x="24" y="6" width="2" height="2" fill="#33251d" />
          <rect x="25" y="12" width="3" height="1" fill="#9b5d32" />
          {pet.running ? (
            <>
              <g className="pet-leg-a">
                <rect x="8" y="18" width="4" height="5" fill="#9b5d32" />
                <rect x="7" y="22" width="5" height="2" fill="#e7b779" />
              </g>
              <g className="pet-leg-b">
                <rect x="17" y="18" width="4" height="4" fill="#9b5d32" />
                <rect x="18" y="21" width="5" height="2" fill="#e7b779" />
              </g>
            </>
          ) : (
            <>
              <rect x="9" y="17" width="4" height="5" fill="#9b5d32" />
              <rect x="7" y="21" width="7" height="3" fill="#e7b779" />
              <rect x="18" y="17" width="4" height="5" fill="#9b5d32" />
              <rect x="17" y="21" width="7" height="3" fill="#e7b779" />
            </>
          )}
        </g>
        <ellipse cx="16" cy="25" rx="11" ry="1" fill="#000" opacity=".16" />
      </svg>
    </div>
  );
}
