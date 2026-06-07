import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

const stats = [
  { value: '1000+', label: 'Tamamlanan Metabolomik Analiz' },
  { value: '72', label: 'Metabolomik Biyobelirteç' },
  { value: '%99.5', label: 'Mikroörneklemede güçlü doğrusallık' },
  { value: '%98', label: 'Kullanıcı Memnuniyeti' },
]

const appScreens = [
  {
    src: '/assets/images/app/dashboard.png',
    alt: 'OmegaTree yönetici paneli — dashboard',
    caption: 'Yönetici Paneli',
  },
  {
    src: '/assets/images/app/uretim-merkezi.png',
    alt: 'OmegaTree üretim merkezi ekranı',
    caption: 'Üretim Merkezi',
  },
  {
    src: '/assets/images/app/stok-takibi.png',
    alt: 'OmegaTree kit stok takibi ekranı',
    caption: 'Stok Takibi',
  },
]

export default function Testimonials() {
  const sectionRef = useScrollReveal()
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((current) => (current + 1) % appScreens.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="dtr-section dtr-py-100 omegatree-stats-section ot-reveal-section"
    >
      <div className="container">
        <div className="dtr-styled-heading text-center omegatree-stats-header">
          <p className="stats-eyebrow stats-animate stats-animate-1">Kanıtlanmış Sonuçlar</p>
          <h2 className="stats-title stats-animate stats-animate-2">
            Rakamlarla
            <span className="stats-title-accent"> OmegaTree</span>
          </h2>
          <p className="stats-lead stats-animate stats-animate-3">
            Bilim temelli metabolomik değerlendirme altyapımızın gücünü,
            <em> ölçülebilir sonuçlarla</em> net biçimde ortaya koyuyoruz.
          </p>
        </div>

        <div className="omegatree-stats-grid">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`omegatree-stat-card stats-animate stats-animate-${index + 4}`}
            >
              <span className="omegatree-stat-value">{item.value}</span>
              <p className="omegatree-stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="omegatree-app-showcase ot-reveal ot-delay-3">
        <div className="omegatree-app-stage">
          <div className="container omegatree-app-stage-inner">
            <div className="omegatree-app-stage-content">
              <p className="omegatree-app-eyebrow">OmegaTree Platform</p>
              <h3 className="omegatree-app-title">
                Kit takibi, stok ve raporlama — tek panelde
              </h3>
              <p className="omegatree-app-lead">
                Diyetisyenler, laboratuvarlar ve yöneticiler için güvenilir dijital altyapı.
              </p>

              <div className="omegatree-app-tabs" role="tablist" aria-label="Uygulama ekranları">
                {appScreens.map((screen, index) => (
                  <button
                    key={screen.caption}
                    type="button"
                    role="tab"
                    aria-selected={activeScreen === index}
                    className={`omegatree-app-tab${activeScreen === index ? ' is-active' : ''}`}
                    onClick={() => setActiveScreen(index)}
                  >
                    {screen.caption}
                  </button>
                ))}
              </div>

              <a
                href="https://app.omegatree.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="omegatree-app-cta"
              >
                Uygulamayı Gör
              </a>
            </div>
          </div>

          <div className="omegatree-app-stage-visual ot-reveal-right ot-delay-4" aria-hidden="true">
            <div className="omegatree-app-browser">
              <div className="omegatree-app-browser-bar">
                <span></span>
                <span></span>
                <span></span>
                <span className="omegatree-app-browser-url">app.omegatree.com.tr</span>
              </div>
              <div className="omegatree-app-browser-screen">
                {appScreens.map((screen, index) => (
                  <img
                    key={screen.caption}
                    src={screen.src}
                    alt={screen.alt}
                    loading="lazy"
                    className={`omegatree-app-screen${activeScreen === index ? ' is-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
