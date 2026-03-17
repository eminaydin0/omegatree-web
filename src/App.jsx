import React, { useEffect } from 'react'
import { WOW } from 'wowjs'
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
} from './components'

export default function App() {
  useEffect(() => {
    const t = setTimeout(() => {
      const wow = new WOW({ live: false, offset: 0, mobile: true })
      wow.init()
    }, 100)
    return () => clearTimeout(t)
  }, [])

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
