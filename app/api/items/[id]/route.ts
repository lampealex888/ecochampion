import { NextResponse } from "next/server";
import type { Item } from "@prisma/client";
import db from "../../../utils/db";

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const body: Item = await req.json();

  const item = await db.item.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: body.title,
      description: body.description,
      category: body.category,
      image: body.image,
      userId: body.userId,
    },
  });

  return new NextResponse(JSON.stringify(item), {
    status: 200,
  });
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const item = await db.item.delete({
    where: {
      id: Number(params.id),
    },
  });

  return new NextResponse(JSON.stringify(item), {
    status: 200,
  });
};
