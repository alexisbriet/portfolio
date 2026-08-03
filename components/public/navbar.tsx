"use client";

import { Code2, Moon, Printer, Sun } from "lucide-react";
import { useTheme } from "@/components/public/layout/theme-context";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg text-white shadow-md shadow-blue-500/20">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            LB.dev
                        </span>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <a href="#about" className="hover:text-cyan-400 transition-colors">À propos</a>
                        <a href="#experiences" className="hover:text-cyan-400 transition-colors">Expériences</a>
                        <a href="#skills" className="hover:text-cyan-400 transition-colors">Compétences</a>
                        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projets</a>
                        <a href="#education" className="hover:text-cyan-400 transition-colors">Formations</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>

                    {/* Theme & Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            aria-label="Changer de thème"
                            className={`p-2 rounded-lg border transition-all ${darkMode
                                ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700'
                                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={() => window.print()}
                            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 hover:border-cyan-500 transition-all hover:text-cyan-400"
                        >
                            <Printer className="w-3.5 h-3.5" />
                            Imprimer
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}