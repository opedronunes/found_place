/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['locahost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.fbsb29-1.fna.fbcdn.net',
                port: '3002',
                pathname: '/src',
            },
        ],
    },
}

module.exports = nextConfig
