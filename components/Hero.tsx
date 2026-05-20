'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const DESKTOP_VIDEO_SRC = '/files/hero/HERO_VIDEO_DESKTOP.mp4'
const MOBILE_VIDEO_ID = 'Si61kNqklzY'
const DESKTOP_END_TRIM_SECONDS = 3

const videoCoverClassName =
  'absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0'

function buildMobileEmbedSrc(videoId: string) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    disablekb: '1',
    fs: '0',
    cc_load_policy: '0',
    origin: typeof window !== 'undefined' ? window.location.origin : '',
  })
  return `https://www.youtube.com/embed/${videoId}?${params}`
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    setReady(true)
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDesktopTimeUpdate = useCallback(() => {
    const video = desktopVideoRef.current
    if (!video || !Number.isFinite(video.duration)) return
    if (video.currentTime >= video.duration - DESKTOP_END_TRIM_SECONDS) {
      video.currentTime = 0
    }
  }, [])

  useEffect(() => {
    if (isMobile || !desktopVideoRef.current) return
    const video = desktopVideoRef.current
    video.play().catch(() => {})
  }, [isMobile, ready])

  if (!ready) return <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] bg-black" />

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {isMobile ? (
          <iframe
            key={MOBILE_VIDEO_ID}
            src={buildMobileEmbedSrc(MOBILE_VIDEO_ID)}
            className={videoCoverClassName}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="סרטון תדמית"
          />
        ) : (
          <video
            ref={desktopVideoRef}
            src={DESKTOP_VIDEO_SRC}
            className={`${videoCoverClassName} object-cover`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleDesktopTimeUpdate}
            aria-hidden
          />
        )}
      </div>

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

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
