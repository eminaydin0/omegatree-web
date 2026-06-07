import { useEffect, useRef } from 'react'

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
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonial"
      className="dtr-section dtr-py-100 omegatree-stats-section"
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

        <div className="omegatree-app-showcase">
          <div className="omegatree-app-showcase-head text-center">
            <p className="omegatree-app-eyebrow">OmegaTree Platform</p>
            <h3 className="omegatree-app-title">Kit takibi, stok ve raporlama — tek panelde</h3>
            <p className="omegatree-app-lead">
              Diyetisyenler, laboratuvarlar ve yöneticiler için güvenilir dijital altyapı.
            </p>
          </div>

          <div className="omegatree-app-grid">
            {appScreens.map((screen) => (
              <figure key={screen.caption} className="omegatree-app-shot">
                <div className="omegatree-app-shot-frame">
                  <img src={screen.src} alt={screen.alt} loading="lazy" />
                </div>
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center omegatree-app-cta-wrap">
            <a
              href="https://app.omegatree.com.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="omegatree-app-cta"
            >
              Uygulamayı Gör
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
