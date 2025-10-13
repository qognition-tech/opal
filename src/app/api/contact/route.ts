import { ContactFormSchema } from "@/lib/schema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { UserConfirmationEmail } from "@/emails/user-confirmation";
import { AdminNotificationEmail } from "@/emails/admin-notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate the request body
        const validationResult = ContactFormSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                { error: "Invalid form data", details: validationResult.error.flatten() },
                { status: 400 },
            );
        }

        const { firstName, lastName, email, phoneNumber, message } = validationResult.data;
        const fullName = lastName ? `${firstName} ${lastName}` : firstName;

        // Send confirmation email to user
        const userEmailResult = await resend.emails.send({
            from: "Opal Consulting <noreply@opalconsulting.com.au>",
            to: [email],
            subject: "Thank you for contacting Opal Consulting",
            react: UserConfirmationEmail({ firstName, fullName }),
        });

        if (userEmailResult.error) {
            console.error("Failed to send user confirmation email:", userEmailResult.error);
        }

        // Send notification email to admin
        const adminEmailResult = await resend.emails.send({
            from: "Opal Consulting Contact Form <noreply@opalconsulting.com.au>",
            to: ["info@opalconsulting.com.au"],
            replyTo: email,
            subject: `New Contact Form Submission from ${fullName}`,
            react: AdminNotificationEmail({
                firstName,
                lastName,
                fullName,
                email,
                phoneNumber,
                message,
            }),
        });

        if (adminEmailResult.error) {
            console.error("Failed to send admin notification email:", adminEmailResult.error);
        }

        return NextResponse.json({
            success: true,
            message: "Thank you for contacting us! We'll get back to you soon.",
        });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 });
    }
}
