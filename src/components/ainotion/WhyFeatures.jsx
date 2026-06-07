import { useEffect, useRef } from 'react'

const features = [
  {
    number: 1,
    title: 'MAS-10®: Türkiye’de Geliştirilen Klinik Doğrulukta Mikronörnekleme Teknolojisi',
    description:
      'Sadece 10 µL sabit hacimli kan, hematokritten bağımsız olarak alınır ve oda sıcaklığında stabilize edilir. Bu teknoloji tamamen OmegaTree ekibine aittir ve her kullanıcıya evden klinik seviyede ölçüm imkânı sağlar.',
    icon: 'icon-droplet',
  },
  {
    number: 2,
    title: 'Hedefli Metabolomik Analiz ile Derin Biyobelirteç Profili',
    description:
      'MAS-10® ile alınan örnekler LC-MS/MS analizinden geçirilerek 44 amino asidi ve 28 yağ asidini içeren geniş bir metabolomik panel ölçülür.',
    icon: 'icon-chart-line',
  },
  {
    number: 3,
    title: 'AI Destekli Kişiye Özgü Besin Öneri Sistemi',
    description:
      'OmegaTree’nin yapay zekâ algoritması metabolomik sonuçlarınızı beslenme kayıtlarınızla bir araya getirerek kişisel besin önerileri üretir. Hangi besin gruplarını artırmanız gerektiğini bilimsel temelle belirler.',
    icon: 'icon-leaf',
  },
  {
    number: 4,
    title: 'Kişisel Metabolik Sağlık Skorları',
    description:
      'HEI, MEDAS, Dİİ, Omega-3/Omega-6 dengesi, biyolojik yaş gibi çok katmanlı skorlar tek bir raporda sizin için yorumlanır. Bu skorlar iyileşme takibi için standardize edilmiştir.',
    icon: 'icon-chart-pie',
  },
  {
    number: 5,
    title: 'Uzmanlar İçin Klinik Düzeyde Raporlama',
    description:
      'Diyetisyenler ve klinisyenler için tasarlanan profesyonel rapor, metabolik durumunuzu, risk faktörlerinizi ve önerileri açık, bilimsel ve yapılandırılmış biçimde sunar.',
    icon: 'icon-file-alt',
  },
  {
    number: 6,
    title: 'Yüksek Tekrarlanabilirlik ve Klinik Standartlara Uyum',
    description:
      'OmegaTree analizleri; örnek hazırlama, ölçüm ve raporlama adımlarında uluslararası laboratuvar standartlarıyla uyumlu olarak yürütülür.',
    icon: 'icon-certificate',
  },
]

function FeatureCard({ number, title, description, icon, className = '' }) {
  return (
    <div className={`col-12 col-md-4 ozellik-card ${className}`.trim()}>
      <div className="ozellik-icon-wrap" aria-hidden="true">
        <i className={icon}></i>
      </div>
      <h3 className="ozellik-baslik">
        <span className="ozellik-numara">{number}.</span> {title}
      </h3>
      <p className="ozellik-metin">{description}</p>
    </div>
  )
}

export default function WhyFeatures() {
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
      id="features"
      className="dtr-section dtr-pt-50 dtr-pb-70 features-section"
    >
      <div className="container">
        <div className="dtr-styled-heading text-center features-section-header">
          <p className="section-eyebrow section-animate section-animate-1">Özellikler</p>
          <h2 className="section-title section-animate section-animate-2">
            Metabolik Sağlığın
            <span className="section-title-accent">
              {' '}
              Biyobelirteç Temelli Değerlendirmesi
            </span>
          </h2>
          <p className="section-lead section-animate section-animate-3">
            OmegaTree; <strong>MAS-10®</strong> mikronörnekleme teknolojisini hedefli
            metabolomik analizlerle birleştirerek metabolik sağlığı{' '}
            <em>çok boyutlu</em> olarak değerlendirir.
          </p>
        </div>

        <div className="row">
          {features.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>

        <div className="row dtr-mt-40">
          {features.slice(3).map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
