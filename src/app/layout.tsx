import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";
import OpalConsultingSchema from "@/components/OpalConsultingSchema";

export const metadata: Metadata = {
    title: {
        default: "Opal Consulting: Best Migration Agents in Sydney",
        template: "%s | Opal Consulting",
    },
    description:
        "Opal Consulting is the leading migration agent providing expert Australian migration, visa & education services. 15+ years experience, 1200+ success stories.",
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
    alternates: {
    canonical: "https://www.opalconsulting.com.au/",
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
                {/* BUSINESS SCHEMA (LOADS ONCE) */}
        <OpalConsultingSchema />
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
