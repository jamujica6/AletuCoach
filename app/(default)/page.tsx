export const metadata = {
  title: 'Ale tu Coach',
  description: 'Coaching desde una perspectiva de psicología positiva',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
