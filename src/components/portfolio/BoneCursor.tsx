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
        <path d="M8.5 3.5C4.8.8 1.1 4 3.3 7.8C.1 11.2 3 16.1 7.4 14.9L16.1 11.7L32.8 17.9C31.1 22.2 35.4 26 39 23.2C43.7 25.2 47 21.2 44.5 17.8C47.4 14.1 43.8 9.7 39.6 11.1L19.1 3.6C16.8.3 12.2.4 10.3 3.6C9.7 3.5 9.1 3.4 8.5 3.5Z" fill="#FFE033" stroke="#080808" strokeWidth="2.8" strokeLinejoin="round" />
        <path d="M8 6.1C9.1 5.5 10.3 5.9 11 6.8" stroke="#FFF7C2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19.5 8.5 31.5 13" stroke="#080808" strokeOpacity=".16" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
