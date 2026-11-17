'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, X } from 'lucide-react'
import { type Article, DISCLAIMER } from '@/lib/articles'

export default function ArticleHub({ articles }: { articles: Article[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const active = articles.find((a) => a.slug === openSlug) ?? null

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenSlug(null)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [active])

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <li key={a.slug}>
            <button
              type="button"
              onClick={() => setOpenSlug(a.slug)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-right ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-soft-grey">
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="inline-flex w-fit rounded-full bg-deep-red/10 px-3.5 py-1 text-sm font-bold text-deep-red">
                  {a.category}
                </span>
                <h2 className="mt-4 text-xl md:text-2xl font-bold text-charcoal leading-snug group-hover:text-deep-red transition-colors">
                  {a.title}
                </h2>
                <p className="mt-3 text-base text-charcoal/65 leading-relaxed">{a.description}</p>
                <div className="mt-auto pt-6 flex items-center justify-between text-sm text-charcoal/50">
                  <span>{a.readMinutes} דקות קריאה</span>
                  <span className="font-bold text-deep-red">לקריאה ←</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div className="fixed inset-0 z-[90] flex items-end md:items-center justify-center p-0 md:p-6">
          <button
            type="button"
            aria-label="סגירה"
            onClick={() => setOpenSlug(null)}
            className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-title"
            className="relative flex h-[92svh] md:h-[86vh] w-full md:max-w-3xl flex-col overflow-hidden rounded-t-3xl md:rounded-3xl bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 bg-white px-6 py-4">
              <span className="text-sm font-bold text-deep-red">{active.category}</span>
              <button
                type="button"
                onClick={() => setOpenSlug(null)}
                className="rounded-full p-2 text-charcoal/70 hover:bg-charcoal/5"
                aria-label="סגירת הכתבה"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="relative aspect-[16/8] w-full bg-soft-grey">
                <Image src={active.image} alt={active.imageAlt} fill sizes="768px" className="object-cover" />
              </div>
              <article className="px-6 md:px-10 pt-8 pb-10">
                <h2 id="article-title" className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
                  {active.title}
                </h2>
                <p className="mt-3 text-sm text-charcoal/50">
                  נכתב על ידי צוות HANA BI · {active.readMinutes} דקות קריאה
                </p>
                <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">{active.intro}</p>

                {active.sections.map((s) => (
                  <section key={s.heading} className="mt-9">
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal">{s.heading}</h3>
                    <div className="mt-3 space-y-4">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                    {s.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-base text-charcoal/80 leading-relaxed">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-deep-red" aria-hidden />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                <section className="mt-10">
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal">שאלות נפוצות</h3>
                  <div className="mt-4 space-y-3">
                    {active.faq.map((f) => (
                      <details key={f.q} className="group rounded-2xl bg-white px-5 py-4 ring-1 ring-black/5">
                        <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-charcoal">
                          {f.q}
                          <span className="text-deep-red text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden>
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-base text-charcoal/75 leading-relaxed">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </section>

                <div className="mt-10 rounded-2xl bg-charcoal p-6 text-center text-white">
                  <Link
                    href={active.ctaHref}
                    className="inline-block bg-deep-red hover:bg-deep-red-dark text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    {active.ctaLabel}
                  </Link>
                </div>

                <p className="mt-8 text-xs text-charcoal/50 leading-relaxed">{DISCLAIMER}</p>
                <Link href={`/articles/${active.slug}`} className="mt-4 inline-block text-sm font-bold text-deep-red hover:underline">
                  לעמוד הכתבה המלא
                </Link>
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
