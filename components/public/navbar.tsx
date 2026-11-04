"use client";

import { Code2, Download, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/public/layout/theme-context";

const navigationLinks = [
    ["À propos", "#about"],
    ["Expériences", "#experiences"],
    ["Compétences", "#skills"],
    ["Projets", "#projects"],
    ["Articles", "#articles"],
    ["Formations", "#education"],
    ["Contact", "#contact"],
];

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav aria-label="Navigation principale" className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors ${darkMode ? 'bg-slate-900/85 border-slate-800' : 'bg-white/85 border-slate-200 shadow-sm'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-3" aria-label="Alexis Briet, accueil">
                        <div className="p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg text-white shadow-md shadow-blue-500/20">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Alexis BRIET
                        </span>
                    </Link>

                    <div className="hidden xl:flex items-center gap-5 text-sm font-medium">
                        {navigationLinks.map(([label, href]) => (
                            <a key={href} href={pathname === "/" ? href : `/${href}`} className="hover:text-cyan-400 transition-colors">{label}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            aria-label="Changer de thème"
                            aria-pressed={darkMode}
                            className={`p-2 rounded-lg border transition-all ${darkMode
                                ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700'
                                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <a
                            href="https://cv.alexisbriet.fr"
                            download
                            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 hover:border-cyan-500 transition-all hover:text-cyan-400"
                        >
                            <Download className="w-3.5 h-3.5" />
                            Télécharger mon CV
                        </a>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            className={`xl:hidden p-2 rounded-lg border transition-colors ${darkMode
                                ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div id="mobile-navigation" className={`xl:hidden border-t ${darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                    <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-1">
                        {navigationLinks.map(([label, href]) => (
                            <a
                                key={href}
                                href={pathname === "/" ? href : `/${href}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${darkMode
                                    ? 'text-slate-300 hover:bg-slate-800 hover:text-cyan-300'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-700'
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}