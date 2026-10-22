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
      <svg viewBox="0 0 48 28" width="38" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1 5.1a5.3 5.3 0 1 0-4.8 8.1l24.4 10.2a5.3 5.3 0 1 0 6.1-7.5L15.8 5.7a5.3 5.3 0 0 0-5.7-.6Z" fill="#FFE033" stroke="#080808" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M8.2 7.2c1.2-.8 2.7-.4 3.5.7" stroke="#FFF7C2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M36.9 14.7a5.3 5.3 0 1 0 4.8-8.1l-24.4-2.2a5.3 5.3 0 1 0-1.9 8.7l21.5 1.6Z" fill="#FFE033" stroke="#080808" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M36.9 14.7a5.3 5.3 0 1 0 4.8-8.1l-24.4-2.2a5.3 5.3 0 1 0-1.9 8.7l21.5 1.6Z" fill="#FFE033" />
        <path d="M18 10.2 31 11.4" stroke="#080808" strokeOpacity=".16" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
