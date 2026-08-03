"use server";

import { prisma } from "@/lib/prisma";
import { createPostSchema, CreatePostValues } from "@/app/schemas/post.schema";
import { revalidatePath } from "next/cache";

export async function getPosts() {
  return prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

export async function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
}

export async function createPost(
  values: CreatePostValues
) {
  const data = createPostSchema.parse(values);

  const post = await prisma.post.create({
    data,
  });

  revalidatePath("/admin");

  return post;
}

export async function updatePost(
  id: string,
  values: CreatePostValues
) {
  const data = createPostSchema.partial().parse(values);

  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data,
  });

  revalidatePath("/admin");

  return post;
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/admin");

  return true;
}
