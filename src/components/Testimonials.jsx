import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const slide = (
  <div className="testimonials-content">
    <figure>
      <img
        src={IMG('quote-icon.png')}
        alt="" className="img-fluid" />
    </figure>
    <h2>Danışanlarımızın <span>güveni</span></h2>
    <div className="testimonials-inner-content">
      <p className="col-lg-11 pl-0">OmegaTree ile metabolik sağlığınızı biyobelirteçler üzerinden objektif olarak takip edebilir; kişiselleştirilmiş beslenme ve yaşam tarzı önerileriyle iyileşme sürecinizi destekleyebilirsiniz. Sonuçlar bilimsel temele dayanır, raporlar uzmanlar için yapılandırılmıştır.</p>
      <h4 className="d-block auther-name">OmegaTree</h4>
      <span className="d-block">Bilim temelli metabolik değerlendirme</span>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <section className="w-100 float-left padding-top padding-bottom tastimonials-con position-relative overflow" id="testimonials">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <div className="tastimonials-left-con position-relative wow slideInLeft" data-wow-duration="0.8s">
              <figure className="mb-0">
                <img
                  src={IMG('tastimonials-img.png')}
                  alt="" className="img-fluid"
                />
              </figure>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="wow slideInRight" data-wow-duration="0.8s">
              <Carousel
                indicators={false}
                prevIcon=
                {
                  <span className="fas fa-arrow-left d-flex align-items-center  justify-content-center" />}
                nextIcon=
                {
                  <span className="fas fa-arrow-right d-flex align-items-center justify-content-center" />
                }
              >
                <Carousel.Item>{slide}</Carousel.Item>
                <Carousel.Item>{slide}</Carousel.Item>
                <Carousel.Item>{slide}</Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
