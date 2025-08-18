"use server";
import { currentUser } from "@clerk/nextjs/server";

import { UserNotFoundError } from "@/errors/auth-errors";
import { FormCreationValidationError } from "@/errors/form-errors";
import prisma from "@/lib/prisma";
import { createFormSchema, CreateFormSchemaType } from "@/schemas/form";

export async function GetAllFormsAction() {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }

  const data = await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
      visits: true,
      published: true,
    },
  });
  return data;
}

export async function CreateFormAction(data: CreateFormSchemaType) {
  const validation = createFormSchema.safeParse(data);
  if (!validation.success) {
    throw new FormCreationValidationError();
  }

  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }

  try {
    const id = await prisma.form.create({
      data: {
        userId: user.id,
        name: data.name,
        description: data.description || "",
      },
    });
    return id;
  } catch (error) {
    throw error;
  }
}
