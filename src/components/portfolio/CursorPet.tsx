import { useEffect, useRef, useState } from "react";
import { playWoofSound } from "@/lib/ui-sounds";

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
    let wasHoveringDog = false;
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
      if (hoveringDog && !wasHoveringDog) playWoofSound();
      wasHoveringDog = hoveringDog;
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
      const cursorIsMoving = Date.now() - lastCursorMoveAt.current < 180;
      // Sit as soon as the cursor becomes idle.
      const running = cursorIsMoving && distance > 14;
      const speed = running ? Math.min(8, Math.max(3, distance * 0.14)) : 0;
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
        width: 56,
        height: 46,
        transform: `translate(-50%, -75%) scaleX(${pet.facing})`,
        imageRendering: "pixelated",
      }}
    >
      {showWoof && <span style={{ position: "absolute", left: 34, top: -18, transform: `scaleX(${pet.facing})`, whiteSpace: "nowrap", background: "#fff", color: "#080808", border: "2px solid #080808", boxShadow: "2px 2px 0 #080808", padding: "2px 5px", fontSize: 10, fontWeight: 800, letterSpacing: ".04em", fontFamily: "monospace" }}>woof!</span>}
      <svg viewBox="0 0 32 26" width="56" height="46" shapeRendering="crispEdges" className="overflow-visible">
        <style>{`
          .pet-tail { transform-box: fill-box; transform-origin: 2px 2px; animation: pet-tail-wag .22s steps(2,end) infinite alternate; }
          .pet-pose { transform-box: fill-box; transform-origin: center bottom; transition: transform .22s ease-out; }
          .pet-pose--sit { transform: translateY(3px) scaleY(.78); }
          .pet-run { animation: pet-bob .24s steps(2,end) infinite alternate; }
          .pet-ear { animation: pet-ear .45s steps(2,end) infinite alternate; }
          .pet-leg-a { transform-box: fill-box; transform-origin: center top; animation: pet-leg-a .18s steps(2,end) infinite alternate; }
          .pet-leg-b { transform-box: fill-box; transform-origin: center top; animation: pet-leg-b .18s steps(2,end) infinite alternate; }
          .pet-sit-tail { animation: pet-tail-wag .32s steps(2,end) infinite alternate; }
          .pet-smoke { animation: pet-smoke .7s steps(3,end) infinite; transform-box: fill-box; transform-origin: center; }
          .pet-tongue { animation: pet-tongue .8s steps(2,end) infinite alternate; }
          @keyframes pet-smoke { 0% { opacity: .8; transform: translate(0, 0) scale(.7); } 70% { opacity: .35; } 100% { opacity: 0; transform: translate(-7px, -6px) scale(1.4); } }
          @keyframes pet-tongue { from { transform: translateY(0); } to { transform: translateY(1px); } }
          @keyframes pet-tail-wag { from { transform: rotate(-18deg); } to { transform: rotate(22deg); } }
          @keyframes pet-bob { from { transform: translateY(0); } to { transform: translateY(-2px); } }
          @keyframes pet-ear { from { transform: translateY(0); } to { transform: translateY(1px); } }
          @keyframes pet-leg-a { from { transform: translateY(-1px) rotate(-22deg); } to { transform: translateY(1px) rotate(22deg); } }
          @keyframes pet-leg-b { from { transform: translateY(1px) rotate(22deg); } to { transform: translateY(-1px) rotate(-22deg); } }
        `}</style>
        <g className={pet.running ? "pet-run" : "pet-pose pet-pose--sit"}>
          <rect x="5" y="10" width="17" height="10" fill="#C58B55" />
          <rect x="8" y="7" width="13" height="8" fill="#D9A36A" />
          <rect x="20" y="10" width="7" height="6" fill="#D9A36A" />
          <rect x="25" y="12" width="3" height="3" fill="#29251F" />
          <rect x="21" y="9" width="2" height="2" fill="#29251F" />
          <rect x="7" y="18" width="4" height="5" fill="#8C5A35" className="pet-leg-a" />
          <rect x="17" y="18" width="4" height="5" fill="#8C5A35" className="pet-leg-b" />
          <rect x="3" y="9" width="4" height="4" fill="#8C5A35" className="pet-tail" />
          <rect x="10" y="5" width="4" height="4" fill="#8C5A35" className="pet-ear" />
          <rect x="24" y="15" width="2" height="2" fill="#F28C8C" className="pet-tongue" />
        </g>
      </svg>
    </div>
  );
}
