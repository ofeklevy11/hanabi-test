import { Fragment } from 'react'

// Renders article text with source markers like [E05, E08] as numbered superscript references [1, 3],
// numbered by the article's own source order. With linkPrefix, each number links to its entry in the source list.
export default function RefText({ text, order, linkPrefix }: { text: string; order: string[]; linkPrefix?: string }) {
  const parts = text.split(/(\s*\[E\d{2}(?:\s*,\s*E\d{2})*\])/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/\[(E\d{2}(?:\s*,\s*E\d{2})*)\]/)
        if (!m) return <Fragment key={i}>{part}</Fragment>
        const nums = m[1]
          .split(/\s*,\s*/)
          .map((id) => order.indexOf(id) + 1)
          .filter((n) => n > 0)
        if (nums.length === 0) return null
        return (
          <sup key={i} className="mr-0.5 text-[0.7em] font-semibold text-deep-red">
            [
            {nums.map((n, j) => (
              <Fragment key={n}>
                {j > 0 && ', '}
                {linkPrefix ? (
                  <a href={`#${linkPrefix}${n}`} className="hover:underline" aria-label={`מקור ${n}`}>
                    {n}
                  </a>
                ) : (
                  n
                )}
              </Fragment>
            ))}
            ]
          </sup>
        )
      })}
    </>
  )
}
