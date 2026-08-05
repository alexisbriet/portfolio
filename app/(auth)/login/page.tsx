"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });


        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }


        router.push("/admin");
        router.refresh();
    }


    return (
        <div className="bg-white shadow rounded-xl p-8">

            <h1 className="text-2xl font-bold mb-6 text-center">
                Connexion
            </h1>


            <form
                onSubmit={login}
                className="flex flex-col gap-4"
            >

                <input
                    type="email"
                    placeholder="Adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg px-4 py-2"
                    required
                />


                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-lg px-4 py-2"
                    required
                />


                {error && (
                    <p className="text-red-500 text-sm">
                        {error}
                    </p>
                )}


                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white rounded-lg py-2 disabled:opacity-50"
                >
                    {loading ? "Connexion..." : "Se connecter"}
                </button>

            </form>

        </div>
    );
}