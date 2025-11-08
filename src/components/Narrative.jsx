import React from 'react';

export default function Narrative() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-cyan-200">Why Guardian AI?</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-200">
          The world our children inherit is nothing like the one we knew... Guardian AI was born from a simple conviction — technology should serve childhood, not steal it.
        </p>
        <div className="mt-6 space-y-4 text-slate-300">
          <p>
            Screen addiction, algorithmic influence, and unfiltered exposure are shaping minds before they can choose. Parents are overwhelmed. Children are over-stimulated.
          </p>
          <p>
            Guardian AI is a silent ally — blending human love with artificial intelligence to nurture digital wisdom with empathy and balance.
          </p>
          <p className="font-medium text-slate-100">
            Because protecting a child’s mind today is the surest way to protect humanity’s tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
