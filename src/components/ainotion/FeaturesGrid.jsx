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

function ExpertCard({ icon, title, description, className = '' }) {
  return (
    <div className={`col-12 col-md-4 expert-card ${className}`.trim()}>
      <div className="expert-icon-wrap" aria-hidden="true">
        <i className={icon}></i>
      </div>
      <h4 className="expert-card-title">{title}</h4>
      <p className="expert-card-text">{description}</p>
    </div>
  )
}

export default function FeaturesGrid() {
  return (
    <section
      id="features2"
      className="dtr-section dtr-pt-100 dtr-pb-70 experts-section"
    >
      <div className="container">
        <div className="dtr-styled-heading text-center experts-section-header">
          <p className="about-eyebrow">Microscale Absorptive Sampling-10 (MAS-10)</p>
          <h2 className="about-title">
            OmegaTree ile Uzmanlığınızı
            <span className="about-title-accent"> Güçlendirin</span>
          </h2>
        </div>

        <div className="row">
          {expertFeatures.slice(0, 3).map((feature) => (
            <ExpertCard key={feature.title} {...feature} />
          ))}
        </div>

        <div className="row dtr-mt-40">
          {expertFeatures.slice(3).map((feature) => (
            <ExpertCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
