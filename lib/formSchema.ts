import { z } from "zod";
import { content } from "@/lib/content";

export const leadSchema = z.object({
  name: z.string().min(1, content.contact.errors.required),
  phone: z
    .string()
    .min(1, content.contact.errors.required)
    .regex(/^[+\d\s\-()]{7,}$/i, content.contact.errors.phone),
  email: z
    .string()
    .optional()
    .refine((value) => !value || /.+@.+\..+/.test(value), {
      message: content.contact.errors.email
    }),
  website: z.string().optional(),
  service: z.string().min(1, content.contact.errors.required),
  description: z.string().optional(),
  consent: z.boolean().refine((value) => value, {
    message: content.contact.errors.consent
  })
});

export type LeadFormValues = z.infer<typeof leadSchema>;

export const defaultLeadValues: LeadFormValues = {
  name: "",
  phone: "",
  email: "",
  website: "",
  service: "",
  description: "",
  consent: false
};
