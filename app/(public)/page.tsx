"use client";

import { useMemo, useState } from 'react';

import { ContactSection } from '../../components/public/portfolio/ContactSection';
import { EducationSection } from '../../components/public/portfolio/EducationSection';
import { ExperienceSection } from '../../components/public/portfolio/ExperienceSection';
import { HeroSection } from '../../components/public/portfolio/HeroSection';
import { ProjectsSection } from '../../components/public/portfolio/ProjectsSection';
import { SkillsSection } from '../../components/public/portfolio/SkillsSection';
import { StatsSection } from '../../components/public/portfolio/StatsSection';
import { TestimonialsSection } from '../../components/public/portfolio/TestimonialsSection';
import { useTheme } from '@/components/public/layout/theme-context';
import { useDeveloperData } from '@/components/public/layout/developer-data-context';

export default function Home() {
  const [skillFilter, setSkillFilter] = useState('');
  const [expandedExp, setExpandedExp] = useState<number | null>(1);
  const [projectCategory, setProjectCategory] = useState('Tous');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { darkMode } = useTheme();
  const { developerData } = useDeveloperData();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
