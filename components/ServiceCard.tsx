'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  image: string
  title: string
  description: string
  link: string
  index: number
}

export default function ServiceCard({ image, title, description, link, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-lg overflow-hidden shadow-modern hover:shadow-modern-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-charcoal mb-3">{title}</h3>
        <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">
          {description}
        </p>
        <motion.a
          href={link}
          whileHover={{ x: -5 }}
          className="inline-flex items-center gap-2 text-deep-red font-semibold text-sm hover:gap-3 transition-all"
        >
          למידע נוסף
          <ArrowLeft className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}

