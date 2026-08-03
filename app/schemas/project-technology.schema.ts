import { FieldConfig } from "@/components/form-types";
import z from "zod";


export const createProjectTechnologySchema =
    z.object({
        name: z
            .string()
            .min(2),
        projectId: z
            .string()
            .min(2),
    });


export type CreateProjectTechnologyValues =
    z.infer<typeof createProjectTechnologySchema>;

export const createProjectTechnologyFormFields:
    FieldConfig<CreateProjectTechnologyValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "projectId",
            label: "Projet",
            placeholder: "",
            required: true
        },
    ]

export const updateProjectTechnologySchema =
    createProjectTechnologySchema.partial();


export type UpdateProjectTechnologyValues =
    z.output<typeof updateProjectTechnologySchema>;