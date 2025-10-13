import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "cms.opalconsulting.com.au",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/wp/:path*",
                destination: `${process.env.WORDPRESS_API_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;
