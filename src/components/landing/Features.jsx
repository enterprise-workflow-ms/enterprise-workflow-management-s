"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Smart Request Routing",
    desc: "HOD initiates requests and selects relevant departments. System automatically routes approvals through the correct hierarchy.",
    variant: "navy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Executive Approval Chain",
    desc: "Every request flows through COO → CFO → CEO for final authorization — structured, transparent and fully traceable.",
    variant: "gold",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Complete Audit Trail",
    desc: "Every action, comment, revision, and approval is logged with timestamps. Full accountability at every step.",
    variant: "navy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Real-Time Notifications",
    desc: "Instant alerts for approvals, rejections, revisions and escalations keep all stakeholders informed without delays.",
    variant: "gold",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Document Attachments",
    desc: "Attach supporting documents to any request. Reviewers access everything they need in one centralized place.",
    variant: "navy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Advanced Reporting",
    desc: "Detailed analytics and reports on workflow performance, bottlenecks, turnaround time and department-wise activity.",
    variant: "gold",
  },
];

function FeatureCard({ f, i, visible }) {
  const isNavy = f.variant === "navy";

  const accent       = isNavy ? "#4A7FD4" : "#E8A800";
  const accentStrong = isNavy ? "rgba(74,127,212,0.55)" : "rgba(232,168,0,0.55)";
  const accentBorder = isNavy ? "rgba(74,127,212,0.45)" : "rgba(232,168,0,0.45)";
  const accentGlow   = isNavy ? "rgba(74,127,212,0.20)" : "rgba(232,168,0,0.20)";
  const iconBg       = isNavy
    ? "linear-gradient(135deg, rgba(74,127,212,0.30) 0%, rgba(27,58,107,0.45) 100%)"
    : "linear-gradient(135deg, rgba(232,168,0,0.30) 0%, rgba(180,120,0,0.45) 100%)";

  return (
    <div
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      }`}
      style={{ transitionDelay: `${i * 110 + 200}ms` }}
    >
      {/* Outer border glow wrapper */}
      <div
        className="group relative rounded-3xl p-px transition-all duration-500 hover:-translate-y-2 cursor-default"
        style={{
          background: `linear-gradient(135deg, ${accentBorder}, rgba(255,255,255,0.06) 50%, ${accentBorder})`,
          boxShadow: `0 0 0 0 transparent`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 28px 4px ${accentGlow}, 0 20px 50px -12px ${accentGlow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
        }}
      >
        {/* Card body */}
        <div
          className="relative h-full rounded-3xl overflow-hidden p-7 flex flex-col gap-5"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(10,18,35,0.85) 60%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Shine sweep on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `linear-gradient(115deg, transparent 25%, ${accentGlow} 50%, transparent 75%)`,
            }}
          />

          {/* Top-right corner glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none"
            style={{ background: accentStrong }}
          />
          {/* Bottom-left soft glow */}
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-35 transition-all duration-700 pointer-events-none"
            style={{ background: accent }}
          />

          {/* Top row: icon only */}
          <div className="flex items-center gap-4">
            {/* Icon box */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                background: iconBg,
                border: `1.5px solid ${accentBorder}`,
                color: accent,
                boxShadow: `0 0 16px 2px ${accentGlow}`,
              }}
            >
              {f.icon}
            </div>

            {/* Title beside icon */}
            <h3 className="text-white font-bold text-[15px] leading-snug">
              {f.title}
            </h3>
          </div>

          {/* Divider line */}
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(90deg, ${accentBorder}, transparent 80%)`,
            }}
          />

          {/* Description */}
          <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-400 flex-1">
            {f.desc}
          </p>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-auto pt-1">
            <div
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400"
              style={{ color: accent }}
            >
              Explore
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Animated pulse dots */}
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping opacity-70"
                style={{ background: accent, animationDuration: `${1.4 + i * 0.25}s` }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full opacity-40"
                style={{ background: accent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-28 relative overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#080f1e]" />

      <div
        className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full opacity-40 animate-pulse"
        style={{ background: "radial-gradient(circle, rgba(27,58,107,0.9) 0%, transparent 65%)", animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-[-20%] right-[-15%] w-[700px] h-[700px] rounded-full opacity-30 animate-pulse"
        style={{ background: "radial-gradient(circle, rgba(200,150,12,0.8) 0%, transparent 65%)", animationDuration: "8s" }}
      />
      <div
        className="absolute top-1/2 right-[15%] w-[350px] h-[350px] rounded-full opacity-15 animate-pulse"
        style={{ background: "radial-gradient(circle, rgba(27,58,107,0.9) 0%, transparent 65%)", animationDuration: "10s" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,150,12,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,12,1) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              width: i % 4 === 0 ? "3px" : "2px",
              height: i % 4 === 0 ? "3px" : "2px",
              background: i % 2 === 0 ? "rgba(200,150,12,0.45)" : "rgba(27,58,107,0.6)",
              left: `${(i * 17 + 3) % 97}%`,
              top: `${(i * 29 + 7) % 93}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${2 + (i % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#C8960C]/12 border border-[#C8960C]/25 text-[#C8960C] text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8960C] animate-pulse" />
            Platform Capabilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Everything You Need to{" "}
            <span className="relative inline-block">
              <span className="text-[#C8960C]">Manage Workflows</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 420 10" fill="none">
                <path d="M2 7 Q105 1 210 7 Q315 13 418 7" stroke="#C8960C" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              </svg>
            </span>
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg leading-relaxed">
            Built for complex organizational structures with multi-department routing,
            role-based access and enterprise-grade compliance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={i} f={f} i={i} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-14 rounded-2xl p-px transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(200,150,12,0.3), rgba(27,58,107,0.3))",
          }}
        >
          <div
            className="rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5"
            style={{
              background: "linear-gradient(135deg, rgba(27,58,107,0.4) 0%, rgba(8,15,30,0.8) 100%)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div>
              <p className="text-white font-bold text-lg mb-1">
                Ready to digitize your approval process?
              </p>
              <p className="text-white/40 text-sm">
                All features available from day one — no complex setup required.
              </p>
            </div>
            <a
              href="#workflow"
              className="group flex-shrink-0 inline-flex items-center gap-2 bg-[#C8960C] hover:bg-[#d4a015] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#C8960C]/25 hover:-translate-y-0.5 whitespace-nowrap overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              See How It Works
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
