"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      const { x, y } = mouseRef.current;
      ringPosRef.current.x += (x - ringPosRef.current.x) * 0.12;
      ringPosRef.current.y += (y - ringPosRef.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x}px`;
        ringRef.current.style.top = `${ringPosRef.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed top-0 left-0 w-3 h-3 bg-coral rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply transition-[width,height,background] duration-200"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.9), 0 0 8px rgba(255,78,42,0.25)",
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="fixed top-0 left-0 w-10 h-10 border border-white/70 bg-white/10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{
          boxShadow: "0 0 0 1px rgba(13,13,13,0.12)",
          transition: "transform 0.12s ease, width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
