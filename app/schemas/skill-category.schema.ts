import { FieldConfig } from "@/components/form-types";
import z from "zod";

export const createSkillCategorySchema = z.object({
    name: z.string().min(2),

    icon: z.string().optional(),

    developerId: z.string().min(2),
});


export type CreateSkillCategoryValues =
    z.infer<typeof createSkillCategorySchema>;

export const createSkillCategoryFormFields:
    FieldConfig<CreateSkillCategoryValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "icon",
            label: "Icon",
            placeholder: "",
            required: true
        },
        {
            name: "developerId",
            label: "Developpeur",
            placeholder: "",
            required: true
        },
    ]

export const updateSkillCategorySchema =
    createSkillCategorySchema.partial();


export type UpdateSkillCategoryValues =
    z.output<typeof updateSkillCategorySchema>;