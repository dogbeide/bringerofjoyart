/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/music',
        destination: 'https://boyowa.bandcamp.com',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
