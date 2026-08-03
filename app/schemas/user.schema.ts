import z from "zod";
import type { FieldConfig } from "@/components/form-types";

export const createUserSchema = z.object({
    name: z
        .string()
        .min(3, "Le nom doit contenir au moins 3 caractères"),
    email: z
        .email("Email obligatoire")
});


export type CreateUserValues =
    z.infer<typeof createUserSchema>;

export const createUserDefaultValues: CreateUserValues = {
    name: "",
    email: ""
};

export const createUserFormFields: FieldConfig<CreateUserValues>[] = [
    {
        name: "name",
        label: "Nom",
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

export const updateUserSchema = z.object({
    name: z.string(),
    email: z.email()
})

export type UpdateUserFormValues =
    z.input<typeof updateUserSchema>;

export type UpdateUserValues =
    z.output<typeof updateUserSchema>;