'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
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

const mediaFrameClassName =
  'relative w-full overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-charcoal/10 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]'

function Feature({
  number,
  title,
  flipped = false,
  media,
  children,
}: {
  number: string
  title: string
  flipped?: boolean
  media: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <article className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-16 border-t border-charcoal/10">
      <Reveal className={flipped ? 'md:order-2' : undefined}>{media}</Reveal>
      <Reveal delay={0.1} className={flipped ? 'md:order-1' : undefined}>
        <span className="block text-5xl md:text-7xl font-light text-deep-red tabular-nums leading-none mb-5" aria-hidden>
          {number}
        </span>
        <h4 className="text-2xl md:text-4xl font-bold text-charcoal leading-tight mb-5">{title}</h4>
        <div className="text-lg text-charcoal/70 leading-relaxed space-y-5">{children}</div>
      </Reveal>
    </article>
  )
}

export default function WhyAsia() {
  return (
    <section className="relative bg-white pt-20 md:pt-28 pb-8 md:pb-12 overflow-hidden">
      <div className="bio-grid absolute inset-x-0 top-0 h-[34rem]" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal leading-tight">
            למה המזרח הרחוק מוביל את עולם האסתטיקה?
          </h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-8 mb-8" aria-hidden />
          <p className="text-xl md:text-2xl font-light text-charcoal/70 leading-relaxed">
            בעולם האסתטיקה הרפואית, קוריאה ויפן נמצאות עשור אחד לפני כולם
          </p>
          <p className="text-xl md:text-2xl font-semibold text-deep-red leading-relaxed mt-2">
            HANA BI הביאה את העתיד הזה לכאן
          </p>
        </Reveal>

        <Reveal className="text-center max-w-3xl mx-auto mt-16 md:mt-24 mb-10 md:mb-14">
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">ההבדל הטכנולוגי</h3>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
            הטכנולוגיה שלנו מאפשרת רמת דיוק מיקרוסקופית, הרחק מעבר למה שהעין האנושית מסוגלת לראות. העבודה בהגדלה מאפשרת למיין ולהשתיל כל זקיק בזהירות, כחלק מתוכנית שנבנית לכל מטופל.
          </p>
        </Reveal>

        <Feature
          number="01"
          title="מערכות קירור לשמירה על הזקיק"
          media={
            <div className={`${mediaFrameClassName} aspect-video pointer-events-none bg-black`}>
              <iframe
                src="https://www.youtube.com/embed/rSt3daiPIgU?autoplay=1&mute=1&loop=1&playlist=rSt3daiPIgU&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1"
                title="מערכות קירור לשמירה על הזקיק"
                allow="autoplay; encrypted-media"
                className="absolute inset-0 w-full h-full"
                tabIndex={-1}
              />
            </div>
          }
        >
          <p>חלק חשוב מהשתלת שיער קורה מחוץ לקרקפת: הזמן שבו הזקיקים ממתינים להשתלה.</p>
          <p>
            במרפאת Hana Bi, אנו פועלים לפי פרוטוקולים קליניים בהשראת מרכזים ביפן ובדרום קוריאה. אחד המפתחות הקריטיים להצלחת ההשתלה הוא שמירה על &quot;חיות הזקיק&quot; (Graft Viability) מרגע הוצאתו ועד להשתלתו מחדש.
          </p>
        </Feature>

        <Feature
          number="02"
          title="Nano-Tools (יפן)"
          flipped
          media={
            <div className={`${mediaFrameClassName} aspect-[4/3]`}>
              <Image
                src="/assets/IMG_0457.webp"
                alt="Nano-Tools (יפן) - Advanced Medical Tools"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        >
          <p>שימוש בכלי החדרה דקים, שנבחרים לפי אזור הטיפול ועובי השערה. כלים דקים מאפשרים לעבוד בפתחים קטנים, וההחלמה וקצב ההתאוששות משתנים בין מטופלים.</p>
        </Feature>

        <Feature
          number="03"
          title="אנחנו לא משחקים בניחושים"
          media={
            <div className={`${mediaFrameClassName} aspect-[4/3]`}>
              <Image
                src="/assets/hana-bi.jpeg"
                alt="מערכת סריקה AI מתקדמת"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          }
        >
          <p>כל טיפול מתחיל באבחון שכולל סריקה ומדידה דיגיטלית של הקרקפת, ככלי עזר לתכנון ולמעקב. ההחלטה הקלינית מתקבלת על ידי הרופא.</p>
        </Feature>
      </div>
    </section>
  )
}
