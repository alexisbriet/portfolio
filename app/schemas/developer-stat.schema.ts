import z from "zod";

export const createDeveloperStatSchema = z.object({
    label: z.string().min(2),
    value: z.string().min(1),
});

export type CreateDeveloperStatValues =
    z.infer<typeof createDeveloperStatSchema>;

export const updateDeveloperStatSchema =
    createDeveloperStatSchema.partial();

export type UpdateDeveloperStatValues =
    z.output<typeof updateDeveloperStatSchema>;