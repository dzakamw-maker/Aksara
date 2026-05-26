import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discover & Listen",
    desc: "Aku mendengarkan lebih banyak dari berbicara. Memahami bisnis, pengguna, dan masalah nyata sebelum menyentuh Figma.",
    duration: "3–5 hari",
  },
  {
    num: "02",
    title: "Define & Sketch",
    desc: "Memetakan alur pengguna, membuat wireframe kasar, dan menetapkan arah visual yang akan menjadi fondasi desain.",
    duration: "4–7 hari",
  },
  {
    num: "03",
    title: "Design & Refine",
    desc: "Di sinilah seni benar-benar dimulai. High-fidelity design, iterasi berdasarkan feedback, dan perhatian pada setiap detail.",
    duration: "7–14 hari",
  },
  {
    num: "04",
    title: "Deliver & Support",
    desc: "File siap handoff, design system terdokumentasi, dan support selama 14 hari untuk memastikan transisi yang mulus.",
    duration: "2–3 hari",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-12 py-24 bg-paper2 max-md:px-5 max-md:py-16">
      <ScrollReveal>
        <div className="font-mono text-[0.7rem] text-coral uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-coral">
          Cara Kerja
        </div>
        <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Dari ide menjadi
          <br />
          karya yang hidup
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid grid-cols-4 border-[1.5px] border-ink rounded-md overflow-hidden max-md:grid-cols-2 max-sm:grid-cols-1">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-8 border-r-[1.5px] border-ink last:border-r-0 hover:bg-ink transition-colors duration-250 group max-md:border-r-0"
            >
              <div className="font-head text-5xl font-extrabold text-ink/10 leading-none mb-4 group-hover:text-lime transition-colors duration-250">
                {s.num}
              </div>
              <h3 className="font-head text-[1.05rem] font-bold mb-3 tracking-tight group-hover:text-paper transition-colors duration-250">
                {s.title}
              </h3>
              <p className="text-[0.85rem] text-muted leading-relaxed group-hover:text-paper/60 transition-colors duration-250">
                {s.desc}
              </p>
              <div className="font-mono text-[0.65rem] text-coral uppercase tracking-wide mt-4">
                {s.duration}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
