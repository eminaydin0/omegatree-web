import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const slide = (
  <div className="testimonials-content">
    <figure><img src={IMG('quote-icon.png')} alt="quote" className="img-fluid" /></figure>
    <h2>Trusted from our <span>clients</span></h2>
    <div className="testimonials-inner-content">
      <p className="col-lg-11 pl-0">In enim justo, rhoncus ut, imperdiet a, ven enatis vitae, justoullam dictum felis eu pede mollis pretium teger tinciduntras dapibu imperdiets Vivamus elem.</p>
      <h4 className="d-block auther-name">Samantha Harper</h4>
      <span className="d-block">CEO - Company</span>
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
              <figure className="mb-0"><img src={IMG('tastimonials-img.png')} alt="testimonials" className="img-fluid" /></figure>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="wow slideInRight" data-wow-duration="0.8s">
              <Carousel indicators={false} prevIcon={<span className="fas fa-arrow-left d-flex align-items-center justify-content-center" />} nextIcon={<span className="fas fa-arrow-right d-flex align-items-center justify-content-center" />}>
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
