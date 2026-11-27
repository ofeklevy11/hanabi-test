import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'השתלת שיער לגברים ולנשים בראשון לציון | HANA BI',
  description: 'השתלת שיער בטכניקה היברידית המשלבת FUE ו-DHI, על ידי רופאים מורשים. אבחון אישי, תכנון קו שיער ומעקב עד התוצאה הסופית.',
  alternates: { canonical: 'https://hanabi.co.il/hair-transplant' },
  openGraph: {
    title: 'השתלת שיער לגברים ולנשים בראשון לציון | HANA BI',
    description: 'השתלת שיער בטכניקה היברידית המשלבת FUE ו-DHI, על ידי רופאים מורשים. אבחון אישי, תכנון קו שיער ומעקב עד התוצאה הסופית.',
    url: 'https://hanabi.co.il/hair-transplant',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/hair-transplant-hero-v2.jpg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
