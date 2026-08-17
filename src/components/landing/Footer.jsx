"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#workflow" },
    { label: "Overview", href: "#stats" },
    { label: "Sign In", href: "/login" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  support: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "System Status", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10,000+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150+", label: "Enterprises" },
  { value: "2M+", label: "Workflows Run" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#060d1a] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1B3A6B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#C8960C]/6 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#C8960C]/4 rounded-full blur-[80px]" />
      </div>

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8960C]/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo + description */}
            <div>
              <Image
                src="/img/ewms-logo.png"
                alt="EWMS"
                width={160}
                height={54}
                className="object-contain h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
              <p className="mt-4 text-white/45 text-sm leading-relaxed max-w-xs">
                A modern enterprise platform that digitizes, automates, and streamlines organizational approval workflows — from request to resolution.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-white/40 hover:text-[#C8960C] hover:bg-[#C8960C]/10 hover:border-[#C8960C]/30 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/4 border border-white/6 rounded-xl px-4 py-3"
                >
                  <p className="text-[#C8960C] font-bold text-lg leading-tight">{s.value}</p>
                  <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Navigation Columns ── */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Top row: 4 nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {/* Product */}
              <div>
                <h4 className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5">
                  {navigation.product.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {navigation.company.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
                  Support
                </h4>
                <ul className="space-y-2.5">
                  {navigation.support.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white/40 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-4">
                  Contact
                </h4>
                <div className="space-y-3">
                  <a href="mailto:support@ewms.io" className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#C8960C]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C8960C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors leading-relaxed">
                      support@ewms.io
                    </span>
                  </a>

                  <a href="tel:+923001234567" className="flex items-start gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#C8960C]/30 transition-colors">
                      <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C8960C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors leading-relaxed">
                      +92 300 123 4567
                    </span>
                  </a>

                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/6 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-white/40 text-xs leading-relaxed">
                      Karachi, Pakistan
                    </span>
                  </div>

                  {/* SOC 2 badge */}
                  {/* <div className="flex items-center gap-2 bg-[#C8960C]/8 border border-[#C8960C]/20 rounded-xl px-3 py-2.5">
                    <svg className="w-4 h-4 text-[#C8960C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-[#C8960C]/80 text-xs font-medium">SOC 2 Compliant</span>
                  </div> */}
                </div>
              </div>
            </div>
            {/* ── end top nav row ── */}

            {/* Bottom row: full-width newsletter spanning all 4 columns */}
            <div className="relative overflow-hidden mt-[90px] rounded-2xl border border-white/8 bg-gradient-to-r from-[#1B3A6B]/30 via-[#0f2448]/20 to-[#C8960C]/10 px-8 py-6">
              {/* Decorative glow blobs */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C8960C]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 left-1/3 w-24 h-24 bg-[#1B3A6B]/30 rounded-full blur-2xl pointer-events-none" />
              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className=" relative flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                {/* Left: icon + text */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8960C]/15 border border-[#C8960C]/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#C8960C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-bold text-sm">Stay ahead of the curve</p>
                      <span className="bg-[#C8960C]/20 text-[#C8960C] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#C8960C]/30">
                        Free
                      </span>
                    </div>
                    <p className="text-white/45 text-xs leading-relaxed max-w-xs">
                      Product updates, workflow tips &amp; enterprise insights — delivered to your inbox.
                    </p>
                  </div>
                </div>

                {/* Right: form or success */}
                {subscribed ? (
                  <div className="flex items-center gap-2.5 bg-[#C8960C]/10 border border-[#C8960C]/25 rounded-xl px-5 py-3 whitespace-nowrap">
                    <div className="w-5 h-5 rounded-full bg-[#C8960C] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#C8960C] font-semibold text-sm">You&apos;re subscribed!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-60">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white/8 border border-white/12 text-white placeholder-white/25 text-sm pl-9 pr-4 py-2.5 rounded-xl outline-none focus:border-[#C8960C]/60 focus:bg-white/12 focus:shadow-[0_0_0_3px_rgba(200,150,12,0.1)] transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative overflow-hidden bg-[#C8960C] hover:bg-[#b8830a] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C8960C]/30 whitespace-nowrap"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      Subscribe →
                    </button>
                  </form>
                )}
              </div>
            </div>
            {/* ── end newsletter row ── */}

          </div>
          {/* ── end Navigation Columns ── */}

        </div>
      </div>
      {/* ── end Main Content ── */}

      {/* Bottom Bar */}
      <div className="relative border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white/25 text-xs">
            <span>© {new Date().getFullYear()} EWMS. All rights reserved.</span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="hidden sm:block">Built in Pakistan 🇵🇰</span>
          </div>
          <div className="flex items-center gap-5">
            {navigation.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
