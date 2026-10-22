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
      <svg viewBox="0 0 48 28" width="52" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8 8.8C9.8 5.3 6.8 2.4 4 4.8C1.2 7.2 3.1 10.4 5.7 12.1C2.7 14 2.4 17.5 5.1 19.7C8 22 11.2 19.3 13.2 16.2L34.5 11.8C35.2 15.5 37.2 19.2 40.6 18.5C44.1 17.8 44.7 14.1 42.1 12.1C45.1 10.6 46.1 7.2 43.2 5.2C40.1 3.1 37.3 6.1 35.5 8.5L11.8 8.8Z" fill="#F3EDE1" stroke="#29251F" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M6.3 6.2C5.7 6.7 5.8 7.5 6.5 8.1" stroke="#FFFCF6" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M15.5 10.5L31.8 10.1" stroke="#D8CDBD" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M39.7 15.8C40.4 15.8 41 15.4 41.2 14.8" stroke="#D8CDBD" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
