import type { Metadata } from 'next'
import Image from 'next/image'
import ArticleCards from '@/components/ArticleCards'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles, DISCLAIMER, getArticle, SITE_URL } from '@/lib/articles'

export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  const url = `${SITE_URL}/articles/${a.slug}`
  return {
    title: `${a.title} | HANA BI`,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      title: a.title,
      description: a.description,
      url,
      locale: 'he_IL',
      type: 'article',
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
    },
  }
}

const dateFmt = new Intl.DateTimeFormat('he-IL', { day: 'numeric', month: 'long', year: 'numeric' })

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()

  const url = `${SITE_URL}/articles/${a.slug}`
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.description,
      inLanguage: 'he-IL',
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      author: { '@type': 'Organization', name: 'HANA BI', url: SITE_URL },
      publisher: { '@type': 'Organization', name: 'HANA BI', url: SITE_URL },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      about: a.category,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: a.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'דף הבית', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'מאמרים', item: `${SITE_URL}/articles` },
        { '@type': 'ListItem', position: 3, name: a.title, item: url },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-paper">
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, '\\u003c') }}
        />
      ))}
      <Navbar />

      <header className="relative pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-full opacity-70" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6">
          <nav aria-label="breadcrumb" className="text-sm text-charcoal/55 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-deep-red transition-colors">דף הבית</Link>
            <span aria-hidden>/</span>
            <Link href="/articles" className="hover:text-deep-red transition-colors">מאמרים</Link>
          </nav>

          <span className="mt-8 inline-flex w-fit rounded-full bg-deep-red/10 px-3.5 py-1 text-sm font-bold text-deep-red">
            {a.category}
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-charcoal leading-tight tracking-tight">
            {a.title}
          </h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mt-7" aria-hidden />
          <p className="mt-6 text-sm text-charcoal/55">
            נכתב על ידי צוות HANA BI · עודכן {dateFmt.format(new Date(a.updatedAt))} · {a.readMinutes} דקות קריאה
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-soft-grey">
          <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
      </div>

      <article className="pb-16 md:pb-24 mt-12 md:mt-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed">{a.intro}</p>
          {a.cards && <ArticleCards cards={a.cards} />}

          {a.sections.map((s) => (
            <section key={s.heading} className="mt-14 md:mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal leading-tight">{s.heading}</h2>
              <div className="w-12 h-1 bg-deep-red rounded-full mt-5" aria-hidden />
              <div className="mt-6 space-y-5">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-charcoal/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-lg text-charcoal/80 leading-relaxed">
                      <CheckCircle2 className="mt-1 w-5 h-5 shrink-0 text-deep-red" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-16 md:mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">שאלות נפוצות</h2>
            <div className="w-12 h-1 bg-deep-red rounded-full mt-5" aria-hidden />
            <div className="mt-8 space-y-4">
              {a.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl bg-white ring-1 ring-black/5 px-6 py-5 open:shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)]"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-lg font-bold text-charcoal">
                    {f.q}
                    <span className="text-deep-red text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="mt-4 text-base md:text-lg text-charcoal/75 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-16 rounded-3xl bg-charcoal text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">רוצים להבין מה מתאים לכם?</h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
              נשמח לבדוק איתכם את ההתאמה, להסביר את האפשרויות ולענות על כל השאלות.
            </p>
            <Link
              href={a.ctaHref}
              className="mt-8 inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {a.ctaLabel}
            </Link>
          </div>

          <p className="mt-10 text-sm text-charcoal/50 leading-relaxed">{DISCLAIMER}</p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-charcoal/10 bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">מאמרים נוספים</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/articles/${r.slug}`}
                    className="group block h-full rounded-2xl bg-paper p-6 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="text-sm font-bold text-deep-red">{r.category}</span>
                    <h3 className="mt-3 text-lg font-bold text-charcoal leading-snug group-hover:text-deep-red transition-colors">
                      {r.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
