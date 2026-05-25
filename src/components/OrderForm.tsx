"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  "Brand Identity",
  "Mobile App Design",
  "Website Design",
  "UX Audit",
  "Design System",
  "Custom Project",
];

const budgets = [
  "Rp 1–3 juta",
  "Rp 3–7 juta",
  "Rp 7–15 juta",
  "Rp 15 juta+",
];

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      <div className="grid grid-cols-[1fr_1.3fr] gap-20 items-start max-md:grid-cols-1 max-md:gap-10">
        <ScrollReveal>
          <h3 className="font-head text-[1.15rem] font-bold mb-2 tracking-tight">
            Hubungi Aksara
          </h3>
          <p className="text-[0.9rem] text-muted leading-relaxed mb-6">
            Ceritakan proyekmu lewat salah satu kanal di bawah, atau isi form
            percakapan di sebelah kanan.
          </p>

          <a
            href="mailto:halo@aksara.design"
            className="flex items-center gap-3 px-5 py-4 border-[1.5px] border-ink/12 rounded-md mb-3 no-underline text-ink hover:border-coral hover:bg-white hover:translate-x-1 transition-all"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 bg-sky/30">
              📧
            </div>
            <div>
              <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                Email
              </div>
              <div className="font-head text-[0.9rem] font-bold">
                halo@aksara.design
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/6288976963288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-4 border-[1.5px] border-ink/12 rounded-md mb-3 no-underline text-ink hover:border-coral hover:bg-white hover:translate-x-1 transition-all"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 bg-[rgba(37,211,102,0.15)]">
              💬
            </div>
            <div>
              <div className="font-mono text-[0.65rem] text-muted uppercase tracking-wide">
                WhatsApp
              </div>
              <div className="font-head text-[0.9rem] font-bold">
                +62 889 7696 3288
              </div>
            </div>
          </a>

          <div className="mt-8 p-5 border-[1.5px] border-ink/12 rounded-md">
            <div className="font-mono text-[0.65rem] text-muted uppercase tracking-widest mb-2">
              Response Time
            </div>
            <div className="font-head text-[1.1rem] font-bold">≤ 24 jam</div>
            <div className="text-[0.85rem] text-muted mt-1">di hari kerja</div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.15s">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col">
              {[
                {
                  label: "Hei, nama saya",
                  input: (
                    <input
                      type="text"
                      required
                      placeholder="nama kamu"
                      className="bg-transparent border-none border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] placeholder:text-ink/25 placeholder:font-normal"
                      style={{ width: "150px" }}
                    />
                  ),
                  suffix: "dan saya butuh",
                  select: true,
                },
              ].map((row) => null)}

              <div className="flex items-baseline flex-wrap gap-2 py-5 border-b border-ink/10 text-[1.05rem] leading-relaxed">
                <label className="text-muted">Hei, nama saya</label>
                <input
                  type="text"
                  required
                  placeholder="nama kamu"
                  id="f-name"
                  className="bg-transparent border-none border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] placeholder:text-ink/25 placeholder:font-normal"
                  style={{ width: "150px" }}
                />
                <label className="text-muted">dan saya butuh</label>
                <select
                  required
                  id="f-service"
                  className="bg-transparent border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] cursor-none appearance-none"
                  style={{
                    paddingRight: "20px",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230d0d0d' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                  }}
                >
                  <option value="">pilih layanan</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-baseline flex-wrap gap-2 py-5 border-b border-ink/10 text-[1.05rem] leading-relaxed">
                <label className="text-muted">untuk</label>
                <input
                  type="text"
                  placeholder="jenis bisnis / produk"
                  id="f-biz"
                  className="bg-transparent border-none border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] placeholder:text-ink/25 placeholder:font-normal"
                  style={{ width: "200px" }}
                />
              </div>

              <div className="flex items-baseline flex-wrap gap-2 py-5 border-b border-ink/10 text-[1.05rem] leading-relaxed">
                <label className="text-muted">Anggaran saya sekitar</label>
                <select
                  id="f-budget"
                  className="bg-transparent border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] cursor-none appearance-none"
                  style={{
                    paddingRight: "20px",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230d0d0d' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 4px center",
                  }}
                >
                  <option value="">pilih range</option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col items-start gap-2 py-5 border-b border-ink/10 text-[1.05rem] leading-relaxed">
                <label className="text-muted">Lebih lengkapnya:</label>
                <textarea
                  id="f-detail"
                  placeholder="Ceritakan proyekmu — semakin detail semakin baik..."
                  className="bg-transparent border-[1.5px] border-ink/20 rounded-md px-3.5 py-2.5 font-body text-[0.9rem] text-ink outline-none resize-y min-h-[100px] w-full mt-2 focus:border-coral"
                />
              </div>

              <div className="flex items-baseline flex-wrap gap-2 py-5 border-b border-ink/10 text-[1.05rem] leading-relaxed">
                <label className="text-muted">Bisa dihubungi di</label>
                <input
                  type="email"
                  required
                  placeholder="email@kamu.com"
                  id="f-email"
                  className="bg-transparent border-none border-b-2 border-ink px-2 py-0.5 font-head text-base font-bold text-ink outline-none focus:border-coral min-w-[120px] placeholder:text-ink/25 placeholder:font-normal"
                  style={{ width: "220px" }}
                />
              </div>

              <button
                type="submit"
                className="mt-6 self-start font-head text-base font-bold bg-coral text-white border-none px-8 py-4 rounded-sm tracking-wide hover:bg-ink hover:-translate-y-0.5 transition-all"
              >
                Kirim Brief →
              </button>
            </form>
          ) : (
            <div className="p-6 bg-lime/20 border-[1.5px] border-lime rounded-md">
              <p className="font-head text-base font-bold">
                ✦ Brief kamu sudah diterima!
              </p>
              <p className="text-[0.9rem] font-normal text-muted mt-1.5">
                Aku akan menghubungi kamu dalam 24 jam. Terima kasih sudah
                memilih Aksara.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
