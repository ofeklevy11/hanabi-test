import type { Metadata } from 'next'
import './globals.css'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import FacebookPixel from '@/components/FacebookPixel'

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
      <body>
        <FacebookPixel />
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  )
}

