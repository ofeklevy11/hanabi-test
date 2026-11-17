import { CheckCircle2 } from 'lucide-react'

type PriceBlockProps = {
  title: string
  from: string
  to: string
  method: string
  addonTitle: string
  addonText: string
  addonEnglish: string
  note: string
}

export default function PriceBlock({ title, from, to, method, addonTitle, addonText, addonEnglish, note }: PriceBlockProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-bold tracking-wide text-deep-red">מחירים</p>
        <h2 className="mt-4 text-center text-3xl md:text-5xl font-extrabold text-charcoal leading-tight">{title}</h2>
        <div className="w-16 h-1 bg-deep-red rounded-full mx-auto mt-7" aria-hidden />

        <div className="mt-12 rounded-3xl bg-paper p-8 md:p-12 ring-1 ring-black/5 text-center">
          <p className="text-lg text-charcoal/70">{method}</p>
          <p className="mt-4 text-4xl md:text-5xl font-extrabold text-charcoal">
            החל מ-<span className="text-deep-red">{from}</span> ועד {to}
          </p>
          <p className="mt-4 text-base text-charcoal/60">{note}</p>
        </div>

        <div className="mt-8 rounded-3xl bg-charcoal text-white p-8 md:p-10">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-deep-red" aria-hidden />
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                {addonTitle} <span className="text-white/60 text-base font-semibold">({addonEnglish})</span>
              </h3>
              <p className="mt-3 text-base md:text-lg text-white/80 leading-relaxed">{addonText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
