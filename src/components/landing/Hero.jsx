"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const approvalSteps = [
  { role: "Department HOD", status: "Request Initiated", icon: "🏢", active: true },
  { role: "COO — Chief Operating Officer", status: "Pending Review", icon: "⚙️", active: false },
  { role: "CFO — Chief Financial Officer", status: "Awaiting Approval", icon: "💼", active: false },
  { role: "CEO — Chief Executive Officer", status: "Final Authority", icon: "👑", active: false },
];

const floatingBadges = [
  { text: "Request Approved ✓", color: "bg-emerald-500", delay: "0s", x: "right-8", y: "top-32" },
  { text: "3 Pending Reviews", color: "bg-[#06B6D4]", delay: "1.5s", x: "left-4", y: "bottom-40" },
  { text: "COO Signed Off ✓", color: "bg-[#1A56DB]", delay: "3s", x: "right-16", y: "bottom-28" },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % approvalSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060d1a]">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0d1f3c] to-[#060d1a]" />

      {/* Animated mesh grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#06B6D4]/10 blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1A56DB]/40 blur-[100px] animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#06B6D4]/5 blur-[80px] animate-pulse" style={{ animationDuration: "8s" }} />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#06B6D4]/40 animate-bounce"
              style={{
                left: `${(i * 17 + 5) % 95}%`,
                top: `${(i * 23 + 10) % 90}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT — Text */}
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-[#06B6D4] text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
            </span>
            Enterprise Grade Platform
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Streamline
            <br />
            <span className="relative inline-block">
              <span className="text-[#06B6D4]">Enterprise</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
              </svg>
            </span>
            <br />
            Workflows
          </h1>

          <p className="text-gray-300/90 text-lg leading-relaxed mb-10 max-w-lg">
            Centralized approval management across all departments. Eliminate
            paperwork, enforce accountability, and drive decisions faster —
            <span className="text-[#06B6D4] font-semibold"> from HOD to CEO.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/login"
              className="group relative inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1648c0] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#1A56DB]/30 hover:shadow-[#1A56DB]/50 hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </Link>
            <a
              href="#workflow"
              className="group inline-flex items-center gap-2 border border-white/25 hover:border-[#06B6D4]/60 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm hover:bg-white/5"
            >
              See How It Works
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-sm text-white/50">
            {["No paperwork", "Instant notifications", "Full audit trail"].map((t, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Approval Flow Card */}
        <div className={`hidden lg:block transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative">

            {/* Floating notification badges */}
            {floatingBadges.map((badge, i) => (
              <div
                key={i}
                className={`absolute ${badge.x} ${badge.y} ${badge.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg z-20 animate-bounce whitespace-nowrap`}
                style={{ animationDelay: badge.delay, animationDuration: "3s" }}
              >
                {badge.text}
              </div>
            ))}

            {/* Main card */}
            <div className="relative bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-md shadow-2xl">

              {/* Card glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#06B6D4]/20 via-transparent to-[#1A56DB]/20 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-white/50 text-xs font-semibold tracking-widest uppercase">Live Approval Flow</p>
                  <p className="text-white text-sm font-bold mt-0.5">Request #2024-0847</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">In Progress</span>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {approvalSteps.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                      i === activeStep
                        ? "bg-[#06B6D4]/15 border border-[#06B6D4]/30 scale-[1.02]"
                        : i < activeStep
                        ? "bg-emerald-500/8 border border-emerald-500/20"
                        : "bg-white/3 border border-white/8"
                    }`}
                  >
                    {/* Step indicator */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-500 ${
                        i === activeStep
                          ? "bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/40"
                          : i < activeStep
                          ? "bg-emerald-500/20"
                          : "bg-white/8"
                      }`}
                    >
                      {i < activeStep ? (
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span>{item.icon}</span>
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold truncate transition-colors duration-300 ${
                        i === activeStep ? "text-white" : i < activeStep ? "text-emerald-400" : "text-white/50"
                      }`}>
                        {item.role}
                      </p>
                      <p className={`text-xs mt-0.5 transition-colors duration-300 ${
                        i === activeStep ? "text-[#06B6D4]" : i < activeStep ? "text-emerald-400/70" : "text-white/25"
                      }`}>
                        {i < activeStep ? "✓ Approved" : item.status}
                      </p>
                    </div>

                    {/* Active pulse */}
                    {i === activeStep && (
                      <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Approval Progress</span>
                  <span>{Math.round(((activeStep) / (approvalSteps.length - 1)) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1A56DB] to-[#06B6D4] rounded-full transition-all duration-700"
                    style={{ width: `${(activeStep / (approvalSteps.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}
