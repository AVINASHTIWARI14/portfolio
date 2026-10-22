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
        <path d="M12 8H10V6H8V4H5V5H3V7H4V10H6V12H4V14H3V17H5V20H8V21H11V19H13V16H34V18H36V20H39V21H42V20H44V18H43V15H41V13H44V11H46V8H44V6H42V5H39V6H37V8Z" fill="#F1EBDD" stroke="#29251F" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M8 6.2C6.7 5.4 5.4 5.8 4.9 7" stroke="#FFFCF5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 10.2H31" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M40 17.8C41 18 42 17.5 42.4 16.7" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
