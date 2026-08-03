import { createAchievement, deleteAchievement, getAchievements, updateAchievement } from "@/app/actions/achievement.actions";
import { createCertification, deleteCertification, getCertifications, updateCertification } from "@/app/actions/certification.actions";
import { createDeveloper, deleteDeveloper, getDevelopers, updateDeveloper } from "@/app/actions/developer.actions";
import { createDeveloperStat, deleteDeveloperStat, getDeveloperStats, updateDeveloperStat } from "@/app/actions/developer-stat.actions";
import { createEducation, deleteEducation, getEducations, updateEducation } from "@/app/actions/education.actions";
import { createExperience, deleteExperience, getExperiences, updateExperience } from "@/app/actions/experience.actions";
import { createExperienceSkill, deleteExperienceSkill, getExperienceSkills, updateExperienceSkill } from "@/app/actions/experience-skill.actions";
import { createProject, deleteProject, getProjects, updateProject } from "@/app/actions/project.actions";
import { createProjectTechnology, deleteProjectTechnology, getProjectTechnologies, updateProjectTechnology } from "@/app/actions/project-technology.actions";
import { createSkillCategory, deleteSkillCategory, getSkillCategories, updateSkillCategory } from "@/app/actions/skill-category.actions";
import { createSkill, deleteSkill, getSkills, updateSkill } from "@/app/actions/skill.actions";
import { createTestimonial, deleteTestimonial, getTestimonials, updateTestimonial } from "@/app/actions/testimonial.actions";
import { createUser, deleteUser, getUsers, updateUser } from "@/app/actions/user.actions";
import { createPost, deletePost, getPosts, updatePost } from "@/app/actions/post.actions";

export const modelActions = {
  user: {
    getList: getUsers,
    create: createUser,
    update: updateUser,
    delete: deleteUser,
  },
  post: {
    getList: getPosts,
    create: createPost,
    update: updatePost,
    delete: deletePost,
  },
  developer: {
    getList: getDevelopers,
    create: createDeveloper,
    update: updateDeveloper,
    delete: deleteDeveloper,
  },
  developerstat: {
    getList: getDeveloperStats,
    create: createDeveloperStat,
    update: updateDeveloperStat,
    delete: deleteDeveloperStat,
  },
  experience: {
    getList: getExperiences,
    create: createExperience,
    update: updateExperience,
    delete: deleteExperience,
  },
  achievement: {
    getList: getAchievements,
    create: createAchievement,
    update: updateAchievement,
    delete: deleteAchievement,
  },
  experienceskill: {
    getList: getExperienceSkills,
    create: createExperienceSkill,
    update: updateExperienceSkill,
    delete: deleteExperienceSkill,
  },
  skillcategory: {
    getList: getSkillCategories,
    create: createSkillCategory,
    update: updateSkillCategory,
    delete: deleteSkillCategory,
  },
  skill: {
    getList: getSkills,
    create: createSkill,
    update: updateSkill,
    delete: deleteSkill,
  },
  project: {
    getList: getProjects,
    create: createProject,
    update: updateProject,
    delete: deleteProject,
  },
  projecttechnology: {
    getList: getProjectTechnologies,
    create: createProjectTechnology,
    update: updateProjectTechnology,
    delete: deleteProjectTechnology,
  },
  education: {
    getList: getEducations,
    create: createEducation,
    update: updateEducation,
    delete: deleteEducation,
  },
  certification: {
    getList: getCertifications,
    create: createCertification,
    update: updateCertification,
    delete: deleteCertification,
  },
  testimonial: {
    getList: getTestimonials,
    create: createTestimonial,
    update: updateTestimonial,
    delete: deleteTestimonial,
  },
} as const;

export type ModelKey = keyof typeof modelActions;

export function normalizeModel(value: string): ModelKey | null {
  const normalized = value.replace(/[-_]/g, "").toLowerCase();
  return normalized in modelActions ? (normalized as ModelKey) : null;
}
