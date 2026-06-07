import {
  Header,
  Hero,
  WhyFeatures,
  AboutSection,
  Testimonials,
  FeaturesGrid,
  Pricing,
  Process,
  Blog,
  Contact,
  Footer,
  ScrollToTop,
} from '../components/ainotion'

export default function AinotionLanding() {
  return (
    <div id="dtr-wrapper" className="clearfix">
      <Header />
      <div id="dtr-main-content">
        <Hero />
        <WhyFeatures />
        <AboutSection />
        <Testimonials />
        <FeaturesGrid />
        <Pricing />
        <Process />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}
