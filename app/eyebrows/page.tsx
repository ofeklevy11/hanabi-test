'use client'

import Navbar from '@/components/Navbar'
import { submitLead } from '@/lib/submitLead'
import Footer from '@/components/Footer'
import TreatmentFaq from '@/components/TreatmentFaq'
import { Reveal, Chapter, DetailList, RecoveryTimeline, AutoplayVideo, LoopVideo, VideoWall, fieldClassName, type TimelineStep } from '@/components/TreatmentBlocks'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Eyebrows() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const youtubeVideos = [
    'E2LKatm83hE',
    'Q55GLiQvmmA',
    '7B9dVNpBARc',
    'IC03yCTdwrs',
    'TOYRuu8LHhI',
    'wwSN_z_xcOY',
    '7GeJuoFTees',
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = { ...formData, source: 'דף השתלת גבות', submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }) }
      if (await submitLead(payload)) router.push('/thank-you')
    } catch (error) {
      alert('אירעה שגיאה, אנא נסה שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Density levels. Each level lists its media in display order: images or a video.
  // Files go in public/files/eyebrows/. An empty src shows a labelled placeholder.
  const densityLevels: { name: string; note: string; media: { label: string; src: string; video?: boolean }[] }[] = [
    {
      name: 'צפיפות מינימלית',
      note: 'מראה עדין וטבעי',
      media: [
        { label: 'לפני', src: '/files/eyebrows/density-1-before.jpg' },
        { label: 'אחרי', src: '/files/eyebrows/density-1-after.jpg' },
      ],
    },
    {
      name: 'צפיפות בינונית',
      note: 'מראה מלא ומאוזן',
      media: [
        { label: 'לפני', src: '/files/eyebrows/density-2-before-1.jpg' },
        { label: 'לפני', src: '/files/eyebrows/density-2-before-2.jpg' },
        { label: 'תוצאה סופית', src: '/files/eyebrows/density-2-result.mp4', video: true },
      ],
    },
    {
      name: 'צפיפות מקסימלית',
      note: 'מראה דחוס, עשיר ודומיננטי',
      media: [
        { label: 'לפני', src: '/files/eyebrows/density-3-before.jpg' },
        { label: 'אחרי', src: '/files/eyebrows/density-3-result.mp4', video: true },
      ],
    },
  ]

  const timeline: TimelineStep[] = [
    {
      kind: 'stage',
      step: 1,
      title: '10 ימי התקבעות',
      when: 'ימים 1-10',
      text: 'בעשרת הימים הראשונים לאחר ההשתלה מתרחש תהליך ביולוגי של קליטת הזקיקים ברקמה החדשה. בימים אלו תיתכן הופעה של גלדים נקודתיים זעירים, המעידים על תהליך ריפוי תקין של העור. בשלב זה חיוני להימנע ממגע באזור כדי לאפשר לשורשים להתבסס במקומם ולהתחבר לאספקת הדם.',
    },
    {
      kind: 'check',
      title: 'תחנת ביקורת ראשונה',
      when: 'יום 10',
      text: 'בדיוק עשרה ימים לאחר ההליך, אנו נפגשים בקליניקה לביקורת ראשונה. במפגש זה הצוות המקצועי מבצע חפיפה עדינה ומבוקרת להסרת הגלדים. בסיום הטיפול, הגבות נקיות לחלוטין, העור חוזר למרקמו החלק והמראה המתקבל נקי ואסתטי.',
    },
    {
      kind: 'stage',
      step: 2,
      title: 'התחדשות השורש',
      when: 'חודש 1 עד 3',
      text: 'בשלב זה מתרחש תהליך טבעי המכונה Shock Loss. השיער המושתל נושר, אך זהו סימן חיובי המעיד על הצלחת התהליך. השורש עצמו נשאר חי ובריא מתחת לעור, ונכנס לשלב של מנוחה ואגירת אנרגיה לקראת הצמיחה המחודשת.',
    },
    {
      kind: 'check',
      title: 'תחנת ביקורת שנייה',
      when: 'חודש 3',
      text: 'שלושה חודשים מהטיפול, אנו נפגשים לביקורת אמצע. מטרת המפגש היא לוודא שתהליך הנשירה הסתיים ושהזקיקים עוברים ממצב מנוחה למצב פעיל. בשלב זה אנו מצפים לראות את הניצנים הראשונים של השיער החדש והקבוע.',
    },
    {
      kind: 'stage',
      step: 3,
      title: 'צמיחה והתעבות',
      when: 'חודשים 4-10',
      text: 'החל מהחודש הרביעי מתחילה הצמיחה המשמעותית. מחודש לחודש הגבה מתמלאת, השיערות הופכות עבות וחיוניות יותר, והמבנה המעוצב מתחיל לקבל את נפחו הסופי תוך השתלבות הרמונית בתווי הפנים.',
    },
    {
      kind: 'final',
      title: 'תחנת ביקורת סופית',
      when: 'שנה מהטיפול',
      text: 'בתום השנה הראשונה אנו נפגשים למעמד הסיכום. בשלב זה תהליך הצמיחה הושלם במלואו. אנו מבצעים בדיקת איכות סופית של העיצוב, צפיפות השיער וכיווני הצמיחה, כדי לוודא שהתוצאה היא מושלמת, טבעית ותישאר איתך לכל החיים.',
    },
  ]

  return (
    <main ref={containerRef} className="min-h-screen bg-white relative overflow-hidden">
      <Navbar transparent />

      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/files/hero/eyebrows.jpg"
            alt="השתלת גבות טבעית - HANA BI"
            fill
            className="object-cover"
            quality={95}
            priority
            sizes="100vw"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom darkening to mark section end */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Hero Content - Centered over image */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center space-y-6 max-w-6xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[1.05] tracking-tight"
            >
              השתלת גבות טבעית
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-deep-red">לא ציור, ולא קעקוע</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal">
                שיער אמיתי שנשאר לכל החיים
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="pt-4"
            >
              <a
                href="#appointment"
                className="inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                לתיאום אבחון טכנולוגי
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Opening statement */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <span
          className="pointer-events-none select-none absolute -top-10 -left-10 md:left-8 text-[18rem] md:text-[30rem] leading-none text-deep-red/[0.04] font-bold"
          aria-hidden
        >
          花
        </span>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-x-16 gap-y-10">
          <Reveal className="lg:col-span-7">
            <p className="text-4xl md:text-6xl font-extrabold text-charcoal leading-[1.15] tracking-tight">
              הגבה היא מבנה אנטומי מתוחכם
            </p>
            <p className="text-2xl md:text-3xl font-light text-charcoal/60 leading-snug mt-6">
              המורכב ממאות זקיקים בעלי זווית וכיוון ייחודיים
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:self-end border-t-2 border-deep-red pt-6">
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
              ב-<span className="text-deep-red font-bold">Hana bi</span> אנו מתמחים בשחזור אנטומי של סידור ומבנה הגבות, תוך התאמה טבעית ומדויקת לתווי הפנים הייחודיים של כל מטופל
            </p>
          </Reveal>
        </div>
      </section>

      {/* Client videos across the full width */}
      <section className="relative bg-paper py-20 md:py-28 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-80" aria-hidden />
        <Reveal className="relative text-center px-6 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal tracking-tight">לקוחות שעברו את התהליך</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
        </Reveal>
        <div className="relative max-w-[1800px] mx-auto">
          <VideoWall ids={youtubeVideos} label="סרטון לקוחה" />
        </div>
        <p className="lg:hidden text-center text-sm text-charcoal/50 mt-5">החליקו הצידה כדי לראות את כל הסרטונים</p>
      </section>

      {/* The two technique chapters */}
      <section className="bg-white pt-8 md:pt-12 pb-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Chapter
            number="01"
            title="הדרך לתוצאה מדויקת וטבעית מתחילה בסינגלים"
            image="/assets/1.jpeg"
            alt="הדרך לתוצאה מדויקת וטבעית מתחילה בסינגלים"
            imageWidth={1600}
            imageHeight={872}
            lead="כדי להבין את ההבדל, צריך להסתכל על השורשים."
          >
            <p>בשיער הראש שלנו, הזקיקים צומחים בדרך כלל בקבוצות (משפחות) של 2, 3 ואפילו 4 שיערות יחד. אלו נקראים דאבלים (Doubles) וטריפלים (Triples). לעומת זאת, בגבה טבעית יש אך ורק זקיקים בודדים (Singles).</p>
            <p>הטעות הנפוצה בקליניקות רבות היא שימוש בזקיקים כפולים מהראש כדי ליצור נפח מהיר. התוצאה במקרים אלו היא מראה גס, צפוף מידי ולא טבעי.</p>
            <p>אצלנו ב-HANA BI: אנו ממיינים את השיערות במיקרוסקופ ומבודדים רק את הזקיקים הבודדים והעדינים ביותר. רק כך ניתן ליצור גבה רכה ואוורירית שנראית כאילו נולדת איתה.</p>
          </Chapter>

          {/* What it looks like during the procedure */}
          <div className="border-t border-charcoal/10 py-12 md:py-20 grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-center">
            <Reveal className="text-center md:text-right">
              <h3 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">אז איך זה נראה בזמן ההשתלה?</h3>
              <div className="w-16 h-1 bg-deep-red rounded-full mt-7 mx-auto md:mx-0" aria-hidden />
            </Reveal>
            <Reveal delay={0.15} className="mx-auto w-full max-w-[340px] md:w-[340px]">
              <div className="rounded-[2.25rem] bg-white ring-1 ring-charcoal/10 p-2.5 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.75rem] overflow-hidden bg-black">
                  <AutoplayVideo src="/files/eyebrows/during-procedure.mp4" label="כך נראית השתלת גבות בזמן הטיפול" />
                </div>
              </div>
            </Reveal>
          </div>

          <Chapter
            number="02"
            title="טכנולוגיה ייעודית מסיאול, קוריאה"
            image="/assets/2.jpeg"
            alt="טכנולוגיה ייעודית מסיאול, קוריאה"
            imageWidth={1600}
            imageHeight={872}
            lead="טכנולוגיה ייעודית וכלים מיקרוסקופיים שפותחו בסיאול, קוריאה – חלוצת עולם האסתטיקה והשתלות השיער. באמצעות המכשור הקוריאני המתקדם, אנו מבצעים אופטימיזציה של כל זקיק:"
          >
            <DetailList
              items={[
                { term: 'זיהוי עקומת השערה', text: 'זיהוי מיידי של כיוון העיקול הטבעי של השערה עוד לפני ההשתלה.' },
                { term: 'כיול זוויות מיקרוסקופי', text: 'סיבוב והטמעת הזקיק בזווית המדויקת ביותר ביחס לפני השטח של העור.' },
                { term: 'זרימה הרמונית', text: "הבטחת השתלבות מושלמת במבנה ה'מניפה' הטבעי של הגבה, ללא שיערות סוררות או צמיחה הפוכה." },
              ]}
            />
          </Chapter>

        </div>
      </section>

      {/* Density choice */}
      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-tight tracking-tight">בחירת דרגת צפיפות ועיצוב מבנה הגבה</h2>
            <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          </Reveal>

        <ol className="divide-y divide-charcoal/10 border-y border-charcoal/10">
          {densityLevels.map(({ name, note, media }, i) => {
            // The result video is the hero: larger, and centred between the "before" photos when there are two
            const hero = media.find((item) => item.video)
            const others = media.filter((item) => !item.video)
            const ordered = hero ? (others.length > 1 ? [others[0], hero, ...others.slice(1)] : [...others, hero]) : media
            const layout = !hero
              ? 'grid-cols-2 max-w-3xl'
              : others.length > 1
                ? 'grid-cols-2 md:grid-cols-[1fr_1.55fr_1fr] max-w-5xl'
                : 'grid-cols-2 md:grid-cols-[1fr_1.55fr] max-w-4xl'
            return (
              <li key={name}>
                <Reveal className="py-10 md:py-14">
                  <div className="flex items-center justify-center gap-5 mb-7 md:mb-9">
                    <span className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-deep-red text-deep-red text-xl md:text-2xl font-bold flex items-center justify-center" aria-hidden>
                      {i + 1}
                    </span>
                    <span className="text-2xl md:text-4xl font-bold text-charcoal tracking-tight leading-tight">
                      {name} <span className="block md:inline font-light text-charcoal/60 text-lg md:text-2xl mt-1 md:mt-0">({note})</span>
                    </span>
                  </div>

                  <div className={`grid gap-3 md:gap-5 items-center mx-auto ${layout}`}>
                    {ordered.map((item, m) => {
                      const isHero = item === hero
                      return (
                        <figure
                          key={m}
                          className={`relative aspect-[4/3] overflow-hidden ${
                            isHero
                              ? `rounded-3xl bg-black ring-1 ring-black/5 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.55)] ${others.length > 1 ? 'col-span-2 md:col-span-1 order-last md:order-none' : ''}`
                              : `rounded-2xl ${item.src ? 'bg-black ring-1 ring-black/5' : ''}`
                          }`}
                        >
                          {!item.src ? (
                            <figcaption className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-dashed border-charcoal/20 bg-soft-grey text-charcoal/40 text-lg font-bold">
                              {item.label}
                            </figcaption>
                          ) : (
                            <>
                              {item.video ? (
                                <LoopVideo src={item.src} className="absolute inset-0 w-full h-full object-cover" label={`${name} - ${item.label}`} />
                              ) : (
                                <Image src={item.src} alt={`${name} - ${item.label}`} fill className="object-cover" quality={95} sizes="(max-width: 768px) 50vw, 380px" />
                              )}
                              <figcaption
                                className={`absolute bottom-2.5 right-2.5 text-sm font-bold rounded-full px-3.5 py-1 ${isHero ? 'bg-deep-red text-white md:text-base md:px-4 md:py-1.5' : 'bg-white/90 text-charcoal'}`}
                              >
                                {item.label}
                              </figcaption>
                            </>
                          )}
                        </figure>
                      )
                    })}
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
        </div>
      </section>

      {/* Recovery journey timeline */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-tight tracking-tight">השלבים שלאחר השתלת הגבות</h2>
            <p className="text-2xl md:text-3xl font-light text-deep-red mt-5">ליווי רפואי מלא מיום הטיפול ועד לתוצאה הסופית</p>
            <p className="text-lg md:text-xl text-charcoal/65 leading-relaxed mt-8">
              המחויבות שלנו כלפייך לא מסתיימת ברגע היציאה מהקליניקה. תהליך שחזור הגבות הוא תהליך ביולוגי מתמשך, וכדי להבטיח את קליטת השתלים בצורה האופטימלית, אנו מלווים אותך לאורך שנה שלמה הכוללת שלוש תחנות ביקורת קריטיות לבקרת איכות. כך ייראה המסע המשותף שלנו:
            </p>
          </Reveal>

          <RecoveryTimeline steps={timeline} tone="paper" />
        </div>
      </section>

      <TreatmentFaq items={[
  { q: "מה ההבדל בין השתלת גבות לעיצוב גבות?", a: "עיצוב גבות משנה את צורת השערות הקיימות. השתלת גבות מוסיפה שערות חדשות, שערה אחר שערה, בזווית ובכיוון שנקבעו לפי מבנה הפנים." },
  { q: "מדוע בהשתלת גבות משתמשים בזקיקי Singles ממוינים במיקרוסקופ?", a: "זקיק בודד (Single) מאפשר לקבוע את הכיוון והזווית של כל שערה בדיוק. המיון תחת מיקרוסקופ מבטיח שכל זקיק מתאים למקומו, ולכן הגבה נראית טבעית ומאוזנת לכל החיים." },
  { q: "האם השתלת גבות מתאימה גם לגברים?", a: "כן. התכנון לגברים שונה בכיוון, בצורה ובצפיפות, ומותאם למבנה הפנים ולגבה הקיימת." },
  { q: "האם השתלה נשמרת לכל החיים?", a: "שיער מושתל נשמר לכל החיים וצומח באופן טבעי. דרגת התוצאה נקבעת בתכנון, ולכן ההתייעצות היא שלב מכריע." },
  { q: "כמה זמן לוקח להתקבע השתלת גבות?", a: "השלבים מתוארים בעמוד ההחלמה. הביקורת הראשונה מתקיימת ביום העשירי, והתוצאה הסופית מתבהרת לאחר כמה חודשים." },
      ]} />
      {/* Consultation form */}
      <section id="appointment" className="relative scroll-mt-20 bg-paper py-20 md:py-28 overflow-hidden">
        <span
          className="pointer-events-none select-none absolute -bottom-16 -right-10 text-[20rem] md:text-[32rem] leading-none text-deep-red/[0.04] font-bold"
          aria-hidden
        >
          美
        </span>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="text-center md:text-right">
            <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-[1.08] tracking-tight">הצעד הראשון לגבות מושלמות</h2>
            <p className="text-xl md:text-2xl font-light text-charcoal/65 leading-relaxed mt-6">תאמו אבחון קליני מבוסס AI לקביעת פרוטוקול אישי לתוצאה לכל החיים.</p>
          </Reveal>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-7 md:p-10 space-y-6 ring-1 ring-charcoal/10 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.35)]"
          >
            <div>
              <label htmlFor="name" className="block text-charcoal font-semibold mb-2 text-right">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={fieldClassName}
                placeholder="הזן את שמך המלא"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-charcoal font-semibold mb-2 text-right">
                טלפון נייד
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={fieldClassName}
                placeholder="הזן מספר טלפון נייד"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                required
                className="mt-1 w-5 h-5 accent-deep-red cursor-pointer shrink-0"
              />
              <span className="text-sm text-charcoal/70 leading-relaxed">
                אני מאשר/ת את{' '}
                <Link href="/privacy" target="_blank" className="text-deep-red hover:underline font-medium">
                  מדיניות הפרטיות
                </Link>{' '}
                ומסכים/ה לשימוש בפרטים שמסרתי לצורך יצירת קשר.
              </span>
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-deep-red text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-deep-red-dark transition-colors"
            >
              לתיאום אבחון טכנולוגי
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
