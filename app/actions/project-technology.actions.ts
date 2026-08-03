"use server";

import { prisma } from "@/lib/prisma";
import { createProjectTechnologySchema } from "@/app/schemas/project-technology.schema";
import { revalidatePath } from "next/cache";


export async function getProjectTechnologies(){

    return prisma.projectTechnology.findMany();

}



export async function createProjectTechnology(
    values:unknown
){

    const data =
        createProjectTechnologySchema.parse(values);


    const technology =
        await prisma.projectTechnology.create({
            data
        });


    revalidatePath("/");

    return technology;

}



export async function updateProjectTechnology(
    id:string,
    values:unknown
){

    const data =
        createProjectTechnologySchema
        .partial()
        .parse(values);


    const technology =
        await prisma.projectTechnology.update({
            where:{
                id
            },
            data
        });


    revalidatePath("/");

    return technology;

}



export async function deleteProjectTechnology(
    id:string
){

    await prisma.projectTechnology.delete({
        where:{
            id
        }
    });


    revalidatePath("/");

}