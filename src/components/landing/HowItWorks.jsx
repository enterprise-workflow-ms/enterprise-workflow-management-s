"use client";

import { useEffect, useRef, useState } from "react";
import '../../css/HowItWorks.css'

const workflow = [
  {
    step: "01",
    title: "Request Initiation",
    desc: "Department HOD creates and submits a workflow request with all required documents and justification.",
    variant: "navy",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Departmental Routing",
    desc: "Request is routed to selected departments. Each HOD reviews, comments, and approves or rejects.",
    variant: "gold",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Executive Review",
    desc: "Approved request moves through COO → CFO → CEO. Each executive reviews with full context and history.",
    variant: "navy",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Implementation",
    desc: "CEO final approval triggers automatic notification to the concerned department for immediate execution.",
    variant: "gold",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* Single step card */
function StepCard({ w, i, visible, activeStep, setActiveStep }) {
  const isNavy       = w.variant === "navy";
  const accent       = isNavy ? "#4A7FD4" : "#E8A800";
  const accentStrong = isNavy ? "rgba(74,127,212,0.55)"  : "rgba(232,168,0,0.55)";
  const accentBorder = isNavy ? "rgba(74,127,212,0.45)"  : "rgba(232,168,0,0.45)";
  const accentGlow   = isNavy ? "rgba(74,127,212,0.22)"  : "rgba(232,168,0,0.22)";
  const iconBg       = isNavy
    ? "linear-gradient(135deg,rgba(74,127,212,0.32) 0%,rgba(27,58,107,0.50) 100%)"
    : "linear-gradient(135deg,rgba(232,168,0,0.32) 0%,rgba(180,120,0,0.50) 100%)";

  const isActive = activeStep === i;

  return (
    <div
      className={`transition-all duration-700 h-full ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      }`}
      style={{ transitionDelay: `${i * 140 + 250}ms` }}
      onMouseEnter={() => setActiveStep(i)}
      onMouseLeave={() => setActiveStep(null)}
    >
      <div
        className="relative rounded-3xl p-px cursor-default h-full"
        style={{
          background: `linear-gradient(145deg,${accentBorder},rgba(255,255,255,0.05) 50%,${accentBorder})`,
          boxShadow: isActive ? `0 0 32px 6px ${accentGlow},0 24px 50px -12px ${accentGlow}` : "none",
          transform: isActive ? "translateY(-8px)" : "translateY(0)",
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        <div
          className="relative h-full rounded-3xl overflow-hidden p-7 flex flex-col gap-4"
          style={{
            background: "linear-gradient(145deg,rgba(255,255,255,0.08) 0%,rgba(10,18,35,0.90) 60%,rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Corner glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-all duration-500"
            style={{ background: accentStrong, opacity: isActive ? 0.6 : 0 }} />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-all duration-700"
            style={{ background: accent, opacity: isActive ? 0.28 : 0 }} />
          {/* Shine */}
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{
              background: `linear-gradient(115deg,transparent 25%,${accentGlow} 50%,transparent 75%)`,
              opacity: isActive ? 1 : 0,
            }} />

          {/* Badge + Icon row */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black select-none flex-shrink-0"
              style={{
                background: `linear-gradient(135deg,${accent},${isNavy ? "#1B3A6B" : "#a06800"})`,
                color: "#fff",
                boxShadow: `0 0 14px 4px ${accentGlow}`,
                transform: isActive ? "scale(1.12) rotate(-5deg)" : "scale(1) rotate(0deg)",
                transition: "transform 0.35s ease",
              }}
            >{w.step}</div>

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: iconBg,
                border: `1.5px solid ${accentBorder}`,
                color: accent,
                boxShadow: `0 0 ${isActive ? "22px 5px" : "12px 2px"} ${accentGlow}`,
                transform: isActive ? "scale(1.1) rotate(6deg)" : "scale(1) rotate(0deg)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
            >{w.icon}</div>
          </div>

          {/* Divider */}
          <div className="h-px w-full"
            style={{ background: `linear-gradient(90deg,${accentBorder},transparent 80%)` }} />

          <h3 className="text-white font-bold text-[15px] leading-snug">{w.title}</h3>
          <p className="text-sm leading-relaxed flex-1 transition-colors duration-400"
            style={{ color: isActive ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.50)" }}>
            {w.desc}
          </p>

          {/* Pulse dots */}
          <div className="flex items-center gap-1.5 mt-auto pt-1">
            <span className="w-1.5 h-1.5 rounded-full animate-ping opacity-70"
              style={{ background: accent, animationDuration: `${1.4 + i * 0.25}s` }} />
            <span className="w-1.5 h-1.5 rounded-full opacity-35"
              style={{ background: accent }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Connector between two cards */
function Connector({ index, visible, filled }) {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!visible || !dotRef.current) return;
    const duration = 2400;
    const delay    = 1800 + index * 400;
    let startTs    = null;
    let raf;

    function tick(ts) {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const t      = (elapsed % duration) / duration;
      const eased  = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const dot    = dotRef.current;
      if (dot) {
        dot.style.left    = eased * 100 + "%";
        dot.style.opacity = t < 0.08 ? String(t / 0.08) : t > 0.92 ? String((1 - t) / 0.08) : "1";
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, index]);

  return (
    <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-12 self-stretch">
      <div className="relative flex flex-col items-center justify-center w-full h-full gap-1">

        {/* Line track */}
        <div className="relative w-full h-0.5 rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full"
            style={{ background: "rgba(255,255,255,0.08)" }} />
          {/* Animated fill */}
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-[1600ms] ease-out"
            style={{
              width: filled ? "100%" : "0%",
              transitionDelay: `${index * 300 + 600}ms`,
              background: "linear-gradient(90deg,rgba(74,127,212,0.6),rgba(232,168,0,0.9),rgba(74,127,212,0.6))",
              boxShadow: "0 0 6px 2px rgba(232,168,0,0.4)",
            }}
          />
          {/* Travelling dot */}
          <div
            ref={dotRef}
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "50%",
              left: "0%",
              transform: "translate(-50%, -50%)",
              width: "10px",
              height: "10px",
              background: "#E8A800",
              boxShadow: "0 0 8px 3px rgba(232,168,0,0.9), 0 0 20px 6px rgba(232,168,0,0.4)",
              opacity: 0,
            }}
          />
        </div>

        {/* Arrow */}
        <div
          className={`transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{ transitionDelay: `${index * 200 + 900}ms` }}
        >
          <svg width="16" height="16" fill="none" className="how-work-arrow" stroke="rgba(232,168,0,0.8)" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>

      </div>
    </div>
  );
}

export default function HowItWorks() {
  const ref     = useRef(null);
  const [visible, setVisible]   = useState(false);
  const [filled,  setFilled]    = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setFilled(true), 500);
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workflow" className="py-28 relative overflow-hidden">

      <style>{`
        @keyframes floatY {
          0%,100% { transform:translateY(0px);  }
          50%      { transform:translateY(-14px); }
        }
        @keyframes rotateRing {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }
      `}</style>

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-[#080f1e]" />
      <div className="absolute top-[-15%] right-[-10%] w-[650px] h-[650px] rounded-full opacity-35 animate-pulse"
        style={{ background:"radial-gradient(circle,rgba(74,127,212,0.85) 0%,transparent 65%)", animationDuration:"7s" }} />
      <div className="absolute bottom-[-20%] left-[-12%] w-[600px] h-[600px] rounded-full opacity-25 animate-pulse"
        style={{ background:"radial-gradient(circle,rgba(232,168,0,0.75) 0%,transparent 65%)", animationDuration:"9s" }} />
      <div className="absolute top-[40%] left-[35%] w-[300px] h-[300px] rounded-full opacity-10 animate-pulse"
        style={{ background:"radial-gradient(circle,rgba(74,127,212,1) 0%,transparent 65%)", animationDuration:"11s" }} />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:"linear-gradient(rgba(200,150,12,1) 1px,transparent 1px),linear-gradient(90deg,rgba(200,150,12,1) 1px,transparent 1px)",
          backgroundSize:"65px 65px",
        }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, idx) => (
          <div key={idx} className="absolute rounded-full"
            style={{
              width:  idx % 3 === 0 ? "3px" : "2px",
              height: idx % 3 === 0 ? "3px" : "2px",
              background: idx % 2 === 0 ? "rgba(232,168,0,0.50)" : "rgba(74,127,212,0.55)",
              left: `${(idx * 19 + 5) % 96}%`,
              top:  `${(idx * 31 + 9) % 92}%`,
              animation: `floatY ${2.2 + (idx % 5) * 0.5}s ease-in-out infinite`,
              animationDelay: `${idx * 0.28}s`,
            }} />
        ))}
      </div>

      {/* Decorative rings */}
      <div className="absolute top-16 right-16 w-32 h-32 rounded-full border border-[#E8A800]/10 opacity-60"
        style={{ animation:"rotateRing 18s linear infinite" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#E8A800]/50" />
      </div>
      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full border border-[#4A7FD4]/15 opacity-50"
        style={{ animation:"rotateRing 12s linear infinite reverse" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4A7FD4]/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-[#4A7FD4]/12 border border-[#4A7FD4]/30 text-[#4A7FD4] text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4A7FD4] animate-pulse" />
            Process Overview
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            How{" "}
            <span className="relative inline-block">
              <span className="text-[#E8A800]">EWMS</span>
              <svg className="absolute -bottom-2 left-0 w-full mt[-13px]" viewBox="0 0 160 10" fill="none">
                <path d="M2 7 Q40 1 80 7 Q120 13 158 7" stroke="#E8A800" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>{" "}
            Works
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg leading-relaxed">
            A structured four-step journey from request creation to final implementation.
          </p>
        </div>

        {/* ── Steps row: Card → Connector → Card → Connector → ... ── */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {workflow.map((w, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-stretch flex-1 min-w-0">
              {/* Card takes all available width in its cell */}
              <div className="flex-1 min-w-0">
                <StepCard
                  w={w} i={i}
                  visible={visible}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
              </div>

              {/* Connector — only between cards */}
              {i < workflow.length - 1 && (
                <Connector index={i} visible={visible} filled={filled} />
              )}
            </div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        {/* <div className={`mt-16 transition-all duration-700 delay-[900ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="rounded-2xl p-px"
            style={{ background:"linear-gradient(135deg,rgba(74,127,212,0.4),rgba(232,168,0,0.3))" }}>
            <div className="rounded-2xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              style={{
                background:"linear-gradient(135deg,rgba(27,58,107,0.35) 0%,rgba(8,15,30,0.80) 100%)",
                backdropFilter:"blur(16px)",
              }}>
              {[
                { val:"< 2min", label:"Avg. Routing Time" },
                { val:"100%",   label:"Audit Coverage"    },
                { val:"3-tier", label:"Executive Chain"   },
                { val:"24 / 7", label:"Live Tracking"     },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-2xl font-extrabold"
                    style={{ color: idx % 2 === 0 ? "#4A7FD4" : "#E8A800" }}>
                    {s.val}
                  </span>
                  <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
