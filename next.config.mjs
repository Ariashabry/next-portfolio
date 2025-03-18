/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'flowbite.com',
            's3.ap-northeast-2.amazonaws.com',
            'ariashabry.github.io'
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}
export default nextConfig;
