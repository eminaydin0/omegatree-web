import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const items = [
  { img: 'service-icon1.png', title: 'Grow Your Business', text: 'Donec quam felis ultricies necfhg pellentesque euvulputate.' },
  { img: 'service-icon2.png', title: 'Drive More Sales', text: 'Aenean commodo ligula eget dolo enean massaumsociis natoque.' },
  { img: 'service-icon3.png', title: 'Handled by Expert', text: 'Aenean commodo ligula eget dolo enean massaumsociis natoque.' },
]

export default function Services() {
  return (
    <section className="w-100 float-left service-con padding-bottom" id="services">
      <Container>
        <div className="service-inner-con position-relative dotted-img">
          <div className="genric-heading text-center">
            <h2 className="position-relative">What We Do</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid <br />idunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="service-box wow fadeInUp">
            <Row>
              {items.map((item, i) => (
                <Col key={i} lg={4} md={4} sm={6}>
                  <div className="service-box-item position-relative">
                    <figure><img src={IMG(item.img)} alt="" className="img-fluid" /></figure>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <a href="#footer">Learn More <span className="fas fa-arrow-right" /></a>
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
