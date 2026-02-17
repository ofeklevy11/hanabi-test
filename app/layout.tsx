import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

