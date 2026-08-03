"use server";

import { prisma } from "@/lib/prisma";
import {
  createPostSchema,
  updatePostSchema,
  CreatePostValues,
  UpdatePostValues,
} from "@/app/schemas/post.schema";
import { revalidatePath } from "next/cache";

export async function getPosts() {
  return prisma.post.findMany({
    include: {
      author: true,
    },
  });
}

export async function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: true,
    },
  });
}

export async function createPost(values: CreatePostValues) {
  const data = createPostSchema.parse(values);
    console.log(data);


  const post = await prisma.post.create({
    data: {
      ...data,
      tags: data.tags.split(",").map(tag => tag.trim()),
    },
    include: {
      author: true,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/");

  return post;
}

export async function updatePost(
  id: string,
  values: UpdatePostValues
) {
  const data = updatePostSchema.parse(values);

  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      ...data,
      tags: data.tags.split(",").map(tag => tag.trim()),
    },
    include: {
      author: true,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/");

  return post;
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/admin");
  revalidatePath("/");

  return true;
}