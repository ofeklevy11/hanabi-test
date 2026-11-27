import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'תנאי שימוש | HANA BI',
  description: 'תנאי השימוש באתר HANA BI.',
  alternates: { canonical: 'https://hanabi.co.il/terms' },
  openGraph: {
    title: 'תנאי שימוש | HANA BI',
    description: 'תנאי השימוש באתר HANA BI.',
    url: 'https://hanabi.co.il/terms',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
