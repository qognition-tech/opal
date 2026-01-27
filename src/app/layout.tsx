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
    description:
        "Expert migration services in Australia. Trusted registered migration agents helping students, families, and professionals with Australian visas since 2008.",
    keywords: [
        "Registered Migration Agents Sydney",
        "migration agency sydney",
        "immigration agent sydney",
        "best migration agent sydney",
    ],
    authors: [{ name: "Opal Consulting" }],
    verification: {
        google: "mId-rVF0FuaY1mtL2gL29aTkyp6Y9emhHh6mCR3OnbU",
    },
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
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-58WP43Q');
                `}
            </Script>
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
