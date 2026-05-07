import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long (max 2000 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
