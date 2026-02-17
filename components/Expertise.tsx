'use client'

import Section from './Section'
import { Eye, Sparkles, Droplet, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Eye,
    title: 'המסגרת של הפנים',
    description: 'שיקום ועיצוב גבות בשיטה טבעית.',
    gradient: 'from-amber-500/20 to-deep-red/20',
  },
  {
    icon: Sparkles,
    title: 'המבט הנצחי',
    description: 'השתלת ריסים למראה מלא וטבעי.',
    gradient: 'from-purple-500/20 to-deep-red/20',
  },
  {
    icon: Droplet,
    title: 'הזהב הביולוגי (iPRF)',
    description: 'חידוש העור באמצעות מרכיבי הדם שלך.',
    gradient: 'from-blue-500/20 to-deep-red/20',
  },
]

export default function Expertise() {
  return (
    <Section id="expertise" className="py-16 md:py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-deep-red/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-block px-4 py-2 bg-deep-red/10 border border-deep-red/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-deep-red uppercase tracking-wider">טיפולים מובילים</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            תחומי{' '}
            <span className="text-gradient">המומחיות</span>
            <br />
            שלנו
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-2xl`} />
                <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-modern hover:shadow-modern-lg transition-all h-full flex flex-col">
                  <div className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                    <Icon className="w-12 h-12 text-deep-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-lg mb-6 flex-grow">
                    {service.description}
                  </p>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: -5 }}
                    className="inline-flex items-center gap-2 text-deep-red font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    קביעת תור
                    <ArrowLeft className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

