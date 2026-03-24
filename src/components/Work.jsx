import React, { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const items = [
  { n: 1, tag: 'Beslenme planı', title: 'Kişiye özgü besin önerileri' },
  { n: 2, tag: 'Metabolomik panel', title: 'Geniş biyobelirteç profili' },
  { n: 3, tag: 'Raporlama', title: 'Klinik düzeyde özet' },
  { n: 4, tag: 'Yaşam tarzı', title: 'Sürdürülebilir öneriler' },
]

export default function Work() {
  const [modalId, setModalId] = useState(null)
  return (
    <>
      <section className="w-100 float-left work-con padding-top padding-bottom" id="work">
        <Container>
          <div className="genric-heading text-center">
            <h2 className="position-relative">Beslenme ve Metabolik Sağlık</h2>
            <p className="mb-0">Metabolomik analiz sonuçları ile beslenme ve yaşam tarzı önerileriniz bir araya getirilir; günlük hayatta uygulanabilir, bilim temelli içerik sunulur.</p>
          </div>
          <div className="work-portfolio-box wow fadeInUp">
            <Row>
              {items.slice(0, 2).map(({ n, tag, title }) => (
                <Col key={n} lg={6} md={6}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalId(n); }}>
                    <div className="work-portfolio-box-item position-relative">
                      <figure className="mb-0"><img src={IMG(`work-portfolio-img${n}.png`)} alt="" className="img-fluid" /></figure>
                      <div className="work-portfolio-box-content">
                        <span className="d-block">{tag}</span>
                        <h3 className="mb-0">{title}</h3>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
            <Row>
              {items.slice(2, 4).map(({ n, tag, title }) => (
                <Col key={n} lg={6} md={6}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalId(n); }}>
                    <div className="work-portfolio-box-item position-relative">
                      <figure className="mb-0"><img src={IMG(`work-portfolio-img${n}.png`)} alt="" className="img-fluid" /></figure>
                      <div className="work-portfolio-box-content">
                        <span className="d-block">{tag}</span>
                        <h3 className="mb-0">{title}</h3>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      <Modal show={modalId !== null} onHide={() => setModalId(null)} centered>
        <Modal.Header closeButton />
        <Modal.Body className="service-model-content">
          {modalId && (
            <figure className="mb-0"><img src={IMG(`work-portfolio-img${modalId}.png`)} alt="" className="img-fluid" /></figure>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}
