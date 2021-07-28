module.exports = {
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',
    },
    env: {
        GHOST_URL: process.env.GHOST_URL,
        GHOST_KEY: process.env.GHOST_KEY,
        WBESITE_URL: process.env.WEBSITE_URL,
        GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    },
    images: {
        domains: ['localhost'],
    },
};
