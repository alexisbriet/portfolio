import { FieldConfig } from "@/components/form-types";
import z from "zod";

export const createAchievementSchema = z.object({
    content: z.string().min(5),
    experienceId: z.string().min(5),
});

export type CreateAchievementValues =
    z.infer<typeof createAchievementSchema>;

export const createAchievementFormFields:
    FieldConfig<CreateAchievementValues>[] = [
        {
            name: "content",
            label: "Contenu",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "experienceId",
            label: "Experience",
            type: "select",
            required: true,
        },
    ]

export const updateAchievementSchema =
    createAchievementSchema.partial();

export type UpdateAchievementValues =
    z.output<typeof updateAchievementSchema>;