import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'הצהרת נגישות | HANA BI',
  description: 'הצהרת הנגישות של אתר HANA BI ופרטי יצירת קשר בנושאי נגישות.',
  alternates: { canonical: 'https://hanabi.co.il/accessibility' },
  openGraph: {
    title: 'הצהרת נגישות | HANA BI',
    description: 'הצהרת הנגישות של אתר HANA BI ופרטי יצירת קשר בנושאי נגישות.',
    url: 'https://hanabi.co.il/accessibility',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
