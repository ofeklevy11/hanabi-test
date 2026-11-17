export type TreatmentFaqItem = { q: string; a: string }

// Clinical Q&A for a treatment page, with FAQPage structured data for search and AI engines.
export default function TreatmentFaq({ items, title = 'שאלות נפוצות' }: { items: TreatmentFaqItem[]; title?: string }) {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className="bg-paper py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, '\u003c') }}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-charcoal">{title}</h2>
        <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />
        <div className="mt-12 space-y-4">
          {items.map((f) => (
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
  )
}
