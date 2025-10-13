import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
    title: "Opal Consulting | Registered Migration Agents Sydney",
    description:
        "Trusted registered migration agents in Australia with 12+ years experience. Expert visa consultation, application assistance, and migration services. Get professional guidance for your successful visa journey.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={cn("bg-background text-foreground font-geist min-h-screen antialiased", fontVariables)}
            >
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
