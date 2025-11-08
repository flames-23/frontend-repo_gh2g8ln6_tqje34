import React from 'react';
import { Shield, MessageSquare, Focus, Lock } from 'lucide-react';

const Feature = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/10">
    <div className="mb-4 inline-flex rounded-full bg-cyan-400/10 p-3 ring-1 ring-cyan-300/20">
      <Icon className="h-5 w-5 text-cyan-300" />
    </div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <p className="mt-2 text-slate-300">{children}</p>
  </div>
);

export default function Product() {
  return (
    <section id="product" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_10%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Guardian AI — How it Works</h3>
          <p className="mt-4 text-slate-300">
            Your child’s digital co-pilot — built with emotional intelligence, privacy, and love.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Shield} title="AI Guardian Mode">
            Detects risk behaviors like cyberbullying, screen addiction, and explicit content — in real time.
          </Feature>
          <Feature icon={MessageSquare} title="Harmony Mode">
            Mediates parent–child conversations with empathy to rebuild trust and understanding.
          </Feature>
          <Feature icon={Focus} title="Focus Flow">
            Helps kids refocus after stress using gentle nudges and mindfulness routines.
          </Feature>
          <Feature icon={Lock} title="AI Privacy Engine">
            Private by design — all analysis is processed on-device. No cloud spying.
          </Feature>
        </div>

        <div className="mt-16 grid items-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold text-white">The Guardian AI Ecosystem</h4>
            <p className="mt-2 text-slate-300">
              A simple, private loop that keeps everyone aligned: Kid Device ↔ Guardian AI Core ↔ Parent Dashboard.
            </p>
            <a href="#demo" className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-2.5 font-medium text-slate-900 transition hover:bg-cyan-300">
              See Guardian AI in Action
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm text-cyan-300">Kid Device</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm text-cyan-300">Guardian AI Core</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-sm text-cyan-300">Parent Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
