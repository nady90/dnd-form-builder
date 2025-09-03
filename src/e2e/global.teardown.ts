import { test as teardown } from "@playwright/test";

import prisma from "@/lib/prisma";

teardown("Delete all forms in the database", async () => {
  await prisma.form.deleteMany({
    where: {
      userId: process.env.E2E_USER_ID,
    },
  });
});
