import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Item } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const body: Item = await req.json();

  const item = await prisma.item.create({
    data: {
      title: body.title,
      description: body.description,
      category: body.category,
      image: body.image,
      userId: body.userId,
    },
  });

  return new NextResponse(JSON.stringify(item), {
    status: 201,
  });
};
