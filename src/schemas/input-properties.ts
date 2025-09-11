import { z } from "zod";

export const TextFieldSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  required: z.boolean(),
  helperText: z.string(),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type TextFieldSchemaType = z.infer<typeof TextFieldSchema>;
