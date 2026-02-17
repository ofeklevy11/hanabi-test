'use client'

import Section from './Section'
import { Heart, Sparkles, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Philosophy() {
  const principles = [
    { icon: Heart, text: 'יופי הוא בריאות' },
    { icon: Sparkles, text: 'תוצאות טבעיות לחלוטין' },
    { icon: Eye, text: 'תהליך שמחזיר אותך לשיא שלך' },
  ]

  return (
    <Section id="philosophy" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            יופי הוא{' '}
            <span className="text-gradient">בריאות</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-charcoal-light leading-relaxed font-normal">
              אנו מאמינים שהפנים שלך הן <span className="font-semibold text-charcoal">יצירת מופת</span> שצריך לשמר ולרפא – לא לשנות.
            </p>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
              החזון שלנו הוא להעניק לך תוצאות שנראות טבעיות לחלוטין, ללא חומרים זרים. אצלנו, אין &apos;לפני ואחרי&apos; שמשנה את מי שאת, אלא תהליך שמחזיר אותך לשיא שלך.
            </p>
          </motion.div>

          {/* Image Placeholder with modern styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-deep-red/5 via-white to-deep-red/10" />
            <div className="absolute inset-0 border-2 border-deep-red/10 rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-charcoal/20 text-5xl font-normal">Image</div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-deep-red/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-deep-red/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-modern hover:shadow-modern-lg transition-all group"
              >
                <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-deep-red/20 transition-colors">
                  <Icon className="w-8 h-8 text-deep-red" />
                </div>
                <h3 className="text-xl font-bold text-charcoal">{principle.text}</h3>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

