import ScrollReveal from "./ScrollReveal";

export default function OrderForm() {
  return (
    <section id="order" className="px-12 py-24 bg-paper2 max-md:px-5 max-md:py-16">
      <ScrollReveal>
        <div className="font-mono text-[0.7rem] text-coral uppercase tracking-widest mb-3 flex items-center gap-2 before:content-[''] before:w-4 before:h-px before:bg-coral">
          Mulai Proyek
        </div>
        <h2 className="font-head text-clamp font-extrabold leading-tight tracking-tighter mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Mari kita buat
          <br />
          sesuatu bersama
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        <ScrollReveal>
          <a
            href="mailto:dzakamw@gmail.com"
            className="flex items-center gap-3 px-5 py-6 border-[1.5px] border-ink/12 rounded-md no-underline text-ink hover:border-coral hover:bg-white hover:-translate-y-1 transition-all h-full"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 bg-sky/30">
              📧
            </div>
            <div>
              <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                Email
              </div>
              <div className="font-head text-[0.9rem] font-bold">
                dzakamw@gmail.com
              </div>
            </div>
          </a>
        </ScrollReveal>

        <ScrollReveal delay="0.1s">
          <a
            href="https://wa.me/6288976963288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-6 border-[1.5px] border-ink/12 rounded-md no-underline text-ink hover:border-coral hover:bg-white hover:-translate-y-1 transition-all h-full"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 bg-[rgba(37,211,102,0.15)]">
              📞
            </div>
            <div>
              <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                Phone
              </div>
              <div className="font-head text-[0.9rem] font-bold">
                +62 889 7696 3288
              </div>
            </div>
          </a>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <a
            href="https://www.instagram.com/dzakaharja/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-6 border-[1.5px] border-ink/12 rounded-md no-underline text-ink hover:border-coral hover:bg-white hover:-translate-y-1 transition-all h-full"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 bg-violet/20">
              📷
            </div>
            <div>
              <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                Instagram
              </div>
              <div className="font-head text-[0.9rem] font-bold">
                @dzakaharja
              </div>
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
