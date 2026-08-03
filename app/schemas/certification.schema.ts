import { FieldConfig } from "@/components/form-types";
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
        developerId: z
            .string()
            .min(2),
    });



export type CreateCertificationValues =
    z.infer<typeof createCertificationSchema>;

export const createCertificationFormFields:
    FieldConfig<CreateCertificationValues>[] = [
        {
            name: "name",
            label: "Nom",
            placeholder: "Certification",
            required: true
        },
        {
            name: "issuer",
            label: "Source",
            placeholder: "",
            required: true
        },
        {
            name: "date",
            label: "Date",
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

export const updateCertificationSchema =
    createCertificationSchema.partial();


export type UpdateCertificationValues =
    z.output<typeof updateCertificationSchema>;