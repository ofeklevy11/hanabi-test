import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'הצוות הרפואי | HANA BI',
  description:
    'הצוות הרפואי של HANA BI: רופאים מורשים, חברי ההסתדרות הרפואית בישראל, וטכנאיות קליניות עם מעל 5 שנות ניסיון, הפועלים לפי הפרוטוקולים הקליניים של יפן ודרום קוריאה.',
  alternates: { canonical: `${SITE_URL}/team` },
  openGraph: {
    title: 'הצוות הרפואי | HANA BI',
    description: 'רופאים מורשים וצוות קליני הפועלים לפי הפרוטוקולים של יפן ודרום קוריאה.',
    url: `${SITE_URL}/team`,
    locale: 'he_IL',
    type: 'website',
  },
}

const doctors = [
  {
    name: 'ד"ר מואמן מנצור',
    role: 'רופא מורשה · מומחה להשתלות שיער, גבות וזקן',
    tagline: 'שיער שנראה טבעי, בכל זווית.',
    intro:
      'ד"ר מואמן מנצור הוא רופא מורשה בישראל וחבר ההסתדרות הרפואית בישראל (הר"י). את לימודי הרפואה (MD) השלים בהצטיינות באוקראינה, ואת הסטאז\' ביצע בבית החולים בילינסון.',
    background:
      'ד"ר מנצור הוא מומחה עתיר ניסיון קליני בהשתלות שיער, גבות וזקן בטכניקה ההיברידית (FUE + DHI). לאורך שנים רבות ביצע אלפי פרוצדורות מוצלחות, לצד עבודה במוקדי רפואה דחופה ובמכבי שירותי בריאות, שם צבר ניסיון רחב בדיאגנוסטיקה ובטיפול במטופלים.',
    training:
      'בוגר הכשרות קליניות מתקדמות באיסטנבול, במרפאת Polyclinic SRK של ד"ר סרקאן (Dr. Serkan), ומוסמך בפרוטוקולים המיקרו-כירורגיים של HANA BI. לצד עבודתו הקלינית הוא משמש מרצה ומנחה מקצועי המכשיר רופאים בתחום השתלות השיער.',
    expertise: [
      'השתלות שיער לגברים ולנשים בטכניקה היברידית (FUE + DHI)',
      'השתלת זקן אנטומית',
      'השתלות גבות',
      'לקיחת הזקיקים בטכנולוגיית Micro-Extraction',
      'הכשרת רופאים בתחום השתלות השיער',
    ],
    approach:
      'כל טיפול מתחיל באבחון קליני מבוסס AI ובבניית פרוטוקול אישי, לפי מבנה הפנים, אזור התורם והמטרה של כל מטופל. סטנדרטים רפואיים בינלאומיים, ללא פשרות ובשקיפות מלאה.',
    href: '/hair-transplant',
    hrefLabel: 'השתלת שיער',
  },
  {
    name: 'ד"ר שריהאן פריג\'',
    role: 'רופאה מורשית · מומחית לשחזור אסתטי מיקרו-כירורגי',
    tagline: 'גבה שמתאימה לפנים, לא לתבנית.',
    intro:
      'ד"ר שריהאן פריג\' היא רופאה מורשית בישראל וחברת ההסתדרות הרפואית בישראל (הר"י), ואחת הרופאות הראשונות בארץ שהתמחו בהשתלות גבות.',
    background:
      'בעלת ניסיון קליני עשיר בשחזור אסתטי מיקרו-כירורגי: השתלות שיער, גבות וריסים, וטיפולי התחדשות ביולוגית (iPRF).',
    training:
      'בוגרת הכשרה קלינית מתקדמת במרכזי האסתטיקה הרפואית והשתלות השיער המובילים בסיאול, דרום קוריאה.',
    expertise: [
      'השתלות גבות בזקיקי Singles ממוינים במיקרוסקופ',
      'שחזור ריסים מיקרו-כירורגי בארכיטקטורת C-Curve',
      'השתלות שיער',
      'טיפולי התחדשות ביולוגית (iPRF)',
    ],
    approach:
      'לפני כל טיפול נבחנים מבנה הפנים, הגבה הקיימת והמראה הרצוי, ונבנה פרוטוקול אישי לתוצאה טבעית לכל החיים.',
    href: '/eyebrows',
    hrefLabel: 'השתלת גבות',
  },
]

