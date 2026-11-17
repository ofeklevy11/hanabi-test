'use client'

import { useState } from 'react'
import { submitLead } from '@/lib/submitLead'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = { ...formData, source: 'טופס קביעת פגישה', submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }) }
      if (await submitLead(payload)) router.push('/thank-you')
    } catch (error) {
      alert('אירעה שגיאה, אנא נסה שוב.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="appointment" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="bio-grid absolute inset-x-0 top-0 h-96" aria-hidden />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal mb-4 leading-tight">
            קביעת פגישת <span className="text-deep-red">ייעוץ</span>
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-light max-w-3xl mx-auto leading-relaxed font-normal">
            תאמו אבחון קליני מבוסס AI לקביעת פרוטוקול אישי לתוצאה לכל החיים.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-7 md:p-10 rounded-3xl relative overflow-hidden ring-1 ring-charcoal/10 shadow-[0_40px_100px_-45px_rgba(0,0,0,0.35)]"
        >
          {/* Decorative gradient */}
          
          <div className="relative z-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                  placeholder="הזן את שמך המלא"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                  placeholder="הזן מספר טלפון"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                  placeholder="הזן כתובת אימייל"
                />
              </div>

              <div>
                <label htmlFor="treatment" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                  תחום עניין
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg"
                >
                  <option value="">בחר תחום עניין</option>
                  <option value="hair-transplant">השתלת שיער</option>
                  <option value="eyebrows">השתלת גבות</option>
                  <option value="eyelashes">השתלת ריסים</option>
                  <option value="iprf">טיפול iPRF</option>
                  <option value="consultation">ייעוץ כללי</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                  הודעה (אופציונלי)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-soft-grey border border-charcoal/10 focus:outline-none focus:border-deep-red focus:ring-2 focus:ring-deep-red/15 transition-all text-right text-lg resize-none"
                  placeholder="השאר הודעה (אופציונלי)"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToPrivacy}
                  onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 accent-deep-red cursor-pointer shrink-0"
                />
                <span className="text-sm text-charcoal/70 leading-relaxed">
                  אני מאשר/ת את{' '}
                  <Link href="/privacy" target="_blank" className="text-deep-red hover:underline font-medium">
                    מדיניות הפרטיות
                  </Link>{' '}
                  ומסכים/ה לשימוש בפרטים שמסרתי לצורך יצירת קשר.
                </span>
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-deep-red text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-deep-red-dark transition-colors flex items-center justify-center gap-3 mt-4"
              >
                תיאום אבחון קליני
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

