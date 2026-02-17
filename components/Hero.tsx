'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
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
              className="absolute inset-0 w-full h-[40vh] md:h-full object-cover"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                minWidth: '100%'
              }}
              onLoadedMetadata={(e) => {
                // Ensure video plays at full quality
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

      {/* Animated Background Elements - shows after video */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 overflow-hidden z-0"
          >
            {/* Geometric shapes */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-deep-red/10 to-deep-red/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-deep-red/8 to-deep-red/3 rounded-full blur-3xl"
            />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
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
            className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          >
            <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-[1.1] tracking-tight"
          >
            <span className="text-charcoal">דיוק יפני חדשנות קוריאנית </span>
            <span className="text-deep-red">HANA BI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-charcoal-light mb-8 max-w-4xl mx-auto leading-relaxed font-normal"
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
              className="inline-flex items-center gap-2 px-10 py-5 bg-deep-red text-white rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-modern"
            >
              לתיאום אבחון טכנולוגי
            </motion.a>
          </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

