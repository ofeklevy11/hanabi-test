import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyAsia from '@/components/WhyAsia'
import Treatments from '@/components/Treatments'
import AppointmentForm from '@/components/AppointmentForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyAsia />
      <Treatments />
      <AppointmentForm />
      <Footer />
    </main>
  )
}

