import { cache } from "react";

import { getCertifications } from "@/app/actions/certification.actions";
import { getDeveloperStats } from "@/app/actions/developer-stat.actions";
import { getDevelopers } from "@/app/actions/developer.actions";
import { getEducations } from "@/app/actions/education.actions";
import { getExperiences } from "@/app/actions/experience.actions";
import { getPosts } from "@/app/actions/post.actions";
import { getProjects } from "@/app/actions/project.actions";
import { getSkillCategories } from "@/app/actions/skill-category.actions";
import { getTestimonials } from "@/app/actions/testimonial.actions";
import type { SerializableDeveloperData, SkillIconName } from "@/components/public/portfolio/types";

const getDeveloper = cache(async () => {
  const [developer] = await getDevelopers();
  return developer ?? null;
});

export const getPublicDeveloper = cache(async () => {
  const developer = await getDeveloper();
  if (!developer) return null;

  return {
    name: developer.name,
    github: developer.github ?? "",
    linkedin: developer.linkedin ?? "",
  };
});

const emptyDeveloperData: SerializableDeveloperData = {
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
  testimonials: [],
  posts: [],
};

function getSkillIcon(icon: string | null): SkillIconName {
  switch (icon) {
    case "Terminal":
    case "Database":
    case "Cpu":
      return icon;
    default:
      return "Layers";
  }
}

export async function getPortfolioData(): Promise<SerializableDeveloperData> {
  const [developer, stats, experiences, skillCategories, projects, education, certifications, testimonials, posts] =
    await Promise.all([
      getDeveloper(),
      getDeveloperStats(),
      getExperiences(),
      getSkillCategories(),
      getProjects(),
      getEducations(),
      getCertifications(),
      getTestimonials(),
      getPosts(),
    ]);

  if (!developer) return emptyDeveloperData;

  return {
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
        id: experience.id,
        role: experience.role,
        company: experience.company,
        period: experience.period,
        location: experience.location ?? "",
        type: experience.type,
        description: experience.description,
        achievements: experience.achievements.map((achievement) => achievement.content),
        skills: experience.skills.map((skill) => skill.name),
      })),
    skillCategories: skillCategories
      .filter((category) => category.developerId === developer.id)
      .map((category) => ({
        name: category.name,
        icon: getSkillIcon(category.icon),
        skills: category.skills.map((skill) => ({ name: skill.name, level: skill.level })),
      })),
    projects: projects
      .filter((project) => project.developerId === developer.id)
      .map((project) => ({
        id: project.id,
        title: project.title,
        slug: project.slug,
        category: project.category,
        image: project.image ?? "",
        description: project.description,
        content: project.content,
        techs: project.technologies.map((technology) => technology.name),
        github: project.github ?? "",
        demo: project.demo ?? "",
        featured: project.featured,
      })),
    education: education
      .filter((item) => item.developerId === developer.id)
      .map((item) => ({
        degree: item.degree,
        school: item.school,
        year: item.year,
        details: item.details,
      })),
    certifications: certifications
      .filter((certification) => certification.developerId === developer.id)
      .map((certification) => ({
        name: certification.name,
        issuer: certification.issuer,
        date: certification.date,
      })),
    testimonials: testimonials
      .filter((testimonial) => testimonial.developerId === developer.id)
      .map((testimonial) => ({
        quote: testimonial.quote,
        author: testimonial.author,
        title: testimonial.title,
      })),
    posts: posts.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      platform: post.platform,
      date: post.date,
      readTime: post.readTime,
      description: post.description,
      content: post.content,
      url: post.url,
      tags: post.tags ?? [],
      published: post.published,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      authorId: post.authorId,
    })),
  };
}
