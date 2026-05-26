"use client";

import { useState } from "react";

const navItems = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#gallery" },
  { label: "Proses", href: "#process" },
  { label: "Pesan", href: "#order" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-paper border-b border-ink/10 max-md:px-5">
      <a
        href="#"
        onClick={(e) => handleClick(e, "#hero")}
        className="font-head text-[1.4rem] font-extrabold no-underline text-ink tracking-tighter"
      >
        Aksara<span className="text-coral">.</span>
      </a>

      <div className="flex items-center gap-8 max-md:hidden">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="font-mono text-[0.75rem] no-underline text-muted uppercase tracking-wide hover:text-ink transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-md:flex flex-col gap-1.5 bg-transparent border-none p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>

        <div className="flex items-center gap-1.5 font-mono text-[0.7rem] bg-lime text-ink px-3 py-1 rounded-full font-bold uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-green-700 rounded-full animate-[pulse-dot_2s_infinite]" />
          Open for Work
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-paper border-b border-ink/10 flex flex-col items-center gap-6 py-8 px-5 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="font-head text-[1.5rem] font-bold no-underline text-ink tracking-tight hover:text-coral transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
