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
        <path d="M10.2 4.6C8.7 1.2 5.1.5 2.8 3.2C.5 5.5 1.3 8.1 3.7 9.7C1.5 12.1 3.1 15.6 6.3 16.1C8.4 16.5 10 15.1 11.1 13.7L17.2 10.8L31.1 17.2L36.7 20.1C35.1 22.8 36.9 26 40.1 25.8C42.2 25.7 43.5 24.1 43.5 21.9C46.7 22.7 49 20.2 47.4 17.3C46.1 14.8 43.7 14.3 41.3 15.8C40.7 12.6 37.3 11.4 35 13.5L32.1 14.9L18.6 8.7L13.1 5.8C12.8 4.2 11.8 3.4 10.2 4.6Z" fill="#F1EBDD" stroke="#171613" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M8 6.1C9.1 5.5 10.3 5.9 11 6.8" stroke="#FFFCF5" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19.5 8.5 31.5 13" stroke="#C9C0B2" strokeOpacity=".85" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
