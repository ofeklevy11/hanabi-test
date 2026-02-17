'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Microscope, Move, Shield, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Eyelashes() {
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
    '/videos/eyelash-video-1.mp4',
    '/videos/eyelash-video-2.mp4',
    '/videos/eyelash-video-3.mp4',
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
      title: "סוד המיון – רק שיערות משי (Silk Hair Selection)",
      description: "האתגר הגדול ביותר ביצירת ריסים טבעיים הוא המרקם כי שיער הגוף לרוב עבה יותר מריסים טבעיים ולכן אנו מבצעים תהליך איתור מורכב באזור העורף התחתון שם צומחות שיערות דקות ורכות במיוחד המכונות 'שיערות משי' אנו ממיינים אותן תחת מיקרוסקופ ובוחרים רק את הזקיקים הבודדים והעדינים ביותר כדי להבטיח שהריס החדש יהיה רך למגע ישתלב בטבעיות עם הריסים הקיימים ולא יכביד על העפעף העדין",
      image: '/images/eyelash-silk-hair.jpg',
      layout: 'image-left',
    },
    {
      icon: Move,
      title: 'ארכיטקטורת ה-C-Curve (הקשת המושלמת)',
      description: "בעוד שרוב הקליניקות משתילות את השיער בזווית ישרה שיוצרת מראה של 'גגון' שמצל על העין אנו משתמשים בשיטות מיוחדות ומדויקות שמאפשרות לנו לשלוט לא רק בזווית הכניסה אלא גם ברוטציה של הזקיק אנו משתילים ריסים ארוכים בלבד מה שמאפשר לנו לראות את העיקול הטבעי של השערה ולסובב אותה כך שהיא תתעגל כלפי מעלה בצורת C מושלמת פעולה זו 'פותחת' את העין ומעניקה לה מראה ערני מורם וזוהר יותר ללא צורך במעגל ריסים",
      image: '/images/eyelash-ccurve.jpg',
      layout: 'image-right',
    },
    {
      icon: Shield,
      title: 'בטיחות עינית (Ocular Safety Protocol)',
      description: "העפעף הוא האזור העדין ביותר בגוף האדם ולכן הפרוטוקול הרפואי שלנו הוא המחמיר ביותר בתחום הטיפול מתבצע באמצעות מגן קרנית מיוחד השומר על העין לכל אורך התהליך וההשתלה עצמה נעשית בעומק מבוקר ברמת המיקרון כדי לא לפגוע בשריר העפעף או בזרימת הדם אנו משתמשים במחטי Implanter זעירות שתוכננו במיוחד לכירורגיה של העפעפיים המבטיחות החלמה מהירה ללא צלקות וללא סימנים",
      image: '/images/eyelash-safety.jpg',
      layout: 'full-image',
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
              שחזור ריסים מיקרו-כירורגי
              <br />
              <span className="text-5xl md:text-6xl lg:text-8xl">המדע שמאחורי המבט</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl text-deep-red font-bold leading-tight max-w-5xl mx-auto"
            >
              לא הדבקות. לא תוספות
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-charcoal font-normal">ריסים חיים וארוכים שנשארים איתך לתמיד</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Carousel - Full Width Premium */}
      <section className="py-0 relative">
        <div className="max-w-[95vw] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative aspect-[21/9] rounded-none md:rounded-3xl overflow-hidden shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.video
                  key={currentVideoIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7 }}
                  src={videos[currentVideoIndex]}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  autoPlay
                  muted
                />
              </AnimatePresence>
              
              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 group/btn border border-white/20"
                    aria-label="סרטון קודם"
                  >
                    <ChevronRight className="w-7 h-7 text-white" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all z-10 group/btn border border-white/20"
                    aria-label="סרטון הבא"
                  >
                    <ChevronLeft className="w-7 h-7 text-white" />
                  </button>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentVideoIndex
                            ? 'bg-white w-12'
                            : 'bg-white/30 hover:bg-white/50 w-1.5'
                        }`}
                        aria-label={`עבור לסרטון ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
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
              הריסים הם מסגרת העין
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal">המבנה העדין ביותר בגוף האדם</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed font-medium">
                ב-<span className="text-deep-red font-bold">HANA BI</span> אנו משחזרים את הקשת המושלמת בדיוק מיקרו-כירורגי
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-normal max-w-4xl mx-auto pt-4"
            >
              אנו יוצרים מחדש את המבט הערני והזוהר שמעניק לעיניים מסגרת טבעית ומושלמת
            </motion.p>
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
            <section key={index} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={principle.image}
                  alt={principle.title}
                  fill
                  className="object-cover"
                  quality={95}
                  sizes="100vw"
                />
                {/* Professional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/75" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/20" />
              </motion.div>
              
              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[50vh]">
                  {/* Left Side - Icon & Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {principle.title}
                    </h3>
                  </motion.div>
                  
                  {/* Right Side - Description */}
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="h-px w-24 bg-gradient-to-l from-white/40 to-transparent mb-4" />
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-normal">
                      {principle.description}
                    </p>
                    <div className="h-px w-24 bg-gradient-to-r from-white/40 to-transparent mt-4" />
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
                    className="relative overflow-hidden"
                  >
                    <img
                      src={principle.image}
                      alt={principle.title}
                      className="w-full h-full object-cover"
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
                    <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right">
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
                  className="relative overflow-hidden order-1 md:order-2"
                >
                  <img
                    src={principle.image}
                    alt={principle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Pain-Free Experience Section */}
      <section className="py-8 md:py-10 bg-gradient-to-b from-white via-soft-grey to-white relative overflow-hidden">
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
              האם הטיפול בעפעפיים כואב?
            </h2>
            <p className="text-2xl md:text-3xl text-deep-red font-bold max-w-4xl mx-auto leading-relaxed mb-6">
              הטיפול אינו מורגש כלל. צפו ברגע האמת
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/5 border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Eye className="w-16 h-16 text-charcoal/20 mx-auto" />
                  <p className="text-lg text-charcoal/40 font-medium">
                    [VIDEO: מטופלת רגועה בזמן טיפול ריסים]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-charcoal/70 leading-relaxed font-normal text-center">
              רבות חוששות מהרעיון של טיפול כה קרוב לעין אך המציאות היא שונה לחלוטין הטיפול מתבצע תחת הרדמה מקומית יסודית ולאחריה את נמצאת במצב של רוגע מוחלט ויכולה אפילו לנמנם המגן המיוחד שאנו מניחים מבטיח שלא תרגישי דבר והעפעף נשאר רדום עד לסיום התהליך כך שאת מתעוררת למציאות חדשה עם ריסים מלאים וללא שום כאב
            </p>
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
              השלבים שלאחר השתלת הריסים
            </h2>
            <p className="text-2xl md:text-3xl text-charcoal/70 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              ליווי רפואי מלא עד לתוצאה הסופית
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-charcoal/60 max-w-4xl mx-auto leading-relaxed font-normal"
            >
              הריסים החדשים שלך הם שיער ראש טבעי שמתנהג קצת אחרת. הנה מה שצפוי לך:
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
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">שבוע ההחלמה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">ימים 1-7</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    בימים הראשונים העפעף עשוי להיות מעט נפוח ואדמומי. זהו סימן חיובי לזרימת דם מוגברת לאזור. יש להימנע מאיפור עיניים ומגע כדי לאפשר לזקיקים להתקבע.
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
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">ביקורת ראשונה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">יום 8</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    מפגש קצר בקליניקה לווידוא החלמה תקינה. בסיום המפגש העפעף חוזר למראהו הרגיל.
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
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">שלב הנשירה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">חודש 1-3</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    כמו בגבות, גם כאן מתרחש ה-Shock Loss. הריסים המושתלים נושרים כדי לפנות מקום לצמיחה החדשה. אל דאגה – השורש חי ומתחזק מתחת לעור.
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
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">הצמיחה והתחזוקה</h3>
                      <p className="text-sm text-charcoal/50 font-medium">חודש 4 ואילך</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    הריסים החדשים מתחילים לצמוח! חשוב לדעת: מכיוון שמקורם בשיער הראש, הם ימשיכו לצמוח לאורך. חלק משגרת הטיפוח החדשה שלך תכלול גזירה עדינה אחת לכמה שבועות כדי לשמור על האורך הרצוי.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Final Stage */}
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
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal">התוצאה הסופית</h3>
                      <p className="text-sm text-charcoal/50 font-medium">שנה</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal">
                    הריסים הגיעו לשיא צפיפותם ועוביים. המבט שלך מודגש, פתוח ומרשים – באופן טבעי ולתמיד.
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
              תני לעיניים שלך את המסגרת המגיעה להן
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
