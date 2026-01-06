import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Latest Blogs And Stories | Opal Consulting Sydney",
    description:
        "Read the latest blogs about migration, study tips, and visas in Australia. Insights from Sydney's experienced migration agents.",
    alternates: {
        canonical: "https://www.opalconsulting.com.au/blogs",
    },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
