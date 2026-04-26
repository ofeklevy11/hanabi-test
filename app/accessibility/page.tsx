'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Accessibility() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-medical-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-charcoal mb-12 text-center">הצהרת נגישות</h1>

          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-8" dir="rtl">
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. מחויבות הארגון</h2>
              <p>קליניקה HANA BI מייחסת חשיבות עליונה למתן שירות שוויוני ומכבד לכלל הלקוחות, לרבות אנשים עם מוגבלות. אנו פועלים להנגשת האתר באופן שיאפשר גלישה נוחה ועצמאית לכל אדם.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. התאמות הנגישות באתר</h2>
              <p>האתר נבנה והותאם בהתאם להמלצות התקן הישראלי (ת&quot;י 5568) לנגישות תכנים באינטרנט ברמת AA ובהתאם למסמך WCAG2.0 הבינלאומי.</p>
              <ul className="list-disc list-inside space-y-3 mt-4">
                <li><strong>ניווט מקלדת:</strong> ניתן לגלוש באתר באמצעות המקלדת בלבד (Tab, Arrows, Enter).</li>
                <li><strong>תאימות לקוראי מסך:</strong> האתר מותאם לעבודה עם תוכנות קוראות מסך עבור עיוורים וכבדי ראייה.</li>
                <li><strong>חזותיות:</strong> קיימת הקפדה על ניגודיות צבעים, הגדלת גופנים ואפשרות לעצירת אלמנטים נעים.</li>
                <li><strong>טפסים:</strong> הנגשת טפסים ליצירת קשר כך שיהיו קריאים ומובנים.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. הנגשת המקום (הקליניקה)</h2>
              <p>הקליניקה מונגשת לאנשים עם מוגבלות בהתאם לתקנות הנגישות הנדרשות.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. החרגות נגישות</h2>
              <p>למרות מאמצינו, ייתכן שחלקים מסוימים באתר (כגון סרטונים ישנים או תמונות חיצוניות) טרם הונגשו במלואם. אנו ממשיכים לפעול לשיפור הנגישות בכל עת.</p>
            </section>

            <section className="bg-soft-beige/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. יצירת קשר בנושא נגישות</h2>
              <p>אם נתקלתם בקושי בגלישה או שיש לכם הצעה לשיפור, נשמח לעמוד לשירותכם:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>טלפון: <a href="tel:0585065359" className="text-deep-red hover:underline" dir="ltr">058-506-5359</a></li>
                <li>דוא&quot;ל: <a href="mailto:hanabi@gmail.com" className="text-deep-red hover:underline">hanabi@gmail.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
