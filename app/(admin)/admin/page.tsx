import { modelActions, normalizeModel, type ModelKey } from "@/app/api/admin/model-actions";
import AdminPageContent from "@/components/admin/AdminPageContent";

const MODEL_MAP = {
  user: "User",
  post: "Post",
  developer: "Developer",
  developerstat: "DeveloperStat",
  developerstats: "DeveloperStat",
  experience: "Experience",
  achievement: "Achievement",
  experienceskill: "ExperienceSkill",
  experience_skill: "ExperienceSkill",
  skillcategory: "SkillCategory",
  skill_category: "SkillCategory",
  skill: "Skill",
  project: "Project",
  projecttechnology: "ProjectTechnology",
  project_technology: "ProjectTechnology",
  education: "Education",
  certification: "Certification",
  testimonial: "Testimonial",
} as const;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{
    model?: string;
  }>;
}) {
  const params = await searchParams;
  const requestedModel = params.model ? normalizeModel(params.model) : "user";
  const modelKey = (requestedModel ?? "user") as ModelKey;
  const activeModel = MODEL_MAP[modelKey] ?? "User";
  const actions = modelActions[modelKey];

  const initialDbEntries = await Promise.all(
    (Object.keys(modelActions) as ModelKey[]).map(async (key) => {
      const modelName = MODEL_MAP[key] ?? "User";
      const list = await modelActions[key].getList();
      return [modelName, list] as const;
    })
  );

  const initialDb = Object.fromEntries(initialDbEntries) as unknown as Record<string, any[]>;

  return (
    <>
      <AdminPageContent
        initialActiveModel={activeModel}
        initialDb={initialDb}
        createAction={actions.create}
        updateAction={actions.update}
        deleteAction={actions.delete}
      />
    </>
  );
}