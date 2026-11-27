import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoList, InfoPage, InfoSection, pageLd } from '@/components/InfoPage'
import { SITE_URL } from '@/lib/articles'

const url = `${SITE_URL}/editorial-policy`
const title = 'מדיניות התוכן | HANA BI'
const description =
  'איך נכתב המידע הרפואי באתר HANA BI: איך נבחרים ונבדקים המקורות, איך מבחינים בין ספרות רפואית לנתוני המרפאה, מה מצב הביקורת הרפואית ואיך מדווחים על טעות.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, locale: 'he_IL', type: 'website' },
}

// Describes only processes that are in place today. Anything planned is stated as not yet in place.
export default function EditorialPolicyPage() {
  return (
    <InfoPage
      eyebrow="מדיניות התוכן"
      title="איך נכתב המידע באתר"
      intro="מאמרי האתר נועדו להסביר את ההליכים, החלופות, הסיכונים והמגבלות, ולעזור לשאול את השאלות הנכונות לפני החלטה. הם אינם מחליפים ייעוץ רפואי אישי."
      jsonLd={[pageLd(url, 'מדיניות התוכן של HANA BI')]}
    >
      <InfoSection title="מי כותב">
        <p>המאמרים נכתבים על ידי צוות HANA BI. שם הכותב, תאריך הפרסום ותאריך העדכון האחרון מופיעים בראש כל מאמר.</p>
      </InfoSection>

      <InfoSection title="איך נבחרים מקורות">
        <p>לטענות רפואיות אנחנו מסתמכים, לפי סדר עדיפות, על:</p>
        <InfoList
          items={[
            'גופי בריאות רשמיים ואיגודים מקצועיים, כמו NHS, האיגוד האמריקאי לדרמטולוגיה, האיגוד האמריקאי לרפואת עיניים וארגון הבריאות העולמי.',
            'הנחיות קליניות, הסכמות מומחים וסקירות שיטתיות.',
            'מחקרים קליניים שפורסמו בכתבי עת עם ביקורת עמיתים.',
            'מחקרי מעבדה, עם ציון מפורש שהם אינם מוכיחים תוצאה אצל מטופלים.',
          ]}
        />
        <p>טענות שיווקיות של יצרנים, תוצאות של מרפאות אחרות, פורומים ורשתות חברתיות אינם משמשים ראיה לטענה רפואית. כשמאמר מתאר מה יצרן אומר על מוצר שלו, הדבר מצוין במפורש.</p>
      </InfoSection>

      <InfoSection title="איך נבדקים המקורות">
        <InfoList
          items={[
            'כל מקור נבדק שהוא קיים, ושהכותרת, המחברים, השנה וכתב העת נכונים, לפי רשומה ב-PubMed או באתר הרשמי של המפרסם.',
            'נבדק שהמקור תומך בטענה שבמאמר, ושהניסוח באתר אינו חורג מהממצאים.',
            'מקור שלא הצלחנו לאמת אינו משמש לטענה, והטענה הוסרה או נוסחה מחדש.',
            'כשלא בוצעה סקירה שיטתית ממצה, אנחנו כותבים "במחקרים שנבדקו לא נמצאו ראיות מספקות", ולא "אין מחקרים".',
          ]}
        />
        <p>
          ליד כל טענה רפואית מופיע מספר שמפנה לרשימת המקורות בתחתית המאמר. כל המקורות מרוכזים גם ב
          <Link href="/medical-references" className="font-bold text-deep-red hover:underline">עמוד המקורות הרפואיים</Link>. אימות של מקור אינו
          אישור רפואי של המאמר שמצטט אותו.
        </p>
      </InfoSection>

      <InfoSection title="ספרות רפואית ונתוני המרפאה">
        <p>
          נתונים פנימיים של HANA BI, כמו נתוני המעקב של המרפאה, מוצגים בנפרד מהספרות ומסומנים כנתונים פנימיים. נתון פנימי אינו מוצג כממצא של
          מחקר, ומחקר של מרפאה אחרת אינו מוצג כהוכחה לתוצאות HANA BI.
        </p>
      </InfoSection>

      <InfoSection title="ביקורת רפואית">
        <p>
          מאמר יסומן &quot;נבדק רפואית&quot;, עם שם הרופא ותאריך הבדיקה, רק אחרי שרופא בדק ואישר אותו בפועל. נכון לעכשיו, מאמרי האתר טרם עברו
          ביקורת רפואית כזו, ולכן אף מאמר אינו מסומן כך.
        </p>
      </InfoSection>

      <InfoSection title="מצאתם טעות?">
        <p>
          אפשר לכתוב לנו ל-
          <a href="mailto:info@hanabi.co.il" className="font-bold text-deep-red hover:underline">info@hanabi.co.il</a>, עם קישור לעמוד ותיאור
          הטעות.
        </p>
      </InfoSection>

      <InfoSection title="מה המידע באתר אינו">
        <InfoList items={['הוא אינו ייעוץ רפואי אישי.', 'הוא אינו הבטחה לתוצאה.', 'הוא אינו תחליף לבדיקה של רופא.']} />
      </InfoSection>
    </InfoPage>
  )
}
