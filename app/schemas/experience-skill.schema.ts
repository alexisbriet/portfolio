import z from "zod";

export const createExperienceSkillSchema = z.object({
    name: z.string().min(2),
    experienceId: z.string().min(2),
});

export type CreateExperienceSkillValues =
    z.infer<typeof createExperienceSkillSchema>;

export const updateExperienceSkillSchema =
    createExperienceSkillSchema.partial();

export type UpdateExperienceSkillValues =
    z.output<typeof updateExperienceSkillSchema>;