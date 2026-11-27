import type { Metadata } from 'next'
import './globals.css'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import FacebookPixel from '@/components/FacebookPixel'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanabi.co.il'),
  title: 'HANA BI - אסתטיקה ביולוגית מתקדמת',
  description: 'להיות את. הגרסה הבריאה ביותר. אסתטיקה ביולוגית מתקדמת המבוססת על המשאבים הטבעיים של גופך.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" />
      </head>
      <body>
        {/* Organization facts for search engines and AI assistants. Keep in sync with the visible contact details and team page.
            Only facts that appear on the site; no specialties, ratings or numbers that are pending verification. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://hanabi.co.il/#website',
                  url: 'https://hanabi.co.il',
                  name: 'HANA BI',
                  alternateName: ['HANABI', 'הנה בי'],
                  inLanguage: 'he-IL',
                  publisher: { '@id': 'https://hanabi.co.il/#clinic' },
                },
                {
                  '@type': ['MedicalClinic', 'MedicalBusiness'],
                  '@id': 'https://hanabi.co.il/#clinic',
                  name: 'HANA BI',
                  alternateName: 'HANA BI - אסתטיקה ביולוגית מתקדמת',
                  url: 'https://hanabi.co.il',
                  // logo: add only when the official logo file is supplied (no interim icon presented as the logo).
                  image: 'https://hanabi.co.il/files/hero/hero-poster.jpg',
                  description: 'מרפאה להשתלות שיער לגברים ולנשים בטכניקה היברידית (FUE + DHI), השתלות גבות, ריסים וזקן, וטיפולי iPRF, בראשון לציון.',
                  availableService: [
                    { '@type': 'MedicalProcedure', '@id': 'https://hanabi.co.il/hair-transplant#procedure', name: 'השתלת שיער לגברים ולנשים בטכניקה היברידית (FUE + DHI)', url: 'https://hanabi.co.il/hair-transplant' },
                    { '@type': 'MedicalProcedure', '@id': 'https://hanabi.co.il/eyebrows#procedure', name: 'השתלת גבות', url: 'https://hanabi.co.il/eyebrows' },
                    { '@type': 'MedicalProcedure', '@id': 'https://hanabi.co.il/eyelashes#procedure', name: 'השתלת ריסים', url: 'https://hanabi.co.il/eyelashes' },
                    { '@type': 'MedicalProcedure', '@id': 'https://hanabi.co.il/iprf#procedure', name: 'טיפול iPRF', url: 'https://hanabi.co.il/iprf' },
                    { '@type': 'MedicalProcedure', name: 'השתלת זקן', url: 'https://hanabi.co.il/' },
                  ],
                  email: 'info@hanabi.co.il',
                  telephone: '+972-58-506-5359',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'רחוב פאול גרונינגר 4',
                    addressLocality: 'ראשון לציון',
                    addressCountry: 'IL',
                  },
                  areaServed: { '@type': 'Country', name: 'Israel' },
                  sameAs: ['https://www.instagram.com/hana.bi_israel'],
                  employee: [
                    { '@type': 'Physician', '@id': 'https://hanabi.co.il/team#dr-moamen-mansour', name: 'ד"ר מואמן מנצור', jobTitle: 'רופא מורשה', url: 'https://hanabi.co.il/team' },
                    { '@type': 'Physician', '@id': 'https://hanabi.co.il/team#dr-sherihan-frej', name: "ד\"ר שריהאן פריג'", jobTitle: 'רופאה מורשית', url: 'https://hanabi.co.il/team' },
                  ],
                  knowsAbout: [
                    'השתלת שיער בטכניקה היברידית FUE ו-DHI',
                    'לקיחת זקיקים תחת הגדלה',
                    'שימור זקיקים בכלי מבוקר טמפרטורה מחוץ לקרקפת',
                    'השתלת גבות ביחידות של שערה אחת',
                    'השתלת ריסים',
                    'השתלת זקן',
                    'טיפול iPRF',
                  ],
                  inLanguage: 'he-IL',
                },
              ],
            }).replace(/</g, String.fromCharCode(92) + 'u003c'),
          }}
        />
        <FacebookPixel />
        {children}
        <FloatingCTA />
        <AccessibilityWidget />
      </body>
    </html>
  )
}

