const contactItems = [
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
      'Yıldırım Beyazıt Mah. Aşık Veysel Blv. Erciyes Üniversitesi Teknoloji Geliştirme Bölgesi İdare Binası ve Kuluçka Merkezi 4 Binası, 38030 Melikgazi/Kayseri',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="dtr-section dtr-py-100 contact-section">
      <div className="container">
        <div className="dtr-styled-heading text-center contact-section-header">
          <p className="section-eyebrow">İletişim</p>
          <h2 className="section-title contact-title">
            İletişime
            <span className="section-title-accent"> Geçin</span>
          </h2>
          <p className="contact-lead">
            Analiz hizmetlerimiz hakkında detaylı bilgi almak, fiyat teklifi istemek veya
            danışmanlık hizmetlerimizden yararlanmak için bize ulaşın.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="contact-info-panel" aria-label="İletişim bilgileri">
            <h3 className="contact-info-title">Bize Ulaşın</h3>
            <p className="contact-info-desc">
              Size en kısa sürede dönüş yapacağız.
            </p>

            <ul className="contact-info-list">
              {contactItems.map((item) => (
                <li key={item.label} className="contact-info-item">
                  <span className="contact-info-icon" aria-hidden="true">
                    <i className={item.icon}></i>
                  </span>
                  <div className="contact-info-content">
                    <span className="contact-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="contact-form-panel">
            <h3 className="contact-form-title">Bize Yazın</h3>

            <form
              id="contactform"
              className="contact-form"
              method="post"
              action="#"
              onSubmit={(event) => event.preventDefault()}
            >
              <fieldset>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Adınız</label>
                    <input id="contact-name" name="name" type="text" placeholder="Ad Soyad" />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">E-Posta</label>
                    <input
                      id="contact-email"
                      name="email"
                      className="required email"
                      type="email"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">Konu</label>
                  <select id="contact-subject" name="selectdropdown">
                    <option value="">Genel Bilgi</option>
                    <option value="1">Analiz Hizmetleri</option>
                    <option value="2">Fiyat Teklifi</option>
                    <option value="3">Danışmanlık</option>
                    <option value="4">Platform / İşbirliği</option>
                  </select>
                </div>

                <p className="antispam" style={{ display: 'none' }}>
                  Leave this empty: <br />
                  <input name="url" />
                </p>

                <div className="contact-field">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    className="required"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button className="contact-form-submit" type="submit">
                  Gönder
                  <i className="icon-arrow-right" aria-hidden="true"></i>
                </button>
                <div id="result"></div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
