"use client";

import Footer from "../footer";
import Navbar from "../navbar";
import { useTheme } from "./theme-context";

type Props = {
    children: React.ReactNode;
};

export default function LayoutShell({ children }: Props) {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
            <Navbar />
            {children}
            <Footer
                darkMode={darkMode}
            />
        </div>
    );
}