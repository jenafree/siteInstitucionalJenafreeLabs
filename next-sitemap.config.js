/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jenafree.github.io/siteInstitucionalJenafreeLabs',
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
      'https://jenafree.github.io/siteInstitucionalJenafreeLabs/sitemap.xml',
    ],
  },
};


