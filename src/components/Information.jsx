import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const items = [
  { title: 'Invest in Talent\nTeams', text: 'Donec quam felis ultricies necfhg pellentesque euvulputate.' },
  { title: 'In-sync with you\nworkflows', text: 'Aenean commodo ligula eget dolo enean massaumsociis natoque.' },
  { title: 'Build impact by\nour work', text: 'Aenean commodo ligula eget dolo enean massaumsociis natoque.' },
]

export default function Information() {
  return (
    <section className="w-100 float-left service-con padding-bottom padding-top information-con">
      <Container>
        <div className="service-inner-con position-relative information-inner-con dotted-img">
          <div className="genric-heading text-center">
            <h2 className="position-relative">To Get More Information</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid <br />idunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="service-box wow fadeInUp">
            <Row>
              {items.map((item, i) => (
                <Col key={i} lg={4} md={4} sm={6}>
                  <div className="service-box-item position-relative">
                    <h4>{item.title.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br /></React.Fragment>)}</h4>
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
