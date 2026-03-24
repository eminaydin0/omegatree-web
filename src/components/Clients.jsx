import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'
import CountUp from './CountUp'

const highlights = [
  { img: 'service-icon1.png', name: 'Metabolomik Analiz' },
  { img: 'service-icon2.png', name: 'MAS-10® Örnekleme' },
  { img: 'service-icon3.png', name: 'Kişisel Rapor' },
  { img: 'diamond-icon.png', name: 'AI Önerileri' },
  { img: 'transforming-icon.png', name: 'Uzman İş Birliği' },
]

export default function Clients() {
  return (
    <section className="w-100 float-left padding-top padding-bottom client-con">
      <Container>
        <div className="position-relative dotted-img">
          <div className="genric-heading text-center">
            <h2 className="position-relative">OmegaTree Yaklaşımı</h2>
            <p className="mb-0">Bilimsel metabolomik değerlendirme ve kişiselleştirilmiş beslenme–yaşam tarzı planı ile metabolik sağlığınızı destekliyoruz.</p>
          </div>
          <div className="client-box w-100 float-left wow fadeInUp">
            <ul className="list-unstyled w-100 float-left mb-0">
              {highlights.map((c, i) => (
                <li key={i} className={i === 0 ? 'ml-0' : i === highlights.length - 1 ? 'mr-0' : ''}>
                  <div className="client-box-item text-center">
                    <figure><img src={IMG(c.img)} alt={c.name} className="img-fluid" /></figure>
                    <p className="mb-0">{c.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="static-con wow fadeInUp">
            <Row>
              <Col lg={3} md={6} sm={6} className="d-flex justify-content-center mb-4 mb-lg-0">
                <h2 className="d-inline-block count"><CountUp end={1000} /></h2>
                <h2 className="d-inline-block">+</h2>
                <p className="d-inline-block mb-0">Tamamlanan<br />Metabolomik Analiz</p>
              </Col>
              <Col lg={3} md={6} sm={6} className="d-flex justify-content-center mb-4 mb-lg-0">
                <h2 className="d-inline-block count"><CountUp end={72} /></h2>
                <p className="d-inline-block mb-0">Metabolomik<br />Biyobelirteç</p>
              </Col>
              <Col lg={3} md={6} sm={6} className="d-flex justify-content-center mb-4 mb-lg-0">
                <h2 className="d-inline-block count">%99.5</h2>
                <p className="d-inline-block mb-0">Mikroörneklemede<br />Güçlü Doğrusallık</p>
              </Col>
              <Col lg={3} md={6} sm={6} className="d-flex justify-content-center mb-4 mb-lg-0">
                <h2 className="d-inline-block count"><CountUp end={98} /></h2>
                <h2 className="d-inline-block">%</h2>
                <p className="d-inline-block mb-0">Kullanıcı<br />Memnuniyeti</p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}
