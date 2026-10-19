import { useEffect, useRef, useState } from "react";

type PetState = { x: number; y: number; facing: 1 | -1; visible: boolean; running: boolean };

export function CursorPet() {
  const target = useRef({ x: -100, y: -100 });
  const position = useRef({ x: -100, y: -100 });
  const sitSide = useRef<1 | -1>(1);
  const lastMoveX = useRef(0);
  const lastCursorMoveAt = useRef(0);
  const [pet, setPet] = useState<PetState>({ x: -100, y: -100, facing: 1, visible: false, running: false });
  const [showWoof, setShowWoof] = useState(false);

  useEffect(() => {
    const updateTarget = (x: number, y: number) => {
      target.current = { x, y };
      lastCursorMoveAt.current = Date.now();
      if (!pet.visible) {
        position.current = { x: x + 72, y: y + 42 };
        setPet({ x: x + 72, y: y + 42, facing: -1, visible: true, running: true });
      }
    };
    const onMouseMove = (event: MouseEvent) => {
      updateTarget(event.clientX, event.clientY);
    };
    const onHoverCheck = (event: MouseEvent) => {
      const dog = position.current;
      const hoveringDog =
        event.clientX >= dog.x - 24 &&
        event.clientX <= dog.x + 24 &&
        event.clientY >= dog.y - 30 &&
        event.clientY <= dog.y + 10;
      setShowWoof(hoveringDog);
    };
    const onTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updateTarget(touch.clientX, touch.clientY);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousemove", onHoverCheck, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    const step = window.setInterval(() => {
      const current = position.current;
      const destination = target.current;
      // Choose a side once the dog gets close, then keep the target beside the cursor
      // so the dog doesn't oscillate between the cursor and its sitting position.
      const rawDx = destination.x - current.x;
      const rawDy = destination.y - current.y;
      const rawDistance = Math.hypot(rawDx, rawDy);
      if (Math.abs(rawDx) > 1.5) lastMoveX.current = rawDx;
      if (rawDistance > 70) {
        // Keep the direction the dog was running when it arrives.
        sitSide.current = lastMoveX.current >= 0 ? -1 : 1;
      }
      const goal = {
        x: destination.x + sitSide.current * 26,
        y: destination.y + 22,
      };
      const dx = goal.x - current.x;
      const dy = goal.y - current.y;
      const distance = Math.hypot(dx, dy);
      // Keep moving toward the cursor's side-position even if the cursor has just stopped.
      // Sit only when close enough; a new cursor movement shifts the goal and starts the chase again.
      const running = distance > 14;
      const speed = running ? Math.min(4.5, Math.max(1.35, distance * 0.075)) : 0;
      const next = running
        ? { x: current.x + (dx / distance) * speed, y: current.y + (dy / distance) * speed }
        : current;
      // Snap coordinates to a small grid for a deliberately retro, pixel-step movement.
      position.current = { x: Math.round(next.x / 4) * 4, y: Math.round(next.y / 4) * 4 };
      setPet((previous) => ({
        ...previous,
        x: position.current.x,
        y: position.current.y,
        facing: running && Math.abs(dx) > 2 ? (dx > 0 ? 1 : -1) : (previous.running ? (lastMoveX.current >= 0 ? 1 : -1) : previous.facing),
        running,
      }));
    }, 50);

    return () => {
      window.clearInterval(step);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousemove", onHoverCheck);
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
      {showWoof && <span style={{ position: "absolute", left: 34, top: -18, transform: `scaleX(${pet.facing})`, whiteSpace: "nowrap", background: "#fff", color: "#080808", border: "2px solid #080808", boxShadow: "2px 2px 0 #080808", padding: "2px 5px", fontSize: 10, fontWeight: 800, letterSpacing: ".04em", fontFamily: "monospace" }}>woof!</span>}
      <svg viewBox="0 0 32 26" width="48" height="40" shapeRendering="crispEdges" className="overflow-visible">
        <style>{`
          .pet-tail { transform-box: fill-box; transform-origin: 2px 2px; animation: pet-tail-wag .22s steps(2,end) infinite alternate; }
          .pet-pose { transform-box: fill-box; transform-origin: center bottom; transition: transform .22s ease-out; }
          .pet-pose--sit { transform: translateY(3px) scaleY(.78); }
          .pet-run { animation: pet-bob .24s steps(2,end) infinite alternate; }
          .pet-ear { animation: pet-ear .45s steps(2,end) infinite alternate; }
          .pet-leg-a { animation: pet-leg-a .24s steps(2,end) infinite alternate; }
          .pet-leg-b { animation: pet-leg-b .24s steps(2,end) infinite alternate; }
          .pet-sit-tail { animation: pet-tail-wag .32s steps(2,end) infinite alternate; }
          .pet-smoke { animation: pet-smoke .7s steps(3,end) infinite; transform-box: fill-box; transform-origin: center; }
          .pet-tongue { animation: pet-tongue .8s steps(2,end) infinite alternate; }
          @keyframes pet-smoke { 0% { opacity: .8; transform: translate(0, 0) scale(.7); } 70% { opacity: .35; } 100% { opacity: 0; transform: translate(-7px, -6px) scale(1.4); } }
          @keyframes pet-tongue { from { transform: translateY(0); } to { transform: translateY(1px); } }
          @keyframes pet-tail-wag { from { transform: rotate(-18deg); } to { transform: rotate(22deg); } }
          @keyframes pet-bob { from { transform: translateY(0); } to { transform: translateY(-2px); } }
          @keyframes pet-ear { from { transform: translateY(0); } to { transform: translateY(1px); } }
          @keyframes pet-leg-a { from { transform: translateY(-1px); } to { transform: translateY(1px); } }
          @keyframes pet-leg-b { from { transform: translateY(1px); } to { transform: translateY(-1px); } }
          @media (prefers-reduced-motion: reduce) { .pet-pose { transition: none; } .pet-tail, .pet-run, .pet-ear, .pet-leg-a, .pet-leg-b, .pet-sit-tail, .pet-smoke, .pet-tongue { animation: none; } }
        `}</style>
        {pet.running ? (
          <g className="pet-smoke">
            <rect x="2" y="19" width="3" height="3" fill="#a9a9a9" opacity=".9" />
            <rect x="5" y="16" width="3" height="3" fill="#c4c4c4" opacity=".8" />
            <rect x="1" y="15" width="3" height="3" fill="#929292" opacity=".65" />
            <rect x="6" y="13" width="2" height="2" fill="#d4d4d4" opacity=".5" />
          </g>
        ) : null}
        <g className={`pet-pose ${pet.running ? "" : "pet-pose--sit"}`}>
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
          {!pet.running && (
            <g className="pet-tongue">
              <rect x="26" y="12" width="3" height="4" fill="#ff6680" />
              <rect x="27" y="15" width="2" height="2" fill="#c92f50" />
            </g>
          )}
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
              {/* Seated pose: folded hind leg and straight front paw. */}
              <rect x="7" y="16" width="8" height="4" fill="#9b5d32" />
              <rect x="6" y="18" width="8" height="3" fill="#e7b779" />
              <rect x="18" y="15" width="4" height="5" fill="#9b5d32" />
              <rect x="17" y="19" width="7" height="3" fill="#e7b779" />
            </>
          )}
        </g>
        </g>
        <ellipse cx="16" cy="25" rx="11" ry="1" fill="#000" opacity=".16" />
      </svg>
    </div>
  );
}
