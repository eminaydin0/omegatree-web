import React, { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

const items = [1, 2, 3, 4]

export default function Work() {
  const [modalId, setModalId] = useState(null)
  return (
    <>
      <section className="w-100 float-left work-con padding-top padding-bottom" id="work">
        <Container>
          <div className="genric-heading text-center">
            <h2 className="position-relative">Creative Work</h2>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid <br />idunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="work-portfolio-box wow fadeInUp">
            <Row>
              {items.slice(0, 2).map((n) => (
                <Col key={n} lg={6} md={6}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalId(n); }}>
                    <div className="work-portfolio-box-item position-relative">
                      <figure className="mb-0"><img src={IMG(`work-portfolio-img${n}.png`)} alt="portfolio" className="img-fluid" /></figure>
                      <div className="work-portfolio-box-content">
                        <span className="d-block">Branding, brochure</span>
                        <h3 className="mb-0">Creative Design</h3>
                      </div>
                    </div>
                  </a>
                </Col>
              ))}
            </Row>
            <Row>
              {items.slice(2, 4).map((n) => (
                <Col key={n} lg={6} md={6}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setModalId(n); }}>
                    <div className="work-portfolio-box-item position-relative">
                      <figure className="mb-0"><img src={IMG(`work-portfolio-img${n}.png`)} alt="portfolio" className="img-fluid" /></figure>
                      <div className="work-portfolio-box-content">
                        <span className="d-block">Branding, brochure</span>
                        <h3 className="mb-0">Creative Design</h3>
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
            <figure className="mb-0"><img src={IMG(`work-portfolio-img${modalId}.png`)} alt="portfolio" className="img-fluid" /></figure>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}
