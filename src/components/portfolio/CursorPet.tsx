import { useEffect, useRef, useState } from "react";

type PetState = { x: number; y: number; facing: 1 | -1; visible: boolean; running: boolean };

export function CursorPet() {
  const target = useRef({ x: -100, y: -100 });
  const position = useRef({ x: -100, y: -100 });
  const initialized = useRef(false);
  const [pet, setPet] = useState<PetState>({ x: -100, y: -100, facing: 1, visible: false, running: false });

  useEffect(() => {
    const updateTarget = (x: number, y: number) => {
      // Aim for a spot beside the pointer so the dog sits facing it, not underneath it.
      target.current = {
        x: Math.max(28, Math.min(window.innerWidth - 28, x - 38)),
        y: Math.max(36, Math.min(window.innerHeight - 24, y + 8)),
      };

      if (!initialized.current) {
        position.current = {
          x: Math.min(window.innerWidth - 24, x + 90),
          y: Math.min(window.innerHeight - 30, y + 58),
        };
        initialized.current = true;
        setPet({ ...position.current, facing: -1, visible: true, running: true });
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

    let lastRender = 0;
    let frame = 0;
    const step = (time: number) => {
      const current = position.current;
      const destination = target.current;
      const dx = destination.x - current.x;
      const dy = destination.y - current.y;
      const distance = Math.hypot(dx, dy);
      const running = distance > 5;
      // Fixed-size pixel steps: deliberately retro, but quick enough to keep up with the pointer.
      const speed = running ? Math.min(9, Math.max(3.5, distance * 0.18)) : 0;
      const next = running
        ? { x: current.x + (dx / distance) * Math.min(speed, distance), y: current.y + (dy / distance) * Math.min(speed, distance) }
        : current;
      position.current = { x: Math.round(next.x / 2) * 2, y: Math.round(next.y / 2) * 2 };

      if (time - lastRender > 32) {
        setPet((previous) => ({
          ...previous,
          x: position.current.x,
          y: position.current.y,
          facing: Math.abs(dx) > 1.5 ? (dx > 0 ? 1 : -1) : previous.facing,
          running,
        }));
        lastRender = time;
      }
      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  if (!pet.visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90]"
      style={{
        left: pet.x,
        top: pet.y,
        width: 56,
        height: 46,
        transform: `translate(-50%, -75%) scaleX(${pet.facing})`,
        imageRendering: "pixelated",
      }}
    >
      <svg viewBox="0 0 32 26" width="56" height="46" shapeRendering="crispEdges" className="overflow-visible">
        <style>{`
          .pet-tail { transform-box: fill-box; transform-origin: 2px 2px; animation: pet-tail-wag .22s steps(2,end) infinite alternate; }
          .pet-run { animation: pet-bob .16s steps(2,end) infinite alternate; }
          .pet-ear { transform-box: fill-box; transform-origin: bottom left; animation: pet-ear .3s steps(2,end) infinite alternate; }
          .pet-leg-a { animation: pet-leg-a .16s steps(2,end) infinite alternate; }
          .pet-leg-b { animation: pet-leg-b .16s steps(2,end) infinite alternate; }
          .pet-sit-tail { animation: pet-tail-wag .32s steps(2,end) infinite alternate; }
          @keyframes pet-tail-wag { from { transform: rotate(-18deg); } to { transform: rotate(22deg); } }
          @keyframes pet-bob { from { transform: translateY(0); } to { transform: translateY(-1px); } }
          @keyframes pet-ear { from { transform: rotate(0); } to { transform: rotate(8deg); } }
          @keyframes pet-leg-a { from { transform: translateY(-1px); } to { transform: translateY(1px); } }
          @keyframes pet-leg-b { from { transform: translateY(1px); } to { transform: translateY(-1px); } }
          @media (prefers-reduced-motion: reduce) { .pet-tail, .pet-run, .pet-ear, .pet-leg-a, .pet-leg-b, .pet-sit-tail { animation: none; } }
        `}</style>
        <g className={pet.running ? "pet-run" : ""}>
          {/* Strict monochrome palette for a tiny black-and-white game sprite. */}
          <g className={pet.running ? "pet-tail" : "pet-sit-tail"}>
            <rect x="3" y="11" width="4" height="4" fill="#111111" />
            <rect x="1" y="9" width="4" height="4" fill="#ffffff" />
            <rect x="2" y="10" width="2" height="2" fill="#111111" />
          </g>
          {/* Body and saddle patch */}
          <rect x="6" y="10" width="16" height="9" fill="#ffffff" />
          <rect x="8" y="8" width="12" height="3" fill="#ffffff" />
          <rect x="7" y="15" width="14" height="4" fill="#111111" />
          <rect x="10" y="11" width="7" height="4" fill="#111111" />
          <rect x="11" y="12" width="4" height="2" fill="#ffffff" />
          {/* Head, floppy ear, muzzle */}
          <rect x="17" y="4" width="10" height="10" fill="#ffffff" />
          <rect x="20" y="2" width="5" height="3" fill="#ffffff" />
          <g className="pet-ear">
            <rect x="17" y="1" width="4" height="6" fill="#111111" />
            <rect x="18" y="2" width="2" height="3" fill="#ffffff" />
          </g>
          <rect x="25" y="7" width="4" height="5" fill="#ffffff" />
          <rect x="27" y="9" width="3" height="2" fill="#111111" />
          <rect x="24" y="6" width="2" height="2" fill="#111111" />
          <rect x="25" y="12" width="3" height="1" fill="#111111" />
          {/* Pixel legs alternate while running and settle into a sit when close */}
          {pet.running ? (
            <>
              <g className="pet-leg-a">
                <rect x="8" y="18" width="4" height="5" fill="#111111" />
                <rect x="7" y="22" width="5" height="2" fill="#ffffff" />
              </g>
              <g className="pet-leg-b">
                <rect x="17" y="18" width="4" height="4" fill="#111111" />
                <rect x="18" y="21" width="5" height="2" fill="#ffffff" />
              </g>
            </>
          ) : (
            <>
              <rect x="9" y="17" width="4" height="5" fill="#111111" />
              <rect x="7" y="21" width="7" height="3" fill="#ffffff" />
              <rect x="18" y="17" width="4" height="5" fill="#111111" />
              <rect x="17" y="21" width="7" height="3" fill="#ffffff" />
            </>
          )}
        </g>
        <ellipse cx="16" cy="25" rx="11" ry="1" fill="#000000" opacity=".2" />
      </svg>
    </div>
  );
}
