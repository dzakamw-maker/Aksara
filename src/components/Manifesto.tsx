import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Kejujuran Visual",
    desc: "Tidak ada dekorasi yang sia-sia. Setiap elemen harus punya makna dan fungsi.",
  },
  {
    num: "02",
    title: "Empati sebagai Fondasi",
    desc: "Desain yang baik dimulai dari pemahaman mendalam tentang siapa penggunanya.",
  },
  {
    num: "03",
    title: "Keberanian Bereksperimen",
    desc: "Berani melanggar konvensi jika itu berarti pengalaman yang lebih baik dan lebih manusiawi.",
  },
  {
    num: "04",
    title: "Detail adalah Seni",
    desc: "Klien mungkin tidak melihat mikro-interaksi itu, tapi mereka merasakannya.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="px-12 py-24 bg-ink text-paper max-md:px-5 max-md:py-16">
      <div className="grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-10">
        <ScrollReveal>
          <div className="font-mono text-[0.7rem] text-lime uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-lime">
            Manifesto
          </div>
          <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12 text-paper"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Desain bukan <em className="not-italic text-lime">hiasan</em> —
            <br />
            desain adalah bahasa.
          </h2>
          <p className="text-lg leading-relaxed text-paper/75 border-l-3 border-coral pl-6 mb-8">
            Setiap pixel adalah pilihan. Setiap spasi adalah napas. Aku percaya
            bahwa antarmuka terbaik adalah yang terasa seperti sudah ada
            selamanya — natural, intuitif, dan penuh karakter.
          </p>
          <p className="text-[0.9rem] text-paper/55 leading-relaxed">
            Aksara lahir dari keyakinan bahwa desainer adalah pencerita, dan
            setiap produk adalah narasi yang perlu disampaikan dengan jujur
            kepada penggunanya.
          </p>
        </ScrollReveal>

        <ScrollReveal delay="0.15s">
          <div className="flex flex-col gap-5">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="flex gap-5 items-start p-5 border border-paper/10 rounded-md hover:border-coral hover:bg-coral/5 transition-colors"
              >
                <span className="font-mono text-[0.7rem] text-coral font-bold min-w-[28px] pt-0.5">
                  {p.num}
                </span>
                <div>
                  <h4 className="font-head text-[0.95rem] font-bold text-paper mb-1">
                    {p.title}
                  </h4>
                  <p className="text-[0.85rem] text-paper/55 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
