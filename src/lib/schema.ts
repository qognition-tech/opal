import { isValidNumber } from "libphonenumber-js";
import { z } from "zod";

// --- SCHEMA ---

const ContactFormSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }).max(50, "First name is too long."),
    lastName: z.string().max(50, "Last name is too long.").optional(),
    email: z
        .string()
        .email({ message: "Enter valid email address." })
        .max(100, { message: "Email address is too long." })
        .refine((value) => /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(value), {
            message: "Enter valid email address.",
        }),
    phoneNumber: z.string().refine(isValidNumber, { message: "Enter a valid phone number" }),
    message: z.string().min(1, { message: "Message is required." }).max(500, "Message is too long."),
});

// --- TYPES ---

type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;

// --- EXPORTS ---

export { ContactFormSchema, type ContactFormSchemaType };
