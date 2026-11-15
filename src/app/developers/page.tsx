import Link from "next/link";
import { Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export default function WelcomeHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Sfumature decorative di sfondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between py-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/20">
            Q
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Qelavino</span>
        </div>
      </header>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Qelavino — Developers
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          SDK Per Creare Giochi che comunicano con Qelavino e Bot

          SDK In Arrivo
        </p>

        <div className="pt-4 flex flex-wrap gap-4 justify-center text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>SDK Disponibili per Python JavaScript e TypeScript</span>
          </div>
        </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-4 text-center text-xs text-zinc-600 relative z-10 border-t border-zinc-900">
        Qelavino © 2026 — Powered by Next.js & Supabase Realtime
        Created with ❤️ by Matteo
      </footer>
    </main>
  );
}