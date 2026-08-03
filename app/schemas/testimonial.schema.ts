import { FieldConfig } from "@/components/form-types";
import z from "zod";


export const createTestimonialSchema =
    z.object({

        quote: z
            .string()
            .min(10),

        author: z
            .string()
            .min(3),

        title: z
            .string()
            .min(3),

        developerId: z
            .string()
            .min(3),
    });



export type CreateTestimonialValues =
    z.infer<typeof createTestimonialSchema>;

export const createTestimonialFormFields:
    FieldConfig<CreateTestimonialValues>[] = [
        {
            name: "quote",
            label: "Citation",
            placeholder: "Contenu",
            required: true
        },
        {
            name: "author",
            label: "Auteur",
            placeholder: "",
            required: true
        },
        {
            name: "title",
            label: "Titre",
            placeholder: "",
            required: true
        },
        {
            name: "developerId",
            label: "Développeur",
            placeholder: "",
            required: true
        },
    ]

export const updateTestimonialSchema =
    createTestimonialSchema.partial();


export type UpdateTestimonialValues =
    z.output<typeof updateTestimonialSchema>;