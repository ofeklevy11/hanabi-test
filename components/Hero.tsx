'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const DESKTOP_VIDEO_ID = '2nJJjlzGNOs'
const MOBILE_VIDEO_ID = 'Si61kNqklzY'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    setReady(true)
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const videoId = isMobile ? MOBILE_VIDEO_ID : DESKTOP_VIDEO_ID

  if (!ready) return <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] bg-black" />

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - loops forever */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <iframe
          key={videoId}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&playsinline=1`}
          className="absolute border-0 pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            width: '300%',
            height: '300%',
            transform: 'translate(-50%, -50%)',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="סרטון תדמית"
        />
      </div>

      {/* Content overlay on top of video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pointer-events-none"
      >
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-[1.1] tracking-tight"
          >
            <span className="text-white">דיוק יפני חדשנות קוריאנית </span>
            <span className="text-deep-red">HANA BI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            מרכז מומחים לטיפולי אסתטיקה ושיקום, לתוצאות שנראות כאילו היו שם תמיד. הטכנולוגיה המתקדמת שלנו מאפשרת לשדרג את השיער והעור ללא זכר להתערבות רפואית, ללא צלקות, ותוך שמירה מוחלטת על מראה נקי ובריא.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto inline-flex items-center gap-2 px-10 py-5 bg-deep-red text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              לתיאום אבחון טכנולוגי
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Clean transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
