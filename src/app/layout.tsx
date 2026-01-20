import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
    title: {
        default: "Opal Consulting | Registered Migration Agents Sydney",
        template: "%s | Opal Consulting",
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
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-58WP43Q"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
