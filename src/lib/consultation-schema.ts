import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^(\+?[0-9\s\-()]{7,20})$/.test(val),
      "Please enter a valid phone number",
    ),

  company: z.string().max(100, "Company name is too long").optional(),

  service: z.enum(
    ["erp", "saas", "iot", "data-analytics", "ai", "cybersecurity", "other"],
    { errorMap: () => ({ message: "Please select a service" }) },
  ),

  budget: z
    .enum(["under-1m", "1m-5m", "5m-20m", "20m-plus", "not-sure"])
    .optional(),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long (max 2000 characters)"),

  consent: z
    .boolean()
    .refine((val) => val === true, "You must agree to be contacted"),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

export const serviceLabels: Record<ConsultationFormData["service"], string> = {
  erp: "ERP Solutions",
  saas: "SaaS Platform",
  iot: "IoT Systems",
  "data-analytics": "Data & Analytics",
  ai: "AI Integration",
  cybersecurity: "Cybersecurity",
  other: "Other / General Enquiry",
};

export const budgetLabels: Record<string, string> = {
  "under-1m": "Under ₦1 million",
  "1m-5m": "₦1M – ₦5M",
  "5m-20m": "₦5M – ₦20M",
  "20m-plus": "₦20M+",
  "not-sure": "Not sure yet",
};
