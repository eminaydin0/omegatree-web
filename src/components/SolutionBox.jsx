import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const bullets = [
  'LC-MS/MS ve GC-MS ile detaylı beslenme analizleri; metabolomik panelden daha fazlasını klinik pratiğe taşırsınız.',
  'Kişiye özel beslenme müdahaleleriyle danışan sonuçlarını ve memnuniyetini güçlendirirsiniz.',
  'Kanıta dayalı beslenme ve fonksiyonel tıpta güvenilir, profesyonel bir iş birliği ile itibarınızı pekiştirirsiniz.',
  'Güncel araştırma ve araçlara erişimle eğitim ve araştırma tarafında güçlü kalırsınız.',
]

export default function SolutionBox() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="w-100 float-left sloution-box-con omegatree-solution padding-top padding-bottom overflow">
      <Container>
        <div className="sloution-box-content text-md-left text-center">
          <Row className="align-items-center gy-4 gy-lg-0">
            <Col lg={5} md={6}>
              <div
                className={`sloution-box-lft-content ${animated ? 'animated slideInLeft' : 'banner-init-left'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure className="mb-0"><img src={IMG('sloution-box-lft-img.png')} alt="MAS-10" /></figure>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div
                className={`sloution-box-right-content ${animated ? 'animated slideInRight' : 'banner-init-right'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure className="solution-icon-wrap mb-0"><img src={IMG('sloution-box-right-img.png')} alt="" className="img-fluid" /></figure>
                <p className="solution-label">Uzman ortaklığı</p>
                <h2 className="solution-heading">OmegaTree ile Uzmanlığınızı Güçlendirin</h2>
                <p className="solution-mas-line">Microscale Absorptive Sampling-10 (MAS-10®)</p>
                <p className="solution-lead col-lg-11 px-0 mx-md-0 mx-auto">
                  OmegaTree, klinik düzeyde metabolomik içgörüyü pratiğinize taşımanız için tasarlanmış bir iş birliği modeli sunar.
                </p>
                <ul className="solution-bullets col-lg-11 px-0 mx-md-0 mx-auto text-md-start text-center">
                  {bullets.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="generic"><a href="#iletisim">İletişime Geçin</a></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
