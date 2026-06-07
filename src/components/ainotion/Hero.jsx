import { brandPhotos } from '../../config/brandAssets'

export default function Hero() {
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
                  OmegaTree, <strong>MAS-10®</strong> ile evde alınan sabit hacimli kan örneğini
                  hedefli metabolomik analizle değerlendirir ve size özgü, bilim temelli bir{' '}
                  <em>beslenme–yaşam tarzı</em> planı oluşturur.
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
              <div className="hero-visual hero-animate hero-animate-5">
                <div className="hero-photo-tilt">
                  <div className="hero-photo-glow" aria-hidden="true"></div>
                  <div className="hero-photo-frame">
                    <img
                      src={brandPhotos.heroVisual}
                      alt="OmegaTree — bilim temelli beslenme ve metabolik sağlık"
                      className="hero-photo"
                    />
                  </div>
                  <span className="hero-photo-accent" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
