/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jenafreelabs.com',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://jenafreelabs.com/sitemap.xml',
    ],
  },
};


