'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleEnded = () => {
        setVideoEnded(true)
        // Small delay before showing content for smooth transition
        setTimeout(() => {
          setShowContent(true)
        }, 300)
      }
      video.addEventListener('ended', handleEnded)
      return () => video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background - shows first, then disappears */}
      <AnimatePresence>
        {!videoEnded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-30"
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectFit: 'cover',
                width: '100%',
                minWidth: '100%'
              }}
              onLoadedMetadata={(e) => {
                const video = e.target as HTMLVideoElement
                if (video) {
                  video.currentTime = 0
                }
              }}
            >
              <source src="/gemini_generated_video_6A92905C.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image - shows after video */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/files/hero/eyebrows.jpg"
              alt="HANA BI"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content - shows after video ends */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20"
          >
            <div className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-[1.1] tracking-tight"
              >
                <span className="text-white">דיוק יפני חדשנות קוריאנית </span>
                <span className="text-deep-red">HANA BI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-normal"
              >
                מרכז מומחים לטיפולי אסתטיקה ושיקום, לתוצאות שנראות כאילו היו שם תמיד. הטכנולוגיה המתקדמת שלנו מאפשרת לשדרג את השיער והעור ללא זכר להתערבות רפואית, ללא צלקות, ותוך שמירה מוחלטת על מראה נקי ובריא.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2"
              >
                <motion.a
                  href="#appointment"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-deep-red text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  לתיאום אבחון טכנולוגי
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clean transition to next section */}
      {showContent && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      )}
    </section>
  )
}

