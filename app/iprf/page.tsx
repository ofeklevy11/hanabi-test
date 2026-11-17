'use client'

import Navbar from '@/components/Navbar'
import { submitLead } from '@/lib/submitLead'
import { Reveal, LocalVideoWall } from '@/components/TreatmentBlocks'
import Footer from '@/components/Footer'
import TreatmentFaq from '@/components/TreatmentFaq'
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
      text: "טיפול ה-iPRF מבוסס על חומר שמופק מדמו של המטופל עצמו. בשלב הראשון נלקחת כמות קטנה של דם מהוריד, בהליך הדומה לבדיקת דם רגילה. הדם מועבר לצנטריפוגה מבוקרת מהירות, שמפרידה בין רכיביו ומפיקה מטריצת פיברין אוטולוגית העשירה בטסיות, בלויקוציטים ובגורמי צמיחה. החומר המרוכז הזה מוזרק בהמשך לאזור הטיפול.",
      layout: "full",
    },
    {
      text: "בניגוד לחומרים שנספגים במהירות, מטריצת הפיברין פועלת כמאגר: היא כולאת את גורמי הצמיחה ומשחררת אותם בהדרגה במשך כעשרה ימים רצופים. כך האזור מקבל גירוי מתמשך לתיקון ולהתחדשות הרקמה, ולא דחף חד-פעמי שנעלם תוך זמן קצר.",
      layout: "full",
    },
    {
      text: "עם הגיל יורדת ייצור הקולגן והאלסטין בעור. הגירוי שנוצר בטיפול מעודד את התאים לייצר מחדש את מרכיבי המבנה של העור, ובכך משפר את המרקם והגמישות. בצלקות פוסט-אקנה הטיפול מסייע לשחזור הרקמה הצלקתית, ולבניית עור חלק ויותר יציב לאורך זמן.",
      layout: "full",
    },
    {
      text: "נשירת שיער נקשרת לעיתים קרובות לירידה באספקת הדם ולהזנה לא מספקת של זקיק השיער. החומר המוזרק מעודד יצירת כלי דם חדשים סביב הזקיק, תהליך הנקרא אנגיוגנזה, וכך משפר את אספקת החמצן והחומרים המזינים לשורש. הטיפול מיועד למי שרוצה לעצור נשירה ולחזק שיער קיים, וגם למי שעבר השתלה ורוצה לתמוך בקליטת הזקיקים החדשים.",
      layout: "full",
    },
    {
      text: "הטיפול מבוסס על חומרים מגוף המטופל עצמו, ולכן אין בו חומרים סינתטיים או תרופות. השיפור נשמר לכל החיים כחלק מהתהליך המצטבר, ותלוי בהתאמה נכונה של הטיפול לכל מטופל. ההתאמה נקבעת בבדיקה אישית לפני תחילת הטיפול.",
      layout: "center",
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
      <TreatmentFaq items={[
  { q: "מה הטיפול iPRF?", a: "טיפול iPRF מבוסס על מטריצת פיברין אוטולוגית שמופקת מדמו של המטופל עצמו. החומר מוזרק לאזור הטיפול, ואין בו חומרים סינתטיים או תרופות." },
  { q: "כמה זמן נמשך הטיפול?", a: "הטיפול עצמו קצר יחסית. גורמי הצמיחה משתחררים בהדרגה במשך כעשרה ימים רצופים, ומספר הטיפולים הנדרש נקבע בהתייעצות." },
  { q: "האם iPRF מתאים לכולם?", a: "לא בהכרח. מטופלים עם מצבים רפואיים מסוימים או שנוטלים תרופות מסוימות צריכים בדיקה נוספת לפני הטיפול." },
  { q: "למה iPRF עוזר לשיער ולעור?", a: "החומר מעודד יצירת כלי דם חדשים סביב הזקיק, ומגרה את התאים לייצר מחדש קולגן ואלסטין. התוצאה נשמרת לכל החיים כחלק מהתהליך המצטבר." },
      ]} />
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
              תאמו אבחון קליני מבוסס AI לקביעת פרוטוקול טיפול לתוצאה לכל החיים
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
