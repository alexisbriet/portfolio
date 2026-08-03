"use server";

import { prisma } from "@/lib/prisma";
import { createUserSchema, CreateUserValues } from "@/app/schemas/user.schema";
import { revalidatePath } from "next/cache";

export async function getUsers() {
  return prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
}

export async function createUser(
  values: CreateUserValues
) {
  const data = createUserSchema.parse(values);

  const user = await prisma.user.create({
    data,
  });

  revalidatePath("/admin");

  return user;
}

export async function updateUser(
  id: string, values: CreateUserValues
) {
  const data = createUserSchema.partial().parse(values);

  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data,
  });

  revalidatePath("/admin");

  return user;
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/admin");

  return true;
}
