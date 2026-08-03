import { FieldConfig } from "@/components/form-types";
import z from "zod";


export const createEducationSchema =
    z.object({

        degree: z
            .string()
            .min(3),

        school: z
            .string()
            .min(3),

        year: z
            .string()
            .min(4),

        details: z
            .string()
            .min(5),
        developerId: z
            .string()
            .min(5),
    });



export type CreateEducationValues =
    z.infer<typeof createEducationSchema>;

export const createEducationFormFields:
    FieldConfig<CreateEducationValues>[] = [
        {
            name: "degree",
            label: "Nom",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "school",
            label: "Ecole",
            placeholder: "",
            required: true
        },
        {
            name: "year",
            label: "Année",
            placeholder: "",
            required: true
        },
        {
            name: "details",
            label: "Details",
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

export const updateEducationSchema =
    createEducationSchema.partial();


export type UpdateEducationValues =
    z.output<typeof updateEducationSchema>;