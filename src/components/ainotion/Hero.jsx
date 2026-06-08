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
                <svg className="hero-clip-defs" aria-hidden="true" width="0" height="0">
                  <defs>
                    <clipPath id="hero-photo-wave" clipPathUnits="objectBoundingBox">
                      <path d="M0,0.03 Q0.5,0 1,0.03 L1,0.76 C0.96,0.82 0.92,0.74 0.88,0.8 C0.84,0.73 0.8,0.81 0.76,0.74 C0.72,0.82 0.68,0.75 0.64,0.81 C0.6,0.74 0.56,0.82 0.52,0.75 C0.48,0.81 0.44,0.74 0.4,0.8 C0.36,0.73 0.32,0.81 0.28,0.74 C0.24,0.82 0.2,0.75 0.16,0.81 C0.12,0.74 0.08,0.82 0.04,0.76 C0.02,0.79 0,0.77 0,0.76 Z" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="hero-photo-tilt">
                  <div className="hero-photo-glow" aria-hidden="true"></div>
                  <div className="hero-photo-frame">
                    <img
                      src={brandPhotos.heroVisual}
                      alt="OmegaTree — bilim temelli beslenme ve metabolik sağlık"
                      className="hero-photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
