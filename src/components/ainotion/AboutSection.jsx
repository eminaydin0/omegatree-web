import useScrollReveal from '../../hooks/useScrollReveal'

const assuranceItems = [
  {
    title: 'Klinik Doğrulukta Metabolomik Analizler',
    description:
      'Kütle spektrometresi tabanlı ölçümlerle geniş metabolomik panel.',
  },
  {
    title: 'Multidisipliner Uzman Kadro',
    description:
      'Klinik biyokimya, biyostatistik, yapay zekâ, beslenme bilimi ve klinik metabolizma alanlarında uzman akademik ekip.',
  },
  {
    title: 'Güvenilir ve Şeffaf Raporlama Sistemi',
    description:
      'Her sonuç bilimsel karşılığıyla açıklanır; uzmanların kolayca değerlendirebileceği formatta sunulur.',
  },
  {
    title: 'Dijital Sağlık Altyapısı ile Kolay Takip',
    description: 'Sonuçlara güvenli çevrimiçi erişim ve sürekli takip imkânı.',
  },
]

export default function AboutSection() {
  const platformRef = useScrollReveal()
  const aboutRef = useScrollReveal()

  return (
    <>
      <section
        ref={platformRef}
        className="dtr-section dtr-py-100 bg-light-blue parallax about-platform-cta ot-reveal-section"
        style={{ backgroundImage: 'url(/assets/images/cta-bg.png)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 ot-reveal ot-delay-1">
              <p className="about-eyebrow">OmegaTree Platform</p>
              <h4 className="about-platform-title">
                Diyetisyenler ve laboratuvarlar arasında kit takibi, analiz süreci
                ve danışan yönetimi — tek ekosistemde.
              </h4>
            </div>
            <div className="col-12 col-md-5 about-platform-actions ot-reveal ot-delay-2">
              <a
                href="https://app.omegatree.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn about-btn-primary"
              >
                Uygulamaya Git
              </a>
              <a href="#about" className="about-btn about-btn-outline dtr-scroll-link">
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className="dtr-section about-section ot-reveal-section">
        <div className="container">
          <div className="row dtr-pt-100">
            <div className="col-12 col-md-6 small-device-space ot-reveal-left ot-delay-1">
              <img src="/assets/images/ai-img1.png" alt="OmegaTree metabolomik analiz" />
            </div>

            <div className="col-12 col-md-6">
              <div className="dtr-pl-30 about-intro ot-reveal-right ot-delay-2">
                <p className="about-eyebrow">Hakkımızda</p>
                <h2 className="about-title">
                  Bilimin Işığında
                  <span className="about-title-accent">
                    {' '}
                    Kişiselleştirilmiş Sağlık Çözümleri
                  </span>
                </h2>
                <p className="about-text">
                  OmegaTree, metabolik sağlığı biyobelirteçler üzerinden bilimsel doğrulukla
                  değerlendirmek ve kişiye özgü beslenme önerileri sunmak amacıyla geliştirilmiş
                  yeni nesil bir sağlık teknolojisi platformudur. <strong>MAS-10®</strong>{' '}
                  mikroörnekleme teknolojisini hedefli metabolomik analizlerle birleştirerek,
                  bireylerin biyolojik yaşlanma süreçlerini, inflamasyon düzeylerini ve beslenme
                  kalitelerini objektif olarak ortaya koyuyoruz.
                </p>
                <p className="about-text">
                  Amacımız; karmaşık metabolik verileri sade, anlaşılır ve uygulanabilir sağlık
                  önerilerine dönüştürerek herkes için erişilebilir bir kişiselleştirilmiş sağlık
                  yaklaşımı sunmaktır.
                </p>
                <a href="#contact" className="about-link-tag dtr-scroll-link">
                  <span>İletişim</span> Bilimsel güvence
                </a>
              </div>
            </div>
          </div>

          <div className="row dtr-mt-100">
            <div className="col-12 col-md-6">
              <div className="dtr-pr-30 about-assurance-block ot-reveal-left ot-delay-1">
                <h2 className="about-assurance-heading">
                  Bilimsel Güvence ile
                  <span className="about-title-accent"> Sunulan Hizmetler</span>
                </h2>
                <ul className="about-assurance-list">
                  {assuranceItems.map((item, index) => (
                    <li
                      key={item.title}
                      className={`about-assurance-item ot-reveal ot-delay-${index + 2}`}
                    >
                      <span className="about-assurance-icon" aria-hidden="true">
                        <i className="icon-check-circle2"></i>
                      </span>
                      <div className="about-assurance-content">
                        <h3 className="about-assurance-title">{item.title}</h3>
                        <p className="about-assurance-desc">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 small-device-space ot-reveal-right ot-delay-2">
              <img src="/assets/images/ai-img2.png" alt="OmegaTree dijital sağlık platformu" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
