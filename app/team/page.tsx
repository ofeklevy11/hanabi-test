import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'הצוות הרפואי | HANA BI',
  description:
    'הצוות הרפואי של HANA BI: רופאים מתמחים בהשתלות שיער ובהשתלות גבות, וצוות טכנאיות עם ניסיון מעל 5 שנים. התוצאה הטבעית נבנית בידי אנשי מקצוע.',
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: 'הצוות הרפואי | HANA BI',
    description: 'אנשי המקצוע מאחורי התוצאה הטבעית ב-HANA BI.',
    url: `${SITE_URL}/team`,
    locale: 'he_IL',
    type: 'website',
  },
}

const doctors = [
  {
    name: 'ד"ר מואמן מנצור',
    role: 'רופא מורשה · מומחה להשתלות שיער',
    tagline: 'שיער שנראה טבעי, בכל זווית.',
    intro:
      'ד"ר מנצור הוא רופא מורשה וחבר קבוע בהסתדרות הרפואית בישראל (הר"י). את לימודי הרפואה (MD) השלים בהצטיינות באוקראינה, ולאחר מכן ביצע את הסטאז\' בבית החולים בילינסון.',
    background:
      'בהמשך דרכו עבד במוקדי רפואה דחופה ובקופת חולים מכבי, שם צבר ניסיון קליני עשיר בדיאגנוסטיקה ובטיפול במטופלים. את עיקר העשייה המקצועית שלו הקדיש לתחום השתלות השיער, שיקום שיער ורפואה אסתטית.',
    training:
      'הכשרה מעשית אינטנסיבית באיסטנבול, במרפאת Polyclinic SRK של ד"ר סרקאן (Dr. Serkan), מהשמות המובילים בעולם בתחום השתלות השיער. שם למד באופן אישי ישיר את השיטות והטכניקות המדויקות ביותר.',
    expertise: [
      'השתלות שיער בשיטות FUE ו-DHI',
      'שיקום וחיזוק השיער',
      'רפואה אסתטית',
      'הדרכה והכשרת רופאים בתחום השתלות השיער',
    ],
    approach:
      'כל טיפול מתחיל באבחון קפדני ובבניית תוכנית אישית, לפי הצרכים, מבנה הפנים והציפיות שלכם. סטנדרטים רפואיים בינלאומיים, בלי פשרות, ובשקיפות מלאה לאורך כל הדרך.',
    href: '/hair-transplant',
    hrefLabel: 'השתלת שיער',
  },
  {
    name: 'ד"ר שריהאן פריג',
    role: 'רופאה מורשית · מומחית להשתלות גבות',
    tagline: 'גבה שמתאימה לפנים, לא לתבנית.',
    intro:
      'ד"ר פריג היא אחת הרופאות הראשונות בארץ שהתמחו בהשתלות גבות ובעיצוב מבנה הגבה, בתחום שבו הדיוק הוא כל העניין.',
    background:
      'היא עברה הכשרה בדרום קוריאה, ושם למדה את הפרוטוקולים המתקדמים בתחום. מכאן נובע הניסיון שלה בבניית גבה טבעית, שנראית כאילו הייתה שם תמיד.',
    training: 'הכשרה בדרום קוריאה, בפרוטוקולים המתקדמים של התחום.',
    expertise: [
      'השתלות גבות טבעיות',
      'עיצוב מבנה הגבה לפי צורת הפנים',
      'בחירת דרגת הצפיפות המתאימה',
      'בניית תוכנית מותאמת לכל מטופלת',
    ],
    approach:
      'לפני כל טיפול בוחנים יחד את הפנים, את הגבה הקיימת ואת המראה שאתן רוצות. המטרה היא גבה שמתאימה לכם בכל יום, בלי להרגיש מלאכותית.',
    href: '/eyebrows',
    hrefLabel: 'השתלת גבות',
  },
]

const steps = [
  { n: '01', t: 'התייעצות עם רופא', d: 'נבדוק מה מתאים לכם, בלי התחייבות לטיפול.' },
  { n: '02', t: 'תוכנית אישית', d: 'נבנה תוכנית לפי הפנים, הצרכים והציפיות שלכם.' },
  { n: '03', t: 'הטיפול בצוות', d: 'הרופא והטכנאיות עובדים יחד בכל שלב ההליך.' },
  { n: '04', t: 'ביקורות ומעקב', d: 'ביקורת ביום העשירי, בחודש השלישי ובתוצאה הסופית.' },
]

