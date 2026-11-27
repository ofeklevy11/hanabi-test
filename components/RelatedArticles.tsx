import Link from 'next/link'
import { getArticle, TREATMENT_ARTICLES, type Article } from '@/lib/articles'

// "Related reading" for a treatment page: plain links to the article pages, in the style of the
// "more articles" block on article pages. Not used on the protected hair and eyebrow pages without approval.
export default function RelatedArticles({ page, title = 'מאמרים בנושא' }: { page: string; title?: string }) {
  const items = (TREATMENT_ARTICLES[page] ?? []).map(getArticle).filter((a): a is Article => Boolean(a))
  if (items.length === 0) return null

  return (
    <section className="border-t border-charcoal/10 bg-white py-16 md:py-20" aria-labelledby={`related-${page.replace(/\W/g, "") || "home"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 id={`related-${page.replace(/\W/g, "") || "home"}`} className="text-2xl md:text-3xl font-bold text-charcoal">
          {title}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/articles/${r.slug}`}
                className="group block h-full rounded-2xl bg-paper p-6 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-deep-red"
              >
                <span className="text-sm font-bold text-deep-red">{r.category}</span>
                <h3 className="mt-3 text-lg font-bold text-charcoal leading-snug group-hover:text-deep-red transition-colors">
                  {r.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/articles" className="mt-8 inline-block text-sm font-bold text-deep-red hover:underline">
          לכל המאמרים
        </Link>
      </div>
    </section>
  )
}
