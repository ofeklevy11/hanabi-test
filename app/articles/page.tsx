import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles, DISCLAIMER, SITE_URL } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'מאמרים והסברים על השתלת שיער, גבות וריסים | HANA BI',
  description:
    'מדריכים והסברים מקצועיים על השתלת שיער, השתלת גבות, השתלת ריסים וטיפול iPRF, מאת צוות HANA BI.',
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    title: 'מאמרים והסברים | HANA BI',
    description: 'מדריכים מקצועיים על טיפולי אסתטיקה ביולוגית.',
    url: `${SITE_URL}/articles`,
    locale: 'he_IL',
    type: 'website',
  },
}

export default function ArticlesIndex() {
  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'מאמרים והסברים | HANA BI',
    url: `${SITE_URL}/articles`,
    inLanguage: 'he-IL',
    hasPart: articles.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      url: `${SITE_URL}/articles/${a.slug}`,
    })),
  }

  return (
    <main className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-14 md:pb-20 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-full opacity-70" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base font-bold tracking-wide text-deep-red">ידע ומדריכים</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-charcoal leading-tight tracking-tight">
            מאמרים והסברים
          </h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-7 text-lg md:text-xl text-charcoal/65 max-w-2xl mx-auto leading-relaxed">
            כאן תמצאו הסברים מפורטים על הטיפולים שלנו, השלבים לפניהם ואחריהם, ושאלות שכדאי לשאול לפני שמחליטים.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-7 md:p-8 ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="inline-flex w-fit rounded-full bg-deep-red/10 px-3.5 py-1 text-sm font-bold text-deep-red">
                    {a.category}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-charcoal leading-snug group-hover:text-deep-red transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-4 text-base text-charcoal/65 leading-relaxed">{a.description}</p>
                  <div className="mt-auto pt-7 flex items-center justify-between text-sm text-charcoal/50">
                    <span>{a.readMinutes} דקות קריאה</span>
                    <span className="font-bold text-deep-red">לקריאה ←</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-center text-sm text-charcoal/50 max-w-3xl mx-auto leading-relaxed">{DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
