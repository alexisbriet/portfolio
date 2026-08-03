"use server";

import { prisma } from "@/lib/prisma";
import { createTestimonialSchema, CreateTestimonialValues } from "@/app/schemas/testimonial.schema";
import { revalidatePath } from "next/cache";


export async function getTestimonials() {

    return prisma.testimonial.findMany();

}



export async function getTestimonialById(
    id: string
) {

    return prisma.testimonial.findUnique({
        where: {
            id
        }
    });

}



export async function createTestimonial(
    values: CreateTestimonialValues
) {

    const data =
        createTestimonialSchema.parse(values);


    const testimonial =
        await prisma.testimonial.create({
            data
        });


    revalidatePath("/");

    return testimonial;

}



export async function updateTestimonial(
    id: string,
    values: CreateTestimonialValues
) {

    const data =
        createTestimonialSchema
            .partial()
            .parse(values);


    const testimonial =
        await prisma.testimonial.update({
            where: {
                id
            },
            data
        });


    revalidatePath("/");

    return testimonial;

}



export async function deleteTestimonial(
    id: string
) {

    await prisma.testimonial.delete({
        where: {
            id
        }
    });


    revalidatePath("/");

}