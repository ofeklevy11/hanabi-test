import type { Metadata } from 'next'

// Not for search results: ad landing pages and the post-form thank-you page.
// Crawlers must be allowed to fetch the page (see app/robots.ts) to see this tag.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
