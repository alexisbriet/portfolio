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



export const updateEducationSchema =
    createEducationSchema.partial();


export type UpdateEducationValues =
    z.output<typeof updateEducationSchema>;