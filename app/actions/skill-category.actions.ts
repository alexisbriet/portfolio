"use server";

import { prisma } from "@/lib/prisma";
import { createSkillCategorySchema } from "@/app/schemas/skill-category.schema";
import { revalidatePath } from "next/cache";


export async function getSkillCategories() {

    return prisma.skillCategory.findMany({
        include:{
            skills:true
        }
    });

}


export async function getSkillCategoryById(
    id:string
){

    return prisma.skillCategory.findUnique({
        where:{
            id
        },
        include:{
            skills:true
        }
    });

}



export async function createSkillCategory(
    values:unknown
){

    const data =
        createSkillCategorySchema.parse(values);


    const category =
        await prisma.skillCategory.create({
            data
        });


    revalidatePath("/");

    return category;

}



export async function updateSkillCategory(
    id:string,
    values:unknown
){

    const data =
        createSkillCategorySchema
        .partial()
        .parse(values);


    return prisma.skillCategory.update({
        where:{
            id
        },
        data
    });

}



export async function deleteSkillCategory(
    id:string
){

    await prisma.skillCategory.delete({
        where:{
            id
        }
    });


    revalidatePath("/");

}