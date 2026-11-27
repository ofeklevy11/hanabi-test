import type { MetadataRoute } from 'next'

const siteUrl = 'https://hanabi.co.il'

// Search crawlers: may fetch every public page. The thank-you page is kept out of results with a
// noindex tag (app/thank-you/layout.tsx), which a crawler can only read if it may fetch the page.
const searchCrawlers = ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot']

// Training and user-initiated crawlers, and every other bot: rules kept exactly as they were.
// Changing training permissions needs the clinic's approval (see HANABI_QA_REPORT_RUN2.md).
const unchangedCrawlers = ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Google-Extended', '*']
const previousDisallow = ['/thank-you/', '/eyebrows-lp/', '/hair-transplant-lp/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...searchCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
      ...unchangedCrawlers.map((userAgent) => ({ userAgent, allow: '/', disallow: previousDisallow })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
