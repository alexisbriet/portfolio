"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import { ThemeProvider, useTheme } from "./theme-context";

type PublicDeveloper = {
    name: string;
    github: string;
    linkedin: string;
};

type Props = {
    children: React.ReactNode;
    developer: PublicDeveloper | null;
};

function LayoutShell({ children, developer }: Props) {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
            <Navbar />
            {children}
            <Footer
                darkMode={darkMode}
                developerName={developer?.name ?? ""}
                github={developer?.github ?? ""}
                linkedin={developer?.linkedin ?? ""}
            />
        </div>
    );
}

export default function LayoutProvider({ children, developer }: Props) {
    return (
        <ThemeProvider>
            <LayoutShell developer={developer}>{children}</LayoutShell>
        </ThemeProvider>
    );
}
