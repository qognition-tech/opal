import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Client Testimonials | Opal Consulting Sydney",
  description:
    "See what our clients say about Opal Consulting. Trusted Sydney migration agency helping students and migrants achieve success.",
  alternates: {
    canonical: "https://www.opalconsulting.com.au/testimonials",
  },
};

// ⭐ Add GTM ID Here
const GTM_ID = "GTM-58WP43Q";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* --- Google Tag Manager Script (Head) --- */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <body
        className={cn(
          "bg-background text-foreground font-geist min-h-screen antialiased",
          fontVariables
        )}
        suppressHydrationWarning
      >
        {/* --- Google Tag Manager NoScript (Body) --- */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
