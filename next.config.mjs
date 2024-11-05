/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    httpHeaderSize: 128 * 1024, // 128KB
  },
  experimental: {
    largePageDataBytes: 256 * 1024, // 256KB
  },
};

export default nextConfig;
