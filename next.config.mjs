/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages. The Pages workflow injects basePath at build time.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
