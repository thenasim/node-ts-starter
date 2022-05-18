import { PrismaClient } from "@prisma/client";
import type { Post } from "@prisma/client";
import { defaultPagingConfig } from "$configs/generalQueryConfig";

const prisma = new PrismaClient();

export async function getAllPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getPaginatePosts(
  page = defaultPagingConfig.PAGE,
  limit = defaultPagingConfig.LIMIT,
): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    take: limit,
    skip: page * limit,
  });
  return posts;
}
