import z from "zod";
import type { FieldConfig } from "@/components/form-types";

export const createPostSchema = z.object({
    slug: z
        .string()
        .min(3, "Le slug doit contenir au moins 3 caractères"),

    title: z
        .string()
        .min(3, "Le titre doit contenir au moins 3 caractères"),

    platform: z
        .string()
        .optional(),

    date: z
        .string()
        .optional(),

    readTime: z
        .string()
        .optional(),

    description: z
        .string()
        .optional(),

    content: z
        .string()
        .optional(),

    url: z
        .string()
        .url("L'URL est invalide")
        .optional()
        .or(z.literal("")),

    tags: z.string(),

    published: z
        .boolean()
        .default(false),

    authorId: z
        .number()
});


export type CreatePostValues =
    z.infer<typeof createPostSchema>;


export const createPostDefaultValues: CreatePostValues = {
    slug: "",
    title: "",
    platform: "",
    date: "",
    readTime: "",
    description: "",
    content: "",
    url: "",
    tags: "",
    published: false,
    authorId: 0,
};


export const createPostFormFields: FieldConfig<CreatePostValues>[] = [
    {
        name: "slug",
        label: "Slug",
        placeholder: "optimiser-react-nextjs",
        required: true
    },
    {
        name: "title",
        label: "Titre",
        placeholder: "Optimiser les performances d'une application React",
        required: true
    },
    {
        name: "platform",
        label: "Plateforme",
        placeholder: "Dev.to"
    },
    {
        name: "date",
        label: "Date",
        placeholder: "Janvier 2024"
    },
    {
        name: "readTime",
        label: "Temps de lecture",
        placeholder: "7 min"
    },
    {
        name: "description",
        label: "Description",
        placeholder: "Description de l'article"
    },
    {
        name: "content",
        label: "Contenu",
        placeholder: "Contenu complet de l'article"
    },
    {
        name: "url",
        label: "URL",
        placeholder: "https://dev.to/article"
    },
    {
        name: "tags",
        label: "Tags",
        placeholder: "React, Next.js, Performance"
    },
    {
        name: "published",
        label: "Publié"
    },
    {
        name: "authorId",
        label: "Auteur",
        required: true
    }
];


export const updatePostSchema = z.object({
    slug: z.string().min(3),
    title: z.string().min(3),

    platform: z.string().optional(),
    date: z.string().optional(),
    readTime: z.string().optional(),

    description: z.string().optional(),
    content: z.string().optional(),

    url: z
        .string()
        .url()
        .optional()
        .or(z.literal("")),

    tags: z.string(),

    published: z.boolean(),

    authorId: z.number()
});


export type UpdatePostFormValues =
    z.input<typeof updatePostSchema>;

export type UpdatePostValues =
    z.output<typeof updatePostSchema>;