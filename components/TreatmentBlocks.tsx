'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Play, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Shared building blocks for the treatment pages, so they all speak one design language

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
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

export function Chapter({
  number,
  title,
  image,
  alt,
  imageWidth,
  imageHeight,
  lead,
  children,
}: {
  number: string
  title: React.ReactNode
  image: string
  alt: string
  imageWidth: number
  imageHeight: number
  lead: string
  children: React.ReactNode
}) {
  return (
    <article className="py-12 md:py-20 border-t border-charcoal/10 first:border-t-0">
      <Reveal className="flex items-baseline gap-4 md:gap-7 mb-8 md:mb-12">
        <span className="text-5xl md:text-8xl font-light text-deep-red tabular-nums leading-none" aria-hidden>
          {number}
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">{title}</h3>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.45)]">
          <Image
            src={image}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-auto"
            quality={95}
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1} className="grid lg:grid-cols-12 gap-x-16 gap-y-8 mt-10 md:mt-14">
        <p className="lg:col-span-5 text-xl md:text-2xl text-charcoal leading-relaxed">{lead}</p>
        <div className="lg:col-span-7 text-lg text-charcoal/70 leading-relaxed space-y-6">{children}</div>
      </Reveal>
    </article>
  )
}

export function DetailList({ items }: { items: { term: string; text: string }[] }) {
  return (
    <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
      {items.map(({ term, text }) => (
        <li key={term} className="py-5">
          <h4 className="text-lg font-bold text-charcoal mb-1">{term}</h4>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  )
}

export type TimelineStep = {
  kind: 'stage' | 'check' | 'final'
  step?: number
  title: string
  when: string
  text: string
  images?: { src: string; alt: string }[]
}

// Phone: a swipeable row of equal-height cards. Desktop: a vertical list along a side line
export function RecoveryTimeline({ steps, tone = 'white' }: { steps: TimelineStep[]; tone?: 'white' | 'paper' }) {
  return (
    <>
      <ol className="no-scrollbar relative max-w-5xl -mx-6 md:mx-auto px-6 md:px-0 pb-2 md:pb-0 flex md:block gap-4 md:space-y-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
        <div className="hidden md:block absolute top-8 bottom-8 right-6 w-px bg-gradient-to-b from-deep-red/50 via-deep-red/25 to-deep-red/5" aria-hidden />

        {steps.map(({ kind, step, title, when, text, images = [] }, i) => {
          const marker = (className: string) => (
            <div
              className={`shrink-0 rounded-full items-center justify-center ${className} ${
                kind === 'stage' ? 'bg-white ring-2 ring-deep-red text-deep-red' : 'bg-deep-red text-white'
              }`}
              aria-hidden
            >
              {kind === 'stage' && <span className="text-lg font-bold">{step}</span>}
              {kind === 'check' && <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />}
              {kind === 'final' && <Sparkles className="w-5 h-5 md:w-6 md:h-6" />}
            </div>
          )
          return (
            <li key={title} className="relative shrink-0 w-[84vw] max-w-[360px] md:w-auto md:max-w-none snap-center flex md:block md:pr-24">
              {marker('hidden md:flex absolute top-8 right-0 z-10 w-12 h-12')}

              <div className={`w-full rounded-3xl ring-1 ring-charcoal/10 p-6 md:p-10 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.4)] ${tone === 'paper' ? 'bg-paper' : 'bg-white'}`}>
                <div className={`h-full flex flex-col md:grid gap-6 md:gap-12 md:items-center ${images.length > 0 ? 'md:grid-cols-[1fr_auto]' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3">
                      {marker('flex md:hidden w-10 h-10')}
                      <p className="text-sm font-bold text-deep-red bg-deep-red/[0.07] rounded-full px-3.5 py-1">{when}</p>
                      <span className="md:hidden ms-auto text-sm text-charcoal/40 tabular-nums" aria-hidden>
                        {i + 1} / {steps.length}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-charcoal mt-4 mb-3 md:mb-4 tracking-tight">{title}</h3>
                    <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">{text}</p>
                  </div>

                  {images.length > 0 && (
                    <div className="mt-auto md:mt-0 flex justify-center gap-3">
                      {images.map(({ src, alt }) => (
                        <div key={src} className="rounded-2xl overflow-hidden ring-1 ring-black/5">
                          <Image src={src} alt={alt} width={600} height={800} className="h-48 md:h-60 w-auto max-w-none" quality={95} sizes="210px" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
      <p className="md:hidden text-center text-sm text-charcoal/50 mt-5">החליקו הצידה כדי לראות את כל השלבים</p>
    </>
  )
}

export const fieldClassName =
  'w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg'

// Plays muted while at least half of it is on screen, pauses when scrolled away
export function AutoplayVideo({ src, label, className }: { src: string; label: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={`${src}#t=0.001`}
      className={className ?? 'block w-full aspect-[9/16]'}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  )
}

// A row of portrait YouTube videos across the full width. Each shows its cover until tapped,
// so the page does not load seven players at once. Desktop: all in one row. Phone: swipe sideways.
export function VideoWall({ ids, label }: { ids: string[]; label: string }) {
  const [playing, setPlaying] = useState<string | null>(null)

  return (
    <div className="no-scrollbar flex gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none px-6 lg:px-8 pb-2">
      {ids.map((id, i) => (
        <div
          key={id}
          className="relative shrink-0 lg:shrink lg:min-w-0 lg:flex-1 w-[58vw] max-w-[280px] lg:w-auto lg:max-w-none aspect-[9/16] snap-center rounded-2xl lg:rounded-3xl overflow-hidden bg-black ring-1 ring-black/5 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.55)]"
        >
          {playing === id ? (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&loop=1&playlist=${id}&rel=0&modestbranding=1&playsinline=1`}
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={`${label} ${i + 1}`}
            />
          ) : (
            <button type="button" onClick={() => setPlaying(id)} className="group absolute inset-0 w-full h-full" aria-label={`הפעלת ${label} ${i + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
                onError={(e) => {
                  const img = e.currentTarget
                  if (!img.src.endsWith('hqdefault.jpg')) img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
                }}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden>
                <Play className="w-6 h-6 text-deep-red fill-deep-red translate-x-[1px]" />
              </span>
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

// A row of our own portrait videos. Desktop: side by side. Phone: swipe sideways.
export function LocalVideoWall({ videos }: { videos: { src: string; label: string }[] }) {
  return (
    <div className="no-scrollbar flex gap-4 lg:gap-6 lg:justify-center overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none px-6 lg:px-8 pb-2">
      {videos.map(({ src, label }) => (
        <div
          key={src}
          className="shrink-0 lg:shrink lg:min-w-0 lg:flex-1 w-[68vw] max-w-[300px] lg:w-auto lg:max-w-[360px] snap-center rounded-[2rem] bg-white ring-1 ring-charcoal/10 p-2 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.45)]"
        >
          <div className="rounded-[1.6rem] overflow-hidden bg-black">
            <AutoplayVideo src={src} label={label} />
          </div>
        </div>
      ))}
    </div>
  )
}
