import { ContactFormSchemaType } from "@/lib/schema";
import { useMutation } from "@tanstack/react-query";

async function submitContactForm(
    data: ContactFormSchemaType,
): Promise<{ success: boolean; message?: string; error?: unknown }> {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.error || "Something went wrong, please try again.");
    }

    return response.json();
}

export function useContact() {
    return useMutation({
        mutationFn: submitContactForm,
    });
}
