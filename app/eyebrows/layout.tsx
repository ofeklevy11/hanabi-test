import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'השתלת גבות בשיער טבעי בישראל | HANA BI',
  description: 'השתלת גבות ביחידות של שערה אחת, עם תכנון של הקשת, הסימטריה וכיוון השערות לפני ההליך. אבחון אישי במרפאת HANA BI בראשון לציון.',
  alternates: { canonical: 'https://hanabi.co.il/eyebrows' },
  openGraph: {
    title: 'השתלת גבות בשיער טבעי בישראל | HANA BI',
    description: 'השתלת גבות ביחידות של שערה אחת, עם תכנון של הקשת, הסימטריה וכיוון השערות לפני ההליך. אבחון אישי במרפאת HANA BI בראשון לציון.',
    url: 'https://hanabi.co.il/eyebrows',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/eyebrows.jpg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
