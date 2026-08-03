import z from "zod";
import type { FieldConfig } from "@/components/form-types";


/**
 * Developer
 */

export const createDeveloperSchema = z.object({
    name: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères"),

    title: z
        .string()
        .min(3, "Le titre est obligatoire"),

    bio: z
        .string()
        .min(20, "La description doit contenir au moins 20 caractères"),

    location: z
        .string()
        .optional(),

    email: z
        .email()
        .optional(),

    phone: z
        .string()
        .optional(),

    availability: z
        .string()
        .optional(),

    github: z
        .url()
        .optional(),

    linkedin: z
        .url()
        .optional(),

    portfolio: z
        .url()
        .optional(),
});


export type CreateDeveloperValues =
    z.infer<typeof createDeveloperSchema>;


export const createDeveloperDefaultValues:
    CreateDeveloperValues = {
    name: "",
    title: "",
    bio: "",
    location: "",
    email: "",
    phone: "",
    availability: "",
    github: "",
    linkedin: "",
    portfolio: "",
};


export const createDeveloperFormFields:
    FieldConfig<CreateDeveloperValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Lucas Bernard",
            required: true,
        },
        {
            name: "title",
            label: "Titre",
            placeholder: "Développeur Full Stack Senior",
            required: true,
        },
        {
            name: "bio",
            label: "Biographie",
            placeholder: "Présentation du développeur",
            required: true,
        },
        {
            name: "location",
            label: "Localisation",
            placeholder: "Paris, France",
        },
        {
            name: "email",
            label: "Email",
            placeholder: "contact@email.com",
        },
        {
            name: "phone",
            label: "Téléphone",
            placeholder: "+33 6...",
        },
        {
            name: "availability",
            label: "Disponibilité",
            placeholder: "Disponible immédiatement",
        },
        {
            name: "github",
            label: "Github",
            placeholder: "https://github.com",
        },
        {
            name: "linkedin",
            label: "Linkedin",
            placeholder: "https://linkedin.com",
        },
        {
            name: "portfolio",
            label: "Portfolio",
            placeholder: "https://monsite.com",
        },
    ];


export const updateDeveloperSchema =
    createDeveloperSchema.partial();


export type UpdateDeveloperFormValues =
    z.input<typeof updateDeveloperSchema>;


export type UpdateDeveloperValues =
    z.output<typeof updateDeveloperSchema>;