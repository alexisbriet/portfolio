"use server";

import { prisma } from "@/lib/prisma";
import { createAchievementSchema } from "@/app/schemas/achievement.schema";
import { revalidatePath } from "next/cache";


export async function getAchievements(){

    return prisma.achievement.findMany();

}


export async function getAchievementById(
    id:string
){

    return prisma.achievement.findUnique({
        where:{
            id
        }
    });

}



export async function createAchievement(
    values:unknown
){

    const data =
        createAchievementSchema.parse(values);


    return prisma.achievement.create({
        data
    });

}



export async function updateAchievement(
    id:string,
    values:unknown
){

    const data =
        createAchievementSchema
        .partial()
        .parse(values);


    return prisma.achievement.update({
        where:{
            id
        },
        data
    });

}



export async function deleteAchievement(
    id:string
){

    await prisma.achievement.delete({
        where:{
            id
        }
    });


    revalidatePath("/");

}