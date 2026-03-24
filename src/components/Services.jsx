import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const icons = ['service-icon1.png', 'service-icon2.png', 'service-icon3.png']

const items = [
  { title: 'MAS-10®: Türkiye\'de Geliştirilen Klinik Doğrulukta Mikronörnekleme Teknolojisi', text: 'Sadece 10 µL sabit hacimli kan, hematokritten bağımsız olarak alınır ve oda sıcaklığında stabilize edilir. Bu teknoloji tamamen OmegaTree ekibine aittir ve her kullanıcıya evden klinik seviyede ölçüm imkânı sağlar.' },
  { title: 'Hedefli Metabolomik Analiz ile Derin Biyobelirteç Profili', text: 'MAS-10® ile alınan örnekler LC-MS/MS analizinden geçirilerek 44 amino asidi ve 28 yağ asidini içeren geniş bir metabolomik panel ölçülür.' },
  { title: 'AI Destekli Kişiye Özgü Besin Öneri Sistemi', text: 'OmegaTree\'nin yapay zekâ algoritması metabolomik sonuçlarınızı beslenme kayıtlarınızla bir araya getirerek kişisel besin önerileri üretir. Hangi besin gruplarını artırmanız gerektiğini bilimsel temelle belirler.' },
  { title: 'Kişisel Metabolik Sağlık Skorları', text: 'HEI, MEDAS, Dİİ, Omega-3/Omega-6 dengesi, biyolojik yaş gibi çok katmanlı skorlar tek bir raporda sizin için yorumlanır. Bu skorlar iyileşme takibi için standardize edilmiştir.' },
  { title: 'Uzmanlar İçin Klinik Düzeyde Raporlama', text: 'Diyetisyenler ve klinisyenler için tasarlanan profesyonel rapor, metabolik durumunuzu, risk faktörlerinizi ve önerileri açık, bilimsel ve yapılandırılmış biçimde sunar.' },
  { title: 'Yüksek Tekrarlanabilirlik ve Klinik Standartlara Uyum', text: 'OmegaTree analizleri; örnek hazırlama, ölçüm ve raporlama adımlarında uluslararası laboratuvar standartlarıyla uyumlu olarak yürütülür.' },
]

export default function Services() {
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
      className={`w-100 float-left service-con omegatree-features padding-bottom ${inView ? 'ozellik-section--visible' : ''}`}
      id="ozellikler"
    >
      <Container>
        <div className="service-inner-con position-relative dotted-img">
          <div className="genric-heading text-center ozellik-intro">
            <span className="ozellik-kicker d-inline-block">OmegaTree</span>
            <h2 className="position-relative">Özelliklerimiz</h2>
            <h3 className="h5 mt-2">Metabolik Sağlığın Biyobelirteç Temelli Değerlendirmesi</h3>
            <p className="mb-0">MAS-10® mikronörnekleme ve hedefli metabolomik analizleri bir araya getirerek metabolik sağlığınızı çok boyutlu ve ölçülebilir şekilde ortaya koyuyoruz.</p>
          </div>
          <div className="service-box">
            <Row className="g-4 justify-content-center ozellik-grid">
              {items.map((item, i) => (
                <Col key={i} lg={4} md={6} sm={12}>
                  <div
                    className={`ozellik-card-outer h-100 ${inView ? 'ozellik-card-outer--in' : ''}`}
                    style={inView ? { '--ozellik-delay': `${0.06 + i * 0.09}s` } : undefined}
                  >
                    <div className="service-box-item position-relative ozellik-card h-100">
                      <span className="ozellik-card__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <figure className="ozellik-card__icon mb-0">
                        <img src={IMG(icons[i % icons.length])} alt="" className="img-fluid" />
                      </figure>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <div className="ozellik-card__cta">
                        <a href="#iletisim">Detaylı Bilgi <span className="fas fa-arrow-right" /></a>
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
