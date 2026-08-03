import z from "zod";
import type { FieldConfig } from "@/components/form-types";


export const createExperienceSchema = z.object({
    role: z
        .string()
        .min(3, "Le poste est obligatoire"),

    company: z
        .string()
        .min(2, "L'entreprise est obligatoire"),

    period: z
        .string()
        .min(2, "La période est obligatoire"),

    location: z
        .string()
        .optional(),

    type: z
        .string()
        .min(2, "Le type de contrat est obligatoire"),

    description: z
        .string()
        .min(10, "La description est trop courte"),
});


export type CreateExperienceValues =
    z.infer<typeof createExperienceSchema>;


export const createExperienceDefaultValues:
    CreateExperienceValues = {
    role: "",
    company: "",
    period: "",
    location: "",
    type: "",
    description: "",
};


export const createExperienceFormFields:
    FieldConfig<CreateExperienceValues>[] = [
    {
        name: "role",
        label: "Poste",
        placeholder: "Lead Développeur Full Stack",
        required: true,
    },
    {
        name: "company",
        label: "Entreprise",
        placeholder: "TechScale Solutions",
        required: true,
    },
    {
        name: "period",
        label: "Période",
        placeholder: "2022 - Présent",
        required: true,
    },
    {
        name: "location",
        label: "Localisation",
        placeholder: "Paris",
    },
    {
        name: "type",
        label: "Contrat",
        placeholder: "CDI",
        required: true,
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Description de l'expérience",
        required: true,
    },
];


export const updateExperienceSchema =
    createExperienceSchema.partial();


export type UpdateExperienceFormValues =
    z.input<typeof updateExperienceSchema>;

export type UpdateExperienceValues =
    z.output<typeof updateExperienceSchema>;