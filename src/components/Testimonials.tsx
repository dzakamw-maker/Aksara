import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Aksara tidak hanya mendesain tampilan, tapi benar-benar memahami produk kami. Hasilnya jauh melampaui ekspektasi — pengguna kami langsung merasakan perbedaannya.",
    name: "Rafi Hanafi",
    role: "CEO, Noctua Finance",
    avatar: "RH",
    avatarBg: "bg-coral",
  },
  {
    text: "Proses kerjanya sangat transparan dan komunikatif. Setiap keputusan desain selalu dijelaskan — aku jadi belajar banyak tentang UX dari kolaborasi ini.",
    name: "Siti Amara",
    role: "Founder, Verdant Studio",
    avatar: "SA",
    avatarBg: "bg-violet",
  },
  {
    text: "Branding yang dibuat Aksara untuk kafe kami bukan sekadar logo cantik — ini adalah identitas yang benar-benar merepresentasikan siapa kami.",
    name: "Bagas Wicaksono",
    role: "Owner, Oro Café",
    avatar: "BW",
    avatarBg: "bg-[#0a7c6b]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-12 py-24 bg-paper max-md:px-5 max-md:py-16">
      <ScrollReveal>
        <div className="font-mono text-[0.7rem] text-coral uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-coral">
          Dari Klien
        </div>
        <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Mereka yang
          <br />
          sudah merasakan
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={`${i * 0.1}s`}>
            <div className="p-7 border-[1.5px] border-ink/12 rounded-md hover:border-coral hover:-translate-y-1 transition-all relative">
              <div className="font-head text-6xl font-extrabold text-lime leading-[0.7] mb-4">
                &ldquo;
              </div>
              <p className="text-[0.95rem] leading-relaxed text-ink mb-6 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-head text-[0.8rem] font-bold text-white shrink-0 ${t.avatarBg}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-head text-[0.9rem] font-bold">{t.name}</div>
                  <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
