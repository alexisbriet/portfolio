"use client";

import Navbar from "../navbar";
import Footer from "../footer";
import { ThemeProvider, useTheme } from "./theme-context";
import { DeveloperDataProvider } from "./developer-data-context";

type Props = {
    children: React.ReactNode;
};

function LayoutShell({ children }: Props) {
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

export default function LayoutProvider({ children }: Props) {
    return (
        <ThemeProvider>
            <DeveloperDataProvider>
                <LayoutShell>{children}</LayoutShell>
            </DeveloperDataProvider>
        </ThemeProvider>
    );
}
