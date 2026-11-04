"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const supabase = createClient();
            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                setError(error.message);
                setLoading(false);
                return;
            }

            router.push("/admin");
            router.refresh();
        } catch {
            setError("La connexion est momentanément indisponible. Réessayez.");
            setLoading(false);
        }
    }


    return (
        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-9">
            <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <LockKeyhole className="h-5 w-5" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Espace sécurisé</p>
                <h1 className="text-3xl font-bold tracking-tight text-white">Connexion</h1>
                <p className="mt-2 text-sm text-slate-400">Connectez-vous pour gérer votre portfolio.</p>
            </div>
            <form
                onSubmit={login}
                className="flex flex-col gap-5"
            >
                <label className="space-y-2 text-sm font-medium text-slate-300">
                    Adresse e-mail
                    <input
                        type="email"
                        autoComplete="email"
                        placeholder="vous@exemple.fr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                        required
                    />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-300">
                    Mot de passe
                    <input
                        type="password"
                        autoComplete="current-password"
                        placeholder="Votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none"
                        required
                    />
                </label>
                {error && (
                    <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-900/30 transition-all hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? "Connexion..." : "Se connecter"}
                    {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
            </form>
        </div>
    );
}