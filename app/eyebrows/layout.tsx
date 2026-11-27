import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'השתלת גבות לנשים ולגברים בראשון לציון | HANA BI',
  description: 'השתלת גבות בזקיקים בודדים, עם מדידה ותכנון של הקשת, הסימטריה וכיוון השערות לפני ההליך. אבחון אישי במרפאה.',
  alternates: { canonical: 'https://hanabi.co.il/eyebrows' },
  openGraph: {
    title: 'השתלת גבות לנשים ולגברים בראשון לציון | HANA BI',
    description: 'השתלת גבות בזקיקים בודדים, עם מדידה ותכנון של הקשת, הסימטריה וכיוון השערות לפני ההליך. אבחון אישי במרפאה.',
    url: 'https://hanabi.co.il/eyebrows',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/eyebrows.jpg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
