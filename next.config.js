/** @type {import('next').NextConfig} */
const nextConfig = {}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = nextConfig
module.exports = {
  webpack: (config, { isServer }) => {
    // For all targets except server, use mini-css-extract-plugin
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }));
    }

    return config;
  },
};
