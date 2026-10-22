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
        <path d="M12 8H11V7H9V5H7V4H5V5H4V6H3V8H4V10H5V11H7V12H5V13H4V15H3V17H4V19H6V20H8V21H10V20H12V18H13V16H34V17H35V19H37V20H39V21H41V20H43V19H44V17H43V15H42V14H40V13H42V12H44V11H45V9H46V7H45V6H43V5H41V4H39V5H37V6H36V8Z" fill="#F1EBDD" stroke="#29251F" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M8 6.2C6.7 5.4 5.4 5.8 4.9 7" stroke="#FFFCF5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 10.2H31" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M40 17.8C41 18 42 17.5 42.4 16.7" stroke="#D3C8B7" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
