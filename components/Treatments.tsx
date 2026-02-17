'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const services = [
  
  {
    image: '/assets/gabot.JPG',
    title: 'השתלת גבות',
    description: 'עיצוב תלת-ממדי קבוע המותאם למבנה הפנים, ללא צורך באיפור.',
    link: '/eyebrows',
  },
  {
    image: '/assets/sear.PNG',
    title: 'השתלת שיער',
    description: 'צפיפות מקסימלית וקו שיער טבעי בטכנולוגיה קוריאנית מתקדמת.',
    link: '/hair-transplant',
  },
  {
    image: '/assets/risim.PNG',
    title: 'השתלת ריסים',
    description: 'מראה עיניים פקוח וריסים מלאים וארוכים ללא צורך בהדבקות.',
    link: '/eyelashes',
  },
  {
    image: '/assets/iprf.PNG',
    title: 'טיפול iPRF',
    description: 'התחדשות ביולוגית ושיפור מרקם העור באמצעות משאבים טבעיים בלבד.',
    link: '/iprf',
  },
]

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 md:py-20 bg-soft-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
            הטיפולים שלנו שמחזירים את המראה הטבעי
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

