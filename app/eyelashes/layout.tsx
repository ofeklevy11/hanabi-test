import type { Metadata } from 'next'

// Page metadata lives here because page.tsx is a client component and cannot export it.
// This file only adds head tags; it renders the page exactly as before.
export const metadata: Metadata = {
  title: 'השתלת ריסים בישראל | HANA BI',
  description: 'השתלת ריסים מיקרו-כירורגית: מה ההליך כולל, איך שומרים על בטיחות העין ומה צפוי בהחלמה ובתחזוקה. אבחון אישי במרפאת HANA BI בראשון לציון.',
  alternates: { canonical: 'https://hanabi.co.il/eyelashes' },
  openGraph: {
    title: 'השתלת ריסים בישראל | HANA BI',
    description: 'השתלת ריסים מיקרו-כירורגית: מה ההליך כולל, איך שומרים על בטיחות העין ומה צפוי בהחלמה ובתחזוקה. אבחון אישי במרפאת HANA BI בראשון לציון.',
    url: 'https://hanabi.co.il/eyelashes',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/lashes.jpeg' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
