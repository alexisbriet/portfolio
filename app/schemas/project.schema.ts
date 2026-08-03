import z from "zod";
import type { FieldConfig } from "@/components/form-types";


export const createProjectSchema = z.object({

    title: z
        .string()
        .min(3),

    category: z
        .string()
        .min(2),

    image: z
        .url()
        .optional(),

    description: z
        .string()
        .min(10),

    github: z
        .url()
        .optional(),

    demo: z
        .url()
        .optional(),

    featured: z
        .boolean()
        .default(false),

    developerId: z
        .string()
        .min(2),
});


export type CreateProjectValues =
    z.infer<typeof createProjectSchema>;



export const createProjectDefaultValues:
    CreateProjectValues = {
    title: "",
    category: "",
    image: "",
    description: "",
    github: "",
    demo: "",
    featured: false,
    developerId: ""
};



export const createProjectFormFields:
    FieldConfig<CreateProjectValues>[] = [

        {
            name: "title",
            label: "Titre",
            placeholder: "Mon projet SaaS",
            required: true,
        },

        {
            name: "category",
            label: "Catégorie",
            placeholder: "SaaS",
            required: true,
        },

        {
            name: "image",
            label: "Image",
            placeholder: "https://image.com",
        },

        {
            name: "description",
            label: "Description",
            placeholder: "Description du projet",
            required: true,
        },

        {
            name: "github",
            label: "Github",
            placeholder: "https://github.com",
        },

        {
            name: "demo",
            label: "Démo",
            placeholder: "https://demo.com",
        },

        {
            name: "developerId",
            label: "Developpeur",
            placeholder: "",
            required: true,
        },
    ];


export const updateProjectSchema =
    createProjectSchema.partial();


export type UpdateProjectFormValues =
    z.input<typeof updateProjectSchema>;

export type UpdateProjectValues =
    z.output<typeof updateProjectSchema>;