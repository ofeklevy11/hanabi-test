import type { MetadataRoute } from 'next'

const siteUrl = 'https://hanabi.co.il'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you/', '/eyebrows-lp/', '/hair-transplant-lp/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
