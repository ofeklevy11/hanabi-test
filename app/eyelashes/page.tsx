'use client'

import Navbar from '@/components/Navbar'
import { submitLead } from '@/lib/submitLead'
import Footer from '@/components/Footer'
import TreatmentFaq from '@/components/TreatmentFaq'
import { Reveal, Chapter, RecoveryTimeline, AutoplayVideo, VideoWall, fieldClassName, type TimelineStep } from '@/components/TreatmentBlocks'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Eyelashes() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const youtubeVideoId = '-rnDfzpfpjQ'

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = { ...formData, source: 'דף השתלת ריסים', submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }) }
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

  const timeline: TimelineStep[] = [
    {
      kind: 'stage',
      step: 1,
      title: '10 ימי החלמה',
      when: 'ימים 1-10',
      text: 'בעשרת הימים הראשונים העפעף עשוי להיות מעט נפוח ואדמומי. זהו סימן חיובי לזרימת דם מוגברת לאזור. יש להימנע מאיפור עיניים ומגע כדי לאפשר לזקיקים להתקבע.',
    },
    {
      kind: 'check',
      title: 'ביקורת ראשונה',
      when: 'יום 10',
      text: 'מפגש קצר בקליניקה לווידוא החלמה תקינה. בסיום המפגש העפעף חוזר למראהו הרגיל.',
    },
    {
      kind: 'stage',
      step: 2,
      title: 'שלב הנשירה',
      when: 'חודש 1-3',
      text: 'כמו בגבות, גם כאן מתרחש ה-Shock Loss. הריסים המושתלים נושרים כדי לפנות מקום לצמיחה החדשה. אל דאגה – השורש חי ומתחזק מתחת לעור.',
    },
    {
      kind: 'stage',
      step: 3,
      title: 'הצמיחה והתחזוקה',
      when: 'חודש 4 ואילך',
      text: 'הריסים החדשים מתחילים לצמוח! חשוב לדעת: מכיוון שמקורם בשיער הראש, הם ימשיכו לצמוח לאורך. חלק משגרת הטיפוח החדשה שלך תכלול גזירה עדינה אחת לכמה שבועות כדי לשמור על האורך הרצוי.',
    },
    {
      kind: 'final',
      title: 'התוצאה הסופית',
      when: 'שנה',
      text: 'הריסים הגיעו לשיא צפיפותם ועוביים. המבט שלך מודגש, פתוח ומרשים – באופן טבעי ולכל החיים.',
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
            src="/files/hero/lashes.jpeg"
            alt="השתלת ריסים - HANA BI"
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
              שחזור ריסים מיקרו-כירורגי
              <br />
              <span className="text-4xl md:text-6xl lg:text-8xl">המדע שמאחורי המבט</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-deep-red">לא הדבקות. לא תוספות</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal">
                ריסים חיים וארוכים שנשארים איתך לכל החיים
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
              הריסים הם מסגרת העין
            </p>
            <p className="text-2xl md:text-3xl font-light text-charcoal/60 leading-snug mt-6">
              המבנה העדין ביותר בגוף האדם
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:self-end border-t-2 border-deep-red pt-6">
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
              ב-<span className="text-deep-red font-bold">HANA BI</span> אנו משחזרים את הקשת המושלמת בדיוק מיקרו-כירורגי
            </p>
            <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed mt-4">
              אנו יוצרים מחדש את המבט הערני והזוהר שמעניק לעיניים מסגרת טבעית ומושלמת
            </p>
          </Reveal>
        </div>
      </section>

      {/* Before & after video */}
      <section className="relative bg-paper py-20 md:py-28 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-80" aria-hidden />
        <Reveal className="relative text-center px-6 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal tracking-tight">לפני ואחרי</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
        </Reveal>
        <div className="relative mx-auto w-full max-w-[400px]">
          <VideoWall ids={[youtubeVideoId]} label="סרטון לפני ואחרי" />
        </div>
      </section>

      {/* The three technique chapters */}
      <section className="bg-white pt-8 md:pt-12 pb-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Chapter
            number="01"
            title="סוד המיון – רק שיערות משי (Silk Hair Selection)"
            image="/files/hair/silk-hair-selection.webp"
            alt="סוד המיון – רק שיערות משי"
            imageWidth={2721}
            imageHeight={1405}
            lead="האתגר הגדול ביותר ביצירת ריסים טבעיים הוא המרקם כי שיער הגוף לרוב עבה יותר מריסים טבעיים"
          >
            <p>ולכן אנו מבצעים תהליך איתור מורכב באזור העורף התחתון שם צומחות שיערות דקות ורכות במיוחד המכונות &apos;שיערות משי&apos;</p>
            <p>אנו ממיינים אותן תחת מיקרוסקופ ובוחרים רק את הזקיקים הבודדים והעדינים ביותר כדי להבטיח שהריס החדש יהיה רך למגע ישתלב בטבעיות עם הריסים הקיימים ולא יכביד על העפעף העדין</p>
          </Chapter>

          <Chapter
            number="02"
            title="ארכיטקטורת ה-C-Curve (הקשת המושלמת)"
            image="/files/hair/c-curve.jpeg"
            alt="ארכיטקטורת ה-C-Curve"
            imageWidth={1303}
            imageHeight={768}
            lead="בעוד שרוב הקליניקות משתילות את השיער בזווית ישרה שיוצרת מראה של 'גגון' שמצל על העין אנו משתמשים בשיטות מיוחדות ומדויקות שמאפשרות לנו לשלוט לא רק בזווית הכניסה אלא גם ברוטציה של הזקיק"
          >
            <p>אנו משתילים ריסים ארוכים בלבד מה שמאפשר לנו לראות את העיקול הטבעי של השערה ולסובב אותה כך שהיא תתעגל כלפי מעלה בצורת C מושלמת</p>
            <p>פעולה זו &apos;פותחת&apos; את העין ומעניקה לה מראה ערני מורם וזוהר יותר ללא צורך במעגל ריסים</p>
          </Chapter>

          <Chapter
            number="03"
            title="בטיחות עינית (Ocular Safety Protocol)"
            image="/files/hero/lashes.jpeg"
            alt="בטיחות עינית"
            imageWidth={2048}
            imageHeight={1144}
            lead="העפעף הוא האזור העדין ביותר בגוף האדם ולכן הפרוטוקול הרפואי שלנו הוא המחמיר ביותר בתחום"
          >
            <p>הטיפול מתבצע באמצעות מגן קרנית מיוחד השומר על העין לכל אורך התהליך וההשתלה עצמה נעשית בעומק מבוקר ברמת המיקרון כדי לא לפגוע בשריר העפעף או בזרימת הדם</p>
            <p>אנו משתמשים במחטי Implanter זעירות שתוכננו במיוחד לכירורגיה של העפעפיים המבטיחות החלמה מהירה ללא צלקות וללא סימנים</p>
          </Chapter>
        </div>
      </section>

      {/* Pain-free experience */}
      <section className="relative bg-paper py-20 md:py-28 overflow-hidden">
        <div className="bio-grid absolute inset-0" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
          <Reveal className="text-center md:text-right">
            <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-[1.1] tracking-tight">האם הטיפול כואב?</h2>
            <p className="text-2xl md:text-3xl font-bold text-deep-red leading-snug mt-6">הטיפול אינו מורגש כלל. צפו ברגע האמת</p>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed mt-8">
              רבות חוששות מהרעיון של טיפול כה קרוב לעין אך המציאות היא שונה לחלוטין הטיפול מתבצע תחת הרדמה מקומית יסודית ולאחריה את נמצאת במצב של רוגע מוחלט ויכולה אפילו לנמנם המגן המיוחד שאנו מניחים מבטיח שלא תרגישי דבר והעפעף נשאר רדום עד לסיום התהליך כך שאת מתעוררת למציאות חדשה עם ריסים מלאים וללא שום כאב
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mx-auto w-full max-w-[340px] md:w-[340px]">
            <div className="rounded-[2.25rem] bg-white ring-1 ring-charcoal/10 p-2.5 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]">
              <div className="rounded-[1.75rem] overflow-hidden bg-black">
                <AutoplayVideo src="/files/eyelashes/pain-free.mp4" label="הטיפול בעפעפיים אינו מורגש" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recovery journey timeline */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-tight tracking-tight">השלבים שלאחר השתלת הריסים</h2>
            <p className="text-2xl md:text-3xl font-light text-deep-red mt-5">ליווי רפואי מלא עד לתוצאה הסופית</p>
            <p className="text-lg md:text-xl text-charcoal/65 leading-relaxed mt-8">
              הריסים החדשים שלך הם שיער ראש טבעי שמתנהג קצת אחרת. הנה מה שצפוי לך:
            </p>
          </Reveal>

          <RecoveryTimeline steps={timeline} tone="paper" />
        </div>
      </section>

      <TreatmentFaq items={[
  { q: "מה מיוחד בשחזור הריסים ב-HANA BI?", a: "שחזור הריסים נעשה בארכיטקטורת C-Curve, עם שיערות משי (Silk Hair) שנבחרות ידנית. ההליך כולל פרוטוקול בטיחות עינית עם מגן לקרנית, ומחטי Implanter מיקרו-כירורגיות שמכניסות כל ריס במיקום המדויק." },
  { q: "כיצד נלקחים הזקיקים העדינים לשחזור הריסים?", a: "הזקיקים נלקחים מאזור העורף התחתון, שם השיער דק ורך במיוחד. הבחירה נעשית לפי עובי ואורך השערה, כדי שהריס המושתל ייראה טבעי." },
  { q: "האם השתלת ריסים כואבת?", a: "ההליך נעשה תחת הרדמה מקומית ובזהירות רבה באזור העדין של העפעף. ההרגשה במהלך ההליך נסבלת ברוב המקרים, והנחיות ההחלמה נמסרות במרפאה." },
  { q: "האם הריסים המושתלים נשמרים לכל החיים?", a: "הריסים המושתלים נשמרים לכל החיים ונצמחים במחזור טבעי. ייתכן שיידרש תיקון קטן לאורך זמן, והוא נבדק במעקב." },
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
            <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-[1.1] tracking-tight">תני לעיניים שלך את המסגרת המגיעה להן</h2>
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
