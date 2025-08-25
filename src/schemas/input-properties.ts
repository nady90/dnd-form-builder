import { z } from "zod";

export const TextFieldSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  required: z.boolean(),
});

export type TextFieldSchemaType = z.infer<typeof TextFieldSchema>;
