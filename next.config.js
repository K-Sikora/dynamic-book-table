/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/books",
        destination: "/books/1",
        permanent: true,
      },
      {
        source: "/books/author",
        destination: "/books/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
