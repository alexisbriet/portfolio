import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});


export async function main() {

    await prisma.developer.deleteMany();


    await prisma.developer.create({
        data: {
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

            stats: {
                create: [
                    {
                        label: "Années d'expérience",
                        value: "6+",
                    },
                    {
                        label: "Projets livrés",
                        value: "35+",
                    },
                    {
                        label: "Contributions Open Source",
                        value: "120+",
                    },
                    {
                        label: "Satisfaction Clients",
                        value: "99%",
                    },
                ],
            },


            experiences: {
                create: [
                    {
                        role: "Lead Développeur Full Stack",
                        company: "TechScale Solutions",
                        period: "2022 - Présent",
                        location: "Paris (Hybrid)",
                        type: "CDI",
                        description:
                            "Encadrement d'une équipe de 6 développeurs sur la refonte globale de la plateforme SaaS B2B.",

                        achievements: {
                            create: [
                                {
                                    content:
                                        "Migration d'un monolithe vers une architecture microservices Node.js/TypeScript AWS.",
                                },
                                {
                                    content:
                                        "Optimisation React Core Web Vitals de 4.2s à 0.9s.",
                                },
                                {
                                    content:
                                        "Mise en place CI/CD GitHub Actions.",
                                },
                            ],
                        },

                        skills: {
                            create: [
                                { name: "React" },
                                { name: "TypeScript" },
                                { name: "Node.js" },
                                { name: "GraphQL" },
                                { name: "AWS" },
                                { name: "Docker" },
                            ],
                        },
                    },

                    {
                        role: "Développeur Full Stack Senior",
                        company: "InnovApp Studio",
                        period: "2020 - 2022",
                        location: "Lyon (Remote)",
                        type: "CDI",
                        description:
                            "Développement d'applications web complexes et APIs REST haute performance.",

                        achievements: {
                            create: [
                                {
                                    content:
                                        "Dashboard temps réel traitant plus de 500k événements/jour.",
                                },
                                {
                                    content:
                                        "Intégration Stripe et abonnements multi-tiers.",
                                },
                            ],
                        },

                        skills: {
                            create: [
                                { name: "Next.js" },
                                { name: "Express.js" },
                                { name: "PostgreSQL" },
                                { name: "Redis" },
                                { name: "Stripe API" },
                            ],
                        },
                    },
                ],
            },


            skillCategories: {
                create: [
                    {
                        name: "Frontend",
                        icon: "Layers",
                        skills: {
                            create: [
                                {
                                    name: "React / Next.js",
                                    level: 95,
                                },
                                {
                                    name: "TypeScript",
                                    level: 90,
                                },
                                {
                                    name: "Tailwind CSS",
                                    level: 95,
                                },
                                {
                                    name: "Vue.js",
                                    level: 75,
                                },
                            ],
                        },
                    },

                    {
                        name: "Backend",
                        icon: "Terminal",
                        skills: {
                            create: [
                                {
                                    name: "Node.js / NestJS",
                                    level: 90,
                                },
                                {
                                    name: "REST API / GraphQL",
                                    level: 92,
                                },
                                {
                                    name: "Python FastAPI",
                                    level: 75,
                                },
                            ],
                        },
                    },

                    {
                        name: "Database",
                        icon: "Database",
                        skills: {
                            create: [
                                {
                                    name: "PostgreSQL",
                                    level: 88,
                                },
                                {
                                    name: "MongoDB",
                                    level: 85,
                                },
                                {
                                    name: "Prisma ORM",
                                    level: 90,
                                },
                            ],
                        },
                    },

                    {
                        name: "DevOps",
                        icon: "Cpu",
                        skills: {
                            create: [
                                {
                                    name: "Docker",
                                    level: 85,
                                },
                                {
                                    name: "AWS",
                                    level: 78,
                                },
                                {
                                    name: "GitHub Actions",
                                    level: 92,
                                },
                            ],
                        },
                    },
                ],
            },


            projects: {
                create: [
                    {
                        title: "DevFlow - Plateforme de Collaboration Code",
                        category: "Web App",
                        image:
                            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                        description:
                            "Application collaborative permettant l'édition de code en temps réel.",
                        github: "https://github.com",
                        demo: "https://example.com",
                        featured: true,

                        technologies: {
                            create: [
                                { name: "React" },
                                { name: "TypeScript" },
                                { name: "Node.js" },
                                { name: "Docker" },
                            ],
                        },
                    },

                    {
                        title: "TaskMaster",
                        category: "SaaS",
                        image:
                            "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
                        description:
                            "Outil Kanban SaaS avec IA et synchronisation GitHub.",
                        github: "https://github.com",
                        demo: "https://example.com",
                        featured: true,

                        technologies: {
                            create: [
                                { name: "Next.js" },
                                { name: "Prisma" },
                                { name: "PostgreSQL" },
                                { name: "OpenAI API" },
                            ],
                        },
                    },
                ],
            },


            education: {
                create: [
                    {
                        degree:
                            "Master 2 Architecture Logicielle & Ingénierie Web",
                        school:
                            "Université de Technologie",
                        year: "2016 - 2018",
                        details:
                            "Architecture distribuée et sécurité applicative.",
                    },
                ],
            },


            certifications: {
                create: [
                    {
                        name: "AWS Certified Developer Associate",
                        issuer: "Amazon Web Services",
                        date: "2023",
                    },
                    {
                        name: "Professional Scrum Master I",
                        issuer: "Scrum.org",
                        date: "2022",
                    },
                ],
            },


            testimonials: {
                create: [
                    {
                        quote:
                            "Lucas est un développeur exceptionnel avec une vision produit très aiguisée.",
                        author: "Marc Dupond",
                        title: "CTO @ TechScale Solutions",
                    },
                    {
                        quote:
                            "Un développeur qui combine expertise technique et communication.",
                        author: "Sophie Laurent",
                        title: "Engineering Manager",
                    },
                ],
            },
        },
    });


    console.log("✅ Portfolio seed terminé");
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });