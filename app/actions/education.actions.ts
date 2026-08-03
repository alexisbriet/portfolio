"use server";

import { prisma } from "@/lib/prisma";
import { createEducationSchema } from "@/app/schemas/education.schema";
import { revalidatePath } from "next/cache";


export async function getEducations() {

    return prisma.education.findMany({
        orderBy: {
            year: "desc",
        },
    });

}


export async function getEducationById(
    id: string
) {

    return prisma.education.findUnique({
        where: {
            id,
        },
    });

}


export async function createEducation(
    values: unknown
) {

    const data =
        createEducationSchema.parse(values);


    const education =
        await prisma.education.create({
            data,
        });


    revalidatePath("/");

    return education;
}



export async function updateEducation(
    id: string,
    values: unknown
) {

    const data =
        createEducationSchema
            .partial()
            .parse(values);


    const education =
        await prisma.education.update({
            where: {
                id,
            },
            data,
        });


    revalidatePath("/");

    return education;
}



export async function deleteEducation(
    id: string
) {

    await prisma.education.delete({
        where: {
            id,
        },
    });


    revalidatePath("/");

}