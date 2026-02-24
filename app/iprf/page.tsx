'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function IPRF() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  // Array of video sources - you can add more videos here
  const videos = [
    '/videos/iprf-video-1.mp4', // Replace with your actual video paths
    '/videos/iprf-video-2.mp4',
    '/videos/iprf-video-3.mp4',
  ]
  
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }
  
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '' })
    alert('תודה! נחזור אליך בהקדם לתיאום פגישת ייעוץ.')
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
            src="/files/hero/iprf.jpeg"
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

      {/* First Image Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-modern-lg bg-gray-100">
              <Image
                src="/assets/IMG_0465.png"
                alt="iPRF Treatment"
                fill
                className="object-cover"
                quality={95}
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {contentBlocks.map((block, index) => {
              if (block.layout === 'center') {
                // Center aligned block
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="max-w-4xl mx-auto"
                  >
                    <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed font-normal text-center">
                      {block.text}
                    </p>
                  </motion.div>
                )
              }

              // Full width text blocks
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="max-w-5xl mx-auto"
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed font-normal text-right">
                    {block.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-modern-lg bg-black">
              <AnimatePresence mode="wait">
                <motion.video
                  key={currentVideoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={videos[currentVideoIndex]}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  autoPlay
                  muted
                />
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                    aria-label="סרטון קודם"
                  >
                    <ChevronRight className="w-6 h-6 text-charcoal" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                    aria-label="סרטון הבא"
                  >
                    <ChevronLeft className="w-6 h-6 text-charcoal" />
                  </button>
                </>
              )}
              
              {/* Video Indicators */}
              {videos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentVideoIndex
                          ? 'bg-deep-red w-8'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`עבור לסרטון ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-8 md:py-10 bg-soft-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              תני לגוף שלך את הכוח לתקן את עצמו
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-light max-w-3xl mx-auto leading-relaxed font-normal">
              השאירי פרטים ונבדוק יחד אם הטיפול מתאים לך
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-modern-lg border border-gray-100 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-deep-red/5 to-transparent rounded-full blur-3xl" />
            
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
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-deep-red/20 focus:border-deep-red transition-all text-right text-lg bg-gray-50/50 hover:bg-white"
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
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-deep-red/20 focus:border-deep-red transition-all text-right text-lg bg-gray-50/50 hover:bg-white"
                    placeholder="הזן מספר טלפון נייד"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(153, 0, 0, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-deep-red text-white px-8 py-5 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-modern-lg shadow-red-glow mt-6"
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
