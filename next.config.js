/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['yt3.ggpht.com'],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