const protocols = [
  'מחטי Nano-Tools יפניות, הדקות פי 3 מהסטנדרט ומאפשרות צפיפות גבוהה ב-40%',
  'מכשור מיקרו-כירורגי מסיאול, דרום קוריאה',
  'טכניקה היברידית המשלבת FUE ו-DHI',
  'סריקת AI לניתוח עומק הרקמה',
  'מערכת קירור זקיקים שאינה מקררת את ראש המטופל: הזקיקים נשמרים בכלי ייעודי מבוקר טמפרטורה מחוץ לקרקפת, לשיעור קליטה של 98%',
]

const steps = [
  { n: '01', t: 'אבחון קליני מבוסס AI', d: 'סריקת קרקפת ועור לניתוח עומק הרקמה ואזור התורם.' },
  { n: '02', t: 'פרוטוקול אישי', d: 'תכנון הצפיפות, הזוויות וקו השיער לפי מבנה הפנים.' },
  { n: '03', t: 'לקיחת הזקיקים וההשתלה', d: 'בטכניקה ההיברידית (FUE + DHI), עם שימור הזקיקים במערכת הקירור.' },
  { n: '04', t: 'ביקורות ומעקב', d: 'ביקורת ביום העשירי, בחודש השלישי ובתוצאה הסופית.' },
]

// medicalSpecialty takes schema.org's fixed list of recognised specialties, so the doctors' areas of work go in knowsAbout.
// jobTitle stays with the licence wording until specialist recognition is verified (see HANABI_EVIDENCE_MATRIX C19).
const doctorIds: Record<string, string> = {
  'ד"ר מואמן מנצור': `${SITE_URL}/team#dr-moamen-mansour`,
  'ד"ר שריהאן פריג\'': `${SITE_URL}/team#dr-sherihan-frej`,
}

const personLd = (d: (typeof doctors)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': doctorIds[d.name],
  name: d.name,
  jobTitle: d.role.split('·')[0].trim(),
  // description left out until the biographical claims on the page are verified (see HANABI_EVIDENCE_MATRIX_V3).
  knowsAbout: d.expertise,
  memberOf: { '@type': 'Organization', name: 'ההסתדרות הרפואית בישראל' },
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
            הצוות הרפואי של HANA BI
          </h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-7 text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            רופאים מורשים, חברי ההסתדרות הרפואית בישראל, וצוות טכנאיות קליניות הפועלים לפי הפרוטוקולים של יפן ודרום
            קוריאה.
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
                  <h3 className="text-sm font-bold tracking-wide text-charcoal/50">הגישה הקלינית</h3>
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
              <p className="text-sm font-bold tracking-wide text-white/60">הצוות הקליני</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">טכנאיות קליניות עם מעל 5 שנות ניסיון</h2>
              <div className="w-12 h-1 bg-deep-red rounded-full mt-7" aria-hidden />
            </div>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                כל אחת מצוות הטכנאיות הקליניות ב-HANA BI מחזיקה במעל 5 שנות ניסיון מעשי, עם התמחות במיון זקיקים תחת
                מיקרוסקופ: בידוד זקיקי Singles ושיערות משי (Silk Hair), בקרת זוויות הצמיחה ותפעול מערכת קירור הזקיקים.
              </p>
              <p>
                הצוות פועל לצד הרופאים בכל שלבי הטיפול, מהאבחון ועד המעקב אחרי ההחלמה, ברציפות מלאה ובדיוק קליני.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-sm font-bold tracking-wide text-deep-red">הסטנדרט הקליני</p>
          <h2 className="mt-4 text-center text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">
            הפרוטוקולים של יפן ודרום קוריאה
          </h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-8 text-center text-lg md:text-xl text-charcoal/75 leading-relaxed">
            הבידול של HANA BI נשען על הפרוטוקולים הקליניים של יפן ודרום קוריאה, שהצוות שלנו מפעיל בכל טיפול:
          </p>
          <ul className="mt-8 space-y-4">
            {protocols.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-black/5 text-lg text-charcoal/80 leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deep-red" aria-hidden />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-charcoal">התהליך הקליני</h2>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">תיאום אבחון קליני</h2>
          <p className="mt-5 text-lg text-charcoal/70 leading-relaxed">
            תאמו אבחון קליני מבוסס AI לקביעת פרוטוקול אישי לתוצאה לכל החיים.
          </p>
          <a
            href="/#appointment"
            className="mt-8 inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            לתיאום אבחון טכנולוגי
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
