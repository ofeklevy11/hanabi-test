import type { MetadataRoute } from 'next'
import { articles, SITE_URL } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/eyebrows`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/hair-transplant`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/eyelashes`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/iprf`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/articles`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/accessibility`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ]
  const posts: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  return [...pages, ...posts]
}
