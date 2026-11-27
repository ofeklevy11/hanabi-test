import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoList, InfoPage, InfoSection, pageLd } from '@/components/InfoPage'
import { SITE_URL } from '@/lib/articles'
import { SOURCES } from '@/lib/sources'

const url = `${SITE_URL}/technology`
const title = 'הטכנולוגיה ב-HANA BI: מדידה, תכנון ושימור זקיקים | HANA BI'
const description =
  'אילו מערכות משמשות ב-HANA BI למדידת שיער, לתכנון השתלה ולשימור זקיקים, מה כל מערכת נועדה לעשות לפי היצרן, איך משתמשים בה במרפאה ומה ידוע עליה ממחקר.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, locale: 'he_IL', type: 'website' },
}

// Each system is described on three separate levels: what the manufacturer says it is for,
// how the clinic uses it, and what independent evidence exists. Clinic use is as reported by the clinic.
const systems = [
  {
    group: 'מדידה ותיעוד',
    items: [
      {
        name: 'FotoFinder Trichoscale DX · Canfield HairMetrix',
        maker: 'ניתוח ממוחשב של תמונות מוגדלות של הקרקפת: ספירת שערות, צפיפות, עובי שערה והשוואה בין ביקורים.',
        clinic: 'מדידת צפיפות ועובי לפני ההליך, ותיעוד להשוואה בביקורי המעקב.',
        evidence: ['E02', 'E26'],
        evidenceText: 'מדידה בהגדלה היא חלק מקובל בהערכה לפני השתלה. סקירה של כלי ניתוח מבוססי AI מציינת שחלק מהנתונים על דיוקם מגיע מהיצרנים עצמם.',
      },
      {
        name: 'TrichoScan FAST AI',
        maker: 'לפי היצרן, כלי למדידה ולתיעוד קוסמטיים, שאינו אבחנה רפואית ואינו מיועד להחלטות אבחון או טיפול.',
        clinic: 'תיעוד של צפיפות ועובי. הנתונים משמשים לתיעוד ולהשוואה, והרופא הוא שמפרש אותם.',
        evidence: ['E32', 'E27'],
        evidenceText: 'במחקר על גרסה ישנה של מערכת ניתוח אוטומטית מאותה משפחה תועדו שגיאות זיהוי, ולכן הנתונים נבדקים על ידי הצוות.',
      },
    ],
  },
  {
    group: 'תכנון השתלה',
    items: [
      {
        name: 'TrichoLAB 3D Transplanner',
        maker: 'מודל תלת-ממדי של הראש לתכנון השתלה, להערכת אזור התורם ולהדמיית קו שיער.',
        clinic: 'מדידת האזור הדליל ואזור התורם, והמחשה של התוכנית למטופל.',
        evidence: ['E26'],
        evidenceText: 'הדמיה של קו שיער היא המחשה של התוכנית, ולא חיזוי של התוצאה. במקורות שנבדקו לא נמצאו מחקרים עצמאיים שבדקו את דיוק התחזית של כלי כזה.',
      },
    ],
  },
  {
    group: 'שימור זקיקים',
    items: [
      {
        name: 'Cole Instruments Electric Single Chiller · Hairtas Graft Chiller',
        maker: 'כלים מבוקרי טמפרטורה לשימור הזקיקים בין הלקיחה להשתלה. הם אינם מקררים את ראש המטופל.',
        clinic: 'שימור הזקיקים בתמיסה בכלי מבוקר טמפרטורה, מרגע הלקיחה ועד ההשתלה.',
        evidence: ['E06', 'E17', 'E15', 'E16'],
        evidenceText:
          'הסכמת מומחים ממליצה לשמור את השתלים בתמיסות שימור מתאימות. סקירה של גורמי ההישרדות מדגישה לחות, טמפרטורה וזמן מחוץ לגוף. מחקרי מעבדה על טמפרטורת השימור הגיעו למסקנות שונות, וחלקם מצאו הישרדות טובה יותר בטמפרטורת גוף מאשר בקירור. לכן איננו מייחסים למכשיר לבדו שיעור קליטה כלשהו.',
      },
    ],
  },
]

