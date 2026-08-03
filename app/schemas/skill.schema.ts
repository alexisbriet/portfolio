import { FieldConfig } from "@/components/form-types";
import z from "zod";

export const createSkillSchema = z.object({
    name: z.string().min(2),

    level: z
        .number()
        .min(0)
        .max(100),

    categoryId: z.string().min(2),
});


export type CreateSkillValues =
    z.infer<typeof createSkillSchema>;

export const createSkillFormFields:
    FieldConfig<CreateSkillValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "level",
            label: "Niveau",
            placeholder: "",
            required: true
        },
        {
            name: "categoryId",
            label: "Catégorie",
            placeholder: "",
            required: true
        },
    ]

export const updateSkillSchema =
    createSkillSchema.partial();


export type UpdateSkillValues =
    z.output<typeof updateSkillSchema>;