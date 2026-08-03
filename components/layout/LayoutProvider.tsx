"use client";

import { useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Cpu, Database, Layers, Terminal } from "lucide-react";

type Props = {
    children: React.ReactNode;
};

const DEVELOPER_DATA = {
    name: "Lucas Bernard",
    title: "Développeur Full Stack Senior & Architecte Web",
    bio: "Passionné par l'ingénierie logicielle avec plus de 6 ans d'expérience dans la conception d'applications web scalables, réactives et performantes. Spécialisé en React, Node.js, TypeScript et architectures Cloud Serverless.",
    location: "Paris, France / Télétravail",
    email: "lucas.bernard.dev@example.com",
    phone: "+33 6 12 34 56 78",
    availability: "Disponible (Préavis 1 mois)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://lucasbernard.dev",

    stats: [
        { label: "Années d'expérience", value: "6+" },
        { label: "Projets livrés", value: "35+" },
        { label: "Contributions Open Source", value: "120+" },
        { label: "Satisfaction Clients", value: "99%" }
    ],

    experiences: [
        {
            id: 1,
            role: "Lead Développeur Full Stack",
            company: "TechScale Solutions",
            period: "2022 - Présent",
            location: "Paris (Hybrid)",
            type: "CDI",
            description: "Encadrement d'une équipe de 6 développeurs sur la refonte globale de la plateforme SaaS B2B.",
            achievements: [
                "Architecture et migration d'un monolithe vers des microservices Node.js/TypeScript hébergés sur AWS.",
                "Optimisation du temps de chargement initial de l'application React de 4.2s à 0.9s (Core Web Vitals).",
                "Mise en place des pipelines CI/CD (GitHub Actions) réduisant le temps de déploiement de 45 minutes à 8 minutes.",
                "Mentorat technique et animation des cérémonies Agile (Scrum/Kanban)."
            ],
            skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS", "Docker", "Tailwind CSS"]
        },
        {
            id: 2,
            role: "Développeur Full Stack Senior",
            company: "InnovApp Studio",
            period: "2020 - 2022",
            location: "Lyon (Remote)",
            type: "CDI",
            description: "Développement d'applications web complexes et d'APIs REST haute performance pour des grands comptes.",
            achievements: [
                "Développement d'un dashboard analytique en temps réel traitant plus de 500k événements par jour (Socket.io, Redis).",
                "Intégration de workflows de paiement sécurisés avec Stripe et gestion des abonnements multi-tiers.",
                "Rédaction de suites de tests automatisés (Jest, React Testing Library, Cypress) atteignant 85% de couverture."
            ],
            skills: ["React", "Next.js", "Express.js", "PostgreSQL", "Redis", "Stripe API", "Cypress"]
        },
        {
            id: 3,
            role: "Développeur Front-End Web",
            company: "Digital Maker Agency",
            period: "2018 - 2020",
            location: "Bordeaux",
            type: "CDI",
            description: "Création d'interfaces web sur mesure, PWA et intégrations d'APIs headless.",
            achievements: [
                "Conception de 15+ sites vitrines et applications web e-commerce réactives.",
                "Création d'un Design System interne réutilisable adopté par l'ensemble des équipes (Storybook).",
                "Sensibilisation et mise en conformité de l'accessibilité web (norme RGAA / WCAG 2.1 AA)."
            ],
            skills: ["Vue.js", "JavaScript (ES6+)", "Sass", "Webpack", "REST API", "Storybook"]
        }
    ],

    skillCategories: [
        {
            name: "Frontend",
            icon: Layers,
            skills: [
                { name: "React / Next.js", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Tailwind CSS / Shadcn", level: 95 },
                { name: "State Management (Zustand, Redux)", level: 88 },
                { name: "Vue.js", level: 75 }
            ]
        },
        {
            name: "Backend",
            icon: Terminal,
            skills: [
                { name: "Node.js / Express / NestJS", level: 90 },
                { name: "REST APIs & GraphQL", level: 92 },
                { name: "Python / FastApi", level: 75 },
                { name: "Microservices & Serverless", level: 82 },
                { name: "Authentification (OAuth2, JWT, Auth0)", level: 88 }
            ]
        },
        {
            name: "Databases & Storage",
            icon: Database,
            skills: [
                { name: "PostgreSQL / MySQL", level: 88 },
                { name: "MongoDB", level: 85 },
                { name: "Redis Caching", level: 80 },
                { name: "Prisma ORM / TypeORM", level: 90 }
            ]
        },
        {
            name: "DevOps & Tools",
            icon: Cpu,
            skills: [
                { name: "Git / GitHub Actions", level: 92 },
                { name: "Docker & Containerisation", level: 85 },
                { name: "AWS (S3, Lambda, CloudFront)", level: 78 },
                { name: "CI/CD & Testing (Jest, Cypress)", level: 88 }
            ]
        }
    ],

    projects: [
        {
            id: 1,
            title: "DevFlow - Plateforme de Collaboration Code",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            description: "Application web collaborative permettant l'édition de code en temps réel avec serveur de compilation distant.",
            techs: ["React", "TypeScript", "Node.js", "WebSockets", "Docker"],
            github: "https://github.com",
            demo: "https://example.com",
            featured: true
        },
        {
            id: 2,
            title: "TaskMaster - System de Gestion Agile",
            category: "SaaS",
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
            description: "Outil Kanban SaaS intégrant le suivi du temps, la génération de rapports IA et la synchronisation Slack/GitHub.",
            techs: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "OpenAI API"],
            github: "https://github.com",
            demo: "https://example.com",
            featured: true
        },
        {
            id: 3,
            title: "CloudMonitor - Dashboard DevOps",
            category: "DevOps",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            description: "Interface de surveillance en temps réel des serveurs et métriques cloud avec alertes Discord/Telegram.",
            techs: ["React", "Chart.js", "Express", "Docker", "Prometheus"],
            github: "https://github.com",
            demo: "https://example.com",
            featured: false
        },
        {
            id: 4,
            title: "EcoShop - E-Commerce Headless",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
            description: "Boutique en ligne écoresponsable construite avec architecture headless Shopify API et Next.js.",
            techs: ["Next.js", "GraphQL", "Tailwind CSS", "Stripe"],
            github: "https://github.com",
            demo: "https://example.com",
            featured: false
        }
    ],

    education: [
        {
            degree: "Master 2 - Architecture Logicielle & Ingénierie du Web",
            school: "Université de Technologie / Grande École du Numérique",
            year: "2016 - 2018",
            details: "Major de promotion. Spécialisation dans les architectures distribuées et la sécurité des applications."
        },
        {
            degree: "Licence Informatique - Parcours Informatique Générale",
            school: "Université des Sciences",
            year: "2013 - 2016",
            details: "Bases solides en algorithmique, structures de données, C/C++, Java et bases de données."
        }
    ],

    certifications: [
        { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", date: "2023" },
        { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", date: "2022" },
        { name: "Meta Front-End Developer Professional Certificate", issuer: "Coursera / Meta", date: "2021" }
    ],

    testimonials: [
        {
            quote: "Lucas est un développeur exceptionnel avec une vision produit très aiguisée. Son apport sur la refonte de notre plateforme a été déterminant pour notre croissance.",
            author: "Marc Dupond",
            title: "CTO @ TechScale Solutions"
        },
        {
            quote: "Rares sont les développeurs qui allient une si grande maîtrise technique à une telle clarté dans la communication. Je le recommande les yeux fermés.",
            author: "Sophie Laurent",
            title: "Engineering Manager @ InnovApp"
        }
    ]
};

export default function LayoutProvider({ children }: Props) {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
            <Navbar />
            {children}
            <Footer
                darkMode={darkMode}
                DEVELOPER_DATA={DEVELOPER_DATA}
            />
        </div>
    )
}