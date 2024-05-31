/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/about",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;