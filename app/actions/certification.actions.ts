"use server";

import { prisma } from "@/lib/prisma";
import { createCertificationSchema } from "@/app/schemas/certification.schema";
import { revalidatePath } from "next/cache";


export async function getCertifications() {

    return prisma.certification.findMany({
        orderBy:{
            date:"desc"
        }
    });

}


export async function getCertificationById(
    id:string
){

    return prisma.certification.findUnique({
        where:{
            id
        }
    });

}



export async function createCertification(
    values:unknown
){

    const data =
        createCertificationSchema.parse(values);


    const certification =
        await prisma.certification.create({
            data
        });


    revalidatePath("/");

    return certification;

}



export async function updateCertification(
    id:string,
    values:unknown
){

    const data =
        createCertificationSchema
        .partial()
        .parse(values);


    const certification =
        await prisma.certification.update({
            where:{
                id
            },
            data
        });


    revalidatePath("/");

    return certification;

}



export async function deleteCertification(
    id:string
){

    await prisma.certification.delete({
        where:{
            id
        }
    });


    revalidatePath("/");

}