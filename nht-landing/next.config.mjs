/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nowhairtime.com",
        pathname: "/assets/pages/img/logo.svg"
      }
    ]
  }
};

export default nextConfig;


