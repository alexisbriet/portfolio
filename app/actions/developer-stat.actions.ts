"use server";

import { prisma } from "@/lib/prisma";
import { createDeveloperStatSchema, CreateDeveloperStatValues } from "@/app/schemas/developer-stat.schema";
import { revalidatePath } from "next/cache";


export async function getDeveloperStats() {

    return prisma.developerStat.findMany();

}



export async function getDeveloperStatById(
    id: string
) {

    return prisma.developerStat.findUnique({
        where: {
            id
        }
    });

}



export async function createDeveloperStat(
    values: CreateDeveloperStatValues
) {

    const data =
        createDeveloperStatSchema.parse(values);


    const stat =
        await prisma.developerStat.create({
            data
        });


    revalidatePath("/");

    return stat;

}



export async function updateDeveloperStat(
    id: string,
    values: CreateDeveloperStatValues
) {

    const data =
        createDeveloperStatSchema
            .partial()
            .parse(values);


    return prisma.developerStat.update({
        where: {
            id
        },
        data
    });

}



export async function deleteDeveloperStat(
    id: string
) {

    await prisma.developerStat.delete({
        where: {
            id
        }
    });


    revalidatePath("/");

}