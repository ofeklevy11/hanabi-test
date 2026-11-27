import type { MetadataRoute } from 'next'

const siteUrl = 'https://hanabi.co.il'

// Search engines and AI assistants are welcome on every page.
// The thank-you page and the ad landing pages are kept out of search results with a noindex tag
// (their layout.tsx), which crawlers can only read if they are allowed to fetch the page.
const namedCrawlers = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Google-Extended']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...namedCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
