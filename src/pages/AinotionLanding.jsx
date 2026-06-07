import {
  Header,
  Hero,
  WhyFeatures,
  AboutSection,
  Testimonials,
  FeaturesGrid,
  Process,
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
        <Process />
        <FeaturesGrid />
        <AboutSection />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}
