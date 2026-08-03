"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Cpu, Database, Layers, Terminal } from "lucide-react";

import { getCertifications } from "@/app/actions/certification.actions";
import { getDeveloperStats } from "@/app/actions/developer-stat.actions";
import { getDevelopers } from "@/app/actions/developer.actions";
import { getEducations } from "@/app/actions/education.actions";
import { getExperiences } from "@/app/actions/experience.actions";
import { getProjects } from "@/app/actions/project.actions";
import { getSkillCategories } from "@/app/actions/skill-category.actions";
import { getTestimonials } from "@/app/actions/testimonial.actions";
import type { DeveloperData } from "@/components/public/portfolio/types";

const emptyDeveloperData: DeveloperData = {
  name: "",
  title: "",
  bio: "",
  location: "",
  email: "",
  phone: "",
  availability: "",
  github: "",
  linkedin: "",
  portfolio: "",
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

type DeveloperDataContextValue = {
  developerData: DeveloperData;
  isLoading: boolean;
};

const DeveloperDataContext = createContext<DeveloperDataContextValue | undefined>(undefined);

export function DeveloperDataProvider({ children }: { children: ReactNode }) {
  const [developerData, setDeveloperData] = useState<DeveloperData>(emptyDeveloperData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadDeveloperData = async () => {
      setIsLoading(true);

      try {
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
          location: developer.location ?? "",
          email: developer.email ?? "",
          phone: developer.phone ?? "",
          availability: developer.availability ?? "",
          github: developer.github ?? "",
          linkedin: developer.linkedin ?? "",
          portfolio: developer.portfolio ?? "",
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
              location: experience.location ?? "",
              type: experience.type,
              description: experience.description,
              achievements: experience.achievements.map((achievement) => achievement.content),
              skills: experience.skills.map((skill) => skill.name)
            })),
          skillCategories: skillCategories
            .filter((category) => category.developerId === developer.id)
            .map((category) => ({
              name: category.name,
              icon: (iconMap as Record<string, typeof Layers>)[category.icon ?? "Layers"] ?? Layers,
              skills: category.skills.map((skill) => ({ name: skill.name, level: skill.level }))
            })),
          projects: projects
            .filter((project) => project.developerId === developer.id)
            .map((project) => ({
              id: Number(project.id),
              title: project.title,
              category: project.category,
              image: project.image ?? "",
              description: project.description,
              techs: project.technologies.map((technology) => technology.name),
              github: project.github ?? "",
              demo: project.demo ?? "",
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
      } catch (error) {
        console.error("Failed to load developer data", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    void loadDeveloperData();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({ developerData, isLoading }),
    [developerData, isLoading]
  );

  return <DeveloperDataContext.Provider value={value}>{children}</DeveloperDataContext.Provider>;
}

export function useDeveloperData() {
  const context = useContext(DeveloperDataContext);

  if (!context) {
    throw new Error("useDeveloperData must be used within a DeveloperDataProvider");
  }

  return context;
}
