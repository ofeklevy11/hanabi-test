import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoPage, InfoSection, pageLd } from '@/components/InfoPage'
import { articles, articleSources, SITE_URL } from '@/lib/articles'
import { SOURCES } from '@/lib/sources'

const url = `${SITE_URL}/medical-references`
const title = 'מקורות רפואיים | HANA BI'
const description =
  'כל המקורות הרפואיים שעליהם מבוססים מאמרי האתר של HANA BI, עם קישור לפרסום המקורי ולמאמרים באתר שמצטטים כל מקור.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, locale: 'he_IL', type: 'website' },
}

const GROUPS: { title: string; ids: string[] }[] = [
  { title: 'השתלת שיער: סקירות, הנחיות ומידע רשמי', ids: ['E03', 'E04', 'E05', 'E06', 'E07', 'E08', 'E09', 'E10', 'E11', 'E12', 'E34'] },
  { title: 'אזור התורם ויחידות זקיקיות', ids: ['E01', 'E02', 'E13', 'E14'] },
  { title: 'שימור זקיקים', ids: ['E15', 'E16', 'E17'] },
  { title: 'השתלה בשיער ארוך וללא גילוח', ids: ['E21', 'E35'] },
  { title: 'גבות וריסים', ids: ['E18', 'E19', 'E20', 'E30', 'E36', 'E37', 'E38', 'E39'] },
  { title: 'נשירה תורשתית', ids: ['E24', 'E25'] },
  { title: 'PRF ו-iPRF', ids: ['E22', 'E23', 'E31'] },
  { title: 'מדידה ממוחשבת', ids: ['E26', 'E27', 'E32'] },
  { title: 'החלמה', ids: ['E28'] },
]

export default function MedicalReferencesPage() {
  const citedBy: Record<string, { slug: string; title: string }[]> = {}
  for (const a of articles) for (const s of articleSources(a)) (citedBy[s.id] ??= []).push({ slug: a.slug, title: a.title })
  const grouped = new Set(GROUPS.flatMap((g) => g.ids))
  const other = Object.keys(SOURCES).filter((id) => !grouped.has(id))
  const groups = other.length ? [...GROUPS, { title: 'מקורות נוספים', ids: other }] : GROUPS

  return (
    <InfoPage
      eyebrow="מקורות"
      title="מקורות רפואיים"
      intro="המקורות שעליהם מבוסס המידע באתר: ספרות מקצועית ומידע של גופי בריאות רשמיים. נתוני המרפאה אינם חלק מהספרות ומסומנים בנפרד. המקורות הם מידע כללי, ואינם מחליפים ייעוץ רפואי אישי."
      jsonLd={[
        {
          ...pageLd(url, 'מקורות רפואיים', 'CollectionPage'),
          hasPart: Object.values(SOURCES).map((s) => ({ '@type': 'CreativeWork', name: s.name, url: s.url })),
        },
      ]}
    >
      <p className="text-base text-charcoal/60 leading-relaxed">
        כל מקור ברשימה נבדק שהוא קיים ושפרטיו נכונים. אימות של מקור אינו אישור רפואי של המאמרים שמצטטים אותו. על אופן הבדיקה:{' '}
        <Link href="/editorial-policy" className="font-bold text-deep-red hover:underline">מדיניות התוכן</Link>.
      </p>
      {groups.map((g) => (
        <InfoSection key={g.title} title={g.title}>
          <ul className="space-y-5">
            {g.ids
              .filter((id) => SOURCES[id])
              .map((id) => {
                const s = SOURCES[id]
                return (
                  <li key={id} id={id.toLowerCase()} className="rounded-2xl bg-white ring-1 ring-black/5 p-5">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="block text-left text-base font-semibold text-charcoal hover:text-deep-red hover:underline"
                    >
                      {s.name}
                      {s.year && <span className="font-normal text-charcoal/50"> ({s.year})</span>}
                    </a>
                    {citedBy[id] && (
                      <p className="mt-3 text-sm text-charcoal/65">
                        מצוטט ב:{' '}
                        {citedBy[id].map((a, i) => (
                          <span key={a.slug}>
                            {i > 0 && ' · '}
                            <Link href={`/articles/${a.slug}`} className="hover:text-deep-red hover:underline">
                              {a.title}
                            </Link>
                          </span>
                        ))}
                      </p>
                    )}
                  </li>
                )
              })}
          </ul>
        </InfoSection>
      ))}
    </InfoPage>
  )
}
