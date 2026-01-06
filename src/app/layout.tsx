import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
    title: {
        default: "Opal Consulting | Registered Migration Agents Sydney",
        template: "%s | Opal Consulting",
    },
    description:
        "Expert migration services in Sydney. Trusted registered migration agents helping students, families, and professionals with Australian visas since 2008.",
    keywords: [
        "Registered Migration Agents Sydney",
        "migration agency sydney",
        "immigration agent sydney",
        "best migration agent sydney",
    ],
    authors: [{ name: "Opal Consulting" }],
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.opalconsulting.com.au",
        siteName: "Opal Consulting",
    },
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
