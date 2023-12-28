const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const REGISTER_APP_URL = process.env.NEXT_PUBLIC_REGISTER_APP_URL || 'http://localhost:3001';

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    FeatureRegister: `FeatureRegister@${REGISTER_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
}

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
        name: 'main-app',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: remotes(isServer),
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