'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, Shield } from 'lucide-react'
import Image from 'next/image'

export default function WhyAsia() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-tight">
            למה המזרח הרחוק מוביל את עולם האסתטיקה?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mb-10"
        >
          <div className="text-xl md:text-2xl text-charcoal-light leading-relaxed font-normal text-center max-w-4xl mx-auto space-y-2">
            <p>
              בעולם האסתטיקה הרפואית, קוריאה ויפן נמצאות עשור אחד לפני כולם
            </p>
            <p>
              <span className="text-deep-red font-semibold">HANA BI הביאה את העתיד הזה לכאן</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 text-center">
            ההבדל הטכנולוגי
          </h3>
          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            הטכנולוגיה שלנו מאפשרת רמת דיוק מיקרוסקופית, הרחק מעבר למה שהעין האנושית מסוגלת לראות. דיוק זה מבטיח החלמה מואצת, ותוצאות סופיות שלא ניתן להשיג בשיטות מסורתיות.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Nano-Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-soft-grey rounded-2xl border border-gray-100 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
              <Image
                src="/assets/IMG_0457.PNG"
                alt="Nano-Tools (יפן) - Advanced Medical Tools"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-deep-red" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal">
                  Nano-Tools (יפן)
                </h4>
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                שימוש במחטים וכלי השתלה דקים פי 3 מהסטנדרט, המאפשרים צפיפות שיער גבוהה ב-40% והחלמה כמעט מיידית.
              </p>
            </div>
          </motion.div>

          {/* Bio-Integration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-soft-grey rounded-2xl border border-gray-100 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
              <Image
                src="/assets/IMG_0459.PNG"
                alt="Bio-Integration (קוריאה) - Advanced Nutrient Protocol"
                fill
                className="object-cover"
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-deep-red" />
                </div>
                <h4 className="text-2xl font-bold text-charcoal">
                  Bio-Integration (קוריאה)
                </h4>
              </div>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                פרוטוקול שימור זקיקים בנוזלי הזנה מתקדמים (המשמשים להשתלות איברים), המבטיח שכל זקיק שמושתל – נקלט וצומח.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-deep-red/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-deep-red" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-charcoal">
                אנחנו לא משחקים בניחושים
              </h4>
            </div>
            <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed">
              כל טיפול מגובה בסריקות AI שמנתחות את עומק הרקמה ומבטיחות בטיחות מוחלטת.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden">
            <Image
              src="/assets/IMG_0461.PNG"
              alt="מערכת סריקה AI מתקדמת"
              fill
              className="object-cover"
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

