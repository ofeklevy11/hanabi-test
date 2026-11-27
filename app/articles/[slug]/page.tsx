import type { Metadata } from 'next'
import Image from 'next/image'
import ArticleCards from '@/components/ArticleCards'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RefText from '@/components/RefText'
import { articles, articleSources, DISCLAIMER, getArticle, getRelated, SITE_URL } from '@/lib/articles'
import { stripRefs } from '@/lib/sources'

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
      title: `${a.title} | HANA BI`,
      description: a.description,
      url,
      locale: 'he_IL',
      type: 'article',
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      images: [{ url: `${SITE_URL}${a.image}` }],
    },
  }
}

const dateFmt = new Intl.DateTimeFormat('he-IL', { day: 'numeric', month: 'long', year: 'numeric' })
const TREATMENT_LABELS: Record<string, string> = {
  '/hair-transplant': 'השתלת שיער',
  '/eyebrows': 'השתלת גבות',
  '/eyelashes': 'השתלת ריסים',
  '/iprf': 'טיפול iPRF',
  '/technology': 'הטכנולוגיה במרפאה',
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug)
  if (!a) notFound()

  const url = `${SITE_URL}/articles/${a.slug}`
  const related = getRelated(a.slug)
  const sources = articleSources(a)
  const order = sources.map((s) => s.id)

  // No reviewedBy / lastReviewed until a real medical review has taken place.
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      '@id': url,
      url,
      name: a.title,
      inLanguage: 'he-IL',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      ...(a.medicalReview
        ? { reviewedBy: { '@id': a.medicalReview.reviewerId }, lastReviewed: a.medicalReview.date }
        : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: a.title,
      description: a.description,
      image: `${SITE_URL}${a.image}`,
      inLanguage: 'he-IL',
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      author: { '@id': `${SITE_URL}/#clinic` },
      publisher: { '@id': `${SITE_URL}/#clinic` },
      mainEntityOfPage: { '@id': url },
      about: a.category,
      // Exactly the sources listed visibly at the bottom of the article.
      ...(sources.length ? { citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.name, url: s.url })) } : {}),
    },
    ...(a.faq.length
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: a.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: stripRefs(f.a) },
            })),
          },
        ]
      : []),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
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
            נכתב על ידי צוות HANA BI · פורסם {dateFmt.format(new Date(a.publishedAt))} · עודכן {dateFmt.format(new Date(a.updatedAt))} · {a.readMinutes} דקות קריאה
          </p>
          {a.medicalReview && (
            <p className="mt-2 text-sm text-charcoal/55">
              נבדק רפואית על ידי {a.medicalReview.reviewerName} · {dateFmt.format(new Date(a.medicalReview.date))}
            </p>
          )}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl bg-soft-grey">
          <Image src={a.image} alt={a.imageAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
      </div>

      <article className="pb-16 md:pb-24 mt-12 md:mt-14">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-charcoal/80 leading-relaxed">
            <RefText text={a.intro} order={order} linkPrefix="src-" />
          </p>
          {a.cards && <ArticleCards cards={a.cards} />}

          {a.sections.map((s, si) => (
            <section key={`${si}-${s.heading}`} className="mt-14 md:mt-16">
              {s.heading && (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal leading-tight">{s.heading}</h2>
                  <div className="w-12 h-1 bg-deep-red rounded-full mt-5" aria-hidden />
                </>
              )}
              <div className="mt-6 space-y-5">
                {s.blocks.map((b, bi) =>
                  b.type === 'p' ? (
                    <p key={bi} className="text-lg text-charcoal/80 leading-relaxed">
                      <RefText text={b.text} order={order} linkPrefix="src-" />
                    </p>
                  ) : (
                    <ul key={bi} className="space-y-3">
                      {b.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-3 text-lg text-charcoal/80 leading-relaxed">
                          <CheckCircle2 className="mt-1 w-5 h-5 shrink-0 text-deep-red" aria-hidden />
                          <span>
                            <RefText text={item} order={order} linkPrefix="src-" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </section>
          ))}

          {a.faq.length > 0 && (
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
                    <p className="mt-4 text-base md:text-lg text-charcoal/75 leading-relaxed">
                      <RefText text={f.a} order={order} linkPrefix="src-" />
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {TREATMENT_LABELS[a.ctaHref] && (
            <p className="mt-12 text-lg text-charcoal/80">
              למידע על הטיפול במרפאה:{' '}
              <Link href={a.ctaHref} className="font-bold text-deep-red hover:underline">
                {TREATMENT_LABELS[a.ctaHref]}
              </Link>
            </p>
          )}

          <div className="mt-12 rounded-3xl bg-charcoal text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">תיאום אבחון</h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed max-w-xl mx-auto">
              תאמו אבחון במרפאה לבחינת ההתאמה ולבניית תוכנית אישית.
            </p>
            <Link
              href={a.ctaHref === '/technology' ? '/#appointment' : a.ctaHref}
              className="mt-8 inline-block bg-deep-red hover:bg-deep-red-dark text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {a.ctaLabel}
            </Link>
          </div>

          {sources.length > 0 && (
            <section className="mt-16" aria-labelledby="sources-title">
              <h2 id="sources-title" className="text-2xl md:text-3xl font-bold text-charcoal">מקורות</h2>
              <div className="w-12 h-1 bg-deep-red rounded-full mt-5" aria-hidden />
              <ol className="mt-6 space-y-2 list-decimal pr-5 text-base text-charcoal/75 leading-relaxed" dir="ltr">
                {sources.map((s, i) => (
                  <li key={s.id} id={`src-${i + 1}`} className="scroll-mt-28 text-left">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-deep-red hover:underline">
                      {s.name}
                    </a>
                    {s.year && <span className="text-charcoal/50"> ({s.year})</span>}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-charcoal/50">
                על אופן בחירת המקורות: <Link href="/editorial-policy" className="hover:text-deep-red underline">מדיניות התוכן</Link> ·{' '}
                <Link href="/medical-references" className="hover:text-deep-red underline">כל המקורות הרפואיים</Link>
              </p>
            </section>
          )}

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
