import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen px-12 pt-32 pb-16 grid grid-cols-2 gap-16 items-center relative overflow-hidden max-md:grid-cols-1 max-md:px-5 max-md:pt-24 max-md:pb-12 max-md:gap-8"
    >
      <div
        className="absolute font-head text-[28vw] font-extrabold text-ink/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none tracking-tighter select-none"
      >
        AKS
      </div>

      <ScrollReveal className="relative z-10">
        <div className="font-mono text-[0.75rem] text-coral uppercase tracking-widest mb-6 flex items-center gap-2 before:content-[''] before:w-6 before:h-px before:bg-coral">
          UI/UX Studio · Jakarta
        </div>

        <h1 className="font-head text-clamp font-extrabold leading-none tracking-tighter mb-6 max-md:text-5xl"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          Desain yang
          <br />
          <span className="inline-block bg-lime text-ink px-[0.15em] -rotate-1 rounded-sm">
            berbicara
          </span>
          <br />
          lebih keras
        </h1>

        <p className="text-lg leading-relaxed text-muted max-w-[420px] mb-10">
          Aksara adalah studio desain UI/UX yang memadukan seni, fungsi, dan
          cerita — menciptakan antarmuka yang tak hanya indah, tapi juga terasa
          hidup.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#gallery"
            className="font-head text-[0.9rem] font-bold bg-ink text-paper px-7 py-3.5 rounded-sm no-underline tracking-wide hover:bg-coral hover:-translate-y-0.5 transition-all inline-block"
          >
            Lihat Karya →
          </a>
          <a
            href="#order"
            className="font-head text-[0.9rem] font-bold bg-transparent text-ink px-7 py-3.5 rounded-sm no-underline tracking-wide border-[1.5px] border-ink hover:bg-ink hover:text-paper hover:-translate-y-0.5 transition-all inline-block"
          >
            Mulai Proyek
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal
        delay="0.2s"
        className="relative"
      >
        <div className="w-full aspect-[4/5] relative max-md:aspect-video">
          <img
            src="https://placehold.co/600x750/1a1a2e/e0e0e0?text=UI+Design"
            alt="Hero visual"
            className="w-full h-full object-cover rounded-sm"
          />

          <div
            className="absolute font-mono text-[0.7rem] font-bold bg-coral text-white px-3 py-1.5 rounded-sm uppercase tracking-wide animate-[float_4s_ease-in-out_infinite]"
            style={{ top: "0.75rem", right: "0.75rem", animationDelay: "1s", zIndex: 2 }}
          >
            Brand Identity
          </div>
          <div
            className="absolute font-mono text-[0.7rem] font-bold bg-sky text-ink px-3 py-1.5 rounded-sm uppercase tracking-wide animate-[float_4s_ease-in-out_infinite] max-md:hidden"
            style={{ top: "3.5rem", right: "0.75rem", animationDelay: "2.5s", zIndex: 2 }}
          >
            App Design
          </div>
          <div
            className="absolute font-mono text-[0.7rem] font-bold bg-gold text-ink px-3 py-1.5 rounded-sm uppercase tracking-wide animate-[float_4s_ease-in-out_infinite] max-md:hidden"
            style={{ bottom: "8rem", left: "0.75rem", animationDelay: "0.5s", zIndex: 2 }}
          >
            Web UI
          </div>

          <div className="w-[200px] h-[200px] bg-coral/20 rounded-full blur-[60px] animate-[float_6s_ease-in-out_infinite] max-md:hidden"
            style={{ position: "absolute", top: "10%", right: "15%" }}
          />
          <div className="w-[150px] h-[150px] bg-lime/25 rounded-full blur-[50px] animate-[float_6s_ease-in-out_infinite] max-md:hidden"
            style={{ position: "absolute", bottom: "30%", left: "10%", animationDelay: "2s" }}
          />
          <div className="w-[180px] h-[180px] bg-violet/20 rounded-full blur-[60px] animate-[float_6s_ease-in-out_infinite] max-md:hidden"
            style={{ position: "absolute", bottom: "10%", right: "25%", animationDelay: "4s" }}
          />

          <div
            className="absolute font-mono text-[0.65rem] text-white/70 uppercase tracking-wide"
            style={{ bottom: "1rem", right: "0.75rem" }}
          >
            sejak 2022
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
