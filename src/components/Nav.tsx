"use client";

export default function Nav() {
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-paper border-b border-ink/10 max-md:px-5">
      <a
        href="#"
        onClick={(e) => handleClick(e, "#hero")}
        className="font-head text-[1.4rem] font-extrabold no-underline text-ink tracking-tighter"
      >
        Aksara<span className="text-coral">.</span>
      </a>

      <div className="flex items-center gap-8 max-md:hidden">
        {["Manifesto", "Layanan", "Karya", "Proses", "Pesan"].map(
          (label, i) => {
            const href =
              ["#manifesto", "#services", "#gallery", "#process", "#order"][
                i
              ];
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="font-mono text-[0.75rem] no-underline text-muted uppercase tracking-wide hover:text-ink transition-colors"
              >
                {label}
              </a>
            );
          }
        )}
      </div>

      <div className="flex items-center gap-1.5 font-mono text-[0.7rem] bg-lime text-ink px-3 py-1 rounded-full font-bold uppercase tracking-wide">
        <span className="w-1.5 h-1.5 bg-green-700 rounded-full animate-[pulse-dot_2s_infinite]" />
        Open for Work
      </div>
    </nav>
  );
}
