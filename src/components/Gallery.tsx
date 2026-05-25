"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    cat: "app",
    title: "Noctua Finance App",
    subtitle: "Mobile App · 2024",
    gradient: "from-[#1a0033] via-[#4a1a6b] to-coral",
    svg: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="15" y="5" width="50" height="70" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <rect x="22" y="18" width="36" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="22" y="30" width="28" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="22" y="42" width="36" height="14" rx="4" fill="rgba(255,78,42,0.4)" />
        <circle cx="40" cy="66" r="3" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
  },
  {
    cat: "web",
    title: "Verdant Studio Website",
    subtitle: "Web Design · 2024",
    gradient: "from-[#002233] via-[#004466] to-sky",
    svg: (
      <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
        <rect x="2" y="2" width="66" height="46" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <rect x="8" y="8" width="54" height="8" rx="2" fill="rgba(168,216,255,0.2)" />
        <rect x="8" y="22" width="30" height="20" rx="2" fill="rgba(255,255,255,0.08)" />
        <rect x="42" y="22" width="20" height="8" rx="2" fill="rgba(168,216,255,0.15)" />
        <rect x="42" y="34" width="20" height="8" rx="2" fill="rgba(168,216,255,0.1)" />
      </svg>
    ),
  },
  {
    cat: "brand",
    title: "Trimark Brand System",
    subtitle: "Branding · 2024",
    gradient: "from-[#1a2200] via-[#3d5200] to-lime",
    svg: (
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <polygon points="35,8 62,55 8,55" fill="rgba(198,241,53,0.25)" stroke="rgba(198,241,53,0.5)" strokeWidth="1.5" />
        <polygon points="35,18 52,48 18,48" fill="rgba(198,241,53,0.15)" />
        <circle cx="35" cy="35" r="6" fill="rgba(198,241,53,0.6)" />
      </svg>
    ),
  },
  {
    cat: "app",
    title: "Pulse Health Tracker",
    subtitle: "Mobile App · 2023",
    gradient: "from-[#220011] via-[#660033] to-[#ff6b9d]",
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="22" fill="rgba(255,107,157,0.2)" stroke="rgba(255,107,157,0.4)" strokeWidth="1" />
        <circle cx="30" cy="30" r="12" fill="rgba(255,107,157,0.3)" />
        <circle cx="30" cy="30" r="5" fill="rgba(255,107,157,0.8)" />
        <line x1="30" y1="8" x2="30" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <line x1="30" y1="46" x2="30" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <line x1="8" y1="30" x2="14" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <line x1="46" y1="30" x2="52" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    cat: "brand",
    title: "Oro Café Branding",
    subtitle: "Branding · 2023",
    gradient: "from-[#221100] via-[#663300] to-gold",
    svg: (
      <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
        <rect x="5" y="5" width="28" height="40" rx="3" fill="rgba(232,200,74,0.2)" stroke="rgba(232,200,74,0.4)" strokeWidth="1" />
        <rect x="37" y="15" width="28" height="30" rx="3" fill="rgba(232,200,74,0.15)" stroke="rgba(232,200,74,0.3)" strokeWidth="1" />
        <text x="19" y="30" textAnchor="middle" fill="rgba(232,200,74,0.8)" fontSize="14" fontWeight="bold">Ak</text>
      </svg>
    ),
  },
  {
    cat: "web",
    title: "Koral Dashboard",
    subtitle: "Web Design · 2023",
    gradient: "from-[#001122] via-[#003344] to-[#00aacc]",
    svg: (
      <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
        <rect x="5" y="8" width="60" height="34" rx="4" fill="rgba(0,170,204,0.1)" stroke="rgba(0,170,204,0.3)" strokeWidth="1" />
        <rect x="10" y="14" width="15" height="22" rx="2" fill="rgba(0,170,204,0.2)" />
        <rect x="29" y="14" width="36" height="8" rx="2" fill="rgba(0,170,204,0.15)" />
        <rect x="29" y="26" width="24" height="5" rx="2" fill="rgba(0,170,204,0.1)" />
        <rect x="29" y="34" width="15" height="5" rx="2" fill="rgba(0,170,204,0.2)" />
      </svg>
    ),
  },
];

const filters = ["all", "brand", "app", "web"];
const filterLabels: Record<string, string> = {
  all: "Semua",
  brand: "Branding",
  app: "Mobile App",
  web: "Web",
};

export default function Gallery() {
  const [active, setActive] = useState("all");

  return (
    <section id="gallery" className="px-12 py-24 bg-paper max-md:px-5 max-md:py-16">
      <ScrollReveal>
        <div className="font-mono text-[0.7rem] text-coral uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-coral">
          Showroom
        </div>
        <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Karya pilihan
          <br />
          Aksara
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-[0.7rem] px-4 py-1.5 border-[1.5px] border-ink rounded-full uppercase tracking-wide font-bold transition-all ${
                active === f
                  ? "bg-ink text-paper"
                  : "bg-transparent text-ink hover:bg-ink hover:text-paper"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid grid-cols-12 gap-4 max-md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-md bg-ink group transition-all duration-300 ${
                i === 0
                  ? "col-span-7 row-span-2 max-md:col-span-2 max-md:row-span-1"
                  : i < 3
                  ? "col-span-5 max-md:col-span-1"
                  : "col-span-4 max-md:col-span-1"
              } ${
                active === "all" || item.cat === active
                  ? "opacity-100 scale-100"
                  : "opacity-20 scale-[0.97] pointer-events-none"
              }`}
            >
              <div
                className={`w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br ${item.gradient} ${
                  i === 0 ? "max-md:aspect-[16/10]" : ""
                } group-hover:scale-105 transition-transform duration-400`}
                style={i === 0 ? { aspectRatio: "4/3" } : undefined}
              >
                {item.svg}
              </div>
              <div className="absolute inset-0 bg-ink/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="font-head text-base font-bold text-paper mb-1">
                  {item.title}
                </div>
                <div className="font-mono text-[0.65rem] text-lime uppercase tracking-wide">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
