'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const DESKTOP_VIDEO_ID = '2nJJjlzGNOs'
const MOBILE_VIDEO_ID = 'Si61kNqklzY'
const DESKTOP_END_TRIM_SECONDS = 3

const QUALITY_PREFS = ['highres', 'hd2160', 'hd1440', 'hd1080', 'hd720', 'large'] as const

type YTPlayer = {
  mute: () => void
  playVideo: () => void
  seekTo: (seconds: number, allowSeekAhead: boolean) => void
  getCurrentTime: () => number
  getDuration: () => number
  setPlaybackQuality: (quality: string) => void
  getAvailableQualityLevels: () => string[]
  destroy: () => void
}

function forceHighestQuality(player: YTPlayer) {
  const available = player.getAvailableQualityLevels?.() ?? []
  for (const quality of QUALITY_PREFS) {
    if (available.includes(quality)) {
      player.setPlaybackQuality(quality)
      return
    }
  }
}

function buildEmbedSrc(videoId: string) {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    enablejsapi: '1',
    iv_load_policy: '3',
    disablekb: '1',
    fs: '0',
    origin,
  })
  return `https://www.youtube.com/embed/${videoId}?${params}`
}

// Cover the hero at native 16:9 — YouTube picks stream quality from player size, not CSS scale.
const videoCoverStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '100vw',
  height: '56.25vw',
  minHeight: '100vh',
  minWidth: '177.78vh',
  transform: 'translate(-50%, -50%)',
  border: 0,
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [ready, setReady] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)
  const trimIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    setReady(true)
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const videoId = isMobile ? MOBILE_VIDEO_ID : DESKTOP_VIDEO_ID

  const clearTrimInterval = useCallback(() => {
    if (trimIntervalRef.current) {
      clearInterval(trimIntervalRef.current)
      trimIntervalRef.current = null
    }
  }, [])

  const startDesktopTrimLoop = useCallback(
    (player: YTPlayer) => {
      clearTrimInterval()
      if (isMobile) return

      trimIntervalRef.current = setInterval(() => {
        const duration = player.getDuration()
        const current = player.getCurrentTime()
        if (duration > 0 && current >= duration - DESKTOP_END_TRIM_SECONDS) {
          player.seekTo(0, true)
        }
      }, 200)
    },
    [isMobile, clearTrimInterval]
  )

  useEffect(() => {
    if (!ready || !iframeRef.current) return

    const initPlayer = () => {
      const YT = (window as Window & { YT?: { Player: new (el: HTMLIFrameElement, opts: object) => YTPlayer } }).YT
      if (!YT?.Player || !iframeRef.current) return

      playerRef.current?.destroy?.()
      playerRef.current = new YT.Player(iframeRef.current, {
        events: {
          onReady: (event: { target: YTPlayer }) => {
            const player = event.target
            player.mute()
            player.playVideo()
            forceHighestQuality(player)
            startDesktopTrimLoop(player)
          },
          onStateChange: (event: { data: number; target: YTPlayer }) => {
            // Re-apply HD after buffering; YouTube sometimes downgrades mid-playback.
            if (event.data === 1) {
              forceHighestQuality(event.target)
            }
          },
        },
      })
    }

    if (!(window as Window & { YT?: unknown }).YT) {
      const existing = document.querySelector('script[src*="youtube.com/iframe_api"]')
      if (!existing) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
    }

    if ((window as Window & { YT?: { Player?: unknown } }).YT?.Player) {
      initPlayer()
    } else {
      ;(window as Window & { onYouTubeIframeAPIReady?: () => void }).onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      clearTrimInterval()
      playerRef.current?.destroy?.()
      playerRef.current = null
    }
  }, [ready, videoId, startDesktopTrimLoop, clearTrimInterval])

  if (!ready) return <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] bg-black" />

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <iframe
          ref={iframeRef}
          key={videoId}
          src={buildEmbedSrc(videoId)}
          className="pointer-events-none"
          style={videoCoverStyle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          title="סרטון תדמית"
        />
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
