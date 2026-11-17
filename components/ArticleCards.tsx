import type { ArticleCard } from '@/lib/articles'

// Price overview cards. Main treatments are light, add-ons are dark, so the eye
// reads the starting prices first and the options second.
export default function ArticleCards({ cards }: { cards: ArticleCard[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {cards.map((c) =>
        c.tone === 'main' ? (
          <div key={c.label} className="rounded-3xl bg-white p-7 ring-1 ring-black/5 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-bold tracking-wide text-charcoal/50">{c.label}</p>
            <p className="mt-3 text-2xl md:text-3xl font-extrabold text-charcoal leading-tight">
              <span className="whitespace-nowrap text-deep-red">{c.price}</span>
            </p>
            <p className="mt-4 text-base text-charcoal/70 leading-relaxed">{c.note}</p>
          </div>
        ) : (
          <div key={c.label} className="rounded-3xl bg-charcoal p-7 text-white">
            <p className="text-sm font-bold tracking-wide text-white/60">אפשרות נוספת</p>
            <p className="mt-2 text-xl font-bold">{c.label}</p>
            <p className="mt-2 text-sm font-semibold text-white/70">{c.price}</p>
            <p className="mt-4 text-base text-white/80 leading-relaxed">{c.note}</p>
          </div>
        ),
      )}
    </div>
  )
}
