/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    images:{
        unoptimized: true,
    },
    output: 'export'
};

export default nextConfig;
