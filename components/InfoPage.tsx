import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Shared shell for the information pages (/about, /technology, /editorial-policy, /medical-references),
// in the same visual language as /team and the article pages.
export function InfoPage({
  eyebrow,
  title,
  intro,
  jsonLd,
  children,
}: {
  eyebrow: string
  title: string
  intro: ReactNode
  jsonLd?: object[]
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-paper">
      {(jsonLd ?? []).map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, '\\u003c') }}
        />
      ))}
      <Navbar />
      <header className="relative pt-36 md:pt-44 pb-12 md:pb-16 overflow-hidden">
        <div className="bio-grid absolute inset-x-0 top-0 h-full opacity-70" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-bold tracking-wide text-deep-red">{eyebrow}</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-charcoal leading-tight tracking-tight">{title}</h1>
          <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
          <p className="mt-7 text-lg md:text-xl text-charcoal/70 leading-relaxed">{intro}</p>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">{children}</div>
      <Footer />
    </main>
  )
}

export function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-2xl md:text-3xl font-bold text-charcoal leading-tight">{title}</h2>
      <div className="w-12 h-1 bg-deep-red rounded-full mt-5" aria-hidden />
      <div className="mt-6 space-y-5 text-lg text-charcoal/80 leading-relaxed">{children}</div>
    </section>
  )
}

export function InfoList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-deep-red" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export const pageLd = (url: string, name: string, type = 'WebPage') => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': url,
  url,
  name,
  inLanguage: 'he-IL',
  isPartOf: { '@id': 'https://hanabi.co.il/#website' },
  about: { '@id': 'https://hanabi.co.il/#clinic' },
})
