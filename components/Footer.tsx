'use client'

import Link from 'next/link'
import { Mail, Phone, MessageCircle } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'דף הבית' },
  { href: '/hair-transplant', label: 'השתלת שיער' },
  { href: '/eyebrows', label: 'השתלת גבות' },
  { href: '/eyelashes', label: 'השתלת ריסים' },
  { href: '/iprf', label: 'טיפול iPRF' },
]

const legalLinks = [
  { href: '#', label: 'מדיניות פרטיות' },
  { href: '#', label: 'הצהרת נגישות' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 — Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">צור קשר</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@hanabi.co.il" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>info@hanabi.co.il</span>
                </a>
              </li>
              <li>
                <a href="tel:+972-3-000-0000" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span dir="ltr">+972-3-000-0000</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/9720500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span dir="ltr">+972-50-000-0000</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">קישורים מהירים</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Privacy & Accessibility */}
          <div>
            <h3 className="text-lg font-bold mb-6">פרטיות ונגישות</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-deep-red flex flex-col items-center justify-center shrink-0">
              <span className="text-white text-sm font-normal leading-tight" style={{ lineHeight: '1.1' }}>花</span>
              <span className="text-white text-sm font-normal leading-tight" style={{ lineHeight: '1.1' }}>美</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-base font-bold text-white tracking-tight leading-none uppercase">
                HANA BI
              </span>
              <span className="text-[9px] font-medium text-white/60 tracking-wide leading-none mt-0.5">
                Natural Looking
              </span>
            </div>
          </Link>
          <p className="text-sm text-white/50">
            &copy; 2026 HANA BI. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
