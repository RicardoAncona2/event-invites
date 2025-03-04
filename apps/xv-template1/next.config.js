//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  output: 'standalone', // ✅ Required for Vercel deployment in monorepos
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
