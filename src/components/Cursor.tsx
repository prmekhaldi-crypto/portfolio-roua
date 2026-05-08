import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(tick);
    };
    tick();

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-magnetic]")) setHover(true);
      else setHover(false);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow md:block"
        style={{ boxShadow: "0 0 20px var(--primary-glow), 0 0 40px var(--primary)" }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full border border-primary/60 transition-[width,height,background] duration-300 md:block ${
          hover ? "h-14 w-14 bg-primary/10" : "h-8 w-8"
        }`}
      />
    </>
  );
}
