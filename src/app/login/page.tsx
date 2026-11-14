"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      setErrorMessage("Inserisci email e password.");
      setIsLoading(false);
      return;
    }

    try {
      if (mode === "register") {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        if (data.session) {
          router.replace("/application/it");
          router.refresh();
          return;
        }

        setSuccessMessage(
          "Registrazione completata. Controlla la tua email per confermare l'account."
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMessage("Email o password non corretti.");
          return;
        }

        router.replace("/application/it");
        router.refresh();
      }
    } catch {
      setErrorMessage(
        mode === "register"
          ? "Registrazione non riuscita. Riprova tra poco."
          : "Accesso non riuscito. Riprova tra poco."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-12 text-zinc-100">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
      <section className="relative z-10 w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla home
          </Link>
        </div>

        <div
          className="mb-6 grid grid-cols-2 rounded-xl border border-zinc-800 bg-zinc-950 p-1"
          aria-label="Tipo di autenticazione"
        >
          <button
            type="button"
            aria-pressed={mode === "login"}
            onClick={() => {
              setMode("login");
              setErrorMessage("");
              setSuccessMessage("");
            }}
            className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              mode === "login"
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Accedi
          </button>
          <button
            type="button"
            aria-pressed={mode === "register"}
            onClick={() => {
              setMode("register");
              setErrorMessage("");
              setSuccessMessage("");
            }}
            className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              mode === "register"
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Registrati
          </button>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          {mode === "login" ? "Accedi a Qelavino" : "Crea il tuo account"}
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          {mode === "login"
            ? "Inserisci le credenziali del tuo account."
            : "Registrati per iniziare a usare Qelavino."}
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                minLength={mode === "register" ? 6 : undefined}
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          {errorMessage && (
            <p role="alert" className="text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p role="status" className="text-sm text-emerald-400">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading
              ? mode === "login"
                ? "Accesso in corso…"
                : "Registrazione in corso…"
              : mode === "login"
                ? "Accedi"
                : "Crea account"}
          </button>
        </form>
      </section>
    </main>
  );
}