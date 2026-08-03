"use server";

import { prisma } from "@/lib/prisma";
import { createSkillSchema, CreateSkillValues } from "@/app/schemas/skill.schema";
import { revalidatePath } from "next/cache";


export async function getSkills() {
    return prisma.skill.findMany({
        orderBy: {
            level: "desc",
        },
    });
}


export async function getSkillById(id: string) {
    return prisma.skill.findUnique({
        where: {
            id,
        },
    });
}


export async function createSkill(
    values: CreateSkillValues
) {

    const data = createSkillSchema.parse(values);

    const skill = await prisma.skill.create({
        data,
    });

    revalidatePath("/");

    return skill;
}


export async function updateSkill(
    id: string,
    values: CreateSkillValues
) {

    const data = createSkillSchema
        .partial()
        .parse(values);


    const skill = await prisma.skill.update({
        where: {
            id,
        },
        data,
    });

    revalidatePath("/");

    return skill;
}


export async function deleteSkill(id: string) {

    await prisma.skill.delete({
        where: {
            id,
        },
    });

    revalidatePath("/");

}