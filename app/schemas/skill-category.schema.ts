import z from "zod";

export const createSkillCategorySchema = z.object({
    name: z.string().min(2),

    icon: z.string().optional(),
});


export type CreateSkillCategoryValues =
    z.infer<typeof createSkillCategorySchema>;


export const updateSkillCategorySchema =
    createSkillCategorySchema.partial();


export type UpdateSkillCategoryValues =
    z.output<typeof updateSkillCategorySchema>;