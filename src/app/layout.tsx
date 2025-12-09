import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Client Testimonials | Opal Consulting Sydney",
    description: "See what our clients say about Opal Consulting. Trusted Sydney migration agency helping students and migrants achieve success.",
    alternates: {
        canonical: "https://www.opalconsulting.com.au/testimonials"
    }
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

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-BZFN8JF4ES"
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-BZFN8JF4ES', {
                            page_path: window.location.pathname,
                        });
                    `}
                </Script>
            </body>
        </html>
    );
}
