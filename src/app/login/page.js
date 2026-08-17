"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  function handle(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="min-h-screen bg-[#060d1a] flex items-center justify-center relative overflow-hidden px-4">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d1a] via-[#0a1628] to-[#060d1a]" />

      {/* Glow orbs */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] animate-pulse pointer-events-none"
        style={{ background: "rgba(26,86,219,0.25)", animationDuration: "5s" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{ background: "rgba(6,182,212,0.18)", animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(26,86,219,0.10)" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              width: i % 4 === 0 ? "3px" : "2px",
              height: i % 4 === 0 ? "3px" : "2px",
              background: i % 2 === 0 ? "rgba(6,182,212,0.35)" : "rgba(26,86,219,0.45)",
              left: `${(i * 19 + 7) % 94}%`,
              top: `${(i * 27 + 11) % 91}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + (i % 4) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative spinning rings */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 180, height: 180, top: 40, right: 80,
          border: "1.5px solid rgba(6,182,212,0.12)",
          borderRadius: "50%",
          animation: "spin 24s linear infinite",
        }}
      >
        <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "#06B6D4", boxShadow: "0 0 8px 3px rgba(6,182,212,0.6)" }} />
      </div>
      <div
        className="absolute pointer-events-none"
        style={{
          width: 110, height: 110, bottom: 60, left: 60,
          border: "1.5px solid rgba(26,86,219,0.16)",
          borderRadius: "50%",
          animation: "spin 16s linear infinite reverse",
        }}
      >
        <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 7, height: 7, borderRadius: "50%", background: "#1A56DB", boxShadow: "0 0 8px 3px rgba(26,86,219,0.6)" }} />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { left: -80%; } 100% { left: 120%; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* ── Login Card ── */}
      <div
        className="relative w-full max-w-md"
        style={{ animation: "fadeUp 0.6s ease both" }}
      >
        {/* Card border glow */}
        <div
          className="rounded-3xl p-px"
          style={{
            background: "linear-gradient(145deg, rgba(26,86,219,0.5), rgba(255,255,255,0.06) 50%, rgba(6,182,212,0.4))",
          }}
        >
          <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(6,13,26,0.95) 50%, rgba(255,255,255,0.04) 100%)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            {/* Card inner glow top-right */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(6,182,212,0.12)" }}
            />
            <div
              className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full blur-2xl pointer-events-none"
              style={{ background: "rgba(26,86,219,0.12)" }}
            />

            {/* ── Header ── */}
            <div className="flex flex-col items-center mb-8 relative">
              <Link href="/" className="group mb-5">
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "rgba(6,182,212,0.08)", filter: "blur(8px)" }}
                  />
                  <Image
                    src="/img/ewms-logo.png"
                    alt="EWMS"
                    width={160}
                    height={54}
                    className="relative object-contain h-11 w-auto"
                    priority
                  />
                </div>
              </Link>

              <h1 className="text-white font-extrabold text-2xl mb-1.5 tracking-tight">
                Welcome back
              </h1>
              <p className="text-white/40 text-sm text-center">
                Sign in to your EWMS account to continue
              </p>
            </div>

            {/* ── Divider ── */}
            <div
              className="h-px mb-8"
              style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(26,86,219,0.3), transparent)" }}
            />

            {/* ── Form ── */}
            <form onSubmit={submit} noValidate className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 transition-colors duration-200"
                      style={{ color: focused === "email" ? "#06B6D4" : "rgba(255,255,255,0.25)" }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="you@organization.com"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                    style={{
                      background: focused === "email" ? "rgba(6,182,212,0.07)" : "rgba(255,255,255,0.05)",
                      border: `1.5px solid ${focused === "email" ? "rgba(6,182,212,0.55)" : "rgba(255,255,255,0.10)"}`,
                      boxShadow: focused === "email" ? "0 0 0 3px rgba(6,182,212,0.10)" : "none",
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium transition-colors duration-200 hover:underline"
                    style={{ color: "#06B6D4" }}
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 transition-colors duration-200"
                      style={{ color: focused === "password" ? "#06B6D4" : "rgba(255,255,255,0.25)" }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handle}
                    onFocus={() => setFocused("password")}
                    onBlur={() => setFocused("")}
                    placeholder="••••••••••••"
                    required
                    className="w-full pl-10 pr-11 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                    style={{
                      background: focused === "password" ? "rgba(6,182,212,0.07)" : "rgba(255,255,255,0.05)",
                      border: `1.5px solid ${focused === "password" ? "rgba(6,182,212,0.55)" : "rgba(255,255,255,0.10)"}`,
                      boxShadow: focused === "password" ? "0 0 0 3px rgba(6,182,212,0.10)" : "none",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors duration-200"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded opacity-0 absolute"
                  />
                  <div
                    className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1.5px solid rgba(255,255,255,0.15)",
                    }}
                    onClick={() => document.getElementById("remember").click()}
                  >
                    <svg className="w-2.5 h-2.5 text-[#06B6D4] opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember" className="text-white/40 text-sm cursor-pointer select-none">
                  Keep me signed in
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex items-center justify-center gap-2.5 font-bold py-3.5 rounded-xl text-sm text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                style={{
                  background: "linear-gradient(135deg, #1A56DB 0%, #06B6D4 100%)",
                  boxShadow: "0 8px 28px -6px rgba(6,182,212,0.40), 0 0 0 1px rgba(6,182,212,0.15)",
                }}
              >
                {/* Shimmer */}
                {!loading && (
                  <span
                    className="absolute top-0 bottom-0 w-16 bg-white/20 skew-x-12 pointer-events-none"
                    style={{ animation: "shimmer 2.5s ease-in-out infinite" }}
                  />
                )}
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* ── Divider ── */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
              <span className="text-white/25 text-xs font-medium">OR</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* ── Role quick-select (visual only) ── */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {[
                { label: "HOD Login", icon: "🏢", color: "#1A56DB" },
                { label: "COO / CFO / CEO", icon: "👑", color: "#06B6D4" },
              ].map((r) => (
                <button
                  key={r.label}
                  type="button"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid rgba(255,255,255,0.09)`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = r.color + "55"; e.currentTarget.style.background = r.color + "12"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <span className="text-base leading-none">{r.icon}</span>
                  {r.label}
                </button>
              ))}
            </div>

            {/* ── Footer ── */}
            <div className="text-center">
              <p className="text-white/25 text-xs">
                Don&apos;t have access?{" "}
                <Link
                  href="/#contact"
                  className="font-semibold transition-colors duration-200 hover:underline"
                  style={{ color: "#06B6D4" }}
                >
                  Contact your administrator
                </Link>
              </p>
            </div>

          </div>
        </div>

        {/* ── Back to home ── */}
        <div className="flex justify-center mt-5">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/30 hover:text-white/70 text-xs font-medium transition-colors duration-200 group"
          >
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>

    </div>
  );
}
