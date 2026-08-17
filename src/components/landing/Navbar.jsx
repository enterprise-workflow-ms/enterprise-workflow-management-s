"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Overview", href: "#stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/98 shadow-lg shadow-[#1A56DB]/8 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="group relative flex items-center">
          {/* Glow + border ring — only when NOT scrolled */}
          {!scrolled && (
            <>
              <div className="absolute -inset-3 rounded-2xl bg-white/8 group-hover:bg-white/15 blur-sm transition-all duration-500" />
              <div className="absolute -inset-2 rounded-xl mb-2 mt-1 border border-white/10 group-hover:border-[#06B6D4]/30 transition-all duration-500" />
            </>
          )}
          <Image
            src="/img/ewms-logo.png"
            alt="EWMS Logo"
            width={160}
            height={54}
            className="relative object-contain h-11 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                scrolled
                  ? "text-gray-600 hover:text-[#1A56DB]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-0 rounded-lg bg-[#1A56DB]/8 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#06B6D4] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* ── Sign In Button ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className={`group hidden md:inline-flex items-center gap-2.5 font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden relative ${
              scrolled
                ? "bg-[#1A56DB] text-white shadow-md shadow-[#1A56DB]/25 hover:bg-[#1648c0] hover:shadow-lg hover:shadow-[#1A56DB]/35"
                : "bg-white text-[#1A56DB] shadow-lg shadow-black/20 hover:bg-gray-50 hover:shadow-xl"
            }`}
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 skew-x-12" />
            {/* Lock icon */}
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Sign In
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1A56DB]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-[#1A56DB] font-medium py-2 px-3 rounded-lg hover:bg-[#1A56DB]/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="mt-2 bg-[#1A56DB] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center flex items-center justify-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
