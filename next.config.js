const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: false,
  },
  compiler: { styledComponents: true },
  swcMinify: true,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
