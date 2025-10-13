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
                hostname: "opalconsulting.com.au",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/wp/:path*",
                destination: "https://opalconsulting.com.au/wp-json/wp/v2/:path*",
            },
        ];
    },
};

export default nextConfig;
