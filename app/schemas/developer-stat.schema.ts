import { FieldConfig } from "@/components/form-types";
import z from "zod";

export const createDeveloperStatSchema = z.object({
    label: z.string().min(2),
    value: z.string().min(1),
    developerId: z.string().min(1),
});

export type CreateDeveloperStatValues =
    z.infer<typeof createDeveloperStatSchema>;

export const createDeveloperStatFormFields:
    FieldConfig<CreateDeveloperStatValues>[] = [
        {
            name: "label",
            label: "Nom",
            placeholder: "",
            required: true
        },
        {
            name: "value",
            label: "Valeur",
            placeholder: "",
            required: true
        },
        {
            name: "developerId",
            label: "Developpeur",
            placeholder: "",
            required: true
        },
    ]

export const updateDeveloperStatSchema =
    createDeveloperStatSchema.partial();

export type UpdateDeveloperStatValues =
    z.output<typeof updateDeveloperStatSchema>;