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

export const TitleSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type TitleSchemaType = z.infer<typeof TitleSchema>;

export const SubTitleSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type SubTitleSchemaType = z.infer<typeof SubTitleSchema>;

export const ParagraphSchema = z.object({
  content: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type ParagraphSchemaType = z.infer<typeof ParagraphSchema>;

export const SpacerSchema = z.object({
  height: z.number(),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type SpacerSchemaType = z.infer<typeof SpacerSchema>;

export const SeparatorSchema = z.object({
  height: z.number(),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type SperatorSchemaType = z.infer<typeof SeparatorSchema>;

export const MultiLineSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  required: z.boolean(),
  helperText: z.string(),
  placeholder: z.string().optional(),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type MultiLineSchemaType = z.infer<typeof MultiLineSchema>;

export const NumberSchema = z.object({
  label: z
    .string()
    .min(1, { error: "Label is required" })
    .min(3, { error: "Label must have at least three characters" }),
  defaultValue: z.number().optional(),
  required: z.boolean(),
  helperText: z.string(),
  placeholder: z.string().optional(),
  styles: z.object({
    width: z.enum(["half", "full"]),
    alignment: z.enum(["left", "center", "right"]),
  }),
});

export type NumberSchemaType = z.infer<typeof NumberSchema>;
