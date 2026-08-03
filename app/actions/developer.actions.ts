"use server";

import { prisma } from "@/lib/prisma";
import {
    createDeveloperSchema,
    CreateDeveloperValues
} from "@/app/schemas/developer.schema";

import { revalidatePath } from "next/cache";


export async function getDevelopers() {
    return prisma.developer.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
}


export async function getDeveloperById(id: string) {

    return prisma.developer.findUnique({
        where: {
            id
        }
    });

}


export async function createDeveloper(
    values: CreateDeveloperValues
) {

    const data =
        createDeveloperSchema.parse(values);


    const developer =
        await prisma.developer.create({
            data
        });


    revalidatePath("/");

    return developer;
}



export async function updateDeveloper(
    id: string,
    values: CreateDeveloperValues
) {

    const data =
        createDeveloperSchema
            .partial()
            .parse(values);


    const developer =
        await prisma.developer.update({

            where: {
                id
            },

            data
        });


    revalidatePath("/");

    return developer;
}



export async function deleteDeveloper(
    id: string
) {

    await prisma.developer.delete({
        where: {
            id
        }
    });


    revalidatePath("/");

    return true;
}