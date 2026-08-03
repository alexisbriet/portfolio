"use client";

import {
  Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  CheckCircle2,
  Terminal,
  Layers,
  Cpu,
  Database,
  Search,
  Moon,
  Sun,
  Printer,
  ChevronDown,
  ChevronUp,
  Star,
  Sparkles,
  Filter,
  Send,
  Globe,
  Award,
  Copy,
  UserCheck,
  Building,
  Calendar
} from 'lucide-react';
import Image from "next/image";
import { useMemo, useState } from "react";
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

export default function Home() {

  const [activeTab, setActiveTab] = useState('all');
  const [skillFilter, setSkillFilter] = useState('');
  const [expandedExp, setExpandedExp] = useState(1);
  const [projectCategory, setProjectCategory] = useState('Tous');
  const [copiedField, setCopiedField] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Theme
  const toggleTheme = () => setDarkMode(!darkMode);

  // Copy helper
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (projectCategory === 'Tous') return DEVELOPER_DATA?.projects;
    return DEVELOPER_DATA?.projects.filter(p => p.category === projectCategory);
  }, [projectCategory]);

  // Handle Contact Submit
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 4000);
    }
  };
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

      { }
      <section id="about" className="relative pt-6">
        <div className={`p-8 rounded-3xl border relative overflow-hidden transition-all shadow-xl ${darkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-slate-800 shadow-cyan-950/10'
          : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
          {/* Background Glow Deco */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Profile info */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                {DEVELOPER_DATA?.availability}
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {DEVELOPER_DATA?.name}
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">
                {DEVELOPER_DATA?.title}
              </h2>

              <p className={`max-w-2xl text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {DEVELOPER_DATA?.bio}
              </p>

              {/* Metadata badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{DEVELOPER_DATA?.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <button
                    onClick={() => copyToClipboard(DEVELOPER_DATA?.email, 'email')}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    {DEVELOPER_DATA?.email}
                    {copiedField === 'email' ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                  </button>
                </div>
              </div>

              {/* Social & CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Me contacter
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Téléchargement du fichier CV PDF lancé !"); }}
                  className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 ${darkMode
                    ? 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200'
                    : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  Télécharger CV
                </a>

                {/* Icon Links */}
                <div className="flex items-center gap-2 ml-2">
                  <a
                    href={DEVELOPER_DATA?.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-slate-700/60 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                  </a>
                  <a
                    href={DEVELOPER_DATA?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-slate-700/60 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                  </a>
                </div>
              </div>
            </div>

            {/* Developer Avatar / Code Card Illustration */}
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Photo de profil"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-mono bg-slate-900/90 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                    &lt;FullStack /&gt;
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      { }
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {DEVELOPER_DATA?.stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl border text-center transition-all hover:border-cyan-500/50 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
          >
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      { }
      <section id="experiences" className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Expériences Professionnelles</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Mon parcours en entreprise et projets majeurs
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {DEVELOPER_DATA?.experiences.map((exp) => {
            const isExpanded = expandedExp === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all overflow-hidden ${darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm'
                  }`}
              >
                <div
                  onClick={() => setExpandedExp(isExpanded ? null : exp.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-cyan-400">{exp.role}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium opacity-90">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/40">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className={`px-6 pb-6 pt-2 border-t space-y-4 ${darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'
                    }`}>
                    <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Réalisations clés :</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs px-2.5 py-1 rounded-md font-mono ${darkMode
                            ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                            : 'bg-slate-100 text-slate-800 border border-slate-200'
                            }`}
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      { }
      <section id="skills" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Stack & Compétences Techniques</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Technologies et outils maîtrisés au quotidien
              </p>
            </div>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filtrer une techno..."
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-sm rounded-xl border outline-none transition-all ${darkMode
                ? 'bg-slate-900 border-slate-800 focus:border-cyan-500 text-slate-200'
                : 'bg-white border-slate-200 focus:border-cyan-500 text-slate-800'
                }`}
            />
          </div>
        </div>

        {/* Grid of skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEVELOPER_DATA?.skillCategories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            const filteredList = cat.skills.filter(s => s.name.toLowerCase().includes(skillFilter.toLowerCase()));

            if (skillFilter && filteredList.length === 0) return null;

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                </div>

                <div className="space-y-4">
                  {filteredList.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className={`h-2 w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      { }
      <section id="projects" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Projets Réalisés</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Une sélection de mes travaux personnels et professionnels
              </p>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900/60 border border-slate-800 self-start sm:self-auto">
            {['Tous', 'Web App', 'SaaS', 'DevOps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${projectCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm'
                }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className={`text-sm line-clamp-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Code Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Démo Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      { }
      <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Formations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Formations & Diplômes</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Parcours académique</p>
            </div>
          </div>

          <div className="space-y-4">
            {DEVELOPER_DATA?.education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-lg text-cyan-400">{edu.degree}</h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm font-semibold opacity-90 mb-2">{edu.school}</p>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Badge Card */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Certifications</h2>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Validation des acquis</p>
            </div>
          </div>

          <div className="space-y-4">
            {DEVELOPER_DATA?.certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
              >
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 shrink-0">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">{cert.name}</h4>
                  <p className="text-xs text-slate-400">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      { }
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Recommandations</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Ce que disent mes pairs et collaborateurs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEVELOPER_DATA?.testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border italic relative ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
            >
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                "{t.quote}"
              </p>
              <div className="not-italic">
                <h4 className="font-bold text-sm text-cyan-400">{t.author}</h4>
                <p className="text-xs text-slate-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      { }
      <section id="contact" className="space-y-6">
        <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
          }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold mb-2">Travaillons Ensemble !</h2>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Un projet en vue, une opportunité de CDI ou une mission en freelance ? N'hésitez pas à me contacter directement.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email direct</p>
                    <button
                      onClick={() => copyToClipboard(DEVELOPER_DATA?.email, 'contact-email')}
                      className="font-semibold text-sm hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      {DEVELOPER_DATA?.email}
                      {copiedField === 'contact-email' ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Téléphone</p>
                    <span className="font-semibold text-sm">{DEVELOPER_DATA?.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Localisation</p>
                    <span className="font-semibold text-sm">{DEVELOPER_DATA?.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Input */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                  <h3 className="text-xl font-bold">Message envoyé !</h3>
                  <p className="text-sm text-slate-300">Merci d'avoir pris contact. Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Votre Nom</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'
                        }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Votre Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="jean@entreprise.com"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'
                        }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Bonjour Lucas, nous serions intéressés par votre profil..."
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border outline-none transition-all resize-none ${darkMode ? 'bg-slate-950 border-slate-800 focus:border-cyan-500' : 'bg-slate-50 border-slate-200 focus:border-cyan-500'
                        }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