const personLd = (d: (typeof doctors)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: d.name,
  jobTitle: d.role,
  description: d.intro,
  medicalSpecialty: d.expertise,
  worksFor: { '@id': `${SITE_URL}/#clinic` },
  url: `${SITE_URL}/team`,
})

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-paper">
      {doctors.map((d) => (
        <script
          key={d.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd(d)).replace(/</g, '\\u003c') }}
        />
      ))}
      <Navbar />

      <header className="relative pt-36 md:pt-44 pb-14 md:pb-20 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-full opacity-70" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-bold tracking-wide text-deep-red">הצוות שלנו</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-charcoal leading-tight tracking-tight">
            האנשים מאחורי התוצאה
          </h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-7 text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            תוצאה טבעית לא נוצרת במכשיר לבד. היא נבנית בידי רופא מתמחה, בהבנה של מבנה הפנים, ובצוות שמכיר כל שלב.
          </p>
        </div>
      </header>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10 md:space-y-14">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] rounded-3xl bg-white p-7 md:p-12 ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)]"
            >
              <div>
                <span className="inline-flex rounded-full bg-deep-red/10 px-3.5 py-1 text-sm font-bold text-deep-red">
                  {d.role}
                </span>
                <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">{d.name}</h2>
                <p className="mt-4 text-xl md:text-2xl font-bold text-deep-red leading-snug">{d.tagline}</p>
                <div className="w-12 h-1 bg-deep-red rounded-full mt-6" aria-hidden />
                <h3 className="mt-8 text-sm font-bold tracking-wide text-charcoal/50">תחומי התמחות</h3>
                <ul className="mt-4 space-y-3">
                  {d.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-base text-charcoal/80 leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deep-red" aria-hidden />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
                <a href={d.href} className="mt-8 inline-block text-base font-bold text-deep-red hover:underline">
                  לטיפול: {d.hrefLabel} ←
                </a>
              </div>

              <div className="space-y-7">
                <p className="text-lg md:text-xl text-charcoal/85 leading-relaxed font-medium">{d.intro}</p>
                <div>
                  <h3 className="text-sm font-bold tracking-wide text-charcoal/50">רקע והכשרה</h3>
                  <p className="mt-3 text-lg text-charcoal/75 leading-relaxed">{d.background}</p>
                  <p className="mt-3 text-lg text-charcoal/75 leading-relaxed">{d.training}</p>
                </div>
                <div className="rounded-2xl bg-soft-grey p-6 md:p-7">
                  <h3 className="text-sm font-bold tracking-wide text-charcoal/50">הגישה שלנו</h3>
                  <p className="mt-3 text-lg text-charcoal/80 leading-relaxed">{d.approach}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl bg-charcoal text-white p-8 md:p-14 grid gap-8 lg:grid-cols-2 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-bold tracking-wide text-white/60">הצוות שמאחורי הרופאים</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">טכנאיות עם ניסיון של מעל 5 שנים</h2>
              <div className="w-12 h-1 bg-deep-red rounded-full mt-7" aria-hidden />
            </div>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                לצד הרופאים עובדות במרפאה טכנאיות מוסמכות עם ניסיון של מעל 5 שנים. הניסיון הזה מורגש בכל שלב, מההכנה
                וההליך ועד המעקב אחרי ההחלמה.
              </p>
              <p>
                הן מכירות את הפרוטוקולים לפרטי פרטים, ולכן כל טיפול מתנהל בדיוק ובסבלנות, עם רציפות מלאה מההתחלה ועד הסוף.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-bold tracking-wide text-deep-red">הטכנולוגיה שלנו</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">
            המכשור והפרוטוקולים שייכים לצוות שלנו
          </h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-8 text-lg md:text-xl text-charcoal/75 leading-relaxed">
            הטכנולוגיות והפרוטוקולים של HANA BI נבחרו, נלמדו ומופעלים בידי הרופאים והטכנאיות שלנו. כל מכשיר וכל שלב
            בתהליך נמצאים באחריות הצוות שמכיר אותם לעומק, וזו הסיבה שאנחנו מציגים אותם בשמם.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-charcoal">איך זה עובד אצלנו</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
                <span className="text-3xl font-extrabold text-deep-red">{s.n}</span>
                <h3 className="mt-4 text-xl font-bold text-charcoal">{s.t}</h3>
                <p className="mt-3 text-base text-charcoal/70 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">רוצים להכיר אותנו?</h2>
          <p className="mt-5 text-lg text-charcoal/70 leading-relaxed">
            נשמח לשבת איתכם, לבחון את ההתאמה ולהסביר את כל האפשרויות.
          </p>
          <a
            href="/#appointment"
            className="mt-8 inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            לתיאום התייעצות
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
