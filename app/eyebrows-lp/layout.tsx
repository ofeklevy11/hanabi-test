import type { Metadata } from 'next'

// Campaign landing page. Its content largely repeats /eyebrows, so search engines are pointed to the main page
// with a canonical link instead of a blanket noindex. Proposal pending approval (HANABI_QA_REPORT_RUN2.md).
export const metadata: Metadata = {
  alternates: { canonical: 'https://hanabi.co.il/eyebrows' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
