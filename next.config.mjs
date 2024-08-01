/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: "http://localhost:4000",
  },
};

export default nextConfig;
