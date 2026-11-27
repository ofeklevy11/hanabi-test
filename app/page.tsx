import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyAsia from '@/components/WhyAsia'
import Treatments from '@/components/Treatments'
import AppointmentForm from '@/components/AppointmentForm'
import Footer from '@/components/Footer'
import HomeServices from '@/components/HomeServices'
import RelatedArticles from '@/components/RelatedArticles'

// Home page metadata, defined on the home page itself (the root layout keeps the site default). Pending approval.
export const metadata: Metadata = {
  title: 'HANA BI | מרפאה להשתלות שיער, גבות, זקן וריסים בישראל',
  description:
    'מרפאת HANA BI בראשון לציון. מידע רפואי על השתלות שיער, גבות, זקן וריסים וטיפולי iPRF, הערכה ממוחשבת ומעקב רפואי.',
  alternates: { canonical: 'https://hanabi.co.il' },
  openGraph: {
    title: 'HANA BI | מרפאה להשתלות שיער, גבות, זקן וריסים בישראל',
    description:
      'מרפאת HANA BI בראשון לציון. מידע רפואי על השתלות שיער, גבות, זקן וריסים וטיפולי iPRF, הערכה ממוחשבת ומעקב רפואי.',
    url: 'https://hanabi.co.il',
    locale: 'he_IL',
    type: 'website',
    images: [{ url: 'https://hanabi.co.il/files/hero/hero-poster.jpg' }],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyAsia />
      <Treatments />
      <HomeServices />
      <RelatedArticles page="/" title="מאמרים מומלצים" />
      <AppointmentForm />
      <Footer />
    </main>
  )
}

