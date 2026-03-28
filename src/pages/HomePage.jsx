import React from 'react'
import {
  HeaderBanner,
  SolutionBox,
  Services,
  Help,
  Clients,
  Work,
  Testimonials,
  Information,
  Footer,
} from '../components'

/**
 * Ana sayfa bölüm sırası: üstten alta tek akış.
 * Yeni bölüm eklenecekse önce ilgili bileşende `id` tanımlayın, sonra buraya ekleyin.
 */
export default function HomePage() {
  return (
    <>
      <HeaderBanner />
      <SolutionBox />
      <Services />
      <Help />
      <Clients />
      <Work />
      <Testimonials />
      <Information />
      <Footer />
    </>
  )
}
