import type { MetadataRoute } from 'next'

const siteUrl = 'https://hanabi.co.il'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/eyebrows`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hair-transplant`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/eyelashes`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/iprf`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/accessibility`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
