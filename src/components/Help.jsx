import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

export default function Help() {
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
    <section ref={sectionRef} className="w-100 float-left padding-top padding-bottom help-con overflow" id="nasil-calisir">
      <Container>
        <div className="help-box-content">
          <Row>
            <Col lg={5} md={6}>
              <div
                className={`sloution-box-lft-content position-relative help-left-con ${animated ? 'animated slideInLeft' : 'banner-init-left'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <div className="client-details-box like-con">
                  <figure><img src={IMG('like-icon.png')} alt="" className="img-fluid" /></figure>
                  <p>Evde Örnekleme</p>
                </div>
                <div className="client-details-box designer-con">
                  <p>MAS-10®</p>
                  <figure className="mb-0 d-inline-block"><img src={IMG('designer-img.png')} alt="" className="img-fluid" /></figure>
                  <span>/10 µL</span>
                </div>
                <figure className="mb-0"><img src={IMG('help-left-img.png')} alt="help-left-img" className="img-fluid help-main-img" /></figure>
                <div className="client-details-box commetns-con">
                  <figure><img src={IMG('commetns-img.png')} alt="" className="img-fluid" /></figure>
                  <p>72 Biyobelirteç</p>
                </div>
              </div>
            </Col>
            <Col lg={7} md={6}>
              <div
                className={`sloution-box-right-content help-right-con ${animated ? 'animated slideInRight' : 'banner-init-right'}`}
                style={animated ? { animationDuration: '0.8s' } : undefined}
              >
                <figure><img src={IMG('help-right-icon.png')} alt="" className="img-fluid" /></figure>
                <h2><span className="position-relative">Adım Adım Süreç</span></h2>
                <p className="help-text"><strong>Adım 1 — Evde Kan Örneği Alın:</strong> MAS-10® kitiyle dakikalar içinde küçük bir kan örneği alarak bize gönderirsiniz. <strong>Adım 2 — Laboratuvar Analizi:</strong> Örneğiniz LC-MS/MS ve GC-MS platformunda hedefli metabolomik analizden geçer. <strong>Adım 3 — Entegrasyon:</strong> Biyobelirteçleriniz beslenme, uyku, yaşam tarzı ve antropometrik bilgilerinizle bir arada değerlendirilir.</p>
                <p className="help-text"><strong>Adım 4 — Kişisel Sağlık Raporunuz:</strong> Biyolojik yaş, inflamasyon, metabolik riskler, beslenme kalitesi ve yağ asidi dengesi net bir rapora dönüştürülür. <strong>Adım 5 — Beslenme ve Yaşam Tarzı Önerileri:</strong> Bulgularınıza göre bilim temelli, günlük hayatta uygulanabilir öneriler oluşturulur.</p>
                <div className="generic"><a href="#ozellikler">Özelliklere Göz Atın</a></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
