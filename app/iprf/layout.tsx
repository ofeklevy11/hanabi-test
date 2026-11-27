import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'טיפול iPRF מדם המטופל לעור ולשיער | HANA BI',
  description: 'טיפול iPRF שמופק מדמו של המטופל: איך הוא מוכן, למי הוא מתאים, ומה ידוע מהמחקר. אבחון אישי במרפאה בראשון לציון.',
  alternates: { canonical: 'https://hanabi.co.il/iprf' },
  openGraph: {
    title: 'טיפול iPRF מדם המטופל לעור ולשיער | HANA BI',
    description: 'טיפול iPRF שמופק מדמו של המטופל: איך הוא מוכן, למי הוא מתאים, ומה ידוע מהמחקר. אבחון אישי במרפאה בראשון לציון.',
    url: 'https://hanabi.co.il/iprf',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/iprf-hero.jpg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
