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

export async function GetFormByIdAction(id: number) {
  const user = await currentUser();
  if (!user) {
    throw new UserNotFoundError();
  }

  const data = await prisma.form.findUnique({
    where: {
      id: id,
      userId: user.id,
    },
  });

  return data;
}

export async function UpdateFormContentAction(id: number, content: string) {
  const user = await currentUser();

  if (!user) {
    throw new UserNotFoundError();
  }

  const prismaRes = await prisma.form.update({
    where: {
      userId: user.id,
      id,
    },
    data: {
      content,
    },
  });

  return prismaRes;
}
