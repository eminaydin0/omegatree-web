import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IMG } from '../utils/helpers'

export default function Footer() {
  const [email, setEmail] = useState('')
  return (
    <section className="w-100 float-left weight-footer-con" id="footer">
      <Container>
        <Row className="wow fadeInUp">
          <Col lg={4} className="col-12">
            <div className="weight-footer-item text-lg-left text-center">
              <figure><img src={IMG('logo-img.png')} alt="logo" className="img-fluid" /></figure>
              <p className="col-lg-11 pl-0 col-12 pr-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem por incididunt ut labore et dolore magn a aliquauis ipsum suspendisse ultrices gravidarisus commodo.</p>
              <div className="social-icon">
                <ul className="mb-0 pl-0">
                  <li className="d-inline-block"><a href="https://www.facebook.com/" className="pl-0"><span className="fab fa-facebook-f" /></a></li>
                  <li className="d-inline-block"><a href="https://www.google.com/"><span className="fab fa-google-plus-g" /></a></li>
                  <li className="d-inline-block"><a href="https://twitter.com/"><span className="fab fa-twitter" /></a></li>
                  <li className="d-inline-block"><a href="https://www.reddit.com/"><span className="fab fa-reddit-alien" /></a></li>
                  <li className="d-inline-block"><a href="https://www.pinterest.com/" className="pr-0"><span className="fab fa-pinterest-p" /></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={2} md={4} sm={4} className="col-6">
            <div className="weight-footer-item quick-item">
              <h5>Quick Links</h5>
              <ul className="mb-0 list-unstyled">
                <li><span className="fas fa-angle-right" /><a href="#">Home</a></li>
                <li><span className="fas fa-angle-right" /><a href="#services">About</a></li>
                <li><span className="fas fa-angle-right" /><a href="#services">Services</a></li>
                <li><span className="fas fa-angle-right" /><a href="#work">Portfolio</a></li>
                <li><span className="fas fa-angle-right" /><a href="#footer">Quote</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={4} className="col-12">
            <div className="weight-footer-item Contact-info-con text-sm-left text-center">
              <h5>Contact Info</h5>
              <ul className="mb-0 list-unstyled">
                <li><span className="d-block">Address:</span><p>121 King Street Melbourne,<br />3000, Australia</p></li>
                <li><span className="d-block">Email:</span><a href="mailto:support@dezvu.com">support@dezvu.com</a></li>
                <li><span className="d-block">Phone:</span><a href="tel:+123456789">+1 23 45 6789</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={4} sm={4} className="col-12">
            <div className="weight-footer-item newsletter-con text-sm-left text-center">
              <h5>Newsletter</h5>
              <ul className="mb-0 list-unstyled">
                <li><p>Stay always in touch! Subscribe to our newsletter.</p></li>
                <li className="text-sm-left text-center">
                  <input type="email" placeholder="Email " value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button type="button">Subscribe <span className="fas fa-arrow-right" /></button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-navbar">
          <ul className="list-unstyled d-inline-block mb-0">
            <li className="d-inline-block pl-0">Home</li>
            <li className="d-inline-block">Terms</li>
            <li className="d-inline-block">Privacy</li>
            <li className="d-inline-block">Company</li>
            <li className="d-inline-block pr-0">Support</li>
          </ul>
          <p className="d-inline-block float-lg-end mb-0">Copyright 2022 Dezvu.com All Rights Reserved</p>
        </div>
      </Container>
    </section>
  )
}
