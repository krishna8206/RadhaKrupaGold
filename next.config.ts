import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* existing config options */
    reactCompiler: true,

    images: {
        // Use remotePatterns for better security and future-proofing
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'earthmintgold.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
        ],
    },
};

export default nextConfig;