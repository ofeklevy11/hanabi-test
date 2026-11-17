'use client'

import Navbar from '@/components/Navbar'
import { submitLead } from '@/lib/submitLead'
import { Reveal, LocalVideoWall } from '@/components/TreatmentBlocks'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function IPRF() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const videos = [
    { src: '/files/iprf/iprf-1.mp4', label: 'טיפול iPRF - סרטון 1' },
    { src: '/files/iprf/iprf-2.mp4', label: 'טיפול iPRF - סרטון 2' },
    { src: '/files/iprf/iprf-3.mp4', label: 'טיפול iPRF - סרטון 3' },
  ]

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = { ...formData, source: 'דף iPRF', submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }) }
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

  const contentBlocks = [
    {
      text: "הטיפול הוא פשוט מהיר וכמעט ללא כאב והוא מתחיל בלקיחת כמות קטנה של דם מהוריד ממש כמו בבדיקת דם רגילה בקופת חולים לאחר מכן אנו מעבירים את המבחנה למכשיר צנטריפוגה מיוחד שמסובב את הדם במהירות מדויקת ומפריד בין תאי הדם האדומים שאותם אנחנו לא צריכים לבין הזהב הנוזלי שנקרא פיברין בחומר המרוכז הזה נמצאים תאי הדם הלבנים שהם למעשה הרופאים הקטנים של הגוף התאים הללו הם חלק מהמערכת החיסונית ויש להם יכולת מופלאה לרפא דלקות לבנות רקמות חדשות ולהזרים חמצן למקומות שזקוקים לשיקום וברגע שאנחנו מזריקים אותם בריכוז גבוה לאזור המטופל הם מתחילים מיד בעבודת התיקון וההתחדשות",
      layout: 'full', // Full width text
    },
    {
      text: "תחשבו על ה-iPRF כעל גרסה משודרגת וחכמה יותר של הדם שלכם כי בעוד שבשיטות הישנות החומרים הטובים שהוזרקו לגוף השתחררו ונעלמו מהר מאוד הטכנולוגיה החדשה שלנו יודעת לכלוא את אותם חומרים מזינים בתוך רשת פיברין חכמה שמשחררת אותם לאט לאט למשך עשרה ימים רצופים וזה אומר שהגוף שלכם מקבל בוסט קבוע ומתמשך של אנרגיה והתחדשות שעובד מסביב לשעון כדי לייצר תוצאה אמיתית ועמוקה שנשמרת לאורך זמן ולא אפקט רגעי שנעלם",
      layout: 'full', // Full width text
    },
    {
      text: "העור שלנו הוא כמו מנוע שמתעייף עם השנים ומפסיק לייצר את החומרים ששומרים עליו מתוח ורענן ולכן הטיפול הזה הוא בעצם שיחת השכמה לתאים העייפים אנו מזריקים להם אנרגיה מרוכזת שגורמת להם לחזור ולייצר קולגן טבעי בדיוק כמו שהיו עושים פעם והתוצאה היא לא רק עור זוהר ורענן יותר אלא גם פתרון מדהים למי שסובל מצלקות אקנה ישנות כי החומר הפעיל יודע לפרק את הצלקת מבפנים ולבנות במקומה עור חדש וחלק",
      layout: 'full', // Full width text
    },
    {
      text: "נשירת שיער ושיער דליל הם הרבה פעמים סימן שהשורשים פשוט נרדמו כי הם לא מקבלים מספיק הזנה והטיפול הזה פועל כמו דשן ביולוגי עוצמתי שבונה כלי דם חדשים סביב זקיק השערה וברגע שהשורש מקבל חמצן ורכיבים תזונתיים שהיו חסרים לו הוא מתעורר מחדש לחיים זהו הפתרון האידיאלי למי שרוצה לעצור את הנשירה ולעבות את השיער הקיים וגם למי שעבר השתלה ורוצה להבטיח שהזקיקים החדשים ייקלטו בצורה הטובה ביותר",
      layout: 'full', // Full width text
    },
    {
      text: "היופי הגדול בשיטה הזו הוא השקט הנפשי והבטיחות המוחלטת כי אין כאן חומרים כימיים אין תרופות ואין שום דבר זר שנכנס לגוף הכל מגיע מהגוף שלך וחוזר אל הגוף שלך בצורה מזוקקת ומרוכזת יותר וזה אומר שאין שום חשש לתגובות אלרגיות או דחייה וההחלמה היא כמעט מיידית זה פשוט לתת לטבע לעשות את שלו רק הרבה יותר מהר ויעיל",
      layout: 'center', // Center aligned
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar transparent />

      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/files/hero/iprf-hero.jpg"
            alt="iPRF התחדשות ביולוגית - HANA BI"
            fill
            className="object-cover object-[64%_50%] md:object-[60%_50%]"
            quality={95}
            priority
            sizes="100vw"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
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
              className="text-5xl md:text-7xl lg:text-7xl 2xl:text-8xl font-bold text-white leading-[1.05] tracking-tight"
            >
              iPRF <span className="text-deep-red">התחדשות ביולוגית</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal max-w-5xl mx-auto leading-relaxed">
                פריצת דרך מהפכנית המעניקה מענה ביולוגי משולש לעצירת נשירת השיער חידוש מרקם עור הפנים ושחזור עמוק של עור צלקתי
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
                לתיאום פגישת ייעוץ
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Process image */}
      <section className="relative bg-white pt-16 md:pt-24 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-96" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.45)] bg-soft-grey">
              <Image
                src="/files/IPRF.jpeg"
                alt="תהליך טיפול iPRF - לקיחת דם, צנטריפוגה והפרדה, הזרקה והתחדשות"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content: numbered rows */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {contentBlocks.map((block, index) => (
            <Reveal key={index} className="grid md:grid-cols-[7rem_1fr] gap-3 md:gap-10 py-10 md:py-14 border-t border-charcoal/10 first:border-t-0">
              <span className="text-5xl md:text-7xl font-light text-deep-red tabular-nums leading-none" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-lg md:text-2xl text-charcoal/80 leading-relaxed">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Treatment videos across the screen */}
      <section className="relative bg-paper py-20 md:py-28 overflow-hidden">
        <div className="bio-grid absolute inset-0" aria-hidden />
        <Reveal className="relative text-center px-6 mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal tracking-tight">מטופלים שלנו</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
        </Reveal>
        <div className="relative max-w-[1240px] mx-auto">
          <LocalVideoWall videos={videos} />
        </div>
        <p className="lg:hidden relative text-center text-sm text-charcoal/50 mt-5">החליקו הצידה כדי לראות את כל הסרטונים</p>
      </section>

      {/* Consultation Form Section */}
      <section id="appointment" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              הגוף שלך יכול לתקן את עצמו
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-light max-w-3xl mx-auto leading-relaxed font-normal">
              השאירו פרטים ונבדוק יחד אם הטיפול מתאים לכם
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-7 md:p-10 rounded-3xl relative overflow-hidden ring-1 ring-charcoal/10 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.35)]"
          >
            {/* Decorative gradient */}
            
            
            <div className="relative z-10">
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label htmlFor="name" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                    placeholder="הזן את שמך המלא"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                    טלפון נייד
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                    placeholder="הזן מספר טלפון נייד"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer mt-2">
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
                  className="w-full bg-deep-red text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-deep-red-dark transition-colors mt-6"
                >
                  לתיאום פגישת ייעוץ
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
