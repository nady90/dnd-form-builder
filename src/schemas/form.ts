import { z } from "zod";

export const createFormSchema = z.strictObject({
  name: z
    .string()
    .trim()
    .min(1, { error: "Name is requied." })
    .min(3, { error: "Name must have at least three characters." }),
  description: z.string().trim().optional(),
});

export type CreateFormSchemaType = z.infer<typeof createFormSchema>;
