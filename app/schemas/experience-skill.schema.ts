import { FieldConfig } from "@/components/form-types";
import z from "zod";

export const createExperienceSkillSchema = z.object({
    name: z.string().min(2),
    experienceId: z.string().min(2),
});

export type CreateExperienceSkillValues =
    z.infer<typeof createExperienceSkillSchema>;

export const createExperienceSkillFormFields:
    FieldConfig<CreateExperienceSkillValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "experienceId",
            label: "Expérience",
            placeholder: "",
            required: true
        },
    ]

export const updateExperienceSkillSchema =
    createExperienceSkillSchema.partial();

export type UpdateExperienceSkillValues =
    z.output<typeof updateExperienceSkillSchema>;