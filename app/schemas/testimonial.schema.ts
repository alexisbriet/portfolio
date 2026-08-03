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
    });



export type CreateTestimonialValues =
    z.infer<typeof createTestimonialSchema>;



export const updateTestimonialSchema =
    createTestimonialSchema.partial();


export type UpdateTestimonialValues =
    z.output<typeof updateTestimonialSchema>;