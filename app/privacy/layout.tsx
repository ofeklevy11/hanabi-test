import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'מדיניות פרטיות | HANA BI',
  description: 'איך HANA BI אוסף, שומר ומשתמש בפרטים שנמסרים באתר.',
  alternates: { canonical: 'https://hanabi.co.il/privacy' },
  openGraph: {
    title: 'מדיניות פרטיות | HANA BI',
    description: 'איך HANA BI אוסף, שומר ומשתמש בפרטים שנמסרים באתר.',
    url: 'https://hanabi.co.il/privacy',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
