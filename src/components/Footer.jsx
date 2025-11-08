import React from 'react';

export default function Footer() {
  return (
    <footer id="waitlist" className="w-full bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-semibold text-white">Guardian AI</h5>
            <p className="mt-1 text-sm">Empowering digital childhood.</p>
          </div>

          <form className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email for early access"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 focus:border-cyan-300"
            />
            <button type="submit" className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-300">
              Join
            </button>
          </form>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Guardian AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
