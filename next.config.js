/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['yt3.ggpht.com', 'clubbera.s3.eu-west-2.amazonaws.com'],
    },
    experimental: {
        serverActions: true,
    },
};

module.exports = nextConfig
