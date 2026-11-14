import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />

      <section className="relative z-10 w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-xl font-black text-white shadow-lg shadow-indigo-500/20">
          Q
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
          Errore 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Pagina non trovata
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-400">
          La pagina che stai cercando non esiste oppure è stata spostata.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Torna alla home
        </Link>
      </section>
    </main>
  );
}
