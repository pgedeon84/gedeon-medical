const nextConfig = {
  // Modern Next.js doesn't need target configuration
  // Remove the entire 'target' property
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
  // Optional: Enable if you're using static export
  // output: 'export',
};

module.exports = {
  reactStrictMode: true,
  nextConfig,
};
