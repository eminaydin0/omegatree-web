import useSlickSlider from '../../hooks/useSlickSlider'

const steps = [
  {
    number: 1,
    title: 'Evde Kan Örneği Alın',
    description:
      'MAS-10® kitiyle dakikalar içinde küçük bir kan örneği alarak bize gönderirsiniz. İşlem basittir, uzmanlık gerektirmez.',
  },
  {
    number: 2,
    title: 'Laboratuvar Analizi',
    description:
      'Örneğiniz LC-MS/MS ve GC-MS platformunda hedefli metabolomik analizden geçer.',
  },
  {
    number: 3,
    title: 'Entegrasyon ve Değerlendirme',
    description:
      'Biyobelirteçleriniz; beslenme, uyku, yaşam tarzı ve antropometrik bilgilerinizle bir arada değerlendirilir.',
  },
  {
    number: 4,
    title: 'Kişisel Sağlık Raporunuz',
    description:
      'Biyolojik yaş, inflamasyon düzeyi, metabolik riskler, beslenme kalitesi ve yağ asidi dengesi gibi sonuçlar net bir rapora dönüştürülür.',
  },
  {
    number: 5,
    title: 'Beslenme ve Yaşam Tarzı Önerileri',
    description:
      'Verilerinizden elde edilen bulgular doğrultusunda, size özel beslenme ve yaşam tarzı önerileri oluşturulur. Bilimsel temelli ve günlük hayatta kolayca uygulanabilir.',
  },
]

const processSliderOptions = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, arrows: false },
    },
  ],
}

export default function Process() {
  const sliderRef = useSlickSlider(processSliderOptions)

  return (
    <section
      id="how-it-works"
      className="dtr-section dtr-py-100 bg-light-blue process-section"
    >
      <div className="container process-section-inner">
        <div className="process-top">
          <div className="dtr-styled-heading text-center process-section-header">
            <p className="section-eyebrow">Nasıl Çalışır?</p>
            <h2 className="section-title">
              Metabolik Değerlendirme
              <span className="section-title-accent"> Süreci</span>
            </h2>
          </div>

          <div ref={sliderRef} className="dtr-slick-slider process-slider">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="process-slide">
                  <div className="process-slide-number">{step.number}</div>
                  <h3 className="process-slide-title">
                    Adım {step.number} — {step.title}
                  </h3>
                  <p className="process-slide-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center process-cta-wrap">
            <a className="process-cta dtr-scroll-link" href="#contact">
              <i className="icon-envelope"></i>
              İletişime Geçin
            </a>
          </p>
        </div>

        <div className="process-illustration-wrap">
          <img
            src="/assets/images/illustration.png"
            alt=""
            className="process-illustration-img"
          />
        </div>
      </div>
    </section>
  )
}
