'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SplitHeroProps = {
  src: string
  alt: string
  /** CSS object-position for the desktop image column, e.g. "50% 30%" */
  desktopPosition?: string
  /** Aspect ratio of the image on phones and tablets, e.g. "4 / 5" */
  mobileAspect: string
  mobilePosition?: string
  /** Leaves room for the fixed navbar when the page has one */
  withNavbar?: boolean
  children: ReactNode
}

/**
 * Hero that always shows the photo whole and in proportion:
 * phones and tablets stack the photo above the text, desktops place them side by side.
 */
export default function SplitHero({
  src,
  alt,
  desktopPosition = '50% 50%',
  mobileAspect,
  mobilePosition = '50% 50%',
  withNavbar = true,
  children,
}: SplitHeroProps) {
  return (
    <section className={`relative bg-paper overflow-hidden ${withNavbar ? 'pt-20' : ''}`}>
      {/* Very wide screens keep the same proportions instead of stretching the photo */}
      <div
        className={`relative mx-auto max-w-[1760px] lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] ${
          withNavbar ? 'lg:h-[clamp(520px,calc(100svh-5rem),900px)]' : 'lg:h-[clamp(520px,100svh,900px)]'
        }`}
      >
      {/* Photo: first in the DOM, so it sits on the right in RTL */}
      <div
        className="relative w-full aspect-[var(--ar)] max-h-[45svh] md:max-h-[52svh] lg:max-h-none lg:aspect-auto lg:h-full"
        style={{ '--ar': mobileAspect, '--pos-m': mobilePosition, '--pos-d': desktopPosition } as React.CSSProperties}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={92}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover [object-position:var(--pos-m)] lg:[object-position:var(--pos-d)]"
        />
        {/* Soft seam into the text panel */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-paper to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-paper to-transparent min-[1780px]:block" />
      </div>

      <div className="relative flex items-center">
        <div className="bio-grid absolute inset-0 opacity-60" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full px-6 pb-10 pt-4 text-center sm:px-10 lg:px-12 lg:py-16 lg:text-right 2xl:px-20"
        >
          {children}
        </motion.div>
      </div>
      </div>
    </section>
  )
}
