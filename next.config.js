/** @type {import('next').NextConfig} */
const nextconfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
module.exports = nextconfig;
