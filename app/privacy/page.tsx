'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 bg-medical-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-charcoal mb-12 text-center">מדיניות פרטיות</h1>

          <div className="prose prose-lg max-w-none text-charcoal/80 space-y-8" dir="rtl">
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">1. כללי</h2>
              <p>קליניקה HANA BI (להלן: &quot;הקליניקה&quot;) מכבדת את פרטיות המשתמשים באתר. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ושומרים על המידע המתקבל דרך האתר.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">2. איסוף המידע</h2>
              <p>המידע הנאסף באתר מתחלק לשני סוגים:</p>
              <p><strong>2.1. מידע שנמסר מרצון:</strong> בעת השארת פרטים בטפסי יצירת קשר, אנו אוספים פרטים כגון שם מלא, מספר טלפון וכתובת דוא&quot;ל. במידה ותבחר להעלות תמונות או מידע רפואי ראשוני לצורך ייעוץ (כגון מצב השיער או העור), מידע זה ייחשב כמידע אישי רגיש ויזכה להגנה מחמירה.</p>
              <p><strong>2.2. מידע טכני:</strong> מידע שנאסף אוטומטית כגון כתובת IP, סוג דפדפן, זמן שהייה באתר ודפים שנצפו.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">3. השימוש במידע</h2>
              <p>המידע משמש למטרות הבאות:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>יצירת קשר ותיאום תורים לייעוץ או טיפול (השתלות שיער, גבות, הצערת עור וכו&apos;).</li>
                <li>התאמת הטיפול לצרכי המטופל בהתבסס על נתונים אישיים.</li>
                <li>שליחת עדכונים, ניוזלטרים ותכנים שיווקיים (בכפוף להסכמתך, אותה ניתן לבטל בכל עת).</li>
                <li>שיפור חוויית המשתמש וניתוח סטטיסטי של פעילות האתר.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">4. העברת מידע לצד שלישי</h2>
              <p>הקליניקה לא תעביר את פרטיך לצדדים שלישיים, למעט במקרים הבאים:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>לספקים המעניקים שירותי מחשוב, אחסון או מערכות דיוור הפועלים מטעם הקליניקה.</li>
                <li>במקרה של חובה חוקית או צו שיפוטי.</li>
                <li>לצורך הגנה על זכויותיה המשפטיות של הקליניקה במקרה של הליך משפטי.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">5. עוגיות (Cookies)</h2>
              <p>האתר משתמש ב-Cookies ובטכנולוגיות ניטור דומות כדי להתאים את הגלישה להעדפותיך האישיות ולצרכי אבטחה. ניתן לנטרל את השימוש בעוגיות דרך הגדרות הדפדפן, אולם הדבר עלול לפגוע בתפקוד חלק מחלקי האתר.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">6. אבטחת מידע</h2>
              <p>הקליניקה נוקטת באמצעי זהירות טכנולוגיים וארגוניים מקובלים כדי להגן על המידע מפני גישה בלתי מורשית. עם זאת, אין אבטחה מוחלטת ברשת האינטרנט והמשתמש מצהיר כי הוא מודע לכך.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-4">7. זכות לעיין ולמחוק מידע</h2>
              <p>בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, כל אדם זכאי לעיין במידע עליו המוחזק במאגר מידע. במידה והמידע אינו מדויק או שברצונך למחוק אותו, ניתן לפנות אלינו בפרטי הקשר המופיעים מטה.</p>
            </section>

            <section className="bg-soft-beige/30 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-charcoal mb-4">יצירת קשר</h2>
              <p>בכל שאלה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>טלפון: <a href="tel:0528266062" className="text-deep-red hover:underline" dir="ltr">052-826-6062</a></li>
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
