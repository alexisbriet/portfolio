"use server";

import { prisma } from "@/lib/prisma";
import { createExperienceSkillSchema } from "@/app/schemas/experience-skill.schema";
import { revalidatePath } from "next/cache";


export async function getExperienceSkills(){

    return prisma.experienceSkill.findMany();

}



export async function createExperienceSkill(
    values:unknown
){

    const data =
        createExperienceSkillSchema.parse(values);


    return prisma.experienceSkill.create({
        data
    });

}



export async function updateExperienceSkill(
    id:string,
    values:unknown
){

    const data =
        createExperienceSkillSchema
        .partial()
        .parse(values);


    return prisma.experienceSkill.update({
        where:{
            id
        },
        data
    });

}



export async function deleteExperienceSkill(
    id:string
){

    await prisma.experienceSkill.delete({
        where:{
            id
        }
    });


    revalidatePath("/");

}