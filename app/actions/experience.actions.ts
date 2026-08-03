"use server";

import { prisma } from "@/lib/prisma";
import { createExperienceSchema } from "@/app/schemas/experience.schema";
import { revalidatePath } from "next/cache";


export async function getExperiences() {

    return prisma.experience.findMany({
        include: {
            achievements: true,
            skills: true
        }
    });

}



export async function getExperienceById(
    id: string
) {

    return prisma.experience.findUnique({
        where: {
            id
        },
        include: {
            achievements: true,
            skills: true
        }
    });

}



export async function createExperience(
    values: unknown
) {

    const data =
        createExperienceSchema.parse(values);


    return prisma.experience.create({
        data
    });

}



export async function updateExperience(
    id: string,
    values: unknown
) {

    const data =
        createExperienceSchema
            .partial()
            .parse(values);


    return prisma.experience.update({
        where: {
            id
        },
        data
    });

}



export async function deleteExperience(
    id: string
) {

    await prisma.experience.delete({
        where: {
            id
        }
    });

    revalidatePath("/");

}