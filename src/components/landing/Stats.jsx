"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Paperless Process", icon: "♻️" },
  { value: 3, suffix: "-Tier", label: "Executive Approval", icon: "🏛️" },
  { value: 360, suffix: "°", label: "Visibility & Tracking", icon: "🔍" },
  { value: 24, suffix: "/7", label: "System Availability", icon: "⚡" },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="relative bg-[#1B3A6B] py-16 overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/60 via-transparent to-[#0d1f3c]/60" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(200,150,12,0.8) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center group transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="text-3xl mb-2">{s.icon}</div>
            <p className="text-4xl lg:text-5xl font-black text-[#C8960C] mb-1 tabular-nums">
              <CountUp target={s.value} suffix={s.suffix} active={visible} />
            </p>
            <div className="w-8 h-0.5 bg-[#C8960C]/40 mx-auto mb-2 group-hover:w-16 transition-all duration-500" />
            <p className="text-white/70 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
