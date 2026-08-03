"use server";

import { prisma } from "@/lib/prisma";
import { createProjectSchema, CreateProjectValues } from "@/app/schemas/project.schema";
import { revalidatePath } from "next/cache";


export async function getProjects() {

    return prisma.project.findMany({
        include: {
            technologies: true
        },
        orderBy: {
            title: "asc"
        }
    });

}



export async function getProjectById(
    id: string
) {

    return prisma.project.findUnique({
        where: {
            id
        },
        include: {
            technologies: true
        }
    });

}



export async function createProject(
    values: CreateProjectValues
) {

    const data =
        createProjectSchema.parse(values);


    const project =
        await prisma.project.create({
            data
        });


    revalidatePath("/");

    return project;
}



export async function updateProject(
    id: string,
    values: CreateProjectValues
) {

    const data =
        createProjectSchema
            .partial()
            .parse(values);


    return prisma.project.update({
        where: {
            id
        },
        data
    });

}



export async function deleteProject(
    id: string
) {

    await prisma.project.delete({
        where: {
            id
        }
    });


    revalidatePath("/");

}