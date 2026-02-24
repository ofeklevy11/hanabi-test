'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function HairTransplant() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  })

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

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <Navbar transparent />

      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/files/hero/hair.jpeg"
            alt="השתלת שיער טבעית - HANA BI"
            fill
            className="object-cover"
            quality={95}
            priority
            sizes="100vw"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom darkening to mark section end */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Hero Content - Centered over image */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[1.05] tracking-tight"
            >
              השתלת שיער טבעית
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                <span className="text-deep-red">צפיפות מלאה, ומראה טבעי</span>
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-normal">
                שנשאר לכל החיים
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="pt-4"
            >
              <a
                href="#appointment"
                className="inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                לתיאום פגישת ייעוץ
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Section Header: הסוד לתוצאה מושלמת */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal"
          >
            הסוד לתוצאה מושלמת
          </motion.h2>
        </div>
      </section>

      {/* Section 1: צפיפות אנטומית מקסימלית */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-0 items-stretch min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden w-full h-full min-h-[400px]"
            >
              <Image
                src="/files/hair/231.jpeg"
                alt="צפיפות אנטומית מקסימלית"
                fill
                className="object-contain"
                quality={95}
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center p-8 md:p-10 lg:p-12 bg-white"
            >
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                  צפיפות אנטומית מקסימלית
                </h3>
                <div className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right space-y-6">
                  <p>כדי להשיג מראה שאינו מסגיר את הטיפול, כזה שנראה ומרגיש כמו שיער טבעי ושופע. עלינו להיצמד לחוקי האנטומיה של הקרקפת.</p>
                  <p>הצפיפות הממוצעת בשיער טבעי עומדת על כ-80 זקיקים לס&quot;מ מרובע. כדי להעניק לך מראה מלא, ללא שטחים דלילים או מראה &quot;שקוף&quot;, אנו מחויבים להגיע לרמת צפיפות זהה לזו של הטבע.</p>
                  <h4 className="text-2xl font-bold text-charcoal mt-8">איך אנחנו עושים זאת?</h4>
                  <p>ב-Hana bi אנו משתמשים בטכנולוגיית קצה ובמכשור מיקרוסקופי ייחודי שפותח בסיאול, קוריאה – בירת החדשנות העולמית. המכשור שלנו דק ועדין במיוחד, מה שמאפשר לנו להשתיל את הזקיקים בקרבה מקסימלית זה לזה, מבלי לפגוע ברקמה, ולהבטיח תוצאה צפופה, עשירה וטבעית לחלוטין.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: ארכיטקטורה של קו השיער */}
      <section className="py-12 md:py-20 bg-soft-grey relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 items-stretch min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex items-center p-8 md:p-10 lg:p-12 bg-soft-grey order-2 md:order-1"
            >
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                  ארכיטקטורה של קו השיער: אומנות הסידור
                </h3>
                <div className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right space-y-6">
                  <p>מראה מלאכותי (&quot;מראה בובה&quot;) נובע בדרך כלל מתכנון לקוי. ב-Hana bi, אנו בונים את קו השיער שלך בשכבות אנטומיות:</p>
                  <ul className="space-y-4 list-disc pr-6">
                    <li><strong>הקו הראשון (The Frontal Design):</strong> מבוצע באמצעות &quot;סינגלים&quot; (זקיקים של שערה בודדת בלבד). כדי למנוע מראה נוקשה, אנו מעצבים קו מזוגזג וא-סימטרי בעדינות, המדמה את קו הצמיחה הטבעי איתו נולדנו.</li>
                    <li><strong>קווי העומק:</strong> בקו השני אנו משלבים זקיקי &quot;דאבל&quot; (זוגות), ומהקו השלישי והלאה עוברים לזקיקי &quot;טריפל&quot; המעניקים את עובי וחוזק השיער.</li>
                    <li><strong>נפח מקסימלי:</strong> בכל חלקי הקרקפת הפנימיים, אנו מתמקדים ביצירת צפיפות מקסימלית תוך שימוש בזקיקים מרובי שערות.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative overflow-hidden order-1 md:order-2 w-full h-full min-h-[400px]"
            >
              <Image
                src="/files/hair/4.jpeg"
                alt="ארכיטקטורה של קו השיער"
                fill
                className="object-contain"
                quality={95}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: הגנה על האזור התורם */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-0 items-stretch min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden w-full h-full min-h-[400px]"
            >
              <Image
                src="/files/hair/WhatsApp Image 2026-02-10 at 14.20.00.jpeg"
                alt="הגנה על האזור התורם"
                fill
                className="object-contain"
                quality={95}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center p-8 md:p-10 lg:p-12 bg-white"
            >
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                  הגנה על האזור התורם: המשאב היקר ביותר שלך
                </h3>
                <div className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right space-y-6">
                  <p>הצלחה של השתלת שיער נמדדת לא רק באיך שהחלק הקדמי נראה, אלא גם בשמירה על החלק האחורי של הראש. ב-Hana bi, אנו מתייחסים לאזור התורם שלך ביראת קודש.</p>
                  <h4 className="text-2xl font-bold text-charcoal mt-8">חילוץ זקיקים בטכנולוגיית &quot;Micro-Extraction&quot;:</h4>
                  <p>באמצעות מכשור קוריאני עדין ודק במיוחד, אנו מחלצים את הזקיקים אחד-אחד בדיוק כירורגי. הכלים המיוחדים שלנו מאפשרים לנו:</p>
                  <ul className="space-y-4 list-disc pr-6">
                    <li><strong>למנוע פגיעה בזקיקים שכנים:</strong> אנו שומרים על המרחק האופטימלי כדי שהשיער באזור התורם ימשיך להיראות מלא וטבעי, ללא צלקות נראות לעין או מראה &quot;אכול&quot;.</li>
                    <li><strong>דילול מבוקר וחכם:</strong> הפיזור נעשה בצורה כזו שגם לאחר לקיחת הזקיקים, האזור האחורי שומר על אחידות ועל נראות טבעית לחלוטין.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: 98% אחוזי קליטה */}
      <section className="py-12 md:py-20 bg-soft-grey relative overflow-hidden">
        <div className="max-w-[95vw] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 items-stretch min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex items-center p-8 md:p-10 lg:p-12 bg-soft-grey order-2 md:order-1"
            >
              <div className="w-full">
                <h3 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-8">
                  98% אחוזי קליטה
                </h3>
                <div className="text-lg md:text-xl text-charcoal/70 leading-relaxed font-normal text-right space-y-6">
                  <p>הזקיק הוא איבר חי, והזמן שלו מחוץ לגוף הוא קריטי. כדי להבטיח שכל שערה ושערה שאנחנו משתילים אכן תצמח, אנו משתמשים במערכת שימור וקירור זקיקים מתקדמת.</p>
                  <p>ברגע הוצאת הזקיק, הוא עובר לסביבה מבוקרת טמפרטורה המדמה את תנאי הגוף. פרוטוקול השימור הייחודי שלנו מאפשר לנו להגיע לתוצאה חסרת תקדים של 98% אחוזי קליטה. עבורך, זה אומר ביטחון מלא שמה שהשתלנו – יצמח בוודאות ויישאר איתך לתמיד.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative overflow-hidden order-1 md:order-2 w-full h-full min-h-[400px]"
            >
              <Image
                src="/files/hair/WhatsApp Image 2026-02-10 at 354.jpeg"
                alt="98% אחוזי קליטה"
                fill
                className="object-contain"
                quality={95}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Half Width Image */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative w-1/2 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/files/hair2.jpeg"
              alt="השתלת שיער טבעית"
              width={700}
              height={400}
              className="w-full h-auto object-cover"
              quality={95}
              sizes="50vw"
            />
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
              השלבים שלאחר השתלת השיער
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
              המחויבות שלנו כלפייך לא מסתיימת ברגע היציאה מהקליניקה. תהליך שחזור השיער הוא תהליך ביולוגי מתמשך, וכדי להבטיח את קליטת השתלים בצורה האופטימלית, אנו מלווים אותך לאורך שנה שלמה הכוללת שלוש תחנות ביקורת קריטיות לבקרת איכות. כך ייראה המסע המשותף שלנו:
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
                    בדיוק שמונה ימים לאחר ההליך, אנו נפגשים בקליניקה לביקורת ראשונה. במפגש זה הצוות המקצועי מבצע ניקוי עדין ומבוקר להסרת הגלדים. בסיום הטיפול, האזור נקי לחלוטין, העור חוזר למרקמו החלק והמראה המתקבל נקי ואסתטי.
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
                    החל מהחודש הרביעי מתחילה הצמיחה המשמעותית. מחודש לחודש השיער מתמלא, השיערות הופכות עבות וחיוניות יותר, והמבנה המעוצב מתחיל לקבל את נפחו הסופי תוך השתלבות הרמונית ומראה טבעי לחלוטין.
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

      {/* Consultation Form */}
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
              הצעד הראשון לשיער מלא
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/60 max-w-2xl mx-auto leading-relaxed font-normal">
              השאירו פרטים ונבדוק יחד אם הטיפול מתאים לכם
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
