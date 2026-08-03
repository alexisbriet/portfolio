import z from "zod";

export const createAchievementSchema = z.object({
    content: z.string().min(5),
    experienceId: z.string().min(5),
});

export type CreateAchievementValues =
    z.infer<typeof createAchievementSchema>;

export const updateAchievementSchema =
    createAchievementSchema.partial();

export type UpdateAchievementValues =
    z.output<typeof updateAchievementSchema>;