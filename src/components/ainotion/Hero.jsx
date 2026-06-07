import useScrollReveal from '../../hooks/useScrollReveal'

export default function Hero() {
  const clientsRef = useScrollReveal({ threshold: 0.2 })

  return (
    <>
      <section
        id="home"
        className="dtr-section dtr-hero-section-top-padding dtr-pb-100 parallax bg-light-blue hero-section"
        style={{ backgroundImage: 'url(/assets/images/hero-bg.png)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="hero-content">
                <p className="hero-eyebrow hero-animate hero-animate-1">
                  OmegaTree · Metabolik Sağlık
                </p>
                <h1 className="hero-title hero-animate hero-animate-2">
                  Metabolik Sağlığınız İçin
                  <span className="hero-title-accent"> Bilim Temelli Değerlendirme</span>
                </h1>
                <p className="hero-lead hero-animate hero-animate-3">
                  OmegaTree; <strong>MAS-10®</strong> ile evde alınan sabit hacimli kan
                  örneğinizi hedefli metabolomik analizden geçirir ve size özel,
                  bilim temelli bir <em>beslenme–yaşam tarzı</em> planına dönüştürür.
                </p>
                <div className="hero-actions hero-animate hero-animate-4">
                  <a href="#features" className="dtr-scroll-link hero-btn hero-btn-primary">
                    Özellikler
                  </a>
                  <a href="#how-it-works" className="dtr-scroll-link hero-btn hero-btn-outline">
                    Nasıl Çalışır?
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 small-device-space">
              <div className="hero-visual">
                <img
                  src="/assets/images/hero-img.png"
                  alt="OmegaTree metabolik sağlık değerlendirmesi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={clientsRef}
        className="dtr-section dtr-py-50 hero-clients-section ot-reveal-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <div className="dtr-slick-slider dtr-img-slider-6col ot-reveal ot-delay-1">
                <div>
                  <img src="/assets/images/client-2.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-1.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-3.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-4.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-5.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-6.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-2.png" alt="image" />
                </div>
                <div>
                  <img src="/assets/images/client-4.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
