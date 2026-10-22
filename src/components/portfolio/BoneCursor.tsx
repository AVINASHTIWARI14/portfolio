import { useEffect, useState } from "react";

type CursorPoint = { x: number; y: number; visible: boolean; pressed: boolean };

export function BoneCursor() {
  const [point, setPoint] = useState<CursorPoint>({ x: -100, y: -100, visible: false, pressed: false });

  useEffect(() => {
    const onMove = (event: MouseEvent) => setPoint((p) => ({ ...p, x: event.clientX, y: event.clientY, visible: true }));
    const onDown = () => setPoint((p) => ({ ...p, pressed: true }));
    const onUp = () => setPoint((p) => ({ ...p, pressed: false }));
    const onLeave = () => setPoint((p) => ({ ...p, visible: false }));
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="bone-cursor" style={{ left: point.x, top: point.y, opacity: point.visible ? 1 : 0, transform: `translate(-50%, -50%) rotate(-35deg) scale(${point.pressed ? 0.82 : 1})` }}>
      <svg viewBox="0 0 48 24" width="52" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" style={{ imageRendering: "pixelated" }}>
        <path d="M12 8C9.4 3.9 5.7 2.2 3 5C.2 7.8 1.8 11.6 5.8 13C2.1 15.6 3 20 6.7 21C9.7 21.8 12 18.8 14 16H34C36.1 19.1 38.5 22 41.5 20.7C45.2 19.1 45.3 15.2 42.1 13.1C46 11.6 47.3 7.9 44.3 5.3C41.3 2.7 37.8 4.3 35 8H12Z" fill="#F1EBDD" stroke="#29251F" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M8 6.2C6.7 5.4 5.4 5.8 4.9 7" stroke="#FFFCF5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 10.2H31" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M40 17.8C41 18 42 17.5 42.4 16.7" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
