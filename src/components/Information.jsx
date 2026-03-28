import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { SECTION } from '../config/site'
import { IMG } from '../utils/helpers'

const icons = ['service-icon1.png', 'service-icon2.png', 'service-icon3.png']

const items = [
  { title: 'Klinik Doğrulukta\nMetabolomik Analizler', text: 'Kütle spektrometresi tabanlı ölçümlerle geniş metabolomik panel.' },
  { title: 'Multidisipliner\nUzman Kadro', text: 'Klinik biyokimya, biyostatistik, yapay zekâ, beslenme bilimi ve klinik metabolizma alanlarında uzman akademik ekip.' },
  { title: 'Güvenilir ve Şeffaf\nRaporlama Sistemi', text: 'Her sonuç bilimsel karşılığıyla açıklanır; uzmanların kolaylıkla değerlendirebileceği formatta sunulur.' },
  { title: 'Dijital Sağlık Altyapısı\nile Kolay Takip', text: 'Sonuçlara güvenli çevrimiçi erişim ve takip imkânı.' },
]

export default function Information() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`w-100 float-left service-con omegatree-features information-con padding-bottom padding-top ${inView ? 'ozellik-section--visible' : ''}`}
      id={SECTION.about}
    >
      <Container>
        <div className="service-inner-con position-relative information-inner-con dotted-img">
          <div className="genric-heading text-center ozellik-intro">
            <span className="ozellik-kicker d-inline-block">OmegaTree</span>
            <h2 className="position-relative">Hakkımızda</h2>
            <h3 className="h5 mt-2">Bilimin ışığında kişiselleştirilmiş sağlık çözümleri üretiyoruz</h3>
            <p className="mb-0">
              OmegaTree, metabolik sağlığı biyobelirteçler üzerinden bilimsel doğrulukla değerlendirmek ve kişiye özgü beslenme önerileri sunmak amacıyla geliştirilmiş yeni nesil bir sağlık teknolojisi platformudur. MAS-10® mikroörnekleme teknolojisini hedefli metabolomik analizlerle birleştirerek bireylerin biyolojik yaşlanma süreçlerini, inflamasyon düzeylerini ve beslenme kalitelerini objektif olarak ortaya koyuyoruz.
            </p>
            <p className="mb-0 mt-3">
              Amacımız; karmaşık metabolik verileri sade, anlaşılır ve uygulanabilir sağlık önerilerine dönüştürerek herkes için erişilebilir bir kişiselleştirilmiş sağlık yaklaşımı sunmaktır.
            </p>
            <h4 className="position-relative mt-4 mb-0 h5 hakkimizda-values-title">Bilimsel güvence ile sunulan hizmetler</h4>
          </div>
          <div className="service-box">
            <Row className="g-4 justify-content-center ozellik-grid">
              {items.map((item, i) => (
                <Col key={i} lg={3} md={6} sm={12}>
                  <div
                    className={`ozellik-card-outer h-100 ${inView ? 'ozellik-card-outer--in' : ''}`}
                    style={inView ? { '--ozellik-delay': `${0.06 + i * 0.09}s` } : undefined}
                  >
                    <div className="service-box-item position-relative ozellik-card h-100">
                      <span className="ozellik-card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <figure className="ozellik-card__icon mb-0">
                        <img src={IMG(icons[i % icons.length])} alt="" className="img-fluid" />
                      </figure>
                      <h4>
                        {item.title.split('\n').map((line, j) => (
                          <React.Fragment key={j}>
                            {line}
                            {j < item.title.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h4>
                      <p>{item.text}</p>
                      <div className="ozellik-card__cta">
                        <a href={`#${SECTION.contact}`}>Detaylı Bilgi <span className="fas fa-arrow-right" /></a>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
