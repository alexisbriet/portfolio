"use client";

export default function Footer({
    darkMode,
    developerName,
    github,
    linkedin,
}: {
    darkMode: boolean;
    developerName: string;
    github: string;
    linkedin: string;
}) {
    return (
        <footer className={`border-t py-8 transition-colors ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
                <p>© {new Date().getFullYear()} {developerName || "Alexis BRIET"} — Développeur Full Stack & DevOps. Tous droits réservés.</p>
                <div className="flex items-center gap-6">
                    <a href="#about" className="hover:text-cyan-400 transition-colors">Retour en haut</a>
                    {github && <a href={github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>}
                    {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>}
                </div>
            </div>
        </footer>
    )
}