import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'השתלת שיער בישראל | FUE & DHI | HANA BI',
  description: 'השתלת שיער לגברים ולנשים בטכניקה היברידית המשלבת FUE ו-DHI, על ידי רופאים מורשים במרפאת HANA BI בראשון לציון. אבחון אישי, תכנון קו שיער ומעקב לאורך השנה הראשונה.',
  alternates: { canonical: 'https://hanabi.co.il/hair-transplant' },
  openGraph: {
    title: 'השתלת שיער בישראל | FUE & DHI | HANA BI',
    description: 'השתלת שיער לגברים ולנשים בטכניקה היברידית המשלבת FUE ו-DHI, על ידי רופאים מורשים במרפאת HANA BI בראשון לציון. אבחון אישי, תכנון קו שיער ומעקב לאורך השנה הראשונה.',
    url: 'https://hanabi.co.il/hair-transplant',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/hair-transplant-hero-v2.jpg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
