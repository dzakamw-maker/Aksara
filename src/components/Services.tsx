import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: "🎨",
    name: "Brand Identity",
    desc: "Logo, sistem visual, panduan merek — membangun kepribadian yang konsisten dan tak terlupakan di setiap titik sentuh.",
    price: "Mulai dari Rp 2.500.000",
    tags: ["Logo", "Color System", "Typography"],
  },
  {
    icon: "📱",
    name: "Mobile App Design",
    desc: "UI/UX untuk aplikasi iOS dan Android. Dari wireframe hingga prototype interaktif yang siap diserahkan ke developer.",
    price: "Mulai dari Rp 3.500.000",
    tags: ["iOS & Android", "Prototype", "Design System"],
  },
  {
    icon: "🌐",
    name: "Website Design",
    desc: "Landing page, company profile, atau platform web yang memancarkan karakter dan mengkonversi pengunjung menjadi klien.",
    price: "Mulai dari Rp 2.000.000",
    tags: ["Landing Page", "Responsive", "CRO-focused"],
  },
  {
    icon: "🔬",
    name: "UX Audit",
    desc: "Analisis mendalam atas produk yang sudah ada — menemukan gesekan tersembunyi dan peluang pengalaman yang selama ini terlewatkan.",
    price: "Mulai dari Rp 1.500.000",
    tags: ["Heuristic", "User Flow", "Report"],
  },
  {
    icon: "⚙️",
    name: "Design System",
    desc: "Perpustakaan komponen yang konsisten dan skalabel — sehingga tim kamu bisa bergerak lebih cepat tanpa mengorbankan kualitas visual.",
    price: "Mulai dari Rp 4.000.000",
    tags: ["Component Library", "Tokens", "Documentation"],
  },
  {
    icon: "✨",
    name: "Custom Project",
    desc: "Punya kebutuhan yang tidak masuk kotak manapun? Mari diskusi. Aksara senang menghadapi tantangan yang belum pernah ada sebelumnya.",
    price: "Harga berdasarkan scope",
    tags: ["Konsultasi", "Fleksibel", "Kolaboratif"],
  },
  {
    icon: "🎬",
    name: "Motion & Micro-interaction",
    desc: "Animasi halus dan transisi yang bikin antarmuka terasa hidup, responsif, dan menyenangkan saat digunakan.",
    price: "Mulai dari Rp 1.500.000",
    tags: ["Lottie", "Prototyping", "Interaction"],
  },
  {
    icon: "🧪",
    name: "UX Research",
    desc: "Riset pengguna mendalam — wawancara, survei, usability testing — untuk memastikan setiap keputusan desain berdasarkan data nyata.",
    price: "Mulai dari Rp 2.000.000",
    tags: ["User Interview", "Survey", "Usability Test"],
  },
  {
    icon: "♿",
    name: "Accessibility Audit",
    desc: "Memastikan produk digitalmu bisa diakses oleh semua orang, termasuk penyandang disabilitas — sesuai standar WCAG.",
    price: "Mulai dari Rp 1.500.000",
    tags: ["WCAG", "Screen Reader", "Contrast"],
  },
  {
    icon: "📊",
    name: "Design Sprint",
    desc: "Workshop intensif 5 hari untuk memvalidasi ide, memecahkan masalah besar, dan menghasilkan prototype teruji dalam waktu singkat.",
    price: "Mulai dari Rp 5.000.000",
    tags: ["Workshop", "Validasi", "Rapid Prototyping"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-12 py-24 bg-paper2 max-md:px-5 max-md:py-16">
      <ScrollReveal>
        <div className="font-mono text-[0.7rem] text-coral uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-coral">
          Layanan
        </div>
        <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Apa yang bisa
          <br />
          Aksara kerjakan
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1.5px] border-[1.5px] border-ink rounded-md overflow-hidden bg-ink"
        >
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-paper p-8 relative hover:bg-ink transition-colors duration-250 overflow-hidden group"
            >
              <span className="text-3xl block mb-6">{s.icon}</span>
              <div className="font-head text-[1.3rem] font-extrabold tracking-tight mb-3 group-hover:text-paper transition-colors duration-250">
                {s.name}
              </div>
              <p className="text-[0.9rem] text-muted leading-relaxed mb-6 group-hover:text-paper/60 transition-colors duration-250">
                {s.desc}
              </p>
              <div className="font-mono text-[0.8rem] text-coral font-bold mb-4 group-hover:text-lime transition-colors duration-250">
                {s.price}
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] bg-ink/7 px-2.5 py-0.5 rounded-full uppercase tracking-wide group-hover:bg-paper/10 group-hover:text-paper transition-colors duration-250"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-6 right-6 text-2xl opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-250 text-lime">
                →
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
