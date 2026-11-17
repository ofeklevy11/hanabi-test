const services = [
  {
    title: 'השתלת זקן',
    text: 'השתלת זקן מבוצעת בהתאמה אנטומית לקו הלסת, לגובה השיער ולכיוון הצמיחה הטבעי של הזקן. התכנון נעשה לפני ההליך, כך שהתוצאה נראית מאוזנת לכל זווית.',
  },
  {
    title: 'חידוש עור והעלמת קמטים',
    text: 'טיפולים במכשור טכנולוגי מתקדם לחידוש רקמות העור, להעלמת קמטים ולמיצוק עור רפוי. ההתאמה לכל מטופל נקבעת בבדיקה אישית לפני תחילת הטיפול.',
  },
]

const faqs = [
  {
    q: 'מה ההבדל בין השתלת שיער בטכניקה היברידית לבין שיטות מסורתיות?',
    a: 'ב-HANA BI ההשתלות מבוצעות בטכניקה היברידית המשלבת FUE ו-DHI. לקיחת הזקיקים נעשית בטכנולוגיית Micro-Extraction תחת מיקרוסקופ, ההכנסה נעשית באמצעות מחטי Nano-Tools יפניים הדקים פי 3 מהסטנדרט, והתוצאה היא צפיפות גבוהה בכ-40% משיטות מסורתיות נפרדות, שנשמרת לכל החיים.',
  },
  {
    q: 'כיצד פועלת מערכת קירור הזקיקים ומדוע היא מבטיחה 98% קליטה?',
    a: 'מערכת קירור הזקיקים אינה מקררת את ראש המטופל. הזקיקים נלקחים מהקרקפת ומיד מועברים לכלי ייעודי מבוקר טמפרטורה מחוץ לגוף, שם הם נשמרים עד להשתלה. השמירה המבוקרת על חיות הזקיק היא שמאפשרת שיעור קליטה של 98%.',
  },
  {
    q: 'מדוע בהשתלת גבות משתמשים בזקיקי Singles ממוינים במיקרוסקופ?',
    a: 'זקיק בודד (Single) מאפשר לקבוע את הכיוון והזווית של כל שערה בדיוק. המיון תחת מיקרוסקופ מבטיח שכל זקיק מתאים למקומו, ולכן הגבה נראית טבעית ומאוזנת לאורך זמן.',
  },
  {
    q: 'כיצד מתבצע שחזור ריסים מיקרו-כירורגי?',
    a: 'שחזור הריסים נעשה בארכיטקטורת C-Curve, עם שיערות משי (Silk Hair) שנבחרות ידנית. ההליך כולל פרוטוקול בטיחות עינית עם מגן לקרנית, ומחטי Implanter מיקרו-כירורגיות שמכניסות כל ריס במיקום המדויק.',
  },
  {
    q: 'האם ההשתלה מתאימה גם לנשים?',
    a: 'כן. הפרוטוקול מותאם לנשים ולגברים, ומבוסס על מבנה השיער, אזור התורם והמטרה של כל מטופלת. ההתאמה נקבעת בהתייעצות אישית לפני ההליך.',
  },
]

export default function HomeServices() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\u003c') }}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-charcoal">טיפולים נוספים</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl bg-paper p-8 md:p-10 ring-1 ring-black/5">
                <h3 className="text-2xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-4 text-lg text-charcoal/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold text-charcoal">שאלות נפוצות</h2>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white px-6 py-5 ring-1 ring-black/5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-bold text-charcoal">
                  {f.q}
                  <span className="text-deep-red text-2xl leading-none group-open:rotate-45 transition-transform" aria-hidden>+</span>
                </summary>
                <p className="mt-4 text-base md:text-lg text-charcoal/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
