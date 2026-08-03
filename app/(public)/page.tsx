"use client";

import { useEffect, useMemo, useState } from 'react';

import { getCertifications } from '../actions/certification.actions';
import { getDeveloperStats } from '../actions/developer-stat.actions';
import { getDevelopers } from '../actions/developer.actions';
import { getEducations } from '../actions/education.actions';
import { getExperiences } from '../actions/experience.actions';
import { getProjects } from '../actions/project.actions';
import { getSkillCategories } from '../actions/skill-category.actions';
import { getTestimonials } from '../actions/testimonial.actions';
import { ContactSection } from '../../components/public/portfolio/ContactSection';
import { EducationSection } from '../../components/public/portfolio/EducationSection';
import { ExperienceSection } from '../../components/public/portfolio/ExperienceSection';
import { HeroSection } from '../../components/public/portfolio/HeroSection';
import { ProjectsSection } from '../../components/public/portfolio/ProjectsSection';
import { SkillsSection } from '../../components/public/portfolio/SkillsSection';
import { StatsSection } from '../../components/public/portfolio/StatsSection';
import { TestimonialsSection } from '../../components/public/portfolio/TestimonialsSection';
import type { DeveloperData } from '../../components/public/portfolio/types';
import { Cpu, Database, Layers, Terminal } from 'lucide-react';
import { useTheme } from '@/components/public/layout/theme-context';

const emptyDeveloperData: DeveloperData = {
  name: '',
  title: '',
  bio: '',
  location: '',
  email: '',
  phone: '',
  availability: '',
  github: '',
  linkedin: '',
  portfolio: '',
  stats: [],
  experiences: [],
  skillCategories: [],
  projects: [],
  education: [],
  certifications: [],
  testimonials: []
};

const iconMap = {
  Layers,
  Terminal,
  Database,
  Cpu
} as const;

export default function Home() {
  const [skillFilter, setSkillFilter] = useState('');
  const [expandedExp, setExpandedExp] = useState<number | null>(1);
  const [projectCategory, setProjectCategory] = useState('Tous');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { darkMode } = useTheme();
  const [developerData, setDeveloperData] = useState<DeveloperData>(emptyDeveloperData);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
    let isMounted = true;

    const loadDeveloperData = async () => {
      const [developers, stats, experiences, skillCategories, projects, education, certifications, testimonials] = await Promise.all([
        getDevelopers(),
        getDeveloperStats(),
        getExperiences(),
        getSkillCategories(),
        getProjects(),
        getEducations(),
        getCertifications(),
        getTestimonials()
      ]);

      const developer = developers[0];
      if (!developer || !isMounted) return;

      const mappedDeveloperData: DeveloperData = {
        name: developer.name,
        title: developer.title,
        bio: developer.bio,
        location: developer.location ?? '',
        email: developer.email ?? '',
        phone: developer.phone ?? '',
        availability: developer.availability ?? '',
        github: developer.github ?? '',
        linkedin: developer.linkedin ?? '',
        portfolio: developer.portfolio ?? '',
        stats: stats
          .filter((stat) => stat.developerId === developer.id)
          .map((stat) => ({ label: stat.label, value: stat.value })),
        experiences: experiences
          .filter((experience) => experience.developerId === developer.id)
          .map((experience) => ({
            id: Number(experience.id),
            role: experience.role,
            company: experience.company,
            period: experience.period,
            location: experience.location ?? '',
            type: experience.type,
            description: experience.description,
            achievements: experience.achievements.map((achievement) => achievement.content),
            skills: experience.skills.map((skill) => skill.name)
          })),
        skillCategories: skillCategories
          .filter((category) => category.developerId === developer.id)
          .map((category) => ({
            name: category.name,
            icon: (iconMap as Record<string, typeof Layers>)[category.icon ?? 'Layers'] ?? Layers,
            skills: category.skills.map((skill) => ({ name: skill.name, level: skill.level }))
          })),
        projects: projects
          .filter((project) => project.developerId === developer.id)
          .map((project) => ({
            id: Number(project.id),
            title: project.title,
            category: project.category,
            image: project.image ?? '',
            description: project.description,
            techs: project.technologies.map((technology) => technology.name),
            github: project.github ?? '',
            demo: project.demo ?? '',
            featured: project.featured
          })),
        education: education
          .filter((item) => item.developerId === developer.id)
          .map((item) => ({
            degree: item.degree,
            school: item.school,
            year: item.year,
            details: item.details
          })),
        certifications: certifications
          .filter((certification) => certification.developerId === developer.id)
          .map((certification) => ({
            name: certification.name,
            issuer: certification.issuer,
            date: certification.date
          })),
        testimonials: testimonials
          .filter((testimonial) => testimonial.developerId === developer.id)
          .map((testimonial) => ({
            quote: testimonial.quote,
            author: testimonial.author,
            title: testimonial.title
          }))
      };

      if (isMounted) {
        setDeveloperData(mappedDeveloperData);
      }
    };

    void loadDeveloperData();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (projectCategory === 'Tous') return developerData.projects;
    return developerData.projects.filter((project) => project.category === projectCategory);
  }, [developerData.projects, projectCategory]);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <HeroSection developerData={developerData} darkMode={darkMode} copiedField={copiedField} onCopy={copyToClipboard} />
      <StatsSection developerData={developerData} darkMode={darkMode} />
      <ExperienceSection developerData={developerData} darkMode={darkMode} expandedExp={expandedExp} onToggle={(id) => setExpandedExp((current) => (current === id ? null : id))} />
      <SkillsSection developerData={developerData} darkMode={darkMode} skillFilter={skillFilter} onSkillFilterChange={setSkillFilter} />
      <ProjectsSection developerData={developerData} darkMode={darkMode} projectCategory={projectCategory} onCategoryChange={setProjectCategory} filteredProjects={filteredProjects} />
      <EducationSection developerData={developerData} darkMode={darkMode} />
      <TestimonialsSection developerData={developerData} darkMode={darkMode} />
      <ContactSection
        developerData={developerData}
        darkMode={darkMode}
        copiedField={copiedField}
        submitted={submitted}
        contactForm={contactForm}
        onCopy={copyToClipboard}
        onFieldChange={(field, value) => setContactForm((current) => ({ ...current, [field]: value }))}
        onSubmit={handleContactSubmit}
      />
    </main>
  );
}
