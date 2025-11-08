import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-900 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_40%_0%,rgba(14,165,233,0.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight">About Us</h3>
          <p className="mt-4 text-slate-300">
            We believe technology should be a partner in nurturing humanity. Guardian AI exists to protect and empower children — not to resist tech, but to redefine its role with empathy, awareness, and balance.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-xl font-semibold text-white">Our Story</h4>
            <p className="mt-2 text-slate-300">
              Childhood changed when screens became constant companions. We created Guardian AI so families can thrive alongside technology — with safety and emotional intelligence at the center.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-xl font-semibold text-white">Mission</h4>
            <p className="mt-2 text-slate-300">
              To protect and empower children in the digital age — ensuring technology becomes a tool for growth, not harm.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h4 className="text-xl font-semibold text-white">Vision</h4>
            <p className="mt-2 text-slate-300">
              A world where every child can explore, learn, and thrive safely — guided by AI guardians that respect privacy and humanity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
