const nextConfig = {
    trailingSlash: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yt3.ggpht.com',
            },
            {
                protocol: 'https',
                hostname: 'clubbera.s3.eu-west-2.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    },
};

module.exports = nextConfig;