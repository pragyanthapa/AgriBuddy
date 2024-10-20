/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    AZURE_TEXT_ANALYTICS_ENDPOINT: process.env.AZURE_TEXT_ANALYTICS_ENDPOINT,
    AZURE_TEXT_ANALYTICS_KEY_1: process.env.AZURE_TEXT_ANALYTICS_KEY_1,
    AZURE_TEXT_ANALYTICS_KEY_2: process.env.AZURE_TEXT_ANALYTICS_KEY_2,
  },
};

export default nextConfig;