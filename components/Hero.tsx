'use client'

import { useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const VIDEO_SRC = '/files/hero/HERO_VIDEO_DESKTOP.mp4'
const POSTER_SRC = '/files/hero/hero-poster.jpg'
const END_TRIM_SECONDS = 3

const VIDEO_DESCRIPTION =
  'סרטון תדמית קליני של מרפאת HANA BI: סביבת העבודה המיקרו-כירורגית, אבחון קרקפת ועור מבוסס AI, לקיחת הזקיקים בדיוק מיקרוסקופי ללא פגיעה באזור התורם, שימור הזקיקים בכלי ייעודי במערכת הקירור מחוץ לקרקפת, והשתלה בטכניקה היברידית (FUE + DHI) לתוצאה טבעית לכל החיים.'

const videoLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'HANA BI: אסתטיקה ביולוגית מתקדמת',
  description: VIDEO_DESCRIPTION,
  thumbnailUrl: `https://hanabi.co.il${POSTER_SRC}`,
  contentUrl: `https://hanabi.co.il${VIDEO_SRC}`,
  uploadDate: '2026-05-20',
  duration: 'PT9S',
  inLanguage: 'he-IL',
  publisher: { '@id': 'https://hanabi.co.il/#clinic' },
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Loop before the last seconds of the clip, which end on a blank frame
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return
    if (video.currentTime >= video.duration - END_TRIM_SECONDS) video.currentTime = 0
  }, [])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd).replace(/</g, '\\u003c') }}
      />
      {/* Plain HTML5 video, rendered on the server so crawlers see it without running scripts */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        aria-label={VIDEO_DESCRIPTION}
        title="סרטון תדמית קליני של מרפאת HANA BI"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20"
      >
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-[1.1] tracking-tight">
            <span className="text-white">דיוק יפני חדשנות קוריאנית </span>
            <span className="text-deep-red">HANA BI</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-normal">
            מרכז מומחים לאסתטיקה ביולוגית מתקדמת, הפועל לפי הפרוטוקולים הקליניים של יפן ודרום קוריאה. השתלות שיער, גבות,
            ריסים וזקן בטכניקה היברידית (FUE + DHI), לתוצאה טבעית לכל החיים.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-10 py-5 bg-deep-red text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              לתיאום אבחון טכנולוגי
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
