const items = [
  "UI Design",
  "UX Research",
  "Branding & Identity",
  "Mobile App",
  "Design System",
  "Prototyping",
  "Web Design",
  "Interaction Design",
];

export default function Marquee() {
  return (
    <div className="bg-ink py-4 overflow-hidden border-t border-paper/10 border-b border-paper/10">
      <div className="flex gap-12 animate-[marquee_20s_linear_infinite] w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-head text-[0.8rem] font-bold text-paper uppercase tracking-widest whitespace-nowrap flex items-center gap-4 after:content-['✦'] after:text-coral"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
