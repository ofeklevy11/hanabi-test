'use client'

import Image from 'next/image'
import { submitLead } from '@/lib/submitLead'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AutoplayVideo as BlockVideo } from '@/components/TreatmentBlocks'
import { useRouter } from 'next/navigation'

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AutoplayVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={`${src}#t=0.001`}
      className="block w-full aspect-[9/16] lg:w-auto lg:h-[min(calc(100vh-165px),88vw)] lg:min-h-[560px]"
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  )
}

function Chapter({
  number,
  title,
  image,
  alt,
  lead,
  children,
}: {
  number: string
  title: React.ReactNode
  image: string
  alt: string
  lead: string
  children: React.ReactNode
}) {
  return (
    <article className="py-12 md:py-20 border-t border-charcoal/10 first:border-t-0">
      <Reveal className="flex items-baseline gap-4 md:gap-7 mb-8 md:mb-12">
        <span className="text-5xl md:text-8xl font-light text-deep-red tabular-nums leading-none" aria-hidden>
          {number}
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">{title}</h3>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.45)]">
          <Image
            src={image}
            alt={alt}
            width={2000}
            height={1116}
            className="w-full h-auto"
            quality={95}
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="grid lg:grid-cols-12 gap-x-16 gap-y-8 mt-10 md:mt-14">
        <p className="lg:col-span-5 text-xl md:text-2xl text-charcoal leading-relaxed">{lead}</p>
        <div className="lg:col-span-7 text-lg text-charcoal/70 leading-relaxed space-y-6">{children}</div>
      </Reveal>
    </article>
  )
}

