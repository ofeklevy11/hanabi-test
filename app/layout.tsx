import type { Metadata } from 'next'
import './globals.css'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import FacebookPixel from '@/components/FacebookPixel'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata: Metadata = {
  metadataBase: new URL('https://hanabi.co.il'),
  // PROPOSAL, pending approval: clearer home title and description naming the clinic's main fields.
  title: 'HANA BI | השתלת שיער, גבות, זקן וריסים בראשון לציון',
  description: 'מרפאת HANA BI בראשון לציון: השתלות שיער לגברים ולנשים, השתלות גבות, זקן וריסים, וטיפולי iPRF. אבחון ממוחשב, תכנון צפיפות אישי ומעקב רפואי לאורך השנה הראשונה.',
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
              '@type': ['MedicalClinic', 'MedicalBusiness'],
              '@id': 'https://hanabi.co.il/#clinic',
              name: 'HANA BI',
              alternateName: 'HANA BI - אסתטיקה ביולוגית מתקדמת',
              url: 'https://hanabi.co.il',
              description: 'מרכז מומחים לאסתטיקה ביולוגית מתקדמת הפועל לפי הפרוטוקולים הקליניים של יפן ודרום קוריאה: השתלת שיער לגברים ולנשים בטכניקה היברידית (FUE + DHI), השתלת גבות, השתלת ריסים, השתלת זקן, טיפול iPRF ומכשור טכנולוגי מתקדם לחידוש העור והעלמת קמטים.',
              medicalSpecialty: ['Dermatology', 'PlasticSurgery'],
              availableService: [
                { '@type': 'MedicalProcedure', name: 'השתלת שיער לגברים ולנשים בטכניקה היברידית (FUE + DHI)', url: 'https://hanabi.co.il/hair-transplant' },
                { '@type': 'MedicalProcedure', name: 'השתלת גבות', url: 'https://hanabi.co.il/eyebrows' },
                { '@type': 'MedicalProcedure', name: 'השתלת ריסים', url: 'https://hanabi.co.il/eyelashes' },
                { '@type': 'MedicalProcedure', name: 'טיפול iPRF', url: 'https://hanabi.co.il/iprf' },
                { '@type': 'MedicalProcedure', name: 'השתלת זקן', url: 'https://hanabi.co.il/' },
                { '@type': 'MedicalProcedure', name: 'מכשור טכנולוגי מתקדם לחידוש רקמות העור, העלמת קמטים ומיצוק עור רפוי', url: 'https://hanabi.co.il/' },
              ],
              email: 'info@hanabi.co.il',
              telephone: '+972-58-506-5359',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'רחוב פאול גרונינגר 4',
                addressLocality: 'ראשון לציון',
                addressCountry: 'IL',
              },
              sameAs: ['https://www.instagram.com/hana.bi_israel'],
              employee: [
                { '@type': 'Physician', name: 'ד"ר מואמן מנצור', jobTitle: 'רופא מורשה, מומחה להשתלות שיער, גבות וזקן', url: 'https://hanabi.co.il/team' },
                { '@type': 'Physician', name: "ד\"ר שריהאן פריג'", jobTitle: 'רופאה מורשית, מומחית לשחזור אסתטי מיקרו-כירורגי', url: 'https://hanabi.co.il/team' },
              ],
              knowsAbout: [
                'השתלת שיער בטכניקה היברידית FUE ו-DHI',
                'לקיחת זקיקים בטכנולוגיית Micro-Extraction תחת מיקרוסקופ',
                'מערכת קירור זקיקים בכלי ייעודי מבוקר טמפרטורה מחוץ לקרקפת, לשיעור קליטה של 98%',
                'מחטי Nano-Tools יפניות הדקות פי 3 מהסטנדרט',
                'סריקת קרקפת ועור מבוססת AI',
                'פרוטוקולים קליניים מיפן ומדרום קוריאה',
                'השתלת גבות בזקיקי Singles ממוינים',
                'שחזור ריסים מיקרו-כירורגי בארכיטקטורת C-Curve',
                'טיפול iPRF מבוסס פיברין אוטולוגי',
                'השתלת זקן',
                'חידוש עור והעלמת קמטים במכשור טכנולוגי מתקדם',
              ],
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

