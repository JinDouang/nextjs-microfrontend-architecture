const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'FeatureRegister',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './FeatureCard': '@/pages/index.tsx',
        },
        shared: {},
        extraOptions:{
          exposePages: true
        }
      }),
    );


    return config;
  },
}

module.exports = nextConfig