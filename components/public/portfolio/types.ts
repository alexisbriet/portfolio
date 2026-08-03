import type { LucideIcon } from 'lucide-react';

export type StatItem = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
};

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: SkillItem[];
};

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  techs: string[];
  github: string;
  demo: string;
  featured: boolean;
};

export type EducationItem = {
  degree: string;
  school: string;
  year: string;
  details: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  title: string;
};

export type PostItem = {
  id: number;
  slug: string;
  title: string;
  platform?: string | null;
  date?: string | null;
  readTime?: string | null;
  description?: string | null;
  content?: string | null;
  url?: string | null;
  tags: string[];

  published: boolean;
  createdAt: Date;
  updatedAt: Date;

  authorId: number;
};

export type DeveloperData = {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  github: string;
  linkedin: string;
  portfolio: string;
  stats: StatItem[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  testimonials: TestimonialItem[];
  posts: PostItem[];
};
