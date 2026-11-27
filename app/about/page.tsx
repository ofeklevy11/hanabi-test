import type { Metadata } from 'next'
import Link from 'next/link'
import { InfoList, InfoPage, InfoSection, pageLd } from '@/components/InfoPage'
import { SITE_URL } from '@/lib/articles'

const url = `${SITE_URL}/about`
const title = 'אודות HANA BI | מרפאה להשתלות שיער, גבות, זקן וריסים'
const description =
  'HANA BI היא מרפאה בראשון לציון להשתלות שיער, גבות, זקן וריסים ולטיפולי iPRF: איך מתנהל התהליך, מי הצוות הרפואי ואיך נכתב המידע באתר.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, locale: 'he_IL', type: 'website' },
}

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="אודות"
      title="על HANA BI"
      intro="HANA BI היא מרפאה להשתלות שיער, גבות, זקן וריסים ולטיפולי iPRF, ברחוב פאול גרונינגר 4 בראשון לציון. העבודה מתמקדת בתכנון אישי של צפיפות ופיזור שנראים טבעיים, ובמעקב רפואי אחרי ההליך."
      jsonLd={[pageLd(url, 'על HANA BI', 'AboutPage')]}
    >
      <InfoSection title="הטיפולים במרפאה">
        <InfoList
          items={[
            <><Link href="/hair-transplant" className="font-bold text-deep-red hover:underline">השתלת שיער</Link> לגברים ולנשים, בטכניקה המשלבת FUE ו-DHI.</>,
            <><Link href="/eyebrows" className="font-bold text-deep-red hover:underline">השתלת גבות</Link> בזקיקים בודדים.</>,
            <>השתלת זקן.</>,
            <><Link href="/eyelashes" className="font-bold text-deep-red hover:underline">השתלת ריסים</Link>.</>,
            <><Link href="/iprf" className="font-bold text-deep-red hover:underline">טיפולי iPRF</Link> לשיער ולעור.</>,
          ]}
        />
      </InfoSection>

      <InfoSection title="איך מתנהל התהליך">
        <InfoList
          items={[
            <><strong>אבחון:</strong> בדיקה של הקרקפת, אזור התורם ומבנה הפנים, בעזרת מדידה דיגיטלית. ההתאמה לטיפול נקבעת על ידי הרופא.</>,
            <><strong>תוכנית אישית:</strong> הצפיפות, הזוויות וקו השיער מתוכננים לפי המטרה ולפי מה שאזור התורם מאפשר.</>,
            <><strong>ההליך:</strong> לקיחת הזקיקים, שימורם עד ההשתלה והשתלתם.</>,
            <><strong>מעקב:</strong> ביקורת סביב היום העשירי, בחודש השלישי ובהערכת התוצאה. התוצאה הסופית של השתלת שיער נראית בדרך כלל לאחר כשנה.</>,
          ]}
        />
      </InfoSection>

      <InfoSection title="הצוות הרפואי">
        <p>
          ההליכים במרפאה מבוצעים על ידי רופאים מורשים. פרטים על הרופאים, הכשרתם ותחומי העבודה שלהם מופיעים ב
          <Link href="/team" className="font-bold text-deep-red hover:underline">עמוד הצוות הרפואי</Link>.
        </p>
      </InfoSection>

      <InfoSection title="הטכנולוגיה">
        <p>
          המערכות שבהן משתמשים במרפאה למדידה, לתכנון ולשימור הזקיקים, מה הן עושות ומה המגבלות שלהן, מפורטות ב
          <Link href="/technology" className="font-bold text-deep-red hover:underline">עמוד הטכנולוגיה</Link>.
        </p>
      </InfoSection>

      <InfoSection title="המידע באתר">
        <p>
          מאמרי האתר מבוססים על ספרות רפואית ועל מקורות רשמיים, עם הפניה למקור בכל טענה רפואית. נתונים פנימיים של המרפאה מסומנים ככאלה,
          בנפרד מהספרות. פרטים ב<Link href="/editorial-policy" className="font-bold text-deep-red hover:underline">מדיניות התוכן</Link> וב
          <Link href="/medical-references" className="font-bold text-deep-red hover:underline">רשימת המקורות הרפואיים</Link>.
        </p>
      </InfoSection>

      <InfoSection title="יצירת קשר">
        <p>
          רחוב פאול גרונינגר 4, ראשון לציון · טלפון{' '}
          <a href="tel:+972585065359" className="font-bold text-deep-red hover:underline" dir="ltr">058-506-5359</a> · דוא&quot;ל{' '}
          <a href="mailto:info@hanabi.co.il" className="font-bold text-deep-red hover:underline">info@hanabi.co.il</a>
        </p>
      </InfoSection>
    </InfoPage>
  )
}
