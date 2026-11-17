import type { Metadata } from 'next'
import './globals.css'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import FacebookPixel from '@/components/FacebookPixel'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
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
        {/* Organization facts for search engines and AI assistants. Keep in sync with the contact details in the footer. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              '@id': 'https://hanabi.co.il/#clinic',
              name: 'HANA BI',
              alternateName: 'Hana Bi אסתטיקה ביולוגית מתקדמת',
              url: 'https://hanabi.co.il',
              description: 'מרפאה לאסתטיקה ביולוגית מתקדמת: השתלת שיער, השתלת גבות, השתלת ריסים וטיפול iPRF.',
              medicalSpecialty: ['Dermatology', 'PlasticSurgery'],
              availableService: [
                { '@type': 'MedicalProcedure', name: 'השתלת שיער', url: 'https://hanabi.co.il/hair-transplant' },
                { '@type': 'MedicalProcedure', name: 'השתלת גבות', url: 'https://hanabi.co.il/eyebrows' },
                { '@type': 'MedicalProcedure', name: 'השתלת ריסים', url: 'https://hanabi.co.il/eyelashes' },
                { '@type': 'MedicalProcedure', name: 'טיפול iPRF', url: 'https://hanabi.co.il/iprf' },
              ],
              email: 'info@hanabi.co.il',
              telephone: '+972-58-506-5359',
              inLanguage: 'he-IL',
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

