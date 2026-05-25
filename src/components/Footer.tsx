"use client";

const navLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Layanan", href: "#services" },
  { label: "Karya", href: "#gallery" },
  { label: "Proses", href: "#process" },
  { label: "Mulai Proyek", href: "#order" },
];

const socialLinks = ["Behance", "Dribbble", "Instagram", "LinkedIn"];

export default function Footer() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ink px-12 py-16 pb-8 text-paper max-md:px-5">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-16 mb-12 pb-12 border-b border-paper/10 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <div className="font-head text-3xl font-extrabold tracking-tighter mb-4">
            Aksara<span className="text-coral">.</span>
          </div>
          <p className="text-[0.9rem] text-paper/50 leading-relaxed max-w-[260px]">
            Studio desain UI/UX yang percaya bahwa setiap piksel adalah peluang
            untuk bercerita.
          </p>
        </div>

        <div>
          <div className="font-mono text-[0.65rem] text-paper/40 uppercase tracking-widest mb-4">
            Navigasi
          </div>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="block text-[0.9rem] text-paper/70 no-underline mb-2.5 hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <div className="font-mono text-[0.65rem] text-paper/40 uppercase tracking-widest mb-4">
            Temukan Aksara
          </div>
          {socialLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="block text-[0.9rem] text-paper/70 no-underline mb-2.5 hover:text-lime transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4">
        <span className="font-mono text-[0.7rem] text-paper/30 tracking-wide">
          © 2025 Aksara Studio · Dibuat dengan ♥ di Jakarta
        </span>
        <div className="flex gap-2">
          {["ID", "EN"].map((lang) => (
            <button
              key={lang}
              className={`font-mono text-[0.7rem] bg-transparent border border-paper/20 px-3 py-1 rounded-sm uppercase tracking-wide transition-all ${
                lang === "ID"
                  ? "border-lime text-lime"
                  : "text-paper/50 hover:border-lime hover:text-lime"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
