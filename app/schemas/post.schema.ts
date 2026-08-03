import z from "zod";
import type { FieldConfig } from "@/components/form-types";

export const createPostSchema = z.object({
    title: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères"),
    content: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères"),
    published: z
        .boolean(),
    authorId: z
        .number()
});


export type CreatePostValues =
    z.infer<typeof createPostSchema>;

export const createPostDefaultValues: CreatePostValues = {
    title: "",
    content: "",
    published: false,
    authorId: 0,
};

export const createPostFormFields: FieldConfig<CreatePostValues>[] = [
    {
        name: "title",
        label: "Titre",
        placeholder: "John Doe",
        required: true
    },
    {
        name: "email",
        label: "Email",
        placeholder: "johndoe@email.com",
        required: true
    }
];

export const updatePostSchema = z.object({
    name: z.string(),
    email: z.email()
})

export type UpdatePostFormValues =
    z.input<typeof updatePostSchema>;

export type UpdatePostValues =
    z.output<typeof updatePostSchema>;