import z from "zod";

export const createSkillSchema = z.object({
    name: z.string().min(2),

    level: z
        .number()
        .min(0)
        .max(100),
});


export type CreateSkillValues =
    z.infer<typeof createSkillSchema>;


export const updateSkillSchema =
    createSkillSchema.partial();


export type UpdateSkillValues =
    z.output<typeof updateSkillSchema>;