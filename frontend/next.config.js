/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5555/:path*", // Proxy to Backend
      },
    ];
  },
};
