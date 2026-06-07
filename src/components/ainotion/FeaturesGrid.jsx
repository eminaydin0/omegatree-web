import useScrollReveal from '../../hooks/useScrollReveal'

const expertFeatures = [
  {
    icon: 'icon-flask',
    title: 'İleri Teknolojiye Erişim',
    description:
      'LC-MS/MS ve GC-MS kullanımıyla detaylı beslenme analizleri gerçekleştirerek yetkinliklerinizi artırabilirsiniz.',
    className: '',
  },
  {
    icon: 'icon-heartbeat',
    title: 'Hasta Sonuçlarını İyileştirin',
    description:
      'Kişiye özel beslenme müdahaleleri sunarak danışan memnuniyetini artırabilirsiniz.',
    className: '',
  },
  {
    icon: 'icon-award',
    title: 'Profesyonel İtibarınızı Güçlendirin',
    description:
      'OmegaTree ile işbirliği yaparak kanıta dayalı beslenme ve fonksiyonel tıp alanında öncü konuma gelebilirsiniz.',
    className: '',
  },
  {
    icon: 'icon-user-graduate',
    title: 'Eğitim ve Araştırma Fırsatları',
    description:
      'En güncel araştırmalar ve araçlara erişerek beslenme biliminin ön saflarında kalabilirsiniz.',
    className: 'offset-md-2',
  },
  {
    icon: 'icon-clipboard-list',
    title: 'Kit Takip ve İşbirliği',
    description:
      'Diyetisyenler ve laboratuvarlar arasında kit gönderimi, analiz ve raporlama süreçlerini dijital ortamda yönetin.',
    className: '',
  },
]

const cardDelays = ['ot-delay-3', 'ot-delay-4', 'ot-delay-5', 'ot-delay-6', 'ot-delay-7']

function ExpertCard({ icon, title, description, className = '', delayClass = '' }) {
  return (
    <div className={`col-12 col-md-4 expert-card ot-reveal ${delayClass} ${className}`.trim()}>
      <div className="expert-icon-wrap" aria-hidden="true">
        <i className={icon}></i>
      </div>
      <h4 className="expert-card-title">{title}</h4>
      <p className="expert-card-text">{description}</p>
    </div>
  )
}

export default function FeaturesGrid() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      id="features2"
      className="dtr-section dtr-pt-100 dtr-pb-70 experts-section ot-reveal-section"
    >
      <div className="container">
        <div className="dtr-styled-heading text-center experts-section-header ot-reveal ot-delay-1">
          <p className="about-eyebrow">Microscale Absorptive Sampling-10 (MAS-10)</p>
          <h2 className="about-title">
            OmegaTree ile Uzmanlığınızı
            <span className="about-title-accent"> Güçlendirin</span>
          </h2>
        </div>

        <div className="row">
          {expertFeatures.slice(0, 3).map((feature, index) => (
            <ExpertCard key={feature.title} {...feature} delayClass={cardDelays[index]} />
          ))}
        </div>

        <div className="row dtr-mt-40">
          {expertFeatures.slice(3).map((feature, index) => (
            <ExpertCard key={feature.title} {...feature} delayClass={cardDelays[index + 3]} />
          ))}
        </div>
      </div>
    </section>
  )
}
