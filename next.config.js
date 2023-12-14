/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    /**
     * @type {import('next').Redirect[]}
     * @see source - 유저가 접근하는 url
     * @see destination - 유저가 접근했을 때 실제로 보여줄 페이지
     * @see permanent - true일 경우, source로 접근했을 때 destination으로 redirect되고, url이 destination으로 바뀜
     */
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: '/dashboard/selection',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
