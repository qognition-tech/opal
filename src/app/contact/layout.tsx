import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Opal Consulting",
    description:
        "Contact our registered migration agents in Sydney today. Get expert visa advice and personalized support for your Australian migration journey.",
    keywords: ["Registered Migration Agents Sydney", "migration agency sydney", "immigration agent sydney", "best migration agent sydney"],
    alternates: {
        canonical: "https://www.opalconsulting.com.au/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
