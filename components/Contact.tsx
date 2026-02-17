'use client'

import { useState } from 'react'
import Section from './Section'
import { Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', phone: '', interest: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Section id="contact" className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-deep-red/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-block px-4 py-2 bg-deep-red/10 border border-deep-red/20 rounded-full mb-4">
            <span className="text-sm font-semibold text-deep-red uppercase tracking-wider">בואו נתחיל</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4 leading-tight">
            הצעד הראשון ליופי טבעי
            <br />
            <span className="text-gradient">מתחיל באבחון</span>
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-modern-lg border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-deep-red/5 to-transparent rounded-full blur-3xl" />
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
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-deep-red/20 focus:border-deep-red transition-all text-right text-lg bg-gray-50/50 hover:bg-white"
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
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-deep-red/20 focus:border-deep-red transition-all text-right text-lg bg-gray-50/50 hover:bg-white"
                placeholder="הזן מספר טלפון"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-charcoal font-semibold mb-3 text-right text-lg">
                תחום עניין
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-deep-red/20 focus:border-deep-red transition-all text-right text-lg bg-gray-50/50 hover:bg-white"
              >
                <option value="">בחר תחום עניין</option>
                <option value="brows">שיקום ועיצוב גבות</option>
                <option value="lashes">השתלת ריסים</option>
                <option value="iprf">iPRF - הזהב הביולוגי</option>
                <option value="consultation">ייעוץ כללי</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-deep-red text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-deep-red-dark transition-all flex items-center justify-center gap-3 shadow-modern-lg shadow-red-glow mt-4"
            >
              אני רוצה לשמוע פרטים
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          </div>
        </motion.form>
      </div>
    </Section>
  )
}

