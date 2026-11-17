import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ArticleHub from '@/components/ArticleHub'
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
          <ArticleHub articles={articles} />

          <p className="mt-14 text-center text-sm text-charcoal/50 max-w-3xl mx-auto leading-relaxed">{DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