function DetailList({ items }: { items: { term: string; text: string }[] }) {
  return (
    <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map(({ term, text }) => (
        <li key={term} className="py-5">
          <h4 className="text-lg font-bold text-charcoal mb-1">{term}</h4>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  )
}

const timeline: {
  kind: 'stage' | 'check' | 'final'
  step?: number
  title: string
  when: string
  text: string
  images: { src: string; alt: string }[]
}[] = [
  {
    kind: 'stage',
    step: 1,
    title: '10 ימי התקבעות',
    when: 'ימים 1-10',
    text: 'בעשרת הימים הראשונים לאחר ההשתלה מתרחש תהליך ביולוגי של קליטת הזקיקים ברקמה החדשה. בימים אלו תיתכן הופעה של גלדים נקודתיים זעירים, המעידים על תהליך ריפוי תקין של העור. בשלב זה חיוני להימנע ממגע באזור כדי לאפשר לשורשים להתבסס במקומם ולהתחבר לאספקת הדם.',
    images: [{ src: '/files/hair/week.jpeg', alt: '10 ימי התקבעות - תוצאה בימים הראשונים' }],
  },
  {
    kind: 'check',
    title: 'תחנת ביקורת ראשונה',
    when: 'יום 10',
    text: 'בדיוק עשרה ימים לאחר ההליך, אנו נפגשים בקליניקה לביקורת ראשונה. במפגש זה הצוות המקצועי מבצע חפיפה עדינה ומבוקרת להסרת הגלדים. בסיום הטיפול, האזור נקי לחלוטין, העור חוזר למרקמו החלק והמראה המתקבל נקי ואסתטי.',
    images: [
      { src: '/files/hair/checkpoint-one.jpeg', alt: 'תחנת ביקורת ראשונה - לפני החפיפה' },
      { src: '/files/hair/checkpoint-two.jpeg', alt: 'תחנת ביקורת ראשונה - תהליך החפיפה' },
    ],
  },
  {
    kind: 'stage',
    step: 2,
    title: 'התחדשות השורש',
    when: 'חודש 1 עד 3',
    text: 'בשלב זה מתרחש תהליך טבעי המכונה Shock Loss. השיער המושתל נושר, אך זהו סימן חיובי המעיד על הצלחת התהליך. השורש עצמו נשאר חי ובריא מתחת לעור, ונכנס לשלב של מנוחה ואגירת אנרגיה לקראת הצמיחה המחודשת.',
    images: [{ src: '/files/hair/root-renewal.jpg', alt: 'התחדשות השורש - חודש 1 עד 3' }],
  },
  {
    kind: 'check',
    title: 'תחנת ביקורת שנייה',
    when: 'חודש 3',
    text: 'שלושה חודשים מהטיפול, אנו נפגשים לביקורת אמצע. מטרת המפגש היא לוודא שתהליך הנשירה הסתיים ושהזקיקים עוברים ממצב מנוחה למצב פעיל. בשלב זה אנו מצפים לראות את הניצנים הראשונים של השיער החדש והקבוע.',
    images: [{ src: '/files/hair/checkpoint-month-3.jpg', alt: 'תחנת ביקורת שנייה - חודש 3' }],
  },
  {
    kind: 'stage',
    step: 3,
    title: 'צמיחה והתעבות',
    when: 'חודשים 4-10',
    text: 'החל מהחודש הרביעי מתחילה הצמיחה המשמעותית. מחודש לחודש השיער מתמלא, השיערות הופכות עבות וחיוניות יותר, והמבנה המעוצב מתחיל לקבל את נפחו הסופי תוך השתלבות הרמונית ומראה טבעי לחלוטין.',
    images: [{ src: '/files/hair/man.jpeg', alt: 'צמיחה והתעבות - תוצאה' }],
  },
  {
    kind: 'final',
    title: 'תחנת ביקורת סופית',
    when: 'שנה מהטיפול',
    text: 'בתום השנה הראשונה אנו נפגשים למעמד הסיכום. בשלב זה תהליך הצמיחה הושלם במלואו. אנו מבצעים בדיקת איכות סופית של העיצוב, צפיפות השיער וכיווני הצמיחה, כדי לוודא שהתוצאה היא מושלמת, טבעית ותישאר איתך לכל החיים.',
    images: [{ src: '/files/hair/final-checkpoint.jpeg', alt: 'תחנת ביקורת סופית - תוצאה לאחר שנה' }],
  },
]

const fieldClassName =
  'w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg'

export default function HairTransplantLP() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = { ...formData, source: 'דף נחיתה השתלת שיער', submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }) }
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

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[85svh] md:min-h-[85vh] lg:min-h-[90vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/files/hero/hair-transplant-hero-v2.jpg"
            alt="השתלת שיער טבעית - HANA BI"
            fill
            className="object-cover"
            quality={95}
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-7 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center space-y-3 md:space-y-5 max-w-6xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[2.3rem] md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight"
            >
              השתלת שיער טבעית
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-deep-red">צפיפות מלאה, ומראה טבעי</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 md:text-white/90 font-medium md:font-normal">
                שנשאר לכל החיים
              </p>
            </motion.div>

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
                לתיאום פגישת ייעוץ
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
              השיער הוא מבנה אנטומי מורכב וייחודי
            </p>
            <p className="text-2xl md:text-3xl font-light text-charcoal/60 leading-snug mt-6">
              המורכב מאלפי זקיקים בעלי זווית צמיחה משתנה, כיוון טבעי וצפיפות דינמית.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:self-end border-t-2 border-deep-red pt-6">
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed">
              ב-<span className="text-deep-red font-bold">Hana Bi</span> אנו מתמחים בשחזור אנטומי של קו השיער ומילוי אזורי דלילות, תוך התאמה טבעית ומדויקת לתווי הפנים הייחודיים של כל מטופל.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Anatomical density + patient video */}
      {/* On desktop this band exactly fills the screen below the 81px navbar; the video height is derived from the same numbers */}
      <section className="relative bg-paper py-20 md:py-28 lg:py-8 lg:min-h-[calc(100vh-81px)] lg:flex lg:items-center overflow-hidden">
        <div className="bio-grid absolute inset-0" aria-hidden />
        <div className="relative w-full max-w-7xl lg:max-w-none mx-auto px-6 lg:px-8 grid lg:grid-cols-[minmax(0,34rem)_max-content] lg:justify-center gap-14 lg:gap-20 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-[1.1] tracking-tight">צפיפות אנטומית מקסימלית</h2>
            <p className="text-xl md:text-2xl font-light text-charcoal/80 leading-relaxed mt-8">
              כדי להשיג מראה שאינו מסגיר את הטיפול, כזה שנראה ומרגיש כמו שיער טבעי ושופע. עלינו להיצמד לחוקי האנטומיה של הקרקפת.
            </p>
            <div className="flex items-center gap-6 border-y border-charcoal/10 py-6 mt-9">
              <span className="text-7xl md:text-8xl font-light text-deep-red leading-none tabular-nums">80</span>
              <span className="text-lg md:text-xl text-charcoal/60 leading-snug">
                זקיקים לס&quot;מ מרובע
                <br />
                בשיער טבעי
              </span>
            </div>
            <p className="text-lg text-charcoal/65 leading-relaxed mt-8">
              הצפיפות הממוצעת בשיער טבעי עומדת על כ-80 זקיקים לס&quot;מ מרובע. כדי להעניק לך מראה מלא, ללא שטחים דלילים או מראה &quot;שקוף&quot;, אנו מחויבים להגיע לרמת צפיפות זהה לזו של הטבע.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto w-full max-w-[440px] lg:w-auto lg:max-w-none">
            <div className="rounded-[2.25rem] bg-white ring-1 ring-charcoal/10 p-2.5 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]">
              <div className="rounded-[1.75rem] overflow-hidden bg-black">
                <AutoplayVideo src="/files/hair/patient-video.mp4" label="סרטון של מטופל" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* "How we do it" - intro to the three chapters below; shares their background so it flows into them */}
      <section className="bg-white pt-20 md:pt-32">
        <Reveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-tight tracking-tight">איך אנחנו עושים זאת?</h2>
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed mt-8">
            ב-<span className="text-deep-red font-bold">Hana bi</span> אנו משתמשים בטכנולוגיית קצה ובמכשור מיקרוסקופי ייחודי שפותח בסיאול, קוריאה – בירת החדשנות העולמית. המכשור שלנו דק ועדין במיוחד, מה שמאפשר לנו להשתיל את הזקיקים בקרבה מקסימלית זה לזה, מבלי לפגוע ברקמה, ולהבטיח תוצאה צפופה, עשירה וטבעית לחלוטין.
          </p>
          <div className="w-px h-20 md:h-28 bg-gradient-to-b from-deep-red to-transparent mx-auto mt-10" aria-hidden />
        </Reveal>
      </section>

      {/* The three technique chapters */}
      <section className="bg-white pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Chapter
            number="01"
            title="ארכיטקטורה של קו השיער: אומנות הסידור"
            image="/files/hair/hairline-architecture.jpg"
            alt="ארכיטקטורה של קו השיער"
            lead={'מראה מלאכותי ("מראה בובה") נובע בדרך כלל מתכנון לקוי. ב-Hana bi, אנו בונים את קו השיער שלך בשכבות אנטומיות:'}
          >
            <DetailList
              items={[
                {
                  term: 'הקו הראשון (The Frontal Design)',
                  text: 'מבוצע באמצעות "סינגלים" (זקיקים של שערה בודדת בלבד). כדי למנוע מראה נוקשה, אנו מעצבים קו מזוגזג וא-סימטרי בעדינות, המדמה את קו הצמיחה הטבעי איתו נולדנו.',
                },
                {
                  term: 'קווי העומק',
                  text: 'בקו השני אנו משלבים זקיקי "דאבל" (זוגות), ומהקו השלישי והלאה עוברים לזקיקי "טריפל" המעניקים את עובי וחוזק השיער.',
                },
                {
                  term: 'נפח מקסימלי',
                  text: 'בכל חלקי הקרקפת הפנימיים, אנו מתמקדים ביצירת צפיפות מקסימלית תוך שימוש בזקיקים מרובי שערות.',
                },
              ]}
            />
          </Chapter>

          <Chapter
            number="02"
            title="הגנה על האזור התורם: המשאב היקר ביותר שלך"
            image="/files/hair/donor-area-protection.jpg"
            alt="הגנה על האזור התורם"
            lead="הצלחה של השתלת שיער נמדדת לא רק באיך שהחלק הקדמי נראה, אלא גם בשמירה על החלק האחורי של הראש. ב-Hana bi, אנו מתייחסים לאזור התורם שלך ביראת קודש."
          >
            <h4 className="text-2xl font-bold text-charcoal">חילוץ זקיקים בטכנולוגיית &quot;Micro-Extraction&quot;:</h4>
            <p>באמצעות מכשור קוריאני עדין ודק במיוחד, אנו מחלצים את הזקיקים אחד-אחד בדיוק כירורגי. הכלים המיוחדים שלנו מאפשרים לנו:</p>
            <DetailList
              items={[
                {
                  term: 'למנוע פגיעה בזקיקים שכנים',
                  text: 'אנו שומרים על המרחק האופטימלי כדי שהשיער באזור התורם ימשיך להיראות מלא וטבעי, ללא צלקות נראות לעין או מראה "אכול".',
                },
                {
                  term: 'דילול מבוקר וחכם',
                  text: 'הפיזור נעשה בצורה כזו שגם לאחר לקיחת הזקיקים, האזור האחורי שומר על אחידות ועל נראות טבעית לחלוטין.',
                },
              ]}
            />
          </Chapter>

          {/* Does it hurt? Between chapters 02 and 03 */}
          <div className="border-t border-charcoal/10 py-12 md:py-20">
            <Reveal className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">האם הטיפול כואב?</h3>
              <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
            </Reveal>
            <Reveal delay={0.1} className="mx-auto w-full max-w-3xl">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.45)] bg-black">
                <BlockVideo src="/files/hair/pain-free.mp4" label="האם הטיפול כואב? מטופל בזמן הטיפול" className="block w-full aspect-video" />
              </div>
            </Reveal>
          </div>

          <Chapter
            number="03"
            title={
              <>
                <span className="text-deep-red">98%</span> אחוזי קליטה
              </>
            }
            image="/files/hair/follicle-preservation.jpg"
            alt="98% אחוזי קליטה"
            lead="הזקיק הוא איבר חי, והזמן שלו מחוץ לגוף הוא קריטי. כדי להבטיח שכל שערה ושערה שאנחנו משתילים אכן תצמח, אנו משתמשים במערכת שימור וקירור זקיקים מתקדמת."
          >
            <p>ברגע הוצאת הזקיק, הוא עובר לסביבה מבוקרת טמפרטורה המדמה את תנאי הגוף. פרוטוקול השימור הייחודי שלנו מאפשר לנו להגיע לתוצאה חסרת תקדים של 98% אחוזי קליטה. עבורך, זה אומר ביטחון מלא שמה שהשתלנו – יצמח בוודאות ויישאר איתך לתמיד.</p>
          </Chapter>
        </div>
      </section>

      {/* Before & after gallery, right after the 98% chapter */}
      <section className="relative bg-white pb-20 md:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-t border-charcoal/10 pt-16 md:pt-24">
            <Reveal className="text-center mb-10 md:mb-14">
              <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal tracking-tight">תוצאות לפני ואחרי</h2>
              <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
              <p className="text-xl md:text-2xl font-light text-charcoal/60 mt-6">השתלות שיער שבוצעו במרפאת Hana Bi</p>
            </Reveal>
          </div>
        </div>

        <div className="max-w-[min(94vw,1400px)] mx-auto px-2 md:px-4">
          {/* Widths are proportional to each image's aspect ratio, so every row has one height with no cropping */}
          <div className="flex flex-wrap gap-3 lg:gap-5">
            {[
              { src: '/files/hair/result-1.jpg', width: 1080, height: 1350, order: 1, rowShare: 0.5, fullShare: 0.2346 },
              { src: '/files/hair/result-2.jpg', width: 1206, height: 1194, order: 3, rowShare: 0.558, fullShare: 0.2962 },
              { src: '/files/hair/result-3.jpg', width: 1080, height: 1350, order: 4, rowShare: 0.442, fullShare: 0.2346 },
              { src: '/files/hair/result-4.jpg', width: 1080, height: 1350, order: 2, rowShare: 0.5, fullShare: 0.2346 },
            ].map(({ src, width, height, order, rowShare, fullShare }, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="order-[var(--order)] lg:order-none w-[calc((100%-0.75rem)*var(--row-share))] lg:w-[calc((100%-3.75rem)*var(--full-share))]"
                style={{ '--order': order, '--row-share': rowShare, '--full-share': fullShare } as React.CSSProperties}
              >
                <div className="rounded-2xl lg:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_40px_80px_-45px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:-translate-y-2">
                  <Image
                    src={src}
                    alt={`תוצאת השתלת שיער - לפני ואחרי ${i + 1}`}
                    width={width}
                    height={height}
                    className="w-full h-auto"
                    quality={92}
                    sizes="(max-width: 1023px) 56vw, 30vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery journey timeline */}
      <section className="bg-paper py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-tight tracking-tight">השלבים שלאחר השתלת השיער</h2>
            <p className="text-2xl md:text-3xl font-light text-deep-red mt-5">ליווי רפואי מלא מיום הטיפול ועד לתוצאה הסופית</p>
            <p className="text-lg md:text-xl text-charcoal/65 leading-relaxed mt-8">
              המחויבות שלנו כלפייך לא מסתיימת ברגע היציאה מהקליניקה. תהליך שחזור השיער הוא תהליך ביולוגי מתמשך, וכדי להבטיח את קליטת השתלים בצורה האופטימלית, אנו מלווים אותך לאורך שנה שלמה הכוללת שלוש תחנות ביקורת קריטיות לבקרת איכות. כך ייראה המסע המשותף שלנו:
            </p>
          </Reveal>

          {/* Phone: a swipeable row of equal-height cards. Desktop: a vertical list along a side line */}
          <ol className="no-scrollbar relative max-w-5xl -mx-6 md:mx-auto px-6 md:px-0 pb-2 md:pb-0 flex md:block gap-4 md:space-y-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
            <div className="hidden md:block absolute top-8 bottom-8 right-6 w-px bg-gradient-to-b from-deep-red/50 via-deep-red/25 to-deep-red/5" aria-hidden />

            {timeline.map(({ kind, step, title, when, text, images }, i) => {
              const marker = (className: string) => (
                <div
                  className={`shrink-0 rounded-full items-center justify-center ${className} ${
                    kind === 'stage' ? 'bg-white ring-2 ring-deep-red text-deep-red' : 'bg-deep-red text-white'
                  }`}
                  aria-hidden
                >
                  {kind === 'stage' && <span className="text-lg font-bold">{step}</span>}
                  {kind === 'check' && <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />}
                  {kind === 'final' && <Sparkles className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              )
              return (
                <li key={title} className="relative shrink-0 w-[84vw] max-w-[360px] md:w-auto md:max-w-none snap-center flex md:block md:pr-24">
                  {marker('hidden md:flex absolute top-8 right-0 z-10 w-12 h-12')}

                  <div className="w-full bg-white rounded-3xl ring-1 ring-charcoal/10 p-6 md:p-10 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.4)]">
                    <div className={`h-full flex flex-col md:grid gap-6 md:gap-12 md:items-center ${images.length > 0 ? 'md:grid-cols-[1fr_auto]' : ''}`}>
                      <div>
                        <div className="flex items-center gap-3">
                          {marker('flex md:hidden w-10 h-10')}
                          <p className="text-sm font-bold text-deep-red bg-deep-red/[0.07] rounded-full px-3.5 py-1">{when}</p>
                          <span className="md:hidden ms-auto text-sm text-charcoal/40 tabular-nums" aria-hidden>
                            {i + 1} / {timeline.length}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-charcoal mt-4 mb-3 md:mb-4 tracking-tight">{title}</h3>
                        <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">{text}</p>
                      </div>

                      {images.length > 0 && (
                        <div className="mt-auto md:mt-0 flex justify-center gap-3">
                          {images.map(({ src, alt }) => (
                            <div key={src} className="rounded-2xl overflow-hidden ring-1 ring-black/5">
                              <Image
                                src={src}
                                alt={alt}
                                width={600}
                                height={800}
                                className="h-48 md:h-60 w-auto max-w-none"
                                quality={95}
                                sizes="210px"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          <p className="md:hidden text-center text-sm text-charcoal/50 mt-5">החליקו הצידה כדי לראות את כל השלבים</p>
        </div>
      </section>

      {/* One-year result video; on desktop the band fills the screen below the navbar, like the patient video above */}
      <section className="relative bg-white py-20 md:py-28 lg:py-8 lg:min-h-[calc(100vh-81px)] lg:flex lg:items-center overflow-hidden">
        <div className="relative w-full max-w-7xl lg:max-w-none mx-auto px-6 lg:px-8 grid lg:grid-cols-[minmax(0,34rem)_max-content] lg:justify-center gap-12 lg:gap-20 items-center">
          <Reveal className="text-center lg:text-right">
            <h2 className="text-5xl md:text-7xl font-extrabold text-charcoal leading-[1.08] tracking-tight">תוצאה לאחר שנה</h2>
            <div className="w-16 h-1 bg-deep-red rounded-full mt-7 mb-6 mx-auto lg:mx-0" aria-hidden />
            <p className="text-xl md:text-2xl font-light text-charcoal/60">השתלת שיער שבוצעה במרפאת Hana Bi</p>
            {/* The same patient before: small, so the result video stays the hero */}
            <figure className="relative mt-9 md:mt-12 mx-auto lg:mx-0 w-40 md:w-52 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.5)]">
              <Image
                src="/files/hair/one-year-before.jpg"
                alt="המטופל לפני השתלת השיער"
                width={920}
                height={1150}
                className="w-full h-auto"
                quality={92}
                sizes="208px"
              />
              <figcaption className="absolute bottom-2.5 right-2.5 bg-white/90 text-charcoal text-sm font-bold rounded-full px-3.5 py-1">לפני</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto w-full max-w-[440px] lg:w-auto lg:max-w-none">
            <div className="rounded-[2.25rem] bg-white ring-1 ring-charcoal/10 p-2.5 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]">
              <div className="relative rounded-[1.75rem] overflow-hidden bg-black">
                <AutoplayVideo src="/files/hair/one-year-result.mp4" label="תוצאה לאחר שנה" />
                <span className="pointer-events-none absolute top-3.5 right-3.5 bg-deep-red text-white text-sm md:text-base font-bold rounded-full px-4 py-1.5">אחרי</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-7xl font-extrabold text-charcoal leading-[1.08] tracking-tight">הצעד הראשון לשיער מלא</h2>
            <p className="text-xl md:text-2xl font-light text-charcoal/65 leading-relaxed mt-6">השאירו פרטים ונבדוק יחד אם הטיפול מתאים לכם</p>
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
              לתיאום פגישת ייעוץ
            </motion.button>
          </motion.form>
        </div>
      </section>

    </main>
  )
}
