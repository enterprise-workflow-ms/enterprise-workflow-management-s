"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const contactDetails = [
  {
    color: "#1A56DB",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "support@ewms.com",
  },
  {
    color: "#06B6D4",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+92 300 000 0000",
  },
  {
    color: "#1A56DB",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Karachi, Pakistan",
  },
];

const perks = [
  { icon: "🔒", text: "Enterprise-grade security" },
  { icon: "⚡", text: "Setup in under 24 hours" },
  { icon: "📊", text: "Full audit trail & reporting" },
  { icon: "🔔", text: "Real-time notifications" },
];

export default function CTA() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [focused, setFocused] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  function handle(e) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1800);
  }

  function inputStyle(name) {
    const active = focused === name;
    return {
      width: "100%",
      background: active ? "rgba(6,182,212,0.07)" : "rgba(255,255,255,0.06)",
      border: `1.5px solid ${active ? "rgba(6,182,212,0.65)" : "rgba(255,255,255,0.13)"}`,
      borderRadius: "12px",
      padding: "13px 16px",
      color: "#fff",
      fontSize: "14px",
      outline: "none",
      boxShadow: active ? "0 0 0 3px rgba(6,182,212,0.13)" : "none",
      transition: "all 0.25s ease",
    };
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24" ref={ref}>

      <style>{`
        @keyframes spin360 { to { transform: rotate(360deg); } }
        @keyframes floatUD { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes popIn { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.1); } 100%{ transform:scale(1); opacity:1; } }
        @keyframes shimmerBtn { 0% { left:-80%; } 100% { left:120%; } }
        @keyframes particleDrift { 0%,100% { transform:translateY(0); opacity:0.4; } 50% { transform:translateY(-12px); opacity:1; } }
        .cta-label { display:block; font-size:11px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:rgba(255,255,255,0.45); margin-bottom:7px; }
        .cta-label span { color:#06B6D4; }
        ::placeholder { color:rgba(255,255,255,0.22) !important; }
      `}</style>

      {/* BG layers */}
      <div className="absolute inset-0" style={{ background: "#07101f" }} />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(120deg,rgba(26,86,219,0.50) 0%,transparent 55%,rgba(6,182,212,0.08) 100%)" }} />

      {/* Animated orbs */}
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:560, height:560, top:"-140px", left:"-140px", background:"radial-gradient(circle,rgba(26,86,219,0.40) 0%,transparent 70%)", animation:"floatUD 9s ease-in-out infinite" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:480, height:480, bottom:"-120px", right:"-120px", background:"radial-gradient(circle,rgba(6,182,212,0.30) 0%,transparent 70%)", animation:"floatUD 11s ease-in-out infinite 3s" }} />
      <div className="absolute rounded-full pointer-events-none"
        style={{ width:260, height:260, top:"40%", left:"42%", background:"radial-gradient(circle,rgba(26,86,219,0.18) 0%,transparent 70%)", animation:"floatUD 13s ease-in-out infinite 6s" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.035) 1px,transparent 1px)", backgroundSize:"30px 30px" }} />

      {/* Line grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage:"linear-gradient(rgba(6,182,212,1) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,1) 1px,transparent 1px)", backgroundSize:"70px 70px" }} />

      {/* Spinning rings */}
      <div className="absolute pointer-events-none"
        style={{ width:200, height:200, top:24, right:80, border:"1.5px solid rgba(6,182,212,0.18)", borderRadius:"50%", animation:"spin360 28s linear infinite" }}>
        <div style={{ position:"absolute", top:-5, left:"50%", transform:"translateX(-50%)", width:10, height:10, borderRadius:"50%", background:"#06B6D4", boxShadow:"0 0 8px 3px rgba(6,182,212,0.7)" }} />
      </div>
      <div className="absolute pointer-events-none"
        style={{ width:120, height:120, bottom:40, left:60, border:"1.5px solid rgba(26,86,219,0.22)", borderRadius:"50%", animation:"spin360 18s linear infinite reverse" }}>
        <div style={{ position:"absolute", top:-4, left:"50%", transform:"translateX(-50%)", width:8, height:8, borderRadius:"50%", background:"#1A56DB", boxShadow:"0 0 8px 3px rgba(26,86,219,0.7)" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <div key={i} className="absolute rounded-full"
            style={{
              width: i%4===0?4:2, height: i%4===0?4:2,
              background: i%2===0?"rgba(6,182,212,0.6)":"rgba(26,86,219,0.65)",
              left:`${(i*17+9)%95}%`,
              top:`${(i*29+7)%90}%`,
              animation:`particleDrift ${2.5+(i%5)*0.5}s ease-in-out infinite`,
              animationDelay:`${i*0.25}s`,
            }} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background:"rgba(6,182,212,0.12)", border:"1.5px solid rgba(6,182,212,0.35)", color:"#06B6D4" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Let&apos;s{" "}
            <span className="relative inline-block">
              <span style={{ color:"#06B6D4" }}>Get In Touch</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 340 10" fill="none">
                <path d="M2 7 Q85 1 170 7 Q255 13 338 7" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            Have questions about EWMS? We&apos;re here to help you get started.
          </p>
        </div>

        {/* Two column */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — info panel */}
          <div className={`transition-all duration-700 delay-200 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-12"}`}>
            <div className="rounded-3xl p-px mb-6"
              style={{ background:"linear-gradient(145deg,rgba(26,86,219,0.55),rgba(26,86,219,0.12) 60%,rgba(6,182,212,0.45))" }}>
              <div className="rounded-3xl p-8"
                style={{ background:"linear-gradient(145deg,rgba(255,255,255,0.08),rgba(7,16,31,0.94))", backdropFilter:"blur(28px)" }}>

                {/* Logo row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-2 rounded-full animate-pulse"
                      style={{ background:"rgba(6,182,212,0.18)", filter:"blur(14px)" }} />
                    <Image src="/img/logo-symbol.png" alt="EWMS Symbol" width={52} height={52}
                      className="relative object-contain drop-shadow-lg" priority />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-lg leading-none mb-1">EWMS</p>
                    <p className="text-white/40 text-sm">Enterprise Workflow Management System</p>
                  </div>
                </div>

                <p className="text-white/55 text-[15px] leading-relaxed mb-8">
                  Streamline your organization&apos;s approval process with a structured,
                  transparent and fully audited workflow pipeline — from HOD to CEO.
                </p>

                {/* Perks grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {perks.map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                      style={{
                        background: i%2===0 ? "rgba(26,86,219,0.12)" : "rgba(6,182,212,0.10)",
                        border:`1px solid ${i%2===0?"rgba(26,86,219,0.25)":"rgba(6,182,212,0.22)"}`,
                      }}>
                      <span className="text-xl leading-none">{p.icon}</span>
                      <span className="text-white/65 text-xs font-medium leading-snug">{p.text}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px mb-6"
                  style={{ background:"linear-gradient(90deg,rgba(26,86,219,0.4),rgba(6,182,212,0.4),transparent)" }} />

                {/* Contact details */}
                <div className="flex flex-col gap-4">
                  {contactDetails.map((c, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background:`rgba(${c.color==="#1A56DB"?"26,86,219":"6,182,212"},0.15)`,
                          border:`1.5px solid rgba(${c.color==="#1A56DB"?"26,86,219":"6,182,212"},0.35)`,
                          color: c.color,
                          boxShadow:`0 0 12px 2px rgba(${c.color==="#1A56DB"?"26,86,219":"6,182,212"},0.15)`,
                        }}>
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-0.5">{c.label}</p>
                        <p className="text-white/80 text-sm font-semibold">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl"
              style={{ background:"rgba(74,212,100,0.08)", border:"1.5px solid rgba(74,212,100,0.25)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4ad464] animate-ping flex-shrink-0" />
              <p className="text-[#4ad464] text-sm font-semibold">Typically responds within 24 hours</p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className={`transition-all duration-700 delay-300 ${visible?"opacity-100 translate-x-0":"opacity-0 translate-x-12"}`}>
            <div className="rounded-3xl p-px"
              style={{ background:"linear-gradient(145deg,rgba(6,182,212,0.55),rgba(6,182,212,0.10) 55%,rgba(26,86,219,0.45))" }}>
              <div className="rounded-3xl p-8 md:p-10"
                style={{ background:"linear-gradient(160deg,rgba(255,255,255,0.08) 0%,rgba(7,16,31,0.95) 45%,rgba(255,255,255,0.04) 100%)", backdropFilter:"blur(28px)" }}>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center"
                    style={{ animation:"popIn 0.5s ease both" }}>
                    <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
                      style={{ background:"rgba(74,212,100,0.12)", border:"2.5px solid rgba(74,212,100,0.50)", boxShadow:"0 0 40px 8px rgba(74,212,100,0.18)" }}>
                      <svg className="w-10 h-10" fill="none" stroke="#4ad464" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white font-extrabold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-white/45 text-base max-w-xs leading-relaxed mb-8">
                      Thank you! Our team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name:"", email:"", org:"", message:"" }); }}
                      className="text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background:"rgba(6,182,212,0.14)", border:"1.5px solid rgba(6,182,212,0.40)", color:"#06B6D4" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <div className="mb-7">
                      <h3 className="text-white font-extrabold text-2xl mb-1.5">Send a Message</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-0.5 w-8 rounded-full" style={{ background:"#06B6D4" }} />
                        <p className="text-white/35 text-sm">We&apos;ll reply as soon as possible</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="cta-label">Full Name <span>*</span></label>
                        <input type="text" name="name" placeholder="Muhammad Aqdas"
                          value={form.name} onChange={handle} required
                          onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                          style={inputStyle("name")} />
                      </div>
                      <div>
                        <label className="cta-label">Email Address <span>*</span></label>
                        <input type="email" name="email" placeholder="you@company.com"
                          value={form.email} onChange={handle} required
                          onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                          style={inputStyle("email")} />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label className="cta-label">Organization</label>
                      <input type="text" name="org" placeholder="Your company or department"
                        value={form.org} onChange={handle}
                        onFocus={() => setFocused("org")} onBlur={() => setFocused("")}
                        style={inputStyle("org")} />
                    </div>

                    <div className="mb-7">
                      <label className="cta-label">Message <span>*</span></label>
                      <textarea name="message" rows={5}
                        placeholder="Tell us about your workflow needs..."
                        value={form.message} onChange={handle} required
                        onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                        style={{ ...inputStyle("message"), resize:"none" }} />
                    </div>

                    <button type="submit" disabled={submitting}
                      className="relative w-full flex items-center justify-center gap-3 font-bold py-4 rounded-2xl text-base overflow-hidden transition-all duration-300 hover:-translate-y-1 disabled:opacity-60"
                      style={{
                        background:"linear-gradient(135deg,#1A56DB 0%,#06B6D4 100%)",
                        color:"#fff",
                        boxShadow:"0 8px 32px -6px rgba(6,182,212,0.45), 0 0 0 1px rgba(6,182,212,0.20)",
                      }}>
                      {!submitting && (
                        <span className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                          <span className="absolute top-0 bottom-0 w-20 bg-white/20 skew-x-12"
                            style={{ animation:"shimmerBtn 2.2s ease-in-out infinite" }} />
                        </span>
                      )}
                      {submitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          Send Message
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/20 text-xs mt-4">
                      🔒 Your information is safe with us. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
