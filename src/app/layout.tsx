import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Client Testimonials | Opal Consulting Sydney",
    description:
        "See what our clients say about Opal Consulting. Trusted Sydney migration agency helping students and migrants achieve success.",
    alternates: {
        canonical: "https://www.opalconsulting.com.au/testimonials",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm-script" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-58WP43Q');
                    `}
                </Script>
                {/* End Google Tag Manager */}
            </head>

            <body
                suppressHydrationWarning
                className={cn(
                    "bg-background text-foreground font-geist min-h-screen antialiased",
                    fontVariables
                )}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-58WP43Q"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
