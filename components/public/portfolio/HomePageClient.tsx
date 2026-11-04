"use client";

import { useMemo, useState } from "react";

import { ContactSection } from "./ContactSection";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { useTheme } from "@/components/public/layout/theme-context";
import { useDeveloperData } from "@/components/public/layout/developer-data-context";
import ArticlesSection from "./ArticlesSection";
import { sendContactMessage } from "@/app/actions/contact.actions";

export default function HomePageClient() {
  const [skillFilter, setSkillFilter] = useState("");
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [projectCategory, setProjectCategory] = useState("Tous");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { darkMode } = useTheme();
  const { developerData } = useDeveloperData();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const filteredProjects = useMemo(() => {
    if (projectCategory === "Tous") return developerData.projects;
    return developerData.projects.filter((project) => project.category === projectCategory);
  }, [developerData.projects, projectCategory]);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (contactForm.name && contactForm.email && contactForm.message) {
      const result = await sendContactMessage(contactForm);

      if (result.success) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
          setContactForm({ name: "", email: "", message: "" });
        }, 4000);
      }
    }
  };

  return (
    <main className="mx-auto max-w-6xl space-y-20 px-4 py-10 sm:space-y-24 sm:px-6 sm:py-14 lg:px-8">
      <HeroSection developerData={developerData} darkMode={darkMode} copiedField={copiedField} onCopy={copyToClipboard} />
      <StatsSection developerData={developerData} darkMode={darkMode} />
      <ExperienceSection developerData={developerData} darkMode={darkMode} expandedExp={expandedExp} onToggle={(id) => setExpandedExp((current) => (current === id ? null : id))} />
      <SkillsSection developerData={developerData} darkMode={darkMode} skillFilter={skillFilter} onSkillFilterChange={setSkillFilter} />
      <ProjectsSection developerData={developerData} darkMode={darkMode} projectCategory={projectCategory} onCategoryChange={setProjectCategory} filteredProjects={filteredProjects} />
      <ArticlesSection developerData={developerData} darkMode={darkMode} filteredArticles={developerData.posts} />
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
