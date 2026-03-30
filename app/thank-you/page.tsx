'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

export default function ThankYou() {
  useEffect(() => {
    // Fire Facebook Lead conversion event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead')
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-deep-red/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-deep-red/3 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-200">
              <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              תודה <span className="text-deep-red">רבה!</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-light leading-relaxed mb-4">
              פנייתך התקבלה בהצלחה
            </p>
            <p className="text-lg text-charcoal/60 leading-relaxed max-w-lg mx-auto">
              צוות המומחים שלנו יחזור אליך בהקדם האפשרי לתיאום פגישת ייעוץ אישית
            </p>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 bg-white p-8 rounded-3xl shadow-modern-lg border border-gray-100"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-deep-red" />
              <span className="text-lg font-semibold text-charcoal">מה קורה עכשיו?</span>
            </div>
            <div className="space-y-3 text-charcoal/70">
              <p className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-deep-red/10 text-deep-red text-sm font-bold flex items-center justify-center shrink-0">1</span>
                <span>הפרטים שלך התקבלו במערכת</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-deep-red/10 text-deep-red text-sm font-bold flex items-center justify-center shrink-0">2</span>
                <span>נציג מצוות HANA BI ייצור איתך קשר</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-deep-red/10 text-deep-red text-sm font-bold flex items-center justify-center shrink-0">3</span>
                <span>נתאם פגישת אבחון טכנולוגי מותאמת אישית</span>
              </p>
            </div>
          </motion.div>

          {/* Back to home button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(153, 0, 0, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-deep-red text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-modern-lg shadow-red-glow"
              >
                <ArrowRight className="w-5 h-5" />
                חזרה לדף הבית
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
