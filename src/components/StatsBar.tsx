"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 47, suffix: "+", label: "Proyek Selesai" },
  { target: 3, suffix: "+", label: "Tahun Berkarya" },
  { target: 98, suffix: "%", label: "Klien Puas" },
  { target: 12, suffix: "+", label: "Industri Dilayani" },
];

function animateCounter(el: HTMLElement, target: number) {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = String(Math.round(current));
    if (current >= target) clearInterval(timer);
  }, 30);
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const nums = el.querySelectorAll<HTMLElement>("[data-target]");
            nums.forEach((n) => {
              const target = parseInt(n.dataset.target || "0", 10);
              animateCounter(n, target);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-ink px-12 py-12 flex justify-around items-center flex-wrap gap-8 max-md:px-5"
    >
      {stats.map((s, i) => (
        <div key={s.label} className="text-center">
          <span
            data-target={s.target}
            className="font-head text-clamp font-extrabold text-lime block leading-none tracking-tighter"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            0
          </span>
          <span className="font-mono text-[0.7rem] text-paper/50 uppercase tracking-widest mt-1 block">
            {s.label}
          </span>
          {i < stats.length - 1 && (
            <div className="w-px h-15 bg-paper/10 mx-auto mt-2 max-md:hidden" />
          )}
        </div>
      ))}
    </div>
  );
}
