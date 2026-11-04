import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Alexis Briet | Développeur Full Stack & DevOps",
        template: "%s | Alexis Briet",
    },
    description:
        "Portfolio d'Alexis Briet, développeur Full Stack & DevOps et création d'applications web modernes. Découvrez mes projets, compétences et expériences.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}