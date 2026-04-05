'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const PAGES_WITHOUT_FORM = ['/thank-you', '/accessibility', '/privacy', '/terms']

export default function FloatingCTA() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (PAGES_WITHOUT_FORM.includes(pathname)) return null

  const handleClick = () => {
    const el = document.getElementById('appointment') || document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 bg-deep-red hover:bg-deep-red-dark text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
      aria-label="קביעת פגישה"
    >
      קביעת פגישה
    </button>
  )
}
