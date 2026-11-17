import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'הצוות הרפואי | HANA BI',
  description:
    'הצוות הרפואי של HANA BI: רופאים מתמחים בהשתלות שיער ובהשתלות גבות, וצוות טכנאיות עם ניסיון מעל 5 שנים.',
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: 'הצוות הרפואי | HANA BI',
    description: 'רופאים מתמחים וצוות טכנאיות מנוסה במרפאת HANA BI.',
    url: `${SITE_URL}/team`,
    locale: 'he_IL',
    type: 'website',
  },
}

const doctors = [
  {
    name: 'ד"ר מואמן מנצור',
    role: 'רופא מורשה, מתמחה בהשתלות שיער',
    specialty: 'השתלות שיער, שיקום שיער ורפואה אסתטית',
    paragraphs: [
      'ד"ר מנצור הוא רופא מורשה וחבר קבוע בהסתדרות הרפואית בישראל (הר"י). את לימודי הרפואה (MD) השלים בהצטיינות באוקראינה, ולאחר מכן ביצע את הסטאז\' בבית החולים בילינסון. בהמשך דרכו עבד כרופא במוקדי רפואה דחופה ובקופת חולים מכבי, שם צבר ניסיון קליני עשיר בדיאגנוסטיקה ובטיפול במטופלים.',
      'את עיקר העשייה המקצועית שלו הקדיש ד"ר מנצור לתחום השתלות השיער, שיקום שיער ורפואה אסתטית. הוא עבר השתלמויות מתקדמות אצל מומחים בעולם, ובראשן הכשרה מעשית אינטנסיבית באיסטנבול במרפאת Polyclinic SRK של ד"ר סרקאן (Dr. Serkan), מהשמות המובילים בעולם בתחום השתלות השיער. שם למד באופן אישי את השיטות והטכניקות המדויקות ביותר.',
      'כיום ד"ר מנצור מתמחה בביצוע השתלות שיער בשיטות המתקדמות ביותר (FUE ו-DHI), לצד טיפולים לשימור ולחיזוק השיער. לצד עבודתו הקלינית הוא מרצה ומנחה מקצועי המכשיר רופאים בתחום השתלות השיער.',
      'ד"ר מנצור ידוע בגישה אישית, קשובה ושקופה. כל תהליך טיפולי מתחיל באבחון קפדני ובבניית תוכנית טיפול המותאמת לצרכים, למבנה הפנים ולציפיות של המטופל, תוך הקפדה על סטנדרטים רפואיים בינלאומיים.',
    ],
    href: '/hair-transplant',
    hrefLabel: 'השתלת שיער',
  },
  {
    name: 'ד"ר שריהאן פריג',
    role: 'רופאה מורשית, מתמחה בהשתלות גבות',
    specialty: 'השתלות גבות ועיצוב מבנה הגבה',
    paragraphs: [
      'ד"ר שריהאן פריג היא אחת הרופאות הראשונות בארץ שמתמחות בהשתלות גבות ובעיצוב מבנה הגבה.',
      'היא עברה הכשרה בדרום קוריאה, ולמדה שם את הפרוטוקולים המתקדמים בתחום. ההכשרה הזו מאפשרת לה לבנות תוכנית לכל מטופלת, בהתאם למבנה הפנים ולצורת הגבה הרצויה.',
    ],
    href: '/eyebrows',
    hrefLabel: 'השתלת גבות',
  },
]

const personLd = (d: (typeof doctors)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: d.name,
  jobTitle: d.role,
  description: d.paragraphs[0],
  medicalSpecialty: d.specialty,
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

      <header className="relative pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-full opacity-70" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-bold tracking-wide text-deep-red">הצוות שלנו</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-charcoal leading-tight tracking-tight">
            הצוות הרפואי
          </h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-7 text-lg md:text-xl text-charcoal/65 max-w-2xl mx-auto leading-relaxed">
            רופאים מתמחים וצוות טכנאיות מנוסה, שעובדים עם הטכנולוגיות והפרוטוקולים המתקדמים של HANA BI.
          </p>
        </div>
      </header>

      <section className="pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16 md:space-y-20">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start rounded-3xl bg-white p-7 md:p-12 ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)]"
            >
              <div>
                <span className="inline-flex rounded-full bg-deep-red/10 px-3.5 py-1 text-sm font-bold text-deep-red">
                  {d.specialty}
                </span>
                <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">{d.name}</h2>
                <p className="mt-3 text-base text-charcoal/65 leading-relaxed">{d.role}</p>
                <a
                  href={d.href}
                  className="mt-6 inline-block text-base font-bold text-deep-red hover:underline"
                >
                  לטיפול: {d.hrefLabel} ←
                </a>
              </div>
              <div className="space-y-5">
                {d.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-charcoal/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-3xl bg-charcoal text-white p-7 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">צוות הטכנאיות</h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
              לצד הרופאים עובדות במרפאה טכנאיות מוסמכות עם ניסיון של מעל 5 שנים. הן עובדות בכל שלבי הטיפול,
              מההכנה וההליך ועד המעקב אחרי ההחלמה, ושותפות לתהליך שמבטיח דיוק ורציפות לאורך הדרך.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg text-charcoal/70 leading-relaxed">
            רוצים להכיר את הצוות ולשמוע מה מתאים לכם? נשמח לקבוע התייעצות.
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
