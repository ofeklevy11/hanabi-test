'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#treatments', label: 'טיפולים' },
  ]

  const treatmentLinks = [
    { href: '/hair-transplant', label: 'השתלת שיער' },
    { href: '/eyebrows', label: 'השתלת גבות' },
    { href: '/eyelashes', label: 'השתלת ריסים' },
    { href: '/iprf', label: 'טיפול iPRF' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-modern border-b border-gray-100'
          : transparent
            ? 'bg-transparent'
            : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5"
          >
            {/* Red square with Japanese characters - exact square */}
            <div className={`w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center shrink-0 transition-colors duration-300 ${
              transparent && !isScrolled ? 'bg-white' : 'bg-deep-red'
            }`}>
              <span className={`text-base md:text-lg font-normal leading-tight transition-colors duration-300 ${
                transparent && !isScrolled ? 'text-deep-red' : 'text-white'
              }`} style={{ lineHeight: '1.1' }}>花</span>
              <span className={`text-base md:text-lg font-normal leading-tight transition-colors duration-300 ${
                transparent && !isScrolled ? 'text-deep-red' : 'text-white'
              }`} style={{ lineHeight: '1.1' }}>美</span>
            </div>
            {/* Text - aligned to left of square */}
            <div className="flex flex-col justify-center">
              <span className={`text-lg md:text-xl font-bold tracking-tight leading-none uppercase transition-colors duration-300 ${
                transparent && !isScrolled ? 'text-white' : 'text-deep-red'
              }`}>
                HANA BI
              </span>
              <span className={`text-[10px] md:text-xs font-medium tracking-wide leading-none mt-0.5 transition-colors duration-300 ${
                transparent && !isScrolled ? 'text-white/80' : 'text-deep-red'
              }`}>
                Natural Looking
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                className="relative group"
              >
                <motion.a
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className={`relative hover:text-deep-red transition-colors duration-200 text-sm font-semibold tracking-wide ${
                    transparent && !isScrolled ? 'text-white' : 'text-charcoal'
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 right-0 w-0 h-0.5 bg-deep-red group-hover:w-full transition-all duration-300"
                    initial={false}
                  />
                </motion.a>
                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-modern-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {treatmentLinks.map((treatment) => (
                      <a
                        key={treatment.href}
                        href={treatment.href}
                        className="block px-4 py-2 text-sm text-charcoal/70 hover:text-deep-red hover:bg-deep-red/5 transition-colors"
                      >
                        {treatment.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(153, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-deep-red text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-modern"
            >
              לקביעת תור
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent && !isScrolled ? 'text-white hover:bg-white/10' : 'text-charcoal hover:bg-gray-100'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-charcoal hover:text-deep-red transition-colors duration-200 text-base font-semibold py-2"
              >
                {link.label}
              </motion.a>
            ))}
            
            {/* Treatment Links */}
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-3">
                טיפולים
              </div>
              {treatmentLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + index) * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-charcoal/70 hover:text-deep-red transition-colors duration-200 text-sm font-medium py-2 pr-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#appointment"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + treatmentLinks.length) * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-deep-red text-white px-6 py-3 rounded-full text-base font-semibold text-center hover:opacity-90 transition-all shadow-modern mt-4"
            >
              לקביעת תור
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

