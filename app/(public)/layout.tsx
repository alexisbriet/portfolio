import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LayoutProvider from "@/components/public/layout/LayoutProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Briet | Développeur Full Stack Java, Spring Boot & Next.js",
  description:
    "Portfolio d'Alexis Briet, développeur Full Stack spécialisé en Java, Spring Boot, Next.js, TypeScript et création d'applications web modernes. Découvrez mes projets, compétences et expériences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
