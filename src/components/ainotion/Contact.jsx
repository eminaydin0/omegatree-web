import useSlickSlider from '../../hooks/useSlickSlider'

const contactSlides = [
  {
    icon: 'icon-phone-alt',
    label: 'Telefon',
    value: '+90 546 225 74 67',
    href: 'tel:+905462257467',
  },
  {
    icon: 'icon-envelope',
    label: 'E-posta',
    value: 'info@omegatree.com.tr',
    href: 'mailto:info@omegatree.com.tr',
  },
  {
    icon: 'icon-map-marker',
    label: 'Adres',
    value:
      'Yıldırım Beyazıt Mah. Aşık Veysel Blv. Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi, 38030 Melikgazi/Kayseri',
    href: null,
  },
]

const contactSliderOptions = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, centerMode: true, centerPadding: '24px' },
    },
  ],
}

export default function Contact() {
  const contactSliderRef = useSlickSlider(contactSliderOptions)

  return (
    <section
      id="contact"
      className="dtr-section bg-blue contact-section"
      style={{ backgroundImage: 'url(/assets/images/section-bg-img.jpg)' }}
    >
      <div className="dtr-overlay dtr-overlay-blue"></div>

      <div
        className="dtr-py-100 dtr-overlay-content parallax"
        style={{ backgroundImage: 'url(/assets/images/form-bg.png)' }}
      >
        <div className="container">
          <div className="dtr-styled-heading text-center contact-section-header">
            <h2 className="color-white contact-title">İletişime Geçin</h2>
            <p className="color-white contact-lead">
              Analiz hizmetlerimiz hakkında bilgi almak, fiyat teklifi istemek veya
              danışmanlık için bize ulaşın.
            </p>
          </div>

          <div
            ref={contactSliderRef}
            className="dtr-slick-slider contact-info-slider dtr-mb-40"
          >
            {contactSlides.map((slide) => (
              <div key={slide.label}>
                <div className="contact-slide">
                  <i className={`${slide.icon} contact-slide-icon`} aria-hidden="true"></i>
                  <p className="contact-slide-label">{slide.label}</p>
                  {slide.href ? (
                    <a href={slide.href} className="contact-slide-value">
                      {slide.value}
                    </a>
                  ) : (
                    <p className="contact-slide-value">{slide.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <div className="dtr-form dtr-p-50 dtr-sm-p-20 dtr-border-5px dtr-rounded-xl bg-blue border-light-blue">
                <h4 className="color-white text-center dtr-mb-30">Bize Yazın</h4>
                <p className="color-white text-center dtr-mb-30">
                  Size en kısa sürede dönüş yapacağız.
                </p>
                <form
                  id="contactform"
                  method="post"
                  action="#"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <fieldset>
                    <div className="dtr-form-row dtr-form-row-2col clearfix">
                      <p className="dtr-form-column">
                        <input name="name" type="text" placeholder="Ad Soyad" />
                      </p>
                      <p className="dtr-form-column">
                        <input
                          name="email"
                          className="required email"
                          type="text"
                          placeholder="ornek@email.com"
                        />
                      </p>
                    </div>
                    <p>
                      <select name="selectdropdown" className="dtr-select">
                        <option value="">Konu — Genel Bilgi</option>
                        <option value="1">Analiz Hizmetleri</option>
                        <option value="2">Fiyat Teklifi</option>
                        <option value="3">Danışmanlık</option>
                        <option value="4">Platform / İşbirliği</option>
                      </select>
                    </p>
                    <p className="antispam" style={{ display: 'none' }}>
                      Leave this empty: <br />
                      <input name="url" />
                    </p>
                    <p>
                      <textarea
                        rows="6"
                        name="message"
                        id="message"
                        className="required"
                        placeholder="Mesajınızı buraya yazın..."
                      ></textarea>
                    </p>
                    <p className="text-center">
                      <button className="dtr-btn dtr-btn-styled btn-red dtr-mt-20" type="submit">
                        Gönder
                      </button>
                    </p>
                    <div id="result"></div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
