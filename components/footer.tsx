export default function Footer({
    darkMode,
    DEVELOPER_DATA
}: {
    darkMode: boolean;
    DEVELOPER_DATA: object
}) {
    return (
        <footer className={`border-t py-8 transition-colors ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
                <p>© {new Date().getFullYear()} Lucas Bernard — Développeur Full Stack. Tous droits réservés.</p>
                <div className="flex items-center gap-6">
                    <a href="#about" className="hover:text-cyan-400 transition-colors">Retour en haut</a>
                    <a href={DEVELOPER_DATA?.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                    <a href={DEVELOPER_DATA?.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}