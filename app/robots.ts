import type { MetadataRoute } from 'next'

const siteUrl = 'https://hanabi.co.il'
const privatePaths = ['/thank-you/', '/eyebrows-lp/', '/hair-transplant-lp/']

// Search engines and AI assistants are welcome on every public page.
const namedCrawlers = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...namedCrawlers.map((userAgent) => ({ userAgent, allow: '/', disallow: privatePaths })),
      { userAgent: '*', allow: '/', disallow: privatePaths },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
