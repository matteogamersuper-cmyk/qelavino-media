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
        <div className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Realtime Attivo
        </div>
      </header>

      {/* Sezione Centrale */}
      <div className="w-full max-w-3xl text-center space-y-6 my-auto relative z-10 py-10">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          La nuova generazione di chat
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Qelavino — la nuova app di messaggistica
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Spazi di discussione istantanei, veloci e sincronizzati in tempo reale.
        </p>

        <div className="pt-4 flex flex-wrap gap-4 justify-center text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Ultra Veloce</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-lg shadow-indigo-600/25"
          >
            <span>Inizia ora</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl py-4 text-center text-xs text-zinc-600 relative z-10 border-t border-zinc-900">
        Qelavino © 2026 — Powered by Next.js & Supabase Realtime
      </footer>
    </main>
  );
}