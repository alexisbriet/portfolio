import z from "zod";


export const createCertificationSchema =
    z.object({

        name: z
            .string()
            .min(3),

        issuer: z
            .string()
            .min(2),

        date: z
            .string()
            .min(4),
    });



export type CreateCertificationValues =
    z.infer<typeof createCertificationSchema>;



export const updateCertificationSchema =
    createCertificationSchema.partial();


export type UpdateCertificationValues =
    z.output<typeof updateCertificationSchema>;