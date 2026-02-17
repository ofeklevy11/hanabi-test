'use client'

import Section from './Section'
import { Scan, Shield, Sparkles, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Technology() {
  const features = [
    {
      icon: Scan,
      title: 'סריקה תלת-ממדית',
      description: 'אבחון מדויק באמצעות טכנולוגיית AI ו-3D Imaging',
      gradient: 'from-blue-500/10 to-deep-red/10',
    },
    {
      icon: Shield,
      title: 'בטיחות מקסימלית',
      description: 'פרוטוקולים מתקדמים להבטחת תוצאות בטוחות ואמינות',
      gradient: 'from-green-500/10 to-deep-red/10',
    },
    {
      icon: Sparkles,
      title: 'תוצאה הרמונית',
      description: 'עיצוב מותאם אישית המבוסס על המבנה הטבעי שלך',
      gradient: 'from-purple-500/10 to-deep-red/10',
    },
  ]

  return (
    <Section id="technology" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-deep-red/10 border border-deep-red/20 rounded-full mb-6">
            <Cpu className="w-4 h-4 text-deep-red" />
            <span className="text-sm font-semibold text-deep-red uppercase tracking-wider">טכנולוגיה מתקדמת</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
            טכנולוגיית{' '}
            <span className="text-gradient">קצה</span>
            <br />
            בשירות הטבע
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-light max-w-3xl mx-auto leading-relaxed font-normal">
            כדי להגיע לתוצאה טבעית מושלמת, אסור להסתמך על ניחושים.
            <br />
            <span className="text-charcoal/70">המרפאה מצוידת במערכות סריקה תלת-ממדיות (AI & 3D Imaging) המאפשרות אבחון מיקרוסקופית.</span>
          </p>
        </motion.div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl" />
                <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-modern hover:shadow-modern-lg transition-all h-full">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-deep-red" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{feature.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-8 bg-gradient-to-br from-deep-red/5 to-transparent rounded-2xl border border-deep-red/10">
            <div className="text-4xl md:text-5xl font-bold text-deep-red mb-2">100%</div>
            <div className="text-charcoal/70 font-medium">טבעי</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-deep-red/5 to-transparent rounded-2xl border border-deep-red/10">
            <div className="text-4xl md:text-5xl font-bold text-deep-red mb-2">AI</div>
            <div className="text-charcoal/70 font-medium">אבחון מתקדם</div>
          </div>
          <div className="p-8 bg-gradient-to-br from-deep-red/5 to-transparent rounded-2xl border border-deep-red/10">
            <div className="text-4xl md:text-5xl font-bold text-deep-red mb-2">3D</div>
            <div className="text-charcoal/70 font-medium">סריקה תלת-ממדית</div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

