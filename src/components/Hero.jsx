import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient aura overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_40%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_60%_60%,rgba(16,185,129,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-wider text-cyan-200 ring-1 ring-white/20 backdrop-blur">
          Guardian AI — Empathy meets Intelligence
        </span>
        <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Empowering digital childhood and guarding humanity’s future —
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent"> one child at a time.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg">
          AI that protects, empowers, and enlightens — nurturing the next generation to thrive in a digital world.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#waitlist" className="rounded-full bg-cyan-400 px-6 py-3 text-slate-900 transition hover:bg-cyan-300">
            Join the Waitlist
          </a>
          <a href="#product" className="rounded-full border border-white/30 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10">
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}
