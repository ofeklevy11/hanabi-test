/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // זה יוצר static export
  images: {
    unoptimized: true,  // נדרש ל-static export
  },
}

module.exports = nextConfig