export default function TechnologyPage() {
  return (
    <InfoPage
      eyebrow="טכנולוגיה"
      title="הטכנולוגיה ב-HANA BI"
      intro="במרפאה משתמשים במערכות ממוחשבות למדידת השיער והקרקפת, לתכנון ההשתלה ולתיעוד ההתקדמות, ובכלים מבוקרי טמפרטורה לשימור הזקיקים בזמן ההליך. המערכות עוזרות לצוות הרפואי. הן אינן מחליפות בדיקה ואבחון של רופא."
      jsonLd={[pageLd(url, 'הטכנולוגיה ב-HANA BI')]}
    >
      <p className="text-base text-charcoal/60 leading-relaxed">
        לכל מערכת מופיעים בנפרד שלושה דברים: מה היא נועדה לעשות לפי היצרן, איך משתמשים בה במרפאה, ומה ידוע עליה ממקורות עצמאיים. קיום של מוצר
        ותיאור היצרן אינם מעידים שהוא משפר תוצאות קליניות.
      </p>

      {systems.map((g) => (
        <InfoSection key={g.group} title={g.group}>
          {g.items.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white ring-1 ring-black/5 p-6 md:p-7">
              <h3 className="text-xl font-bold text-charcoal" dir="ltr" style={{ textAlign: 'right' }}>
                {s.name}
              </h3>
              <dl className="mt-4 space-y-3 text-base md:text-lg">
                <div>
                  <dt className="font-bold text-deep-red">לפי היצרן</dt>
                  <dd className="text-charcoal/80">{s.maker}</dd>
                </div>
                <div>
                  <dt className="font-bold text-deep-red">השימוש במרפאה</dt>
                  <dd className="text-charcoal/80">{s.clinic}</dd>
                </div>
                <div>
                  <dt className="font-bold text-deep-red">מה ידוע ממחקר</dt>
                  <dd className="text-charcoal/80">{s.evidenceText}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-charcoal/55" dir="ltr" style={{ textAlign: 'right' }}>
                {s.evidence.map((id, i) => (
                  <span key={id}>
                    {i > 0 && ' · '}
                    <a href={SOURCES[id].url} target="_blank" rel="noopener noreferrer" className="hover:text-deep-red hover:underline">
                      {SOURCES[id].name}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </InfoSection>
      ))}

      <InfoSection title="נתוני המעקב של המרפאה">
        <p>
          לפי ספירות ומדידות שבוצעו במסגרת המעקב הפנימי של מרפאת HANA BI, שיעור קליטת הזקיקים שנמדד עולה על 98%. זהו נתון פנימי של המרפאה ולא
          ממצא של מחקר חיצוני. הוא מתייחס לתהליך כולו ולא למכשיר מסוים, ואינו הבטחה לתוצאה אצל מטופל מסוים.
        </p>
      </InfoSection>

      <InfoSection title="מכשור ההשתלה">
        <p>מכשור מיקרו-כירורגי: כלי החדרה (implanters) בגדלים שונים לפי עובי השערה, והגדלה אופטית למיון היחידות הזקיקיות לפני ההשתלה.</p>
      </InfoSection>

      <InfoSection title="מה המערכות לא עושות">
        <InfoList
          items={[
            'הן לא מאבחנות. האבחון וההחלטה על הטיפול הם של הרופא.',
            'הן עלולות לטעות, למשל בזיהוי שערות דקות מאוד.',
            'הן לא מבטיחות תוצאה.',
          ]}
        />
        <p>
          להרחבה: <Link href="/articles/ai-hair-measurement" className="font-bold text-deep-red hover:underline">מערכות AI למדידת שיער</Link> ·{' '}
          <Link href="/articles/graft-cooling-system" className="font-bold text-deep-red hover:underline">שימור וקירור זקיקים</Link> ·{' '}
          <Link href="/articles/measuring-results" className="font-bold text-deep-red hover:underline">איך מודדים תוצאות</Link>
        </p>
      </InfoSection>
    </InfoPage>
  )
}
