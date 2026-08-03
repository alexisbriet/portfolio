import z from "zod";


export const createProjectTechnologySchema =
    z.object({
        name: z
            .string()
            .min(2),
    });


export type CreateProjectTechnologyValues =
    z.infer<typeof createProjectTechnologySchema>;



export const updateProjectTechnologySchema =
    createProjectTechnologySchema.partial();


export type UpdateProjectTechnologyValues =
    z.output<typeof updateProjectTechnologySchema>;