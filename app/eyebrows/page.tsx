'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Microscope, Move, ChevronRight, ChevronLeft, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Eyebrows() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const videos = [
    '/assets/galit.mp4',
    'assets/linor.mp4',
    'assets/michal.mp4',
    'assets/noa.mp4',
    'assets/orna.mp4',
    'assets/sapir.mp4',
  ]
  
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }
  
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', phone: '' })
    alert('תודה! נחזור אליך בהקדם לתיאום פגישת ייעוץ.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const principles = [
    {
      icon: Microscope,
      title: "הדרך לתוצאה מדויקת וטבעית מתחילה בסינגלים",
      description: "כדי להבין את ההבדל, צריך להסתכל על השורשים. בשיער הראש שלנו, הזקיקים צומחים בדרך כלל בקבוצות (משפחות) של 2, 3 ואפילו 4 שיערות יחד. אלו נקראים דאבלים (Doubles) וטריפלים (Triples). לעומת זאת, בגבה טבעית יש אך ורק זקיקים בודדים (Singles). הטעות הנפוצה בקליניקות רבות היא שימוש בזקיקים כפולים מהראש כדי ליצור נפח מהיר. התוצאה במקרים אלו היא מראה גס, צפוף מידי ולא טבעי. אצלנו ב-HANA BI: אנו ממיינים את השיערות במיקרוסקופ ומבודדים רק את הזקיקים הבודדים והעדינים ביותר. רק כך ניתן ליצור גבה רכה ואוורירית שנראית כאילו נולדת איתה.",
      image: '/assets/1.jpeg',
      layout: 'image-left', // Image on left, text overlay on right
    },
    {
      icon: Move,
      title: 'טכנולוגיה ייעודית מסיאול, קוריאה',
      description: "טכנולוגיה ייעודית וכלים מיקרוסקופיים שפותחו בסיאול, קוריאה – חלוצת עולם האסתטיקה והשתלות השיער. באמצעות המכשור הקוריאני המתקדם, אנו מבצעים אופטימיזציה של כל זקיק:\n\n• זיהוי עקומת השערה: זיהוי מיידי של כיוון העיקול הטבעי של השערה עוד לפני ההשתלה.\n\n• כיול זוויות מיקרוסקופי: סיבוב והטמעת הזקיק בזווית המדויקת ביותר ביחס לפני השטח של העור.\n\n• זרימה הרמונית: הבטחת השתלבות מושלמת במבנה ה'מניפה' הטבעי של הגבה, ללא שיערות סוררות או צמיחה הפוכה.",
      image: '/assets/2.jpeg',
      layout: 'image-right', // Image on right, text overlay on left
    },
  ]

  return (
    <main ref={containerRef} className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Minimalist Luxury */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-deep-red/3 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Hero Content - Spacious & Elegant */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center space-y-6 max-w-6xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-9xl font-bold text-charcoal leading-[1.05] tracking-tight mt-24"
            >
              השתלת גבות טבעית
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl text-deep-red font-bold leading-tight max-w-5xl mx-auto"
            >
              לא ציור, ולא קעקוע
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-charcoal font-normal">שיער אמיתי שנשאר לכל החיים</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Carousel - iPhone View */}
      <section className="py-8 md:py-12 relative bg-gradient-to-b from-white via-soft-grey/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center gap-6 md:gap-12"
          >
            {/* Prev Button */}
            {videos.length > 1 && (
              <button
                onClick={prevVideo}
                className="w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 shadow-lg rounded-full flex items-center justify-center transition-all z-10 border border-gray-200 shrink-0"
                aria-label="סרטון קודם"
              >
                <ChevronRight className="w-6 h-6 text-charcoal" />
              </button>
            )}

            {/* iPhone Frame */}
            <div className="relative mx-auto">
              {/* Phone outer shell */}
              <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-[0_0_0_2px_#333,0_0_0_4px_#1a1a1a,0_25px_60px_-12px_rgba(0,0,0,0.4)]">
                {/* Side button - right (volume) */}
                <div className="absolute -right-[3px] top-[120px] w-[3px] h-[30px] bg-[#333] rounded-l-sm" />
                <div className="absolute -right-[3px] top-[165px] w-[3px] h-[30px] bg-[#333] rounded-l-sm" />
                {/* Side button - left (power) */}
                <div className="absolute -left-[3px] top-[140px] w-[3px] h-[45px] bg-[#333] rounded-r-sm" />

                {/* Screen area */}
                <div className="relative bg-black rounded-[2.4rem] overflow-hidden w-[280px] h-[580px] md:w-[320px] md:h-[660px]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-3">
                    <div className="w-[100px] h-[28px] md:w-[120px] md:h-[32px] bg-black rounded-full" />
                  </div>

                  {/* Video content */}
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={currentVideoIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      src={videos[currentVideoIndex]}
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                      autoPlay
                      muted
                    />
                  </AnimatePresence>

                  {/* Bottom bar (home indicator) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/30 rounded-full z-20" />
                </div>
              </div>
            </div>

            {/* Next Button */}
            {videos.length > 1 && (
              <button
                onClick={nextVideo}
                className="w-12 h-12 md:w-14 md:h-14 bg-white hover:bg-gray-50 shadow-lg rounded-full flex items-center justify-center transition-all z-10 border border-gray-200 shrink-0"
                aria-label="סרטון הבא"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal" />
              </button>
            )}
          </motion.div>

          {/* Dots indicator */}
          {videos.length > 1 && (
            <div className="flex justify-center gap-2.5 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentVideoIndex
                      ? 'bg-deep-red w-8 h-2.5'
                      : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
                  }`}
                  aria-label={`עבור לסרטון ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Introduction - Floating Text Over White */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="space-y-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.2] font-bold"
            >
              הגבה היא מבנה אנטומי מתוחכם
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal">המורכב ממאות זקיקים בעלי זווית וכיוון ייחודיים</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed font-medium">
                ב-<span className="text-deep-red font-bold">Hana bi</span> אנו מתמחים בשחזור אנטומי של סידור ומבנה הגבות, תוך התאמה טבעית ומדויקת לתווי הפנים הייחודיים של כל מטופל
              </p>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* Principles - Organic Asymmetric Layout */}
      {principles.map((principle, index) => {
        const Icon = principle.icon
        const isFullImage = principle.layout === 'full-image'
        const isImageLeft = principle.layout === 'image-left'
        
        if (isFullImage) {
          // Full width image with professional text layout
          return (
            <section key={index} className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-white">
              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
                {/* Image Section - Above Text */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="relative w-full mb-8 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                >
                  <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      className="object-contain"
                      quality={95}
                      priority={index === 0}
                      sizes="100vw"
                    />
                  </div>
                </motion.div>

                {/* Text Content Below Image */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
                  {/* Left Side - Icon & Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-deep-red/10 rounded-2xl md:rounded-3xl flex items-center justify-center border border-deep-red/20 shadow-lg">
                      <Icon className="w-8 h-8 md:w-12 md:h-12 text-deep-red" />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight">
                      {principle.title}
                    </h3>
                  </motion.div>
                  
                  {/* Right Side - Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-6 bg-soft-grey rounded-2xl p-6 md:p-8 border border-gray-100"
                  >
                    <div className="h-px w-20 md:w-24 bg-gradient-to-l from-deep-red/30 via-deep-red/20 to-transparent mb-4" />
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-charcoal/80 leading-relaxed font-normal whitespace-pre-line">
                      {principle.description}
                    </p>
                    <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-deep-red/20 to-deep-red/30 mt-4" />
                  </motion.div>
                </div>
              </div>
            </section>
          )
        }
        
        if (isImageLeft) {
          // Image left, text right (asymmetric)
          return (
            <section key={index} className="py-12 md:py-20 bg-white relative overflow-hidden">
              <div className="max-w-[95vw] mx-auto">
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-0 items-stretch min-h-[50vh]">
                  {/* Large Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="relative overflow-hidden w-full h-full"
                  >
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      className="object-contain"
                      quality={95}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                  </motion.div>
                  
                  {/* Text Content - Floating */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex items-center p-8 md:p-10 lg:p-12 bg-white"
                  >
                    <div className="w-full">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-deep-red/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-deep-red" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                          {principle.title}
                        </h3>
                      </div>
                      <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )
        }
        
        // Image right, text left (asymmetric)
        return (
          <section key={index} className="py-12 md:py-20 bg-soft-grey relative overflow-hidden">
            <div className="max-w-[95vw] mx-auto">
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 items-stretch min-h-[50vh]">
                {/* Text Content - Floating */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="flex items-center p-8 md:p-10 lg:p-12 bg-soft-grey order-2 md:order-1"
                >
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-deep-red/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-deep-red" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right whitespace-pre-line">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Large Image */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative overflow-hidden order-1 md:order-2 w-full h-full"
                >
                  <Image
                    src={principle.image}
                    alt={principle.title}
                    fill
                    className="object-contain"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* AI Skin Diagnosis Section */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              מערכת מבוססת AI לאבחון רקמת העור
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-[90%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-black">
              <video
                src="/files/1.mp4"
                className="w-full h-auto"
                controls
                playsInline
                preload="metadata"
              >
                הדפדפן שלך לא תומך בתגית הוידאו.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain-Free Experience Section */}
      <section className="py-8 md:py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              האם הטיפול כואב?
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl text-deep-red font-bold mt-4">
              ממש לא
            </p>
          </motion.div>

          {/* Video in iPhone Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative mx-auto">
              {/* Phone outer shell */}
              <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-[0_0_0_2px_#333,0_0_0_4px_#1a1a1a,0_25px_60px_-12px_rgba(0,0,0,0.4)]">
                {/* Side button - right (volume) */}
                <div className="absolute -right-[3px] top-[120px] w-[3px] h-[30px] bg-[#333] rounded-l-sm" />
                <div className="absolute -right-[3px] top-[165px] w-[3px] h-[30px] bg-[#333] rounded-l-sm" />
                {/* Side button - left (power) */}
                <div className="absolute -left-[3px] top-[140px] w-[3px] h-[45px] bg-[#333] rounded-r-sm" />

                {/* Screen area */}
                <div className="relative bg-black rounded-[2.4rem] overflow-hidden w-[280px] h-[580px] md:w-[320px] md:h-[660px]">
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-3">
                    <div className="w-[100px] h-[28px] md:w-[120px] md:h-[32px] bg-black rounded-full" />
                  </div>

                  {/* Video content */}
                  <video
                    src="/assets/sirton.MP4"
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    autoPlay
                    muted
                    loop
                  />

                  {/* Bottom bar (home indicator) */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/30 rounded-full z-20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recovery Journey - Premium Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-soft-grey to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-gradient-to-br from-deep-red/3 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              השלבים שלאחר השתלת הגבות
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              ליווי רפואי מלא מיום הטיפול ועד לתוצאה הסופית
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal/60 max-w-4xl mx-auto leading-relaxed font-normal"
            >
              המחויבות שלנו כלפייך לא מסתיימת ברגע היציאה מהקליניקה. תהליך שחזור הגבות הוא תהליך ביולוגי מתמשך, וכדי להבטיח את קליטת השתלים בצורה האופטימלית, אנו מלווים אותך לאורך שנה שלמה הכוללת שלוש תחנות ביקורת קריטיות לבקרת איכות. כך ייראה המסע המשותף שלנו:
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-12 md:space-y-16">
            {/* Stage 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center shrink-0 border border-deep-red/20">
                      <span className="text-2xl font-bold text-deep-red">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">שבוע ההתקבעות</h3>
                      <p className="text-sm text-charcoal/50 font-medium">ימים 1-7</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    בשבוע הראשון לאחר ההשתלה מתרחש תהליך ביולוגי של קליטת הזקיקים ברקמה החדשה. בימים אלו תיתכן הופעה של גלדים נקודתיים זעירים, המעידים על תהליך ריפוי תקין של העור. בשלב זה חיוני להימנע ממגע באזור כדי לאפשר לשורשים להתבסס במקומם ולהתחבר לאספקת הדם.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Checkpoint 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-deep-red/20 via-deep-red/40 to-deep-red/20 hidden md:block" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-red to-deep-red-dark rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">תחנת ביקורת ראשונה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">יום 8</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    בדיוק שמונה ימים לאחר ההליך, אנו נפגשים בקליניקה לביקורת ראשונה. במפגש זה הצוות המקצועי מבצע ניקוי עדין ומבוקר להסרת הגלדים. בסיום הטיפול, הגבות נקיות לחלוטין, העור חוזר למרקמו החלק והמראה המתקבל נקי ואסתטי.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center shrink-0 border border-deep-red/20">
                      <span className="text-2xl font-bold text-deep-red">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">התחדשות השורש</h3>
                      <p className="text-sm text-charcoal/50 font-medium">חודש 1 עד 3</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    בשלב זה מתרחש תהליך טבעי המכונה Shock Loss. השיער המושתל נושר, אך זהו סימן חיובי המעיד על הצלחת התהליך. השורש עצמו נשאר חי ובריא מתחת לעור, ונכנס לשלב של מנוחה ואגירת אנרגיה לקראת הצמיחה המחודשת.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Checkpoint 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-red to-deep-red-dark rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">תחנת ביקורת שנייה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">חודש 3</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    שלושה חודשים מהטיפול, אנו נפגשים לביקורת אמצע. מטרת המפגש היא לוודא שתהליך הנשירה הסתיים ושהזקיקים עוברים ממצב מנוחה למצב פעיל. בשלב זה אנו מצפים לראות את הניצנים הראשונים של השיער החדש והקבוע.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-deep-red/10 rounded-2xl flex items-center justify-center shrink-0 border border-deep-red/20">
                      <span className="text-2xl font-bold text-deep-red">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">צמיחה והתעבות</h3>
                      <p className="text-sm text-charcoal/50 font-medium">חודשים 4-10</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    החל מהחודש הרביעי מתחילה הצמיחה המשמעותית. מחודש לחודש הגבה מתמלאת, השיערות הופכות עבות וחיוניות יותר, והמבנה המעוצב מתחיל לקבל את נפחו הסופי תוך השתלבות הרמונית בתווי הפנים.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Final Checkpoint */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-deep-red to-deep-red-dark rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">תחנת ביקורת סופית</h3>
                      <p className="text-sm text-charcoal/50 font-medium">שנה מהטיפול</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    בתום השנה הראשונה אנו נפגשים למעמד הסיכום. בשלב זה תהליך הצמיחה הושלם במלואו. אנו מבצעים בדיקת איכות סופית של העיצוב, צפיפות השיער וכיווני הצמיחה, כדי לוודא שהתוצאה היא מושלמת, טבעית ותישאר איתך לכל החיים.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Form - Minimalist Luxury */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-white to-soft-grey relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-br from-deep-red/3 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-4 leading-tight">
              הצעד הראשון לגבות מושלמות
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/60 max-w-2xl mx-auto leading-relaxed font-normal">
              השאירי פרטים ונבדוק יחד אם הטיפול מתאים לך
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <div>
              <label htmlFor="name" className="block text-charcoal font-medium mb-3 text-right text-base">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-5 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-deep-red transition-all text-right text-lg font-normal"
                placeholder="הזן את שמך המלא"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-charcoal font-medium mb-3 text-right text-base">
                טלפון נייד
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-5 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-deep-red transition-all text-right text-lg font-normal"
                placeholder="הזן מספר טלפון נייד"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-deep-red text-white px-8 py-6 rounded-full text-lg font-medium hover:opacity-90 transition-all mt-8"
            >
              לתיאום פגישת ייעוץ
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
